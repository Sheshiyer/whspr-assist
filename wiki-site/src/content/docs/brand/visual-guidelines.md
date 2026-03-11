---
title: Visual Identity Guidelines
description: Complete visual identity system for WHSPR Assist — color palette, typography, imagery standards, and design philosophy.
section: Brand
order: 2
---

# Visual Identity Guidelines

> *Hear more. See more. Live more.*

**Theme:** Gentle Clarity
**Archetype:** The Caregiver

![Brand Kit](/whspr-assist/images/2A-brand-kit-bento-nanobananapro-v1.png)

---

## Design Philosophy

WHSPR Assist's visual system communicates **clinical credibility and human warmth in equal measure**. Every visual element must pass the **Dignity Test**: *Would George Mitchell feel respected, capable, and empowered looking at this?*

The visual identity bridges the gap between sterile medical-device aesthetics and patronizing consumer marketing for older adults.

### Three Principles

1. **Clinical Warmth** — Professional credibility delivered through warm, human-centered presentation
2. **Dignity-First Design** — Every visual choice communicates capability, not compensation
3. **Accessible Premium** — Premium enough for clinical recommendation, approachable enough for George

### Visual Territory

**WHSPR Assist IS:** Warm clinical — clean layouts with natural light warmth, professional typography with human-scaled spacing.

**WHSPR Assist IS NOT:**
- ❌ Sterile clinical (hospital equipment, cold fluorescent, white-on-white)
- ❌ Tech-bro minimalist (dark mode, neon accents, geometric brutalism)
- ❌ Patronizing senior (stock-photo smiles, oversized buttons, primary colors)
- ❌ Budget OTC (plastic packaging, discount badges, generic amplifier aesthetic)

---

## Color Palette

### Primary Colors (60-30-10 Rule)

#### Trust Navy — 60%
| Attribute | Value |
|-----------|-------|
| **Hex** | `#1B365D` |
| **RGB** | 27, 54, 93 |
| **CMYK** | 90, 62, 24, 27 |
| **Pantone** | 289 C |
| **Role** | Backgrounds, headers, clinical credibility areas, navigation, hero sections, footer |
| **Rationale** | Deep navy communicates professional authority and institutional trust. Associated with reliability by the 55–75 demographic — naval uniforms, banking, premium suiting. |

#### Warm Linen — 30%
| Attribute | Value |
|-----------|-------|
| **Hex** | `#F5F0E8` |
| **RGB** | 245, 240, 232 |
| **CMYK** | 3, 4, 8, 0 |
| **Pantone** | 7527 C |
| **Role** | Text backgrounds, content areas, approachable warmth zones, form backgrounds, card backgrounds |
| **Rationale** | Warm off-white that breaks from clinical sterility. The color of cotton linen, well-loved books, and warm afternoon light. |

#### Clarity Teal — 10%
| Attribute | Value |
|-----------|-------|
| **Hex** | `#2A9D8F` |
| **RGB** | 42, 157, 143 |
| **CMYK** | 73, 0, 47, 0 |
| **Pantone** | 7472 C |
| **Role** | CTAs, hearing feature highlights, interactive elements, links, active states |
| **Rationale** | Confident teal signals hearing and audio features. Warm enough to avoid cold clinical associations, distinct enough to draw the eye. |

### Support Colors

#### Soft Silver
| Attribute | Value |
|-----------|-------|
| **Hex** | `#B0BEC5` |
| **Role** | Borders, dividers, device imagery backgrounds, secondary text, form borders |

#### Vitality Amber
| Attribute | Value |
|-----------|-------|
| **Hex** | `#E9A825` |
| **Pantone** | 7408 C |
| **Role** | Active indicators, prescription badges, hearing profile status, success states, star ratings |

### Extended Neutrals

| Name | Hex | Role |
|------|-----|------|
| Charcoal Ink | `#2C3E50` | Primary body text on light backgrounds |
| Slate Gray | `#5D6D7E` | Secondary text, captions, meta information |
| Cloud White | `#FAFAF8` | Page backgrounds, content wells |
| Mist Gray | `#E0E4E8` | Hairline dividers, subtle separations |
| Deep Navy | `#0F1F33` | Footer, dark-mode panels, immersive sections |

### Dark Mode

| Surface | Color |
|---------|-------|
| Page Background | `#0F1F33` |
| Content Background | `#1B365D` |
| Primary Text | `#F5F0E8` |
| Accent | `#2A9D8F` |
| Signal | `#E9A825` |

![Brand Seal](/whspr-assist/images/2B-brand-seal-flux2pro-v1.png)

---

## Typography

### Header: Source Serif 4

