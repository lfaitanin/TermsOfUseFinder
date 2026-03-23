import { AnalyzedApp } from "../types";

export const discord: AnalyzedApp = {
  slug: "discord",
  name: "Discord",
  company: "Discord Inc.",
  icon: "💬",
  description:
    "Discord is a VoIP, instant messaging, and community platform used by over 500 million registered users. It supports text, voice, and video communication organized into servers, channels, and direct messages, with a large ecosystem of third-party bots and integrated apps.",
  tosUrl: "https://discord.com/terms",
  tosLastUpdated: "2023-03-27",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "Discord analyzes message content and behavioral metadata for moderation and ad targeting. Data is shared with third-party apps, games, and bots connected to a user's account, often without granular disclosure of what is shared. Voice activity metadata is monitored, and account history including prior usernames is retained even after account deletion. A mandatory arbitration clause waives users' right to participate in class-action lawsuits. Discord's content license is broad and survives the deletion of content or accounts.",
  clauses: [
    {
      id: "discord-content-analysis",
      title: "Message Content Analyzed for Moderation and Ad Targeting",
      originalText:
        "Discord may access and review message content, metadata, and behavioral signals to enforce our Community Guidelines, detect spam or abuse, and to improve our services, including delivering relevant advertisements. Automated systems process message content as part of normal platform operation.",
      explanation:
        "Discord's automated systems scan message content in servers and direct messages to enforce its Community Guidelines. This same infrastructure is used to build behavioral profiles for its ad platform (Discord Nitro and server Boosts are supplemented by advertising revenue). While Discord has stated it does not sell data to third parties, it uses the data internally for targeting within its own ad products.",
      implications: [
        "Private direct messages are processed by automated systems, not fully private.",
        "Message content contributes to behavioral profiles used for ad targeting.",
        "Even deleted messages may have been processed and retained in moderation logs.",
      ],
      severity: "high",
      categories: ["surveillance", "data-collection", "automated-decisions"],
      tosSection: "Discord Privacy Policy — How We Use Your Information",
    },
    {
      id: "discord-third-party-apps",
      title: "Connected Apps and Bots Receive Broad Account Access",
      originalText:
        "When you authorize a third-party application or bot to access your Discord account, you grant that application permission to access your account data as described in the authorization prompt. Discord is not responsible for the data practices of third-party applications.",
      explanation:
        "Discord's ecosystem of bots and OAuth-connected applications can request access to a user's server list, friends list, direct messages, email address, and more. Many users click through authorization prompts without reviewing what is being granted. Discord explicitly disclaims responsibility for how third-party apps handle data received through these integrations.",
      implications: [
        "Third-party bots added to servers can read message history in those servers.",
        "OAuth apps may receive your email address and account details without clear disclosure.",
        "Discord bears no liability if a connected app misuses your data.",
      ],
      severity: "high",
      categories: ["third-party-sharing", "implicit-consent"],
      tosSection: "Discord Terms of Service — Third-Party Services",
    },
    {
      id: "discord-data-retention",
      title: "Account Data and Username History Retained After Deletion",
      originalText:
        "When you delete your Discord account, your account is deactivated and your personal information is removed from active databases within a reasonable timeframe. However, some information may be retained in backups, logs, and records required for legal compliance. Messages you have sent may remain visible to other users in servers and channels.",
      explanation:
        "Deleting a Discord account does not delete messages sent in servers—those remain visible attributed to a 'Deleted User' tag. Internal logs, username history, IP address records, and backup data are retained for extended periods. Former usernames are kept to prevent impersonation, meaning a user's identity history is preserved in Discord's systems even after account closure.",
      implications: [
        "All messages sent in servers remain visible to other members after account deletion.",
        "Discord retains logs that can associate deleted accounts with IP addresses and device IDs.",
        "Username history is retained indefinitely to prevent impersonation of former handles.",
      ],
      severity: "medium",
      categories: ["data-retention"],
      tosSection: "Discord Privacy Policy — Data Retention and Deletion",
    },
    {
      id: "discord-forced-arbitration",
      title: "Mandatory Arbitration Waives Right to Class-Action Lawsuits",
      originalText:
        "You and Discord agree to resolve any disputes through binding individual arbitration and not through a class action, collective action, or jury trial. By agreeing to these terms, you and Discord are each waiving the right to a trial by jury or to participate in a class action.",
      explanation:
        "Discord's terms include a mandatory binding arbitration clause that requires disputes to be resolved individually through arbitration rather than in court. Users explicitly waive the right to join class-action lawsuits. This effectively protects Discord from coordinated legal action even in cases of widespread policy violations, since the cost and complexity of individual arbitration deters most users from pursuing claims.",
      implications: [
        "Users cannot join class-action lawsuits against Discord, even for systemic harms.",
        "Individual arbitration is costly and procedurally complex for most users.",
        "Discord gains significant protection from widespread policy violations through this clause.",
      ],
      severity: "high",
      categories: ["forced-arbitration"],
      tosSection: "Discord Terms of Service — Settling Disputes",
    },
    {
      id: "discord-content-license",
      title: "Broad License to User Content Including Server Content",
      originalText:
        "By uploading, sharing, or posting content on Discord, you grant Discord a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any and all media or distribution methods, now known or hereafter developed.",
      explanation:
        "Discord holds a broad, perpetual license to all content posted on the platform—including messages, images, files, and server content. The license survives deletion of content and can be sublicensed to third parties. While Discord claims this license is necessary to operate the service (e.g., to display messages to other users), the breadth of rights granted—including adaptation and distribution in any media—goes well beyond operational necessity.",
      implications: [
        "Content posted in private servers is licensed to Discord under the same broad terms as public content.",
        "Discord can sublicense your content to third parties without further notice.",
        "Deleting content does not retroactively terminate the license Discord already holds.",
      ],
      severity: "medium",
      categories: ["content-rights"],
      tosSection: "Discord Terms of Service — Your Content",
    },
  ],
  tags: [
    "messaging",
    "voice-chat",
    "communities",
    "gaming",
    "bots",
    "arbitration",
    "content-license",
    "third-party-apps",
  ],
};
