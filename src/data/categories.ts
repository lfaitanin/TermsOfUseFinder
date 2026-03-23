import { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "data-collection",
    name: "Data Collection",
    description:
      "Excessive personal data collection far beyond what the service actually needs to function.",
    icon: "Database",
    color: "text-red-400",
  },
  {
    slug: "location-tracking",
    name: "Location Tracking",
    description:
      "GPS, IP, Wi-Fi, and Bluetooth-based location tracking, often with alarming precision.",
    icon: "MapPin",
    color: "text-orange-400",
  },
  {
    slug: "content-rights",
    name: "Content Rights",
    description:
      "Perpetual, irrevocable, worldwide licenses over your photos, videos, and other content.",
    icon: "Copyright",
    color: "text-purple-400",
  },
  {
    slug: "third-party-sharing",
    name: "Third-Party Sharing",
    description:
      "Selling or sharing your data with advertisers, partners, and data brokers.",
    icon: "Share2",
    color: "text-yellow-400",
  },
  {
    slug: "surveillance",
    name: "Surveillance",
    description:
      "Access to your camera, microphone, screen, and ambient environmental data.",
    icon: "Eye",
    color: "text-red-500",
  },
  {
    slug: "automated-decisions",
    name: "Automated Decisions",
    description:
      "Algorithmic profiling, automated content moderation, shadow bans, and AI-driven decisions about you.",
    icon: "Bot",
    color: "text-cyan-400",
  },
  {
    slug: "data-retention",
    name: "Data Retention",
    description:
      "Keeping your data long after you delete your account, with vague or no retention limits.",
    icon: "HardDrive",
    color: "text-emerald-400",
  },
  {
    slug: "implicit-consent",
    name: "Implicit Consent",
    description:
      'Bundled consent, pre-checked boxes, and "by using this service you agree" traps.',
    icon: "MousePointerClick",
    color: "text-amber-400",
  },
  {
    slug: "forced-arbitration",
    name: "Forced Arbitration",
    description:
      "Mandatory arbitration clauses, class action waivers, and unfavorable jurisdiction choices.",
    icon: "Gavel",
    color: "text-slate-400",
  },
  {
    slug: "silent-changes",
    name: "Silent Changes",
    description:
      "The right to change terms without notifying you, sometimes retroactively.",
    icon: "FileEdit",
    color: "text-pink-400",
  },
];
