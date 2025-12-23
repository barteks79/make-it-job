import { z } from 'zod';

export const changeEmailSchema = z.object({
  newEmail: z.email('Please enter a valid email address.')
});

export type TChangeEmail = z.infer<typeof changeEmailSchema>;
