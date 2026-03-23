import { cn, severityColor, severityLabel } from "@/lib/utils";
import type { Severity } from "@/data/types";

export function SeverityBadge({ severity, size = "sm" }: { severity: Severity; size?: "sm" | "lg" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        severityColor(severity),
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      )}
    >
      {severityLabel(severity)}
    </span>
  );
}
