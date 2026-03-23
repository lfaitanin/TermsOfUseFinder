import Link from "next/link";
import { categories } from "@/data/categories";
import type { CategorySlug } from "@/data/types";

export function CategoryTag({ slug }: { slug: CategorySlug }) {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return null;

  return (
    <Link
      href={`/categories/${slug}`}
      className={`inline-flex items-center gap-1 rounded-full bg-card px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-card-hover ${category.color}`}
    >
      {category.name}
    </Link>
  );
}
