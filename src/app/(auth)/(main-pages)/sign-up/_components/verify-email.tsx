'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

import { Button } from '@/components/ui/button';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const RESEND_COUNTDOWN = 120;

export function VerifyEmail() {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  const [otpCode, setOtpCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(RESEND_COUNTDOWN);

  useEffect(() => {
    if (!timeLeft || isPending) {
      return;
    }

    // User not logged in
    if (!data) {
      return router.push('/sign-up');
    }

    // User already verified
    if (data.user.emailVerified) {
      return router.push('/dashboard/settings');
    }

    const timer = setInterval(() => {
      setTimeLeft(previous => (previous > 0 ? previous - 1 : previous));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPending, data]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleResend() {
    setTimeLeft(RESEND_COUNTDOWN);
    setOtpCode('');
  }

  return (
    <>
      <section className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Enter the code</h1>
          <p className="text-base text-muted-foreground">
            We sent a verification code to{' '}
            <span className="font-medium text-foreground">{data?.user.email}</span>
          </p>
        </header>

        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center gap-6">
          <fieldset className="w-full">
            <legend className="sr-only">Verification code</legend>

            <InputOTP
              autoFocus
              maxLength={6}
              value={otpCode}
              onChange={setOtpCode}
              pattern={REGEXP_ONLY_DIGITS}
              containerClassName="w-full justify-center gap-3"
            >
              <InputOTPGroup className="justify-around w-full">
                {[0, 1, 2, 3, 4, 5].map(slot => (
                  <InputOTPSlot
                    key={slot}
                    index={slot}
                    className="size-14 rounded-xl border border-foreground/10 text-2xl font-semibold text-foreground shadow-none transition-colors data-[active=true]:border-primary data-[active=true]:ring-primary/40 data-[active=true]:ring-4"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </fieldset>

          <Button
            type="submit"
            className="h-12 w-full text-base font-semibold"
            disabled={otpCode.length !== 6}
          >
            Verify Code
          </Button>
        </form>

        <footer className="text-sm text-muted-foreground">
          {timeLeft > 0 ? (
            <p>
              Send again in{' '}
              <span className="font-semibold text-foreground">
                {minutes}:{seconds}
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Resend code
            </button>
          )}
        </footer>
      </section>
      <div></div>
    </>
  );
}
