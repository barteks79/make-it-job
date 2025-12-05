import 'server-only';

import { db } from '@/db';
import { applications, posts, companies } from '@/db/schema';
import { and, desc, eq } from 'drizzle-orm';
import { cacheLife, cacheTag } from 'next/cache';

export type ApplicationStatus = 'Pending' | 'Accepted' | 'Rejected';

export type GetUserApplicationsParams = {
  userId: string;
  status?: ApplicationStatus;
};

export async function getUserApplications({ userId, status }: GetUserApplicationsParams) {
  'use cache';
  cacheTag(`applications:${userId}`);
  cacheLife('hours');

  const filters = [eq(applications.userId, userId)];

  if (status) {
    filters.push(eq(applications.status, status));
  }

  const whereClause = filters.length > 1 ? and(...filters) : filters[0];

  return db
    .select({
      application: applications,
      post: posts,
      company: {
        name: companies.name,
        image: companies.image
      }
    })
    .from(applications)
    .innerJoin(posts, eq(applications.postId, posts.id))
    .innerJoin(companies, eq(posts.companyId, companies.id))
    .where(whereClause)
    .orderBy(desc(applications.createdAt));
}

export type UserApplicationsResult = Awaited<ReturnType<typeof getUserApplications>>;
