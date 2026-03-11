# WHSPR Assist Hardware Platform -- Technical Reference (V03/V06 AI Camera Glasses)

> **Document type:** Pure technical reference
> **Source:** WHSPR V03/V06 manufacturer specification sheets (JL7018F platform)
> **Purpose:** Hardware specification extraction for platform reuse across product variants
> **Last updated:** 2026-02-10

---

## 1. Chipset and AI Integration

| Specification | Value |
|---|---|
| Chipset | JL7018F |
| AI integration | Multimodal AI (ChatGPT, SparkDesk, Doubao compatible) |
| Wake word | "Hey Cyan" |
| Voice control | Temple touch gestures + "Hey Cyan" voice activation |
| On-device processing | AI-enhanced photography (8MP to 32MP upscale), noise cancellation |

### Chipset Notes

- JL7018F is the common platform chipset shared across all V03 and V06 series models.
- Multimodal AI integration supports real-time conversational assistance, visual description, and text recognition.
- "Hey Cyan" wake word is the default activation phrase for hands-free control.
- AI capabilities are delivered through the companion app's cloud connection; the chipset handles local audio/camera processing.

---

## 2. Camera System

| Specification | Value |
|---|---|
| Camera configuration | Dual camera system |
| Resolution (video) | 1200p @ 30fps |
| Resolution (photo, standard) | 8MP |
| Resolution (photo, AI-enhanced) | 32MP |
| Maximum clip duration | 12 minutes per session |
| Maximum total recording | 40 minutes cumulative |
| Lens position | Integrated into frame bridge/temple junction (dual) |

### Camera Notes

- Dual camera configuration enables depth awareness and wider field capture compared to single-lens competitors.
- 1200p video exceeds standard 1080p Full HD, providing sharper capture for visual relay and documentation.
- 8MP native sensor upscales to 32MP through on-device AI enhancement, enabling text recognition and fine detail capture.
- 12-minute continuous clip duration is a platform differentiator; most competitors cap at 30-60 seconds.
- 40-minute cumulative recording limit applies per charge cycle.
- For WHSPR Assist accessibility use cases, the camera system supports text-to-speech relay (capturing printed text, signs, and labels for audio readback).

---

## 3. Audio System

| Specification | Value |
|---|---|
| Speaker type | Open-ear directional speakers |
| Speaker configuration | Stereo (left and right temple arms) |
| Microphone configuration | Dual-microphone system |
| Noise cancellation | ANC (Active Noise Cancellation) + ENC (Environmental Noise Cancellation) |
| Wake word | "Hey Cyan" |
| Music playback time | Approximately 5 hours |
| Call time | Approximately 4 hours |
| Audio profile | Directional projection toward ear canal |

### Audio Notes

- Open-ear design means no ear canal occlusion. Ambient sound passes through naturally while enhanced audio is layered on top.
- Directional speaker projection minimizes audio leakage to bystanders, maintaining discretion in social settings.
- Dual-microphone array with ANC + ENC provides active background noise suppression for calls and voice commands.
- ANC (Active Noise Cancellation) reduces persistent environmental noise such as traffic and HVAC.
- ENC (Environmental Noise Cancellation) isolates the wearer's voice during calls, filtering out surrounding conversation and ambient clutter.
- For WHSPR Assist hearing enhancement use cases, the ANC/ENC system enables conversation focus mode: amplifying speech from the direction the wearer faces while suppressing background noise.
- Stereo left/right speaker placement provides spatial audio awareness for safety and natural sound positioning.

---

## 4. Physical Specifications -- V03 Series (Lifestyle/Everyday)

| Specification | Value |
|---|---|
| Frame material | TR (Thermoplastic Rubber) |
| Frame properties | Lightweight, flexible, hypoallergenic |
| Weight | Lightweight (lighter than 44g, exact TBD) |
| Lens compatibility | Prescription-ready (standard optical lab process) |
| Colors | Matte Black (primary), Clear/Transparent (available) |

### V03 Frame Variants

| Model | Frame Style | Description |
|---|---|---|
| V03-T5 | Square Frame | Classic/professional look. Full-rim construction. |
| V03-T6 | Round Frame | Retro/intellectual look. Full-rim construction. |
| V03-T8 | Semi-Rimless | Modern/minimalist. Half-rim with metal lower wire. Lightest variant. |

### V03 Lens Options

| Lens Type | Use Case |
|---|---|
| Anti-Blue Light | Screen use, indoor environments |
| Sunglasses (tinted) | Outdoor sun protection |
| Photochromic | Adaptive indoor/outdoor transition |
| Clear | General use, prescription base |

---

## 5. Physical Specifications -- V06 Series (Sport/Active)

| Specification | Value |
|---|---|
| Frame material | TR (Thermoplastic Rubber) |
| Frame style | Sport square, wrap-around, full coverage |
| Grip features | Rubberized nose pads and temple grips |
| Colors | White frame + colored lens, Black frame + colored lens |
| Design language | Wrap-around sport shield style |

### V06 Frame Variants

| Model | Frame Style | Description |
|---|---|---|
| V06-T | Sport Square | Wrap-around full-coverage sport design with rubberized grip points. |

### V06 Lens Options

| Lens Type | Variants |
|---|---|
| Sport-tinted | Blue mirror, Green mirror, Rainbow |
| Polarized | Standard polarization for glare reduction |
| Photochromic | Adaptive indoor/outdoor transition |

---

## 6. Battery and Power

| Specification | V03 Series | V06 Series |
|---|---|---|
| Battery capacity | 220mAh | 260mAh |
| Music playback | ~5 hours | ~5 hours |
| Call time | ~4 hours | ~4 hours |
| Charging method | Magnetic 2-pin connector | Magnetic 2-pin connector |
| Charging cable | Magnetic 2-pin cable (included) | Magnetic 2-pin cable (included) |

