import { SwitchAuthPage } from './_components/switch-auth-page';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SwitchAuthPage />
    </>
  );
}
