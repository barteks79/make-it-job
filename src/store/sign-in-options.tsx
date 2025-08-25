'use client';

import { useState, useContext, createContext, type PropsWithChildren } from 'react';

type SignInOptionsT = {
  rememberMe: boolean;
  setRememberMe: (checked: boolean) => void;
};

const SignInOptions = createContext<SignInOptionsT>({
  rememberMe: false,
  setRememberMe: () => {}
});

export function useSignInOptions() {
  const context = useContext(SignInOptions);
  if (!context) {
    throw new Error('useSignInOptions must be used within a SignInOptionsProvider');
  }
  return context;
}

export default function SignInOptionsProvider({ children }: PropsWithChildren) {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <SignInOptions.Provider value={{ rememberMe, setRememberMe }}>
      {children}
    </SignInOptions.Provider>
  );
}
