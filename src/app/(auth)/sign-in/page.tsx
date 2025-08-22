import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import ContinueWithSeparator from './_components/continue-with-separator';
import AuthOptions from './_components/auth-options';

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-16 w-full">
      <header className="flex flex-col gap-2 tracking-tight text-center">
        <h2 className="text-4xl">Welcome Back</h2>
        <p className="text-lg text-muted-foreground">
          Enter your credentials to access the account.
        </p>
      </header>

      <form className="flex flex-col gap-8">
        {/* inputs */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-lg">Email</label>
              <Input className="h-10" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-lg">Password</label>
              <Input className="h-10" placeholder="Enter your password" />
            </div>
          </div>

          <AuthOptions />
        </section>

        {/* buttons */}
        <section className="flex flex-col gap-4">
          <Button className="text-base h-10 cursor-pointer">Sign In</Button>
          <ContinueWithSeparator />

          <Button variant="secondary" disabled className="text-base h-10 cursor-pointer">
            Coming soon...
          </Button>
        </section>
      </form>
    </div>
  );
}
