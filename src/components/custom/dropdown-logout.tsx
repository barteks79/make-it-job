'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LogOutIcon } from 'lucide-react';

export default function DropdownLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        }
      }
    });
  };

  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOutIcon />
      Logout
    </DropdownMenuItem>
  );
}
