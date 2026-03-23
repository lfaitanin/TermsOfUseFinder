import { AnalyzedApp } from "../types";

export const whatsapp: AnalyzedApp = {
  slug: "whatsapp",
  name: "WhatsApp",
  company: "Meta Platforms, Inc.",
  icon: "MessageCircle",
  description:
    "A widely used messaging app offering end-to-end encrypted text, voice, and video communication across mobile and desktop platforms.",
  tosUrl: "https://www.whatsapp.com/legal/terms-of-service",
  tosLastUpdated: "2025-01-04",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "Despite marketing itself around end-to-end encryption, WhatsApp collects extensive metadata about who you communicate with, when, how often, and from where. Its 2021 privacy policy update expanded data sharing with parent company Meta, and the app uploads your entire contact list to its servers, including contacts who have never used WhatsApp.",
  clauses: [
    {
      id: "whatsapp-metadata-collection",
      title: "Extensive Metadata Collection Despite Encryption",
      originalText:
        "WhatsApp states that while message content is end-to-end encrypted, it collects usage and log information including how you interact with others, the time, frequency, and duration of your activities, and diagnostic and performance data.",
      explanation:
        "End-to-end encryption protects message content, but WhatsApp still collects detailed metadata about your communication patterns. This includes who you talk to, when, for how long, and how frequently. Metadata alone can reveal intimate details about relationships, routines, and behavior.",
      implications: [
        "Your communication patterns and social graph are fully visible to Meta even though message content is encrypted",
        "Metadata can reveal sensitive information such as calls to medical providers, legal counsel, or crisis hotlines",
        "This data is shared across Meta's family of companies for advertising and profiling purposes",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance"],
      tosSection: "Information We Collect",
    },
    {
      id: "whatsapp-contact-upload",
      title: "Mandatory Contact List Upload",
      originalText:
        "WhatsApp's privacy policy indicates that users provide the phone numbers in their address book on a regular basis, including those of both WhatsApp users and other contacts.",
      explanation:
        "When you use WhatsApp, it periodically uploads your entire phone contact list to its servers. This includes the phone numbers of people who have never agreed to WhatsApp's terms and have no relationship with the service. This practice has drawn regulatory scrutiny in the EU and other jurisdictions.",
      implications: [
        "Phone numbers of people who never consented to WhatsApp's terms are collected and stored on Meta servers",
        "WhatsApp can build shadow profiles of non-users based on how frequently they appear in other users' contact lists",
        "Regulators in Germany and the EU have challenged this practice as a GDPR violation",
      ],
      severity: "critical",
      categories: ["data-collection", "implicit-consent"],
      tosSection: "Information You Provide",
    },
    {
      id: "whatsapp-meta-data-sharing",
      title: "Cross-Platform Data Sharing with Meta",
      originalText:
        "WhatsApp's privacy policy states that it shares information with other Meta Companies to operate, provide, improve, understand, customize, support, and market its services, including to promote safety, security, and integrity.",
      explanation:
        "The controversial 2021 privacy policy update made it explicit that WhatsApp shares user data with Facebook, Instagram, and other Meta entities. This includes account information, phone numbers, transaction data, device information, and usage patterns. Users who did not accept the updated terms faced reduced app functionality.",
      implications: [
        "Your WhatsApp activity contributes to Meta's unified advertising profile of you across Facebook and Instagram",
        "Users were given an accept-or-lose-functionality ultimatum during the 2021 policy change",
        "Data originally shared with a messaging service is repurposed for targeted advertising across Meta platforms",
      ],
      severity: "critical",
      categories: ["third-party-sharing", "implicit-consent"],
      tosSection: "How We Work With Other Meta Companies",
    },
    {
      id: "whatsapp-location-data",
      title: "Continuous Location Data Collection",
      originalText:
        "WhatsApp's privacy policy describes collecting device-related information including IP address and, if permitted, precise location. It also collects location-related information such as time zone and general location derived from the connection.",
      explanation:
        "WhatsApp collects location data through multiple methods: IP address geolocation, device GPS (when granted permission), and connection metadata. Even without explicit location sharing, the service infers your general location from IP addresses and network information. This data is available for use across Meta's services.",
      implications: [
        "Your approximate location is tracked even without granting explicit location permissions",
        "Location history can be correlated with message metadata to build a detailed profile of your movements",
        "Business interactions on WhatsApp may expose business location data to Meta's advertising ecosystem",
      ],
      severity: "high",
      categories: ["location-tracking", "data-collection"],
      tosSection: "Automatically Collected Information",
    },
    {
      id: "whatsapp-terms-changes",
      title: "Unilateral Terms Modification with Continued-Use Consent",
      originalText:
        "WhatsApp reserves the right to amend or update its Terms and Privacy Policy and states that continued use of the service after changes take effect constitutes acceptance of the revised terms.",
      explanation:
        "WhatsApp can change its terms at any time, and simply continuing to use the app is treated as agreement to the new terms. The 2021 policy update demonstrated how this works in practice: users were given a deadline to accept expanded data sharing or face degraded service, with no option to continue under the previous terms.",
      implications: [
        "Privacy protections you relied on when signing up can be removed through future terms updates",
        "Continued use equals consent, leaving users with no meaningful ability to negotiate or reject specific changes",
        "The precedent from 2021 shows Meta is willing to enforce accept-or-leave ultimatums for policy changes",
      ],
      severity: "high",
      categories: ["silent-changes", "implicit-consent"],
      tosSection: "Updates To Our Terms",
    },
  ],
  tags: [
    "messaging",
    "meta",
    "encryption",
    "metadata",
    "contact-upload",
    "cross-platform-tracking",
  ],
};
