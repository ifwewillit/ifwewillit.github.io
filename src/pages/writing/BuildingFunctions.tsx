import { ArticleLayout } from "../../layouts/ArticleLayout";

export function BuildingFunctions() {
  return (
    <ArticleLayout slug="building-functions-from-zero">
      <p>
        I've built three functions from nothing at NOMAD: IT, People Operations, and AI
        capability. Each time, the starting point was the same: no systems, no documentation, no
        precedent. Just a growing company and a gap that needed filling.
      </p>
      <p>Here's the pattern that emerged.</p>

      <h2>Start with the Pain</h2>
      <p>
        Don't start with best practices or what other companies do. Start with what's breaking.
        Where are things falling through the cracks? What questions keep coming up that no one can
        answer? What's taking too long?
      </p>
      <p>
        When I started building IT at NOMAD, the pain was clear: every new hire meant hours of
        manual account creation. Every offboarding was a security risk. People couldn't find the
        tools they needed. Start there.
      </p>

      <h2>Document Before You Build</h2>
      <p>
        Write down what exists before you change anything. Not because it's good, but because you
        need to understand the current state. What tools are in use? Who has access to what? What
        are the actual workflows, not the theoretical ones?
      </p>
      <p>
        This documentation becomes your baseline. When you make changes, you can point to what was
        and what is. It also surfaces dependencies you didn't know about.
      </p>

      <h2>Solve the Next Problem, Not All Problems</h2>
      <p>
        The temptation is to build the complete system upfront. Don't. Solve the most urgent
        problem, document the solution, and move on. You'll learn things from the first solution
        that will change how you approach the second.
      </p>
      <p>
        I built NOMAD's SSO implementation before I built device management. I built device
        management before I built the vendor tracking system. Each one informed the next.
      </p>

      <h2>Build to Hand Off</h2>
      <p>
        Every system should include documentation detailed enough for someone else to run it. This
        isn't about you leaving. It's about you not being a bottleneck. Functions that depend on
        one person's memory aren't functions.
      </p>
      <p>
        The test: could someone with no context take over this system tomorrow and keep it
        running? If not, you haven't finished building it.
      </p>

      <h2>Measure Something</h2>
      <p>
        Pick one or two metrics that tell you if the function is working. Not vanity metrics, but
        real indicators. For IT, I tracked time-to-productivity for new hires and access review
        completion rates. For People Ops, I tracked time-to-fill and offer acceptance rates.
      </p>
      <p>You don't need a dashboard. You need to know if things are getting better or worse.</p>

      <h2>The Pattern Repeats</h2>
      <p>
        I've now done this three times. The domain changes but the approach doesn't. Find the
        pain. Document the current state. Solve one problem at a time. Build for handoff. Measure
        something real.
      </p>
      <p>
        That's it. No framework, no methodology. Just the same questions asked again and again
        until a function exists where there wasn't one before.
      </p>
    </ArticleLayout>
  );
}
