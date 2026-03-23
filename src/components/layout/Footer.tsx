import Link from "next/link";
import { Shield, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-accent font-bold text-lg mb-3">
              <Shield className="h-5 w-5" />
              <span>ToS Exposed</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Shining a light on what Terms of Service really say.
              Knowledge is your best defense.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Navigate</h3>
            <div className="flex flex-col gap-2">
              <Link href="/apps" className="text-sm text-muted hover:text-foreground transition-colors">
                Analyzed Apps
              </Link>
              <Link href="/categories" className="text-sm text-muted hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/recent" className="text-sm text-muted hover:text-foreground transition-colors">
                Recently Analyzed
              </Link>
              <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Disclaimer</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              This site is for educational purposes only and does not constitute legal advice.
              Always read the full Terms of Service yourself.
            </p>
            <a
              href="https://buymeacoffee.com/lfaitanin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              <Coffee className="h-4 w-4" />
              Support this project
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} ToS Exposed. Built to inform, not to alarm.</p>
        </div>
      </div>
    </footer>
  );
}
