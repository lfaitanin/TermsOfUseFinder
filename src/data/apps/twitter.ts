import { AnalyzedApp } from "../types";

export const twitter: AnalyzedApp = {
  slug: "twitter",
  name: "X (Twitter)",
  company: "X Corp. (formerly Twitter)",
  icon: "🐦",
  description:
    "Microblogging and social media platform, rebranded as X following Elon Musk's 2022 acquisition, where users post short messages, share media, and engage in public discourse.",
  tosUrl: "https://twitter.com/en/tos",
  tosLastUpdated: "2024-09-29",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "X Corp.'s Terms of Service grant a sweeping content license and authorize the use of posts to train Grok, the platform's AI assistant. In 2023, X added biometric data collection and employment and education history to its Privacy Policy. Post-acquisition policy changes reduced privacy protections for LGBTQ+ users and eliminated long-standing data use restrictions. X tracks precise device location even when users deny location permission via IP-based inference, and the platform's reduced trust and safety staff has led to documented increases in data misuse incidents.",
  clauses: [
    {
      id: "twitter-grok-ai-training",
      title: "Posts and Interactions Used to Train Grok AI",
      originalText:
        "Based on your settings, we may train our machine learning or artificial intelligence models using the content you post as well as your interactions, searches, and other activity on the platform.",
      explanation:
        "X uses posts, replies, likes, and behavioral interactions as training data for Grok, xAI's large language model integrated into X Premium. In 2024, X enabled this AI training by default for all users, requiring users to manually opt out through a deeply buried settings menu. The opt-out setting was not prominently surfaced to existing users, meaning the majority of X's user base became training data contributors without active consent.",
      implications: [
        "Every public post, reply, and reaction you have made on X since account creation is a candidate for AI training data",
        "The opt-out setting is located at Settings > Privacy and Safety > Grok and was not surfaced to users when it was enabled by default",
        "Content including political speech, personal disclosures, and creative work is used to train a commercial AI product that X monetizes through premium subscriptions",
        "European regulators investigated this practice and X suspended the feature for EU/EEA users in 2024 following a request from the Irish Data Protection Commission",
      ],
      severity: "critical",
      categories: ["data-collection", "implicit-consent", "automated-decisions"],
      tosSection: "Privacy Policy - How We Use Information",
    },
    {
      id: "twitter-biometric-data-collection",
      title: "Biometric Data and Employment History Collection Added in 2023",
      originalText:
        "With your permission, we may collect and use your biometric information for safety, security, and identification purposes. We may also collect your employment and education history for features like job search and recommendations.",
      explanation:
        "X's September 2023 Privacy Policy update added two significant new data collection categories: biometric information (with consent) and employment and education history. While the biometric collection requires consent, the employment history collection is framed as enabling features, making refusal functionally equivalent to feature loss. The addition of biometric data to a platform with X's reduced trust and safety resources raised concerns among privacy researchers about the adequacy of data protection.",
      implications: [
        "X now collects biometric identifiers, which are permanent and irrevocable unlike passwords or email addresses",
        "Employment and education history, combined with X's existing behavioral data, enables detailed professional profiling that competes with LinkedIn-style data brokering",
        "The 2023 policy changes were made under an acquisition-era governance structure with significantly reduced privacy and legal staff",
        "Biometric data collected by X is subject to the same broad third-party sharing provisions as all other user data",
      ],
      severity: "critical",
      categories: ["data-collection", "surveillance", "implicit-consent"],
      tosSection: "Privacy Policy - Information You Share With Us",
    },
    {
      id: "twitter-location-ip-inference",
      title: "Location Tracking via IP Even When Location Permission Denied",
      originalText:
        "When you use X, we collect some personal data automatically, such as your IP address and information about your device. We use your IP address to infer your approximate location even if you have not enabled precise location sharing.",
      explanation:
        "X infers user location from IP addresses regardless of whether the user has granted or denied location permissions in their device settings. This IP-based location inference produces city or region-level location data that is used for advertising targeting, content filtering, and trend localization. Users who explicitly deny location access to the X app believing this prevents location tracking are not protected from this IP-based method.",
      implications: [
        "Denying location permission to the X app does not prevent location tracking; IP-based inference continues regardless",
        "Location data inferred from IP addresses is used for advertising targeting, enabling geographically-targeted campaigns to reach users based on where they post from",
        "For users in countries with political repression, IP-derived location data could expose participation in political discourse to state actors",
        "The gap between user expectations when denying permissions and X's actual data collection practices represents a form of deceptive design",
      ],
      severity: "high",
      categories: ["location-tracking", "surveillance", "data-collection"],
      tosSection: "Privacy Policy - Information We Collect Automatically",
    },
    {
      id: "twitter-broad-content-license",
      title: "Broad Content License Including Rights for Third-Party Distribution",
      originalText:
        "By submitting, posting or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any and all media or distribution methods now known or later developed.",
      explanation:
        "X's content license permits the platform to sublicense user content to third parties, including media organizations, data analytics companies, and AI vendors. The platform's enterprise API tier has historically allowed large-scale content ingestion by researchers, companies, and government entities. Post-acquisition, X restructured its API access pricing, simultaneously commercializing this sublicensing more aggressively while reducing researcher access that had provided oversight of the platform.",
      implications: [
        "X can license your tweets, images, and videos to any third party under a sublicensable royalty-free license",
        "Enterprise API customers have historically been able to ingest the full Twitter 'firehose,' giving them access to every public post in real time",
        "Media organizations can republish your tweets, and AI companies can use them for model training, all under the existing content license",
        "Deleting a tweet removes it from public view but X's license to content already accessed by API partners through firehose access is not retroactively revoked",
      ],
      severity: "high",
      categories: ["content-rights", "third-party-sharing"],
      tosSection: "Terms of Service - Content",
    },
    {
      id: "twitter-post-acquisition-privacy-rollback",
      title: "Reduced Privacy Protections and Policy Rollbacks Post-Acquisition",
      originalText:
        "We may revise these Terms from time to time. The most current version will always be at twitter.com/tos. If the revision, in our sole discretion, is material, we will notify you via e-mail to the email associated with your account or through the Services. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised terms.",
      explanation:
        "Following Elon Musk's October 2022 acquisition, X Corp. made a series of policy changes that privacy advocates criticized as reducing user protections. Notably, X removed its policy protecting transgender users from being misgendered, reduced enforcement of rules against non-consensual sharing of private information, significantly reduced its trust and safety staff, and modified data use policies. The terms explicitly state that continued use constitutes acceptance of any unilateral changes X makes, with no opt-out mechanism other than account deletion.",
      implications: [
        "X can materially change its privacy and data use policies with only email notice, and continued platform use is deemed acceptance",
        "Rollbacks of prior safety policies have increased documented harms including targeted harassment and non-consensual content sharing",
        "The trust and safety workforce reductions have diminished X's capacity to enforce its own policies regarding data misuse by third parties",
        "Users have no mechanism to reject specific policy changes; their only option to refuse new terms is to delete their account and forfeit their content, connections, and history",
      ],
      severity: "high",
      categories: ["silent-changes", "implicit-consent"],
      tosSection: "Terms of Service - Changes to These Terms",
    },
  ],
  tags: [
    "social-media",
    "ai-training",
    "biometric-data",
    "location-tracking",
    "content-license",
    "grok",
    "elon-musk",
    "post-acquisition",
    "silent-changes",
  ],
};
