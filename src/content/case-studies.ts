import type { CaseStudy } from "./types";

/**
 * Order defines prev/next navigation and listing order.
 * Body prose lives in src/pages/work/<Slug>.tsx; this is the shared metadata.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "it-function",
    label: "Infrastructure",
    title: "IT Function from Zero",
    summary:
      "Building enterprise IT infrastructure during 3x headcount growth with no dedicated IT budget, no existing systems, and no playbook.",
    results: [
      { value: "80%", label: "Reduction in onboarding time" },
      { value: "70+", label: "Vendors managed" },
      { value: "0", label: "Security incidents from access issues" },
      { value: "3x", label: "Headcount growth supported" },
    ],
    artifacts: [
      "SSO implementation across all compatible tools",
      "MDM deployment with automated provisioning",
      "Vendor management database and renewal tracking",
      "Role-based access control templates",
      "IT runbook covering all standard procedures",
      "Security questionnaire response library",
    ],
  },
  {
    slug: "people-ops",
    label: "People",
    title: "People Ops at Scale",
    summary:
      "Building HR infrastructure from nothing during 3x headcount growth. Compensation, performance, lifecycle, compliance.",
    results: [
      { value: "12→38+", label: "Employees during my tenure" },
      { value: "Days", label: "Time-to-productivity, down from weeks" },
      { value: "Passed", label: "Every compliance audit" },
      { value: "3x", label: "Headcount growth supported" },
    ],
    artifacts: [
      "Job architecture with levels and career paths",
      "Compensation bands and benchmarking methodology",
      "Performance review templates and calibration process",
      "Employee handbook and policy library",
      "Onboarding program with 30/60/90 day structure",
      "Manager training materials for people conversations",
    ],
  },
  {
    slug: "ai-capability",
    label: "AI",
    title: "AI Capability in Production",
    summary:
      "Moving from AI curiosity to AI infrastructure. 8 production systems, governance framework, and measurable ROI.",
    results: [
      { value: "8", label: "Production AI systems" },
      { value: "$275K+", label: "Annual ROI documented" },
      { value: "0", label: "Data incidents" },
      { value: "Every", label: "Team shipping with AI in their workflow" },
    ],
    artifacts: [
      "AI acceptable use policy and data classification guide",
      "Use case evaluation framework and approval workflow",
      "Production system documentation and architecture",
      "ROI tracking dashboard and monthly reporting",
      "Team-specific training materials and prompt libraries",
      "Vendor evaluation criteria for AI tools",
    ],
  },
  {
    slug: "pto-prediction",
    label: "ML",
    title: "PTO Prediction System",
    summary:
      "Using data to identify burnout risk before it becomes turnover. Real patterns discovered, actual interventions made.",
    results: [
      { value: "12", label: "Interventions triggered" },
      { value: "3", label: "Policy changes informed" },
      { value: "~40", label: "Employees covered" },
      { value: "Weekly", label: "Automated reporting" },
    ],
    artifacts: [
      "Python codebase with data pipeline and risk model",
      "Automated weekly risk report generation",
      "Manager dashboard for team-level visibility",
      "Intervention conversation guide",
      "Documentation of methodology and limitations",
    ],
  },
  {
    slug: "security-posture",
    label: "Security",
    title: "Security & Pen Test Readiness",
    summary:
      "Leading enterprise penetration test preparation from scoping through remediation. Making security real, not just documented.",
    results: [
      { value: "100%", label: "Critical findings remediated" },
      { value: "48hr", label: "Critical issue response time" },
      { value: "Passed", label: "Enterprise security assessment" },
      { value: "Signed", label: "Enterprise client contract" },
    ],
    artifacts: [
      "Security assessment scoping documentation",
      "Network architecture and data flow diagrams",
      "Access control matrix and audit trail",
      "Remediation tracking and prioritization framework",
      "Incident response procedures",
      "Security questionnaire response library",
    ],
  },
  {
    slug: "entity-management",
    label: "Corporate",
    title: "Multi-Entity Corporate Structuring",
    summary:
      "Designing parent–subsidiary architecture for 50-state operations: when to create entities, how to bound authority, and how to keep the whole structure legible.",
    results: [
      { value: "50", label: "States in the operating footprint" },
      { value: "1", label: "Source of truth for corporate structure" },
      { value: "Days", label: "To evaluate and stand up a new entity" },
      { value: "Documented", label: "Authority boundaries for every entity" },
    ],
    artifacts: [
      "Entity decision framework (create vs. operate under parent)",
      "Subsidiary formation and wind-down runbooks",
      "Governance boundary documentation by entity",
      "Corporate structure as code: versioned source generating current diagrams",
      "Risk containment review checklist",
    ],
  },
  {
    slug: "compliance-engine",
    label: "Compliance",
    title: "50-State Compliance Engine",
    summary:
      "Building operational processes that adapt to state-specific regulation without becoming 50 different workflows.",
    results: [
      { value: "50", label: "States covered by one process family" },
      { value: "1", label: "Policy stack, versioned and maintained" },
      { value: "Quarterly", label: "Review cadence keeping rules current" },
      { value: "Passed", label: "Every audit it has faced" },
    ],
    artifacts: [
      "State requirements matrix mapping regulation to workflow",
      "Versioned policy stack: acceptable use, data retention, incident response, and more",
      "Operational guardrails embedded in day-to-day tooling",
      "Compliance review cadence and ownership model",
      "Audit response playbook",
    ],
  },
  {
    slug: "risk-mitigation",
    label: "Risk",
    title: "Financial Risk & Claims Management",
    summary:
      "Turning reactive claims handling into a documented, trend-driven risk system spanning claims, insurance strategy, and cash-flow planning.",
    results: [
      { value: "1", label: "Claims playbook replacing ad hoc handling" },
      { value: "3-month", label: "Rolling cash-flow forecast horizon" },
      { value: "Trend-based", label: "Self-fund vs. underwrite strategy" },
      { value: "Standardized", label: "Documentation on every claim" },
    ],
    artifacts: [
      "Claims intake and documentation standards",
      "Claims trend analysis informing underwriting strategy",
      "Payout decision framework for ambiguous coverage",
      "Three-payroll-month cash forecasting model",
      "Partner and owner communication templates",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
