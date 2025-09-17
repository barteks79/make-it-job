import { unstable_cache } from 'next/cache';

// low-level fetcher (not cached)
async function fetchImageUrl(path: string) {
  console.log(`Fetching IMAGE: ${path}`);
  return '/images/user-default1.jpg';
}

// wrapper that caches per path
export function getImageUrl(path: string) {
  return unstable_cache(() => fetchImageUrl(path), ['getImageUrl', path], { revalidate: 3600 })();
}
