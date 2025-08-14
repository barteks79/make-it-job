export default function FilterGroup({
  label,
  children
}: {
  label: 'Job Type' | 'Work Type' | 'Experience' | 'Post Date' | 'Annual Salary';
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 pt-4 pb-6 border-b last:border-none">
      <label className="font-medium text-sm">{label}</label>
      {children}
    </div>
  );
}
