import { type SessionUser } from '@/lib/auth';
import { type PostsWithCompanyT } from '@/db/queries/posts/get-posts';
import JobPostCard, { JobPostCardSkeleton } from './job-card';

export default async function PostsContainer({
  postsPromise,
  user
}: {
  postsPromise: PostsWithCompanyT;
  user: SessionUser | undefined;
}) {
  const posts = await postsPromise;

  return posts.map((post, idx) => (
    <li key={idx}>
      <JobPostCard userId={user?.id} post={post.post} company={post.company} />
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
