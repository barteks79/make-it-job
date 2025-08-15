import { getPostsWithCompany } from '@/db/queries/posts/get-posts';
import { getAppliedFilters } from '@/lib/filter';

import SortingSelect from './_components/sorting-select';
import JobPostCard from './_components/job-card/job-card';

type SearchParams = Promise<{ [key: string]: string }>;

export default async function JobPosts({ searchParams }: { searchParams: SearchParams }) {
  const appliedFilters = await getAppliedFilters(searchParams);
  const fetchedPosts = await getPostsWithCompany(appliedFilters);

  return (
    <section className="flex flex-col flex-1 pt-4 gap-3 md:gap-4">
      <div className="flex justify-between items-center px-5 md:px-7">
        <p className="text-sm md:text-base text-muted-foreground">
          Showing <span className="text-foreground font-semibold">{fetchedPosts.length}</span> jobs
          in total
        </p>
        <SortingSelect />
      </div>

      <div className="overflow-y-scroll flex-1 pb-4 px-5 md:pb-5 md:px-7">
        <ul className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-5 items-stretch">
          {fetchedPosts.map((post, idx) => (
            <li key={idx}>
              <JobPostCard post={post.post} company={post.company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
