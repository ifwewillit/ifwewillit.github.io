import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function PeopleOps() {
  return (
    <CaseStudyLayout slug="people-ops">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          NOMAD had no People function. Hiring was ad hoc. Compensation was whatever felt right at
          the time. Performance conversations happened when someone remembered to have them. There
          was no handbook, no documented policies, no system for any of it.
        </p>
        <p>
          We were about to triple in size. Without infrastructure, that growth would create chaos.
          Pay inequity. Inconsistent standards. Good people leaving because no one noticed they
          were struggling. The absence of systems was a ticking clock.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>No HR background on the team.</strong> I learned as I built, with SHRM
            certification along the way.
          </li>
          <li>
            <strong>Startup budget.</strong> Every tool needed to justify its existence with clear
            ROI.
          </li>
          <li>
            <strong>Moving target.</strong> The org chart was changing monthly. Systems had to
            flex.
          </li>
          <li>
            <strong>Culture matters.</strong> Couldn't build bureaucracy. Had to build
            infrastructure that felt lightweight.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Compensation Architecture</h3>
        <p>
          Job levels with clear definitions. Salary bands benchmarked through Carta Total Comp
          data. A total rewards philosophy that explained what we pay for and why. Managers could
          finally have pay conversations grounded in data instead of vibes.
        </p>

        <h3>HRIS Ecosystem</h3>
        <p>
          Gusto for payroll and benefits. Lattice for performance and engagement. Lever for
          recruiting. Built integrations so they talk to each other. Employee data flows from
          offer letter to termination without manual re-entry.
        </p>

        <h3>Performance Management</h3>
        <p>
          Goal-setting framework aligned to company OKRs. Quarterly check-ins with lightweight
          documentation. Annual reviews with calibration sessions so ratings mean something
          consistent. Trained managers on how to have hard conversations.
        </p>

        <h3>Employee Lifecycle</h3>
        <p>
          Documented processes from recruiting through offboarding. Onboarding checklist that
          reduced time-to-productivity from weeks to days. Exit interviews that actually informed
          retention strategy.
        </p>

        <h3>Policy Infrastructure</h3>
        <p>
          Employee handbook covering everything required plus what actually matters. PTO policy,
          remote work guidelines, expense policy, code of conduct. Written to be read, not to
          collect dust.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
