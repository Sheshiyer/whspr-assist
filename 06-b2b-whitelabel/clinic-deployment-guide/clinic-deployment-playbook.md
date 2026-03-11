---
type: Deployment and Operations Guide
audience: Partner operations, Clinical staff, Training managers, Merchandising
last_updated: 2026-02-10
status: Active
project: WHSPR Assist B2B Whitelabel Program
related_docs:
  - ../WHITELABEL_README.md
  - ../partner-program-overview/partner-program-overview.md
  - ../product-app-skinning/product-skinning-guide.md
  - ../product-app-skinning/app-skinning-guide.md
  - ../co-branding-guidelines/co-branding-guidelines.md
---

# WHSPR Assist Clinic Deployment Playbook

## 1. Overview

This playbook guides partner clinics through every stage of deploying WHSPR Assist smart glasses as a clinical product: facility preparation, staff training, patient fitting workflow, inventory management, and in-clinic merchandising. Following this playbook ensures consistent patient outcomes across all partner locations and maximizes both clinical satisfaction and commercial performance.

The playbook applies to all partner tiers (Silver, Gold, Platinum). Tier-specific variations are noted where applicable.

---

## 2. Pre-Deployment Checklist

Complete the following items before scheduling staff training or receiving inventory.

### 2.1 Facility Requirements

| Requirement | Specification | Notes |
|-------------|--------------|-------|
| Internet connectivity | Minimum 10 Mbps download, Wi-Fi (2.4GHz and 5GHz) | Required for device pairing, app onboarding, and firmware updates |
| Bluetooth environment | Bluetooth 5.0+ capable devices permitted in fitting area | Minimize Bluetooth interference from other active devices during pairing |
| Display area | Minimum 60cm x 40cm counter or shelf space | For product display, demo units, and marketing collateral |
| Fitting station | Existing optical fitting area with mirror and PD measurement tools | No new equipment required; standard optical tools are sufficient |
| Quiet space | Low ambient noise for hearing profile calibration | Dedicated consultation room recommended; not required |
| Power outlet | Within 1.5m of display area | For charging demo units via magnetic 2-pin charging cradle |

### 2.2 Equipment and Materials

| Item | Source | Quantity Per Location |
|------|--------|---------------------|
| Demo units (non-sale) | Provided by WHSPR Assist at onboarding | 2 per location (1 lifestyle, 1 sport) |
| Charging cradles | Included with demo units | 2 per location |
| Counter display stand | Provided by WHSPR Assist (Silver/Gold) or partner-designed (Platinum) | 1 per location |
| Marketing collateral | Provided by WHSPR Assist or co-branded per tier | See Section 7 (Merchandising) |
| Staff training materials | Digital delivery via partner portal | 1 set per location |
| Patient take-home guide | Included in product packaging | Ships with inventory |

### 2.3 Staff Readiness

- Minimum 1 staff member per location must complete all 4 training modules before go-live
- Licensed audiologist or hearing instrument specialist required for hearing profile calibration
- Licensed optician or optometrist required for prescription lens fitting (if offering prescription configurations)
- Front desk staff should complete Module 4 (Sales Conversation) for patient inquiry handling

---

## 3. Staff Training Program

Training is delivered in four modules totaling 5 hours. Silver partners receive digital self-paced training. Gold partners receive a live webinar (4 hours) plus supplementary digital materials. Platinum partners receive on-site training at up to 3 locations per year.

### 3.1 Module 1: Product Overview (1 Hour)

**Objective:** Staff can articulate what WHSPR Assist does, how it differs from traditional hearing aids, and who benefits most.

