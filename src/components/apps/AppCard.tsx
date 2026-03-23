import Link from "next/link";
import { SeverityBadge } from "@/components/analysis/SeverityBadge";
import type { AnalyzedApp } from "@/data/types";

export function AppCard({ app }: { app: AnalyzedApp }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl">{app.icon}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors truncate">
            {app.name}
          </h3>
          <p className="text-sm text-muted">{app.company}</p>
        </div>
        <SeverityBadge severity={app.overallSeverity} />
      </div>
      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4 flex-1">
        {app.summary}
      </p>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{app.clauses.length} concerning clauses</span>
        <span className="text-accent group-hover:translate-x-1 transition-transform">
          View analysis →
        </span>
      </div>
    </Link>
  );
}
