import { Button } from '@/components/ui/button';
import { CheckIcon, XIcon, MailIcon } from 'lucide-react';

import { GithubLogo, GoogleIcon } from '@/app/(auth)/sign-in/_components/auth-icons';
import { GoogleConnectButton } from './google-connect-button';
import { GithubConnectButton } from './github-connect-button';

export function EmailPasswordMethodCard({ email }: { email: string }) {
  return (
    <div className="flex items-center justify-between py-4 px-5">
      <div className="flex items-center gap-4">
        <MailIcon className="size-5" />
        <div className="flex flex-col">
          <span className="text-sm font-medium space-x-1.5">
            <span className="inline-flex items-center gap-0.5 text-green-600">
              Email
              <CheckIcon className="size-4" />
            </span>
            <span className="inline-flex items-center gap-0.5 text-destructive">
              Password
              <XIcon className="size-4" />
            </span>
          </span>
          <span className="text-sm text-muted-foreground">{email}</span>
        </div>
      </div>

      <Button type="button" variant="outline">
        Manage
      </Button>
    </div>
  );
}

export function GithubMethodCard({ accountId }: { accountId: string | undefined }) {
  return (
    <div className="flex items-center justify-between py-4 px-5 border-y">
      <div className="flex items-center gap-4">
        <GithubLogo className="size-5" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">GitHub</span>
          <span className="text-sm text-muted-foreground">
            {accountId ? 'Connected' : 'Connect your Github account'}
          </span>
        </div>
      </div>

      <GithubConnectButton accountId={accountId} />
    </div>
  );
}

export function GoogleMethodCard({ accountId }: { accountId: string | undefined }) {
  return (
    <div className="flex items-center justify-between py-4 px-5">
      <div className="flex items-center gap-4">
        <GoogleIcon className="size-5" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Google</span>
          <span className="text-sm text-muted-foreground">
            {accountId ? 'Connected' : 'Connect your Google account'}
          </span>
        </div>
      </div>

      <GoogleConnectButton accountId={accountId} />
    </div>
  );
}
