import type { AnalyzedApp } from "@/data/types";
import { SITE_URL } from "@/lib/constants";

export function AppJsonLd({ app }: { app: AnalyzedApp }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${app.name} Terms of Service Analysis`,
    description: app.summary,
    datePublished: app.analysisDate,
    dateModified: app.analysisDate,
    author: { "@type": "Organization", name: "ToS Exposed", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ToS Exposed", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/apps/${app.slug}` },
    about: {
      "@type": "SoftwareApplication",
      name: app.name,
      applicationCategory: "Application",
      operatingSystem: "Any",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
