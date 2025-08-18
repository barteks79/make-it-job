import { type PostsWithCompanyT } from '@/db/queries/posts/get-posts';
import JobPostCard, { JobPostCardSkeleton } from './job-card';

export default async function PostsContainer({
  postsPromise
}: {
  postsPromise: PostsWithCompanyT;
}) {
  const posts = await postsPromise;

  return posts.map((post, idx) => (
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
