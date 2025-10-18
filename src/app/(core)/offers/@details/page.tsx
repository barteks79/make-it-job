import { Suspense } from 'react';

import { PostDetails } from './_components/post-details';
import { PostDetailsSkeleton } from './_components/post-details-skeleton';
import { PostNotSelected } from './_components/post-not-selected';

type SearchParams = Promise<{ job?: string }>;

export default async function DetailsView({ searchParams }: { searchParams: SearchParams }) {
  const { job: postId } = await searchParams;

  return postId ? (
    <Suspense key={postId} fallback={<PostDetailsSkeleton />}>
      <PostDetails postId={postId} />
    </Suspense>
  ) : (
    <PostNotSelected />
  );
}
