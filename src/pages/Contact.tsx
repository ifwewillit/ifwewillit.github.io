import { site } from "../content/site";
import { ProseLayout } from "../layouts/ProseLayout";

export function Contact() {
  return (
    <ProseLayout
      title="Let's Talk"
      lede="If your company is scaling faster than its systems — AI capability that isn't landing, ops infrastructure that's cracking, an executive layer nobody owns — I'd like to hear what's breaking."
    >
      <div className="contact-methods">
        <div className="contact-method">
          <span className="label">Email</span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a> — best way to reach me. I respond
            within 24 hours.
          </span>
        </div>
        <div className="contact-method">
          <span className="label">LinkedIn</span>
          <span>
            <a href={site.linkedin} rel="noopener">
              linkedin.com/in/williamconeil
            </a>
          </span>
        </div>
        <div className="contact-method">
          <span className="label">Phone</span>
          <span>
            <a href={site.phoneHref}>{site.phone}</a> — for scheduled calls. Text first if it's
            time-sensitive.
          </span>
        </div>
      </div>

      <div className="prose" style={{ paddingBottom: "var(--space-12)" }}>
        <h2>What a Good Engagement Looks Like</h2>
        <ul>
          <li>
            <strong>AI capability building.</strong> You want AI working inside real operations —
            with governance people follow — not a pilot that dies in a slide deck.
          </li>
          <li>
            <strong>Ops &amp; systems buildout.</strong> A function needs to exist and doesn't:
            IT, People Ops, enablement, or the infrastructure underneath all three.
          </li>
          <li>
            <strong>Executive operations.</strong> Entity structure, multi-state compliance,
            financial risk — the machinery between the org chart boxes.
          </li>
          <li>
            <strong>Defined outcomes.</strong> I build systems designed to run without me. The
            engagement ends; the infrastructure doesn't.
          </li>
        </ul>

        <h2>Probably Not a Fit</h2>
        <ul>
          <li>You need ongoing staff augmentation with no defined outcome.</li>
          <li>The work is pure HR administration without systems, IT, or AI overlap.</li>
          <li>You want someone who will tell leadership what they want to hear.</li>
        </ul>

        <h2>Full-Time?</h2>
        <p>
          For the right company — operations as a competitive advantage, technical product,
          leadership that values systems thinking — I'm open to executive-level conversations.
          Consulting is how most of those conversations start anyway.
        </p>

        <h2>Location</h2>
        <p>Denver, Colorado. Remote-friendly; I travel when the work calls for it.</p>
      </div>
    </ProseLayout>
  );
}
