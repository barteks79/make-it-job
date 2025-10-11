import { Button } from '@/components/ui/button';
import { GithubLogo, GoogleIcon } from '@/app/(auth)/sign-in/_components/auth-icons';
import { CheckIcon, XIcon, MailIcon } from 'lucide-react';

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

export function GithubMethodCard({ isConnected }: { isConnected: boolean }) {
  return (
    <div className="flex items-center justify-between py-4 px-5 border-y">
      <div className="flex items-center gap-4">
        <GithubLogo className="size-5" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">GitHub</span>
          <span className="text-sm text-muted-foreground">
            {isConnected ? 'Connected' : 'Connect your Github account'}
          </span>
        </div>
      </div>

      <Button disabled={!!isConnected} type="button" variant="secondary">
        {isConnected ? 'Connected' : 'Connect'}
      </Button>
    </div>
  );
}

export function GoogleMethodCard({ isConnected }: { isConnected: boolean }) {
  return (
    <div className="flex items-center justify-between py-4 px-5">
      <div className="flex items-center gap-4">
        <GoogleIcon className="size-5" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Google</span>
          <span className="text-sm text-muted-foreground">
            {isConnected ? 'Connected' : 'Connect your Google account'}
          </span>
        </div>
      </div>

      <Button disabled={!!isConnected} type="button" variant="secondary">
        {isConnected ? 'Connected' : 'Connect'}
      </Button>
    </div>
  );
}
