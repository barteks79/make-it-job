import { countDaysAgo } from '@/lib/date';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { JobType, WorkType, Experience } from '@/types/job-post';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createFilterQuery(searchParams: URLSearchParams, name: string, value?: string) {
  const newUrl = new URLSearchParams(searchParams);

  if (newUrl.has(name) && !value) {
    newUrl.delete(name);
  } else {
    newUrl.set(name, value ?? 'true');
  }

  return newUrl.toString();
}

export function createRelativeDate(date: Date) {
  const daysAgo = countDaysAgo(date);

  if (daysAgo === -1) return 'upcoming';
  if (daysAgo === 0) return 'today';
  if (daysAgo === 1) return '1 day ago';

  if (daysAgo > 1 && daysAgo < 7) {
    return `${daysAgo} days ago`;
  }

  if (daysAgo >= 7 && daysAgo < 14) {
    return 'week ago';
  }

  if (daysAgo >= 14 && daysAgo <= 30) {
    return `${Math.floor(daysAgo / 7)} weeks ago`;
  }

  return 'month ago';
}

export const getAppliedFilters = async (searchParams: Promise<{ [key: string]: string }>) => {
  const params = await searchParams;

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

  return { jobType, workType, experience };
};
