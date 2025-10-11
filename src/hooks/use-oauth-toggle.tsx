'use client';

import { useAccountsContext } from '@/store/accounts-context';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

type UseOAuthToggleProps = {
  provider: 'github' | 'google';
  accountId: string | undefined;
};

export function useOAuthToggle({ provider, accountId }: UseOAuthToggleProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { accounts } = useAccountsContext();
  const router = useRouter();

  async function handleConnect() {
    await authClient.linkSocial({
      provider,
      callbackURL: '/dashboard/settings',
      fetchOptions: {
        onRequest: () => setIsLoading(true),
        onError: () => setIsLoading(false),
        onSuccess: () => setIsLoading(false)
      }
    });
  }

  // Disabled if loading or if there is only one account
  // Always enabled if there is no account id
  const isEnabled = !accountId || (!isLoading && accounts.length > 1);

  async function handleDisconnect() {
    if (!accountId || accounts.length <= 1) return;

    await authClient.unlinkAccount({
      providerId: provider,
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
  }

  const handleToggle = accountId ? handleDisconnect : handleConnect;

  return { isLoading, handleToggle, isEnabled };
}
