'use client';

import useOptimisticFilter from '@/hooks/use-optimistic-filter';
import { createRelativeDate, cn } from '@/lib/utils';
import { type JobPost } from '@/db/schema/posts';
import { type Company } from '@/db/schema/companies';

import { BookmarkIcon, DollarSignIcon, MonitorIcon, UserIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import JobTagBadge from './job-tag-badge';

import {
  Card,
  CardContent,
  CardAction,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter
} from '@/components/ui/card';

export default function JobPostCard({
  post,
  company
}: {
  post: Omit<JobPost, 'companyId'>;
  company: Pick<Company, 'name' | 'image'>;
}) {
  const [optimisticJobId, setOptimisticJobId] = useOptimisticFilter<string>('job', '');
  const isActive = optimisticJobId === post.id;

  return (
    <Card
      className={cn('py-5 gap-4 h-full relative', {
        'border-primary/15 dark:border-primary/20 bg-primary/1 dark:bg-primary/3 shadow-xs shadow-primary/10':
          isActive
      })}
    >
      <CardHeader className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-muted-foreground">{createRelativeDate(post.createdAt)}</p>

          <CardAction>
            <Button
              variant="outline"
              size="icon"
              className={cn('size-7 cursor-pointer', {
                'border-destructive/15 dark:bg-destructive/10 bg-destructive/10 hover:bg-destructive/15 hover:dark:bg-destructive/15':
                  true
              })}
            >
              <BookmarkIcon
                className={cn('pointer-events-none text-muted-foreground', {
                  'fill-destructive text-destructive': true
                })}
              />
            </Button>
          </CardAction>
        </div>

        <figure className="flex items-center gap-3 border-b w-full pb-4">
          <Avatar className="size-9 rounded-md">
            <AvatarImage src="/images/meta.png" alt={`${company.name} Logo`} />
            <AvatarFallback>{company.name} Logo</AvatarFallback>
          </Avatar>

          <figcaption className="flex flex-col justify-between">
            <CardTitle>{post.position}</CardTitle>
            <CardDescription>{company.name}</CardDescription>
          </figcaption>
        </figure>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        <ul className="flex justify-between items-center">
          <li className="flex items-center gap-1">
            <UserIcon className="size-4 text-secondary-foreground" />
            <p className="text-sm">{post.experience}</p>
          </li>

          <li className="flex items-center gap-1">
            <DollarSignIcon className="size-4 text-secondary-foreground" />
            <p className="text-sm">
              {new Intl.NumberFormat('us-US', {
                style: 'decimal',
                maximumFractionDigits: 0
              }).format(post.salary)}
            </p>
          </li>

          <li className="flex items-center gap-1">
            <MonitorIcon className="size-4 text-secondary-foreground" />
            <p className="text-sm">{post.jobType}</p>
          </li>
        </ul>

        <p className="text-muted-foreground text-sm border-b pb-4">{post.description}</p>

        <ul className="flex gap-2 flex-wrap">
          {post.tags.map((tag, idx) => (
            <JobTagBadge key={idx}>{tag}</JobTagBadge>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <Button
          onClick={() => setOptimisticJobId(post.id)}
          className="cursor-pointer"
          variant="outline"
        >
          Details
        </Button>
        <Button className="cursor-pointer">Apply</Button>
      </CardFooter>
    </Card>
  );
}
