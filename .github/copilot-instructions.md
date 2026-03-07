# Project Guidelines

## Code Style
- Written in TypeScript using React 19 and Next.js 16.
- Styling uses a combination of Mantine and Tailwind CSS v4.
- Linting and formatting run via Biome (`bun run lint` and `bun run format`).
- Focus on creating **small, reusable components**.

## Architecture
- This project uses the Next.js App Router (`src/app`).
- **Strict Architecture Structure**: Maintain the current separation of concerns:
  - `src/features/`: Feature-specific logic (e.g., `blog/`).
  - `src/shared/`: Shared, highly reusable components (e.g., `components/layout/`, `components/ui/`).
- The blog content is driven by MDX (`@next/mdx`) and will be statically exported (`output: 'export'`) for hosting on GitHub Pages.
- **Reference Project**: The old blog (whose design we are replicating) is located locally at `../blog` in the system. Use it for design references and logic porting.

## Build and Test
- **Dev Server:** `bun run dev`
- **Build (Static Export):** `bun run build`
- **Serve Exported Output:** `bun run serve:output`
- **Lint:** `bun run lint`
- **Format:** `bun run format`

## Project Conventions
- **Component Naming:** File names use the `.component.tsx` suffix suffix for component files (e.g., `navbar.component.tsx`).
- MDX components are globally mapped in `src/mdx-components.tsx`.
- Use Tabler Icons (`@tabler/icons-react`) for UI icons.

## Integration Points
- Blog posts are managed as `.mdx` files. Ensure static generation paths align with GitHub Pages requirements.
- Uses React Compiler (babel-plugin-react-compiler).
