import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllCategories, getCategoryBySlug, getAppsByCategory } from "@/lib/data";
import { AppCard } from "@/components/apps/AppCard";

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Not Found" };
  return {
    title: `${category.name} — Apps That Do This`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const apps = getAppsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all categories
      </Link>

      <div className="mb-10">
        <h1 className={`text-3xl font-bold mb-2 ${category.color}`}>
          {category.name}
        </h1>
        <p className="text-muted max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {apps.length === 0 ? (
        <p className="text-muted text-center py-16">
          No apps currently flagged in this category.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
