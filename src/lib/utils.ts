import { countDaysAgo } from '@/lib/date';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
