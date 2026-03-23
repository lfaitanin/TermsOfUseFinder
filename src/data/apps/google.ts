import { AnalyzedApp } from "../types";

export const google: AnalyzedApp = {
  slug: "google",
  name: "Google",
  company: "Google LLC (Alphabet)",
  icon: "🔍",
  description:
    "Suite of internet services including Search, Gmail, Maps, YouTube, Chrome, and Android, operated by Google LLC, a subsidiary of Alphabet Inc.",
  tosUrl: "https://policies.google.com/terms",
  tosLastUpdated: "2024-05-22",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "Google's Terms of Service and Privacy Policy govern a vast cross-product data ecosystem spanning Search queries, Gmail content, Maps location history, YouTube viewing habits, Chrome browsing data, and Android device signals. Google combines data across all its services to build highly detailed behavioral profiles used for advertising, which generates over 75% of Alphabet's revenue. Despite policy updates in response to regulatory pressure, including a 2023 FTC settlement over children's data and ongoing EU proceedings, Google continues to collect location data even when users believe they have disabled it, reads Gmail content for targeting, retains voice recordings from Assistant, and claims broad rights to monetize YouTube content.",
  clauses: [
    {
      id: "google-cross-product-data-combination",
      title: "Cross-Product Data Combination Across All Google Services",
      originalText:
        "We collect information to provide better services to all our users — from figuring out basic stuff like which language you speak, to more complex things like which ads you'll find most useful, the people who matter most to you online, or which YouTube videos you might like. We combine the information we collect across our different services.",
      explanation:
        "Google explicitly combines data collected across all of its products, including Search queries, Gmail content analysis, Maps location traces, YouTube watch history, Chrome browsing history, Android app usage, Google Pay transactions, and Google Assistant voice interactions. This cross-product combination produces behavioral profiles with an accuracy and depth that no single-product competitor can match. A single Google account links what you search for, where you go, what you watch, what you buy, and what you say aloud to your phone.",
      implications: [
        "Your search queries, email content, physical location history, video consumption, and voice commands are all combined under a single advertising profile",
        "The combined dataset allows Google to infer health conditions from Search queries and Maps visits to medical facilities, political views from news consumption, and financial status from payment data",
        "Cross-product combination means data shared in one context (a private email) influences what you see in a completely different context (Search ads)",
        "No meaningful data silo exists between Google products; signing into any Google service contributes data to the central advertising profile",
      ],
      severity: "critical",
      categories: ["data-collection", "surveillance", "automated-decisions"],
      tosSection: "Privacy Policy - Information Google Collects",
    },
    {
      id: "google-location-history-disabled",
      title: "Location Data Collected Even When Location History Is Disabled",
      originalText:
        "Depending on your account settings, your activity on other sites and apps may be associated with your personal information in order to improve Google's services and the ads delivered by Google. We collect information about your location when you use our services, which helps us offer features like driving directions for Google Maps.",
      explanation:
        "In 2018, an Associated Press investigation and subsequent academic research documented that Google records location data through multiple mechanisms even when users disable 'Location History' in their account settings. These mechanisms include Web & App Activity (which records location from Search and Maps separately from Location History), IP address geolocation, and Wi-Fi network data. Google paid $391.5 million in a 2022 settlement with 40 US states over deceptive location tracking practices, and subsequently agreed in a 2023 settlement to make its location data disclosures clearer.",
      implications: [
        "Disabling 'Location History' in Google account settings does not prevent location data collection; Web & App Activity continues recording location independently",
        "Google's 2022 settlement with 40 state attorneys general confirmed the company had misled users about the effectiveness of disabling location tracking",
        "Location data collected through these parallel mechanisms is used for advertising targeting and retained in Google's data systems",
        "The distinction between Location History, Web & App Activity, and other location signals is deliberately complex, making it practically impossible for ordinary users to achieve true location privacy",
      ],
      severity: "critical",
      categories: ["location-tracking", "surveillance", "data-collection"],
      tosSection: "Privacy Policy - Location Information",
    },
    {
      id: "google-gmail-content-reading",
      title: "Gmail Content Processed for Advertising and Service Personalization",
      originalText:
        "Our automated systems analyze your content (including emails) to provide you personally relevant product features, such as customized search results, tailored advertising, and spam and malware detection.",
      explanation:
        "Google processes the content of Gmail messages using automated systems to power features including Smart Reply, Smart Compose, and historically direct ad targeting. While Google announced in 2017 it would stop using Gmail content for direct ad targeting in Gmail itself, it continues processing email content for other personalization purposes, and third-party apps authorized to access Gmail can still read email content. Gmail's terms also permit Google to analyze email content for service improvement and product development.",
      implications: [
        "Every email you send and receive in Gmail is processed by Google's automated systems, including for product improvement purposes",
        "Third-party applications you authorize to access Gmail (calendar apps, productivity tools, etc.) may read the full content of your emails under Gmail's permission model",
        "Content from business communications, personal correspondence, and sensitive messages passes through Google's content analysis infrastructure",
        "Gmail's free pricing model is partially subsidized by the data value extracted from email content analysis",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance", "third-party-sharing"],
      tosSection: "Privacy Policy - Information Google Collects",
    },
    {
      id: "google-assistant-voice-retention",
      title: "Google Assistant Voice Recordings Retained and Reviewed by Humans",
      originalText:
        "When you interact with Google Assistant, we collect the audio of what you said, and we may use these interactions to improve our audio recognition technology and our services.",
      explanation:
        "Google Assistant records audio when activated, and Google retains these voice recordings by default. In 2019, a leak of thousands of Google Assistant audio clips revealed that Google contractors were listening to voice recordings to improve speech recognition, including recordings captured from accidental activations. Google's Audio Activity setting stores these recordings in user accounts, but users must manually navigate to My Activity and delete records, and the default retention period is until manually deleted or an auto-delete period is set by the user.",
      implications: [
        "Voice recordings made to Google Assistant, including accidental activations, are retained in your Google account and reviewed by human contractors",
        "The audio files captured may contain sensitive conversations, background discussions, and private information captured without deliberate user intent",
        "Default settings retain these recordings indefinitely until manually deleted, and many users are unaware of the My Activity interface where recordings are accessible",
        "Voice data is one of the most sensitive biometric categories, as it can reveal health conditions, emotional state, and identity, and cannot be changed if compromised",
      ],
      severity: "high",
      categories: ["data-collection", "data-retention", "surveillance"],
      tosSection: "Privacy Policy - Information Google Collects",
    },
    {
      id: "google-youtube-monetize-rights",
      title: "Google's 'Right to Monetize' YouTube Content",
      originalText:
        "By providing Content to the Service, you grant to YouTube a worldwide, non-exclusive, royalty-free, sublicensable and transferable license to use that Content. YouTube may monetize your Content on the Service (and such monetization may include displaying ads on or within Content or charging users a fee for access).",
      explanation:
        "YouTube's Terms of Service grant Google the right to place advertising on any video, including those from channels not enrolled in the YouTube Partner Program. This 'right to monetize' clause, made explicit in YouTube's 2021 Terms of Service update, means YouTube can generate revenue from a creator's content without sharing that revenue with the creator. The policy applies globally and to all content regardless of channel size or monetization status. Content used to train YouTube's recommendation algorithms also falls under the broader content license.",
      implications: [
        "YouTube can place ads on your videos and retain 100% of that ad revenue if you are not enrolled in the YouTube Partner Program",
        "Independent creators and non-monetized channels subsidize YouTube's ad revenue without receiving any share of the proceeds",
        "The royalty-free, sublicensable license allows YouTube to use video content in other Google products, promotional materials, and potentially AI training datasets",
        "Creators who upload videos to YouTube grant Google permanent commercial rights to that content even if they later delete their channel",
      ],
      severity: "high",
      categories: ["content-rights", "implicit-consent", "data-retention"],
      tosSection: "YouTube Terms of Service - Right to Monetize",
    },
  ],
  tags: [
    "search-engine",
    "advertising",
    "cross-product-tracking",
    "location-tracking",
    "gmail",
    "youtube",
    "voice-data",
    "behavioral-profiling",
    "alphabet",
  ],
};
