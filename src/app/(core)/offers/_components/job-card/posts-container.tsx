import { getPostsWithCompany } from '@/db/queries/posts/get-posts';
import { getAppliedFilters, type FilterSearchParams } from '@/lib/filter';

import JobPostCard, { JobPostCardSkeleton } from './job-card';

export default async function PostsContainer({
  searchParams
}: {
  searchParams: FilterSearchParams;
}) {
  const appliedFilters = await getAppliedFilters(searchParams);
  const fetchedPosts = await getPostsWithCompany(appliedFilters);

  return fetchedPosts.map((post, idx) => (
    <li key={idx}>
      <JobPostCard post={post.post} company={post.company} />
    </li>
  ));
}

export function PostsContainerSkeleton() {
  return Array.from({ length: 6 }).map((_, idx) => (
    <li key={idx}>
      <JobPostCardSkeleton />
    </li>
  ));
}