### Battery Notes

- V06 series carries a larger 260mAh battery to support extended active use during sport and outdoor activities.
- V03 series 220mAh battery is optimized for all-day lightweight everyday wear.
- Magnetic 2-pin connector eliminates exposed ports on the glasses, improving durability and simplifying the charging experience.
- No USB-C port on the glasses themselves; the magnetic cable connects to a standard USB charging source on the other end.

---

## 7. Storage and Connectivity

| Specification | V03 Series | V06 Series |
|---|---|---|
| Internal storage | Built-in SD NAND (capacity unspecified) | 4GB dedicated storage |
| Wireless protocol | Bluetooth 5.4 | Bluetooth 5.4 |
| iOS compatibility | Yes | Yes |
| Android compatibility | Yes | Yes |
| File transfer | Via companion app over Bluetooth | Via companion app over Bluetooth |

### Storage and Connectivity Notes

- V06 series includes 4GB dedicated storage, supporting longer recording sessions and media buffering during active use.
- V03 series uses built-in SD NAND flash; exact capacity is not specified on the manufacturer data sheet.
- Bluetooth 5.4 provides improved range, throughput, and power efficiency over earlier Bluetooth versions.
- Bluetooth 5.4 supports LE Audio and Auracast broadcasting standards, enabling future hearing enhancement protocol support.
- All media stored locally on device by default. Cloud storage optional via companion app integration.

---

## 8. Companion App -- Technical Capabilities

| Feature | Description |
|---|---|
| Platform | iOS and Android |
| Price | Free download |
| AI integration | ChatGPT, SparkDesk, Doubao multimodal AI |
| Media management | View, transfer, delete photos and videos |
| Wake word configuration | "Hey Cyan" default activation |
| Camera controls | Remote shutter, recording start/stop, mode selection |
| Audio controls | Volume, playback, equalizer, hearing profile calibration |
| Hearing profile | Audiogram-based calibration and tracking over time |
| Vision assist | Camera to text recognition to audio readback mode |
| Provider portal | Clinic-side analytics dashboard for healthcare professionals |
| Family sharing | Caregiver monitoring of usage and hearing health |
| Firmware updates | OTA (over-the-air) via Bluetooth |
| Device diagnostics | Battery status, storage usage, connectivity health |

### App Notes

- App is required for initial device setup, pairing, and hearing profile calibration.
- Hearing profile calibration creates a personalized audiogram that shapes audio output for the wearer's specific hearing needs.
- Vision assist mode uses the dual camera system to capture text and relay it as audio through the open-ear speakers.
- Provider portal enables audiologists and optometrists to review patient usage data and hearing trends.
- Family sharing allows designated caregivers to monitor hearing health remotely without full device control.
- Firmware updates delivered through app; no desktop software required.

---

## 9. Box Contents

| Item | Quantity |
|---|---|
| Smart glasses (V03 or V06 model) | 1 |
| Magnetic 2-pin charging cable | 1 |
| Microfiber cleaning cloth | 1 |
| Carrying pouch | 1 |
| Quick-start guide | 1 |

### Packaging Notes

- Quick-start guide covers pairing, charging, basic capture, app installation, and "Hey Cyan" voice activation.
- Carrying pouch provides scratch protection and portability.
- Microfiber cleaning cloth is lens-safe for both stock and prescription lenses.
- Large-print quick-start guide available for WHSPR Assist accessibility product variants.

---

## 10. Commercial Terms

| Term | Value |
|---|---|
| B2B wholesale price (USD) | $120 - $140 per unit |
| B2B clinic retail price (USD) | $249 - $349 (with fitting and calibration) |
| B2C DTC retail price (USD) | $199 - $249 |
| Warranty | Standard manufacturer warranty (duration varies by channel) |
| Return policy | Channel-dependent |
| Shipping | Channel-dependent |

### Commercial Notes

- B2B wholesale provides $100+ margin per unit for healthcare professionals.
- B2B pricing includes professional fitting, hearing profile calibration, and clinic follow-up.
- B2C DTC pricing is lower but does not include professional fitting or hearing calibration services.
- Price range reflects variant differences (V03 vs V06, lens type, frame style, prescription vs. stock).
- Whitelabel pricing available for clinic chains requiring custom branding.

---

## 11. Manufacturing Reference

| Component | Material / Source |
|---|---|
| Frame | TR (Thermoplastic Rubber) |
| Temple arms | TR with integrated electronics, gesture touch surface |
| Lenses (stock) | Polycarbonate (prescription-compatible) |
| Nose pads | Hypoallergenic silicone |
| Electronics housing | Integrated into temple arms |
| Charging interface | Magnetic 2-pin contact points |
| Manufacturing region | Shenzhen, China |
| Assembly | Contract manufacturing |

### Manufacturing Notes

- TR (Thermoplastic Rubber) frame construction provides flexibility, durability, and hypoallergenic properties at lower weight than metal frames.
- TR is widely used in premium eyewear for its combination of comfort, strength, and moldability.
- Magnetic 2-pin charging contact points are recessed into the temple arm for clean aesthetics.
- Supply chain is established through Shenzhen manufacturing partnerships.
- No retooling required for derivative products using the same JL7018F hardware platform.
- Quality control processes established for battery cycling, optical clarity, and Bluetooth certification.

---

*This document contains extracted technical specifications only. It does not contain positioning, messaging, audience definitions, or marketing language. For product strategy, see product.md and whsprv2-brand-positioning.md.*
