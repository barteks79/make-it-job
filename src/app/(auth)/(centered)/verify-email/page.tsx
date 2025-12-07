import { MailCheck } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function VerifyEmailPage() {
  return (
    <article className="flex max-w-lg flex-col items-center gap-8 text-center">
      <div className="rounded-full border border-primary/20 bg-primary/10 p-6 text-primary">
        <MailCheck className="size-10" aria-hidden />
      </div>

      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Verify your email
        </p>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Check your inbox</h1>
          <p className="text-base text-muted-foreground">
            We just sent a verification link to your inbox. Click the URL in that email to verify
            your account.
          </p>
        </div>
      </header>

      <Button asChild className="h-12 px-10 text-base font-semibold">
        <Link href="/dashboard/settings">Skip verification for now</Link>
      </Button>
    </article>
  );
}
