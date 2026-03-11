---
type: Technical Integration Documentation
audience: Engineering, Technical architects, Partner development teams, DevOps
last_updated: 2026-02-10
status: Active
project: WHSPR Assist B2B Whitelabel Program
related_docs:
  - ../WHITELABEL_README.md
  - ../partner-program-overview/partner-program-overview.md
  - ../product-app-skinning/app-skinning-guide.md
  - ../clinic-deployment-guide/clinic-deployment-playbook.md
---

# WHSPR Assist API Integration Overview

## 1. Introduction

The WHSPR Assist Partner API provides programmatic access to patient profiles, device management, usage analytics, and clinic operations. Partners use these APIs to integrate WHSPR Assist data into their existing practice management systems (PMS), electronic health records (EHR), and custom dashboards.

API access is tiered by partner level. Silver partners have access to the Clinic Portal API for basic operations. Gold partners gain access to the full API suite with standard rate limits. Platinum partners receive elevated rate limits, dedicated infrastructure, and priority support for custom integration requirements.

This document provides an architectural overview of the API surface, authentication model, EHR integration strategy, webhook system, and available SDKs. Full endpoint documentation, request/response schemas, and interactive examples are available on the partner developer portal at `https://developers.whspr-assist.com/partners`.

---

## 2. Authentication

### 2.1 OAuth 2.0 Flow

All API access uses OAuth 2.0 with the Client Credentials grant type for server-to-server integrations and the Authorization Code grant type for user-facing applications.

| Grant Type | Use Case | Token Lifetime |
|-----------|----------|---------------|
| Client Credentials | Server-to-server integrations (clinic portal, EHR sync, analytics dashboards) | 1 hour (refresh with client credentials) |
| Authorization Code | Patient-facing applications (custom apps, patient portals) | 30 minutes (refresh token: 30 days) |

### 2.2 Partner API Keys

Each partner receives a unique API key pair (client ID and client secret) during onboarding. Keys are scoped to the partner's tier and authorized locations.

| Scope | Silver | Gold | Platinum |
|-------|--------|------|----------|
| clinic.read | Yes | Yes | Yes |
| clinic.write | Yes | Yes | Yes |
| patient.read | -- | Yes | Yes |
| patient.write | -- | Yes | Yes |
| device.read | -- | Yes | Yes |
| device.write | -- | Yes | Yes |
| analytics.read | -- | Yes | Yes |
| analytics.export | -- | -- | Yes |
| webhook.manage | -- | Yes | Yes |
| firmware.read | -- | -- | Yes |

### 2.3 Key Management

- API keys are provisioned through the partner portal under Settings > API Access
- Keys can be rotated at any time; the previous key remains valid for 24 hours after rotation to support zero-downtime deployments
- Separate keys are issued for sandbox and production environments
- All API traffic must use HTTPS (TLS 1.2 minimum; TLS 1.3 recommended)
- API keys must not be embedded in client-side code or mobile applications; use the Authorization Code flow for client-side access

---

## 3. Core APIs

### 3.1 Patient Profile API

Manage de-identified patient profiles associated with the partner's clinic locations.

| Endpoint | Method | Description | Tier |
|----------|--------|-------------|------|
| /v1/patients | GET | List patients (paginated, filterable by clinic, status) | Gold, Platinum |
| /v1/patients | POST | Create a new patient profile | Gold, Platinum |
| /v1/patients/{id} | GET | Retrieve patient profile details | Gold, Platinum |
| /v1/patients/{id} | PUT | Update patient profile | Gold, Platinum |
| /v1/patients/{id} | DELETE | Mark patient as inactive (soft delete; data retained per retention policy) | Gold, Platinum |
| /v1/patients/{id}/audiogram | GET | Retrieve patient audiogram history | Gold, Platinum |
| /v1/patients/{id}/audiogram | POST | Import audiogram data | Gold, Platinum |
| /v1/patients/{id}/hearing-profile | GET | Retrieve current hearing profile configuration | Gold, Platinum |
| /v1/patients/{id}/usage | GET | Retrieve usage statistics (daily wear time, feature usage) | Gold, Platinum |

**Key data fields:**

| Field | Type | Description |
|-------|------|-------------|
| external_id | string | Partner's internal patient ID (for cross-referencing with PMS/EHR) |
| clinic_id | string | Associated clinic location |
| created_at | datetime | Profile creation timestamp |
| hearing_profile | object | Current hearing enhancement settings |
| audiogram | object | Most recent audiogram data (frequencies, thresholds) |
| devices | array | List of paired device serial numbers |
| status | enum | active, inactive, pending |

All patient data is de-identified by default. The `external_id` field allows partners to link WHSPR Assist profiles to their own patient records without exposing PHI through the API.

