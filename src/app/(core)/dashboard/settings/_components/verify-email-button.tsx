'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

import { Button } from '@/components/ui/button';
import { VerifiedIcon } from 'lucide-react';

export function VerifyEmailButton({ userEmail }: { userEmail: string }) {
  const router = useRouter();

  const handleVerifyEmail = async () => {
    await authClient.sendVerificationEmail({
      email: userEmail,
      callbackURL: '/complete-profile'
    });

    router.push('/verify-email');
  };

  return (
    <Button
      onClick={handleVerifyEmail}
      type="button"
      className="cursor-pointer"
      variant="secondary"
    >
      <span>Verify Email</span>
      <VerifiedIcon />
    </Button>
  );
}
