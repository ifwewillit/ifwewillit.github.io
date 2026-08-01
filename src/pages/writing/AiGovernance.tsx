import { ArticleLayout } from "../../layouts/ArticleLayout";

export function AiGovernance() {
  return (
    <ArticleLayout slug="ai-governance">
      <p>
        Your employees are using AI tools. Maybe you've blessed specific ones. Maybe you haven't.
        Doesn't matter. They're using them. The question isn't whether to have AI governance. It's
        whether your governance reflects reality or pretends it doesn't exist.
      </p>

      <h2>The Policy That Gets Ignored</h2>
      <p>
        I've seen AI policies that are 15 pages long. They cover every hypothetical scenario. They
        require approval workflows for basic use cases. They're written by legal and read by no
        one.
      </p>
      <p>
        Here's what happens: people read the first paragraph, decide it's too complicated to
        understand, and use ChatGPT anyway. They just don't tell anyone. You've created exactly
        the behavior you were trying to prevent.
      </p>

      <h2>What Works Instead</h2>
      <p>Effective AI governance fits on one page. It answers three questions:</p>
      <p>
        <strong>What can I use AI for without asking anyone?</strong> Give people a clear green
        zone. Drafting emails, summarizing documents, brainstorming, explaining concepts. Things
        where the output gets reviewed before going anywhere sensitive.
      </p>
      <p>
        <strong>What requires approval?</strong> Customer-facing content, code that goes into
        production, anything involving personal data. Be specific. Not "sensitive use cases" but
        actual categories people can identify.
      </p>
      <p>
        <strong>What's never okay?</strong> Pasting confidential data into consumer AI tools.
        Using AI outputs without review in high-stakes situations. Claiming AI-generated work is
        human-original when that matters. Short list, hard lines.
      </p>

      <h2>The Data Question</h2>
      <p>
        Most AI governance anxiety is really data governance anxiety. People worry about what goes
        into these models. Fair concern. Address it directly:
      </p>
      <ul>
        <li>Public information: Fine to use</li>
        <li>Internal information: Check if the tool has enterprise data protections</li>
        <li>
          Confidential information: Not without explicit approval and a tool with appropriate
          controls
        </li>
        <li>Personal data: Almost never, and only with legal review</li>
      </ul>
      <p>That's it. Four categories. People can actually remember this.</p>

      <h2>Make the Right Thing Easy</h2>
      <p>
        If you want people to use approved AI tools, make them easier to access than the
        unapproved ones. Negotiate enterprise licenses. Do the SSO integration. Provide training
        that's actually useful.
      </p>
      <p>
        At NOMAD, we deployed 8 AI systems with governance that worked because we made compliant
        behavior the path of least resistance. People used our tools because our tools were good,
        not because the policy told them to.
      </p>

      <h2>Review and Update</h2>
      <p>
        AI capabilities change monthly. Your policy can't be static. Build in quarterly reviews.
        Watch what people are actually doing. Ask what they wish they could do. Adjust.
      </p>
      <p>Governance is a living document or a dead letter. There's no middle ground.</p>
    </ArticleLayout>
  );
}
