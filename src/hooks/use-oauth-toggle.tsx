'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

type UseOAuthToggleProps = {
  provider: 'github' | 'google';
  accountId: string | undefined;
};

export function useOAuthToggle({ provider, accountId }: UseOAuthToggleProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

  async function handleDisconnect() {
    if (!accountId) return;

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

  return { isLoading, handleToggle };
}
