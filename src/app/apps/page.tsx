import type { Metadata } from "next";
import { getAllApps } from "@/lib/data";
import { AppGrid } from "@/components/apps/AppGrid";

export const metadata: Metadata = {
  title: "Analyzed Apps",
  description:
    "Browse all apps, games, and services we've analyzed. See what their Terms of Service really say.",
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Analyzed Apps</h1>
        <p className="text-muted max-w-2xl">
          We&apos;ve analyzed the Terms of Service of {apps.length} popular apps and services.
          Search, filter, and discover what you&apos;re really agreeing to.
        </p>
      </div>
      <AppGrid apps={apps} />
    </div>
  );
}
