import { unstable_cache } from 'next/cache';
import { client } from './client';

// low-level fetcher (not cached)
async function fetchImageUrl(path: string) {
  console.log(`Fetching IMAGE: ${path}`);
  const { data, error } = await client.storage.from('make-it-job').createSignedUrl(path, 3600);

  if (error) {
    console.log(error);
    return '/images/user-default1.jpg';
  }

  return data.signedUrl;
}

// wrapper that caches per path
export function getImageUrl(path: string) {
  return unstable_cache(() => fetchImageUrl(path), ['getImageUrl', path], { revalidate: 3600 })();
}
