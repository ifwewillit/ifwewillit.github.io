import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";
import { SystemsMap, type MapSpec } from "../../components/SystemsMap";

const map: MapSpec = {
  title: "Compliance engine: from state regulations to audited workflows",
  defaultCaption:
    "One process family that adapts to 50 states — not 50 processes. Hover or tab through the nodes.",
  nodes: [
    {
      id: "regs",
      label: "State regulations",
      x: 20,
      y: 100,
      w: 150,
      caption: "Landlord-tenant law, notice requirements, disclosures, consumer protection — varying across all 50 states.",
    },
    {
      id: "matrix",
      label: "Requirements matrix",
      x: 230,
      y: 20,
      w: 180,
      caption: "Each state's requirements mapped to the specific workflow steps they affect. The translation layer.",
    },
    {
      id: "policy",
      label: "Versioned policy stack",
      x: 230,
      y: 180,
      w: 180,
      caption: "Policies maintained like software: one source of truth, git history, changes as reviewable diffs.",
    },
    {
      id: "workflows",
      label: "Operational workflows",
      x: 470,
      y: 100,
      w: 180,
      caption: "Guardrails embedded where the work happens — the compliant path is the default path.",
    },
    {
      id: "audit",
      label: "Audit & review loop",
      x: 710,
      y: 100,
      w: 160,
      caption: "Quarterly reviews catch regulatory drift; findings flow back into the matrix and policies.",
    },
  ],
  edges: [
    ["regs", "matrix"],
    ["regs", "policy"],
    ["matrix", "workflows"],
    ["policy", "workflows"],
    ["workflows", "audit"],
    ["audit", "matrix"],
  ],
};

export function ComplianceEngine() {
  return (
    <CaseStudyLayout slug="compliance-engine">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          Operating in all 50 states means 50 versions of landlord-tenant law, notice
          requirements, disclosure rules, and consumer protection statutes. The naive responses
          are both wrong: one rigid national process that violates somebody's rules somewhere, or
          50 bespoke workflows that no team can actually execute and no one can maintain.
        </p>
        <p>
          Compliance also wasn't a department. There was no compliance officer, no legal team on
          staff — just operational teams doing the work and a growing surface area of rules the
          work had to respect.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>The teams executing weren't lawyers.</strong> Requirements had to arrive as
            workflow steps, not statute citations.
          </li>
          <li>
            <strong>Regulation moves.</strong> States change notice periods and disclosure rules;
            a static binder is out of date the day it's printed.
          </li>
          <li>
            <strong>Auditability.</strong> When a client, partner, or regulator asked "how do you
            handle X in state Y," the answer had to be produceable in minutes.
          </li>
          <li>
            <strong>No compliance headcount.</strong> The system had to run as part of operations,
            not alongside it.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <SystemsMap spec={map} />

        <h3>State Requirements Matrix</h3>
        <p>
          The translation layer between regulation and operations: for each state, the specific
          requirements that differ — notice periods, required disclosures, process variations —
          mapped to the exact workflow steps they modify. Teams run one process family with
          state-specific parameters, not 50 processes.
        </p>

        <h3>Versioned Policy Stack</h3>
        <p>
          Policies maintained like software: a single source of truth in version control, with
          every change a reviewable diff. The stack grew to cover AI acceptable use, generative
          AI, data retention, incident response, technology acceptable use, and the
          employment-law policies a multi-state employer needs. When an auditor asks what the
          policy said last March, the history answers.
        </p>

        <h3>Guardrails in the Workflow</h3>
        <p>
          The compliance system lives where the work happens: lease structures and addenda with
          the right state variants, checklists that surface state-specific steps at the right
          moment, and hard stops where getting it wrong is expensive. People follow compliant
          processes when the compliant process is also the easiest one.
        </p>

        <h3>Review Cadence</h3>
        <p>
          Quarterly reviews against regulatory change, with clear ownership for each domain.
          Findings don't go into a report that gets filed — they go back into the matrix and the
          policy stack, and the workflows update. The loop is the system.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
