import type { Stat } from "../content/types";
import { StatCounter } from "./StatCounter";

export function StatBlock({ stats, animate = false }: { stats: Stat[]; animate?: boolean }) {
  return (
    <div className="stat-block">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat-value">
            {animate ? <StatCounter value={stat.value} /> : stat.value}
          </span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
