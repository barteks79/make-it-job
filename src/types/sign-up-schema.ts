import { z } from 'zod';

export const SignUpSchema = z
  .object({
    email: z.email('Provided value is not an email.'),
    password: z
      .string('Password is required.')
      .min(8, { error: 'Password must be at least 8 characters long.' })
      .max(100, { error: 'Password must be at most 100 characters long.' }),
    confirmPassword: z
      .string('Please confirm your password.')
      .min(8, { error: 'Password must be at least 8 characters long.' })
      .max(100, { error: 'Password must be at most 100 characters long.' })
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword']
  });
