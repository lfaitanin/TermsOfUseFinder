import type { Severity } from "@/data/types";

const severityWidth: Record<Severity, string> = {
  low: "w-1/4",
  medium: "w-2/4",
  high: "w-3/4",
  critical: "w-full",
};

const severityGradient: Record<Severity, string> = {
  low: "from-blue-500 to-blue-400",
  medium: "from-yellow-500 to-yellow-400",
  high: "from-orange-500 to-orange-400",
  critical: "from-red-600 to-red-400",
};

const severityText: Record<Severity, string> = {
  low: "Low Concern",
  medium: "Moderate Concern",
  high: "High Concern",
  critical: "Critical Threat",
};

export function ThreatMeter({ severity }: { severity: Severity }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted">Privacy Threat Level</span>
        <span className="text-sm font-semibold text-foreground">{severityText[severity]}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-card overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${severityGradient[severity]} ${severityWidth[severity]} transition-all duration-500`}
        />
      </div>
    </div>
  );
}
