import { AnalyzedApp } from "../types";

export const instagram: AnalyzedApp = {
  slug: "instagram",
  name: "Instagram",
  company: "Meta Platforms, Inc.",
  icon: "Camera",
  description:
    "A photo and video sharing social network with messaging, stories, reels, and shopping features, owned by Meta Platforms.",
  tosUrl: "https://help.instagram.com/581066165581870",
  tosLastUpdated: "2025-01-04",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "Instagram's Terms of Use grant Meta a broad, transferable, sub-licensable, royalty-free worldwide license to all content you post. The platform engages in extensive cross-app tracking using pixels and SDKs embedded across millions of third-party websites and apps, building detailed behavioral profiles used for targeted advertising. Its data collection extends to biometric information, device sensors, and inferred interests.",
  clauses: [
    {
      id: "instagram-content-license",
      title: "Broad Worldwide License Over All User Content",
      originalText:
        "Instagram's Terms of Use state that when you share, post, or upload content, you grant a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your content.",
      explanation:
        "By posting any photo, video, or text on Instagram, you grant Meta a sweeping license to use that content in almost any way it sees fit. The license is transferable, meaning Meta can pass these rights to other companies. It is sub-licensable, meaning those companies can pass the rights further. While you retain ownership, the practical rights you grant are extraordinarily broad.",
      implications: [
        "Your photos and videos can be used in Meta advertising, AI training datasets, or third-party partnerships without additional consent or compensation",
        "The transferable and sub-licensable nature means your content rights can pass through multiple companies you have no relationship with",
        "Even after deleting content, previously shared or cached versions may continue to be used under this license",
      ],
      severity: "critical",
      categories: ["content-rights"],
      tosSection: "Permissions You Give to Us",
    },
    {
      id: "instagram-cross-app-tracking",
      title: "Pervasive Cross-App and Cross-Site Tracking",
      originalText:
        "Meta's Data Policy describes collecting information about your activity across third-party websites and apps that use Meta Business Tools, including the Meta Pixel, social plugins, and the Meta SDK, to provide and improve advertising services.",
      explanation:
        "Meta tracks your browsing and app usage far beyond Instagram itself. The Meta Pixel is embedded on millions of websites, and the Meta SDK is integrated into countless apps. Every time you visit a site with a Meta Pixel or use an app with the Meta SDK, that activity is linked to your Instagram profile and used for ad targeting, even if you are not logged into Instagram at the time.",
      implications: [
        "Your activity on health, finance, dating, and other sensitive websites is tracked and linked to your advertising profile",
        "Tracking occurs across devices and platforms, creating a comprehensive behavioral profile that extends well beyond Instagram usage",
        "Even users who carefully manage Instagram privacy settings are tracked through third-party integrations they may not be aware of",
      ],
      severity: "critical",
      categories: ["surveillance", "third-party-sharing", "data-collection"],
      tosSection: "Information From Partners",
    },
    {
      id: "instagram-biometric-data",
      title: "Facial and Biometric Data Collection from Photos and Videos",
      originalText:
        "Meta's Data Policy indicates that it collects content and information including identifiers derived from features like face geometry when these features are used, subject to applicable consent requirements.",
      explanation:
        "Instagram and Meta have the capability to extract biometric identifiers, including facial geometry data, from photos and videos uploaded to the platform. Meta paid $1.4 billion to settle a class action lawsuit in Illinois under the Biometric Information Privacy Act (BIPA) related to its facial recognition practices on Facebook. While Meta announced it would shut down its facial recognition system in 2021, its policies still allow for biometric data collection where legally permitted.",
      implications: [
        "Photos you upload may be scanned for biometric identifiers that can uniquely identify individuals",
        "People who appear in your photos may have their biometric data collected without their direct consent",
        "The broad policy language leaves the door open for reintroducing facial recognition features in jurisdictions where it is legally permitted",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance"],
      tosSection: "Information and Content You Provide",
    },
    {
      id: "instagram-behavioral-advertising",
      title: "Detailed Behavioral Profiling for Advertising",
      originalText:
        "Meta's Terms describe using the information collected to provide personalized advertising, stating that advertisers can define their audience by characteristics such as demographics, interests, and behaviors, and Meta then delivers the ad to people who may be interested.",
      explanation:
        "Instagram builds detailed profiles based on your interactions, content you view, accounts you follow, messages you send, purchases you make, and your activity across other Meta services and third-party sites. This profile is used to categorize you into advertising segments that are sold to advertisers. The granularity of this profiling extends to inferred political views, health interests, financial status, and personal relationships.",
      implications: [
        "Advertisers can target you based on sensitive inferred characteristics including health conditions, financial struggles, or relationship status",
        "The volume of data points collected makes it effectively impossible for users to understand or control how they are being profiled",
        "Your behavioral data is the core product being monetized, creating a fundamental conflict between user privacy and Meta's business model",
      ],
      severity: "high",
      categories: ["third-party-sharing", "automated-decisions", "data-collection"],
      tosSection: "How Is Your Information Used?",
    },
    {
      id: "instagram-forced-arbitration",
      title: "Mandatory Arbitration and Class Action Waiver",
      originalText:
        "Meta's Terms of Service require that disputes be resolved through binding individual arbitration rather than in court, and include a waiver of the right to participate in class action lawsuits or class-wide arbitration.",
      explanation:
        "By using Instagram, you agree to waive your right to sue Meta in court or participate in class action lawsuits. Disputes must be resolved through individual arbitration, a private process that statistically favors corporations. This makes it practically impossible for users to band together to challenge systemic privacy violations or unfair practices, since individual claims are often too small to justify the cost of arbitration.",
      implications: [
        "Users cannot join together in class action lawsuits even when millions are affected by the same privacy violation",
        "Individual arbitration costs and complexity deter most users from pursuing legitimate grievances",
        "Meta has reduced legal accountability for systemic harms that affect large numbers of users simultaneously",
      ],
      severity: "high",
      categories: ["forced-arbitration"],
      tosSection: "Disputes",
    },
  ],
  tags: [
    "social-media",
    "meta",
    "photo-sharing",
    "content-license",
    "cross-app-tracking",
    "biometrics",
    "advertising",
  ],
};