**Topics covered:**
- Product positioning: assistive smart glasses, not medical hearing aids
- Hardware overview: JL7018F chipset, dual-mic ANC/ENC, open-ear directional audio, 1200p camera, Bluetooth 5.4
- Frame lineup: V03-T5 (Square), V03-T6 (Round), V03-T8 (Semi-Rimless), V06-T (Sport)
- Key differentiators: 44g weight, all-day comfort, prescription-compatible, hearing enhancement + vision assist in one device
- Regulatory positioning: OTC hearing enhancement, not a prescription hearing aid; does not require audiological fitting for basic use
- Companion app overview: hearing profile, audiogram tracking, vision assist mode, provider portal

**Assessment:** 10-question knowledge check (pass threshold: 80%)

### 3.2 Module 2: Fitting Protocol (2 Hours)

**Objective:** Staff can correctly fit, calibrate, and validate a WHSPR Assist device for any patient.

**Topics covered:**
- Frame selection methodology: face shape assessment, temple length measurement, nose bridge fit
- Lens options and measurement: PD measurement, prescription verification, lens type selection (clear, anti-blue, photochromic, polarized)
- Device pairing: Bluetooth pairing with patient smartphone, app installation, account creation
- Hearing profile calibration: in-app hearing assessment, audiogram import (if available), environmental preset configuration
- Vision assist setup: camera orientation verification, magnification preferences, text-to-speech language selection
- Comfort validation: temple pressure check, weight distribution, extended wear test (15 minutes minimum)
- Troubleshooting: common pairing issues, audio quality adjustments, firmware update procedures

**Hands-on exercise:** Each trainee fits a demo unit on a colleague and completes the full calibration workflow.

**Assessment:** Practical fitting demonstration observed by trainer or senior staff

### 3.3 Module 3: App Onboarding (1 Hour)

**Objective:** Staff can guide patients through app setup, profile configuration, and ongoing app usage.

