import { BriefcaseBusiness } from 'lucide-react';

export function ApplicationsEmptyState() {
  return (
    <article className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-muted-foreground/30 bg-card/50 py-16 text-center text-muted-foreground">
      <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <BriefcaseBusiness className="size-5" />
      </div>
      <div className="space-y-1">
        <p className="text-base font-medium text-foreground">No applications yet</p>
        <p className="text-sm">
          When you apply for a role, it will appear here so you can keep track of the status.
        </p>
      </div>
    </article>
  );
}
