import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const docMap = {
  "project-ready-goals": "docs/21_PROJECT_READY_GOALS.md",
  "firebase-google-cloud-manifest": "docs/22_FIREBASE_GOOGLE_CLOUD_MANIFEST.md",
  "desktop-downloads-import-audit": "docs/23_DESKTOP_DOWNLOADS_IMPORT_AUDIT.md",
  "concept-to-creation-manifest": "docs/24_CONCEPT_TO_CREATION_MANIFEST.md",
  "delivery-manifest": "docs/14_DELIVERY_MANIFEST.md",
} as const;

export function generateStaticParams() {
  return Object.keys(docMap).map((slug) => ({ slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const relativePath = docMap[slug as keyof typeof docMap];
  if (!relativePath) notFound();

  const absolutePath = path.join(process.cwd(), relativePath);
  const markdown = await fs.readFile(absolutePath, "utf8");
  const title = relativePath
    .replace("docs/", "")
    .replace(".md", "")
    .replace(/^\d+_/, "")
    .replaceAll("_", " ");

  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House document vault</p>
        <h1>{title}</h1>
        <p className="muted">
          Rendered from the local repository allowlist. Draft materials are subject to professional review.
        </p>
      </section>
      <section className="section">
        <pre className="doc-pre">{markdown}</pre>
      </section>
      <Footer />
    </main>
  );
}
