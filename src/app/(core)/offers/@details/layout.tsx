export default function DetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-scroll h-full hidden xl:block border-l xl:w-1/3 xl:min-w-details-sm max-w-details-lg px-5">
      {children}
    </div>
  );
}
