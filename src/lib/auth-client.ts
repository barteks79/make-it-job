import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();

export type AuthSession = ReturnType<typeof authClient.useSession>;
export type SessionUser = AuthSession extends { data: { user: infer U } | null } ? U : never;
