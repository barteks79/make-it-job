// import { auth } from '@/lib/auth';
// import { unauthorized } from 'next/navigation';
// import { headers } from 'next/headers';
import { Suspense } from 'react';
import { getUserBookmarks } from '@/db/queries/bookmarks/get-user-bookmarks';

import BookmarksContainer from './_components/bookmarks-container';
import Searchbar from './_components/searchbar';
import OptionTabs from './_components/order-tabs';

type SearchParams = { searchParams: Promise<{ q?: string; order?: 'recent' | 'latest' }> };

export default async function BookmarksPage({ searchParams }: SearchParams) {
  const { order, q } = await searchParams;

  // const bookmarks = getUserBookmarks({
  //   order: order || 'latest',
  //   query: q,
  //   userId: 'a58cfafe-87ec-4397-ad9e-fe522a50b010'
  // });

  // const session = await auth.api.getSession({
  //   headers: await headers()
  // });

  // if (!session) {
  //   unauthorized();
  // }

  return (
    <main className="mx-auto w-full max-w-5xl h-full pt-10 px-3">
      <div className="flex flex-col gap-3 h-full">
        <div className="flex items-center gap-3">
          <Searchbar className="flex-1" delay={1000} />
          <OptionTabs />
        </div>

        <ul className="flex flex-col gap-3">
          <Suspense fallback={<p>Loading...</p>}>
            <BookmarksContainer />
          </Suspense>
        </ul>
      </div>
    </main>
  );
}
