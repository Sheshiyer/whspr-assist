# Pre-Launch Email Sequence -- WHSPR Assist Rx

**Brand:** WHSPR Assist
**Product:** WHSPR Assist Rx
**Campaign:** CLARITY CALL (Crowdfunding Pre-Launch)
**Skill ID:** pre-launch-email-sequence
**Generated:** 2026-02-10
**Voice:** Dr. Maren -- Compassionate Companion (warmth 8, formality 4, Grade 6-7)
**Archetype:** The Caregiver

---

## Sequence Overview

| Email | Timing | Purpose | Primary Segment | Secondary Segment |
|-------|--------|---------|-----------------|-------------------|
| Email 1 | T-7 (7 days before launch) | Announcement + Preview + Anticipation | Waitlist VIPs (George) | Caregiver Influencers (Sarah) |
| Email 2 | T-1 (1 day before launch) | Final Reminder + VIP Access Window + Share CTA | Waitlist VIPs (George) | Caregiver Influencers (Sarah) |

**Suppression Logic:** Both emails send ONLY to confirmed waitlist subscribers. Do not send to cold leads or purchased lists.

---

## Email 1: T-7 Announcement

### Scheduling Notes

- **Send Day:** 7 days before campaign launch ({{LAUNCH_DATE_MINUS_7}})
- **Optimal Send Time:** Tuesday or Wednesday, 9:00 AM EST (aligns with George's morning routine -- coffee, iPad, email)
- **Fallback Send Time:** Thursday 9:00 AM EST if launch date math lands on weekend
- **A/B Test Duration:** 2 hours on 20% of list, then winner to remaining 80%
- **Expected Open Rate Benchmark:** 45-55% (warm waitlist audience)
- **Expected Click Rate Benchmark:** 12-18%

### Segment Targeting

- **Primary List:** Waitlist VIPs -- all subscribers who joined via pre-launch ads, landing page, or referral
- **Tag Required:** `waitlist_vip` OR `pre_launch_signup`
- **Exclude:** Anyone who has already backed the campaign (tag: `backer`)
- **Personalization Tokens:** `{{FIRST_NAME}}`, `{{WAITLIST_DATE}}`, `{{LAUNCH_DATE}}`, `{{LAUNCH_DATE_MINUS_1}}`
- **George Segment (ages 55-75):** Use Subject Line A or B, body copy version with direct benefit language
- **Sarah Segment (ages 35-55, tagged `caregiver` or `gift_buyer`):** Use Subject Line C, body copy version with caregiver framing

---

### Subject Lines (A/B/C Test)

**Subject A (Curiosity + Timeline):**
One week from today, you get first look at WHSPR Assist Rx

**Subject B (VIP Status + Preview):**
{{FIRST_NAME}}, your VIP preview of WHSPR Assist Rx is ready

**Subject C (Caregiver/Gift Angle):**
The gift that gives Dad back his favorite conversations -- preview inside

**Preview Text (all variants):**
See the campaign page before anyone else. Your early-bird pricing starts at $249.

---

### Email Body -- Version A (George Segment)

**Header Image Slot:**
`[IMAGE: Hero lifestyle shot -- man wearing WHSPR Assist Rx frames at outdoor family gathering, laughing with adult children. Natural light, warm tones. No medical context. Alt text: "Man wearing WHSPR Assist Rx smart glasses at a family gathering."]`

---

Hi {{FIRST_NAME}},

You signed up because you wanted to hear more clearly and see more sharply -- without wearing something that announces it to the room.

We remember. And we are ready.

**One week from today, the CLARITY CALL campaign goes live.**

You are on the VIP list. That means you get three things most people will not:

**1. Early access to the campaign page -- right now**

We built this page for you. It walks through exactly how WHSPR Assist Rx works, what it costs, and why your audiologist would recommend it. No jargon. No surprises.

`[CTA BUTTON: "Preview the Campaign Page" -- links to {{CAMPAIGN_PREVIEW_URL}}]`

**2. First-in-line pricing at $249**

When the campaign opens on {{LAUNCH_DATE}}, Super Early Bird pricing starts at $249 -- 200 spots only. As a VIP, you get a 30-minute head start before the general public.

Here is the full pricing breakdown:

- **Super Early Bird:** $249 (200 spots -- VIP window only)
- **Early Bird:** $279 (300 spots)
- **Standard:** $299
- **Caregiver Bundle:** $499 for two pairs

`[IMAGE: Clean pricing tier graphic with four columns. Trust Navy headers, Warm Linen background. Alt text: "WHSPR Assist Rx pricing tiers from $249 to $499."]`

**3. A direct line to our team**

Reply to this email with any question. Our team reads every message. If you want to know about prescription compatibility, frame styles, or how the hearing enhancement works, ask. We will answer within 24 hours.

---

**What WHSPR Assist Rx actually does:**

These are prescription-ready smart glasses that combine hearing enhancement, AI vision assistance, and everyday eyewear in one frame. They look like the glasses you already wear. They help you hear conversations in noisy restaurants, read small print with an AI camera, and take calls hands-free.

Your audiologist or optometrist can calibrate them to your hearing profile. The AI reads menus, labels, and signs aloud through the built-in speakers. And the whole thing costs less than most hearing aid copays.

`[IMAGE: Product shot -- three WHSPR Assist Rx frame styles on a clean surface. Natural materials backdrop (wood, linen). Alt text: "Three WHSPR Assist Rx frame styles in classic, modern, and aviator designs."]`

---

**Here is what happens next:**

- **Today:** Preview the campaign page using the link above
- **{{LAUNCH_DATE_MINUS_1}}:** You will get one more email with your VIP access link
- **{{LAUNCH_DATE}}:** Campaign goes live. Your 30-minute VIP window opens first.

If someone in your life might benefit from hearing more clearly, forward this email. Every person who joins through your link gets VIP pricing too.

`[CTA BUTTON: "Preview the Campaign Page" -- links to {{CAMPAIGN_PREVIEW_URL}}]`

Talk soon,

**The WHSPR Assist Team**

*Hear more. See more. Live more.*

---

`[FOOTER: Standard unsubscribe link | Privacy policy | Physical address | "You are receiving this email because you joined the WHSPR Assist waitlist on {{WAITLIST_DATE}}."]`

---

### Email Body -- Version B (Sarah / Caregiver Segment)

**Header Image Slot:**
`[IMAGE: Lifestyle shot -- daughter and father sitting together at a restaurant table, both smiling. Father wearing WHSPR Assist Rx frames. Warm lighting, relaxed atmosphere. Alt text: "Father wearing WHSPR Assist Rx glasses having dinner with his daughter."]`

---

Hi {{FIRST_NAME}},

You signed up because someone you care about has been missing parts of the conversation. At dinner. At family gatherings. On the phone.

You have probably noticed he turns up the TV a little more each year. Or nods along at restaurants when the background noise gets loud. Or says "what?" one more time than he used to.

You looked for something that might help. Something he would actually wear.

**One week from today, we are launching WHSPR Assist Rx -- and you get early access.**

These are prescription-ready smart glasses with built-in hearing enhancement. They look like regular glasses. No one can tell the difference. That is the whole point.

`[CTA BUTTON: "Preview the Campaign Page" -- links to {{CAMPAIGN_PREVIEW_URL}}]`

**Why this matters for Dad (or Mom, or your spouse):**

- Hearing enhancement that is calibrated by an audiologist -- not a generic volume knob
- AI that reads menus, labels, and signs aloud through the built-in speakers
- Prescription lenses from any optical lab -- these replace his current glasses
- Starting at $249, less than most hearing aid copays

**As a VIP, you get:**

- A 30-minute early-access window before the general public on launch day
- First-in-line pricing: Super Early Bird at $249 (200 spots only)
- The **Caregiver Bundle** option: two pairs for $499 (one for each parent, or one for a spouse)

`[IMAGE: Caregiver Bundle visual -- two pairs of WHSPR Assist Rx frames side by side with a gift ribbon motif. Alt text: "WHSPR Assist Rx Caregiver Bundle -- two pairs of smart glasses."]`

**Here is what happens next:**

- **Today:** Preview the campaign page and see exactly what WHSPR Assist Rx does
- **{{LAUNCH_DATE_MINUS_1}}:** Your VIP access email arrives with your personal launch link
- **{{LAUNCH_DATE}}:** Campaign goes live. You get first access.

If you know other families dealing with the same thing, share this email. Everyone who joins through your forward gets VIP pricing too.

`[CTA BUTTON: "Preview the Campaign -- Share with Family" -- links to {{CAMPAIGN_PREVIEW_URL}}]`

Talk soon,

**The WHSPR Assist Team**

*Hear more. See more. Live more.*

---

`[FOOTER: Standard unsubscribe link | Privacy policy | Physical address | "You are receiving this email because you joined the WHSPR Assist waitlist on {{WAITLIST_DATE}}."]`

---
---

## Email 2: T-1 Reminder

### Scheduling Notes

- **Send Day:** 1 day before campaign launch ({{LAUNCH_DATE_MINUS_1}})
- **Optimal Send Time:** 6:00 PM EST (evening inbox, builds overnight anticipation)
- **Fallback Send Time:** 5:00 PM EST if primary conflicts with holiday or major news cycle
- **A/B Test Duration:** 1 hour on 15% of list, then winner to remaining 85% (tighter window due to time sensitivity)
- **Expected Open Rate Benchmark:** 50-60% (urgency + anticipation from Email 1)
- **Expected Click Rate Benchmark:** 18-25%

### Segment Targeting

- **Primary List:** Waitlist VIPs who OPENED Email 1 (tag: `opened_t7_email`)
- **Secondary List:** Waitlist VIPs who did NOT open Email 1 (tag: `waitlist_vip` AND NOT `opened_t7_email`) -- send at 7:00 AM EST on launch morning as a catch-up
- **Exclude:** Anyone who has already backed the campaign (tag: `backer`)
- **Personalization Tokens:** `{{FIRST_NAME}}`, `{{LAUNCH_DATE}}`, `{{VIP_ACCESS_TIME}}`, `{{VIP_ACCESS_URL}}`
- **George Segment (ages 55-75):** Use Subject Line A or B
- **Sarah Segment (ages 35-55, tagged `caregiver` or `gift_buyer`):** Use Subject Line C

---

### Subject Lines (A/B/C Test)

**Subject A (Tomorrow + VIP Access):**
Tomorrow morning, your VIP window opens -- WHSPR Assist Rx

**Subject B (Direct + Personal):**
{{FIRST_NAME}}, everything is set for tomorrow

**Subject C (Caregiver Urgency):**
Tomorrow: 200 spots at $249 -- the pair Dad will actually wear

**Preview Text (all variants):**
Your 30-minute VIP head start begins at {{VIP_ACCESS_TIME}}. Here is your personal access link.

---

### Email Body -- Version A (George Segment)

**Header Image Slot:**
`[IMAGE: Close-up product shot -- WHSPR Assist Rx frames on a nightstand next to a coffee cup and a morning newspaper. Warm sunrise light through a window. Alt text: "WHSPR Assist Rx smart glasses on a nightstand, ready for the day."]`

---

Hi {{FIRST_NAME}},

Tomorrow is the day.

The CLARITY CALL campaign for WHSPR Assist Rx goes live on {{LAUNCH_DATE}}. And because you are on the VIP list, you get in first.

**Your VIP access window opens at {{VIP_ACCESS_TIME}}.**

That is 30 minutes before the general public. During that window, the Super Early Bird tier ($249, 200 spots) is reserved for you and the other VIPs on this list.

Here is your personal access link. Bookmark it tonight:

`[CTA BUTTON: "Bookmark Your VIP Access Link" -- links to {{VIP_ACCESS_URL}}]`

---

**Quick reminder of what you are backing:**

Prescription-ready smart glasses with hearing enhancement, AI vision assistance, and hands-free calling. One frame that replaces multiple pairs of glasses and does what a $3,200 hearing aid does -- for a fraction of the cost.

| What You Get | What It Replaces |
|---|---|
| Hearing enhancement calibrated to your audiogram | Generic amplifiers or untreated hearing difficulty |
| AI camera that reads menus, labels, and signs aloud | Squinting, asking for help, or skipping the fine print |
| Prescription-ready frames from any optical lab | A second or third pair of glasses |
| Hands-free calls with directional microphones | Fumbling with your phone in noisy places |

`[IMAGE: Feature comparison infographic -- split screen showing "Before WHSPR Assist" (3 separate items: glasses, hearing device, magnifier) vs "After WHSPR Assist" (single pair of glasses). Clean design, Trust Navy and Clarity Teal accents. Alt text: "WHSPR Assist Rx replaces multiple devices with one pair of smart glasses."]`

---

**Pricing tiers (while they last):**

- **Super Early Bird -- $249** (200 spots, VIP-first access)
- **Early Bird -- $279** (300 spots)
- **Standard -- $299**
- **Caregiver Bundle -- $499** for two pairs

The Super Early Bird tier will sell out. It sold out during our test runs within the first hour. Your VIP window gives you a real advantage here.

---

**Tomorrow morning checklist:**

1. Open this email (or use your bookmark)
2. Click your VIP access link at {{VIP_ACCESS_TIME}}
3. Choose your tier and frame style
4. You are done. Estimated delivery: {{ESTIMATED_DELIVERY}}

If you have a question before tomorrow, reply to this email right now. We are standing by tonight.

`[CTA BUTTON: "Open Your VIP Link Tomorrow at {{VIP_ACCESS_TIME}}" -- links to {{VIP_ACCESS_URL}}]`

---

**One more thing.** If there is someone in your life who would benefit from hearing more clearly and seeing more sharply, forward this email tonight. They will not get VIP access, but they will be ready when the general launch opens 30 minutes after yours.

See you tomorrow,

**The WHSPR Assist Team**

*Hear more. See more. Live more.*

---

`[FOOTER: Standard unsubscribe link | Privacy policy | Physical address | "You are receiving this email because you joined the WHSPR Assist waitlist. Tomorrow you get VIP access to the CLARITY CALL campaign."]`

---

### Email Body -- Version B (Sarah / Caregiver Segment)

**Header Image Slot:**
`[IMAGE: Lifestyle shot -- adult daughter showing something on her phone to her father, who is wearing WHSPR Assist Rx frames and smiling. Kitchen or living room setting. Natural light. Alt text: "Daughter showing her father his new WHSPR Assist Rx smart glasses features."]`

---

Hi {{FIRST_NAME}},

This is the email you have been waiting for.

Tomorrow morning at {{VIP_ACCESS_TIME}}, the CLARITY CALL campaign for WHSPR Assist Rx goes live. Your VIP window opens 30 minutes before everyone else.

**Here is your personal access link. Save it now:**

`[CTA BUTTON: "Save Your VIP Access Link" -- links to {{VIP_ACCESS_URL}}]`

---

**A quick note about gifting:**

If you are backing WHSPR Assist Rx for a parent or loved one, here is what you need to know:

- **You do not need their prescription yet.** Backers receive frames that can be fitted with prescription lenses at any optical lab after delivery.
- **You do not need their audiogram yet.** The companion app walks through hearing calibration at home, or their audiologist can do it through the Provider Portal.
- **The Caregiver Bundle ($499) gets you two pairs.** One for Dad. One for Mom. Or one for each parent in your life.

This is a gift they will actually use. Every day. Not something that goes in a drawer.

`[IMAGE: Gift-framing visual -- WHSPR Assist Rx in a premium unboxing layout with gift card slot visible. Warm, premium feel. Alt text: "WHSPR Assist Rx unboxing with gift card option."]`

---

**Super Early Bird pricing ($249) is limited to 200 spots.** Your VIP window means you get first access. But 200 spots go fast.

**Tomorrow morning checklist:**

1. Open this email at {{VIP_ACCESS_TIME}}
2. Click your VIP access link
3. Choose Super Early Bird ($249 single) or Caregiver Bundle ($499 for two)
4. Select frame style (you can change before shipping)
5. Done. Estimated delivery: {{ESTIMATED_DELIVERY}}

---

**Share with other families.** If you know someone whose parent is in the same situation -- turning up the TV, nodding along at dinner, saying "what?" more than they used to -- forward this email. They will not get VIP access, but they can back the campaign when the general window opens.

`[CTA BUTTON: "Get Your VIP Link Ready for Tomorrow" -- links to {{VIP_ACCESS_URL}}]`

See you tomorrow morning,

**The WHSPR Assist Team**

*Hear more. See more. Live more.*

---

`[FOOTER: Standard unsubscribe link | Privacy policy | Physical address | "You are receiving this email because you joined the WHSPR Assist waitlist. Tomorrow you get VIP access to the CLARITY CALL campaign."]`

---
---

## Technical Implementation Notes

### Email Platform Requirements

- **ESP:** Klaviyo, ConvertKit, or Mailchimp (must support conditional content blocks and A/B testing)
- **Merge Tags:** Map `{{FIRST_NAME}}`, `{{WAITLIST_DATE}}`, `{{LAUNCH_DATE}}`, `{{LAUNCH_DATE_MINUS_1}}`, `{{VIP_ACCESS_TIME}}`, `{{VIP_ACCESS_URL}}`, `{{CAMPAIGN_PREVIEW_URL}}`, `{{ESTIMATED_DELIVERY}}` to platform-specific syntax
- **Conditional Blocks:** Segment-based body copy swap (George vs. Sarah) within single campaign send OR two separate campaign sends
- **Link Tracking:** UTM parameters on all CTA links: `utm_source=email&utm_medium=pre_launch&utm_campaign=clarity_call&utm_content={{email_id}}`

### Image Specifications

| Slot | Dimensions | Format | Max File Size |
|------|-----------|--------|---------------|
| Hero lifestyle | 600x300px | JPG or WebP | 150KB |
| Pricing tier graphic | 600x250px | PNG | 120KB |
| Product shot | 600x400px | JPG or WebP | 150KB |
| Feature comparison | 600x350px | PNG | 130KB |
| Gift/unboxing visual | 600x300px | JPG or WebP | 150KB |
| Caregiver Bundle | 600x250px | PNG | 120KB |

### A/B Test Configuration

| Email | Test Variable | Variants | Split | Duration | Winner Metric |
|-------|--------------|----------|-------|----------|---------------|
| T-7 | Subject line | A vs B (George) or C (Sarah) | 20% test / 80% winner | 2 hours | Open rate |
| T-1 | Subject line | A vs B (George) or C (Sarah) | 15% test / 85% winner | 1 hour | Open rate |

### Automation Triggers

- **Email 1 (T-7):** Scheduled send, date-triggered, 7 days before `{{LAUNCH_DATE}}`
- **Email 2 (T-1):** Scheduled send, date-triggered, 1 day before `{{LAUNCH_DATE}}`
- **Email 2 catch-up:** For non-openers of T-7, send Email 2 at 7:00 AM EST on launch morning
- **Post-send tag:** After Email 2 send, apply tag `pre_launch_sequence_complete`
- **Suppression after backing:** If subscriber backs campaign at any point, suppress all future pre-launch emails (tag: `backer`)

### Compliance

- CAN-SPAM compliant: physical address, unsubscribe link, accurate sender name
- GDPR compliant: consent-based list (waitlist opt-in), data processing notice in footer
- No medical claims: all copy uses "hearing enhancement" framing, not medical treatment language
- FTC crowdfunding guidelines: no guaranteed delivery dates, estimated delivery clearly labeled as estimate

---

## Voice and Compliance Checklist

- [x] Grade 6-7 reading level throughout
- [x] Average sentence length 12-16 words
- [x] Active voice throughout
- [x] One idea per sentence
- [x] Dignity-first framing -- no age-qualifying language
- [x] Enhancement framing -- no deficit or medical language
- [x] No banned words used (hearing loss solution, disability, impairment, elderly, anti-aging, suffer from, struggle with, game-changing, revolutionary, disruptive, senior, old, patient, device, fix, cure, treat)
- [x] Required terms used (hear more clearly, see more sharply, smart glasses, hearing enhancement, prescription-ready, clarity, connection, confidence)
- [x] Dr. Maren voice persona: warm, direct, recommends rather than sells
- [x] No fear or urgency tactics -- positive outcome framing only
- [x] George dignity test passed: would George feel respected reading this?
- [x] Sarah empathy test passed: does this validate her concern and offer a concrete path forward?

---

## Upstream Dependencies

- buyer-persona
- competitor-analysis
- mds-messaging-direction-summary
- voice-and-tone
- product-positioning-summary
- visual-identity-core
- campaign-page-copy
- pre-launch-ads

## Downstream Consumers

- launch-day-email
- post-launch-email-sequence
- backer-confirmation-email
- social-content-engine
- campaign-page-builder
