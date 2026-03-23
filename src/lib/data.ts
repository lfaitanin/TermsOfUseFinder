import { apps } from "@/data/apps";
import { categories } from "@/data/categories";
import type { AnalyzedApp, Category, CategorySlug, ConcerningClause } from "@/data/types";

export function getAllApps(): AnalyzedApp[] {
  return apps.sort((a, b) => a.name.localeCompare(b.name));
}

export function getAppBySlug(slug: string): AnalyzedApp | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppsByCategory(categorySlug: CategorySlug): AnalyzedApp[] {
  return apps.filter((app) =>
    app.clauses.some((clause) => clause.categories.includes(categorySlug))
  );
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getFeaturedClauses(): (ConcerningClause & { appName: string; appSlug: string })[] {
  const featured: (ConcerningClause & { appName: string; appSlug: string })[] = [];
  for (const app of apps) {
    for (const clause of app.clauses) {
      if (clause.severity === "critical" || clause.severity === "high") {
        featured.push({ ...clause, appName: app.name, appSlug: app.slug });
      }
    }
  }
  return featured
    .sort((a, b) => {
      const order = { critical: 0, high: 1, medium: 2, low: 3 };
      return order[a.severity] - order[b.severity];
    })
    .slice(0, 6);
}

export function searchApps(query: string): AnalyzedApp[] {
  const q = query.toLowerCase();
  return apps.filter(
    (app) =>
      app.name.toLowerCase().includes(q) ||
      app.company.toLowerCase().includes(q) ||
      app.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      app.clauses.some((c) => c.title.toLowerCase().includes(q))
  );
}

export function getCategoryCount(categorySlug: CategorySlug): number {
  return getAppsByCategory(categorySlug).length;
}

export function getRecentlyAnalyzed(limit = 6): AnalyzedApp[] {
  return [...apps]
    .sort((a, b) => b.analysisDate.localeCompare(a.analysisDate))
    .slice(0, limit);
}
