import { ArrowRight, CheckCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { membershipRecords, monthlyMembershipRevenue } from "@/lib/data";

export const metadata = {
  title: "Memberships — VYTAL House",
  description:
    "VYTAL House membership tiers: Core ($299/mo), Elite ($599/mo), and Black ($1,499/mo). Premium recovery access modeled for Columbia, Maryland.",
};

const tierColors: Record<string, string> = {
  Core: "var(--cyan)",
  Elite: "var(--gold)",
  Black: "#E8E8E8",
};

export default function MembershipsPage() {
  return (
    <main className="page-shell">
      <Nav />

      <section className="section">
        <p className="eyebrow">Access tiers</p>
        <h1>Membership Model</h1>
        <p className="hero-copy">
          Three access tiers designed for serious recovery practitioners. Monthly pricing is modeled from the
          business plan. All memberships are prototype-only until live payment processing is approved.
        </p>
        <div className="stat">
          ${monthlyMembershipRevenue.toLocaleString()}
          <span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: 400, marginLeft: "0.4rem" }}>
            /mo projected MRR at target mix
          </span>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          {membershipRecords.map((tier) => (
            <article
              className="card"
              key={tier.id}
              style={{ borderColor: tierColors[tier.name] ? `rgba(${tier.name === "Core" ? "125,227,255" : tier.name === "Elite" ? "200,164,107" : "232,232,232"},0.35)` : undefined }}
            >
              <p className="eyebrow" style={{ color: tierColors[tier.name] ?? "var(--cyan)" }}>
                {tier.name}
              </p>
              <div className="stat">${tier.metadata.monthlyPrice.toLocaleString()}<span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: 400 }}>/mo</span></div>

              <p className="muted" style={{ marginBottom: "1rem" }}>{tier.metadata.benefits}</p>

              <div style={{ borderTop: "1px solid var(--surface-bright)", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="muted" style={{ fontSize: "0.8rem" }}>Projected members</span>
                  <span style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.9rem" }}>
                    {tier.metadata.projectedMembers}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="muted" style={{ fontSize: "0.8rem" }}>Monthly revenue</span>
                  <span style={{ fontWeight: 700, color: tierColors[tier.name] ?? "var(--gold)", fontSize: "0.9rem" }}>
                    ${(tier.metadata.monthlyPrice * tier.metadata.projectedMembers).toLocaleString()}
                  </span>
                </div>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <a className="pill-button primary" href="/#waitlist" style={{ width: "100%", justifyContent: "center" }}>
                  Join waitlist <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>All memberships include</h2>
        </div>
        <div className="grid">
          {[
            "Access to all recovery modalities within tier",
            "Concierge scheduling and digital booking",
            "Dark lounge member environment",
            "Progress tracking and wellness check-ins",
            "Priority booking during peak hours",
            "Access to member portal and records",
          ].map((benefit) => (
            <div key={benefit} className="card" style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <CheckCircle size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "0.2rem" }} />
              <span style={{ fontSize: "0.9rem" }}>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="compliance-notice">
        💳 Payments are not activated in this prototype. Live payment processing requires Stripe/Firebase integration
        approval and explicit business authorization.
      </div>

      <Footer />
    </main>
  );
}
