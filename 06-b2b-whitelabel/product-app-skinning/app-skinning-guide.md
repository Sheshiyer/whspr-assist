---
type: App Customization Guide
audience: Engineering, Product management, Partner relations, Compliance
last_updated: 2026-02-10
status: Active
project: WHSPR Assist B2B Whitelabel Program
related_docs:
  - ../WHITELABEL_README.md
  - ../partner-program-overview/partner-program-overview.md
  - product-skinning-guide.md
  - ../api-integration-spec/api-integration-overview.md
  - ../co-branding-guidelines/co-branding-guidelines.md
---

# WHSPR Assist App Skinning Guide

## 1. Overview

The WHSPR Assist companion app is the primary interface between patients and their smart glasses. It manages device pairing, hearing profile calibration, audiogram tracking, vision assist mode, and ongoing usage analytics. For whitelabel partners, the app also serves as the branded touchpoint that reinforces the partner's clinical relationship with the patient.

This document defines app customization options by partner tier, technical integration points, compliance requirements, and App Store distribution strategies. For physical product customization, refer to the [Product Skinning Guide](product-skinning-guide.md).

---

## 2. Skinning Levels by Tier

### 2.1 Silver Tier -- Directory Listing

Silver partners use the standard WHSPR Assist companion app without visual modification. The partner's clinic appears in the "Find a Provider" directory within the app, giving patients a way to locate their prescribing clinic for follow-up appointments and support.

**Silver app features:**
- Standard WHSPR Assist branding, icon, and color scheme
- Partner clinic listed in the "Find a Provider" directory (searchable by name, city, and ZIP code)
- Clinic profile includes: name, address, phone number, hours, website link
- Clinic listing managed through the partner portal (self-service)

### 2.2 Gold Tier -- Branded Experience

Gold partners receive visible branding within the standard WHSPR Assist app infrastructure. Patients still download the WHSPR Assist app from the App Store, but the experience is personalized to the partner's brand from first launch.

**Gold app features (in addition to Silver):**
- Custom splash screen displayed during app launch (partner logo on branded background)
- Partner logo on the home screen header (replaces WHSPR Assist logo in the top navigation bar)
- Branded onboarding sequence (partner welcome message, custom imagery, clinic contact integration)
- Custom accent color applied throughout the app interface (buttons, links, progress indicators, toggle states)
- Partner-branded push notification templates (appointment reminders, usage milestones)
- "Powered by WHSPR Assist" attribution in app settings footer

