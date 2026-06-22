import os

# Create directories
os.makedirs(".github/instructions", exist_ok=True)
os.makedirs("agents", exist_ok=True)
os.makedirs("docs", exist_ok=True)

docs = {
    ".github/copilot-instructions.md": "# VYTAL House GitHub Copilot Instructions\n\nEnsure code strictly follows the 7-field schema (id, entity, type, name, status, owner, updatedAt, metadata) and maintains the VYTAL House brand lock (no other ventures).\n\nDo not write live payment or clinical code without approval.\n",
    ".github/instructions/frontend.instructions.md": "# Frontend Instructions\n\nUse Next.js App Router, React, and Tailwind/CSS as provided. Follow the VYTAL House design system: #07090D background, #111722 surface, #18202D surface-bright, #C8A46B gold CTA, #7DE3FF cyan clinical highlights.\n",
    ".github/instructions/backend.instructions.md": "# Backend Instructions\n\nUse Next.js API Routes. All endpoints must return JSON, validate with Zod, and use the 7-field schema.\n",
    ".github/instructions/firebase.instructions.md": "# Firebase Instructions\n\nEnsure all queries and rules respect the roles: owner, admin, operations, clinical, marketing, vendor, member. Do not invoke live connections without VYTAL_ENABLE_FIREBASE=true.\n",
    ".github/instructions/compliance.instructions.md": "# Compliance Instructions\n\nNo real medical data collection. No automated filing to external agencies without approval. Protect PII via the schema.\n",
    ".github/instructions/docs.instructions.md": "# Docs Instructions\n\nAll documentation must reside in the docs/ folder using Markdown. Use clear, professional language aligned with VYTAL House brand.\n",
    ".github/instructions/qa.instructions.md": "# QA Instructions\n\nAll code must pass `npm run quality` and `npm run typecheck` before merging.\n",
    "AGENTS.md": "# VYTAL House Instructions\n\nThis repository is the isolated VYTAL House silo. Keep the product language, code, design, data, documents, and operational logic separate from every other venture.\n\n## Brand Lock\n- Product name: VYTAL House.\n- Legal draft name: VYTAL House LLC.\n- Tagline: Recharge. Recover. Evolve.\n- Owners: Chauncey Gardner and Kathy Ha.\n- Do not introduce unrelated venture names, palettes, slogans, product terms, or operating logic.\n\n## Architecture Rules\n- Use the 7-field schema on every database-like object: `id`, `entity`, `type`, `name`, `status`, `owner`, `updatedAt`.\n- Put all domain-specific data under `metadata`.\n- Enforce separation of duties for `owner`, `admin`, `clinical`, `operations`, `marketing`, `vendor`, and `member` roles.\n- Treat legal, medical, and financial materials as drafts for professional review.\n- Do not send vendor messages, create live external workspaces, collect protected health data, file legal documents, or activate payments without explicit approval.\n",
    "CLAUDE.md": "# Claude Instructions\n\nFollow VYTAL House brand lock and 7-field schema. No real operational triggers without human consent.\n",
    "GEMINI.md": "# Gemini Instructions\n\nFollow VYTAL House brand lock and 7-field schema. No real operational triggers without human consent.\n",
    
    # Agent folder
    "agents/README.md": "# VYTAL House AI Agent Team\n\nWelcome to the VYTAL House operating matrix. This folder defines the subagents running the facility.\n",
}

agents_list = [
    "product-owner", "full-stack-engineer", "ui-ux-designer", "firebase-architect",
    "compliance-officer", "clinical-safety-reviewer", "vendor-procurement-manager",
    "member-experience-manager", "marketing-content-manager", "finance-capital-readiness",
    "qa-release-manager", "documentation-operator", "automation-scheduler"
]

for agent in agents_list:
    docs[f"agents/{agent}.md"] = f"""# {agent.replace('-', ' ').title()}

## Mission
Manage {agent} responsibilities for VYTAL House.

## Allowed Actions
- Read code and generate localized prototypes.

## Blocked Actions
- Do not trigger live payments, clinical data intake, or external vendors.

## Input Files
- `/docs/` and `/data/seeds/`

## Output Files
- `/data/seeds/` and `/src/`

## Acceptance Criteria
- Adheres to 7-field schema and brand lock.

## Handoff Protocol
- Request human approval via dashboard or PR.
"""

for path, content in docs.items():
    with open(path, "w") as f:
        f.write(content)

print("Scaffolded Agent & Instructions docs.")
