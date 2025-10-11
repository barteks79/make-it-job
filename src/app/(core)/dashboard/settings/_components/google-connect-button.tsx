'use client';

import { useOAuthToggle } from '@/hooks/use-oauth-toggle';

import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export function GoogleConnectButton({ accountId }: { accountId: string | undefined }) {
  const { isLoading, handleToggle } = useOAuthToggle({
    provider: 'google',
    accountId
  });

  return (
    <Button
      onClick={handleToggle}
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
