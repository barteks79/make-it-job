'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function PostDetailsNotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full w-3/4 mx-auto">
      <h4 className="text-xl font-semibold font-geist">No offer found.</h4>
      <p className="text-center text-balance text-base text-muted-foreground tracking-tight">
        The offer you are trying to select is no longer available in our service.
      </p>

      <Button
        variant="secondary"
        className="mt-3 px-8 cursor-pointer"
        onClick={() => router.back()}
      >
        Go Back
      </Button>
    </div>
  );
}
