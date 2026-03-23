"use client";

import { useState, useMemo } from "react";
import { AppCard } from "./AppCard";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import type { AnalyzedApp, Severity } from "@/data/types";

export function AppGrid({ apps }: { apps: AnalyzedApp[] }) {
  const [query, setQuery] = useState("");
  const [severity, setSeverity] = useState<Severity | "all">("all");

  const filtered = useMemo(() => {
    let result = apps;
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (app) =>
          app.name.toLowerCase().includes(q) ||
          app.company.toLowerCase().includes(q) ||
          app.tags.some((t) => t.toLowerCase().includes(q)) ||
          app.clauses.some((c) => c.title.toLowerCase().includes(q))
      );
    }
    if (severity !== "all") {
      result = result.filter((app) => app.overallSeverity === severity);
    }
    return result;
  }, [apps, query, severity]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 max-w-md">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <FilterBar selected={severity} onChange={setSeverity} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <p className="text-lg">No apps match your search.</p>
          <p className="text-sm mt-1">Try different keywords or filters.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
