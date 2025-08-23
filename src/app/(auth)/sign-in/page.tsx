import SignInForm from './_components/sign-in-form';

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-16 w-full">
      <header className="flex flex-col gap-2 tracking-tight text-center">
        <h2 className="text-4xl font-medium">Welcome Back</h2>
        <p className="text-lg text-muted-foreground">
          Enter your credentials to access the account.
        </p>
      </header>

      <SignInForm />
    </div>
  );
}
