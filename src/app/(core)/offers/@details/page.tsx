import { MOCK_JOB_POSTS } from '@/data/mock/job-posts';
import JobDetails from './JobDetails';

export default async function DetailsView({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const jobId = (await searchParams).job;
  const post = jobId ? MOCK_JOB_POSTS.find(post => post.id === jobId) : undefined;

  return (
    <div className="overflow-scroll h-full hidden xl:block border-l xl:w-1/3 xl:min-w-details-sm max-w-details-lg px-5">
      {post ? <JobDetails post={post} /> : <p>No offer selected.</p>}
    </div>
  );
}
