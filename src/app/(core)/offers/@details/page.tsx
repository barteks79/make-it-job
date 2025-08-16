import { getPostById } from '@/db/queries/posts/get-post-by-id';
import JobDetails from './JobDetails';

type SearchParams = Promise<{ job?: string }>;

export default async function DetailsView({ searchParams }: { searchParams: SearchParams }) {
  const { job: postId } = await searchParams;
  const job = postId ? await getPostById(postId) : undefined;

  return (
    <div className="overflow-scroll h-full hidden xl:block border-l xl:w-1/3 xl:min-w-details-sm max-w-details-lg px-5">
      {job ? <JobDetails job={job} /> : <p>No offer selected.</p>}
    </div>
  );
}
