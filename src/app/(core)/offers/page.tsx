import { Suspense } from 'react';
import { getPostsWithCompany } from '@/lib/post/get-posts';
import { getAppliedFilters, type FilterSearchParams } from '@/lib/filter';

import { SortingSelect } from './_components/sorting-select';
import { PostsContainer, PostsContainerSkeleton } from './_components/job-card/posts-container';
import { PostsCount } from './_components/job-card/posts-count';

export default async function JobPosts({ searchParams }: { searchParams: FilterSearchParams }) {
  const appliedFilters = await getAppliedFilters(searchParams);
  const postsPromise = getPostsWithCompany(appliedFilters);

  return (
    <section className="flex flex-col flex-1 pt-4 gap-3 md:gap-4">
      <div className="flex justify-between items-center px-5 md:px-7">
        <p className="text-sm md:text-base text-muted-foreground">
          Showing{' '}
          <span className="text-foreground font-semibold">
            <Suspense fallback={0}>
              <PostsCount postsPromise={postsPromise} />
            </Suspense>
          </span>{' '}
          jobs in total
        </p>

        <SortingSelect />
      </div>

      <div className="overflow-y-scroll flex-1 pb-4 px-5 md:pb-5 md:px-7">
        <ul className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-5 items-stretch">
          <Suspense fallback={<PostsContainerSkeleton />}>
            <PostsContainer postsPromise={postsPromise} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
}