### 3.2 Device Management API

Provision, track, and manage WHSPR Assist devices across partner locations.

| Endpoint | Method | Description | Tier |
|----------|--------|-------------|------|
| /v1/devices | GET | List all devices (filterable by clinic, status, model) | Gold, Platinum |
| /v1/devices/{serial} | GET | Retrieve device details (model, firmware, warranty, status) | Gold, Platinum |
| /v1/devices/{serial}/provision | POST | Provision a device for a specific clinic and patient | Gold, Platinum |
| /v1/devices/{serial}/warranty | GET | Retrieve warranty status and coverage details | Gold, Platinum |
| /v1/devices/{serial}/firmware | GET | Check current firmware version and available updates | Platinum |
| /v1/devices/{serial}/diagnostics | GET | Retrieve device health diagnostics (battery cycles, connectivity logs) | Platinum |

**Device status values:** provisioned, active, inactive, warranty_claim, replaced, decommissioned

### 3.3 Analytics API

Access aggregated usage statistics and hearing profile trends for clinical reporting and business intelligence.

| Endpoint | Method | Description | Tier |
|----------|--------|-------------|------|
| /v1/analytics/usage | GET | Aggregated usage statistics across all patients (filterable by clinic, date range) | Gold, Platinum |
| /v1/analytics/hearing-trends | GET | Hearing profile trend data (average adjustments, environmental preset usage) | Gold, Platinum |
| /v1/analytics/engagement | GET | Patient engagement metrics (app opens, feature adoption, retention) | Gold, Platinum |
| /v1/analytics/inventory | GET | Inventory turnover and sales velocity by clinic | Gold, Platinum |
| /v1/analytics/export | POST | Request a full data export (CSV or JSON, delivered via secure download link) | Platinum |

**Date range:** All analytics endpoints accept `start_date` and `end_date` query parameters (ISO 8601 format). Maximum range: 12 months. Default: last 30 days.

### 3.4 Clinic Portal API

Manage clinic locations, staff accounts, and operational configuration.

| Endpoint | Method | Description | Tier |
|----------|--------|-------------|------|
| /v1/clinics | GET | List all partner clinic locations | All |
| /v1/clinics | POST | Add a new clinic location | All |
| /v1/clinics/{id} | PUT | Update clinic details | All |
| /v1/clinics/{id} | DELETE | Deactivate a clinic location | All |
| /v1/clinics/{id}/staff | GET | List staff accounts for a clinic | All |
| /v1/clinics/{id}/staff | POST | Create a staff account (roles: admin, clinician, front_desk) | All |
| /v1/clinics/{id}/staff/{staff_id} | PUT | Update staff role or status | All |
| /v1/clinics/{id}/inventory | GET | Current inventory count and serial numbers | All |
| /v1/clinics/{id}/orders | GET | Order history for the clinic | All |
| /v1/clinics/{id}/orders | POST | Place a new inventory order | Gold, Platinum |

---

## 4. EHR and PMS Integration

### 4.1 HL7 FHIR R4 Compliance

The WHSPR Assist API supports HL7 FHIR R4 for interoperability with clinical information systems. FHIR resources are available at the `/v1/fhir` base path.

| FHIR Resource | Supported Operations | Description |
|---------------|---------------------|-------------|
| Patient | read, search | De-identified patient demographics linked via external_id |
| DiagnosticReport | read, create, search | Audiogram results as diagnostic reports |
| Observation | read, search | Hearing profile observations (daily usage, threshold changes) |
| Device | read, search | WHSPR Assist device information (model, serial, status) |
| Appointment | read, create, update | Scheduled clinic appointments |

### 4.2 Audiogram Import

Partners can import audiogram data from their existing clinical systems using multiple methods:

| Method | Format | Description |
|--------|--------|-------------|
| FHIR DiagnosticReport | JSON (FHIR R4) | Standard FHIR resource with audiometric observations |
| CSV Upload | CSV | Column format: frequency_hz, threshold_db_hl, ear (left/right), date |
| Direct API | JSON | WHSPR Assist native format via /v1/patients/{id}/audiogram |
| Partner Portal | Manual entry | Web form for manual audiogram data entry |

**Standard audiometric frequencies:** 250, 500, 1000, 2000, 3000, 4000, 6000, 8000 Hz

### 4.3 Patient Record Linkage

The `external_id` field on the Patient resource supports bidirectional linkage between WHSPR Assist and partner clinical systems. Partners assign their internal patient ID as the `external_id` during patient creation; subsequent API queries can filter by `external_id` for seamless cross-referencing.

### 4.4 Supported EHR Systems

