import { ProseLayout } from "../layouts/ProseLayout";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

export function Now() {
  return (
    <>
      <ProseLayout title="Now" lede="What I'm focused on right now. Last updated August 2026.">
        <div className="prose" style={{ paddingBottom: "var(--space-8)" }}>
          <h2>Work</h2>
          <p>
            Leading IT, People Ops, and AI at NOMAD — and taking on select consulting
            conversations around AI capability building and ops systems. If your company is
            scaling faster than its systems, that's the conversation I want to have.
          </p>

          <h2>Building</h2>
          <p>
            AI systems that live inside real operations: request triage that catches asks across
            chat, email, meetings, and CRM; LLM-based call QA; data ingest pipelines; and an
            internal-tools platform where non-engineers ship safely. The pattern behind all of
            them is on the <a href="/builds/">Builds page</a>.
          </p>
          <p>
            On the personal side: <strong>Protocol</strong>, an evidence-based fitness and
            nutrition app for iPhone and Apple Watch with an AI coach built on the Claude API —
            and this site, a from-scratch design system and custom static-site generator.
          </p>

          <h2>Learning</h2>
          <p>
            Deep into the practical end of LLM engineering — evaluation, multi-model routing, and
            where governance meets architecture. The gap between a demo and a system people trust
            with real work is the interesting part.
          </p>

          <h2>Cooking</h2>
          <p>
            Summer means fire: live-coal vegetables, smoked chiles, and the eternal refinement of
            mole.
          </p>

          <h2>Reading</h2>
          <ul>
            <li>
              <em>The Art of Doing Science and Engineering</em> by Richard Hamming
            </li>
            <li>
              <em>An Elegant Puzzle</em> by Will Larson
            </li>
            <li>
              <em>Salt Fat Acid Heat</em> by Samin Nosrat (re-reading)
            </li>
            <li>
              <em>Red Rising</em>, <em>Golden Son</em>, <em>Morning Star</em> by Pierce Brown
            </li>
            <li>
              <em>Project Hail Mary</em> by Andy Weir
            </li>
          </ul>

          <h2>Location</h2>
          <p>Denver, Colorado. Engagements are remote-friendly; I travel when it matters.</p>
        </div>
      </ProseLayout>

      <Section title="Let's talk">
        <p className="section-intro">
          If something above overlaps with a problem you have, I'd like to hear about it.
        </p>
        <Button href="/contact.html">Get in touch</Button>
      </Section>
    </>
  );
}
