import { Suspense } from 'react';
import JobDetails, { PostDetailsFallback } from './job-details';

type SearchParams = Promise<{ job?: string }>;

export default async function DetailsView({ searchParams }: { searchParams: SearchParams }) {
  const { job: postId } = await searchParams;

  return (
    <div className="overflow-scroll h-full hidden xl:block border-l xl:w-1/3 xl:min-w-details-sm max-w-details-lg px-5">
      {postId ? (
        <Suspense key={postId} fallback={<PostDetailsFallback />}>
          <JobDetails postId={postId} />
        </Suspense>
      ) : (
        <div className="flex flex-col justify-center items-center gap-1 h-full w-3/4 mx-auto">
          <h4 className="text-xl font-semibold font-geist">No job offer was selected.</h4>
          <p className="text-center text-balance text-base text-muted-foreground tracking-tight">
            Please select a job offer by clicking the Details button on the job post.
          </p>
        </div>
      )}
    </div>
  );
}
