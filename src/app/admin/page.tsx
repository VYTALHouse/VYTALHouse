import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RecordTable } from "@/components/RecordTable";
import { integrationRecords, launchGoalRecords, launchReadiness, qualityRecords, riskRecords } from "@/lib/data";

export default function Page() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>Admin Dashboard</h1>
        <p className="hero-copy">Operations, quality score, launch readiness, Firebase readiness, and project gates.</p>
        <div className="hero-actions">
          <a className="pill-button primary" href="/portal">Open command portal</a>
          <a className="pill-button" href="/admin/federation">Project federation</a>
          <a className="pill-button" href="/login">Role login</a>
        </div>
      </section>
      <section className="section">
        <div className="metric-grid">
          <article className="card"><p className="eyebrow">Open goals</p><div className="stat">{launchReadiness.openGoals}</div><p className="muted">Owner or professional review required.</p></article>
          <article className="card"><p className="eyebrow">High risks</p><div className="stat">{launchReadiness.highRisks}</div><p className="muted">Risk controls are documented as draft.</p></article>
          <article className="card"><p className="eyebrow">Integrations</p><div className="stat">{launchReadiness.readyIntegrations}</div><p className="muted">Ready-draft integrations awaiting live approval.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="section-head"><h2>Launch Goals</h2><p className="muted">Project-ready execution targets.</p></div>
        <RecordTable records={launchGoalRecords} />
      </section>
      <section className="section">
        <div className="section-head"><h2>Risk Register</h2><p className="muted">Controls from the launch package.</p></div>
        <RecordTable records={riskRecords} />
      </section>
      <section className="section">
        <div className="section-head"><h2>Integration Readiness</h2><p className="muted">Firebase, Google Cloud, GitHub, Notion, and Figma state.</p></div>
        <RecordTable records={integrationRecords} />
      </section>
      <section className="section">
        <div className="section-head"><h2>Quality</h2><p className="muted">Local quality gate records.</p></div>
        <RecordTable records={qualityRecords} />
      </section>
      <Footer />
    </main>
  );
}
