import { getIsBookmarked } from '@/lib/bookmark/get-is-bookmarked';

import { createRelativeDate } from '@/lib/utils';
import { type JobPost, type Company } from '@/db/schema';

import { DollarSignIcon, MonitorIcon, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import BookmarkButton from './bookmark-button';

import CompanyLogo from '@/components/custom/company-logo';
import JobTagBadge from './job-tag-badge';
import DetailsButton from './details-button';

import {
  Card,
  CardContent,
  CardAction,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter
} from '@/components/ui/card';

type JobPostCardProps = {
  userId: string | undefined;
  post: Omit<JobPost, 'companyId'>;
  company: Pick<Company, 'name' | 'image'>;
};

export default async function JobPostCard({ userId, post, company }: JobPostCardProps) {
  const isBookmarked = await getIsBookmarked(post.id, userId);

  return (
    <Card className="py-5 gap-4 h-full relative">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-muted-foreground">
            {createRelativeDate(new Date(post.createdAt))}
          </p>

          {userId ? (
            <CardAction>
              <BookmarkButton postId={post.id} isBookmarked={isBookmarked} />
            </CardAction>
          ) : undefined}
        </div>

        <figure className="flex items-center gap-3 border-b w-full pb-4">
          <CompanyLogo image={company.image} alt={`${company.name} Logo`} />

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
        <DetailsButton postId={post.id} />
        <Button className="cursor-pointer">Apply</Button>
      </CardFooter>
    </Card>
  );
}

export function JobPostCardSkeleton() {
  return (
    <Card className="py-5 gap-4 h-full relative animate-pulse bg-muted border-border/50 shadow-xs">
      <CardHeader className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <Skeleton className="w-36 h-4 rounded-md bg-muted-foreground/20" /> {/* date text */}
          <Skeleton className="size-7 rounded-md bg-muted-foreground/20" /> {/* bookmark button */}
        </div>

        <figure className="flex items-center gap-3 border-b border-border/50 w-full pb-4">
          <Skeleton className="size-9 rounded-md bg-muted-foreground/20" /> {/* company logo */}
          <figcaption className="flex flex-col justify-between h-full">
            <Skeleton className="w-36 h-4 rounded-md bg-muted-foreground/20" /> {/* job title */}
            <Skeleton className="w-24 h-4 rounded-md bg-muted-foreground/20" /> {/* company name */}
          </figcaption>
        </figure>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        <ul className="flex justify-between items-center">
          <li className="flex items-center gap-1">
            <Skeleton className="size-5 rounded-md bg-muted-foreground/20" /> {/* user icon */}
            <Skeleton className="w-16 h-5 rounded-md bg-muted-foreground/20" />{' '}
          </li>

          <li className="flex items-center gap-1">
            <Skeleton className="size-5 rounded-md bg-muted-foreground/20" /> {/* user icon */}
            <Skeleton className="w-16 h-5 rounded-md bg-muted-foreground/20" />{' '}
          </li>

          <li className="flex items-center gap-1">
            <Skeleton className="size-5 rounded-md bg-muted-foreground/20" /> {/* user icon */}
            <Skeleton className="w-16 h-5 rounded-md bg-muted-foreground/20" />{' '}
          </li>
        </ul>
        <Skeleton className="h-14 rounded-md bg-muted-foreground/20" /> {/* job description */}
        <ul className="flex gap-2 flex-wrap">
          <Skeleton className="h-4 w-16 rounded-md bg-muted-foreground/20" /> {/* job tags */}
          <Skeleton className="h-4 w-12 rounded-md bg-muted-foreground/20" />
          <Skeleton className="h-4 w-24 rounded-md bg-muted-foreground/20" />
          <Skeleton className="h-4 w-16 rounded-md bg-muted-foreground/20" />
          <Skeleton className="h-4 w-12.5 rounded-md bg-muted-foreground/20" />
          <Skeleton className="h-4 w-20 rounded-md bg-muted-foreground/20" />
          <Skeleton className="h-4 w-16 rounded-md bg-muted-foreground/20" />
        </ul>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2">
        <Skeleton className="flex-1 h-9 rounded-md bg-muted-foreground/20" />
        <Skeleton className="flex-1 h-9 rounded-md bg-muted-foreground/20" />
      </CardFooter>
    </Card>
  );
}
