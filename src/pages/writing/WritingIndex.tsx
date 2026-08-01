import { essays, linkedInArticles } from "../../content/essays";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

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

      <Section
        eyebrow="On LinkedIn"
        title="The People + AI leadership series"
        intro="A yearly article on the same thesis, tested against another year of real systems: the future belongs to leaders who span people, technology, and AI."
      >
        <div className="grid-3">
          {linkedInArticles.map((article) => (
            <a key={article.url} href={article.url} rel="noopener" className="card">
              <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                <Tag>LinkedIn</Tag>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>
                  {article.date} · {article.readTime}
                </span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.blurb}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
