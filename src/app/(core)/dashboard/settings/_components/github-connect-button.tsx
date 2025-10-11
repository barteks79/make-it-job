'use client';

import { useOAuthToggle } from '@/hooks/use-oauth-toggle';

import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

export function GithubConnectButton({ accountId }: { accountId: string | undefined }) {
  const { handleToggle, isLoading, isEnabled } = useOAuthToggle({
    provider: 'github',
    accountId
  });

  return (
    <Button onClick={handleToggle} disabled={!isEnabled} type="button" variant="secondary">
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
