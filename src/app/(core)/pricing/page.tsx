import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="flex flex-col justify-center items-center h-full gap-5 overflow-y-auto py-8">
      <section className="flex flex-col gap-2">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Pricing plans</h2>
        <p className="text-lg text-muted-foreground tracking-tight">
          One post for every user. Select the right plan for your needs.
        </p>
      </section>

      <section className="flex justify-between">
        <Card className="py-4 w-64">
          <CardContent className="px-4">
            <CardTitle className="text-xl tracking-tight">FREE</CardTitle>
            <CardDescription>
              Default plan available for everyone. Recommanded for new users.
            </CardDescription>

            <span className="inline-block mt-3 text-4xl tracking-tight">
              $0 <span className="tracking-normal text-muted-foreground text-sm">per month</span>
            </span>

            <div className="flex flex-col gap-3 my-4">
              <label className="tracking-tight font-medium">Includes:</label>
              <ul className="flex flex-col gap-1 text-green-700">
                <li className="flex items-center gap-1 text-sm tracking-tight">
                  <CheckIcon className="size-4" />
                  Unlimited job applications
                </li>

                <li className="flex items-center gap-1 text-sm tracking-tight">
                  <CheckIcon className="size-4" />
                  One job offer to post
                </li>

                <li className="flex gap-1 text-sm tracking-tight">
                  <CheckIcon className="size-5.5" />
                  Sorting mechanisms based on user preferences
                </li>
              </ul>
            </div>

            <Button className="w-full h-8">Current plan</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
