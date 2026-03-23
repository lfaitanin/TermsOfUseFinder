import type { Metadata } from "next";
import Link from "next/link";
import { Shield, BookOpen, Scale, Users, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ToS Exposed — our mission, methodology, and why we believe in Terms of Service transparency.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-6">About ToS Exposed</h1>

      <div className="space-y-8">
        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3 text-accent">
            <Shield className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Our Mission</h2>
          </div>
          <p className="text-muted leading-relaxed">
            Most people click &quot;I Agree&quot; without reading thousands of words of legal text.
            We read it for you. ToS Exposed analyzes the Terms of Service of popular apps,
            games, and websites to find hidden clauses that affect your privacy, rights, and data.
            We translate legal jargon into plain English so everyone can understand what they&apos;re
            really agreeing to.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3 text-accent">
            <BookOpen className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Our Methodology</h2>
          </div>
          <div className="text-muted leading-relaxed space-y-3">
            <p>
              For each app or service we analyze, we read the complete Terms of Service,
              Privacy Policy, and any related legal documents. We look for clauses that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Collect more data than the service needs to function</li>
              <li>Grant the company unusual rights over your content</li>
              <li>Share your information with third parties in unexpected ways</li>
              <li>Limit your legal rights (forced arbitration, class action waivers)</li>
              <li>Allow the company to change terms without meaningful notice</li>
              <li>Track your location, behavior, or biometrics beyond expectations</li>
            </ul>
            <p>
              We rate each clause by severity (Critical, High, Medium, Low) based on
              potential impact on user privacy and rights.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3 text-accent">
            <Scale className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Disclaimer</h2>
          </div>
          <p className="text-muted leading-relaxed">
            ToS Exposed is an educational project. The information presented here is not legal
            advice and should not be treated as such. Our analyses represent our interpretation
            of publicly available Terms of Service documents. Terms change frequently — always
            check the original documents for the most current version. We encourage you to consult
            a legal professional for advice specific to your situation.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3 text-accent">
            <Users className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Contribute</h2>
          </div>
          <p className="text-muted leading-relaxed">
            Know an app with concerning Terms of Service? Want to help analyze more services?
            This is an open project — we welcome contributions from anyone who cares about
            digital rights and privacy transparency.
          </p>
        </section>

        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
          <div className="flex items-center gap-3 mb-3 text-amber-400">
            <Coffee className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Support This Project</h2>
          </div>
          <p className="text-muted leading-relaxed mb-4">
            ToS Exposed is free, ad-free, and independent. Reading and analyzing Terms of Service
            takes time and research. If you find this project useful, consider buying a coffee
            to help keep it going.
          </p>
          <a
            href="https://buymeacoffee.com/lfaitanin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-amber-400"
          >
            <Coffee className="h-4 w-4" />
            Buy me a coffee
          </a>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/apps"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-hover"
        >
          Explore Analyzed Apps →
        </Link>
      </div>
    </div>
  );
}
