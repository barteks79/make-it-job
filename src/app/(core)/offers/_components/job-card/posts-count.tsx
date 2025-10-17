import { type PostsWithCompanyT } from '@/lib/post/get-posts';

export default async function PostsCount({ postsPromise }: { postsPromise: PostsWithCompanyT }) {
  const posts = await postsPromise;
  return posts.length;
}
