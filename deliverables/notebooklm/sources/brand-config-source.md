---
title: "WHSPR Assist — Brand Configuration Reference"
description: "Complete brand system specification for WHSPR Assist prescription hearing-enhancement smart glasses. Covers execution context, brand identity, visual design system, product lineup, audience profiling, competitive positioning, and generative prompt architecture. Document 6 of 6 in the WHSPR Assist NotebookLM source library."
---

# WHSPR Assist — Brand Configuration Reference

This document is the canonical configuration reference for the **WHSPR Assist** brand system. Every decision about visual identity, copywriting voice, product naming, audience targeting, competitive positioning, and creative asset generation traces back to the specifications recorded here. It is designed to serve as a single-source-of-truth that any team member, agency partner, or AI assistant can consult to produce work that is fully aligned with the WHSPR Assist brand.

The configuration is organized into fifteen interconnected sections. Together they define not just what the brand looks like, but how it speaks, who it speaks to, what it stands against, and how every visual and verbal asset should be generated at scale.

---

## Execution Context

The execution context defines the strategic parameters under which all brand work is produced. These settings govern budget allocation, channel strategy, production depth, and quality expectations across every deliverable.

| Parameter | Value | Implication |
|---|---|---|
| **Budget Tier** | Standard | Mid-range production budget; prioritize high-impact assets over volume |
| **Launch Channel** | Enterprise | Primary go-to-market through B2B healthcare professional partnerships, not direct-to-consumer retail |
| **Maturity Stage** | Pre-launch | All assets are launch-readiness materials; no post-launch optimization or retention content yet |
| **Depth Level** | Comprehensive | Full-depth deliverables across all brand dimensions; no shortcuts or abbreviated formats |
| **Tone** | Trust-focused | Every touchpoint must earn and reinforce trust — clinical credibility, patient dignity, professional respect |
| **Quality Bar** | Premium | Output quality must match or exceed Apple Health and Phonak marketing standards |

The enterprise launch channel is especially significant. WHSPR Assist reaches consumers through audiologists, optometrists, and healthcare clinics — not through Amazon listings or social media ads alone. This means every asset must serve dual audiences: the healthcare professional who recommends the product, and the patient who wears it.

---

## Brand Identity

### Core Brand Attributes

**Brand Name:** WHSPR Assist

**Tagline:** *Hear more. See more. Live more.*

**Brand Archetype:** The Caregiver — nurturing, protective, service-oriented. The brand exists to help people maintain independence and dignity as they age. It does not position itself as cutting-edge technology for technology's sake; it positions itself as a caring solution that happens to use advanced technology.

**Domain:** Assistive Wearable Technology / Hearing & Vision Enhancement

**Domain Tags:** app, dtc, enterprise, physical-product, lifestyle, web, brand-system, premium, mobile

### Brand Voice — Dr. Maren

The WHSPR Assist brand voice is embodied by **Dr. Maren** — a 52-year-old optometrist who speaks like a trusted clinician talking to someone she has known for years. She is direct, warm, free of jargon, and never condescending. She recommends; she does not sell.

Dr. Maren's voice is the lens through which all copy is written. When drafting any consumer-facing text, the writer should ask: *Would Dr. Maren say it this way?* If the answer involves a sales pitch, a breathless superlative, or a patronizing simplification, the copy needs revision.

### Tone Calibration by Audience

The brand operates across three distinct tonal registers, each calibrated for a specific audience and context:

| Tone Mode | Audience | Warmth | Formality | Register Reference |
|---|---|---|---|---|
| **Compassionate Companion** | B2C consumers | 8/10 | 4/10 | AARP Magazine editorial tone |
| **Peer Professional** | B2B clinicians | — | 7/10 | Clinical peer-to-peer authority (8/10) |
| **Trusted Advisor** | Caregiver context | 7/10 | — | Empathetic, solution-oriented guidance |

