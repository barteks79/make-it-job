'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SwitchAuthPage() {
  const fullPathname = usePathname();
  const pathname: string = fullPathname.slice(1).split('?')[0];

  return (
    <p className="text-lg text-muted-foreground tracking-tight">
      {pathname === 'sign-in' ? (
        <>
          Don&apos;t have an account?{' '}
          <Link className="text-foreground font-medium" href="/sign-up">
            Sign Up
          </Link>
        </>
      ) : (
        <>
          Already have an account?{' '}
          <Link className="text-foreground font-medium" href="/sign-in">
            Sign In
          </Link>
        </>
      )}
    </p>
  );
}
