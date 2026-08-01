import { essays } from "../../content/essays";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";

export function WritingIndex() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Writing</h1>
          <p className="lede">
            Short essays on building systems, governance that works, and operational judgment.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid-2">
          {essays.map((essay) => (
            <Card key={essay.slug} href={`/writing/${essay.slug}.html`} title={essay.title}>
              {essay.blurb}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
