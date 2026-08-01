import { caseStudies } from "../../content/case-studies";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";

export function WorkIndex() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Case Studies</h1>
          <p className="lede">
            Systems I've built, documented the way I'd want to read them: the problem, the
            constraints, what got built, and what changed because of it.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid-3">
          {caseStudies.map((study) => (
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
      </Section>

      <Section title="Looking for the executive layer?">
        <p className="section-intro">
          Corporate governance, multi-state compliance, financial operations, and
          cross-functional leadership live on their own page.
        </p>
        <Button href="/executive-operations.html" variant="secondary">
          Executive Operations →
        </Button>
      </Section>
    </>
  );
}
