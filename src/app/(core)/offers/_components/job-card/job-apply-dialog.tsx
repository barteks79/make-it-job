'use client';

import { useOptimistic, startTransition } from 'react';
import { type JobPost, type Company } from '@/db/schema';
import { applyForJob } from '@/lib/application/apply-for-job';

import CompanyLogo from '@/components/custom/company-logo';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DollarSignIcon, MonitorIcon, UserIcon } from 'lucide-react';

type JobApplyDialogProps = {
  isApplication: boolean;
  post: Omit<JobPost, 'companyId'>;
  company: Pick<Company, 'name' | 'image'>;
};

export function JobApplyDialog({ isApplication, post, company }: JobApplyDialogProps) {
  const [isApplied, setIsApplied] = useOptimistic<boolean>(isApplication);

  const handleApply = () => {
    startTransition(async () => {
      setIsApplied(true);
      await applyForJob({ postId: post.id });
    });
  };

  const formattedSalary = new Intl.NumberFormat('us-US', {
    style: 'decimal',
    maximumFractionDigits: 0
  }).format(post.salary);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={isApplied} className="cursor-pointer">
          {isApplied ? 'Applied' : 'Apply'}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader className="gap-4">
          <div className="flex items-start justify-between gap-3 border-b pb-4">
            <figure className="flex items-center gap-2">
              <CompanyLogo className="size-12" image={company.image} alt={`${company.name} logo`} />

              <figcaption className="flex flex-col">
                <DialogTitle className="text-lg h-6">{post.position}</DialogTitle>
                <DialogDescription className="text-base">{company.name}</DialogDescription>
              </figcaption>
            </figure>

            <Button onClick={handleApply} className="cursor-pointer">
              Apply
            </Button>
          </div>

          <section className="grid gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <UserIcon className="size-4 text-secondary-foreground" />
              <span>{post.experience}</span>
            </div>

            <div className="flex items-center gap-2">
              <DollarSignIcon className="size-4 text-secondary-foreground" />
              <span>{formattedSalary} / year</span>
            </div>

            <div className="flex items-center gap-2">
              <MonitorIcon className="size-4 text-secondary-foreground" />
              <span>{post.jobType}</span>
            </div>
          </section>
        </DialogHeader>

        <section className="space-y-3">
          <article className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">About the opportunity</h3>
            <p className="text-sm text-muted-foreground">{post.description}</p>
          </article>

          <article className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">Required skills</h3>
            <ul className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <li
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </DialogContent>
    </Dialog>
  );
}
