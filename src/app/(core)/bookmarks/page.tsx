// import { auth } from '@/lib/auth';
// import { unauthorized } from 'next/navigation';
// import { headers } from 'next/headers';

import Searchbar from './_components/searchbar';
import OptionTabs from './_components/option-tabs';

export default async function BookmarksPage() {
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
      </div>
    </main>
  );
}
