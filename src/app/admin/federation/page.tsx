import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import manifest from "../../../../project/VYTAL_HOUSE_PROJECT_MANIFEST.json";

function titleCase(value: string) {
  return value
    .replace(/[-/]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export default function Page() {
  const repositories = manifest.metadata.repositories;
  const p0Count = repositories.filter((repository) => repository.priority === "P0").length;
  const approvalGateCount = repositories.filter((repository) => repository.relationship.includes("approval-gate")).length;
  const plannedCount = repositories.filter((repository) => repository.stage === "planned").length;

  return (
    <main className="page-shell">
      <Nav />

      <section className="section">
        <p className="eyebrow">VYTAL House · Project Federation</p>
        <h1>Cross-Repository Control Plane</h1>
        <p className="hero-copy">
          Read-only prototype view of the VYTAL ecosystem dependencies required by the proposed flagship. Each domain remains authoritative in its own repository.
        </p>
        <div className="hero-actions">
          <a className="pill-button primary" href="/admin">Back to admin</a>
          <a className="pill-button" href="https://github.com/ChaunDon5000/VYTALEnterprise" target="_blank" rel="noreferrer">Open enterprise canon</a>
        </div>
      </section>

      <section className="section">
        <div className="metric-grid">
          <article className="card">
            <p className="eyebrow">Federated repositories</p>
            <div className="stat">{repositories.length}</div>
            <p className="muted">Tracked without merging domain boundaries.</p>
          </article>
          <article className="card">
            <p className="eyebrow">P0 dependencies</p>
            <div className="stat">{p0Count}</div>
            <p className="muted">Launch-critical governance, facility, clinical, IP and brand gates.</p>
          </article>
          <article className="card">
            <p className="eyebrow">Approval gates</p>
            <div className="stat">{approvalGateCount}</div>
            <p className="muted">House may consume approved state but cannot grant the approval.</p>
          </article>
          <article className="card">
            <p className="eyebrow">Planned domains</p>
            <div className="stat">{plannedCount}</div>
            <p className="muted">Prototype contracts may be built without implying production readiness.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Repository Federation</h2>
          <p className="muted">Source: local public-safe project manifest · Updated {manifest.updatedAt}</p>
        </div>
        <div className="wide-panel">
          <table className="table">
            <thead>
              <tr>
                <th>Repository</th>
                <th>Relationship</th>
                <th>Stage</th>
                <th>Priority</th>
                <th>Authority</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repository) => (
                <tr key={repository.repository}>
                  <td>
                    <a href={`https://github.com/${repository.repository}`} target="_blank" rel="noreferrer">
                      {repository.repository.replace("ChaunDon5000/", "")}
                    </a>
                  </td>
                  <td>{titleCase(repository.relationship)}</td>
                  <td>{titleCase(repository.stage)}</td>
                  <td>{repository.priority}</td>
                  <td>{titleCase(repository.authority)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Launch-Critical Dependencies</h2>
          <p className="muted">These are dependency labels, not statements of approval or completion.</p>
        </div>
        <div className="metric-grid">
          {manifest.metadata.launchCriticalDependencies.map((dependency) => (
            <article className="card" key={dependency}>
              <p className="eyebrow">P0 gate</p>
              <h3>{titleCase(dependency)}</h3>
              <p className="muted">Resolve in the authoritative domain before promoting House status.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wide-panel">
          <p className="eyebrow">Prototype safety boundary</p>
          <h2>Read-only coordination, not authority transfer</h2>
          <p className="muted">
            No legal, clinical, regulatory, financing, product, brand or opening approval is created by this view. Restricted data is not permitted in the manifest.
          </p>
          <p className="muted">Next implementation: {manifest.metadata.nextImplementation}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
