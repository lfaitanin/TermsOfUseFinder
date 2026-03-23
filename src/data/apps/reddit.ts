import { AnalyzedApp } from "../types";

export const reddit: AnalyzedApp = {
  slug: "reddit",
  name: "Reddit",
  company: "Reddit Inc.",
  icon: "🤖",
  description:
    "Social news aggregation and discussion platform organized into topic-based communities (subreddits), where users vote on content and engage in threaded conversations.",
  tosUrl: "https://www.redditinc.com/policies/user-agreement",
  tosLastUpdated: "2024-08-26",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "Reddit's User Agreement grants the platform a perpetual, irrevocable, royalty-free license to all content posted, including after account deletion. In 2023, Reddit sold access to its Data API to Google and other AI companies for large language model training, monetizing the entirety of user-generated posts and comments. The platform logs extensive behavioral and device data, tracks users across the web via embed widgets and share buttons, and mandates forced arbitration for disputes, waiving users' right to class-action lawsuits.",
  clauses: [
    {
      id: "reddit-perpetual-content-license",
      title: "Perpetual, Irrevocable License to All Posted Content",
      originalText:
        "When Your Content is created with or submitted to the Services, you grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, transferable, and sublicensable license to use, copy, modify, adapt, prepare derivative works of, distribute, store, perform, and display Your Content and any name, username, voice, or likeness provided in connection with Your Content in all media formats and channels now known or later developed anywhere in the world.",
      explanation:
        "Every post, comment, image, and vote you submit to Reddit is licensed to the company forever. This license is irrevocable, meaning it survives account deletion and content removal. Reddit can sublicense this content to third parties, including AI companies, advertising networks, and media partners, without notifying or compensating you.",
      implications: [
        "Deleting your account or posts does not revoke Reddit's license to use that content in perpetuity",
        "Reddit can sell or license your posts, comments, and any associated personal identifiers to third parties for any commercial purpose",
        "Your content can be used to train AI models, as Reddit has already done through its 2023 data licensing deal with Google",
        "The license covers your name and username, meaning Reddit can attribute commercial uses of content back to you without additional consent",
      ],
      severity: "high",
      categories: ["content-rights", "data-retention"],
      tosSection: "User Agreement - Your Content",
    },
    {
      id: "reddit-ai-training-data-sale",
      title: "User Content Sold to AI Companies for Model Training",
      originalText:
        "We may share information with our affiliates and subsidiaries, and with third parties to provide you with content and features, process information on our behalf, measure and improve our services and advertising, and allow them to provide you with advertising and communications about their products and services.",
      explanation:
        "In 2023, Reddit signed a data licensing agreement with Google worth an estimated $60 million annually, granting access to Reddit's Data API for AI training purposes. Reddit also pursued similar deals with other AI companies before its 2024 IPO. Reddit's broad content license and data sharing terms provided the legal basis for this commercialization of the platform's entire corpus of user-generated discussions without user notification or opt-out mechanisms.",
      implications: [
        "The entirety of Reddit's post and comment history, representing billions of user contributions, has been licensed to AI companies for model training",
        "Users who contributed to Reddit years or decades ago had no opportunity to consent to or opt out of this commercial use of their content",
        "The financial benefit of this data monetization flowed entirely to Reddit Inc. shareholders, not to the users who created the content",
        "Content including sensitive personal disclosures shared in communities about health, relationships, and identity was included in training datasets",
      ],
      severity: "critical",
      categories: ["content-rights", "third-party-sharing", "implicit-consent"],
      tosSection: "Privacy Policy - How We Share Information",
    },
    {
      id: "reddit-log-data-tracking",
      title: "Extensive Log Data and Cross-Site Behavioral Tracking",
      originalText:
        "When you use our Services, we may log information including your IP address, user-agent string, browser type, operating system, referral URL, device information, pages visited and links clicked, the requested URL, and search terms. We may also receive information about you when you visit sites that use Reddit buttons or widgets.",
      explanation:
        "Reddit collects granular server-side logs for every page view, search, and click, including on sites that embed Reddit share buttons or widgets. The referral URL data reveals which sites you visited before arriving at Reddit. Combined with device fingerprinting data like user-agent strings, this enables cross-site behavioral tracking even for logged-out or anonymous users.",
      implications: [
        "Reddit tracks browsing behavior across any website that embeds a Reddit share button or widget, regardless of whether you have a Reddit account",
        "IP address logs combined with browsing patterns can de-anonymize users who believe they are posting without identity attached",
        "Search query logs reveal sensitive topics users research, including health conditions, legal questions, and personal struggles",
        "Log data is retained and can be subpoenaed by law enforcement or shared under Reddit's broad third-party data sharing provisions",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance", "third-party-sharing"],
      tosSection: "Privacy Policy - Information We Collect Automatically",
    },
    {
      id: "reddit-forced-arbitration",
      title: "Mandatory Arbitration and Class Action Waiver",
      originalText:
        "Except for small claims disputes, any claim arising out of or relating to these Terms or the Services will be resolved through binding arbitration rather than in court. YOU AND REDDIT WAIVE ANY RIGHT TO A JURY TRIAL AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION OR CLASS ARBITRATION.",
      explanation:
        "Reddit's User Agreement contains a mandatory arbitration clause that requires all disputes to be resolved through private arbitration rather than the court system. Users also waive their right to join class-action lawsuits, which are the primary mechanism through which individuals pursue collective redress against large companies for privacy violations or terms of service breaches. The clause is buried in the terms and activated by continued use of the platform.",
      implications: [
        "You cannot sue Reddit in court or join any class-action lawsuit for privacy violations, terms of service breaches, or other harms",
        "Arbitration proceedings are private and produce no public record, insulating Reddit from accountability for widespread policy violations",
        "Individual arbitration costs and time investment are prohibitive for most users, effectively eliminating their ability to seek redress",
        "The class action waiver prevents collective legal action even when Reddit's practices harm millions of users in the same way simultaneously",
      ],
      severity: "high",
      categories: ["forced-arbitration", "implicit-consent"],
      tosSection: "User Agreement - Dispute Resolution",
    },
    {
      id: "reddit-account-deletion-no-content-removal",
      title: "Account Deletion Does Not Remove Content or License",
      originalText:
        "Please note that Reddit does not guarantee the deletion of all User Content after account deletion, and that your User Content may remain available even after account deletion. Licenses granted to Reddit survive account deletion.",
      explanation:
        "When a Reddit user deletes their account, their posts and comments typically remain visible under a generic username or are retained in Reddit's databases. More importantly, the content license explicitly survives account deletion. Reddit has confirmed it retains data for a period after account closure for legal and operational purposes. This means users who created content years ago and later deleted accounts to protect their privacy retain no legal mechanism to compel removal.",
      implications: [
        "Years of personal disclosures, political opinions, and sensitive discussions remain on Reddit's servers and licensed to third parties after account deletion",
        "Content you believed you had removed by deleting your account continues to exist in Reddit's data exports sold to AI companies",
        "Reddit's data retention practices may conflict with GDPR 'right to erasure' obligations for European users, though enforcement has been inconsistent",
        "The gap between user expectations of deletion and the actual data lifecycle creates significant ongoing privacy exposure",
      ],
      severity: "high",
      categories: ["data-retention", "content-rights", "implicit-consent"],
      tosSection: "User Agreement - Your Content; Privacy Policy - Data Retention",
    },
  ],
  tags: [
    "social-media",
    "content-license",
    "ai-training",
    "forced-arbitration",
    "data-sale",
    "behavioral-tracking",
    "user-generated-content",
    "cross-site-tracking",
  ],
};
