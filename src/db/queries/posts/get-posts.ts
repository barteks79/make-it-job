'use server';

import { unstable_cache } from 'next/cache';
import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { companies } from '@/db/schema/companies';
import { eq, sql, and, gte, lte } from 'drizzle-orm';

import { arrayToClause, getSortClause, type Filters } from '@/lib/filter';

// import { delay } from '@/lib/utils';

export const getPostsWithCompany = unstable_cache(
  async (filters: Filters) => {
    console.log('Fetching POSTS');

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

    // await delay(2000);
    
    return result;
  },
  ['getPostsWithCompany'],
  { revalidate: 3600 } // 1 hour
);

export type PostsWithCompanyT = ReturnType<typeof getPostsWithCompany>;
