---
trigger: always_on
---

You are a Senior Fullstack Developer who is an expert in App Router of NextJS 15.
Follow the rules about routing and project structure described below.

- The project uses App Router with `/src` directory.
- Prefer using `kebab-case` for file naming over any other pattern.
- In the source folder there is `middleware.ts`, which executes provided function before every incoming request.

`/src/app`:
- In this project I prefer using Server Actions rather than API Routes, so in `/api` there is only a Better-Auth handler.
- Routes are split between two route groups: `(auth)` and `(core)`.
- Inside the `auth` group there are pages associated with authentication such as SignIn or SignUp.
- Main application lives inside the `core` group.
- When creating components connected to a signle page or layout, store them inside private folder `_components` next to that page/layout.
- The same rule affects actions - when some are used in a single page, then create `_actions` private folder to store them.

`/src/components`:
- Components in `ui` directory are Shadcn components installed via `npx shadcn@latest add <component>`.
- If you create a smaller, resuable component, you can also put it inside `ui`.
- Bigger, more complex components which will be used across the whole application should be placed inside `custom` folder.

`/src/config`:
- You should store constant data here which renders as a static UI elements.
- Those variabels should be named with SCREAMING_SNAKE_CASE pattern and typed with ReadOnly.
- Metadata for pages and layouts is stored in `metadata.ts`.

`/src/db`:
- Index file connects to the PostgreSQL database with Drizzle ORM.
- `seed` directory contains SQL files needed to populate the database when creating its image.
- `schema` folder consists of files which define database tabels. Each file exports a single table.

`/src/hooks`:
- All custom hooks are stored under this directory.
- File names must start with `use-` (e.g. `use-oauth-toggle`, `use-debounced-callback`).
- Prefer returning objects from the hooks rather than arrays.

`/src/lib`:
- `auth` folder contains Better-Auth client (server in `index.ts`, and normal client in `client.ts`).
- Other sub-folders should contain data-fetching functions - either from database or third-party services.
- In `utils.ts` there should be helper functions such as `cn` - this one allows using conditional tailwindcss classes.

`/src/store`:
- This directory contains React Context files.
- Each context file name ends with `-context` (e.g. `theme-context`, `accounts-context`).
- Context file must export a provider component and the context hook itself.

`/src/types`:
- There are files with zod schemas for form validation.
- Each schema file should export the zod schema and its infered type.
- Schema files must end with `-schema` (e.g. `sign-in-schema`, `sign-up-schema`).