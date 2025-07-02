import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSignupRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
}

Deno.serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const { email, firstName, lastName, source = 'website' }: NewsletterSignupRequest = await req.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('id, status, email')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (checkError) {
      console.error('Error checking existing subscriber:', checkError);
      return new Response(
        JSON.stringify({ error: 'Database error occurred' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return new Response(
          JSON.stringify({ 
            message: 'You are already subscribed to our newsletter!',
            alreadySubscribed: true 
          }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabase
          .from('newsletter_subscribers')
          .update({
            status: 'active',
            first_name: firstName || existingSubscriber.first_name,
            last_name: lastName || existingSubscriber.last_name,
            source,
            subscribed_at: new Date().toISOString(),
            unsubscribed_at: null,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingSubscriber.id);

        if (updateError) {
          console.error('Error reactivating subscription:', updateError);
          return new Response(
            JSON.stringify({ error: 'Failed to reactivate subscription' }),
            { 
              status: 500, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        return new Response(
          JSON.stringify({ 
            message: 'Welcome back! Your subscription has been reactivated.',
            reactivated: true 
          }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Create new subscription
    const { data: newSubscriber, error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.toLowerCase(),
        first_name: firstName || null,
        last_name: lastName || null,
        source,
        status: 'active'
      })
      .select('id, email')
      .single();

    if (insertError) {
      console.error('Error creating subscription:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to subscribe to newsletter' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`New newsletter subscription: ${newSubscriber.email}`);

    return new Response(
      JSON.stringify({ 
        message: 'Successfully subscribed to our newsletter!',
        subscribed: true,
        subscriberId: newSubscriber.id
      }),
      { 
        status: 201, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}