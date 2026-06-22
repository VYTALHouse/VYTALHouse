import { ArrowRight, Calendar, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { bookingRecords, serviceRecords } from "@/lib/data";
import { RecordTable } from "@/components/RecordTable";

export const metadata = {
  title: "Member Dashboard — VYTAL House",
  description:
    "VYTAL House prototype member dashboard. View upcoming bookings, wellness records, and access your recovery schedule.",
};

export default function MemberPage() {
  return (
    <main className="page-shell">
      <Nav />

      <section className="section">
        <p className="eyebrow">Member access — prototype</p>
        <h1>Member Dashboard</h1>
        <p className="hero-copy">
          Prototype member experience. Booking, wellness tracking, and service access will be enabled
          after Firebase Auth, live payment activation, and member onboarding approval.
        </p>
        <div className="hero-actions">
          <a className="pill-button primary" href="/portal">Enter portal <ArrowRight size={14} /></a>
          <a className="pill-button" href="/login">Role login</a>
        </div>
      </section>

      <section className="section">
        <div className="metric-grid">
          <article className="card">
            <p className="eyebrow">Upcoming sessions</p>
            <div className="stat">{bookingRecords.length}</div>
            <p className="muted">Prototype bookings only</p>
          </article>
          <article className="card">
            <p className="eyebrow">Services available</p>
            <div className="stat">{serviceRecords.length}</div>
            <p className="muted">Pending live activation</p>
          </article>
          <article className="card">
            <p className="eyebrow">Membership status</p>
            <div className="stat" style={{ fontSize: "1.2rem", marginTop: "0.25rem" }}>Waitlist</div>
            <p className="muted">Join the founder waitlist</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow"><Calendar size={14} style={{ display: "inline", marginRight: "0.35rem" }} />Bookings</p>
          <h2>Upcoming Sessions</h2>
          <p className="muted">Prototype booking records. Live scheduling requires Firebase integration approval.</p>
        </div>
        <RecordTable records={bookingRecords} />
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow"><Zap size={14} style={{ display: "inline", marginRight: "0.35rem" }} />Recovery menu</p>
          <h2>Available Therapies</h2>
          <p className="muted">Services pending clinical and operations approval before live booking.</p>
        </div>
        <div className="grid">
          {serviceRecords.slice(0, 6).map((service) => (
            <article className="card" key={service.id}>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{service.metadata.category}</p>
              <h3>{service.name}</h3>
              <p className="muted" style={{ margin: 0, fontSize: "0.83rem" }}>{service.metadata.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="compliance-notice">
        ⚕ This member dashboard is a prototype only. No health data is collected or stored. Medical intake,
        health assessments, and clinical booking require explicit approval before activation.
      </div>

      <Footer />
    </main>
  );
}
