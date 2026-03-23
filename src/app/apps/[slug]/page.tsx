import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft, Calendar, Building2 } from "lucide-react";
import { getAllApps, getAppBySlug } from "@/lib/data";
import { SeverityBadge } from "@/components/analysis/SeverityBadge";
import { ThreatMeter } from "@/components/analysis/ThreatMeter";
import { ClauseBlock } from "@/components/analysis/ClauseBlock";
import { AppJsonLd } from "@/components/analysis/AppJsonLd";

export function generateStaticParams() {
  return getAllApps().map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "Not Found" };
  return {
    title: `${app.name} ToS Analysis`,
    description: app.summary,
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <AppJsonLd app={app} />
      <Link
        href="/apps"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all apps
      </Link>

      {/* App Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-5xl">{app.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold text-foreground">{app.name}</h1>
              <SeverityBadge severity={app.overallSeverity} size="lg" />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted flex-wrap">
              <span className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                {app.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Analyzed {app.analysisDate}
              </span>
              <a
                href={app.tosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-accent hover:text-accent-hover transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View original ToS
              </a>
            </div>
          </div>
        </div>
        <p className="text-muted leading-relaxed">{app.summary}</p>
      </div>

      {/* Threat Meter */}
      <div className="rounded-xl border border-border bg-card p-5 mb-8">
        <ThreatMeter severity={app.overallSeverity} />
      </div>

      {/* Clauses */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground mb-1">
          Concerning Clauses ({app.clauses.length})
        </h2>
        <p className="text-sm text-muted">
          Click on each clause to see the original text, explanation, and implications.
        </p>
      </div>

      <div className="space-y-3">
        {app.clauses.map((clause) => (
          <ClauseBlock key={clause.id} clause={clause} appName={app.name} />
        ))}
      </div>
    </div>
  );
}
