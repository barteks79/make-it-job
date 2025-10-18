import { Skeleton } from '@/components/ui/skeleton';

export function PostDetailsSkeleton() {
  return (
    <>
      <header className="flex items-center gap-5 py-5 px-3 border-b border-border/50">
        <Skeleton className="size-12" />

        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-1/2 h-4.5" />
          <Skeleton className="w-full h-14" />
        </div>
      </header>

      <section className="grid grid-cols-2 gap-y-4 place-content-between py-5 px-3 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="size-9" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-1 py-5 border-b border-border/50">
        <Skeleton className="h-5 w-64" />
        <Skeleton className="h-20 w-full" />
      </section>

      <section className="flex flex-col gap-3 py-5 border-b border-border/50">
        <Skeleton className="h-5 w-64" />
        <ul className="flex flex-col gap-1 list-disc">
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-8/12" />
          <Skeleton className="h-4 w-7/12" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-12/12" />
        </ul>
      </section>

      <section className="flex flex-col gap-3 py-5">
        <Skeleton className="h-5 w-64" />
        <ul className="flex flex-col gap-1 list-disc">
          <Skeleton className="h-4 w-8/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-12/12" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-7/12" />
          <Skeleton className="h-4 w-10/12" />
        </ul>
      </section>
    </>
  );
}
