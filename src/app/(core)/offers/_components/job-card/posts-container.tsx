import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import { type PostsWithCompanyT } from '@/lib/post/get-posts';
import { JobPostCard, JobPostCardSkeleton } from './job-card';

export async function PostsContainer({
  postsPromise
}: {
  postsPromise: PostsWithCompanyT;
}) {
  const data = await auth.api.getSession({ headers: await headers() });
  const posts = await postsPromise;

  return posts.map((post, idx) => (
    <li key={idx}>
      <JobPostCard userId={data?.user.id} post={post.post} company={post.company} />
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
