import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({ href, variant = "primary", children }: ButtonProps) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
    </a>
  );
}
