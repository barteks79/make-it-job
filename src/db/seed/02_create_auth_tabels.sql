CREATE TABLE "user" (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  "emailVerified" BOOLEAN NOT NULL DEFAULT false,
  image TEXT NULL,
  "providerImage" TEXT NULL,
  profile JSONB NOT NULL DEFAULT '{}'::JSONB,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),

  constraint id_pkey PRIMARY KEY (id),
  constraint id_email_key UNIQUE (email)
);

CREATE TABLE session (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  "userId" UUID NOT NULL,
  token TEXT NOT NULL,
  "expiresAt" TIMESTAMPTZ NOT NULL,
  "ipAddress" TEXT NULL,
  "userAgent" TEXT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),

  constraint session_pkey PRIMARY KEY (id),
  constraint session_token_key UNIQUE (token),
  constraint session_userId_fkey FOREIGN KEY ("userId") REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE account (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  "userId" UUID NOT NULL,
  "accountId" TEXT NOT NULL,
  "providerId" TEXT NOT NULL,
  "accessToken" TEXT NULL,
  "refreshToken" TEXT NULL,
  "accessTokenExpiresAt" TIMESTAMPTZ NULL,
  "refreshTokenExpiresAt" TIMESTAMPTZ NULL,
  scope TEXT NULL,
  "idToken" TEXT NULL,
  password TEXT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),

  constraint account_pkey PRIMARY KEY (id),
  constraint account_userId_fkey FOREIGN KEY ("userId") REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE verification (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  value TEXT NOT NULL,
  "expiresAt" TIMESTAMPTZ NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),

  constraint verification_pkey PRIMARY KEY (id)
);