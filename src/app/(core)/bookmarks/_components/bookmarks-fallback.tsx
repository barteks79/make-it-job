import { Skeleton } from '@/components/ui/skeleton';

export function BookmarksFallback() {
  return (
    <ul className="flex flex-col gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i}>
          <div className="flex justify-between px-2.5 py-2 border rounded">
            <div className="flex items-center gap-3.5">
              <Skeleton className="bg-gray-300 size-16 rounded" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="bg-gray-300 h-5 w-48" />
                <Skeleton className="bg-gray-300 h-4 w-64" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <Skeleton className="bg-gray-300 h-4 w-24" />
              <div className="flex gap-1">
                <Skeleton className="bg-gray-300 h-8 w-20" />
                <Skeleton className="bg-gray-300 size-8" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
