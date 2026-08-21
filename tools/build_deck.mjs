import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const artifactPath = path.join(
  os.homedir(),
  ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs",
);
const { Presentation, PresentationFile } = await import(pathToFileURL(artifactPath));

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "deliverables");
const previewDir = path.join(outDir, "deck_preview");
await fs.mkdir(previewDir, { recursive: true });

const palette = {
  void: "#07090D",
  panel: "#111722",
  panel2: "#18202D",
  cream: "#F6F0E6",
  gold: "#C8A46B",
  cyan: "#7DE3FF",
  red: "#F15F5F",
  green: "#6EE7B7",
};

const slides = [
  ["VYTAL House", "Recharge. Recover. Evolve.", ["A premium Maryland recovery and wellness club.", "Target site: 9017 Mendenhall Court, Suite F, Columbia, MD 21045.", "Owned by Chauncey Gardner and Kathy Ha.", "Local draft package with external actions gated."]],
  ["Vision", "A spacecraft-inspired recovery lounge.", ["Dark cinematic ambience with chrome and warm gold.", "Clinical-grade modalities and concierge operations.", "Membership-led model with high-margin add-ons."]],
  ["Services", "The therapy system.", ["Hyperbaric oxygen therapy.", "IV and NAD+ lounge.", "Red light, cryotherapy, sauna, cold plunge, float, and compression."]],
  ["Memberships", "Core, Elite, and Black.", ["Core: $299/month.", "Elite: $599/month.", "Black: $1,499/month.", "Target membership MRR: $179,700."]],
  ["Facility", "Conceptual approximately 6,400 RSF operating map.", ["Target location: 9017 Mendenhall Court, Suite F.", "Reception and retail.", "IV/NAD lounge.", "Consult rooms.", "Cryotherapy, red light, sauna/cold plunge, recovery zone."]],
  ["Technology", "Next.js, Firebase, and governed records.", ["Public website.", "Local role login.", "Command portal.", "Member app/PWA.", "Admin dashboard.", "Vendor CRM and content calendar."]],
  ["Vendor Path", "Quote-first procurement.", ["Oxycell.", "Oxygen Health Systems.", "VacuActiv.", "EleveHealth.", "No outreach sent without approval."]],
  ["Governance", "7-field schema and separation of duties.", ["Every record has id, entity, type, name, status, owner, updatedAt.", "Medical, legal, financial, payment, Figma, and Notion gates remain controlled."]],
  ["Quality Gate", "97/100 minimum before runtime handoff.", ["Source traceability.", "Brand isolation.", "Schema governance.", "Document completeness.", "App verification."]],
  ["Next Steps", "Run locally, review, then approve external moves.", ["Review deliverables.", "Confirm lease, medical, legal, and vendor assumptions.", "Approve Firebase, Google Cloud, Notion, and Figma live creation only when ready."]],
];

const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });

function addText(slide, text, left, top, width, height, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = style;
  return shape;
}

function addPanel(slide, left, top, width, height, fill = palette.panel) {
  return slide.shapes.add({
    geometry: "roundRect",
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: "#2E3A4B", width: 1 },
    borderRadius: "rounded-lg",
  });
}

for (const [index, [title, subtitle, bullets]] of slides.entries()) {
  const slide = presentation.slides.add();
  slide.background.fill = palette.void;
  addText(slide, "VYTAL HOUSE", 64, 46, 260, 24, { fontSize: 13, bold: true, color: palette.gold, typeface: "Aptos" });
  addText(slide, String(index + 1).padStart(2, "0"), 1168, 46, 46, 28, { fontSize: 16, bold: true, color: palette.gold, typeface: "Aptos" });
  addText(slide, title, 64, 116, 720, 86, { fontSize: index === 0 ? 60 : 46, bold: true, color: palette.cream, typeface: "Aptos Display" });
  addText(slide, subtitle, 66, 208, 620, 44, { fontSize: 21, color: "#C8D0DA", typeface: "Aptos" });
  addPanel(slide, 760, 118, 398, 420, index % 2 === 0 ? palette.panel : palette.panel2);
  addText(slide, "QUALITY LOCK", 802, 160, 180, 22, { fontSize: 12, bold: true, color: palette.gold, typeface: "Aptos" });
  addText(slide, index === 0 ? "100" : "97+", 802, 194, 160, 80, { fontSize: 64, bold: true, color: palette.cream, typeface: "Aptos Display" });
  addText(slide, "Minimum package score before runtime handoff.", 804, 278, 260, 54, { fontSize: 18, color: "#D7DCE4", typeface: "Aptos" });
  let top = 312;
  for (const bullet of bullets) {
    addText(slide, bullet, 88, top, 592, 34, { fontSize: 19, color: palette.cream, typeface: "Aptos" });
    slide.shapes.add({
      geometry: "ellipse",
      position: { left: 66, top: top + 8, width: 8, height: 8 },
      fill: palette.gold,
      line: { style: "solid", fill: palette.gold, width: 1 },
    });
    top += 46;
  }
  addText(slide, "Draft only: no live payments, vendor sends, legal filings, protected health intake, or external workspace creation.", 64, 640, 980, 26, {
    fontSize: 12,
    color: "#96A0AD",
    typeface: "Aptos",
  });
}

for (const [index, slide] of presentation.slides.items.entries()) {
  const stem = `slide-${String(index + 1).padStart(2, "0")}`;
  const png = await presentation.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(previewDir, `${stem}.png`), new Uint8Array(await png.arrayBuffer()));
  const layout = await slide.export({ format: "layout" });
  await fs.writeFile(path.join(previewDir, `${stem}.layout.json`), await layout.text());
}

const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(previewDir, "deck-montage.webp"), new Uint8Array(await montage.arrayBuffer()));

const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(path.join(outDir, "VYTAL_House_Master_Deck.pptx"));
console.log(path.join(outDir, "VYTAL_House_Master_Deck.pptx"));