The Compassionate Companion mode is used for all patient-facing materials — website copy, packaging, email sequences, and social content. The Peer Professional mode is reserved for clinic-facing sales materials, whitelabel documentation, and provider portal interfaces. The Trusted Advisor mode bridges both, appearing in caregiver-focused content where a family member is researching options for a loved one.

---

## Theme — Gentle Clarity

**Theme Name:** Gentle Clarity

**Theme Description:** Warm, clean, medical-grade aesthetic. Soft whites and calming blues meet tactile warmth. Clinical credibility without sterile coldness. Accessible without patronizing.

**Core Metaphor:**

> A well-lit audiologist's office where the technology feels like a trusted friend, not a medical device.

This metaphor governs every design decision. The brand should feel like walking into a space that is clean but not cold, professional but not intimidating, technologically advanced but not alienating. The metaphor deliberately avoids two failure modes: the sterile white clinical environment that signals "you are sick," and the flashy consumer-tech aesthetic that signals "this is not for you."

**Mood Keywords:** gentle-clarity, warm-clinical, dignified-aging, accessible-premium, trusted-technology, compassionate-design, clean-confidence, soft-authority, family-warmth, independence

---

## Color Palette

The WHSPR Assist palette is a five-color system built on a 60-30-10 distribution model, with two additional support and signal colors for specific functional roles.

| Role | Color Name | Hex Code | Usage Ratio | Application |
|---|---|---|---|---|
| **Primary** | Trust Navy | `#1B365D` | 60% | Backgrounds, headers, clinical credibility anchors |
| **Secondary** | Warm Linen | `#F5F0E8` | 30% | Text backgrounds, card surfaces, approachable warmth |
| **Accent** | Clarity Teal | `#2A9D8F` | 10% | CTAs, hearing feature highlights, interactive elements |
| **Support** | Soft Silver | `#B0BEC5` | As needed | Borders, device imagery backgrounds, divider lines |
| **Signal** | Vitality Amber | `#E9A825` | As needed | Active indicators, prescription badges, attention markers |

