import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function RiskMitigation() {
  return (
    <CaseStudyLayout slug="risk-mitigation">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          When your product involves guaranteeing outcomes for customers, claims aren't an edge
          case — they're a core operational workflow with direct cash-flow consequences. Ours was
          reactive: claims arrived, someone handled them, documentation varied by who did the
          handling, and the aggregate picture existed in no one's head.
        </p>
        <p>
          That meant three compounding problems: individual claims took longer and resolved less
          consistently than they should; nobody could say whether self-funding or third-party
          underwriting was the right strategy, because the trend data wasn't trustworthy; and
          finance couldn't see risk exposure coming before it hit the bank account.
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>Coverage ambiguity is normal.</strong> Real claims don't sort neatly into
            covered and not-covered; the system needed a way to decide the gray areas
            consistently.
          </li>
          <li>
            <strong>Relationships on the line.</strong> Every claim involves a customer
            relationship worth more than the claim. Speed and communication mattered as much as
            the payout decision.
          </li>
          <li>
            <strong>Cash is finite.</strong> Claims strategy and cash-flow planning had to be one
            conversation, not two departments.
          </li>
          <li>
            <strong>No risk team.</strong> This was operational leadership work, done alongside
            everything else.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Claims Intake and Documentation Standards</h3>
        <p>
          One playbook for the entire claims lifecycle: what gets documented at intake, what
          evidence is required, who communicates with the customer and partner and when, and what
          a complete claim file looks like. Consistent documentation is what makes every
          downstream decision — payout, trend analysis, underwriting — defensible.
        </p>

        <h3>Payout Decision Framework</h3>
        <p>
          For the gray areas: a documented framework weighing coverage language, operational
          responsibility, relationship value, and precedent. Sometimes the right call is paying a
          claim coverage doesn't strictly require, because the operational responsibility was
          ours. The point is making that call deliberately and recording why — not re-litigating
          it from scratch every time.
        </p>

        <h3>Trend Analysis Driving Strategy</h3>
        <p>
          With claims documented consistently, the aggregate became analyzable: frequency,
          severity, causes, seasonality. That analysis fed the self-fund vs. third-party
          underwriting decision with actual loss data instead of instinct — and turned insurance
          strategy from an annual renewal scramble into an informed position.
        </p>

        <h3>Cash-Flow Risk Planning</h3>
        <p>
          Connected the risk picture to financial operations: rolling cash-flow forecasting that
          accounts for claims exposure and payroll timing — including the three-payroll months
          that surprise companies every year they somehow forget about. Finance saw risk coming
          instead of reconciling it afterward.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
