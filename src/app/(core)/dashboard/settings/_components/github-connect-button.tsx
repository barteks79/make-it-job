'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export function GithubConnectButton({ accountId }: { accountId: string | undefined }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubConnect = async () => {
    await authClient.linkSocial({
      provider: 'github',
      callbackURL: '/dashboard/settings',
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => setIsLoading(false),
        onSuccess: () => setIsLoading(false)
      }
    });
  };

  const handleGithubDisconnect = async () => {
    await authClient.unlinkAccount({
      providerId: 'github',
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
      onClick={accountId ? handleGithubDisconnect : handleGithubConnect}
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
