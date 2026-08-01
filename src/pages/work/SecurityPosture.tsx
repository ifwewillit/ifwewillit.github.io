import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function SecurityPosture() {
  return (
    <CaseStudyLayout slug="security-posture">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          A major enterprise client required a third-party penetration test before signing. We'd
          never had one. Our security posture was decent but undocumented. We had good practices
          in place but couldn't prove it. The gap between "we're secure" and "we can demonstrate
          security" was about to cost us a significant deal.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>Tight timeline.</strong> Client needed results before quarter end. No time for
            perfect.
          </li>
          <li>
            <strong>No security team.</strong> Engineering was busy shipping product. This landed
            on me.
          </li>
          <li>
            <strong>Documentation gap.</strong> Practices existed but weren't written down.
          </li>
          <li>
            <strong>Unknown unknowns.</strong> We didn't know what the pen testers would find.
            That's the point.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Scoping</h3>
        <p>
          Worked with the pen test firm to define scope. Which systems, which attack vectors,
          what's in bounds. Coordinated with engineering to identify all external-facing services,
          APIs, and data flows. You can't test what you haven't mapped.
        </p>

        <h3>Pre-Assessment Hardening</h3>
        <p>
          Before the test, addressed the obvious gaps. Unused ports closed, default credentials
          rotated, unnecessary services disabled. Not to hide problems, but to focus the test on
          real attack surfaces instead of low-hanging fruit.
        </p>

        <h3>Access Control Audit</h3>
        <p>
          Full review of who had access to what. Discovered several accounts that should have been
          deprovisioned, permissions that had crept beyond role requirements, and service accounts
          with excessive privileges. Fixed all of it.
        </p>

        <h3>Documentation</h3>
        <p>
          Created security documentation that didn't exist: network diagrams, data flow maps,
          access control matrices, incident response procedures. Not for compliance theater, but
          because you can't secure what you can't describe.
        </p>

        <h3>Remediation Process</h3>
        <p>
          When findings came back, triaged by severity and exploitability. Critical issues fixed
          within 48 hours. Created tracking system for remediation progress. Coordinated retesting
          to verify fixes.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
