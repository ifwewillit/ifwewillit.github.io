import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  tone?: "accent" | "neutral";
  /** renders a pressable filter chip */
  onClick?: () => void;
  active?: boolean;
}

export function Tag({ children, tone = "accent", onClick, active }: TagProps) {
  if (onClick) {
    return (
      <button type="button" className="tag" aria-pressed={active} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <span className={tone === "neutral" ? "tag tag-neutral" : "tag"}>{children}</span>;
}
