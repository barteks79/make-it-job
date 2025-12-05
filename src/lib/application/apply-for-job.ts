'use server';

import { auth } from '@/lib/auth';
import { unauthorized } from 'next/navigation';
import { headers } from 'next/headers';
import { getApplication } from './get-application';
import { createApplication, type CreateApplicationT } from './create-application';

import { revalidateTag } from 'next/cache';

export const applyForJob = async ({ postId }: { postId: string }) => {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const userId = data.user.id;

  const existingApplication = await getApplication({ postId, userId });
  if (existingApplication) throw new Error('You already applied for this job.');

  await createApplication({ postId, userId });
  revalidateTag(`application:${postId}:${userId}`, 'max');
  revalidateTag(`applications:${userId}`, 'max');
};
