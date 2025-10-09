---
trigger: always_on
---

# Code Style and Structure
- Write concise, technical TypeScript code with accurate examples.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Structure files: types, exported component, subcomponents, helpers, static content.
- Structure imports: built-in hooks, custom hooks, `space`, auth function, sever actions, fetching functions, nextjs built-in functions, `space`, Shadcn component, other components, `space`, helpers, types 

# Naming Conventions
- Prefer named exports for components.
- Use kebab-case for files and directories (e.g., `components/auth-form.tsx`)
- Context files should end with `context` (e.g., `store/theme-context.tsx`)
- Hook files should start with `use` (e.g., `hooks/use-debounced-callback.tsx`)
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).

# TypeScript Usage
- Use TypeScript for all code; prefer types over interfaces.
- Avoid enums; use maps instead.
- Use functional components.

# Syntax and Formatting
- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- When rendering JSX conditionally, don't use `AND` operator - use `TERNARY`operator (e.g., { isActive ? <Component /> : undefined }) .

# Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: use WebP format, include size data, implement lazy loading.

# Data Fetching & Forms
- Create those files under `/db/queries/...` or `/db/actions/...`.
- Use server function to fetch data.
- Use server actions to mutate data.
- Use Zod for validation.

# ORM and Auth
- Use Drizzle ORM to acces the database (postgresql).
- User Better Auth to authenticate user.
- Don't call auth checks in layouts.
- Always check user identity in server actions.
- Call unautorized() in protected routes when auth check fails.

Follow Next.js docs for Data Fetching, Rendering, and Routing.