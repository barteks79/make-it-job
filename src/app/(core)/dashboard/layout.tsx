import DashboardBreadcrumb from './dashboard-breadcrumb';
import DashboardSidebar from './_components/dashboard-sidebar';

export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <DashboardSidebar />
      <main className="flex flex-col flex-1 gap-4 px-10 py-6">
        <DashboardBreadcrumb />
        {children}
      </main>
    </div>
  );
}
