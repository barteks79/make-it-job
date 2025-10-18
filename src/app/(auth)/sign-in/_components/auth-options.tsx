'use client';

import { useSignInOptions } from '@/store/sign-in-options';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export function AuthOptions() {
  const { rememberMe, setRememberMe } = useSignInOptions();

  return (
    <div className="flex justify-between items-center tracking-tight">
      <div className="flex items-center gap-2">
        <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
        Remember me
      </div>

      <Link href="/forgot-password" className="text-foreground/75 hover:text-foreground">
        Forgot Password
      </Link>
    </div>
  );
}
