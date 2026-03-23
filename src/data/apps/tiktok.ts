import { AnalyzedApp } from "../types";

export const tiktok: AnalyzedApp = {
  slug: "tiktok",
  name: "TikTok",
  company: "ByteDance Ltd.",
  icon: "🎵",
  description:
    "Short-form video sharing platform where users create, share, and discover videos, powered by an algorithmic recommendation engine.",
  tosUrl: "https://www.tiktok.com/legal/terms-of-service",
  tosLastUpdated: "2024-11-01",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "TikTok's Terms of Service and Privacy Policy grant the platform sweeping rights to collect biometric identifiers, keystroke patterns, clipboard contents, and device-level data. The app claims a perpetual, royalty-free license to all user-generated content with broad rights to sublicense and modify it. TikTok's Privacy Policy explicitly discloses collection of faceprints and voiceprints, and the platform's data practices have drawn regulatory scrutiny worldwide due to concerns about data accessibility from China through parent company ByteDance.",
  clauses: [
    {
      id: "tiktok-biometric-collection",
      title: "Biometric Data Collection (Faceprints and Voiceprints)",
      originalText:
        "We may collect biometric identifiers and biometric information as defined under US laws, such as faceprints and voiceprints, from your User Content. Where required by law, we will seek any required permissions from you prior to any such collection.",
      explanation:
        "TikTok's Privacy Policy explicitly states it may collect faceprints and voiceprints from videos you upload. This biometric data is uniquely identifying and, unlike a password, cannot be changed if compromised. The policy says it will seek permission 'where required by law,' meaning in jurisdictions without biometric privacy laws, this collection may happen without explicit consent.",
      implications: [
        "Your face geometry and voice characteristics become part of TikTok's dataset, enabling identification across contexts far beyond the app",
        "Biometric identifiers are permanent and cannot be reset like a password; a breach would have lifelong consequences",
        "In states and countries without biometric privacy laws, collection may proceed without any specific consent prompt",
        "Faceprint data enables facial recognition capabilities that could be used for tracking, profiling, or identity verification purposes beyond entertainment filters",
      ],
      severity: "critical",
      categories: ["data-collection", "surveillance", "implicit-consent"],
      tosSection: "Privacy Policy - Information We Collect Automatically",
    },
    {
      id: "tiktok-keystroke-clipboard",
      title: "Keystroke Patterns and Clipboard Surveillance",
      originalText:
        "We may collect information about the text, images, and other content contained in your device clipboard when you copy and paste content to or from the app. We also collect keystroke patterns or rhythms to help identify you and improve the platform experience.",
      explanation:
        "TikTok collects keystroke patterns (how you type, not just what you type) and reads your device clipboard. Keystroke dynamics are a behavioral biometric that can uniquely identify individuals. Clipboard access means anything you've copied, including passwords, addresses, messages from other apps, or sensitive text, may be read when you open TikTok.",
      implications: [
        "Clipboard access exposes sensitive data copied from other apps: passwords, bank details, private messages, and authentication codes",
        "Keystroke dynamics are a behavioral biometric capable of identifying individuals even across different accounts or devices",
        "In 2020, iOS 14 revealed TikTok was accessing the clipboard every few keystrokes, exposing this practice before TikTok stated it would stop",
        "The combination of what you type and how you type it provides a deeply personal behavioral profile",
      ],
      severity: "critical",
      categories: ["surveillance", "data-collection"],
      tosSection: "Privacy Policy - Information We Collect Automatically",
    },
    {
      id: "tiktok-perpetual-content-license",
      title: "Perpetual and Unrestricted License to All Content",
      originalText:
        "You grant TikTok an unconditional, irrevocable, non-exclusive, royalty-free, fully transferable, perpetual worldwide license to use, modify, adapt, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with the platform and TikTok's business, including promotion and redistribution.",
      explanation:
        "Every video, image, comment, and piece of content you post on TikTok is licensed to the company forever. TikTok can modify your content, create derivative works from it, sublicense it to partners, and use it for any commercial purpose. This license is irrevocable, meaning deleting the video or your account does not end TikTok's rights to use it.",
      implications: [
        "TikTok can use your videos in advertisements, product promotions, or third-party licensing deals without compensation or notification",
        "Deleting a video or your account does not revoke TikTok's perpetual license to that content",
        "Your likeness, voice, and creative work can be used to train AI models, create derivative content, or be sublicensed to any partner",
        "Content creators effectively grant the same commercial rights that would normally require a paid licensing agreement",
      ],
      severity: "high",
      categories: ["content-rights", "data-retention"],
      tosSection: "Terms of Service - Your Content",
    },
    {
      id: "tiktok-cross-border-data",
      title: "International Data Transfers and Access Concerns",
      originalText:
        "Your information may be stored on servers located outside the country where you live, and we may transfer your information to our affiliates, partners, and service providers located in other jurisdictions for the purposes described in this policy.",
      explanation:
        "TikTok's parent company ByteDance is headquartered in Beijing, China. Despite efforts like 'Project Texas' to store US user data domestically, investigations and former employee testimony have indicated that engineers in China accessed US user data. The Privacy Policy's broad language about international transfers and sharing with 'affiliates' provides the legal framework for cross-border data flows to jurisdictions with different privacy standards.",
      implications: [
        "Data about US and European users may be accessible to ByteDance employees in China, where the government can compel data disclosure under national security laws",
        "Former employees and internal communications have indicated that China-based staff accessed US user data despite public assurances to the contrary",
        "The broad definition of 'affiliates' and 'service providers' creates multiple legal pathways for data to flow to jurisdictions with weaker privacy protections",
        "Users have no practical ability to verify where their data is stored, who accesses it, or whether data localization commitments are honored",
      ],
      severity: "critical",
      categories: [
        "third-party-sharing",
        "data-collection",
        "surveillance",
      ],
      tosSection: "Privacy Policy - How We Share Your Information",
    },
    {
      id: "tiktok-algorithm-profiling",
      title: "Extensive Behavioral Profiling for Algorithmic Recommendations",
      originalText:
        "We collect information about your activity on the platform, including the videos you watch, how long you watch them, content you search for, interactions with other users, and inferred interests, to personalize the content and advertising you see.",
      explanation:
        "TikTok's recommendation algorithm is driven by intensive behavioral tracking: watch time down to the millisecond, re-watches, pauses, skips, shares, and interactions are all logged and analyzed. This data feeds a profiling system that infers your interests, emotional state, political views, sexuality, mental health indicators, and purchasing intent, often with greater accuracy than users' own self-assessments.",
      implications: [
        "Millisecond-level engagement tracking reveals subconscious preferences and emotional responses that users themselves may not be aware of",
        "Algorithmic profiling can infer sensitive attributes like political orientation, mental health status, sexual orientation, and pregnancy, even if never explicitly shared",
        "The resulting behavioral profiles are used not just for content recommendation but for advertising targeting, creating a detailed commercial dossier on each user",
        "Research has shown TikTok's algorithm can identify user vulnerabilities and serve content that reinforces addictive usage patterns",
      ],
      severity: "high",
      categories: [
        "automated-decisions",
        "data-collection",
        "surveillance",
      ],
      tosSection: "Privacy Policy - How We Use Your Information",
    },
  ],
  tags: [
    "social-media",
    "biometric-data",
    "facial-recognition",
    "behavioral-tracking",
    "china-data-concerns",
    "bytedance",
    "content-license",
    "algorithmic-profiling",
  ],
};
