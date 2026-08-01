import { ArticleLayout } from "../../layouts/ArticleLayout";

export function MetricsEnablement() {
  return (
    <ArticleLayout slug="metrics-enablement">
      <p>
        When your job is making other people effective, what do you measure? Ticket counts reward
        creating complexity. Response times reward being reactive. Neither tells you if you're
        actually enabling anything.
      </p>

      <h2>The Problem with Activity Metrics</h2>
      <p>
        Most internal functions measure activity. Tickets closed. Requests fulfilled. Policies
        written. These metrics are easy to track and completely miss the point.
      </p>
      <p>
        High ticket volume might mean you're responsive. It might also mean your systems are
        confusing and people need constant help. Low ticket volume might mean you're failing. It
        might also mean you built something so clear that no one needs to ask questions.
      </p>
      <p>Activity metrics can't tell the difference.</p>

      <h2>Measure What You're Enabling</h2>
      <p>
        Enablement functions exist to make the rest of the company more effective. So measure
        that. For IT:
      </p>
      <ul>
        <li>
          <strong>Time to productivity for new hires.</strong> How long from start date until they
          have everything they need to do their job? This is the real onboarding metric, not "IT
          tasks completed."
        </li>
        <li>
          <strong>Self-service rate.</strong> What percentage of common requests can people handle
          without filing a ticket? Higher is better. It means your systems are intuitive.
        </li>
        <li>
          <strong>Repeat request rate.</strong> Are the same people asking the same questions?
          That's a documentation failure, not a support success.
        </li>
      </ul>

      <h2>Leading Indicators Over Lagging</h2>
      <p>
        Satisfaction surveys tell you how people felt last month. They don't help you improve this
        month. Look for leading indicators instead:
      </p>
      <p>
        <strong>Documentation usage.</strong> Are people finding and using your self-service
        resources? If you have a knowledge base that no one reads, you have a discoverability
        problem or a content problem. Either way, you need to know.
      </p>
      <p>
        <strong>First-contact resolution.</strong> When someone does reach out, can you solve it
        in one interaction? Multiple touches mean unclear processes, not thorough support.
      </p>
      <p>
        <strong>Escalation rate.</strong> How often do issues need to go higher? Frequent
        escalation suggests the front line isn't empowered or informed enough.
      </p>

      <h2>The Metrics I Track</h2>
      <p>At NOMAD, I settled on five core metrics for IT and People Ops combined:</p>
      <ol>
        <li>Time to full productivity for new hires (target: under 2 days)</li>
        <li>Access review completion rate (target: 100%)</li>
        <li>Self-service rate for common requests (target: 80%+)</li>
        <li>Offboarding completion within 24 hours (target: 100%)</li>
        <li>System availability for core tools (target: 99.9%)</li>
      </ol>
      <p>
        Notice what's missing: ticket counts, response times, satisfaction scores. Those are
        inputs. I measure outputs.
      </p>

      <h2>Report on Outcomes</h2>
      <p>
        When you present to leadership, don't talk about how busy you've been. Talk about what the
        company can do now that it couldn't do before. Systems you built. Time you saved people.
        Risks you mitigated.
      </p>
      <p>
        Enablement is invisible when it works. Your job is to make it visible without making it
        seem like you're asking for credit. Frame it as capability delivered, not effort expended.
      </p>
    </ArticleLayout>
  );
}
