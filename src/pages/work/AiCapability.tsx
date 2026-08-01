import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function AiCapability() {
  return (
    <CaseStudyLayout slug="ai-capability">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          Everyone was talking about AI. A few people were experimenting with ChatGPT for random
          tasks. There was no strategy, no governance, no way to know what was working. The gap
          between "playing with AI" and "AI as competitive advantage" was enormous, and we were
          firmly on the wrong side of it.
        </p>
        <p>
          Meanwhile, enterprise clients were starting to ask about our AI policies. What data goes
          into these systems? Who has access? What's the approval process? We had no answers.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>Data sensitivity.</strong> Real estate data, client information, financial
            details. Couldn't just paste everything into ChatGPT.
          </li>
          <li>
            <strong>Skepticism.</strong> Some people saw AI as hype. Had to prove value before
            asking for investment.
          </li>
          <li>
            <strong>No ML engineering.</strong> Whatever I built had to work without a dedicated
            AI team.
          </li>
          <li>
            <strong>Governance gap.</strong> Needed policies before deployment, but policies
            without use cases are fiction.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Governance Framework</h3>
        <p>
          Acceptable use policy defining what data can go into AI systems, what requires approval,
          what's prohibited. Risk tiers based on data sensitivity. Review process for new use
          cases. Not bureaucracy for its own sake, but guardrails that let people move fast within
          bounds.
        </p>

        <h3>Production Systems</h3>
        <p>8 LLM-powered systems in production:</p>
        <ul>
          <li>Document analysis for lease abstraction</li>
          <li>Email drafting with company voice training</li>
          <li>Meeting summarization and action item extraction</li>
          <li>Knowledge base Q&amp;A over internal documentation</li>
          <li>Code review assistance for technical team</li>
          <li>Customer inquiry routing and initial response</li>
          <li>Market research synthesis</li>
          <li>Compliance document review</li>
        </ul>

        <h3>ROI Tracking</h3>
        <p>
          Built measurement into every deployment. Time saved, quality improvements, error
          reduction. Monthly reporting to leadership showing actual impact, not theoretical
          benefits. When something didn't deliver, we killed it.
        </p>

        <h3>Training Program</h3>
        <p>
          Workshops for each team on their specific use cases. Not generic "how to prompt"
          training, but hands-on sessions with their actual work. People learn by doing, so we
          did.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
