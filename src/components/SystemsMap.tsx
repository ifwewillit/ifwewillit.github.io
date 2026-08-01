import { useState } from "react";

export interface MapNode {
  id: string;
  label: string;
  x: number;
  y: number;
  w?: number;
  caption: string;
}

export interface MapSpec {
  title: string;
  nodes: MapNode[];
  /** [fromId, toId] pairs */
  edges: [string, string][];
  defaultCaption: string;
}

const NODE_H = 44;

/**
 * Inline SVG architecture diagram from a typed spec. Hover/focus on a node
 * highlights its connections and swaps the caption. Pure SVG + CSS — fully
 * rendered on the server; interactivity is progressive enhancement.
 */
export function SystemsMap({ spec }: { spec: MapSpec }) {
  const [active, setActive] = useState<string | null>(null);

  const width = Math.max(...spec.nodes.map((n) => n.x + (n.w ?? 150))) + 20;
  const height = Math.max(...spec.nodes.map((n) => n.y)) + NODE_H + 20;

  const nodeById = new Map(spec.nodes.map((n) => [n.id, n]));
  const connected = new Set<string>(
    active
      ? spec.edges.flatMap(([a, b]) => (a === active || b === active ? [a, b] : []))
      : [],
  );

  const anchor = (n: MapNode) => ({
    cx: n.x + (n.w ?? 150) / 2,
    cy: n.y + NODE_H / 2,
  });

  const caption = active ? nodeById.get(active)?.caption : spec.defaultCaption;

  return (
    <figure className="systems-map">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={spec.title}
        onMouseLeave={() => setActive(null)}
      >
        {spec.edges.map(([a, b]) => {
          const from = nodeById.get(a);
          const to = nodeById.get(b);
          if (!from || !to) return null;
          const p1 = anchor(from);
          const p2 = anchor(to);
          const midX = (p1.cx + p2.cx) / 2;
          const isActive = active !== null && (a === active || b === active);
          const isDimmed = active !== null && !isActive;
          return (
            <path
              key={`${a}-${b}`}
              className={`map-edge${isActive ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
              d={`M ${p1.cx} ${p1.cy} C ${midX} ${p1.cy}, ${midX} ${p2.cy}, ${p2.cx} ${p2.cy}`}
            />
          );
        })}
        {spec.nodes.map((n) => {
          const w = n.w ?? 150;
          const isActive = active === n.id || connected.has(n.id);
          const isDimmed = active !== null && !isActive;
          return (
            <g
              key={n.id}
              className={`map-node${active === n.id ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setActive(n.id)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
            >
              <rect x={n.x} y={n.y} width={w} height={NODE_H} rx={10} />
              <text x={n.x + w / 2} y={n.y + NODE_H / 2 + 4.5} textAnchor="middle">
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="map-caption" aria-live="polite">
        {caption}
      </figcaption>
    </figure>
  );
}
