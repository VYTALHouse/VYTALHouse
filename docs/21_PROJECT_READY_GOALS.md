# 21 - Project Ready Goals

## Target Location
- Address: 9017 Mendenhall Court, Suite F, Columbia, MD 21045.
- Market: Columbia, Maryland recovery and wellness club.
- Gate: lease, zoning, utilities, permits, tenant improvements, accessibility, fire/life safety, insurance, and medical-use suitability must be reviewed before commitment.

## Project-Ready Definition
The VYTAL House package is project-ready when the local repo can run, validate, and explain the whole operating plan without creating live external obligations. Live vendor messages, protected health intake, legal filings, payment processing, Google Cloud resources, Firebase resources, Notion workspaces, and Figma files remain approval-gated.

## Current Build Goals
| Goal | Owner | Status | Gate |
|---|---|---|---|
| Confirm ownership economics | owner | approval-needed | Formation |
| Confirm Mendenhall lease, zoning, utilities, and tenant improvements | operations | approval-needed | Lease |
| Secure medical director letter of intent | clinical | approval-needed | Medical |
| Request formal equipment quotes | operations | quote-needed | Equipment |
| Manifest Firebase staging project | admin | ready-draft | Technology |
| Create governed Google Cloud file vault plan | admin | ready-draft | Document vault |

## Portal Goals
- `/login` provides local prototype role access for owner, admin, operations, clinical, marketing, vendor, and member review.
- `/portal` consolidates project goals, risks, integrations, documents, memberships, services, vendors, bookings, and quality records.
- `/admin` now surfaces launch readiness, risks, integration readiness, and quality records.
- All new database-like objects are seed records with `id`, `entity`, `type`, `name`, `status`, `owner`, `updatedAt`, and domain data under `metadata`.

## Approval Gates
- Medical: medical director, protocols, contraindications, insurance, consent, and healthcare counsel.
- Legal: formation, operating agreements, lease, vendor contracts, waivers, privacy, and terms.
- Financial: projections, lending, investor materials, taxes, and payment activation.
- Technology: Firebase project creation, custom claims, App Check, Google Cloud IAM, CI secrets, and production deployment.
