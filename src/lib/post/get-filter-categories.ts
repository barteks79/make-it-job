'use server';

import { db } from '@/db';
import { posts } from '@/db/schema';
import { count, desc, sql } from 'drizzle-orm';
import { mergeAndSort, buildWhereClause, type Filters } from '@/lib/filter';

import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache';
import { delay } from '@/lib/utils';

const EXPERIENCE_VALUES = ['Junior', 'Mid', 'Senior'] as const;
const JOB_TYPE_VALUES = ['Full time', 'Part-time', 'Freelance', 'Internship'] as const;
const WORK_TYPE_VALUES = ['On-site', 'Remote', 'Hybrid'] as const;

export async function getFilterCategories(currentFilters: Filters) {
  'use cache';
  cacheLife('hours');
  cacheTag('filter-categories');

  const jobTypeWhere = buildWhereClause(currentFilters, { exclude: 'jobType' });
  const workTypeWhere = buildWhereClause(currentFilters, { exclude: 'workType' });
  const experienceWhere = buildWhereClause(currentFilters, { exclude: 'experience' });

  const jobTypes = await db
    .select({ type: posts.jobType, count: count() })
    .from(posts)
    .where(jobTypeWhere)
    .groupBy(posts.jobType)
    .orderBy(desc(sql`count(*)`));

  const workTypes = await db
    .select({ type: posts.workType, count: count() })
    .from(posts)
    .where(workTypeWhere)
    .groupBy(posts.workType)
    .orderBy(desc(sql`count(*)`));

  const experiences = await db
    .select({ type: posts.experience, count: count() })
    .from(posts)
    .where(experienceWhere)
    .groupBy(posts.experience)
    .orderBy(desc(sql`count(*)`));

  await delay(2000);

  return {
    jobType: mergeAndSort(JOB_TYPE_VALUES, jobTypes),
    workType: mergeAndSort(WORK_TYPE_VALUES, workTypes),
    experience: mergeAndSort(EXPERIENCE_VALUES, experiences)
  };
}

export type FilterCategoriesT = Awaited<ReturnType<typeof getFilterCategories>>;
