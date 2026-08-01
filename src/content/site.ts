export const site = {
  name: "Will O'Neil",
  initials: "WO",
  url: "https://ifwewillit.github.io",
  email: "willoneil@me.com",
  linkedin: "https://linkedin.com/in/williamconeil",
  phone: "(303) 304-0658",
  phoneHref: "tel:+13033040658",
  tagline: "I build the systems layer for scaling companies.",
  description:
    "Operations executive and systems builder. AI capability, ops infrastructure, and the executive machinery in between — for companies that are scaling faster than their systems.",
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** prefix used for active-state matching */
  match: string;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "/work/", match: "/work" },
  { label: "Builds", href: "/builds/", match: "/builds" },
  { label: "Executive Ops", href: "/executive-operations.html", match: "/executive-operations" },
  { label: "Writing", href: "/writing/", match: "/writing" },
  { label: "This Is Me", href: "/kitchen/", match: "/kitchen" },
  { label: "Now", href: "/now.html", match: "/now" },
  { label: "Contact", href: "/contact.html", match: "/contact" },
];
