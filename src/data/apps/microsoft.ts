import { AnalyzedApp } from "../types";

export const microsoft: AnalyzedApp = {
  slug: "microsoft",
  name: "Microsoft",
  company: "Microsoft Corporation",
  icon: "🪟",
  description:
    "Microsoft's services agreement covers Windows, Microsoft 365, Xbox, Cortana, Copilot, LinkedIn, and dozens of other products. The breadth of the ecosystem means data collected in one product routinely flows into others.",
  tosUrl: "https://www.microsoft.com/en-us/servicesagreement",
  tosLastUpdated: "2023-09-30",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "Microsoft's unified services agreement allows extensive data sharing across its entire product ecosystem—Windows, Office, Xbox, LinkedIn, Bing, and Cortana/Copilot. Diagnostic telemetry is collected at all times even on the lowest settings, voice and text interactions with AI assistants may be reviewed by employees, and user-generated content can be used to improve and train Microsoft's AI models. The combination of enterprise and consumer data sources, including professional data via LinkedIn, creates one of the broadest data profiles of any tech company.",
  clauses: [
    {
      id: "microsoft-telemetry",
      title: "Windows Diagnostic Data Collection Cannot Be Fully Disabled",
      originalText:
        "Microsoft collects diagnostic data to keep Windows secure, up to date, and working as expected. This data is transmitted to Microsoft automatically, and the level of data collected is set to 'Required diagnostic data' at minimum, which cannot be turned off.",
      explanation:
        "Windows continuously transmits diagnostic and usage data to Microsoft. Even when users select the lowest privacy setting ('Basic' or 'Required'), a baseline set of telemetry is mandatory and cannot be turned off. This includes device identifiers, hardware configuration, installed software, and crash reports.",
      implications: [
        "Your PC's hardware profile and software inventory are sent to Microsoft regardless of privacy settings.",
        "Device and user identifiers persist across sessions and can link data over time.",
        "There is no opt-out for the baseline telemetry tier on Windows 10 and 11.",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance"],
      tosSection: "Privacy & Cookies — Diagnostic Data",
    },
    {
      id: "microsoft-ai-training",
      title: "User Content Used to Train AI and Improve Products",
      originalText:
        "Microsoft uses the data we collect to provide you our services, which includes using data to improve and personalize your experiences. When you use Bing, Cortana, or other Microsoft AI services, Microsoft may use your queries, voice inputs, and content to improve the accuracy of those services.",
      explanation:
        "Content submitted to Microsoft services—including prompts sent to Copilot, voice commands to Cortana, search queries on Bing, and documents processed in Microsoft 365—may be used to train and improve Microsoft's AI models. Users are opted in by default and must navigate multiple settings menus to limit this.",
      implications: [
        "Documents you draft in Word or Excel may inform AI model training.",
        "Voice commands and chat messages to Copilot/Cortana can be retained and reviewed.",
        "Opting out requires separate action in each product's privacy dashboard.",
      ],
      severity: "high",
      categories: ["data-collection", "content-rights", "automated-decisions"],
      tosSection: "Microsoft Services Agreement — Section 3: Privacy",
    },
    {
      id: "microsoft-cross-product-sharing",
      title: "Data Combined Across All Microsoft Products and LinkedIn",
      originalText:
        "Microsoft shares your personal data among Microsoft-controlled affiliates and subsidiaries, and with vendors or agents working on our behalf. Data from LinkedIn may be combined with data from other Microsoft products and services to deliver more relevant advertising and content.",
      explanation:
        "Microsoft operates one of the widest data ecosystems of any company, combining your professional LinkedIn profile (job title, employer, connections) with your Windows activity, Office documents, Xbox gaming history, Bing searches, and Outlook emails. This cross-product profile is used for advertising targeting and product personalization.",
      implications: [
        "Your LinkedIn professional identity can be linked to your gaming and browsing activity.",
        "Microsoft 365 work data and personal consumer data may be combined.",
        "Advertisers on LinkedIn and Bing benefit from a uniquely rich cross-context profile.",
      ],
      severity: "high",
      categories: ["third-party-sharing", "data-collection"],
      tosSection: "Privacy Statement — Sharing Personal Data",
    },
    {
      id: "microsoft-voice-review",
      title: "Human Review of Voice and Text Interactions",
      originalText:
        "In order to improve our speech recognition and language services, Microsoft employees and vendors may review a sample of voice clips and typed queries submitted to Cortana, Bing, and related services. Clips are reviewed after being de-identified.",
      explanation:
        "Microsoft employs contractors who listen to recordings of user interactions with Cortana and review Bing search queries to improve accuracy. While Microsoft claims clips are 'de-identified,' voice recordings can be inherently identifying. Users were opted in by default and many were unaware this practice occurred.",
      implications: [
        "Spoken queries to Cortana or voice typing in Windows may be heard by Microsoft contractors.",
        "De-identification does not guarantee anonymity for voice data.",
        "This practice was paused following public disclosure but can resume under current policy.",
      ],
      severity: "high",
      categories: ["surveillance", "data-collection"],
      tosSection: "Privacy Statement — Voice Data",
    },
    {
      id: "microsoft-silent-changes",
      title: "Terms Can Be Changed With Minimal Notice",
      originalText:
        "We may update these terms at any time and will notify you of material changes by posting a notice on our website or sending you an email. Your continued use of the services after any changes constitutes your acceptance of the new terms.",
      explanation:
        "Microsoft reserves the right to update its services agreement unilaterally. Notification is typically via email or a banner on microsoft.com. Continued use of any Microsoft service after the effective date—including Windows, which users often cannot simply stop using—is treated as acceptance of the new terms.",
      implications: [
        "Stopping use of Windows to avoid new terms is impractical for most users.",
        "Changes to data practices across all Microsoft products take effect simultaneously.",
        "Users bear responsibility for monitoring for updates.",
      ],
      severity: "medium",
      categories: ["silent-changes", "implicit-consent"],
      tosSection: "Microsoft Services Agreement — Section 14: Changes",
    },
  ],
  tags: [
    "windows",
    "office",
    "xbox",
    "linkedin",
    "copilot",
    "cortana",
    "ai",
    "telemetry",
    "enterprise",
  ],
};