**Trust Navy (#1B365D)** is the dominant brand color. It communicates medical-grade authority and seriousness without the coldness of pure black or the sterility of hospital blue. At 60% usage, it anchors every page, screen, and print asset in clinical credibility.

**Warm Linen (#F5F0E8)** is the emotional counterbalance. It is not white — it is the warm off-white of a linen tablecloth, a well-loved book page, a sunlit kitchen counter. At 30% usage, it wraps the clinical authority in approachable warmth.

**Clarity Teal (#2A9D8F)** is the action color. It draws the eye to buttons, links, feature highlights, and hearing-specific UI elements. At 10% usage, it remains special — it never floods a layout.

**Soft Silver (#B0BEC5)** handles structural work: borders, backgrounds behind product photography, subtle dividers. It keeps layouts organized without competing for attention.

**Vitality Amber (#E9A825)** is the signal color. It marks things that are active, new, or require attention — battery indicators, prescription-ready badges, notification dots. It carries energy without aggression.

---

## Typography

The typographic system uses three font families, each assigned to a specific communication function.

| Role | Font Family | Weights | Usage Notes |
|---|---|---|---|
| **Headers** | Source Serif 4 | Regular, SemiBold | Display headers use SemiBold; emphasis text uses Regular. Always sentence case — never ALL CAPS. |
| **Body** | Source Sans 3 | Regular, SemiBold | All paragraph text, UI labels, form fields, and general reading content. |
| **Data** | IBM Plex Mono | Regular | Technical specifications, hearing profile data, clinical measurement readouts, code-like content. |

**Source Serif 4** was chosen for headers because serif typefaces carry authority and trustworthiness — critical for a medical-adjacent product targeting an audience that associates serif fonts with newspapers, books, and clinical journals they trust. The SemiBold weight provides presence without shouting.

**Source Sans 3** handles the heavy lifting of body text. It is highly legible at all sizes, renders well on screens and in print, and pairs naturally with Source Serif 4 as its sans-serif sibling from the same type family.

**IBM Plex Mono** is reserved for data-intensive contexts: hearing profile charts, frequency response specifications, clinical portal readouts. Its monospaced grid communicates precision and technical accuracy.

---

## Materials & Physical Specifications

The WHSPR Assist product is a physical wearable device. The following materials define the tactile and functional experience of the hardware:

- **Frame:** TR (thermoplastic rubber) — lightweight, flexible, hypoallergenic, medical-grade durable
- **Temple Tips:** Soft-touch material with integrated gesture controls for volume, pause, and assistant activation
- **Nose Pads:** Hypoallergenic silicone for all-day comfort across diverse nose bridge shapes
- **Lens System:** Prescription-ready — compatible with any optical lab, no proprietary lens requirement
- **Charging:** Magnetic 2-pin cable for easy alignment (critical for users with reduced dexterity)
- **Audio:** Dual open-ear directional speakers delivering sound without blocking ambient awareness
- **Microphone System:** Dual-microphone array with ANC (Active Noise Cancellation) and ENC (Environmental Noise Cancellation)
- **Included Accessories:** Microfiber cleaning cloth, soft carrying pouch, large-print quick-start guide

Every material choice reflects the Caregiver archetype. The magnetic charging cable exists because fumbling with USB-C ports is a dignity-eroding experience for users with tremor or reduced vision. The large-print quick-start guide exists because 8-point font instruction manuals communicate "we didn't think about you."

---

## Photography Direction

**Style:** Warm natural light, authentic elderly subjects, active independence, family connection, clinical credibility.

**Environments:** Well-lit homes, gardens, clinic waiting rooms, family gatherings, morning routines. Every setting communicates normalcy, warmth, and capability.

**Camera Specification:** Canon R5 with 50mm lens at f/2.8, warm natural color grade. This produces a shallow depth of field that keeps the subject in crisp focus against a gently blurred background — the visual equivalent of the brand's promise to bring clarity to what matters.

### Photography Constraints

> Always show dignity and independence. No infantilizing poses. No "old person struggling." Show confidence and capability. Minimum age 50 for primary subjects.

This constraint is non-negotiable. The single fastest way to destroy trust with the 55–75 audience is to show them images that make aging look like a problem to be pitied. WHSPR Assist photography shows people living fully — reading in the garden, laughing at dinner, walking confidently through a farmer's market — who happen to be wearing smart glasses that make those moments clearer.

---

## Illustration System

**Style:** Clean medical-grade line illustrations with warm teal accents. Accessible, clear, high contrast.

**References:** Apple Health app aesthetic meets Phonak marketing clarity. The illustrations should feel warm rather than cold, informational rather than decorative.

These illustrations appear in the quick-start guide, the companion app onboarding flow, the clinic provider portal, and the website feature explanations. They must be instantly legible to users with reduced vision — high contrast, simple geometry, generous line weight.

---

## Brand Sigil

**Description:** A sound wave arc cradling a lens element — hearing and vision unified in a single mark.

**Components:**

- **Sound Wave Arc** — represents hearing enhancement, the primary clinical function
- **Lens Circle** — represents vision correction, the prescription-ready lens system
- **Connection Dot** — represents the companion app and clinic ecosystem that ties the hardware to ongoing care

The sigil encodes the product's unique dual-purpose value proposition in a single visual mark. No competitor can claim this combination, and the sigil makes that differentiation instantly recognizable.

---

## Audience Profile — George Mitchell

The primary buyer persona is **George Mitchell**, a composite character representing the core WHSPR Assist customer.

**Aesthetic Affinity:** Clinical-warm design, premium medical device quality, Apple Health app aesthetic

**Aspirational Brands:** Phonak, ReSound, Apple, Warby Parker — brands that combine premium quality with accessibility and trust

### Emotional Register

George's emotional relationship with assistive technology is defined by clinical trust, patient advocacy, professional pride, and compassionate care. He wants to trust his devices the way he trusts his doctor. He wants to feel that the product respects him.

### Aspirations

George wants to:

- **Hear grandchildren clearly** at family dinners without asking everyone to repeat themselves
- **Read prescription labels and menus independently** without pulling out a magnifying glass or asking for help
- **Participate fully in social activities** — restaurants, church, golf, family events — without pretending to follow conversations
- **Maintain dignity and independence** as he ages, on his own terms
- **Stay connected with family** without feeling like a burden who requires special accommodation

### Pain Points

George struggles with:

- **Hearing aid stigma** — he acknowledges he needs help hearing, but traditional hearing aids feel like a visible admission of decline
- **Cost barriers** — at $3,200 or more, traditional hearing aids feel irresponsible on a fixed income, even when insurance covers part of it
- **Generic OTC amplifiers** — over-the-counter devices make everything louder, including background noise, which makes restaurants and crowded spaces worse, not better
- **Social withdrawal** — he has gradually stopped going to restaurants, skips church more often, and avoids golf outings because he cannot follow group conversation
- **Family tension** — repeated "What?" responses, television volume conflicts, and avoidance behavior create friction with his spouse and adult children
- **Dignity erosion** — pretending to hear when he cannot erodes his self-image and sense of competence
- **Technology anxiety** — complicated devices with tiny buttons and cluttered apps feel designed for someone else
- **Independence fears** — accepting assistive devices feels like the first step toward losing autonomy

---

## Competitive Context

### Visual Patterns to Avoid

The following visual patterns are explicitly prohibited in all WHSPR Assist creative work:

- Patronizing elderly imagery (helpless expressions, exaggerated fragility)
- Budget hearing aid plastic aesthetic (cheap-looking molded devices)
- Tech-bro minimalism (stark black-and-white, aggressive geometry)
- Sterile clinical white (hospital corridor aesthetic)

### Competitive Differentiation

WHSPR Assist occupies a unique market position defined by eight strategic differentiators:

1. **Only combined product** — the sole device combining prescription vision correction, hearing enhancement, and AI assistance at any price under $1,000
2. **3–17× price advantage** — dramatically more affordable than all hearing-aid and vision-assistive competitors
3. **Zero-stigma form factor** — everyday glasses bypass the number-one barrier to hearing aid adoption: visible stigma
4. **B2B whitelabel capability** — clinic-branded versions create switching costs no competitor offers
5. **Professional fitting model** — audiologist-guided fitting reduces OTC-level return rates from 35–50% down to 6–10%
6. **Dual-purpose convergence** — captures the vision-hearing convergence whitespace that no competitor occupies
7. **Provider Portal** — enables patient engagement tracking, follow-up scheduling, and upsell pipeline management
8. **Open lens compatibility** — prescription-ready frames work with any optical lab, avoiding proprietary lock-in

### Territory Statement

> The only smart glasses combining prescription hearing enhancement AND vision assistance, sold through healthcare professionals.

---

## Positioning

### Positioning Statement

> For adults 55–75 with mild-to-moderate hearing loss who already wear glasses, WHSPR Assist is the only prescription-ready smart glasses that combine hearing enhancement, AI vision assistance, and everyday eyewear in a single frame — for under $350 — delivering dignity, clarity, and connection without the stigma or cost of traditional hearing aids.

### Hero Headline

> *The glasses your audiologist wishes existed ten years ago.*

### Tagline

> *Hear more. See more. Live more.*

### Identity Pillars

The brand's identity rests on three foundational pillars:

1. **Clinical-grade hearing enhancement** in everyday eyewear
2. **Prescription-ready vision correction** built into every frame
3. **Trusted delivery** through your healthcare provider

### Strategic Pillars

Five strategic pillars guide all marketing and product decisions:

| Pillar | Key Message |
|---|---|
| **Zero-Stigma Form Factor** | They look like glasses because they are glasses |
| **Radical Affordability** | $249–$349 vs. $3,200+ for traditional hearing aids |
| **Professional Trust Channel** | Recommended by your audiologist, not sold by an algorithm |
| **Dual-Purpose Innovation** | Hearing and vision in one device — a category first |
| **Dignity-First Design** | Every detail designed to respect, not remind |

---

## Product Lineup

### Hero Product

**WHSPR Assist Rx** — Prescription hearing-enhancement smart glasses with vision correction, AI-powered camera system, open-ear audio with ANC/ENC, and companion health app.

**Physical Form:** Refined TR thermoplastic smart glasses with discreet dual cameras, open-ear speakers, and temple touch controls.

### Capsule Collection

| Model | SKU | Frame Style | Key Feature | Lens Options |
|---|---|---|---|---|
| **Assist Rx Classic** | V03-T5 | Full-frame square | Dual cameras, open-ear hearing with ANC/ENC | Anti-blue light or tinted |
| **Assist Rx Heritage** | V03-T6 | Round-frame retro | Dual cameras, open-ear hearing | Anti-blue light or tinted |
| **Assist Rx Refined** | V03-T8 | Semi-rimless with metal lower wire | Lightest model in the lineup | Anti-blue light or clear |
| **Assist Rx Active** | V06-T | Sport square wrap-around | 260mAh extended battery, 4GB storage, rubberized grip | Sport-tinted or polarized (white or black) |

All four models share the same core technology platform — dual cameras, open-ear directional speakers, dual-microphone ANC/ENC, temple gesture controls, and companion app connectivity. The differences are in frame style, weight, battery capacity, and lens options, allowing clinicians to match the product to each patient's lifestyle and aesthetic preference.

### Care Kit (Essence Product)

**Care Kit** — Magnetic charging cable housed in a warm maple organizer with an integrated cleaning cloth compartment. The Care Kit is the daily ritual object — the place where the glasses rest each night, charge magnetically, and are ready each morning. The warm maple material reinforces the brand's tactile warmth and avoids the cold plastic aesthetic of medical device chargers.

### Flatlay Composition (5 Items)

The canonical product flatlay includes:

1. Glasses on a warm surface beside the magnetic charging cable
2. Companion app displayed on a large-text iPhone showing the hearing profile screen
3. Prescription card from the audiologist with WHSPR branding
4. Large-print quick-start guide with teal accent illustrations
5. Soft carrying pouch with debossed WHSPR logo

---

## Aesthetic System

The aesthetic system defines the visual language applied across all creative assets, from product photography to campaign posters to digital interfaces.

| Element | Specification |
|---|---|
| **Hero Object Type** | Warm clinical product photography |
| **Hero Surface** | Frosted glass with warm maple accent |
| **Seal Material** | Brushed titanium |
| **Seal Geometry** | Clean rounded rectangle with subtle sound-wave motif |
| **Logo Treatment** | Debossed on warm linen texture |
| **Panel Structure** | Clean clinical panels with warm natural light and soft shadows |
| **Icon Line Style** | Clean medical-grade line art with teal accent |
| **Poster Artifact** | Refined assistive device in warm setting |
| **Quality Reference** | Apple Health + Phonak marketing quality |
| **Engraving Style** | Clean medical illustration |
| **Sequence Type** | Daily life independence narrative |

### Negative Prompt (Global Exclusions)

The following elements are globally excluded from all generated and commissioned visual assets:

> Patronizing elderly imagery, walker/wheelchair unless relevant, isolation/sadness, sterile white clinical, cold fluorescent lighting, generic stock elderly, tech-bro aesthetic, young model wearing product, gaming/creator context, anime, cartoon, pixel art, low poly, vaporwave, glitch art, hearing aid stigma imagery, disability-focused framing, chrome excess, neon, cyberpunk, synthwave.

This negative prompt protects brand integrity by establishing hard boundaries. Any asset that triggers these descriptors — even subtly — must be rejected and regenerated.

---

## Generation Settings

These parameters control AI-assisted visual asset generation across all prompt types.

| Setting | Value |
|---|---|
| **Output Directory** | `generated/` |
| **Seeds** | 42, 137 |
| **Resolution** | 2K |
| **Output Format** | PNG |

### Product Reference Images

Three reference images anchor all product-related generation:

1. `AI Camera Glasses Specification.pdf-image-035.png`
2. `AI Camera Glasses Specification.pdf-image-106.jpg`
3. `AI Camera Glasses Specification.pdf-image-050.jpg`

These reference images ensure that every generated product visualization maintains consistent physical accuracy — correct frame proportions, camera placement, speaker locations, and temple control zones.

---

## Prompt Architecture

The prompt architecture defines the complete system of generative prompts used to produce brand assets at scale. Each prompt type maps to a specific asset category and follows the brand's visual and verbal rules.

### Brand Identity Prompts

- **Bento Grid** — Multi-panel brand overview layout showing key visual elements in a grid composition
- **Seal** — Brand seal rendered in brushed titanium with sound-wave motif
- **Logo Emboss** — Debossed logo treatment on warm linen surface

### Product Prompts

- **Capsule Collection** — All four frame styles displayed together in a unified layout
- **Hero Book** — Hero product (Assist Rx) presented as the centerpiece asset
- **Essence Vial** — Care Kit displayed as the daily ritual object

### Photography Prompts

- **Catalog Layout** — Product photography arranged in a clean editorial grid
- **Flatlay** — The canonical five-item flatlay composition described in the Products section

### Illustration Prompts

**Types:** Heritage engraving, campaign grid, art panel

**Icon Generation Model:** Flux

**Icon Groups:**

| Category | Icons |
|---|---|
| **Hearing Features** | Sound Enhancement, Noise Filtering, Conversation Focus, Volume Control |
| **Vision Features** | Prescription Ready, Reading Assist, Low Light Enhancement, Text Recognition |
| **Healthcare Integration** | Clinic Portal, Hearing Profile, Insurance Ready, Whitelabel Partner |

### Narrative Prompts

- **Contact Sheet** — Sequential narrative frames showing product in daily life context

### Poster Prompts

**Types:** Seeker poster

**Poster Engines:**

| Engine ID | Title | Concept | Background |
|---|---|---|---|
| **9A-01** | "Hearing Clarity" | HEAR MORE — Conversations come back to life | Trust Navy |
| **9A-02** | "Vision Independence" | SEE MORE — Read the menu. Read the road signs. Read life. | Warm Linen |

### Narrative Sequences

**Sequence 10A — "A Morning with WHSPR Assist"** (9 panels):
Charging cradle → Activation → Newspaper → Breakfast → Garden → Café → App check → Volume adjust → Grandchild

**Sequence 10B — "The Clinic Journey"** (9 panels):
Arrival → Frame options → Calibration → Trying on → Walking out → First outdoor moment → Companion app → Family gathering → Follow-up

These two sequences represent the complete customer journey from two perspectives: the daily life narrative (10A) shows the product integrated into independent living; the clinic journey (10B) shows the professional trust channel from first appointment through post-fitting success.

### Extended Prompt — 8A "The Seeker"

> George Mitchell, 68, three-quarter portrait in garden doorway with warm morning light, quiet confidence, linen shirt, coffee cup. Dignified independence.

This prompt produces the hero persona image — the face of the WHSPR Assist brand. George is not a patient; he is a person living well. The warm morning light, garden setting, linen shirt, and coffee cup all communicate comfort, normalcy, and self-possession. The three-quarter angle conveys openness without vulnerability.

---

## Cross-Reference Summary

This brand configuration connects to all other documents in the WHSPR Assist brand system:

- **Messaging & Direction Summary** — draws its voice calibration and positioning language from the brand identity and positioning sections of this configuration
- **Buyer Persona Dossier** — the George Mitchell profile here is the seed data expanded into a full psychological and behavioral profile
- **Product Positioning Summary** — the CBBE framework analysis is built on the identity pillars, strategic pillars, and competitive context defined here
- **Voice & Tone Guide** — Dr. Maren's voice description and the three tone modes are the source material for the complete voice system
- **Visual Identity Guide** — the palette, typography, photography direction, illustration system, aesthetic specs, and negative prompts all originate from this configuration

This document is the root node. Everything else in the brand system is a branch.
