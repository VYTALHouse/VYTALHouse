import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { serviceRecords } from "@/lib/data";

export const metadata = {
  title: "Facility — VYTAL House",
  description:
    "Conceptual facility layout for VYTAL House at 9017 Mendenhall Court, Suite F, Columbia, MD. Recovery zones, service lanes, and CAD handoff reference.",
};

const zones = [
  { name: "Reception & Retail", area: "~600 SF", note: "Check-in, retail supplements, hydration bar" },
  { name: "IV / NAD+ Lounge", area: "~900 SF", note: "Recliner suites, clinical lighting, privacy screens" },
  { name: "Hyperbaric Oxygen", area: "~1,200 SF", note: "HBOT chambers, oxygen monitoring, clinical oversight" },
  { name: "Red Light & Cryotherapy", area: "~700 SF", note: "Full-body red light panels, cryotherapy station" },
  { name: "Sauna & Cold Plunge", area: "~800 SF", note: "Infrared and Finnish sauna, contrast therapy plunge pools" },
  { name: "Float & Recovery", area: "~900 SF", note: "Isolation float pods, compression, and acoustic recovery" },
  { name: "Consult Rooms", area: "~400 SF", note: "Private rooms for clinical intake review and member consults" },
  { name: "Staff & Operations", area: "~425 SF", note: "Back office, sterilization, storage, and mechanical room" },
];

export default function FacilityPage() {
  return (
    <main className="page-shell">
      <Nav />

      <section className="section">
        <p className="eyebrow">9017 Mendenhall Court, Suite F, Columbia MD 21045</p>
        <h1>Facility Vision</h1>
        <p className="hero-copy">
          Conceptual approximately 6,400 RSF operating map. Lease, zoning, utilities, permits, and tenant improvements
          remain approval-gated before commitment.
        </p>
        <div className="hero-actions">
          <a className="pill-button primary" href="/services">View services <ArrowRight size={14} /></a>
          <a className="pill-button" href="/portal">Open portal</a>
        </div>
      </section>

      <section className="section">
        <div className="hero-panel" style={{ marginBottom: "2rem" }}>
          <Image
            src="/images/vytal-interior-reference.png"
            alt="VYTAL House ambient interior reference — dark spacecraft lounge atmosphere"
            width={1200}
            height={675}
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Zone map</p>
          <h2>Service Zones</h2>
          <p className="muted">Conceptual areas subject to architectural, permit, and clinical review.</p>
        </div>
        <div className="grid">
          {zones.map((zone) => (
            <article className="card" key={zone.name}>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{zone.area}</p>
              <h3>{zone.name}</h3>
              <p className="muted" style={{ margin: 0, fontSize: "0.84rem" }}>{zone.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Service records</p>
          <h2>Therapy System Records</h2>
          <p className="muted">All records follow the 7-field governance schema.</p>
        </div>
        <RecordTable records={serviceRecords} />
      </section>

      <Footer />
    </main>
  );
}
