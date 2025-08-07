import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MOCK_JOB_POSTS } from '@/data/mock/job-posts';

export default async function DetailsView({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const jobId = (await searchParams).job;
  const post = MOCK_JOB_POSTS.find(post => post.id === jobId);

  return (
    <div className="hidden xl:block border-l xl:w-1/3 xl:min-w-details-sm max-w-details-lg px-5">
      {post ? (
        <>
          <header className="flex items-center gap-2.5 py-5 border-b">
            <Avatar className="size-12 rounded">
              <AvatarImage src={post.image} alt={`${post.company} Logo`} />
              <AvatarFallback>{post.company} Logo</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h2 className="text-sm font-medium">{post.title}</h2>
              <p className="text-xs text-accent-foreground">{post.description}</p>
            </div>
          </header>

          <section className="grid grid-cols-2 place-content-between">
            <div></div>
          </section>
        </>
      ) : undefined}
    </div>
  );
}
