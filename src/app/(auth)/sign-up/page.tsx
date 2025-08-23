import SignUpForm from './_components/sign-up-form';

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-16 w-full">
      <header className="flex flex-col gap-2 tracking-tight text-center">
        <h2 className="text-4xl font-medium">Create an Account</h2>
        <p className="text-lg text-muted-foreground">
          Apply for jobs and post up to one offer for free.
        </p>
      </header>

      <SignUpForm />
    </div>
  );
}
