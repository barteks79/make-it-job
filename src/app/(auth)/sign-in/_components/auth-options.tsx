import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export default function AuthOptions() {
  return (
    <div className="flex justify-between items-center tracking-tight">
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        Remember me
      </div>

      <Link href="/forgot-password" className="text-foreground/75 hover:text-foreground">
        Forgot Password
      </Link>
    </div>
  );
}
