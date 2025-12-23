'use client';

import { useAccountsContext } from '@/store/accounts-context';

import { SetupPasswordDialog } from './setup-password-dialog';
import { RemoveMethodAlertDialog } from './remove-method-alert-dialog';
import { Button } from '@/components/ui/button';

export function CredentialManageDropdown() {
  const { accounts } = useAccountsContext();
  const account = accounts.find(account => account.providerId === 'credential');

  return account ? (
    <RemoveMethodAlertDialog accountId={account.accountId}>
      <Button type="button" variant="secondary">
        Remove
      </Button>
    </RemoveMethodAlertDialog>
  ) : (
    <SetupPasswordDialog>
      <Button type="button" variant="secondary">
        Setup
      </Button>
    </SetupPasswordDialog>
  );
}
