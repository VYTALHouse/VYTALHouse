# VYTAL House

Welcome to the **VYTAL House AI Operating System**. This repository is the
isolated operating silo for the proposed VYTAL House flagship at 9017 Mendenhall
Court, Suite F, Columbia, MD 21045, approximately 6,400 RSF.

**Enterprise platform:** Change Your State.
**House working subline:** Recharge. Recover. Evolve.
**Owners:** Chauncey Gardner and Kathy Ha

## Current Status: Prototype / Pre-Launch
This system is currently in a safe, offline prototype mode. 
**No real payments, vendor outreach, protected health data intake, or legal filings are executed without explicit approval.**

The property remains pre-development and pre-opening. Zoning/use, parking,
architecture, civil/ADA, permits, licensing, lending, construction, occupancy
and opening are not represented as approved or complete.

## Design System
- **Aesthetic:** Dark spacecraft-lounge
- **Background:** `#07090D`
- **Surfaces:** `#111722`, `#18202D`
- **Legacy accents:** Gold (`#C8A46B`) and cyan (`#7DE3FF`) remain in the
  prototype pending migration to the enterprise black/silver/graphite/white
  system with controlled prismatic accents.

See [Enterprise alignment](docs/28_ENTERPRISE_ALIGNMENT.md) before public release.

## App Routes
- `/` - Premium public website
- `/facility` - Facility vision and service zones
- `/services` - Recovery services page
- `/memberships` - Membership tiers
- `/login` - Role-based prototype login
- `/portal` - Owner command dashboard
- `/admin` - Launch readiness dashboard
- `/member` - Member dashboard prototype
- `/vendor` - Vendor CRM prototype
- `/ownership` - Ownership and formation dashboard
- `/docs/[slug]` - Readable document viewer

## Local Setup
1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Run `npm run dev`

## Docker Setup
Run the environment locally using Docker:
```bash
docker compose up --build
```
Access the application at `http://localhost:3000`. See `docs/26_LOCAL_DOCKER_SETUP.md` for details.

## Demo Login Roles
Use the `/login` route to impersonate: `owner`, `admin`, `operations`, `clinical`, `marketing`, `vendor`, or `member`.

## Firebase Readiness
Firebase integration is built-in but dormant. 
To activate, add Firebase secrets to `.env.local` and set `VYTAL_ENABLE_FIREBASE=true`. Strict Firestore rules are included in `firebase/firestore.rules`.

## AI Agent Team
The AI agent orchestration logic is governed by `.github/instructions` and the `agents/` folder. Subagents manage tasks based on strict role definitions and brand lock constraints.

## Cron System
Scheduled automations (like launch readiness, compliance reminders, and vendor follow-ups) run via prototypes in `src/lib/cron/`. See `docs/25_AUTOMATION_CRON_SYSTEM.md`.

## Quality Commands
- `npm run typecheck` - TypeScript validation
- `npm run quality` - Pre-commit and syntax compliance checks
- `npm run build` - Production bundle generation

## Compliance Limitations
This is a demonstration build. Any financial, legal, or medical materials contained within are drafts and subject to professional review. Do not collect PII or PHI using the current prototype schemas.

## Next Production Milestones
1. Security and penetration testing on Firebase rules.
2. SBA loan and microgrant document finalization.
3. Enabling live payments and vendor negotiations.
4. Transition from Prototype to Stage 1 Beta.
