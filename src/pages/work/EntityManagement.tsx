import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function EntityManagement() {
  return (
    <CaseStudyLayout slug="entity-management">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          A company operating nationwide doesn't get to have a simple corporate structure. New
          business lines raise the question of whether they need their own entity. Regulatory
          exposure differs by state and by activity. And every entity you create adds filing
          obligations, banking complexity, and governance overhead that someone has to carry
          forever.
        </p>
        <p>
          The failure modes run in both directions. Create entities too eagerly and you drown in
          administration while the structure drifts out of anyone's head. Create them too
          reluctantly and one business line's risk bleeds into another's. Most companies discover
          their structure is wrong only when a lawyer, a lender, or a regulator asks a question
          nobody can answer quickly.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>No in-house counsel for structure work.</strong> Outside firms billed by the
            hour, so the analysis had to arrive at their door already organized.
          </li>
          <li>
            <strong>50-state operating footprint.</strong> Decisions couldn't be made state by
            state; the framework had to generalize.
          </li>
          <li>
            <strong>Operational separation had to be real.</strong> An entity boundary that exists
            only on paper is worse than none — it implies protections that won't hold.
          </li>
          <li>
            <strong>Leadership needed legibility.</strong> If the structure can't be explained in
            one diagram, it can't be governed.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Entity Decision Framework</h3>
        <p>
          A repeatable evaluation for "does this need its own entity?": regulatory exposure of the
          activity, liability isolation actually gained, banking and insurance requirements, and
          the recurring administrative cost of saying yes. The default answer became "operate
          under the parent unless a specific risk says otherwise" — which killed the reflex to
          spin up an LLC for every new idea.
        </p>

        <h3>Formation and Governance Runbooks</h3>
        <p>
          For entities that did clear the bar: a formation runbook covering registration,
          registered agents, banking, insurance, and intercompany agreements — and, just as
          important, documented authority boundaries. Who can sign for which entity, which
          decisions require which approvals, and where operational separation must be maintained
          for the structure to mean anything.
        </p>

        <h3>Structure as Code</h3>
        <p>
          The corporate structure lives in a versioned data file that generates the current
          org-and-entity diagram on demand — interactive for working sessions, print-ready for
          lawyers and lenders. When the structure changes, the source of truth changes, and every
          diagram everywhere is regenerated rather than redrawn. No more archaeology through old
          slide decks to figure out what's current.
        </p>

        <h3>Partnering with Legal and Finance</h3>
        <p>
          I ran the operational side of governance decisions: framing the question, gathering the
          facts, pressure-testing the options, and bringing legal and finance a decision to
          confirm rather than a mess to untangle. Outside counsel time went toward judgment, not
          discovery.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
