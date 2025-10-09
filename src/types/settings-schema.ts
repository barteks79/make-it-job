import { z } from 'zod';

export const settingsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export type TSettings = z.infer<typeof settingsSchema>;
