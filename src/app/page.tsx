import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Shield, ArrowRight, AlertTriangle } from "lucide-react";
import { getAllApps, getFeaturedClauses, getAllCategories, getCategoryCount, getRecentlyAnalyzed } from "@/lib/data";
import { SeverityBadge } from "@/components/analysis/SeverityBadge";

function CategoryIcon({ name }: { name: string }) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return null;
  return <Icon className="h-5 w-5" />;
}

export default function HomePage() {
  const apps = getAllApps();
  const featured = getFeaturedClauses();
  const categories = getAllCategories();
  const recentApps = getRecentlyAnalyzed(4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Shield className="h-8 w-8" />
            <span className="text-sm font-medium uppercase tracking-wider">ToS Exposed</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground leading-tight mb-4 md:text-5xl lg:text-6xl max-w-3xl">
            What do Terms of Service{" "}
            <span className="text-accent">really</span> say?
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-8 leading-relaxed">
            You click &quot;I Agree&quot; without reading. We read it for you.
            Discover the hidden clauses in the apps you use every day — from
            secret data collection to rights you didn&apos;t know you gave away.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Explore {apps.length} Apps
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-muted transition-colors hover:text-foreground hover:border-muted"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Findings */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">
              Most Alarming Findings
            </h2>
            <p className="text-sm text-muted">
              The most concerning clauses we&apos;ve found across all analyzed apps.
            </p>
          </div>
          <Link
            href="/apps"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((clause) => (
            <Link
              key={clause.id}
              href={`/apps/${clause.appSlug}`}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-accent" />
                <span className="text-xs text-muted">{clause.appName}</span>
                <SeverityBadge severity={clause.severity} />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                {clause.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {clause.explanation}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Grid */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Types of Hidden Clauses
            </h2>
            <p className="text-sm text-muted max-w-xl mx-auto">
              We classify concerning clauses into categories so you can understand
              exactly how your rights and privacy are at risk.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const count = getCategoryCount(category.slug);
              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-accent/30 hover:bg-card-hover"
                >
                  <div className={`mx-auto mb-2 ${category.color}`}>
                    <CategoryIcon name={category.icon} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    {count} {count === 1 ? "app" : "apps"}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Analyzed */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-1">Recently Analyzed</h2>
            <p className="text-sm text-muted">The latest apps added to our database.</p>
          </div>
          <Link
            href="/recent"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentApps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:bg-card-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{app.icon}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors truncate">
                    {app.name}
                  </p>
                  <p className="text-xs text-muted">{app.analysisDate}</p>
                </div>
              </div>
              <p className="text-xs text-muted line-clamp-2">{app.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Knowledge is your best defense
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-6">
            The first step to protecting your digital rights is understanding what you&apos;ve agreed to.
            Start exploring now.
          </p>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Browse All Analyses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
