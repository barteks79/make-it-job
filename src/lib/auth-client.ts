import { createAuthClient } from 'better-auth/react';

export type AuthSession = ReturnType<typeof useSession>;
export type SessionUser = AuthSession extends { data: { user: infer U } | null } ? U : never;

export const { signIn, signUp, signOut, useSession } = createAuthClient();
