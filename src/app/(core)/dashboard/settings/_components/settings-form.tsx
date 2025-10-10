'use client';

import { authClient } from '@/lib/auth/client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { SettingsFormSkeleton } from './skeletons';
import { InboxIcon, LockKeyholeIcon } from 'lucide-react';

export function SettingsForm() {
  const { data: auth, isPending } = authClient.useSession();

  if (isPending || !auth) {
    return <SettingsFormSkeleton />;
  }

  return (
    <form className="space-y-4">
      <div className="space-y-1.5">
        <Label className="text-base">Email</Label>

        <div className="flex items-center gap-2">
          <Input value={auth.user.email} disabled />
          <Button className="space-x-0.5 cursor-pointer" variant="secondary">
            <span>Change Email</span>
            <InboxIcon />
          </Button>
        </div>

        {auth.user.emailVerified ? (
          <Badge className="bg-destructive/25 text-destructive font-normal cursor-default">
            Not verified
          </Badge>
        ) : (
          <Badge className="bg-primary/25 text-primary font-normal cursor-default">Verified</Badge>
        )}
      </div>

      <div className="space-y-1.5">
        <Label className="text-base">Password</Label>

        <div className="flex items-center gap-2">
          <Input disabled placeholder="********************" type="password" />
          <Button className="space-x-0.5 cursor-pointer" variant="secondary">
            <span>Change Password</span>
            <LockKeyholeIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
