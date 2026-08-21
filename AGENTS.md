# VYTAL House Instructions

This repository is the isolated VYTAL House silo. Keep the product language, code, design, data, documents, and operational logic separate from every other venture.

## Brand Lock
- Product name: VYTAL House.
- Legal draft name: VYTAL House LLC.
- Enterprise platform: Change Your State.
- House subline: Recharge. Recover. Evolve. Retain only as a House-specific
  working line until the enterprise brand decision record approves or replaces it.
- Owners: Chauncey Gardner and Kathy Ha.
- Enterprise brand foundation: matte black, silver, graphite and white with
  controlled prismatic accents; blue is not the default.
- Existing gold/cyan UI is a legacy implementation pending an approved migration.
- Do not introduce unrelated venture names, palettes, slogans, product terms, or operating logic.

## Current Site Lock
- Proposed flagship: 9017 Mendenhall Court, Suite F, Columbia, MD 21045.
- Planning area: approximately 6,400 RSF.
- Status: pre-development and pre-opening.
- Do not imply zoning, use, parking, permits, licensing, financing, construction
  completion, occupancy or opening are approved or complete.

## Architecture Rules
- Use the 7-field schema on every database-like object: `id`, `entity`, `type`, `name`, `status`, `owner`, `updatedAt`.
- Put all domain-specific data under `metadata`.
- Enforce separation of duties for `owner`, `admin`, `clinical`, `operations`, `marketing`, `vendor`, and `member` roles.
- Treat legal, medical, and financial materials as drafts for professional review.
- Do not send vendor messages, create live external workspaces, collect protected health data, file legal documents, or activate payments without explicit approval.
