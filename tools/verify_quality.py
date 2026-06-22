#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

UNWANTED_TERMS = ["ACool", "acool", "AION", "FREED", "Freed", "FREEDOM LAB"]
REQUIRED_ARTIFACTS = [
    "docs/00_OVERVIEW_INDEX.md",
    "docs/14_DELIVERY_MANIFEST.md",
    "docs/15_GITHUB_HANDOFF.md",
    "docs/21_PROJECT_READY_GOALS.md",
    "docs/22_FIREBASE_GOOGLE_CLOUD_MANIFEST.md",
    "docs/23_DESKTOP_DOWNLOADS_IMPORT_AUDIT.md",
    "docs/24_CONCEPT_TO_CREATION_MANIFEST.md",
    "DESIGN.md",
    ".github/workflows/vytal-quality.yml",
    ".github/PULL_REQUEST_TEMPLATE.md",
    ".github/ISSUE_TEMPLATE/feature_request.md",
    ".github/ISSUE_TEMPLATE/governance_review.md",
    ".firebaserc.example",
    "firebase.json",
    "deliverables/VYTAL_House_Full_Manifest_Dossier.docx",
    "deliverables/VYTAL_House_Business_Plan.docx",
    "deliverables/VYTAL_House_Business_Requirements_Document.docx",
    "deliverables/VYTAL_House_Articles_of_Organization_Draft.docx",
    "deliverables/VYTAL_House_Master_Deck.pptx",
    "deliverables/VYTAL_House_Operations_Workbook.xlsx",
    "importables/notion/VYTAL_House_Workspace.md",
    "importables/figma/vytal_tokens.json",
    "firebase/firestore.rules",
    "src/app/page.tsx",
    "src/app/login/page.tsx",
    "src/app/portal/page.tsx",
    "src/app/api/session/route.ts",
    "quality/VISUAL_CHECK.md",
    "quality/DOCX_RENDER_QA.md",
    "quality/screenshots/home-desktop.png",
    "quality/screenshots/home-mobile.png",
    "quality/screenshots/lead-form-submitted.png",
    "quality/screenshots/portal-dashboard.png",
]
SEED_FILES = [
    "data/seeds/services.json",
    "data/seeds/vendors.json",
    "data/seeds/memberships.json",
    "data/seeds/socialPosts.json",
    "data/seeds/bookings.json",
    "data/seeds/auditEvents.json",
    "data/seeds/qualityScores.json",
    "data/seeds/locations.json",
    "data/seeds/launchGoals.json",
    "data/seeds/riskRegister.json",
    "data/seeds/integrationReadiness.json",
    "data/seeds/portalUsers.json",
]
REQUIRED_FIELDS = {"id", "entity", "type", "name", "status", "owner", "updatedAt", "metadata"}


def run_rg(term: str) -> bool:
    import fnmatch
    ignore_dirs = {'.git', 'node_modules', '.next', 'quality', '.venv', '.antigravity'}
    for path in ROOT.glob('**/*'):
        if not path.is_file():
            continue
        try:
            parts = path.relative_to(ROOT).parts
        except ValueError:
            continue
        if any(d in ignore_dirs for d in parts):
            continue
        if path.name == 'verify_quality.py':
            continue
        rel_str = str(path.relative_to(ROOT))
        if fnmatch.fnmatch(rel_str, 'deliverables/source_copies/*.docx') or \
           fnmatch.fnmatch(rel_str, 'deliverables/source_copies/*.pptx'):
            continue
        # Skip binary files
        try:
            with open(path, 'rb') as f:
                if b'\x00' in f.read(1024):
                    continue
        except Exception:
            continue
        try:
            content = path.read_text(errors='ignore')
            if term in content:
                print(f"Match found for '{term}' in {path}")
                return True
        except Exception:
            pass
    return False


def check_schema() -> tuple[bool, list[str]]:
    failures = []
    for file in SEED_FILES:
      data = json.loads((ROOT / file).read_text())
      for index, record in enumerate(data):
        missing = REQUIRED_FIELDS - set(record)
        if missing:
            failures.append(f"{file}[{index}] missing {sorted(missing)}")
        if record.get("entity") != "VYTAL House":
            failures.append(f"{file}[{index}] has wrong entity")
    return not failures, failures


def main() -> int:
    evidence = []
    score = 100

    missing_artifacts = [p for p in REQUIRED_ARTIFACTS if not (ROOT / p).exists()]
    if missing_artifacts:
        score -= 15
        evidence.append(f"Missing artifacts: {missing_artifacts}")
    else:
        evidence.append("Required artifacts exist.")

    unwanted_hits = [term for term in UNWANTED_TERMS if run_rg(term)]
    if unwanted_hits:
        score -= 15
        evidence.append(f"Brand isolation hits: {unwanted_hits}")
    else:
        evidence.append("Brand isolation scan passed.")

    schema_ok, schema_failures = check_schema()
    if not schema_ok:
        score -= 15
        evidence.extend(schema_failures[:10])
    else:
        evidence.append("Seed data satisfies 7-field schema.")

    if not (ROOT / "deliverables/workbook_formula_scan.ndjson").exists():
        score -= 5
        evidence.append("Workbook formula scan missing.")
    else:
        scan = (ROOT / "deliverables/workbook_formula_scan.ndjson").read_text().strip()
        if "#REF!" in scan or "#DIV/0!" in scan or "#VALUE!" in scan:
            score -= 5
            evidence.append("Workbook formula scan contains error token.")
        else:
            evidence.append("Workbook formula scan passed.")

    if not (ROOT / "deliverables/deck_preview/deck-montage.webp").exists():
        score -= 5
        evidence.append("Deck montage missing.")
    else:
        evidence.append("Deck montage exists.")

    visual_report = ROOT / "quality/VISUAL_CHECK.md"
    if visual_report.exists() and "Status: PASS" in visual_report.read_text():
        evidence.append("Playwright visual check passed.")
    else:
        score -= 5
        evidence.append("Playwright visual check missing or failed.")

    app_files = list((ROOT / "src/app").glob("**/*.tsx"))
    if len(app_files) < 7:
        score -= 10
        evidence.append("App surface count is below expected.")
    else:
        evidence.append(f"App surface count OK: {len(app_files)} TSX files.")

    score = max(0, score)
    passed = score >= 97
    report = [
        "# VYTAL House Quality Gate",
        "",
        f"- Score: {score}/100",
        f"- Required minimum: 97/100",
        f"- Status: {'PASS' if passed else 'FAIL'}",
        "",
        "## Evidence",
        *[f"- {item}" for item in evidence],
        "",
        "## External State",
        "- No live Notion creation performed.",
        "- No live Figma creation performed.",
        "- No vendor email sent.",
        "- No payment processing enabled.",
        "- No legal filing submitted.",
        "- No Firebase or Google Cloud resource creation performed.",
    ]
    out = ROOT / "quality/QUALITY_GATE.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(report) + "\n")
    print("\n".join(report))
    return 0 if passed else 1


if __name__ == "__main__":
    raise SystemExit(main())
