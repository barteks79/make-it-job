'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

export const setPassword = async ({ password }: { password: string }) => {
  const resolvedHeaders = await headers();

  const session = await auth.api.getSession({ headers: resolvedHeaders });
  if (!session) unauthorized();

  const { status } = await auth.api.setPassword({
    body: { newPassword: password },
    headers: resolvedHeaders
  });

  return status;
};
