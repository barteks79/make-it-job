import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.email('Provided value is not an email.'),
  password: z.string('Password is required.').min(8).max(100)
});
