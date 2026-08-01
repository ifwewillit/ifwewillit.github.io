import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";

interface OpsArea {
  title: string;
  groups: { heading?: string; items: string[] }[];
}

const areas: OpsArea[] = [
  {
    title: "Entity & Corporate Management",
    groups: [
      {
        items: [
          "Oversaw entity structuring and subsidiary setup, including LLC formation, parent–subsidiary relationships, and operational separation where required",
          "Partnered with legal and finance on governance decisions, authority boundaries, and risk containment",
          "Evaluated when new entities should be created vs. operated under the parent to avoid unnecessary regulatory exposure",
        ],
      },
    ],
  },
  {
    title: "Regulatory, Legal, & State-Level Compliance",
    groups: [
      {
        heading: "Multi-State Operations",
        items: [
          "Managed state-by-state compliance considerations across all 50 states, including variations in landlord-tenant law, notice requirements, and disclosures",
          "Ensured operational processes aligned with state-specific leasing, fair housing, and consumer protection rules",
        ],
      },
      {
        heading: "Leasing & Housing Compliance",
        items: [
          "Oversaw lease structures, addenda, and operational guardrails to ensure legally defensible leasing practices",
          "Partnered with legal to address edge cases involving habitability, early termination, identity fraud, and tenant disputes",
        ],
      },
      {
        heading: "Data Privacy & Security",
        items: [
          "Led updates to privacy policy and internal data handling standards, including AI-related disclosures and data separation principles",
          "Drove security initiatives such as pen testing, security awareness training, and vendor risk reviews",
        ],
      },
    ],
  },
  {
    title: "Financial Operations & Risk Management",
    groups: [
      {
        heading: "Payments, Payroll, & Cash Flow",
        items: [
          "Owned payroll timing analysis, including three-payroll-month forecasting and cash planning",
          "Evaluated cash-flow impact of operational decisions without surfacing unnecessary internal leverage externally",
        ],
      },
      {
        heading: "Insurance, Claims, & Loss Mitigation",
        items: [
          "Led claims and submission workflows, including documentation standards, partner coordination, and owner communications",
          "Analyzed claims trends to inform self-funding vs. third-party underwriting strategy",
          "Managed owner payouts when operational responsibility required it, even when coverage was uncertain",
        ],
      },
    ],
  },
  {
    title: "Operational Process Design & Scaling",
    groups: [
      {
        heading: "Core Workflow Ownership",
        items: [
          "Personally ran and refined high-risk workflows to identify failure points, reduce manual overhead, and prepare for automation",
          "Converted tribal knowledge into documented, repeatable processes",
        ],
      },
      {
        heading: "Enablement & Automation",
        items: [
          "Designed internal systems that blend human workflows with AI assistance rather than replacing judgment",
          "Built or scoped tools for lead scoring, PTO tracking, internal knowledge retrieval, and AI-assisted communication",
        ],
      },
    ],
  },
  {
    title: "People Operations & Organizational Health",
    groups: [
      {
        heading: "HR Operations (Strategic + Tactical)",
        items: [
          "Owned PTO policy design, tracking, prediction, and enforcement, including edge cases and abuse prevention",
          "Managed performance processes, including PIPs, contractor management, and terminations",
          "Ensured compliance with wage, sick time, and classification requirements",
        ],
      },
      {
        heading: "Culture & Internal Enablement",
        items: [
          "Designed internal communication standards that balance clarity, accountability, and psychological safety",
          "Led company-wide trainings on security, AI usage, and operational changes",
          "Acted as escalation point for complex people or operational issues leadership preferred not to handle directly",
        ],
      },
    ],
  },
  {
    title: "Technology, Systems, & AI Operations",
    groups: [
      {
        heading: "Systems Ownership",
        items: [
          "Acted as de facto internal CIO/CTO for operations, owning CRM data architecture, core platform integrations, chat workflows, and vendor tooling decisions",
          "Evaluated build vs. buy decisions with cost, risk, and scale in mind",
        ],
      },
      {
        heading: "AI Strategy & Deployment",
        items: [
          "Designed and implemented AI systems embedded into daily operations, not as side projects",
          "Established guardrails around accuracy, consent, data separation, and human override",
          "Trained non-technical teams to use AI effectively in real workflows",
        ],
      },
    ],
  },
  {
    title: "Executive Support & Cross-Functional Glue",
    groups: [
      {
        heading: "COO-Level Coverage",
        items: [
          "Regularly absorbed COO-adjacent work when bandwidth, risk, or complexity required senior judgment",
          "Served as connective tissue between Legal, Finance, Ops, People, and Engineering",
          "Pressure-tested initiatives before launch to avoid half-implemented systems that create cynicism",
        ],
      },
    ],
  },
];

export function ExecutiveOperations() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Executive Operations &amp; Company Infrastructure</h1>
          <p className="lede">
            Beyond tech and people ops, I handle the complex operational machinery that keeps
            companies running: entity management, multi-state compliance, financial operations,
            and the cross-functional glue that turns strategy into reality.
          </p>
        </div>
      </header>

      {areas.map((area) => (
        <Section key={area.title} title={area.title} width="narrow">
          {area.groups.map((group, i) => (
            <div key={group.heading ?? i} className="case-section" style={{ paddingTop: 0 }}>
              {group.heading && <h3>{group.heading}</h3>}
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      ))}

      <Section
        eyebrow="Case studies"
        title="Operational Case Studies"
        intro="The executive layer, documented with the same rigor as the technical work."
      >
        <Reveal>
          <div className="grid-3">
            <Card
              href="/work/entity-management.html"
              label="Corporate"
              title="Multi-Entity Corporate Structuring"
            >
              Designing parent–subsidiary architecture for 50-state operations while minimizing
              regulatory exposure.
            </Card>
            <Card
              href="/work/compliance-engine.html"
              label="Compliance"
              title="50-State Compliance Engine"
            >
              Operational processes that adapt to state-specific regulation without creating 50
              different workflows.
            </Card>
            <Card
              href="/work/risk-mitigation.html"
              label="Risk"
              title="Financial Risk & Claims Management"
            >
              Transforming reactive claims handling into a trend-driven risk mitigation system.
            </Card>
          </div>
        </Reveal>
      </Section>

      <Section title="Need this kind of coverage?">
        <p className="section-intro">
          This layer of work rarely justifies a full-time hire until it's already on fire. That's
          what engagements are for.
        </p>
        <Button href="/contact.html">Start a conversation</Button>
      </Section>
    </>
  );
}
