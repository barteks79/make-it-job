import { Suspense } from 'react';
import SortingSelect from './_components/sorting-select';
import PostsContainer, { PostsContainerSkeleton } from './_components/job-card/posts-container';
import { type FilterSearchParams } from '@/lib/filter';

export default function JobPosts({ searchParams }: { searchParams: FilterSearchParams }) {
  return (
    <section className="flex flex-col flex-1 pt-4 gap-3 md:gap-4">
      <div className="flex justify-between items-center px-5 md:px-7">
        <p className="text-sm md:text-base text-muted-foreground">
          Showing <span className="text-foreground font-semibold">0</span> jobs in total
        </p>

        <Suspense fallback={<p>Loading...</p>}>
          <SortingSelect />
        </Suspense>
      </div>

      <div className="overflow-y-scroll flex-1 pb-4 px-5 md:pb-5 md:px-7">
        <ul className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-5 items-stretch">
          <Suspense fallback={<PostsContainerSkeleton />}>
            <PostsContainer searchParams={searchParams} />
          </Suspense>
        </ul>
      </div>
    </section>
  );
}
