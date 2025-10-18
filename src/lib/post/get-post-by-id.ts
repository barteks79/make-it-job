'use server';

import { db } from '@/db';
import { posts, companies, type JobPost, type Company } from '@/db/schema';
import { eq } from 'drizzle-orm';

import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache';
import { delay } from '@/lib/utils';

export type JobPostWithCompany = {
  post: JobPost;
  company: Company;
};

export async function getPostById(postId: string): Promise<JobPostWithCompany | undefined> {
  'use cache';
  cacheLife('hours');
  cacheTag(`post:${postId}`);

  try {
    const [jobPost] = await db
      .select()
      .from(posts)
      .innerJoin(companies, eq(posts.companyId, companies.id))
      .where(eq(posts.id, postId));

    await delay(2000);

    return jobPost;
  } catch {
    return undefined;
  }
}
