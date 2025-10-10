import { Skeleton } from '@/components/ui/skeleton';

export function SettingsFormSkeleton() {
  return (
    <div className="max-w-96 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-32" />
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
