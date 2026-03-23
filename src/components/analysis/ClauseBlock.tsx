"use client";

import { useState } from "react";
import { ChevronDown, AlertTriangle } from "lucide-react";
import { SeverityBadge } from "./SeverityBadge";
import { CategoryTag } from "./CategoryTag";
import { cn } from "@/lib/utils";
import type { ConcerningClause } from "@/data/types";

export function ClauseBlock({ clause }: { clause: ConcerningClause }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground">{clause.title}</h3>
            <SeverityBadge severity={clause.severity} />
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="border-t border-border px-4 pb-4 pt-3 space-y-4">
          <blockquote className="border-l-2 border-accent/50 bg-background/50 px-4 py-3 rounded-r-lg">
            <p className="text-sm text-muted italic font-mono leading-relaxed">
              &ldquo;{clause.originalText}&rdquo;
            </p>
            {clause.tosSection && (
              <cite className="mt-1 block text-xs text-muted/70 not-italic">
                — {clause.tosSection}
              </cite>
            )}
          </blockquote>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">What this means</h4>
            <p className="text-sm text-muted leading-relaxed">{clause.explanation}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Real-world implications</h4>
            <ul className="space-y-1">
              {clause.implications.map((imp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {clause.categories.map((cat) => (
              <CategoryTag key={cat} slug={cat} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
