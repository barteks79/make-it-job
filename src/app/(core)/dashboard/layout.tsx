// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';
// import { unauthorized } from 'next/navigation';

import DashboardBreadcrumb from './dashboard-breadcrumb';
import DashboardSidebar from './_components/dashboard-sidebar';

export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  // const session = await auth.api.getSession({
  //   headers: await headers()
  // });

  // if (!session) {
  //   unauthorized();
  // }

  return (
    <div className="flex flex-1">
      <DashboardSidebar />
      <main className="flex flex-col flex-1 gap-8 px-10 py-6">
        <DashboardBreadcrumb />
        {children}
      </main>
    </div>
  );
}
