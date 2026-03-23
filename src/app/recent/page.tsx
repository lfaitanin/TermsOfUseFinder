import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { getAllApps } from "@/lib/data";
import { AppCard } from "@/components/apps/AppCard";

export const metadata: Metadata = {
  title: "Recently Analyzed",
  description: "The most recently analyzed apps and services on ToS Exposed.",
};

export default function RecentPage() {
  const apps = getAllApps().sort((a, b) =>
    b.analysisDate.localeCompare(a.analysisDate)
  );

  // Group by analysisDate
  const grouped = apps.reduce<Record<string, typeof apps>>((acc, app) => {
    acc[app.analysisDate] = acc[app.analysisDate] ?? [];
    acc[app.analysisDate].push(app);
    return acc;
  }, {});

  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-accent mb-2">
          <Clock className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wider">Latest Analyses</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Recently Analyzed</h1>
        <p className="text-muted max-w-2xl">
          Stay up to date with our most recent Terms of Service analyses.
          We continuously add new apps and update existing ones when terms change.
        </p>
      </div>

      <div className="space-y-12">
        {dates.map((date) => (
          <div key={date}>
            <div className="flex items-center gap-3 mb-5">
              <time className="text-sm font-semibold text-accent">{date}</time>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted">
                {grouped[date].length} {grouped[date].length === 1 ? "app" : "apps"}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[date].map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
