'use server';

import { db } from '@/db';
import { posts } from '@/db/schema/posts';
import { count, desc, sql } from 'drizzle-orm';

const EXPERIENCE_VALUES = ['Junior', 'Mid', 'Senior'] as const;
const JOB_TYPE_VALUES = ['Full time', 'Part-time', 'Freelance', 'Internship'] as const;
const WORK_TYPE_VALUES = ['On-site', 'Remote', 'Hybrid'] as const;

export const getFilterCategories = async () => {
  const jobTypes = await db
    .select({ type: posts.jobType, count: count() })
    .from(posts)
    .groupBy(posts.jobType)
    .orderBy(desc(sql`count(*)`));

  const workTypes = await db
    .select({ type: posts.workType, count: count() })
    .from(posts)
    .groupBy(posts.workType)
    .orderBy(desc(sql`count(*)`));

  const experiences = await db
    .select({ type: posts.experience, count: count() })
    .from(posts)
    .groupBy(posts.experience)
    .orderBy(desc(sql`count(*)`));

  const mergeAndSort = <T extends string>(
    allValues: readonly T[],
    results: { type: string; count: number }[]
  ) => {
    const merged = allValues.map(value => ({
      type: value,
      count: results.find(r => r.type === value)?.count ?? 0
    }));
    return merged.sort((a, b) => b.count - a.count); // sort by count desc
  };

  return {
    jobType: mergeAndSort(JOB_TYPE_VALUES, jobTypes),
    workType: mergeAndSort(WORK_TYPE_VALUES, workTypes),
    experience: mergeAndSort(EXPERIENCE_VALUES, experiences)
  };
};
