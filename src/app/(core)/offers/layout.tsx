import { FiltersHeader } from './_components/filters-header';

export default function OffersLayout({
  children,
  details,
  filters
}: {
  children: React.ReactNode;
  details: React.ReactNode;
  filters: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 overflow-hidden">
      {filters}
      <div className="flex flex-col flex-1 overflow-hidden">
        <FiltersHeader />
        <div className="flex flex-1 min-h-0">
          {children}
          {details}
        </div>
      </div>
    </main>
  );
}
