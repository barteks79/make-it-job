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
    cardClassName: 'py-4 mt-4'
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
    cardClassName: 'py-4'
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
    cardClassName: 'py-4 mt-3'
  }
];

export default function PricingPage() {
  return (
    <main className="overflow-y-auto h-full px-3">
      <div className="flex flex-col items-center h-full gap-5">
        <section className="flex flex-col gap-2 pt-5">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            Pricing plans
          </h2>
          <p className="text-base text-balance text-center sm:text-lg text-muted-foreground tracking-tight">
            One post for every user. Select the right plan for your needs.
          </p>
        </section>

        <section className="flex flex-wrap items-start gap-6 justify-center pb-5">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </section>
      </div>
    </main>
  );
}
