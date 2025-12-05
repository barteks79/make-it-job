import { type UserApplicationsResult } from '@/lib/application/get-applications';
import { createRelativeDate } from '@/lib/utils';

import CompanyLogo from '@/components/custom/company-logo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSignIcon, MonitorIcon, UserIcon } from 'lucide-react';

type ApplicationCardProps = {
  entry: UserApplicationsResult[number];
};

const STATUS_STYLES: Record<'Pending' | 'Accepted' | 'Rejected', { badge: string; label: string }> =
  {
    Pending: { badge: 'bg-yellow-50 text-yellow-700 border-yellow-200', label: 'pending' },
    Accepted: { badge: 'bg-green-50 text-green-700 border-green-200', label: 'accepted' },
    Rejected: {
      badge: 'bg-destructive/10 text-destructive border-destructive/20',
      label: 'rejected'
    }
  };

export function ApplicationCard({ entry }: ApplicationCardProps) {
  const { application, company, post } = entry;

  const formattedSalary = new Intl.NumberFormat('us-US', {
    style: 'decimal',
    maximumFractionDigits: 0
  }).format(post.salary);

  const relativeDate = createRelativeDate(new Date(application.createdAt));
  const badgeStyles = STATUS_STYLES[application.status];

  return (
    <article className="rounded-lg border bg-card shadow-xs">
      <div className="flex flex-col gap-4 p-4">
        <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <CompanyLogo className="size-10" image={company.image ?? null} alt={company.name} />

            <div className="space-y-0.5">
              <h2 className="text-base font-semibold text-foreground">{post.position}</h2>
              <p className="text-sm text-muted-foreground">{company.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm text-muted-foreground md:items-end">
            <p>applied {relativeDate}</p>
            <Badge
              className={`border px-3 py-1 text-xs font-medium capitalize ${badgeStyles.badge}`}
              variant="secondary"
            >
              {badgeStyles.label}
            </Badge>
          </div>
        </header>

        <dl className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <UserIcon className="size-4 text-secondary-foreground" />
            <span>{post.experience}</span>
          </div>

          <div className="flex items-center gap-2">
            <DollarSignIcon className="size-4 text-secondary-foreground" />
            <span>{formattedSalary}</span>
          </div>

          <div className="flex items-center gap-2">
            <MonitorIcon className="size-4 text-secondary-foreground" />
            <span>{post.jobType}</span>
          </div>
        </dl>

        <div className="flex justify-end">
          <Button variant="outline" size="sm" className="px-4">
            Contact
          </Button>
        </div>
      </div>
    </article>
  );
}
