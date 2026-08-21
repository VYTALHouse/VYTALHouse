# 10 - Website and App Spec

## Public Website
- Home: brand signal, hero, waitlist CTA, facility zones, membership snapshot.
- Services: HBOT, IV/NAD+, red light, cryotherapy, sauna/cold plunge, float, compression.
- Memberships: Core, Elite, Black comparison and waitlist capture.
- Facility: conceptual floor plan, zone details, and target site context for 9017 Mendenhall Court, Suite F, Columbia, MD 21045.
- Science: source-backed educational pages with professional review disclaimer.
- Contact: lead form and vendor inquiry route.

## Login and Command Portal
- `/login`: local prototype role access for owner, admin, clinical, operations, marketing, vendor, and member review.
- `/portal`: role-filtered command dashboard for launch goals, risks, integrations, document manifests, services, memberships, vendors, bookings, and content.
- `/api/session`: validates local prototype access codes and returns a governed 7-field session object.
- Production requirement: replace prototype access with Firebase Auth, MFA, custom role claims, and audit logging.

## Member App
- Profile and tier.
- Upcoming bookings.
- Metrics placeholders.
- Booking request flow.
- Education library.

## Admin
- Launch quality score.
- Project-ready goals.
- Firebase and Google Cloud readiness.
- Leads.
- Bookings.
- Vendor CRM.
- Social calendar.
- Document/source manifest.
