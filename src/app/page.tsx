import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Sparkles, TimerReset, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";
import {
  brand,
  launchLocation,
  membershipRecords,
  monthlyMembershipRevenue,
  serviceRecords,
} from "@/lib/data";

export const metadata = {
  title: "VYTAL House — Recharge. Recover. Evolve.",
  description:
    "A premium recovery and wellness club combining clinical-grade modalities with a dark spacecraft-inspired member experience. Columbia, Maryland.",
};

const features = [
  {
    icon: <Sparkles size={20} />,
    title: "Spacecraft ambience",
    body: "Dark cinematic lounges, chrome textures, warm gold, and therapy-specific glow engineered for deep recovery.",
  },
  {
    icon: <TimerReset size={20} />,
    title: "Recurring recovery",
    body: "Core, Elite, and Black membership tiers modeled for $179,700 in monthly recurring revenue at target mix.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Governed launch",
    body: "No live medical intake, payments, vendor sends, or external workspace creation before explicit approval.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Target location",
    body: `${launchLocation?.metadata?.fullAddress ?? brand.targetAddress}. Lease, zoning, and tenant improvements remain approval-gated.`,
  },
  {
    icon: <Zap size={20} />,
    title: "Clinical modalities",
    body: "Hyperbaric oxygen, IV therapy, NAD+, red light, cryotherapy, float, sauna, cold plunge, and compression.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="eyebrow">Maryland recovery and wellness club</p>
          <h1>{brand.name}</h1>
          <p className="hero-copy">{brand.tagline} — {brand.description}</p>
          <div className="hero-actions">
            <a className="pill-button primary" href="#waitlist">
              Join waitlist <ArrowRight size={15} />
            </a>
            <a className="pill-button" href="/portal">Open portal</a>
            <a className="pill-button" href="/facility">View facility</a>
          </div>
        </div>
        <div className="hero-panel">
          <Image
            src="/images/vytal-floor-plan.png"
            alt="VYTAL House conceptual floor plan at 9017 Mendenhall Court, Suite F"
            width={920}
            height={518}
            priority
          />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section">
        <div className="grid">
          {features.map((f) => (
            <article className="card" key={f.title}>
              <span style={{ color: "var(--cyan)", marginBottom: "0.6rem", display: "block" }}>
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Therapy system</p>
          <h2>Recovery Services</h2>
          <p className="muted">
            Service lanes are source-backed and marked for clinical review before live launch.
          </p>
        </div>
        <div className="grid">
          {serviceRecords.slice(0, 6).map((service) => (
            <article className="card" key={service.id}>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{service.metadata.category}</p>
              <h3>{service.name}</h3>
              <p className="muted" style={{ margin: 0 }}>{service.metadata.description}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <a className="pill-button" href="/services">View all services <ArrowRight size={14} /></a>
        </div>
      </section>

      {/* Membership Model */}
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Access tiers</p>
          <h2>Membership Model</h2>
          <div className="stat">${monthlyMembershipRevenue.toLocaleString()}<span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: 400, marginLeft: "0.4rem" }}>/mo modeled</span></div>
        </div>
        <div className="grid">
          {membershipRecords.map((tier) => (
            <article className="card" key={tier.id} style={{ borderColor: tier.name === "Black" ? "rgba(200,164,107,0.4)" : undefined }}>
              <p className="eyebrow">{tier.name}</p>
              <div className="stat">${tier.metadata.monthlyPrice.toLocaleString()}</div>
              <p className="muted" style={{ marginBottom: "0.75rem" }}>{tier.metadata.benefits}</p>
              <p className="muted" style={{ fontSize: "0.75rem" }}>
                {tier.metadata.projectedMembers} projected members
              </p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <a className="pill-button" href="/memberships">Full membership details <ArrowRight size={14} /></a>
        </div>
      </section>

      {/* Waitlist */}
      <section className="section" id="waitlist">
        <div className="section-head">
          <p className="eyebrow">Founder access</p>
          <h2>Join the Waitlist</h2>
          <p className="muted">
            This prototype captures interest only. No protected health information is collected. No payments are processed.
          </p>
        </div>
        <LeadForm />
      </section>

      <Footer />
    </main>
  );
}
