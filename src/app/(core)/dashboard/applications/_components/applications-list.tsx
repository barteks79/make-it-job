import { ApplicationCard } from './application-card';
import type { UserApplicationsResult } from '@/lib/application/get-applications';

type ApplicationsListProps = {
  applications: UserApplicationsResult;
};

export function ApplicationsList({ applications }: ApplicationsListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {applications.map(application => (
        <li key={application.application.id}>
          <ApplicationCard entry={application} />
        </li>
      ))}
    </ul>
  );
}
