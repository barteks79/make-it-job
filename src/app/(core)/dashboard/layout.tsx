import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';
import DashboardSidebar from './_components/dashboard-sidebar';

export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    unauthorized();
  }

  return (
    <div className="flex flex-1">
      <DashboardSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
