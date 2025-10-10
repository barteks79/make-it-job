'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function ChangeEmailDialog({ children }: React.PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-1">
          <DialogTitle className="text-xl">Change Email</DialogTitle>
          <DialogDescription className="text-base">
            Enter your new email address below.
          </DialogDescription>
        </DialogHeader>

        {/* Form will be added here */}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Change Email</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
