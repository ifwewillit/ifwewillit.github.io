import { CaseStudyLayout } from "../../layouts/CaseStudyLayout";

export function PtoPrediction() {
  return (
    <CaseStudyLayout slug="pto-prediction">
      <section className="case-section">
        <h2>The Problem</h2>
        <p>
          We had unlimited PTO. Which meant we had no data on whether people were actually taking
          time off. The policy was generous on paper, but in practice, some people weren't using
          it. By the time burnout showed up in performance or resignation letters, it was too
          late.
        </p>
        <p>
          I wanted to know: could PTO patterns predict burnout risk? Could we intervene before
          someone decided to leave?
        </p>
      </section>

      <section className="case-section">
        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>Privacy concerns.</strong> This data is sensitive. Had to build with
            appropriate access controls and clear purpose limitations.
          </li>
          <li>
            <strong>Small dataset.</strong> ~40 employees. Traditional ML approaches need more
            data than that.
          </li>
          <li>
            <strong>No ground truth.</strong> "Burnout" isn't a label in our HRIS. Had to define
            it operationally.
          </li>
          <li>
            <strong>Actionability required.</strong> Predictions are useless if they don't change
            behavior.
          </li>
        </ul>
      </section>

      <section className="case-section">
        <h2>What I Built</h2>

        <h3>Data Pipeline</h3>
        <p>
          Pulled PTO data from Gusto, calendar data from Google, and tenure data from our HRIS.
          Cleaned, normalized, and feature-engineered. Days since last PTO, average gap between
          requests, seasonal patterns, comparison to team averages.
        </p>

        <h3>Risk Model</h3>
        <p>
          Given the small dataset, went with a rule-based system informed by research on burnout
          indicators, not a black-box ML model. Clear thresholds, interpretable outputs. When the
          model flags someone, I can explain exactly why.
        </p>

        <h3>Dashboard</h3>
        <p>
          Weekly automated report showing risk tiers across the org. Red flags for immediate
          attention, yellow for monitoring, green for healthy patterns. Managers see their teams,
          leadership sees the aggregate.
        </p>

        <h3>Intervention Protocol</h3>
        <p>
          High risk triggers a conversation. Not "the algorithm says you're burning out," but "I
          noticed you haven't taken time off in a while, how are things going?" The system
          surfaces the data. Humans have the conversations.
        </p>
      </section>

      <section className="case-section">
        <h2>What We Found</h2>
        <p>Three patterns emerged:</p>
        <ul>
          <li>
            <strong>The "I'll take time later" trap.</strong> New high performers consistently
            delayed PTO for 6+ months, then burned out hard.
          </li>
          <li>
            <strong>Team clustering.</strong> If a manager wasn't taking PTO, neither was their
            team. Culture cascades.
          </li>
          <li>
            <strong>Friday-only pattern.</strong> Some people only took Fridays off, never full
            weeks. High correlation with exhaustion in engagement surveys.
          </li>
        </ul>
      </section>
    </CaseStudyLayout>
  );
}
