import { ArticleLayout } from "../../layouts/ArticleLayout";

export function VendorSprawl() {
  return (
    <ArticleLayout slug="vendor-sprawl">
      <p>
        Ask a company how many SaaS tools they use. They'll guess 30. The actual number is usually
        70 or more. I've done this exercise three times now. The gap is always bigger than anyone
        expects.
      </p>

      <h2>How Sprawl Happens</h2>
      <p>
        No one plans for 70 vendors. It accumulates. Marketing needs a landing page tool. Sales
        needs a prospecting tool. Engineering needs a monitoring tool. Each one makes sense in
        isolation. Add a few years of growth and you have a portfolio no one fully understands.
      </p>
      <p>
        The problem isn't the tools. It's that no one owns the whole picture. Each team manages
        their stack. IT manages the "core" tools. But the edges are where things get messy.
      </p>

      <h2>Why Access Reviews Fail</h2>
      <p>
        Most companies handle access governance through periodic reviews. Once a quarter, managers
        get a list and confirm their people still need access. In theory this works. In practice:
      </p>
      <ul>
        <li>Managers approve everything to avoid the hassle of follow-up questions.</li>
        <li>Reviews only cover known tools, not the shadow IT no one catalogued.</li>
        <li>No one remembers what half these tools do, so they assume someone needs them.</li>
        <li>
          Former employees still have access to tools that don't sync with the identity provider.
        </li>
      </ul>
      <p>The process exists. It just doesn't work.</p>

      <h2>What Actually Works</h2>
      <p>After managing 70+ vendors, here's what I've found effective:</p>
      <p>
        <strong>One source of truth for vendors.</strong> A spreadsheet is fine. It needs to
        include: tool name, owner, SSO status, contract renewal date, and who has access. Update
        it when things change. Don't wait for quarterly reviews to discover you have a problem.
      </p>
      <p>
        <strong>SSO everywhere possible.</strong> If a tool supports SSO, enforce it. If it
        doesn't, think hard about whether you need it. Deprovisioning is only as good as your
        ability to cut access from one place.
      </p>
      <p>
        <strong>Offboarding as a checklist, not a process.</strong> When someone leaves, you need
        a list of every tool they touch. Not "the tools we think they touch" or "the tools
        connected to our IdP." Every tool. Build this list before you need it.
      </p>
      <p>
        <strong>Monthly spot checks.</strong> Pick 5 random tools and verify the access list is
        accurate. You'll find problems. Fix them before an auditor does.
      </p>

      <h2>The Underlying Issue</h2>
      <p>
        Vendor sprawl is a symptom. The disease is that software is easy to buy and hard to
        govern. Every new tool is a small decision. The accumulation is a large problem that no
        one owns until it becomes a crisis.
      </p>
      <p>
        Someone needs to own the whole picture. Not just IT, not just security, not just finance.
        Someone who can see across all of it and make the hard calls about what stays and what
        goes.
      </p>
      <p>At NOMAD, that was me. At your company, it should be someone.</p>
    </ArticleLayout>
  );
}
