'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export function GoogleConnectButton({ accountId }: { accountId: string | undefined }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleConnect = async () => {
    await authClient.linkSocial({
      provider: 'google',
      callbackURL: '/dashboard/settings',
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => setIsLoading(false),
        onSuccess: () => setIsLoading(false)
      }
    });
  };

  const handleGoogleDisconnect = async () => {
    await authClient.unlinkAccount({
      providerId: 'google',
      accountId,
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => setIsLoading(false),
        onSuccess: () => {
          setIsLoading(false);
          router.refresh();
        }
      }
    });
  };

  return (
    <Button
      onClick={accountId ? handleGoogleDisconnect : handleGoogleConnect}
      disabled={isLoading}
      type="button"
      variant="secondary"
    >
      {accountId ? (
        isLoading ? (
          <>
            Disconnecting...
            <Spinner />
          </>
        ) : (
          'Disconnect'
        )
      ) : isLoading ? (
        <>
          Connecting...
          <Spinner />
        </>
      ) : (
        'Connect'
      )}
    </Button>
  );
}
