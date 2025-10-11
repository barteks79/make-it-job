import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { ChangeEmailDialog } from './change-email-dialog';
import { ChangePasswordDialog } from './change-password-dialog';
import { InboxIcon, LockKeyholeIcon } from 'lucide-react';

import {
  GithubMethodCard,
  GoogleMethodCard,
  EmailPasswordMethodCard
} from './sign-in-method-cards';

export async function SettingsForm() {
  const nextHeaders = await headers();

  const data = await auth.api.getSession({ headers: nextHeaders });
  if (!data) unauthorized();

  const accounts = await auth.api.listUserAccounts({ headers: nextHeaders });

  const githubAccount = accounts.find(account => account.providerId === 'github');
  const googleAccount = accounts.find(account => account.providerId === 'google');

  return (
    <form className="space-y-4">
      <div className="space-y-1.5">
        <Label className="text-base">Email</Label>

        <div className="flex items-center gap-2">
          <Input value={data.user.email} disabled />
          <ChangeEmailDialog>
            <Button className="space-x-0.5 cursor-pointer" variant="secondary">
              <span>Change Email</span>
              <InboxIcon />
            </Button>
          </ChangeEmailDialog>
        </div>

        {data.user.emailVerified ? (
          <Badge className="bg-primary/25 text-primary font-normal cursor-default">Verified</Badge>
        ) : (
          <Badge className="bg-destructive/25 text-destructive font-normal cursor-default">
            Not verified
          </Badge>
        )}
      </div>

      <div className="space-y-1.5">
        <Label className="text-base">Password</Label>

        <div className="flex items-center gap-2">
          <Input disabled placeholder="********************" type="password" />
          <ChangePasswordDialog>
            <Button className="space-x-0.5 cursor-pointer" variant="secondary">
              <span>Change Password</span>
              <LockKeyholeIcon />
            </Button>
          </ChangePasswordDialog>
        </div>
      </div>

      <div className="space-y-2.5">
        <section className="space-y-0.5">
          <Label className="text-base">Sign-in Methods</Label>
          <p className="text-sm text-muted-foreground">
            Customize your sign-in methods for better security and time saving.
          </p>
        </section>

        <section className="border rounded-md">
          <EmailPasswordMethodCard email={data.user.email} />
          <GithubMethodCard accountId={githubAccount?.accountId} />
          <GoogleMethodCard accountId={googleAccount?.accountId} />
        </section>
      </div>
    </form>
  );
}
