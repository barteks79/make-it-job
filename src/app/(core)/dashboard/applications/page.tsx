import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { auth } from '@/lib/auth';
import { getUserApplications } from '@/lib/application/get-applications';

import { ApplicationTabs } from './_components/application-tabs';
import { ApplicationsList } from './_components/applications-list';
import { ApplicationsEmptyState } from './_components/applications-empty-state';

type ApplicationsPageProps = {
  searchParams: Promise<{ status?: string }>;
};

const STATUS_LOOKUP = {
  pending: 'Pending',
  accepted: 'Accepted',
  rejected: 'Rejected'
} as const;

export default async function ApplicationsPage({ searchParams }: ApplicationsPageProps) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) unauthorized();

  const params = await searchParams;
  const queryStatus = params.status?.toLowerCase() as keyof typeof STATUS_LOOKUP | undefined;
  const statusFilter = queryStatus ? STATUS_LOOKUP[queryStatus] : undefined;

  const applications = await getUserApplications({
    userId: session.user.id,
    status: statusFilter
  });

  return (
    <div className="space-y-6 pb-8">
      <section className="space-y-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold tracking-tight">My applications</h1>
          <p className="text-muted-foreground text-base">Track your submitted job applications.</p>
        </div>
      </section>

      <ApplicationTabs />

      {applications.length === 0 ? (
        <ApplicationsEmptyState />
      ) : (
        <ApplicationsList applications={applications} />
      )}
    </div>
  );
}
