import { type PostsWithCompanyT } from '@/db/queries/posts/get-posts';

export default async function PostsCount({ postsPromise }: { postsPromise: PostsWithCompanyT }) {
  const posts = await postsPromise;
  return posts.length;
}
