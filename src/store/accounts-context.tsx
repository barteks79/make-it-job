'use client';

import { useContext, createContext } from 'react';
import { auth } from '@/lib/auth';

type Accounts = Awaited<ReturnType<typeof auth.api.listUserAccounts>>;
type AccountsContextT = { accounts: Accounts };

const AccountsContext = createContext<AccountsContextT>({
  accounts: []
});

export function useAccountsContext() {
  const context = useContext(AccountsContext);

  if (!context) {
    throw new Error('useAccountsContext must be used within an AccountsContextProvider');
  }

  return context;
}

export function AccountsContextProvider({
  accounts,
  children
}: {
  accounts: Accounts;
  children: React.ReactNode;
}) {
  return <AccountsContext.Provider value={{ accounts }}>{children}</AccountsContext.Provider>;
}