**Gold branding requirements:**
- Partner logo: PNG with transparency, minimum 512 x 512 pixels
- Splash screen background: Full-bleed image, 1290 x 2796 pixels (iPhone) and 1440 x 3120 pixels (Android)
- Accent color: Hex value provided; must meet WCAG 2.1 AA contrast ratio against white (#FFFFFF) and dark (#1B1B1B) backgrounds
- Onboarding copy: Up to 3 screens, 50 words maximum per screen, subject to WHSPR Assist approval

### 2.3 Platinum Tier -- Fully Skinned App

Platinum partners receive a completely rebranded app that operates under the partner's identity. Patients interact exclusively with the partner's brand; WHSPR Assist attribution is limited to the "About" screen and regulatory fine print.

**Platinum app features (in addition to Gold):**
- Custom app name (e.g., "[Partner] Hearing Glasses" or "[Partner] Smart Vision")
- Custom app icon for App Store and home screen
- Custom color scheme applied to all UI elements (primary, secondary, accent, background, text)
- Custom clinic locator showing only partner locations (removes general "Find a Provider" directory)
- Removal of WHSPR Assist branding from all patient-facing screens
- Custom onboarding flow (up to 6 screens, partner-authored content, custom imagery)
- Custom "About" screen with partner company information
- White-labeled support contact (partner's support email and phone displayed instead of WHSPR Assist)
- Custom terms of service and privacy policy links
- WHSPR Assist attribution limited to: "Hearing technology by WHSPR Assist" on the About screen

**Platinum branding requirements:**
- All Gold requirements, plus:
- App icon: 1024 x 1024 pixels PNG (Apple) and 512 x 512 pixels PNG (Google)
- Full color palette: Primary, secondary, accent, background, surface, error colors (hex values)
- Typography preference: Select from supported font families or accept platform defaults
- Custom onboarding content: Copy, imagery, and flow reviewed by WHSPR Assist UX team
- Legal review: Partner's terms of service and privacy policy must be reviewed for compatibility with WHSPR Assist data practices

---

## 3. Technical Integration Points

Partners at Gold and Platinum tiers can integrate their existing clinical systems with the WHSPR Assist platform through the following APIs. Full technical documentation is available in the [API Integration Overview](../api-integration-spec/api-integration-overview.md).

### 3.1 Clinic Locator API

Manage partner clinic locations displayed in the app's provider directory.

| Endpoint | Method | Description |
|----------|--------|-------------|
| /v1/clinics | GET | List all partner clinic locations |
| /v1/clinics | POST | Add a new clinic location |
| /v1/clinics/{id} | PUT | Update clinic details (hours, phone, address) |
| /v1/clinics/{id} | DELETE | Remove a clinic from the directory |

**Data fields:** name, address, city, state, zip, country, phone, email, website, hours (structured), latitude, longitude, accepting_new_patients (boolean)

### 3.2 Patient Profile Sync

Sync de-identified patient usage data to the partner's clinic dashboard for clinical follow-up and hearing profile monitoring.

| Data Point | Sync Frequency | Description |
|-----------|---------------|-------------|
| Daily wear time | Nightly batch | Hours of active device use per day |
| Hearing profile adjustments | Real-time | Changes to volume, EQ, or environmental presets |
| Audiogram snapshots | On capture | In-app audiogram test results (if patient opts in) |
| Vision assist usage | Nightly batch | Frequency and duration of magnification and text-to-speech use |
| Battery and connectivity | Nightly batch | Average battery life, Bluetooth disconnect events |

All patient data is de-identified by default. Patient consent is required for any identifiable data sharing. See Section 5 (Compliance) for details.

### 3.3 Audiogram Import

Import existing audiogram data from the partner's practice management system (PMS) or electronic health record (EHR) into the patient's WHSPR Assist hearing profile.

- **Format:** Standard audiometric data (frequencies: 250Hz -- 8000Hz, thresholds in dB HL)
- **Import methods:** HL7 FHIR R4 DiagnosticReport resource, CSV upload via partner portal, API endpoint
- **Supported systems:** Epic, Cerner, NOAH, Blueprint OMS (see [API Integration Overview](../api-integration-spec/api-integration-overview.md) for integration details)

### 3.4 Appointment Scheduling Webhook

Receive real-time notifications when patients schedule, reschedule, or cancel follow-up appointments through the app.

| Event | Payload |
|-------|---------|
| appointment.scheduled | patient_id, clinic_id, datetime, type (fitting, follow-up, adjustment) |
| appointment.rescheduled | patient_id, clinic_id, old_datetime, new_datetime |
| appointment.cancelled | patient_id, clinic_id, datetime, reason |

Webhook endpoints are configured through the partner portal. HTTPS required; payloads signed with partner-specific HMAC key.

### 3.5 Push Notification Customization

Gold and Platinum partners can customize the content and timing of push notifications sent to their patients.

| Notification Type | Default Trigger | Customizable |
|------------------|----------------|-------------|
| Welcome | First device pairing | Message text, timing |
| Usage milestone | 7-day, 30-day, 90-day active use | Message text, milestone thresholds |
| Appointment reminder | 24 hours before scheduled appointment | Message text, timing (24h, 48h, 72h) |
| Hearing profile update | New audiogram available | Message text |
| Firmware update | New firmware released | Message text (timing not customizable) |
| Re-engagement | 14 days of inactivity | Message text, timing, opt-out |

---

## 4. App Store Distribution

### 4.1 Silver and Gold -- Shared Infrastructure

Silver and Gold partners operate within the standard WHSPR Assist app distributed through the Apple App Store and Google Play Store under the WHSPR Assist developer account. Branding customization for Gold partners is applied dynamically at runtime based on the partner association of the paired device.

- App name in stores: "WHSPR Assist"
- App icon: Standard WHSPR Assist icon
- Gold branding activates automatically when a Gold-tier device is paired
- If a patient resets their device or pairs a non-partner device, the app reverts to standard WHSPR Assist branding

### 4.2 Platinum -- Partner App Store Account

Platinum partners publish a fully skinned app under their own Apple Developer and Google Play Developer accounts. WHSPR Assist provides the build artifacts and manages the technical submission process.

**Distribution workflow:**

1. WHSPR Assist engineering produces the skinned build using partner-approved branding assets
2. Build is delivered to partner for QA review in TestFlight (iOS) and internal testing track (Android)
3. Partner approves the build
4. WHSPR Assist submits the app to App Store Connect and Google Play Console using the partner's developer account credentials (delegated access)
5. Partner approves the store listing and triggers publication
6. Ongoing updates follow the same review-approve-publish cycle

**Ongoing maintenance:**
- Monthly minor updates (bug fixes, performance) are submitted automatically with partner notification
- Quarterly feature releases require partner QA review before submission
- Critical security patches may be submitted with expedited 24-hour partner review window

**Cost responsibility:**
- Apple Developer Program ($99/year) and Google Play Developer ($25 one-time) fees are the partner's responsibility
- WHSPR Assist covers all build, submission, and maintenance engineering costs for Platinum partners

---

## 5. Compliance

### 5.1 HIPAA Compliance (United States)

The WHSPR Assist platform is designed to support HIPAA compliance for partners operating in the United States healthcare system.

- **Business Associate Agreement (BAA):** WHSPR Assist executes a BAA with each US-based Gold and Platinum partner
- **Data encryption:** All patient data encrypted at rest (AES-256) and in transit (TLS 1.3)
- **Access controls:** Role-based access in the partner portal; audit logging for all patient data access
- **De-identification:** Patient usage analytics are de-identified by default; identifiable data requires explicit patient consent
- **Breach notification:** WHSPR Assist provides 24-hour notification to affected partners in the event of a data breach

### 5.2 GDPR Compliance (European Union)

Partners operating in the EU or processing data of EU residents are supported with GDPR-compliant data handling.

- **Data Processing Agreement (DPA):** Executed with each EU-based partner
- **Consent management:** Configurable consent flows within the app (granular opt-in for data collection, analytics sharing, and marketing communications)
- **Right to erasure:** Patient data deletion requests processed within 30 days via partner portal or API
- **Data portability:** Patient data export available in JSON format via API
- **Data minimization:** Only clinically relevant data points collected; no behavioral tracking beyond hearing and vision usage

### 5.3 Data Residency

| Region | Data Center | Available To |
|--------|------------|-------------|
| United States | AWS us-east-1 (Virginia) | All US partners (default) |
| European Union | AWS eu-west-1 (Ireland) | EU partners, or any partner requesting EU residency |
| Asia-Pacific | AWS ap-southeast-1 (Singapore) | APAC partners (Platinum only, upon request) |

Data residency selection is made during partner onboarding and cannot be changed without a data migration engagement (available for Platinum partners at no additional cost).

### 5.4 Patient Consent Flows

The app presents configurable consent screens during patient onboarding. Partners can customize the consent language (subject to legal review) and select which data collection options are presented.

| Consent Category | Default | Configurable |
|-----------------|---------|-------------|
| Device usage analytics (de-identified) | Opt-in | Yes (Gold, Platinum) |
| Hearing profile sharing with clinic | Opt-in | Yes (Gold, Platinum) |
| Audiogram data sharing | Opt-in | Yes (Gold, Platinum) |
| Marketing communications | Opt-in | Yes (Gold, Platinum) |
| Third-party analytics (anonymized) | Opt-out | Yes (Platinum only) |

---

## 6. Branding Asset Submission

### 6.1 Required Assets by Tier

| Asset | Silver | Gold | Platinum |
|-------|--------|------|----------|
| Clinic listing (name, address, hours) | Required | Required | Required |
| Partner logo (512px PNG, transparent) | -- | Required | Required |
| Splash screen image (1290x2796 / 1440x3120) | -- | Required | Required |
| Accent color (hex value) | -- | Required | Required |
| Onboarding copy (up to 3 screens) | -- | Required | Required |
| App icon (1024px PNG) | -- | -- | Required |
| Full color palette (6 hex values) | -- | -- | Required |
| Custom app name | -- | -- | Required |
| Custom onboarding (up to 6 screens + imagery) | -- | -- | Required |
| Terms of service URL | -- | -- | Required |
| Privacy policy URL | -- | -- | Required |

### 6.2 Review and Approval Timeline

| Tier | Initial Review | Revision Rounds | Total Timeline |
|------|---------------|----------------|---------------|
| Gold | 3 business days | Up to 2 rounds | 5 -- 7 business days |
| Platinum | 5 business days | Up to 3 rounds | 10 -- 15 business days |

---

## 7. Cross-References

- **Physical product customization:** [Product Skinning Guide](product-skinning-guide.md)
- **API technical documentation:** [API Integration Overview](../api-integration-spec/api-integration-overview.md)
- **Brand rules for partner materials:** [Co-Branding Guidelines](../co-branding-guidelines/co-branding-guidelines.md)
- **Tier terms and pricing:** [Partner Program Overview](../partner-program-overview/partner-program-overview.md)
- **Clinic deployment and training:** [Clinic Deployment Playbook](../clinic-deployment-guide/clinic-deployment-playbook.md)
