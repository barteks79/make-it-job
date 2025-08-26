'use server';

import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { companies } from '@/db/schema/companies';

import { eq, type InferSelectModel } from 'drizzle-orm';
import { unstable_cache } from 'next/cache';

// import { delay } from '@/lib/utils';

export type JobPostWithCompany = {
  post: InferSelectModel<typeof posts>;
  company: InferSelectModel<typeof companies>;
};

export const getPostById = unstable_cache(
  async (postId: string): Promise<JobPostWithCompany | undefined> => {
    console.log(`Fetching SINGLE POST: ${postId}`);

    try {
      const [jobPost] = await db
        .select()
        .from(posts)
        .innerJoin(companies, eq(posts.companyId, companies.id))
        .where(eq(posts.id, postId));

      // await delay(2000);

      return jobPost;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },
  ['getPostById'],
  { revalidate: 3600 } // 1 hour
);
