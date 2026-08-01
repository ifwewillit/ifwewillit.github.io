import { builds } from "../../content/builds";
import { ProjectExplorer } from "../../components/ProjectExplorer";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function BuildsIndex() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Builds</h1>
          <p className="lede">
            Production systems I've designed and shipped — AI pipelines, data infrastructure,
            internal platforms, and the web. Client work is described at the architecture level;
            the patterns are the portfolio.
          </p>
        </div>
      </header>

      <Section>
        <ProjectExplorer projects={builds} />
      </Section>

      <Section eyebrow="The stack" title="A recurring signature">
        <p className="section-intro">
          TypeScript and Python. Cloudflare Workers and Pages as the default deploy target, with
          edge-enforced SSO. GitHub Actions with typecheck as a merge gate. Claude, Gemini, and
          OpenAI — often multi-model behind one proxy. PostgreSQL for stateful pipelines. And
          AI-assisted development as a practiced, governed methodology — not a claim.
        </p>
        <Button href="/contact.html">Build something with me</Button>
      </Section>
    </>
  );
}
