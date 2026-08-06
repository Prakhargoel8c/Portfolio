# prakhargoel.dev — retro arcade portfolio

Personal website styled as a retro game title screen — CRT bezel, scanlines, pixel type, keyboard-navigable menu.

Built with [Astro](https://astro.build). Fonts: Press Start 2P + VT323 (self-hosted via Fontsource).

## Commands

| Command        | Action                                    |
| :------------- | :---------------------------------------- |
| `pnpm install` | Install dependencies                      |
| `pnpm dev`     | Start dev server at `localhost:4321`      |
| `pnpm build`   | Build production site to `./dist/`        |
| `pnpm preview` | Preview the production build locally      |

## Structure

- `src/pages/index.astro` — title screen (main menu)
- `src/pages/about.astro` — player status screen (resume content)
- `src/pages/blog/` — stage select (blog index) + post pages
- `src/content/blog/*.md` — blog posts (markdown + frontmatter: `title`, `description`, `pubDate`, optional `draft`)
- `src/layouts/CrtLayout.astro` — shared CRT shell (bezel, grid, scanlines, HUD)
- `src/styles/global.css` — design tokens and shared arcade UI
