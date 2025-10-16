'use client';

import { useState } from 'react';
import { useAccountsContext } from '@/store/accounts-context';

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
  const { accounts } = useAccountsContext();

  const hasPassword = accounts.some(account => account.providerId === 'credential');

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="min-w-48">
        {!hasPassword ? (
          <SetupPasswordDialog onSetupComplete={() => setIsOpen(false)}>
            <DropdownMenuItem
              className="justify-between cursor-pointer"
              onSelect={e => e.preventDefault()}
            >
              Setup
              <Wrench className="size-4" />
            </DropdownMenuItem>
          </SetupPasswordDialog>
        ) : undefined}

        <DropdownMenuItem className="justify-between cursor-pointer">
          Update Email
          <MailIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
