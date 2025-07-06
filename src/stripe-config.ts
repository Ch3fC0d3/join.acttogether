export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_organize_monthly', // You'll need to update this with actual Stripe price ID
    name: 'Organize',
    description: 'Local chapters, student groups - $19/month',
    mode: 'subscription'
  },
  {
    priceId: 'price_resist_monthly', // You'll need to update this with actual Stripe price ID
    name: 'Resist+',
    description: 'State orgs, growing networks - $39/month',
    mode: 'subscription'
  }
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};