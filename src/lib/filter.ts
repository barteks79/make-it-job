import { posts } from '@/db/schema';
import { inArray, gte, sql, lte, and, eq, or, desc, asc, type SQL } from 'drizzle-orm';
import type { JobType, Experience, WorkType } from '@/types/job-post';

export type Filters = {
  jobType: JobType[];
  workType: WorkType[];
  experience: Experience[];
  annualSalary?: { min?: number; max?: number };
  postDate: Date | null;
  sort: 'relevance' | 'latest' | 'high-low' | 'low-high';
};

export type FilterSearchParams = Promise<{
  ['full-time']?: string;
  ['part-time']?: string;
  internship?: string;
  freelance?: string;
  ['on-site']?: string;
  remote?: string;
  hybrid?: string;
  junior?: string;
  mid?: string;
  senior?: string;
  date?: string;
  ['salary-min']?: string;
  ['salary-max']?: string;
  sort?: 'relevance' | 'latest' | 'high-low' | 'low-high';
}>;

// If the filter array is empty, return a clause that is true
export const arrayToClause = (
  array: JobType[] | WorkType[] | Experience[],
  column: typeof posts.jobType | typeof posts.workType | typeof posts.experience
) => (array.length ? or(...array.map(v => eq(column, v))) : sql`1 = 1`);

// Merges database counts with all possible filter values, showing 0 for options with no results.
export const mergeAndSort = <T extends string>(
  allValues: readonly T[],
  results: { type: string; count: number }[]
) => {
  const merged = allValues.map(value => ({
    type: value,
    count: results.find(r => r.type === value)?.count ?? 0
  }));

  return merged.sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    // Sorts alphabetically by type
    return a.type.localeCompare(b.type);
  });
};

// Dynamically constructs a SQL WHERE clause from active filters, optionally excluding a category.
export const buildWhereClause = (
  filters: Filters,
  options?: { exclude?: 'jobType' | 'workType' | 'experience' }
): SQL | undefined => {
  const conditions: SQL[] = [];

  // Apply jobType filter if it's not excluded and has values
  if (options?.exclude !== 'jobType' && filters.jobType.length > 0) {
    conditions.push(inArray(posts.jobType, filters.jobType));
  }

  // Apply workType filter if it's not excluded and has values
  if (options?.exclude !== 'workType' && filters.workType.length > 0) {
    conditions.push(inArray(posts.workType, filters.workType));
  }

  // Apply experience filter if it's not excluded and has values
  if (options?.exclude !== 'experience' && filters.experience.length > 0) {
    conditions.push(inArray(posts.experience, filters.experience));
  }

  if (filters.annualSalary?.min) {
    conditions.push(gte(posts.salary, filters.annualSalary.min));
  }

  if (filters.annualSalary?.max) {
    conditions.push(lte(posts.salary, filters.annualSalary.max));
  }

  if (filters.postDate) {
    conditions.push(gte(posts.createdAt, filters.postDate));
  }

  // Combine all conditions with AND
  return conditions.length > 0 ? and(...conditions) : undefined;
};

// Get currently applied filters from searchParams and returns it as a Filters object
export const getAppliedFilters = async (searchParams: FilterSearchParams): Promise<Filters> => {
  const params = await searchParams;
  const ONE_DAY = 24 * 60 * 60 * 1000;

  let postDate: Date | null = null;
  if (params['date']) {
    if (params['date'] === '3days') {
      postDate = new Date(Date.now() - 3 * ONE_DAY);
    }
    if (params['date'] === 'week') {
      postDate = new Date(Date.now() - 7 * ONE_DAY);
    }
    if (params['date'] === 'month') {
      postDate = new Date(Date.now() - 30 * ONE_DAY);
    }
  }

  const sort = params['sort'] ?? 'latest';

  const annualSalary: { min?: number; max?: number } = {};
  if (params['salary-min']) annualSalary.min = Number(params['salary-min']);
  if (params['salary-max']) annualSalary.max = Number(params['salary-max']);

  const jobType: JobType[] = [];
  if (params['full-time']) jobType.push('Full time');
  if (params['part-time']) jobType.push('Part-time');
  if (params['internship']) jobType.push('Internship');
  if (params['freelance']) jobType.push('Freelance');

  const workType: WorkType[] = [];
  if (params['on-site']) workType.push('On-site');
  if (params['remote']) workType.push('Remote');
  if (params['hybrid']) workType.push('Hybrid');

  const experience: Experience[] = [];
  if (params['junior']) experience.push('Junior');
  if (params['mid']) experience.push('Mid');
  if (params['senior']) experience.push('Senior');

  return { annualSalary, jobType, workType, experience, postDate, sort };
};

export const getSortClause = (sort: Filters['sort']): SQL => {
  if (sort === 'high-low') {
    return desc(posts.salary);
  }
  if (sort === 'low-high') {
    return asc(posts.salary);
  }
  // Latest by default
  return desc(posts.createdAt);
};
