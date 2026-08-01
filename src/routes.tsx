import type { ComponentType } from "react";
import type { PageMeta } from "./content/types";
import { site } from "./content/site";

import { Home } from "./pages/Home";
import { ExecutiveOperations } from "./pages/ExecutiveOperations";
import { Now } from "./pages/Now";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { WorkIndex } from "./pages/work/WorkIndex";
import { ItFunction } from "./pages/work/ItFunction";
import { PeopleOps } from "./pages/work/PeopleOps";
import { AiCapability } from "./pages/work/AiCapability";
import { PtoPrediction } from "./pages/work/PtoPrediction";
import { SecurityPosture } from "./pages/work/SecurityPosture";
import { EntityManagement } from "./pages/work/EntityManagement";
import { ComplianceEngine } from "./pages/work/ComplianceEngine";
import { RiskMitigation } from "./pages/work/RiskMitigation";
import { WritingIndex } from "./pages/writing/WritingIndex";
import { BuildingFunctions } from "./pages/writing/BuildingFunctions";
import { VendorSprawl } from "./pages/writing/VendorSprawl";
import { AiGovernance } from "./pages/writing/AiGovernance";
import { MetricsEnablement } from "./pages/writing/MetricsEnablement";
import { BuildsIndex } from "./pages/builds/BuildsIndex";
import { Kitchen } from "./pages/kitchen/Kitchen";

export interface Route {
  /** URL as served, e.g. "/work/it-function.html" */
  path: string;
  /** dist-relative output file, e.g. "work/it-function.html" */
  outFile: string;
  component: ComponentType;
  meta: PageMeta;
}

