import type { Metadata } from "next";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { getAllCategories, getCategoryCount } from "@/lib/data";

export const metadata: Metadata = {
  title: "Categories of Concern",
  description:
    "Browse the types of hidden clauses found in Terms of Service — from data collection to forced arbitration.",
};

function CategoryIcon({ name }: { name: string }) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return null;
  return <Icon className="h-6 w-6" />;
}

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Categories of Concern</h1>
        <p className="text-muted max-w-2xl">
          We classify concerning Terms of Service clauses into these categories.
          Each represents a different way your rights or privacy may be compromised.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = getCategoryCount(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:bg-card-hover"
            >
              <div className={`mb-3 ${category.color}`}>
                <CategoryIcon name={category.icon} />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {category.description}
              </p>
              <span className="text-xs text-muted">
                {count} {count === 1 ? "app" : "apps"} affected
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
