'use server';

import { db } from '@/db';
import { posts, companies } from '@/db/schema';
import { eq, sql, and, gte, lte } from 'drizzle-orm';

import { cacheLife, cacheTag } from 'next/cache';
import { arrayToClause, getSortClause, type Filters } from '@/lib/filter';
import { delay } from '@/lib/utils';

export async function getPostsWithCompany(filters: Filters) {
  'use cache';
  cacheLife('hours');
  cacheTag('posts');

  // Create the individual clauses for each filter
  const jobTypeClause = arrayToClause(filters.jobType, posts.jobType);
  const workTypeClause = arrayToClause(filters.workType, posts.workType);
  const experienceClause = arrayToClause(filters.experience, posts.experience);

  // Create clauses for annual salary if provided
  const minSalaryClause = filters.annualSalary?.min
    ? gte(posts.salary, filters.annualSalary.min)
    : sql`1 = 1`;

  const maxSalaryClause = filters.annualSalary?.max
    ? lte(posts.salary, filters.annualSalary.max)
    : sql`1 = 1`;

  // Create a clause for the post date if provided
  const postDateClause = filters.postDate ? gte(posts.createdAt, filters.postDate) : sql`1 = 1`;
  const orderOptions = getSortClause(filters.sort);

  const result = await db
    .select({ post: posts, company: { name: companies.name, image: companies.image } })
    .from(posts)
    .innerJoin(companies, eq(posts.companyId, companies.id))
    .where(
      and(
        jobTypeClause,
        workTypeClause,
        experienceClause,
        minSalaryClause,
        maxSalaryClause,
        postDateClause
      )
    )
    .orderBy(orderOptions);

  await delay(2000);

  return result;
}

export type PostsWithCompanyT = ReturnType<typeof getPostsWithCompany>;
