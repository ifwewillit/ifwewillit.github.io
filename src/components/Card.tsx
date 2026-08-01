import type { ReactNode } from "react";
import { Tag } from "./Tag";

interface CardProps {
  href?: string;
  label?: string;
  title: string;
  children?: ReactNode;
}

export function Card({ href, label, title, children }: CardProps) {
  const inner = (
    <>
      {label && <Tag>{label}</Tag>}
      <h3>{title}</h3>
      {children && <p>{children}</p>}
    </>
  );
  return href ? (
    <a href={href} className="card">
      {inner}
    </a>
  ) : (
    <div className="card">{inner}</div>
  );
}
