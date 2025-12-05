'use server';

import { db } from '@/db';
import { applications, type Application } from '@/db/schema';
import { and, eq } from 'drizzle-orm';
import { cacheTag, cacheLife } from 'next/cache';
import { type CreateApplicationT } from './create-application';

export const getApplication = async ({ postId, userId }: CreateApplicationT) => {
  'use cache';
  cacheTag(`application:${postId}:${userId}`);
  cacheLife('hours');

  const existingApplications = await db
    .select()
    .from(applications)
    .where(and(eq(applications.postId, postId), eq(applications.userId, userId)));

  return existingApplications[0] as Application | undefined;
};