| Attribute | Value |
|-----------|-------|
| Classification | Transitional serif |
| Weights | Regular (400), SemiBold (600) |
| License | SIL Open Font License 1.1 |
| Rationale | Transitional letterforms feel contemporary yet established. The typographic equivalent of Dr. Maren's calm authority. |

**Scale:**

| Level | Size | Weight | Line Height | Tracking |
|-------|------|--------|-------------|----------|
| H1 Hero | 40–56px | SemiBold | 1.15 | -0.02em |
| H2 Section | 32–40px | SemiBold | 1.2 | -0.01em |
| H3 Subsection | 24–32px | Regular | 1.25 | 0em |
| H4 Card | 20–24px | SemiBold | 1.3 | 0em |
| Pull Quote | 24–28px | Regular | 1.4 | 0em |

### Body: Source Sans 3

| Attribute | Value |
|-----------|-------|
| Classification | Humanist sans-serif |
| Weights | Regular (400), SemiBold (600) |
| Minimum Body Size | 16px (18px preferred for primary audience) |
| License | SIL Open Font License 1.1 |
| Rationale | Natural companion to Source Serif 4. Humanist structure avoids coldness of geometric sans-serifs. |

**Scale:**

| Level | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Body Primary | 18–20px | Regular | 1.6 |
| Body Compact | 16–18px | Regular | 1.5 |
| Button | 16–18px | SemiBold | 1.0 |
| Navigation | 16px | SemiBold | 1.0 |
| Caption | 14–16px | Regular | 1.4 |
| Form Label | 14–16px | SemiBold | 1.3 |

### Data: IBM Plex Mono

| Attribute | Value |
|-----------|-------|
| Classification | Monospaced |
| Weight | Regular (400) |
| Use | Audiogram values, spec labels, data displays, badges |
| Rationale | Clinical precision for data-intensive contexts. IBM heritage signals institutional seriousness. |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600&family=Source+Sans+3:wght@400;600&family=IBM+Plex+Mono&display=swap" rel="stylesheet">
```

**Fallback Stacks:**
- Header: `'Source Serif 4', Georgia, 'Times New Roman', serif`
- Body: `'Source Sans 3', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`
- Data: `'IBM Plex Mono', 'SF Mono', 'Consolas', 'Liberation Mono', monospace`

---

## Responsive Scale

| Level | Desktop (1200px) | Tablet (768px) | Mobile (320px) |
|-------|------------------|----------------|----------------|
| H1 | 56px | 48px | 40px |
| H2 | 40px | 36px | 32px |
| H3 | 32px | 28px | 24px |
| Body | 20px | 18px | 18px |
| Caption | 16px | 15px | 14px |
| Minimum | 14px | 14px | 14px |

---

## Imagery Guidelines

### Photography Style

- **Warm natural light** — golden hour, morning sun, ambient daylight
- **Real settings** — homes, restaurants, clinics, golf courses, parks
- **Capable adults** — engaged, active, independent, never confused or dependent
- **Product in context** — always shown being worn or in a human setting, never floating on white
- **Shallow depth of field** — subject focus with warm bokeh backgrounds

### Photography Anti-Patterns

- ❌ Stock-photo smiles with no context
- ❌ Elderly people looking confused or cupping their ears
- ❌ Cold clinical environments with fluorescent lighting
- ❌ Product floating on white backgrounds
- ❌ Oversized UI elements or patronizing visual cues

### Product Photography

- **Hero shots:** Product on warm natural surfaces (maple wood, linen, leather)
- **Lifestyle:** Worn by active adults in family, social, and professional contexts
- **Detail:** Close-ups of frame construction, charging mechanism, temple design
- **Flat lay:** Product with accessories on warm surface, overhead angle

![Logo Emboss](/whspr-assist/images/2C-logo-emboss-flux2pro-v1.png)

---

## Logo Usage

The WHSPR Assist wordmark should appear in Trust Navy on light backgrounds and Warm Linen on dark backgrounds. Minimum clear space equals the height of the "W" in the wordmark on all sides.

### Approved Logo Treatments

- Trust Navy wordmark on Warm Linen / Cloud White background
- Warm Linen wordmark on Trust Navy / Deep Navy background
- Clarity Teal icon mark for app icons and favicons
- Monochrome white wordmark on photography with dark overlay

---

## CTA Button Styling

| Attribute | Value |
|-----------|-------|
| Background | Clarity Teal `#2A9D8F` |
| Text Color | White `#FFFFFF` |
| Font | Source Sans 3 SemiBold |
| Font Size | 16–18px |
| Height | 48px |
| Min Width | 200px |
| Border Radius | 8px |
| Hover | 10% darker |
| Active | 15% darker |

---

*Back to [Wiki Index](../index.md) · Previous: [Voice & Tone](voice-and-tone.md) · Next: [Asset Gallery](asset-gallery.md)*
