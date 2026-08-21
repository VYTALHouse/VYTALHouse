# 29 - VYTAL House Project Federation

**Status:** Draft / implementation coordination
**Updated:** 2026-08-21
**House role:** Flagship operating system inside VYTAL Enterprise

## Purpose

This document turns the VYTAL House project into the execution view for the wider VYTAL repository federation without collapsing independent legal, clinical, product, brand, governance, or data-risk boundaries into one monorepo.

The authoritative umbrella registry remains in `ChaunDon5000/VYTALEnterprise`. VYTAL House consumes that canon and coordinates dependencies required to plan, build, test, and launch the proposed flagship.

## Project rules

1. **VYTALEnterprise is the umbrella canon.** Cross-repository status, repository topology, shared governance, and federation controls originate there.
2. **VYTALHouse is the flagship execution surface.** It may display or coordinate external-domain status but does not become the source of truth for clinical entity, MSO, IP, holding-company, pouch-formulation, or enterprise-brand decisions.
3. **No implied approvals.** Zoning, use, parking, permits, licensing, financing, construction, occupancy, entity formation, product approval, and opening remain explicit stage-gated states.
4. **Public-repository safety.** Do not commit secrets, credentials, PHI, PII, PFS/POF, bank statements, confidential formulas, restricted contracts, or privileged legal/clinical records.
5. **Source-grounded integration.** Any cross-repository fact shown by VYTAL House should carry source repository, source path/reference, stage/status, owner, date, conflict state, and approval state.
6. **Clinical independence.** VYTALMSO cannot control diagnosis, treatment, prescriptions, clinical protocols, provider supervision, clinical records, or patient-specific decisions. VYTALPLLC remains counsel-controlled and subject to professional ownership/licensing review.

## Repository map

| Repository | House-project relationship | Current stage | What VYTAL House may consume | What must stay authoritative there |
| --- | --- | --- | --- | --- |
| `VYTALEnterprise` | Umbrella / governance dependency | Active | Repository registry, federation state, shared canon, brand/governance rules | Enterprise governance and federation truth |
| `VYTALHouse` | Flagship execution system | Pre-development | Local operating data, dashboards, facility workflow, prototype journeys | House implementation and local execution state |
| `VYTALHouse_com` | Public-web interface | Planned | Stage-safe public content and approved launch information | Public website release and content implementation |
| `VYTALPouches` | Product dependency | Active R&D | Approved SKU names, public-safe R&D/commercial status, product-ready content | Formulation, testing, labels, claims, commercial status |
| `VYTALBranding` | Brand dependency | Active system build | Approved tokens, Prism V assets, channel rules, packaging standards | Enterprise brand canon and creative approvals |
| `VYTALOperations` | Operating-workflow dependency | System build | 9017 gate status, operating workflows, vendor and readiness controls | Enterprise/House operating procedures and accountable workflows |
| `VYTALCareers` | Workforce dependency | Planned | Approved roles, hiring stages, workforce readiness | Career architecture and recruiting implementation |
| `VYTALAI` | AI-control dependency | Planned | Agent contracts, source/approval metadata requirements, evaluation rules | AI orchestration, retrieval boundaries, evaluation harnesses |
| `VYTALCRM` | Lifecycle/interface dependency | Planned | Public-safe lifecycle schemas and integration contracts | Prospect/member/partner/lender CRM architecture |
| `VYTALApp` | Application/interface dependency | Planned | Shared UI/contracts and prototype member/operator journeys | Member/operator application architecture |
| `VYTALIP` | Approval gate | Diligence | Public-safe naming, ownership and filing-state references | IP register, filing workflow, counsel handoff |
| `VYTALPLLC` | Clinical approval gate | Counsel review required | Approved entity/service-line status only | Clinical independence, professional governance, clinical-control boundary |
| `VYTALMSO` | Management approval gate | Counsel review required | Approved non-clinical service boundaries only | MSO scope, administrative services and control boundary |
| `FCGHoldings` | Parent/governance approval gate | Diligence / counsel review required | Approved relationship/capital-policy status only | Holding structure, ownership, entity and capital-policy decisions |

## House integration contract

Every cross-repository dependency represented inside the VYTAL House application should use the House 7-field object schema:

- `id`
- `entity`
- `type`
- `name`
- `status`
- `owner`
- `updatedAt`
- domain-specific fields under `metadata`

Recommended `metadata` fields for federation records:

```json
{
  "sourceRepository": "ChaunDon5000/VYTALOperations",
  "sourcePath": "docs/9017_OPERATING_PLAN.md",
  "sourceStage": "System build",
  "approvalState": "Draft",
  "conflictState": "none",
  "houseRelationship": "execution-dependency",
  "publicSafe": true
}
```

## Priority dependency lanes

### P0 - launch-critical

- Facility architecture/test-fit, civil/use/parking/ADA, permitting and occupancy gates.
- VYTALOperations accountable workflow for the 9017 Mendenhall 45-day decision package.
- VYTALMSO/VYTALPLLC counsel decisions for entity, service-line and clinical-control boundaries.
- FCGHoldings ownership/holding structure decisions that affect contracting or capital.
- VYTALBranding approved Prism V master, design tokens and migration decision before public creative is treated as final.

### P1 - production foundation

- VYTALCRM lifecycle and public-safe integration schemas.
- VYTALApp shared application contracts and role-based journeys.
- VYTALAI source-grounded orchestration and evaluation gates.
- VYTALHouse_com release contract so public pages consume only approved/stage-safe data.
- VYTALCareers workforce architecture tied to operating readiness.

### P2 - commerce and growth

- VYTALPouches approved SKU/R&D/commercial-state integration.
- Cross-channel brand/content delivery after VYTALBranding approval gates.
- CRM/member journeys only after privacy, security and production data architecture are approved.

## Contribution workflow

1. Make domain changes in the authoritative repository.
2. Record material decisions and stage changes there.
3. Update the VYTALEnterprise registry/federation lock when repository-level state changes.
4. Consume approved public-safe state in VYTALHouse through explicit integration contracts.
5. Surface conflicts rather than silently reconciling them.
6. Require human/professional approval for legal, clinical, financing, regulatory, product-claim, and public-release gates.

## Definition of done for a House dependency

A dependency is ready to display as an actionable House-project item only when it has:

- an authoritative source repository;
- a named owner;
- an explicit stage/status;
- a last-updated date;
- a public-safe indicator;
- a conflict/decision state;
- an approval state appropriate to the domain; and
- a next action that does not imply an unearned approval.

## Next implementation target

Build a read-only **Project Federation** view inside the VYTAL House owner/admin experience that renders the machine-readable manifest in `project/VYTAL_HOUSE_PROJECT_MANIFEST.json` and links each dependency to its authoritative repository. The first version should remain prototype-only and contain no restricted data or live external writes.
