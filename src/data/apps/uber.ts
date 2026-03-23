import { AnalyzedApp } from "../types";

export const uber: AnalyzedApp = {
  slug: "uber",
  name: "Uber",
  company: "Uber Technologies, Inc.",
  icon: "uber",
  description:
    "Ride-hailing and delivery platform operating in over 70 countries worldwide.",
  tosUrl: "https://www.uber.com/legal/en/document/?name=general-terms-of-use",
  tosLastUpdated: "2024-09-01",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "Uber collects continuous location data even when the app is not in active use, tracks users after rides end, shares data broadly with government and insurance entities, enforces mandatory arbitration that limits legal recourse, and can deactivate accounts without detailed explanation.",
  clauses: [
    {
      id: "uber-background-location",
      title: "Continuous Background Location Tracking",
      originalText:
        "We collect your location data when the Uber app is running in the foreground or background of your device.",
      explanation:
        "Uber collects precise GPS location data continuously while the app is running, including in the background. This means the app can track your movements throughout the day, not just during rides. The location data creates a detailed map of where you live, work, and spend time.",
      implications: [
        "Your movements are tracked continuously, not just during active rides",
        "Location history reveals home address, workplace, and frequently visited places",
        "Background tracking persists unless the user manually revokes location permissions",
        "Combined with trip history, a comprehensive movement profile is created",
      ],
      severity: "critical",
      categories: ["location-tracking", "surveillance", "data-collection"],
      tosSection: "Data Collection",
    },
    {
      id: "uber-post-ride-tracking",
      title: "Location Collection After Trip Ends",
      originalText:
        "We may collect your location data for up to 5 minutes after a trip ends to improve safety and service quality.",
      explanation:
        "Uber continues to collect location data for several minutes after a ride is completed. While framed as a safety measure, this post-ride tracking captures where users go after being dropped off, revealing final destinations that may differ from drop-off points.",
      implications: [
        "Reveals your actual destination when you are dropped off nearby for privacy",
        "Post-ride movement patterns expose additional personal information",
        "Users may not realize tracking continues after the ride ends",
      ],
      severity: "high",
      categories: ["location-tracking", "surveillance"],
      tosSection: "Location Data",
    },
    {
      id: "uber-government-data-sharing",
      title: "Data Sharing with Government and Insurance Entities",
      originalText:
        "We may share your data with law enforcement, government authorities, insurance companies, and other third parties as required by law or to protect our rights.",
      explanation:
        "Uber shares user data including trip history, location data, and account information with law enforcement, government agencies, and insurance companies. The terms are broad enough to allow sharing without a specific warrant or subpoena in many cases, using language like protecting rights and safety.",
      implications: [
        "Trip history can be disclosed to law enforcement without notifying the user",
        "Insurance companies may access ride data for claim investigations",
        "Broadly worded terms allow sharing beyond strict legal requirements",
        "Users have no mechanism to challenge or be notified of data disclosures",
      ],
      severity: "high",
      categories: ["third-party-sharing", "data-collection"],
      tosSection: "Sharing of Data",
    },
    {
      id: "uber-forced-arbitration",
      title: "Mandatory Arbitration and Class Action Waiver",
      originalText:
        "You agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Services will be settled by binding arbitration, and you waive your right to participate in a class action lawsuit.",
      explanation:
        "Uber requires users to resolve all disputes through binding arbitration rather than in court, and users waive their right to join class action lawsuits. This significantly limits legal recourse for users who experience harm, as individual arbitration is often more costly and less effective than collective legal action.",
      implications: [
        "Users cannot join class action lawsuits against Uber",
        "Individual arbitration is costly and discourages pursuing small claims",
        "Arbitration proceedings are private, preventing public accountability",
        "The opt-out window is short and easily missed by most users",
      ],
      severity: "critical",
      categories: ["forced-arbitration"],
      tosSection: "Dispute Resolution",
    },
    {
      id: "uber-account-deactivation",
      title: "Account Deactivation Without Detailed Explanation",
      originalText:
        "Uber may deactivate or restrict your access to the Services at any time, for any reason, including if Uber believes you have violated these Terms.",
      explanation:
        "Uber reserves the right to deactivate user or driver accounts at any time without providing a detailed explanation. For drivers, this effectively terminates their livelihood with no meaningful appeals process. The broad language gives Uber unilateral power to remove users from the platform.",
      implications: [
        "Drivers can lose their income source without a clear explanation",
        "No independent appeals process exists for deactivation decisions",
        "Algorithmic decisions may trigger deactivation without human review",
        "Users lose access to trip history and receipts upon deactivation",
      ],
      severity: "high",
      categories: ["automated-decisions", "silent-changes"],
      tosSection: "Termination",
    },
  ],
  tags: [
    "ride-hailing",
    "delivery",
    "location-tracking",
    "gig-economy",
    "arbitration",
    "transportation",
  ],
};
