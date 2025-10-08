import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

type PricingCardProps = {
  title: string;
  description: string;
  price: number;
  priceSuffix: string;
  features: string[];
  buttonText: string;
  isCurrentPlan?: boolean;
  isNotAvailable?: boolean;
  includesSubtitle?: string;
  cardClassName?: string;
};

export function PricingCard({
  title,
  description,
  price,
  priceSuffix,
  features,
  buttonText,
  isCurrentPlan,
  isNotAvailable,
  includesSubtitle,
  cardClassName
}: PricingCardProps) {
  return (
    <Card className={cardClassName}>
      <CardContent className="px-4">
        <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <span className="inline-block mt-3 text-4xl tracking-tight">
          ${price}{' '}
          <span className="tracking-normal text-muted-foreground text-sm">{priceSuffix}</span>
        </span>

        <div className="flex flex-col gap-1 my-4">
          <label className="tracking-tight font-medium">Includes:</label>
          {includesSubtitle && (
            <p className="text-xs text-muted-foreground tracking-tight">{includesSubtitle}</p>
          )}
          <ul className="flex flex-col gap-1 mt-2 text-green-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1 text-sm tracking-tight">
                <CheckIcon className="size-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button
          disabled={isNotAvailable || isCurrentPlan}
          className={`w-full h-8 ${
            isNotAvailable
              ? 'bg-gray-500/90 hover:bg-gray-500 text-gray-700/90 opacity-90 transition-colors duration-75'
              : ''
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
