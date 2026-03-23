"use client";

import { cn, severityColor } from "@/lib/utils";
import type { Severity } from "@/data/types";

const severities: { value: Severity | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export function FilterBar({
  selected,
  onChange,
}: {
  selected: Severity | "all";
  onChange: (value: Severity | "all") => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {severities.map((s) => (
        <button
          key={s.value}
          onClick={() => onChange(s.value)}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
            selected === s.value
              ? s.value === "all"
                ? "border-accent bg-accent/20 text-accent"
                : severityColor(s.value)
              : "border-border text-muted hover:border-muted/50"
          )}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
