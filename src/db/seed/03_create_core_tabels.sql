CREATE TABLE company (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  "ownerId" UUID NULL,
  description TEXT NULL,
  image TEXT NULL,
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),

  constraint company_pkey PRIMARY KEY (id),
  constraint company_image_key UNIQUE (image),
  constraint company_name_key UNIQUE (name),
  constraint company_ownerId_fkey FOREIGN KEY ("ownerId") REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE post (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  position TEXT NOT NULL,
  experience "public"."experience" NOT NULL,
  salary DOUBLE PRECISION NOT NULL,
  description TEXT NOT NULL,
  tags TEXT [] NOT NULL,
  information TEXT [] NOT NULL,
  requirements TEXT [] NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "companyId" UUID NOT NULL,
  "jobType" "public"."jobType" NOT NULL,
  "workType" "public"."workType" NOT NULL,

  constraint post_pkey PRIMARY KEY (id),
  constraint post_companyId_fkey FOREIGN KEY ("companyId") REFERENCES company (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE bookmark (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  "userId" UUID NOT NULL,
  "postId" UUID NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  constraint bookmark_pkey PRIMARY KEY (id),
  constraint bookmark_postId_fkey FOREIGN KEY ("postId") REFERENCES post (id) ON UPDATE CASCADE ON DELETE CASCADE,
  constraint bookmark_userId_fkey FOREIGN KEY ("userId") REFERENCES "user" (id) ON UPDATE CASCADE ON DELETE CASCADE
);