| System | Integration Type | Status |
|--------|-----------------|--------|
| Epic | FHIR R4 (Smart on FHIR) | Generally available |
| Cerner (Oracle Health) | FHIR R4 | Generally available |
| NOAH | Direct API (audiogram-specific) | Generally available |
| Blueprint OMS | CSV import/export | Generally available |
| Custom PMS | REST API + CSV | Available via generic integration endpoints |

Partners using systems not listed above can integrate via the generic REST API or CSV import/export. The WHSPR Assist integration team provides guidance during onboarding (Gold and Platinum tiers).

---

## 5. Webhook Events

Webhooks deliver real-time event notifications to partner-specified HTTPS endpoints. All payloads are JSON, signed with an HMAC-SHA256 signature using the partner's webhook secret.

### 5.1 Device Events

| Event | Trigger | Payload Summary |
|-------|---------|----------------|
| device.paired | Device successfully paired with patient smartphone | device_serial, patient_id, clinic_id, timestamp |
| device.firmware_updated | Firmware update completed successfully | device_serial, old_version, new_version, timestamp |
| device.low_battery | Battery level drops below 15% | device_serial, patient_id, battery_percent, timestamp |
| device.disconnected | Bluetooth connection lost for more than 30 minutes | device_serial, patient_id, last_connected, timestamp |
| device.warranty_expiring | Warranty expires within 30 days | device_serial, patient_id, expiration_date |

### 5.2 Patient Events

| Event | Trigger | Payload Summary |
|-------|---------|----------------|
| patient.hearing_profile_updated | Patient's hearing profile recalibrated (manually or automatically) | patient_id, clinic_id, changes_summary, timestamp |
| patient.usage_milestone | Patient reaches a usage milestone (7-day, 30-day, 90-day, 365-day) | patient_id, milestone, total_wear_hours, timestamp |
| patient.audiogram_imported | New audiogram data imported to patient profile | patient_id, audiogram_id, source, timestamp |
| patient.inactive | Patient has not used the device in 14+ days | patient_id, last_active_date, timestamp |

### 5.3 Appointment Events

| Event | Trigger | Payload Summary |
|-------|---------|----------------|
| appointment.scheduled | Patient schedules a follow-up through the app | patient_id, clinic_id, datetime, appointment_type, timestamp |
| appointment.completed | Appointment marked as completed in the portal | patient_id, clinic_id, datetime, notes_summary, timestamp |
| appointment.cancelled | Patient or staff cancels an appointment | patient_id, clinic_id, datetime, cancellation_reason, timestamp |

### 5.4 Order Events

| Event | Trigger | Payload Summary |
|-------|---------|----------------|
| order.placed | New inventory order submitted | order_id, clinic_id, items, total_units, timestamp |
| order.shipped | Order shipped from warehouse | order_id, tracking_number, carrier, estimated_delivery, timestamp |
| order.delivered | Order delivered (carrier confirmation) | order_id, clinic_id, delivery_date, timestamp |

### 5.5 Webhook Configuration

Webhooks are configured through the partner portal under Settings > Webhooks, or programmatically via the API:

| Endpoint | Method | Description |
|----------|--------|-------------|
| /v1/webhooks | GET | List configured webhook endpoints |
| /v1/webhooks | POST | Register a new webhook endpoint |
| /v1/webhooks/{id} | PUT | Update endpoint URL or subscribed events |
| /v1/webhooks/{id} | DELETE | Remove a webhook endpoint |
| /v1/webhooks/{id}/test | POST | Send a test event to the endpoint |

**Retry policy:** Failed deliveries (non-2xx response or timeout after 10 seconds) are retried 3 times with exponential backoff (1 minute, 5 minutes, 30 minutes). After 3 failures, the event is logged and the partner is notified via email.

---

## 6. Rate Limits

| Tier | Requests Per Minute | Requests Per Day | Burst Limit |
|------|-------------------|-----------------|-------------|
| Silver | 100 | 10,000 | 20 requests/second |
| Gold | 500 | 50,000 | 50 requests/second |
| Platinum | 2,000 | 200,000 | 200 requests/second |

Rate limit headers are included in all API responses:

| Header | Description |
|--------|-------------|
| X-RateLimit-Limit | Maximum requests per minute for the current tier |
| X-RateLimit-Remaining | Requests remaining in the current minute window |
| X-RateLimit-Reset | Unix timestamp when the rate limit window resets |

Requests exceeding the rate limit receive a `429 Too Many Requests` response with a `Retry-After` header.

---

## 7. Sandbox Environment

All partners receive access to a sandbox environment for integration development and testing.

