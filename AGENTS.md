# Repository Guidelines

## Project Structure & Module Organization
This repository is primarily a brand and documentation workspace. Core source material lives in phased folders such as `00-source/`, `01-phase-1/`, `04-campaign/`, and `06-b2b-whitelabel/`. Published docs live in `docs/`. Generated media belongs in `generated/`, while product references stay in `product-images/`. The only runnable app is `wiki-site/`: pages are in `wiki-site/src/pages`, shared UI in `wiki-site/src/components`, layouts in `wiki-site/src/layouts`, and documentation content in `wiki-site/src/content/docs`.

## Build, Test, and Development Commands
Run site commands from `wiki-site/`:

- `npm install`: install Astro dependencies.
- `npm run dev`: start the local docs site on `http://localhost:4321`.
- `npm run build`: build the production site into `wiki-site/dist/`.
- `npm run preview`: serve the production build for final QA.

There is no repo-wide build system at the root; most root-level changes are Markdown, YAML, or asset updates.

## Coding Style & Naming Conventions
Use concise Markdown with descriptive headings and short sections. Keep filenames lowercase with hyphens, for example `visual-guidelines.md`. Match established product language from `docs/brand/voice-and-tone.md` and preserve dignity-first phrasing. In `wiki-site/`, follow the existing style: 2-space indentation, PascalCase `.astro` components such as `Header.astro`, and shared design tokens in `wiki-site/src/styles/global.css`. No formatter or lint script is configured, so manual consistency matters.

## Testing Guidelines
No automated test suite is configured today. For content changes, verify links, headings, and any mirrored docs you touch. For `wiki-site/` changes, run `npm run build` and smoke-test the affected pages in `npm run dev` or `npm run preview`. Treat a clean production build as the minimum validation bar.

## Commit & Pull Request Guidelines
Recent history uses Conventional Commits, for example `feat(wiki): improve mobile responsiveness` and `fix: remove GitHub Pages base path`. Keep scopes specific to the area changed, such as `docs(brand):`, `feat(wiki):`, or `fix(campaign):`. PRs should explain what changed, why it changed, and which folders were updated. Include screenshots for `wiki-site/` UI work and call out any voice, positioning, or visual-identity changes that need brand review.

## Content & Asset Workflow
Edit source material first, then update downstream docs or wiki content in the same change when applicable. If you modify visual generation inputs, keep `brand-config.yaml`, `generation-manifest.json`, and the output assets aligned.
