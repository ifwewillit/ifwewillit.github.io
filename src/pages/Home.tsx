import { site } from "../content/site";
import { caseStudies } from "../content/case-studies";
import { essays } from "../content/essays";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { StatBlock } from "../components/StatBlock";
import { Reveal } from "../components/Reveal";

const principles = [
  {
    title: "Build to hand off",
    body: "Every system I create includes documentation detailed enough for someone else to run it. Functions that depend on one person's memory aren't functions.",
  },
  {
    title: "Systems over heroics",
    body: "I don't want to be the person everyone asks. I want to build infrastructure that makes the right thing obvious and the status visible.",
  },
  {
    title: "Strategic and hands-on",
    body: "I'll present to the board and fix the I-9 issue the same week. At the right company size, that's the job.",
  },
  {
    title: "Technical credibility",
    body: "I write Python and TypeScript, ship LLM systems to production, and lead security assessments. I can follow engineering conversations and ask useful questions.",
  },
  {
    title: "Clarity over complexity",
    body: "I remove more than I add. If a process doesn't earn its place, it doesn't stay. Same philosophy in the kitchen.",
  },
  {
    title: "Operator mindset",
    body: "I think in workflows, dependencies, and failure modes. Where do things fall through the cracks? That's where I start.",
  },
];

const services = [
  {
    title: "AI Capability Building",
    body: "From AI curiosity to production systems people actually use: use-case selection, governance that gets followed, team enablement, and LLM pipelines shipped into daily workflows.",
  },
  {
    title: "Ops & Systems Buildout",
    body: "Functions built from zero — IT, People Ops, enablement — with the identity, access, vendor, and data infrastructure to survive 3x growth without me in the loop.",
  },
  {
    title: "Executive Operations",
    body: "The machinery between the org chart boxes: entity structure, multi-state compliance, financial risk, and the cross-functional glue that turns strategy into shipped reality.",
  },
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <picture>
            <source srcSet="/images/headshot.webp" type="image/webp" />
            <img
              src="/images/headshot.jpg"
              alt="Will O'Neil"
              className="hero-photo"
              width={132}
              height={132}
              fetchPriority="high"
            />
          </picture>
          <h1>{site.name}</h1>
          <p className="tagline">{site.tagline}</p>
          <p className="intro">
            AI capability, ops infrastructure, and the executive machinery in between — for
            companies scaling faster than their systems. I build functions from zero and leave
            behind infrastructure that runs without me.
          </p>
          <div className="hero-actions">
            <Button href="/contact.html">Start a conversation</Button>
            <Button href="/work/" variant="secondary">
              See the work
            </Button>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container">
          <div className="proof-items">
            <div className="proof-item">
              <span className="proof-org">NOMAD</span>
              <span className="proof-detail">Head of IT, People Ops & Enablement</span>
            </div>
            <div className="proof-item">
              <span className="proof-org">Inc. 5000</span>
              <span className="proof-detail">#1468 nationally</span>
            </div>
            <div className="proof-item">
              <span className="proof-org">LinkedIn Top Startups</span>
              <span className="proof-detail">Denver 2025</span>
            </div>
            <div className="proof-item">
              <span className="proof-org">FavChef</span>
              <span className="proof-detail">Semifinalist 2025</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Engagements"
        title="What I take on"
        intro="Three kinds of work, one common thread: systems that outlast the engagement."
      >
        <Reveal>
          <div className="grid-3">
            {services.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.body}
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Track record" title="The numbers behind it">
        <Reveal>
          <StatBlock
            animate
            stats={[
              { value: "3", label: "Functions built from zero" },
              { value: "$275K+", label: "Annual ROI documented" },
              { value: "8", label: "Production AI systems" },
              { value: "70+", label: "Vendor ecosystem governed" },
            ]}
          />
        </Reveal>
      </Section>

      <Section title="How I work">
        <div className="grid-3">
          {principles.map((p) => (
            <Card key={p.title} title={p.title}>
              {p.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Case studies"
        title="Systems, documented"
        intro="Detailed breakdowns of what I've built: constraints, architecture, and results."
      >
        <Reveal>
          <div className="grid-3">
            {caseStudies.slice(0, 6).map((study) => (
              <Card
                key={study.slug}
                href={`/work/${study.slug}.html`}
                label={study.label}
                title={study.title}
              >
                {study.summary}
              </Card>
            ))}
          </div>
        </Reveal>
        <div className="section-cta">
          <Button href="/work/" variant="secondary">
            All case studies →
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Builds"
        title="Production systems, in the open"
        intro="Fifteen systems across AI/LLM pipelines, data infrastructure, internal platforms, and the web — with the architecture patterns behind each one."
      >
        <div className="section-cta" style={{ marginTop: 0 }}>
          <Button href="/builds/">Explore the builds →</Button>
        </div>
      </Section>

      <Section
        eyebrow="Writing"
        title="Notes from the field"
        intro="Short essays on building systems, governance that works, and operational judgment."
      >
        <div className="grid-2">
          {essays.map((essay) => (
            <Card key={essay.slug} href={`/writing/${essay.slug}.html`} title={essay.title}>
              {essay.blurb}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Let's talk">
        <p className="section-intro">
          If your company is scaling faster than its systems, I'd like to hear what's breaking.
        </p>
        <Button href="/contact.html">Get in touch</Button>
      </Section>
    </>
  );
}