**Topics covered:**
- App installation and account creation (iOS and Android)
- Device pairing and initial sync
- Hearing profile setup and audiogram entry
- Vision assist mode activation and preferences
- Family sharing setup (adding caregivers or family members to the patient's account)
- Push notification preferences
- App updates and firmware management
- Data privacy controls and consent settings

**Hands-on exercise:** Each trainee onboards a demo device through the complete app setup flow.

### 3.4 Module 4: Sales Conversation (1 Hour)

**Objective:** Staff can confidently present WHSPR Assist to patients, handle objections, and close sales.

**Topics covered:**
- Patient discovery: identifying candidates during routine visits (hearing complaints, vision challenges, interest in technology)
- Value proposition by patient type: active seniors, caregivers, technology-comfortable patients, hearing-aid-resistant patients
- Pricing presentation: framing the investment relative to traditional hearing aids ($3,000 -- $7,000) and standalone smart glasses ($300 -- $500)
- Common objections and responses:
  - "I already have hearing aids" -- WHSPR Assist complements hearing aids with vision assist and lifestyle features
  - "I am not comfortable with technology" -- the device works like regular glasses; the app is optional for basic hearing enhancement
  - "My insurance will not cover it" -- pricing is a fraction of hearing aids; many patients pay out-of-pocket for this category
  - "I want to think about it" -- offer a 15-minute in-clinic trial to experience the product before deciding
- Follow-up scheduling: 7-day post-purchase check-in, 30-day hearing profile review, 90-day wellness visit
- Payment options: cash, credit, HSA/FSA eligibility guidance (partner-specific)

**Role-play exercise:** Staff practice a patient consultation scenario with a colleague.

---

## 4. Patient Fitting Workflow

The following 6-step workflow applies to every patient fitting. Estimated total time: 45 -- 60 minutes for first-time patients; 20 -- 30 minutes for returning patients.

### Step 1: Hearing Assessment (10 -- 15 minutes)

- Review existing audiogram if available in the patient's clinical record
- If no recent audiogram (within 12 months), conduct in-clinic hearing screening or use the WHSPR Assist in-app hearing assessment
- Import audiogram data into the WHSPR Assist companion app (via API, CSV upload, or manual entry)
- Document hearing profile baseline for future comparison

### Step 2: Frame Selection (5 -- 10 minutes)

- Assess patient face shape and size
- Present available frame options (V03-T5, V03-T6, V03-T8, V06-T)
- Consider patient lifestyle: sport frame for active patients, semi-rimless for discretion, square or round based on aesthetic preference
- Verify temple arm length and nose bridge fit using standard optical measurement tools
- Select temple arm color from available palette (per partner tier)

### Step 3: Lens Measurement (5 -- 10 minutes)

- Measure pupillary distance (PD) using standard pupillometer or PD ruler
- If prescription lenses: verify current prescription, confirm single vision or progressive requirement
- Select lens type: clear, anti-blue, photochromic, polarized, or prescription-ready
- Submit lens order if prescription grinding is required (partner's optical lab or WHSPR Assist lens fulfillment)

### Step 4: Device Pairing and Hearing Profile Calibration (10 -- 15 minutes)

- Power on device and place in pairing mode
- Install WHSPR Assist companion app on patient's smartphone (or partner-branded app for Gold/Platinum)
- Complete Bluetooth pairing
- Import or enter audiogram data
- Run hearing profile calibration (the app generates a personalized audio profile based on the audiogram)
- Configure environmental presets (quiet conversation, noisy restaurant, outdoor, television)
- Set up "Hey Cyan" wake word (or custom wake word for Platinum partners)

### Step 5: Trial Wear (15 minutes)

- Patient wears the device in the clinic environment for a minimum of 15 minutes
- Test hearing enhancement in conversation with staff
- Test vision assist features: magnification, text-to-speech (if applicable)
- Adjust temple arm tension and nose pad fit as needed
- Verify comfort, audio clarity, and visual alignment
- Address any immediate concerns

### Step 6: Checkout and Follow-Up Scheduling (5 minutes)

- Process payment (partner's standard POS workflow)
- Schedule 7-day follow-up appointment (phone or in-person)
- Provide patient with take-home quick-start guide (included in packaging)
- Confirm patient has the companion app installed and functioning
- Register the device warranty through the partner portal

---

## 5. Inventory Management

### 5.1 Recommended Par Levels

| Clinic Size | Monthly Patient Volume | Recommended On-Hand Inventory |
|------------|----------------------|------------------------------|
| Small (1 provider) | 5 -- 10 fittings/month | 8 -- 12 units (mix of frames and lens types) |
| Medium (2 -- 3 providers) | 10 -- 25 fittings/month | 15 -- 30 units |
| Large (4+ providers) | 25 -- 50 fittings/month | 30 -- 60 units |

### 5.2 Reorder Triggers

- Reorder when on-hand inventory reaches 40% of par level
- Lead time buffer: standard orders require 2 -- 3 weeks; factor lead time into reorder point
- Seasonal adjustments: increase par levels by 25% in Q1 (New Year health resolutions) and Q4 (holiday gifting)

### 5.3 SKU Mix Guidance

| Frame Model | Recommended Mix |
|-------------|----------------|
| V03-T5 (Square) | 35% of inventory |
| V03-T6 (Round) | 25% of inventory |
| V03-T8 (Semi-Rimless) | 25% of inventory |
| V06-T (Sport) | 15% of inventory |

| Lens Type | Recommended Mix |
|-----------|----------------|
| Clear | 40% |
| Anti-Blue Light | 20% |
| Photochromic | 20% |
| Polarized | 10% |
| Prescription-ready (uncut) | 10% |

Actual mix should be adjusted based on patient demographics, geographic location (more polarized in sun-heavy regions), and historical sales data available in the partner portal.

### 5.4 Inventory Tracking

All inventory is tracked through the partner portal. Each unit has a unique serial number registered at time of shipment. Portal features include:

- Real-time inventory count by location
- Automatic reorder alerts at configurable thresholds
- Serial number tracking (shipped, in-stock, sold, warranty, returned)
- Multi-location inventory transfer (Gold and Platinum partners with multiple clinics)

---

## 6. Follow-Up Protocol

Consistent follow-up drives patient satisfaction, retention, and referral generation.

| Touchpoint | Timing | Method | Purpose |
|-----------|--------|--------|---------|
| Post-fitting check-in | 7 days | Phone call or app message | Confirm comfort, address questions, adjust hearing profile if needed |
| Hearing profile review | 30 days | In-clinic appointment | Review usage data, optimize environmental presets, verify audiogram accuracy |
| Wellness visit | 90 days | In-clinic appointment | Comprehensive hearing profile review, firmware update, discuss premium app features |
| Annual review | 12 months | In-clinic appointment | Full hearing reassessment, device inspection, discuss upgrade options |

Follow-up appointments can be scheduled through the companion app (patients self-schedule) or by clinic staff through the partner portal. Automated appointment reminders are sent via push notification at 72 hours, 24 hours, and 2 hours before the appointment.

---

## 7. Display Merchandising

### 7.1 Counter Display

WHSPR Assist provides a standard counter display unit to all partners at onboarding.

| Specification | Detail |
|--------------|--------|
| Dimensions | 40cm (W) x 30cm (D) x 35cm (H) |
| Material | Acrylic with brushed aluminum base |
| Capacity | 3 demo frames (lifestyle + sport) plus charging cradle |
| Branding | WHSPR Assist standard (Silver), co-branded (Gold), or partner-designed (Platinum) |
| Lighting | Integrated LED strip (warm white, 3000K) |
| Power | USB-C powered (adapter included) |

### 7.2 Demo Unit Management

- Demo units are provided at no charge (2 per location) and remain WHSPR Assist property
- Demo units must be charged nightly and kept in working condition
- Demo firmware is updated automatically when connected to Wi-Fi
- Demo units are replaced annually or upon defect at no charge
- Demo units must not be sold to patients; sale units come from partner inventory

### 7.3 Marketing Collateral

| Material | Provided By | Quantity | Tier |
|----------|------------|----------|------|
| Product brochure (tri-fold) | WHSPR Assist | 100 per location | All |
| Patient FAQ card | WHSPR Assist | 50 per location | All |
| Comparison chart (vs. hearing aids) | WHSPR Assist | 50 per location | All |
| Window cling ("Available Here") | WHSPR Assist | 2 per location | All |
| A-frame sidewalk sign | Available for purchase ($75) | 1 per location | Gold, Platinum |
| Custom brochure (partner-branded) | Partner-designed, WHSPR Assist approved | Per partner order | Platinum |

Collateral restocking is managed through the partner portal. Standard materials ship at no charge; custom materials are billed at cost.

---

## 8. Launch Day Checklist

Use this checklist on the day the clinic begins offering WHSPR Assist to patients.

- [ ] Display stand assembled and positioned in patient-visible area
- [ ] Demo units charged and paired to clinic demo smartphone
- [ ] Marketing collateral placed: brochures in waiting area, FAQ cards at front desk, window cling installed
- [ ] All staff have completed training modules 1 -- 4 and passed assessments
- [ ] Partner portal access confirmed for all authorized staff
- [ ] Initial inventory received, unpacked, and serial numbers verified in portal
- [ ] Charging station set up in back office for nightly demo unit charging
- [ ] First 5 patient appointments scheduled (existing patients with hearing concerns)
- [ ] Follow-up protocol documented and assigned to specific staff member

---

## 9. Cross-References

- **Product customization options:** [Product Skinning Guide](../product-app-skinning/product-skinning-guide.md)
- **App branding and integration:** [App Skinning Guide](../product-app-skinning/app-skinning-guide.md)
- **Co-branding rules for collateral:** [Co-Branding Guidelines](../co-branding-guidelines/co-branding-guidelines.md)
- **Tier terms, pricing, and SLA:** [Partner Program Overview](../partner-program-overview/partner-program-overview.md)
- **Technical integration:** [API Integration Overview](../api-integration-spec/api-integration-overview.md)
