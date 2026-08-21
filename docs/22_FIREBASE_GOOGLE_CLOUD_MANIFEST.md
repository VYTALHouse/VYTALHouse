# 22 - Firebase and Google Cloud Manifest

## Current State
- Status: ready-draft.
- No live Firebase project, Google Cloud bucket, Drive workspace, payment account, vendor message, legal filing, or protected health intake was created by this repo.
- Local files now include `firebase.json`, `.firebaserc.example`, Firestore rules, Storage rules, indexes, and environment variable placeholders.

## Firebase Project Plan
| Area | Draft Value | Gate |
|---|---|---|
| Project ID | `vytal-house-staging` | Owner approval before creation |
| Auth | Firebase Auth with MFA for owner/admin roles | Configure only after project exists |
| Firestore | Governed collections from `data/seeds` | Deploy rules before seed import |
| Storage | `vytal/documents/` and governed artifact paths | IAM and retention review |
| App Check | Required for web app before production | Configure after domain approval |
| Custom claims | `role: owner/admin/clinical/operations/marketing/vendor/member` | Admin-only claim assignment |

## Firestore Collections
- `services`
- `memberships`
- `vendors`
- `bookings`
- `contentItems`
- `socialPosts`
- `leads`
- `auditEvents`
- `qualityScores`
- `locations`
- `launchGoals`
- `riskRegister`
- `integrationReadiness`
- `documents`

## Google Cloud File Vault Plan
| Folder | Owner | Contents | Control |
|---|---|---|---|
| `01_Formation_Drafts` | owner | Draft entity and governance docs | Legal review before execution |
| `02_Lease_Diligence` | operations | Site due diligence for 9017 Mendenhall Court, Suite F | Broker/counsel review |
| `03_Clinical_Compliance` | clinical | Protocols, waivers, medical director docs | No public access |
| `04_Vendor_Quotes` | operations | Equipment quotes and warranties | No vendor send without approval |
| `05_Tech_Deployment` | admin | Firebase, GitHub, CI, release evidence | Secret-managed access |
| `06_Marketing_Claims` | marketing | Copy, claims library, social drafts | Clinical/counsel review |

## Local Commands After Approval
```bash
cp .firebaserc.example .firebaserc
npx firebase login
npx firebase use vytal-house-staging
npx firebase deploy --only firestore:rules,firestore:indexes,storage
```

## Required Secrets
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `FIREBASE_SERVICE_ACCOUNT_JSON` in local secret storage or CI secrets only.

## Production Readiness Checklist
- Enable Firebase Auth providers and MFA.
- Set custom role claims through an admin-only script or secure Cloud Function.
- Run Firestore emulator tests against rules before deploy.
- Enable App Check.
- Store service account credentials only in secret managers.
- Confirm retention and access controls for legal, medical, financial, and vendor documents.