| Attribute | Sandbox | Production |
|-----------|---------|------------|
| Base URL | `https://sandbox-api.whspr-assist.com/v1` | `https://api.whspr-assist.com/v1` |
| Authentication | Sandbox API keys (separate from production) | Production API keys |
| Data | Mock data (100 simulated patients, 50 devices, 5 clinics) | Live partner data |
| Webhooks | Delivered to sandbox webhook endpoints | Delivered to production endpoints |
| Rate limits | Same as production tier | Per-tier limits apply |
| Data persistence | Reset weekly (every Sunday 00:00 UTC) | Persistent |

### 7.1 Mock Data

The sandbox environment is pre-populated with realistic mock data:

- 100 simulated patient profiles with audiogram history and usage data
- 50 simulated devices across all frame models with varied firmware versions
- 5 simulated clinic locations with staff accounts
- 12 months of historical usage analytics
- Simulated webhook events triggered on a schedule (every 15 minutes)

Partners can also create their own test data in the sandbox using the standard API endpoints.

### 7.2 Sandbox Limitations

- No real device pairing (sandbox does not communicate with physical devices)
- No real App Store submissions (Platinum app skinning is tested via TestFlight/internal tracks)
- Email and push notification delivery is simulated (logged but not sent)
- FHIR endpoints connect to a mock EHR (not real Epic/Cerner instances)

---

## 8. SDKs and Client Libraries

WHSPR Assist provides official SDKs for the three primary development platforms. SDKs wrap the REST API with typed interfaces, handle authentication, and provide convenience methods for common operations.

### 8.1 Available SDKs

| Platform | Language | Package Manager | Repository |
|----------|----------|----------------|------------|
| iOS | Swift | Swift Package Manager | `github.com/whspr-assist/sdk-swift` |
| Android | Kotlin | Maven Central | `com.whspr-assist:partner-sdk` |
| Web | TypeScript | npm | `@whspr-assist/partner-sdk` |

### 8.2 SDK Features

All SDKs provide:

- OAuth 2.0 authentication with automatic token refresh
- Typed request and response models for all API endpoints
- Webhook signature verification utilities
- Pagination helpers for list endpoints
- Error handling with typed error codes and retry logic
- Comprehensive inline documentation and code examples

### 8.3 SDK Versioning

SDKs follow semantic versioning (SemVer). Major versions align with API versions. Partners are notified 90 days before any breaking API changes, and SDK updates are published at least 30 days before the API change takes effect.

| API Version | SDK Version | Status |
|-------------|-------------|--------|
| v1 | 1.x.x | Current (generally available) |
| v2 | 2.x.x (preview) | Planned (Q4 2026) |

### 8.4 Developer Portal

The partner developer portal (`https://developers.whspr-assist.com/partners`) provides:

- Interactive API explorer (try endpoints with sandbox credentials)
- SDK installation guides and quickstart tutorials
- Code samples for common integration scenarios (EHR sync, patient onboarding, analytics dashboard)
- Webhook testing tools (send test events, inspect payloads)
- API changelog and migration guides
- Community forum for partner developers
- Direct support channel for Gold and Platinum partners (Slack or email)

---

## 9. Error Handling

### 9.1 Standard Error Response

All API errors return a consistent JSON structure:

```
{
  "error": {
    "code": "PATIENT_NOT_FOUND",
    "message": "No patient found with the specified ID.",
    "status": 404,
    "request_id": "req_abc123def456"
  }
}
```

### 9.2 Common Error Codes

| HTTP Status | Error Code | Description |
|-------------|-----------|-------------|
| 400 | INVALID_REQUEST | Malformed request body or missing required fields |
| 401 | UNAUTHORIZED | Invalid or expired authentication token |
| 403 | FORBIDDEN | Insufficient scope for the requested operation |
| 404 | NOT_FOUND | Requested resource does not exist |
| 409 | CONFLICT | Resource already exists (e.g., duplicate external_id) |
| 422 | VALIDATION_ERROR | Request body fails validation (details in error.details array) |
| 429 | RATE_LIMITED | Rate limit exceeded; see Retry-After header |
| 500 | INTERNAL_ERROR | Server error; include request_id when contacting support |
| 503 | SERVICE_UNAVAILABLE | Temporary outage; retry with exponential backoff |

---

## 10. Cross-References

- **Partner tiers and API scope:** [Partner Program Overview](../partner-program-overview/partner-program-overview.md)
- **App integration and skinning:** [App Skinning Guide](../product-app-skinning/app-skinning-guide.md)
- **Clinic deployment and operations:** [Clinic Deployment Playbook](../clinic-deployment-guide/clinic-deployment-playbook.md)
- **Branding requirements for API-driven content:** [Co-Branding Guidelines](../co-branding-guidelines/co-branding-guidelines.md)
- **Product configuration reference:** [Product Skinning Guide](../product-app-skinning/product-skinning-guide.md)
