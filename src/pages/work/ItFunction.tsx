import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";
import { SystemsMap, type MapSpec } from "../../components/SystemsMap";

const map: MapSpec = {
  title: "IT infrastructure architecture: identity at the center",
  defaultCaption:
    "Identity at the center: one place to provision, one place to revoke. Hover or tab through the nodes.",
  nodes: [
    {
      id: "idp",
      label: "Identity provider",
      x: 20,
      y: 100,
      w: 160,
      caption: "Google Workspace as the single source of identity. Every account starts and ends here.",
    },
    {
      id: "sso",
      label: "SSO enforcement",
      x: 300,
      y: 20,
      w: 160,
      caption: "SAML where possible, OAuth where not — enforced on every tool that supports it, with an audit trail everywhere.",
    },
    {
      id: "mdm",
      label: "Device management",
      x: 300,
      y: 100,
      w: 160,
      caption: "MacBooks with MDM: automated enrollment, security baselines on first boot, zero-touch deployment.",
    },
    {
      id: "access",
      label: "Access templates",
      x: 300,
      y: 180,
      w: 160,
      caption: "Role-based templates: a Sales hire needs exactly these 15 tools. Simple systems get followed.",
    },
    {
      id: "vendors",
      label: "70+ vendor ecosystem",
      x: 580,
      y: 60,
      w: 170,
      caption: "A vendor database tracking contracts, renewals, SSO status, and DPAs. Nothing falls through the cracks.",
    },
    {
      id: "lifecycle",
      label: "On/offboarding",
      x: 580,
      y: 160,
      w: 170,
      caption: "Provisioning and deprovisioning as a checklist driven by the templates — not memory.",
    },
  ],
  edges: [
    ["idp", "sso"],
    ["idp", "mdm"],
    ["idp", "access"],
    ["sso", "vendors"],
    ["access", "lifecycle"],
    ["mdm", "lifecycle"],
  ],
};

export function ItFunction() {
  return (
    <CaseStudyLayout slug="it-function">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          NOMAD was growing fast. When I joined, we had 12 people and no IT infrastructure.
          Laptops were purchased ad hoc. There was no SSO, no device management, no access
          governance. Every new hire meant manual account creation across a dozen tools. Every
          offboarding was a liability waiting to happen.
        </p>
        <p>
          The company was scaling to enterprise clients who would ask hard questions about our
          security posture. We needed to look like a company that took this seriously, because we
          were becoming one.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>No dedicated IT budget.</strong> Everything came from general operations,
            justified line by line.
          </li>
          <li>
            <strong>No IT team.</strong> I was it. Every system needed to be maintainable by one
            person.
          </li>
          <li>
            <strong>Speed over perfection.</strong> We were hiring faster than I could build. Good
            enough now beat perfect later.
          </li>
          <li>
            <strong>Enterprise requirements incoming.</strong> Clients were starting to send
            security questionnaires. We needed answers.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <SystemsMap spec={map} />

        <h3>Identity &amp; Access</h3>
        <p>
          Google Workspace as the identity provider, with SSO enforced across every tool that
          supported it. SAML where possible, OAuth where not. The goal: one place to provision,
          one place to deprovision, audit trail everywhere.
        </p>

        <h3>Device Management</h3>
        <p>
          Standardized on MacBooks with Kandji for MDM. Automated enrollment, security baselines
          pushed on first boot, software deployment without touching the machine. New hire gets
          laptop, laptop configures itself.
        </p>

        <h3>Vendor Ecosystem</h3>
        <p>
          Built relationships with 70+ vendors. Consolidated where possible, integrated where it
          mattered. Created a vendor database tracking contract terms, renewal dates, SSO status,
          and data processing agreements. Nothing falls through the cracks because I can see all
          of it.
        </p>

        <h3>Access Governance</h3>
        <p>
          Role-based access templates in a spreadsheet (yes, really). When someone joins as a
          Sales rep, I know exactly which 15 tools they need. When they leave, I know exactly what
          to revoke. The system is simple because simple systems actually get followed.
        </p>

        <h3>Documentation</h3>
        <p>
          Every process documented in Notion. Not just what to do, but why. New IT person could
          take over tomorrow and understand the reasoning behind every decision.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
