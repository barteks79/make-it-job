'use server';

import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { companies } from '@/db/schema/companies';
import { eq } from 'drizzle-orm';

export const getPostsWithCompany = async () => {
  return db
    .select({ post: posts, company: { name: companies.name, image: companies.image } })
    .from(posts)
    .innerJoin(companies, eq(posts.companyId, companies.id));
};
