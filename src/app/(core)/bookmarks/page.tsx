import { auth } from '@/lib/auth';
import { unauthorized } from 'next/navigation';
import { headers } from 'next/headers';

import { Suspense } from 'react';
import { getUserBookmarks } from '@/lib/bookmark/get-user-bookmarks';

import { BookmarksFallback } from './_components/bookmarks-fallback';
import { BookmarksContainer } from './_components/bookmarks-container';
import { Searchbar } from './_components/searchbar';
import { OptionTabs } from './_components/order-tabs';

type BookmarksProps = { searchParams: Promise<{ order?: 'recent' | 'latest'; q?: string }> };

export default async function BookmarksPage({ searchParams }: BookmarksProps) {
  const data = await auth.api.getSession({ headers: await headers() });
  if (!data) unauthorized();

  const search = await searchParams;

  // Default order is 'latest'
  let order: 'recent' | 'latest' = 'latest';
  if (search.order === 'recent') {
    order = 'recent';
  }

  const bookmarks = getUserBookmarks({ userId: data.user.id, order });

  return (
    <main className="mx-auto w-full max-w-5xl h-full pt-10 px-3">
      <div className="flex flex-col gap-3 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-3">
          <OptionTabs />
          <Searchbar placeholder="Search bookmarks..." className="flex-1 py-1" delay={500} />
        </div>

        <Suspense fallback={<BookmarksFallback />}>
          <BookmarksContainer query={search.q} bookmarks={bookmarks} />
        </Suspense>
      </div>
    </main>
  );
}
