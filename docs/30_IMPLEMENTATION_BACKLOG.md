# 30 - VYTAL House Cross-Repository Implementation Backlog

**Status:** Draft execution backlog
**Updated:** 2026-08-21

This backlog defines useful contributions that can be made from the VYTAL House project while preserving the authority of each domain repository.

## P0 - House launch control plane

- [ ] Add a read-only `/admin/federation` or equivalent owner/admin view that reads `project/VYTAL_HOUSE_PROJECT_MANIFEST.json`.
- [ ] Display repository, relationship, stage, priority, authority, last update and next action for each dependency.
- [ ] Add visible `Draft`, `Review`, `Approved`, `Issued`, `Superseded` and `Archive` state treatment.
- [ ] Never convert a dependency to `Approved` from House UI; approval must originate from its authoritative repository/workflow.
- [ ] Add a conflict indicator when enterprise/House/domain status differs.
- [ ] Add a source link for every substantive cross-repository status.

## P0 - Facility and operating readiness

**Authoritative repository:** `ChaunDon5000/VYTALOperations`

- [ ] Represent the 9017 Mendenhall architecture/test-fit, civil/use/parking/ADA, permitting, lease, budget/schedule and lending lanes as accountable gates.
- [ ] Map each gate to owner, status, due/decision date, blocker, source and approval state.
- [ ] Feed only public-safe summarized gate state into VYTAL House.
- [ ] Keep professional reports, restricted financial records and sensitive contracts outside public Git repositories.

## P0 - Clinical/MSO boundary

**Authoritative repositories:** `VYTALPLLC`, `VYTALMSO`

- [ ] Add explicit House dependency states for counsel review, professional ownership, service-line approval and MSO/clinical control boundaries.
- [ ] Prevent House dashboards or AI agents from representing proposed clinical entity formation or licensure as complete.
- [ ] Keep diagnosis, treatment, prescriptions, protocols, provider supervision, clinical records and patient-specific decisions outside MSO control.
- [ ] Require a human/professional approval marker before House consumes an `Approved` clinical/legal state.

## P0 - Parent, IP and brand gates

**Authoritative repositories:** `FCGHoldings`, `VYTALIP`, `VYTALBranding`

- [ ] Expose public-safe ownership/entity relationship status without publishing restricted cap-table or personal financial information.
- [ ] Expose naming/trademark/filing stage without implying unfiled concepts are protected or patented.
- [ ] Treat the Prism V vector master and enterprise tokens as a release gate before public creative is labeled final.
- [ ] Track provisional/legacy assets separately from approved brand assets.

## P1 - Shared application contracts

**Authoritative repositories:** `VYTALApp`, `VYTALCRM`, `VYTALAI`

- [ ] Define a shared public-safe status envelope for cross-repository records.
- [ ] Keep prototype member/operator flows free of production PHI/PII.
- [ ] Keep CRM schemas at lifecycle/interface level until production privacy/security architecture is approved.
- [ ] Require AI outputs to carry source, stage, owner, date, conflict and approval metadata.
- [ ] Add tests that reject unsourced or approval-ambiguous federation records.

## P1 - Public website and careers

**Authoritative repositories:** `VYTALHouse_com`, `VYTALCareers`

- [ ] Create a release contract defining exactly which House/project fields are safe for public web use.
- [ ] Keep the proposed flagship explicitly pre-development/pre-opening until authoritative gates change.
- [ ] Tie careers/workforce planning to approved operating readiness rather than assumed opening dates.
- [ ] Publish only approved job descriptions and hiring stages.

## P2 - VYTAL Pouches integration

**Authoritative repository:** `VYTALPouches`

- [ ] Consume only approved public-safe SKU canon and stage metadata in House/commerce surfaces.
- [ ] Keep formulation quantities, confidential formulas, testing details and claims under the Pouches repository's release controls.
- [ ] Distinguish R&D targets, prototype formulas, testing state, label review and commercial approval.

## Cross-repository definition of ready

A dependency is ready for House integration when all of the following are available:

- authoritative repository;
- source path/reference;
- explicit stage/status;
- named owner;
- last-updated date;
- public-safe flag;
- conflict state;
- approval state;
- next action; and
- no restricted information in the payload.

## Suggested contribution sequence

1. Build the House read-only federation UI from the local manifest.
2. Add schema validation/tests for federation records.
3. Define the shared status envelope in VYTALEnterprise and domain integration contracts.
4. Wire VYTALOperations facility gates into the status envelope.
5. Add MSO/PLLC/FCG/IP/Brand approval gates as read-only dependencies.
6. Add CRM/App/AI contracts.
7. Add public-site and Careers release contracts.
8. Add Pouches public-safe product-state integration.

## Non-goals

- No monorepo merge.
- No secret or restricted-data replication.
- No automatic legal, medical, regulatory, financing or product approval.
- No live vendor outreach, legal filing, payment activation or protected-data collection from this backlog alone.
