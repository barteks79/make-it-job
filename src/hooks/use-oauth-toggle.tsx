'use client';

import { useAccountsContext } from '@/store/accounts-context';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

type UseOAuthToggleProps = {
  provider: 'github' | 'google' | 'credential';
  accountId: string | undefined;
  onSuccess?: () => unknown;
  onError?: () => unknown;
};

export function useOAuthToggle({ provider, accountId, onSuccess, onError }: UseOAuthToggleProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { accounts } = useAccountsContext();
  const router = useRouter();

  async function handleConnect() {
    await authClient.linkSocial({
      provider,
      callbackURL: '/dashboard/settings',
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => {
          setIsLoading(false);
          onError?.();
        },
        onSuccess: () => {
          setIsLoading(false);
          onSuccess?.();
        }
      }
    });
  }

  async function handleDisconnect() {
    await authClient.unlinkAccount({
      providerId: provider,
      accountId,
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => {
          setIsLoading(false);
          onError?.();
        },
        onSuccess: () => {
          setIsLoading(false);
          onSuccess?.();
          router.refresh();
        }
      }
    });
  }

  // Disabled if loading or if there is only one account
  // Always enabled if there is no account id
  const isEnabled = !accountId || (!isLoading && accounts.length > 1);

  const handleToggle = accountId ? handleDisconnect : handleConnect;

  return { isLoading, handleToggle, isEnabled };
}
