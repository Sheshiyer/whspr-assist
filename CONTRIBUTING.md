# Contributing to WHSPR Assist

Thank you for your interest in contributing to the WHSPR Assist brand repository. This repo contains the complete brand system — from market research and positioning through visual assets and campaign materials — so consistency and quality are paramount.

## What This Repository Contains

This is a **brand asset repository**, not a software project. It houses:

- Market research and buyer personas
- Brand strategy, positioning, and voice guidelines
- Visual identity system and AI-generated brand assets
- Campaign copy, email sequences, and ad creative
- B2B whitelabel partner program documentation
- Product reference images and visual generation configs

## How to Propose Changes

### Brand Assets & Strategy

Changes to brand-level documents (positioning, voice & tone, visual identity) should be discussed before implementation. These documents cascade into all downstream materials.

1. Open an issue describing the proposed change and the rationale
2. Reference the specific document(s) affected
3. Tag the brand lead for review

### Marketing Materials

New campaign copy, email sequences, ad creative, or distribution materials:

1. Create a feature branch from `main` using the naming convention below
2. Place assets in the appropriate phase folder (`04-campaign/`, `05-email/`, `06-distribution/`)
3. Ensure copy aligns with the Dr. Maren voice (see `02-phase-2/voice-and-tone/`)
4. Submit a pull request with context on the campaign or channel

### Visual Assets

Generated visual assets are produced through the brand pipeline using `brand-config.yaml` and `generation-manifest.json`. To add or modify visuals:

1. Update the relevant prompt configuration in `brand-config.yaml`
2. Regenerate assets through the pipeline
3. Place outputs in `generated/` with the established naming convention
4. Include both seed variants (v1, v137) when applicable

### Documentation

Wiki pages in `docs/` are generated from source materials. To update documentation:

1. Edit the relevant source document in its phase folder
2. Regenerate the wiki output
3. Submit both source and output changes together

## Branch Naming

```
feature/   — New assets or materials
fix/       — Corrections to existing content
docs/      — Documentation updates
refactor/  — Structural reorganization
```

Examples: `feature/holiday-campaign-ads`, `fix/persona-demographics`, `docs/partner-guide-update`

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(campaign): add spring 2026 pre-launch email sequence
fix(voice): correct tone calibration in B2B materials
docs(wiki): update product lineup specifications
chore(config): update brand-config generation seeds
```

## Pull Request Workflow

1. Create a feature branch from `main`
2. Make your changes with clear, atomic commits
3. Ensure all copy follows the established voice and tone
4. Submit a PR with a description of what changed and why
5. Request review from at least one brand team member
6. Merge after approval

## Brand Consistency Checklist

Before submitting, verify:

- [ ] Copy uses the Dr. Maren voice — warm, direct, clinical credibility, never condescending
- [ ] Visual assets follow the Gentle Clarity theme and color palette
- [ ] Terminology is consistent (e.g., "hearing enhancement" not "hearing aid," "WHSPR Assist" not "Whisper")
- [ ] Audience framing preserves dignity — capability, never compensation
- [ ] B2B materials maintain Peer Professional tone (authority 8, formality 7)

## Contact

For questions about the brand system or contribution process, reach out to the WHSPR brand team.

---

*WHSPR Assist — Hear more. See more. Live more.*
