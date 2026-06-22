import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { serviceRecords } from "@/lib/data";

export const metadata = {
  title: "Recovery Services — VYTAL House",
  description:
    "Clinical-grade recovery modalities at VYTAL House: hyperbaric oxygen, IV/NAD+, red light, cryotherapy, float, sauna, and compression therapy.",
};

const categories = [...new Set(serviceRecords.map((s) => s.metadata.category))];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <Nav />

      <section className="section">
        <p className="eyebrow">The therapy system</p>
        <h1>Recovery Services</h1>
        <p className="hero-copy">
          Clinical-grade modalities designed for high-performance recovery. All services require
          medical director review and appropriate protocols before live operation.
        </p>
        <div className="hero-actions">
          <a className="pill-button primary" href="#waitlist">Join waitlist <ArrowRight size={14} /></a>
          <a className="pill-button" href="/memberships">View memberships</a>
        </div>
      </section>

      {categories.map((category) => (
        <section className="section" key={category}>
          <div className="section-head">
            <p className="eyebrow">{category}</p>
          </div>
          <div className="grid">
            {serviceRecords
              .filter((s) => s.metadata.category === category)
              .map((service) => (
                <article className="card" key={service.id}>
                  <h3>{service.name}</h3>
                  <p className="muted" style={{ margin: "0 0 0.75rem" }}>{service.metadata.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {service.type}
                    </span>
                    <span style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: service.status === "planned" ? "var(--cyan)" : "var(--gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}>
                      {service.status}
                    </span>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Governed records</p>
          <h2>All Services</h2>
          <p className="muted">7-field schema governance record for each therapy lane.</p>
        </div>
        <RecordTable records={serviceRecords} />
      </section>

      <div className="compliance-notice">
        ⚕ All clinical services require medical director oversight, protocols, contraindications, informed consent,
        and appropriate healthcare counsel before live operation. This is a planning prototype.
      </div>

      <Footer />
    </main>
  );
}
