# AI Agents Instructions

## 2. Stack
Next.js 16 (App Router), React 19, TS, Tailwind v4, MDX, Bun, Biome.

## 3. Architecture Locator
- **`src/app/`**: Next.js routing wrappers (minimize code here).
- **`src/features/<name>/`**: Feature-specific logic, UI, and services.
- **`src/shared/`**: Reusable primitives, generic UI, core domain.
- **`*/domain/`**: Pure functions, zero dependencies.
- **`*/services/`**: Side effects, APIs, FS operations.
- **`*/components/ui/`**: Generic, context-independent UI primitives.

## 4. Conventions
- **Naming**: Use strict kebab-case (e.g., `article-card.tsx`, `articles-list.ts`). Functions in `pages/` end with `Page` (except in `src/app/`).
- **Errors**: Use `Result<T, F>` (`src/shared/domain/result.ts`). No raw exceptions.
- **State**: Built-in React state / SearchParams only.

## 5. Styling
- **Tailwind v4**: Use template literals (no clsx/tailwind-merge).
- **Theme**: Use custom breakpoints (`mobile:`, `tablet:`, `laptop:`, `monitor:`) and CSS vars (e.g., `bg-bg`, `text-foreground`).
- **Mantine**: Only for complex interactive components.
