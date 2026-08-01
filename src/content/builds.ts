import type { BuildProject } from "./types";

/**
 * Projects drawn from work across both GitHub accounts. Client work is
 * described at the pattern/architecture level only — no proprietary domains,
 * rubrics, data, or internal URLs.
 */
export const builds: BuildProject[] = [
  // -- Mobile --
  {
    id: "protocol",
    theme: "mobile",
    title: "Protocol",
    oneLiner: "An evidence-based fitness & nutrition app for iPhone and Apple Watch.",
    description:
      "~40,000 lines of Swift. An AI coach built on the Claude API uses agentic tool calls to log food and weight straight from conversation; meals can also be logged from a photo or searched across USDA and Open Food Facts. Adaptive training programs with strength standards, recovery scoring, HealthKit throughout, a full Watch companion with live rep counting, home-screen widgets, and a rest-timer Live Activity. Every science insight in the app cites its primary study.",
    stack: ["Swift", "SwiftUI", "SwiftData", "HealthKit", "Claude API", "watchOS"],
  },
  // -- AI & LLM systems --
  {
    id: "request-radar",
    theme: "ai",
    title: "Request Radar",
    oneLiner: "An AI triage layer that catches every ask before it gets dropped.",
    description:
      "Requests arrive everywhere — chat threads, email, meeting notes, CRM tasks. This system sweeps all four intake surfaces on a schedule, uses an LLM to judge what's request-shaped and unhandled, files clean issues into the tracker with Shape Up sizing, and sends a weekly shipped/in-flight/betting-table digest to leadership.",
    stack: ["TypeScript", "Cloudflare Workers", "Claude API", "Slack API", "Linear"],
  },
  {
    id: "llm-visibility",
    theme: "ai",
    title: "LLM Visibility Tracker",
    oneLiner: "Brand monitoring for the AI-search era.",
    description:
      "Tracks how often and how favorably a brand appears in answers from GPT, Claude, Gemini, and Perplexity — with web search enabled — then analyzes which sources (review sites, forums, blogs) drive the citations. Trend dashboards turn 'do the AIs know us?' into a measurable channel, built on 750+ tracked citation URLs.",
    stack: ["Python", "Multi-model APIs", "Cloudflare Pages", "Dashboards"],
  },
  {
    id: "call-scoring",
    theme: "ai",
    title: "AI Call Scoring Pipeline",
    oneLiner: "Replaced a ~$15k/yr vendor feature with a structured LLM rubric.",
    description:
      "Telephony API → transcript → LLM evaluation against a structured, multi-category rubric → scores and timeline events written back to the CRM contact. Managers get consistent, explainable call QA on every call instead of a black-box vendor score on some of them.",
    stack: ["Python", "Gemini", "HubSpot", "Telephony APIs"],
  },
  {
    id: "support-agent",
    theme: "ai",
    title: "Support Auto-Responder",
    oneLiner: "Answers the tickets it's sure about. Escalates the rest.",
    description:
      "Matches inbound support tickets against a knowledge base with semantic search, auto-responds only above a confidence threshold, and leaves everything else for humans — with spam and wrong-company prefilters. Core principle: never send a wrong answer; accuracy over volume.",
    stack: ["TypeScript", "Embeddings", "HubSpot", "Cloudflare"],
  },
  {
    id: "ai-bootcamp",
    theme: "ai",
    title: "Multi-Model AI Training Platform",
    oneLiner: "A hands-on LLM playground that trained a whole company.",
    description:
      "Browser-based AI curriculum with a live multi-model lab: side-by-side comparison across Claude and GPT models behind one edge proxy, server-side auth, and a gamified points-and-badges leaderboard. Six progressive modules with exercises built on the team's real work, not generic prompt tips.",
    stack: ["Cloudflare Workers", "Workers KV", "Claude API", "OpenAI API"],
  },
  {
    id: "ai-hack-week",
    theme: "ai",
    title: "AI Hack Week Program",
    oneLiner: "An internal competition that shipped winners to production.",
    description:
      "Program design modeled on YC's Requests for Startups: a curated catalog of high-leverage project ideas, teams of 3–4, one week of hacking plus three weeks of build-out, judged on business impact — with winning projects deployed to production, not demo-shelved.",
    stack: ["Program design", "AI adoption", "RFS methodology"],
  },
  // -- Data pipelines --
  {
    id: "report-ingest",
    theme: "data",
    title: "Typed Report-Ingest Worker",
    oneLiner: "Replaced a brittle no-code automation with a typed, testable pipeline.",
    description:
      "Property-management reports get emailed on a schedule to a dedicated address; a Cloudflare Email Worker parses the CSVs, normalizes rows under composite keys, and lands them in structured Airtable bases. What was an abandoned drag-and-drop scenario became a versioned, CI-tested TypeScript codebase.",
    stack: ["TypeScript", "Cloudflare Email Workers", "Airtable", "CSV parsing"],
  },
  {
    id: "enrichment-waterfall",
    theme: "data",
    title: "Contact Enrichment Waterfall",
    oneLiner: "Six chained vendor APIs with per-call budget enforcement.",
    description:
      "Address normalization → property-owner records → email/phone discovery → validation, chained across six third-party data APIs with validation gates between stages, PostgreSQL-backed dedupe and history, concurrent processing for thousands of records, and a configurable daily budget ceiling tracked per API call.",
    stack: ["Python", "PostgreSQL", "6 data APIs", "Cost governance"],
  },
  {
    id: "pto-signals",
    theme: "data",
    title: "PTO Risk Signals",
    oneLiner: "Burnout risk surfaced from time-off patterns, before resignation letters.",
    description:
      "Data pipeline joining PTO, calendar, and tenure data into an interpretable rule-based risk model — chosen over black-box ML for a ~40-person dataset — with automated weekly risk tiers and a human-first intervention protocol.",
    stack: ["Python", "Data pipeline", "Interpretable models"],
    caseStudyHref: "/work/pto-prediction.html",
  },
  // -- Platforms --
  {
    id: "tools-sandbox",
    theme: "platform",
    title: "Zero-Blast-Radius Tools Sandbox",
    oneLiner: "Non-engineers ship internal tools safely, in minutes.",
    description:
      "An isolated deploy target where describing a tool to an AI assistant, typechecking, and pushing to main puts it live in ~2 minutes — with company SSO enforced at the edge on every URL including preview deploys, secrets kept out of code by policy, and hard isolation from production. AI-assisted development as a governed platform, not a loophole.",
    stack: ["Cloudflare Pages", "Cloudflare Access", "GitHub Actions", "TypeScript"],
  },
  {
    id: "team-onboarding",
    theme: "platform",
    title: "AI Dev-Environment Runbook",
    oneLiner: "Zero to a working AI coding setup in 45 minutes — for non-engineers.",
    description:
      "A tested onboarding runbook that takes operations teammates from a fresh Mac to a fully configured AI-assisted development environment: package manager, git, a modern CLI toolbelt, and Claude Code wired to the data they actually work with. Enablement as documentation, not tribal knowledge.",
    stack: ["Claude Code", "Developer experience", "Documentation"],
  },
  {
    id: "policy-as-code",
    theme: "platform",
    title: "Policy & Handbook as Code",
    oneLiner: "A multi-state employee handbook maintained like software.",
    description:
      "Handbook and policy stack kept as versioned markdown source — one source of truth, git history for every change, multi-state compliance updates as reviewable diffs. The same discipline extends to a full policy library: AI acceptable use, data retention, incident response, and more.",
    stack: ["Markdown", "Git", "Compliance ops"],
    caseStudyHref: "/work/compliance-engine.html",
  },
  // -- Web --
  {
    id: "spotrent",
    theme: "web",
    title: "spotrent.co",
    oneLiner: "A fintech marketing site with engineering discipline.",
    description:
      "Marketing site for an embedded-fintech product, built with Gatsby, React, and Chakra UI — typecheck and lint as hard CI gates, pinned Node, scroll-reveal interactions, and an AI-assisted development guide documenting the codebase's landmines for future contributors.",
    stack: ["Gatsby", "React", "TypeScript", "Chakra UI", "Cloudflare Pages"],
    externalHref: "https://spotrent.co",
    externalLabel: "Visit site →",
  },
  {
    id: "creative-alternatives",
    theme: "web",
    title: "Creative Alternatives",
    oneLiner: "A fast, hand-built site for a family-owned business.",
    description:
      "Website for a family-owned promotional products company: vanilla HTML/CSS/JS, no framework, no build step — because the right amount of infrastructure for the job was none.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "this-site",
    theme: "web",
    title: "This Site",
    oneLiner: "A design system and custom static-site generator, from scratch.",
    description:
      "Design tokens with dark mode, a reusable React component library, and a hand-rolled prerenderer that ships every page as static HTML with React hydrating on top — no site framework, sub-second loads, 100/100 SEO scores as a design constraint.",
    stack: ["React", "TypeScript", "Vite", "Custom SSG"],
    externalHref: "https://github.com/ifwewillit/ifwewillit.github.io",
    externalLabel: "Source →",
  },
];
