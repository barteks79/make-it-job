---
trigger: always_on
---

You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.

Code Style and Structure
- Use semantic JSX tags (e.g., <section>, <article>, <header> instead of <div>).
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Structure files: types, exported component, subcomponents, helpers, static content.
- Order imports: built-in hooks, custom hooks, auth functions, sever actions, data-fetching functions, nextjs built-in functions, shadcn components, custom components, helper function, types.
- Create components related to a single page under _components folder next to that page file. 

Naming Conventions
- Prefer named exports for components.
- Use kebab-case for files and directories (e.g., `components/auth-form.tsx`)
- Context files should end with `context` (e.g., `store/theme-context.tsx`)
- Hook files should start with `use` (e.g., `hooks/use-debounced-callback.tsx`)
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).

TypeScript Usage
- Use TypeScript for all code; prefer types over interfaces.
- Avoid enums; use maps instead.
- Use functional components.

Syntax and Formatting
- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- When rendering JSX conditionally, don't use `AND` operator - use `TERNARY`operator (e.g., { isActive ? <Component /> : undefined }) .

Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

Data Fetching & Forms
- Use Zod for validation.

Fetching and Mutating data
- Use Drizzle ORM to acces the database.
- Use server functions to fetch data.
- Use `server-only` functions to mutate data.

Authentication
- Use Better-Auth for authentication.
- Update `privateRoutes` in middleware when creating a private page (only for authenticated users).
- Don't make authentication calls in layouts, instead check user identity in pages.
- If it turns out the user is not authenticated on the private page, call `unauthorized()` function.
- Use `getSession()` function for server components and `useSession()` hook for client components.
- Always authorize user in data-fetching or data-mutating server functions.

Follow Next.js docs for Data Fetching, Rendering, and Routing.