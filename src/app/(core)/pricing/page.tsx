import { PricingCard } from './pricing-card';

const pricingPlans = [
  {
    title: 'FREE',
    description: 'Default plan available for everyone. Recommanded for new users.',
    price: 0,
    priceSuffix: 'per month',
    features: [
      'Unlimited job applications',
      'One job offer to post',
      'Sorting mechanisms based on user preferences'
    ],
    buttonText: 'Current plan',
    isCurrentPlan: true,
    isNotAvailable: false,
    cardClassName: 'py-4 w-64 mt-4'
  },
  {
    title: 'BUSINESS',
    description:
      'Best for businesses and recruiters who need advanced hiring tools, data driven insights, and premium support to find top talent efficiently.',
    price: 15,
    priceSuffix: 'per month',
    includesSubtitle: 'Everything from the PREMIUM plan and...',
    features: ['100 posts per month', 'Access to analytics', 'Team collaboration tools'],
    buttonText: 'Not Available',
    isCurrentPlan: false,
    isNotAvailable: true,
    cardClassName: 'py-4 w-64'
  },
  {
    title: 'PREMIUM',
    description:
      'Recommended for professionals looking to maximize their job search efficiency with better tools and visibility.',
    price: 5,
    priceSuffix: 'per month',
    includesSubtitle: 'Everything from the FREE plan and...',
    features: ['10 posts per month', 'Priority customer support', 'Advanced job search filters'],
    buttonText: 'Not Available',
    isCurrentPlan: false,
    isNotAvailable: true,
    cardClassName: 'py-4 w-64 mt-3'
  }
];

export default function PricingPage() {
  return (
    <main className="flex flex-col justify-center items-center h-full gap-5 overflow-y-auto py-8">
      <section className="flex flex-col gap-2">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Pricing plans</h2>
        <p className="text-lg text-muted-foreground tracking-tight">
          One post for every user. Select the right plan for your needs.
        </p>
      </section>

      <section className="flex items-start gap-6 justify-between">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </section>
    </main>
  );
}
