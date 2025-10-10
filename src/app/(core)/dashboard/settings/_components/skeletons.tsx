import { Skeleton } from '@/components/ui/skeleton';

export function SettingsFormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Skeleton className="h-6 w-16" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-44" />
        </div>
        <Skeleton className="h-5 w-18" />
      </div>

      <div className="space-y-1.5">
        <Skeleton className="h-6 w-20" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-60" />
        </div>
      </div>
    </div>
  );
}

export function AppearanceFormSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <article key={i} className="flex-1 flex flex-col items-center gap-2">
          <Skeleton className="w-full h-28 rounded-lg" />
          <Skeleton className="h-4 w-12" />
        </article>
      ))}
    </div>
  );
}
