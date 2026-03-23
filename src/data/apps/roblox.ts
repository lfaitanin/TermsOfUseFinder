import { AnalyzedApp } from "../types";

export const roblox: AnalyzedApp = {
  slug: "roblox",
  name: "Roblox",
  company: "Roblox Corporation",
  icon: "🎮",
  description:
    "Roblox is an online gaming and game-creation platform with hundreds of millions of registered users, a significant portion of whom are under 13. The platform runs a virtual economy using Robux, employs voice chat, and hosts user-generated games built and shared by its community.",
  tosUrl: "https://en.help.roblox.com/hc/en-us/articles/115004647846",
  tosLastUpdated: "2023-08-17",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "Roblox collects extensive personal and behavioral data on a user base that is largely composed of children and teenagers, raising serious COPPA compliance concerns. The platform's virtual currency (Robux) is designed to obscure the real monetary cost of in-game purchases. User-generated content—including games, scripts, and assets—is licensed to Roblox under broad terms that give the company significant rights over creators' work. Voice chat data is collected and processed, and device and location data are tracked across sessions.",
  clauses: [
    {
      id: "roblox-children-data",
      title: "Broad Data Collection on Users Under 13",
      originalText:
        "Roblox collects information from all users, including those under the age of 13. For users under 13, we collect username, password, birthdate, and gender, along with device information, IP address, and gameplay data. We use this data to operate the service and, where permitted, to personalize the experience.",
      explanation:
        "Roblox collects device identifiers, IP addresses, behavioral analytics, and gameplay patterns from all users, including children under 13. While the platform claims COPPA compliance and restricts certain features for younger users, the baseline data collection is still substantial. Parents are often unaware of the full scope of data collected from their children's accounts.",
      implications: [
        "Children's device IDs, IP addresses, and play behavior are logged and retained.",
        "Behavioral profiling of minors occurs even without parental explicit consent for each data type.",
        "Data collected during childhood can be retained indefinitely under current policy.",
      ],
      severity: "critical",
      categories: ["data-collection", "surveillance"],
      tosSection: "Roblox Privacy Policy — Information We Collect",
    },
    {
      id: "roblox-robux-currency",
      title: "Virtual Currency Obscures Real Money Spending",
      originalText:
        "Roblox uses a virtual currency called Robux. Robux can be purchased through our website or mobile apps. Purchases of Robux are final and non-refundable, except where required by law. Robux has no monetary value and cannot be exchanged for real currency except through the Developer Exchange program.",
      explanation:
        "Robux converts real money into virtual tokens at varying rates (e.g., 400 Robux for $4.99), making it difficult—especially for children—to understand the true cost of in-game items. Once purchased, Robux cannot be refunded. This design pattern is a common dark pattern that encourages overspending, particularly among younger users who may not grasp the real-money equivalence.",
      implications: [
        "Children can spend real money without a clear dollar-amount display at point of purchase.",
        "All Robux purchases are non-refundable, even for accidental transactions by minors.",
        "The indirect currency system reduces price sensitivity and increases spending.",
      ],
      severity: "high",
      categories: ["implicit-consent"],
      tosSection: "Roblox Terms of Use — Virtual Currency",
    },
    {
      id: "roblox-ugc-license",
      title: "User-Created Content Licensed Broadly to Roblox",
      originalText:
        "By submitting User-Generated Content to Roblox, you grant Roblox a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media. Roblox may use your content to promote the platform.",
      explanation:
        "Any game, script, model, audio, or asset uploaded to Roblox is licensed to the company on a perpetual, royalty-free basis. Roblox can use, modify, and distribute this content indefinitely—including in marketing materials—without additional compensation. Young developers who put significant creative work into Roblox games have very limited rights over their own creations.",
      implications: [
        "Games and assets built by child developers are effectively licensed to Roblox indefinitely.",
        "Roblox can use creator content in advertising without additional permission or payment.",
        "Deleting your account does not terminate Roblox's license to your existing content.",
      ],
      severity: "high",
      categories: ["content-rights"],
      tosSection: "Roblox Terms of Use — Intellectual Property",
    },
    {
      id: "roblox-voice-chat",
      title: "Voice Chat Data Collected and Processed",
      originalText:
        "If you use Roblox's age-verified voice chat feature, we collect and process your voice data to enable the feature and to detect violations of our Community Standards. Voice data may be retained for a limited period to investigate reports of misuse.",
      explanation:
        "Roblox introduced spatial voice chat for age-verified users (13+). Voice audio is processed and retained for moderation purposes. While framed as a safety measure, this means voice conversations within Roblox games are recorded and analyzed. Users must verify their age via a third-party identity service, sharing government ID data with that provider.",
      implications: [
        "In-game voice conversations are recorded and may be reviewed by Roblox staff.",
        "Age verification requires sharing government-issued ID with a third-party service.",
        "Voice data is retained beyond the duration of the session for moderation review.",
      ],
      severity: "high",
      categories: ["surveillance", "data-collection", "third-party-sharing"],
      tosSection: "Roblox Privacy Policy — Voice Features",
    },
    {
      id: "roblox-location-device",
      title: "Continuous Location and Device Tracking",
      originalText:
        "We collect information about the device you use to access Roblox, including device identifiers, operating system, browser type, IP address, and, where you have granted permission, precise geolocation. We use this data to improve our services, prevent fraud, and personalize your experience.",
      explanation:
        "Roblox collects device fingerprinting data and IP-derived location on all users, with precise GPS location available on mobile when permissions are granted. Because many users access Roblox on mobile devices and may grant location permission without fully understanding the implications, this results in ongoing location tracking of children and teenagers across their play sessions.",
      implications: [
        "Children's approximate or precise location is tracked during every play session.",
        "Device identifiers allow cross-session and potentially cross-device tracking of minors.",
        "IP address logging enables persistent identification even without account login.",
      ],
      severity: "critical",
      categories: ["location-tracking", "data-collection", "surveillance"],
      tosSection: "Roblox Privacy Policy — Device and Location Data",
    },
  ],
  tags: [
    "gaming",
    "children",
    "coppa",
    "virtual-currency",
    "ugc",
    "voice-chat",
    "mobile",
    "minors",
  ],
};