export const routes: Route[] = [
  {
    path: "/",
    outFile: "index.html",
    component: Home,
    meta: {
      title: `${site.name} | Systems, AI Capability & Executive Operations`,
      description: site.description,
    },
  },
  {
    path: "/executive-operations.html",
    outFile: "executive-operations.html",
    component: ExecutiveOperations,
    meta: {
      title: `Executive Operations | ${site.name}`,
      description:
        "Complex operational leadership spanning corporate governance, regulatory compliance, financial operations, and organizational scaling.",
    },
  },
  {
    path: "/now.html",
    outFile: "now.html",
    component: Now,
    meta: {
      title: `Now | ${site.name}`,
      description: "What Will O'Neil is focused on right now: consulting, building, learning, cooking.",
    },
  },
  {
    path: "/contact.html",
    outFile: "contact.html",
    component: Contact,
    meta: {
      title: `Contact | ${site.name}`,
      description:
        "Start a conversation about consulting engagements: AI capability, ops infrastructure, and executive operations.",
    },
  },
  {
    path: "/work/",
    outFile: "work/index.html",
    component: WorkIndex,
    meta: {
      title: `Case Studies | ${site.name}`,
      description:
        "Detailed breakdowns of systems built from zero: IT, People Ops, AI capability, security, compliance, and corporate operations.",
    },
  },
  {
    path: "/work/it-function.html",
    outFile: "work/it-function.html",
    component: ItFunction,
    meta: {
      title: `IT Function from Zero | ${site.name}`,
      description:
        "How I built an IT function from scratch during hypergrowth: SSO architecture, device management, access governance, and a 70+ vendor ecosystem.",
    },
  },
  {
    path: "/work/people-ops.html",
    outFile: "work/people-ops.html",
    component: PeopleOps,
    meta: {
      title: `People Ops at Scale | ${site.name}`,
      description:
        "Building a People Operations function from zero: compensation architecture, performance management, and employee lifecycle systems.",
    },
  },
  {
    path: "/work/ai-capability.html",
    outFile: "work/ai-capability.html",
    component: AiCapability,
    meta: {
      title: `AI Capability in Production | ${site.name}`,
      description:
        "Moving a company from AI curiosity to AI infrastructure: 8 production systems, a governance framework, and documented ROI.",
    },
  },
  {
    path: "/work/pto-prediction.html",
    outFile: "work/pto-prediction.html",
    component: PtoPrediction,
    meta: {
      title: `PTO Prediction System | ${site.name}`,
      description:
        "Using time-off data to identify burnout risk before it becomes turnover: interpretable risk model, weekly reporting, human-first interventions.",
    },
  },
  {
    path: "/work/security-posture.html",
    outFile: "work/security-posture.html",
    component: SecurityPosture,
    meta: {
      title: `Security & Pen Test Readiness | ${site.name}`,
      description:
        "Leading enterprise penetration test preparation from scoping through remediation: documentation, access controls, and a signed enterprise contract.",
    },
  },
  {
    path: "/work/entity-management.html",
    outFile: "work/entity-management.html",
    component: EntityManagement,
    meta: {
      title: `Multi-Entity Corporate Structuring | ${site.name}`,
      description:
        "Designing parent–subsidiary architecture for 50-state operations: entity decision frameworks, governance boundaries, and structure kept legible.",
    },
  },
  {
    path: "/work/compliance-engine.html",
    outFile: "work/compliance-engine.html",
    component: ComplianceEngine,
    meta: {
      title: `50-State Compliance Engine | ${site.name}`,
      description:
        "Building operational processes that adapt to state-specific regulation without becoming 50 different workflows.",
    },
  },
  {
    path: "/work/risk-mitigation.html",
    outFile: "work/risk-mitigation.html",
    component: RiskMitigation,
    meta: {
      title: `Financial Risk & Claims Management | ${site.name}`,
      description:
        "Turning reactive claims handling into a documented, trend-driven risk system spanning claims, insurance strategy, and cash-flow planning.",
    },
  },
  {
    path: "/writing/",
    outFile: "writing/index.html",
    component: WritingIndex,
    meta: {
      title: `Writing | ${site.name}`,
      description:
        "Short essays on building systems, governance that works, and operational judgment.",
    },
  },
  {
    path: "/writing/building-functions-from-zero.html",
    outFile: "writing/building-functions-from-zero.html",
    component: BuildingFunctions,
    meta: {
      title: `How I Build Functions from Zero | ${site.name}`,
      description:
        "The pattern behind building IT, People Ops, and AI capability from nothing: find the pain, document, solve one problem at a time, build to hand off.",
    },
  },
  {
    path: "/writing/vendor-sprawl.html",
    outFile: "writing/vendor-sprawl.html",
    component: VendorSprawl,
    meta: {
      title: `Vendor Sprawl, Access Governance, and Why It Fails | ${site.name}`,
      description:
        "Companies guess they use 30 SaaS tools; the real number is usually 70+. Why quarterly access reviews fail and what actually works.",
    },
  },
  {
    path: "/writing/ai-governance.html",
    outFile: "writing/ai-governance.html",
    component: AiGovernance,
    meta: {
      title: `AI in Ops: Governance That People Actually Follow | ${site.name}`,
      description:
        "Effective AI governance fits on one page and answers three questions. Everything longer gets ignored.",
    },
  },
  {
    path: "/writing/metrics-enablement.html",
    outFile: "writing/metrics-enablement.html",
    component: MetricsEnablement,
    meta: {
      title: `Metrics That Matter for Enablement | ${site.name}`,
      description:
        "Ticket counts reward complexity. Response times reward being reactive. Measure what you're enabling instead.",
    },
  },
  {
    path: "/builds/",
    outFile: "builds/index.html",
    component: BuildsIndex,
    meta: {
      title: `Builds | ${site.name}`,
      description:
        "Production systems built across AI/LLM pipelines, data infrastructure, internal platforms, and the web — with the architecture patterns behind them.",
    },
  },
  {
    path: "/kitchen/",
    outFile: "kitchen/index.html",
    component: Kitchen,
    meta: {
      title: `This Is Me | ${site.name}`,
      description:
        "Principles, standards, and the kitchen: who Will O'Neil is outside of work.",
    },
  },
  {
    path: "/404.html",
    outFile: "404.html",
    component: NotFound,
    meta: {
      title: `Page Not Found | ${site.name}`,
      description: "That page doesn't exist.",
      noindex: true,
    },
  },
];

/** Normalize a browser pathname to a route path. */
export function matchRoute(pathname: string): Route {
  let p = pathname;
  if (p.endsWith("/index.html")) p = p.slice(0, -"index.html".length);
  if (p === "") p = "/";
  const found =
    routes.find((r) => r.path === p) ?? routes.find((r) => r.path === `${p}/`);
  return found ?? routes.find((r) => r.path === "/404.html")!;
}
