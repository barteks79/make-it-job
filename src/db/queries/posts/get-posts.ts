'use server';

import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { companies } from '@/db/schema/companies';
import { eq, or, sql, and } from 'drizzle-orm';

import type { JobType, Experience, WorkType } from '@/types/job-post';

type Filters = {
  jobType: JobType[];
  workType: WorkType[];
  experience: Experience[];
};

type AllowedColumn = typeof posts.jobType | typeof posts.workType | typeof posts.experience;

export const getPostsWithCompany = async (filters: Filters) => {
  // If the filter array is empty, return a clause that is true
  const arrayToClause = (array: JobType[] | WorkType[] | Experience[], column: AllowedColumn) =>
    array.length ? or(...array.map(v => eq(column, v))) : sql`1 = 1`;

  // Create the individual clauses for each filter
  const jobTypeClause = arrayToClause(filters.jobType, posts.jobType);
  const workTypeClause = arrayToClause(filters.workType, posts.workType);
  const experienceClause = arrayToClause(filters.experience, posts.experience);

  return db
    .select({ post: posts, company: { name: companies.name, image: companies.image } })
    .from(posts)
    .innerJoin(companies, eq(posts.companyId, companies.id))
    .where(and(jobTypeClause, workTypeClause, experienceClause));
};
