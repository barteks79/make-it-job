'use client';

import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Wrench, MailIcon } from 'lucide-react';

import { SetupPasswordDialog } from './setup-password-dialog';

export function CredentialManageDropdown({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-48">
        <SetupPasswordDialog onSetupComplete={() => setIsOpen(false)}>
          <DropdownMenuItem
            className="justify-between cursor-pointer"
            onSelect={e => e.preventDefault()}
          >
            Setup
            <Wrench className="size-4" />
          </DropdownMenuItem>
        </SetupPasswordDialog>
        <DropdownMenuItem className="justify-between cursor-pointer">
          Update Email
          <MailIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
