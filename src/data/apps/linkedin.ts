import { AnalyzedApp } from "../types";

export const linkedin: AnalyzedApp = {
  slug: "linkedin",
  name: "LinkedIn",
  company: "Microsoft / LinkedIn",
  icon: "💼",
  description:
    "Professional networking platform owned by Microsoft where users maintain career profiles, connect with colleagues, seek employment, and engage with industry content.",
  tosUrl: "https://www.linkedin.com/legal/user-agreement",
  tosLastUpdated: "2024-08-20",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "LinkedIn's User Agreement grants the platform an exceptionally broad license over professional profile data, including the right to use member content for AI model training. The platform tracks users across non-LinkedIn websites through LinkedIn Insight Tag pixels embedded by third-party employers and advertisers, enabling cross-site surveillance. LinkedIn shares behavioral and profile data extensively with Microsoft and its advertising partners, and the platform infers sensitive attributes such as political affiliation and economic status from member activity. A 2024 class action revealed LinkedIn had been using private messages to train AI without adequate disclosure.",
  clauses: [
    {
      id: "linkedin-broad-content-license",
      title: "Sweeping License Over Professional Profile and Content Data",
      originalText:
        "You grant LinkedIn a nonexclusive, irrevocable, worldwide, royalty-free license to use, copy, modify, distribute, publish, and process, information and content that you provide through our Services and the services of others, without any further consent, notice, and/or compensation to you or others.",
      explanation:
        "LinkedIn's content license covers everything on your profile: employment history, education, skills, endorsements, articles, posts, and connections. The license is irrevocable and royalty-free, meaning LinkedIn can use this professional identity data commercially forever without paying you. The phrase 'without any further consent, notice, and/or compensation' explicitly removes any ongoing consent requirement after initial account creation.",
      implications: [
        "Your complete professional biography, including employment history, skills, and accomplishments, is licensed to LinkedIn permanently and irrevocably",
        "LinkedIn can sublicense your professional profile data to recruiters, data brokers, background check services, and AI companies",
        "You have no right to compensation when LinkedIn sells or monetizes your career data to third parties",
        "The irrevocable nature means closing your account does not terminate LinkedIn's rights to use data already collected",
      ],
      severity: "high",
      categories: ["content-rights", "data-retention", "implicit-consent"],
      tosSection: "User Agreement - License and Intellectual Property Rights",
    },
    {
      id: "linkedin-ai-training-messages",
      title: "Private Messages and Profile Data Used to Train AI Models",
      originalText:
        "We use personal data, including information about your activity, to train artificial intelligence (AI) and machine learning models and improve these models for the purposes described in this Privacy Policy, such as to provide, develop, and improve our Services and products.",
      explanation:
        "LinkedIn's Privacy Policy discloses using member data, including behavioral signals and profile information, to train AI and machine learning models. In 2024, it emerged that LinkedIn had been using members' private messages and profile data to train generative AI models through an opt-out setting that was enabled by default. The platform faced regulatory scrutiny in the UK and elsewhere for this practice. Members had to actively navigate settings to opt out of training data use.",
      implications: [
        "Private messages sent through LinkedIn's messaging system may have been included in AI training datasets without members' explicit knowledge",
        "The default opt-in to AI training means the majority of LinkedIn's 1 billion+ members contributed training data without actively choosing to do so",
        "Professional profile data including career trajectories, skill endorsements, and connection networks represents highly valuable AI training material",
        "LinkedIn's relationship with Microsoft gives collected data potential pathways into Microsoft's broader AI infrastructure, including Azure OpenAI services",
      ],
      severity: "critical",
      categories: ["data-collection", "implicit-consent", "automated-decisions"],
      tosSection: "Privacy Policy - How We Use Your Personal Data",
    },
    {
      id: "linkedin-insight-tag-cross-site-tracking",
      title: "LinkedIn Insight Tag Tracks Users Across Non-LinkedIn Websites",
      originalText:
        "We receive personal data about you when you use services of our advertising partners and third parties. Our partners and other third parties may use LinkedIn plugins, ads, cookies, or similar technologies, which allows us to receive information about you including information not directly provided by you.",
      explanation:
        "LinkedIn operates the LinkedIn Insight Tag, a tracking pixel installed on hundreds of thousands of third-party websites, particularly corporate career pages and B2B marketing sites. When a LinkedIn member visits any site with this pixel, LinkedIn records the visit and associates it with their professional profile. This enables LinkedIn to build a detailed picture of members' browsing behavior outside the platform, far exceeding what users expect from a professional networking service.",
      implications: [
        "LinkedIn tracks your visits to career pages, competitor websites, and employer sites even when you are not on LinkedIn.com",
        "Cross-site browsing data is merged with your professional profile to infer job search intent, employer research, and purchasing behavior",
        "The Insight Tag operates on sites you visit for research or professional purposes, turning your career-related browsing into advertising intelligence",
        "Users on sites that use the Insight Tag are tracked by LinkedIn even without clicking any LinkedIn button or realizing the connection exists",
      ],
      severity: "high",
      categories: ["surveillance", "data-collection", "third-party-sharing"],
      tosSection: "Privacy Policy - Data We Receive About You from Others",
    },
    {
      id: "linkedin-microsoft-data-sharing",
      title: "Extensive Data Sharing with Microsoft and Advertising Partners",
      originalText:
        "We may share your personal data with our affiliates to provide and develop our Services. We share personal data with third parties in connection with displaying ads, measuring ad performance, and improving our advertising products.",
      explanation:
        "Since Microsoft's 2016 acquisition of LinkedIn for $26 billion, LinkedIn has progressively deepened data-sharing integrations with Microsoft's ecosystem, including Outlook, Office 365, Dynamics CRM, and Azure. LinkedIn's ad platform shares member data with advertising partners for targeting purposes. Microsoft's combined data assets from LinkedIn profiles, Outlook email, Bing search, and Office productivity tools create one of the most comprehensive professional data profiles of any technology company.",
      implications: [
        "LinkedIn member data can flow into Microsoft's broader product ecosystem, including email, productivity software, and cloud services",
        "The combination of LinkedIn professional data with Microsoft's other data sources enables highly targeted cross-platform advertising and profiling",
        "Advertising partners receive data about member demographics, job functions, and inferred interests to enable granular professional audience targeting",
        "Members have limited visibility into which specific Microsoft subsidiaries and advertising partners receive their profile and behavioral data",
      ],
      severity: "high",
      categories: ["third-party-sharing", "data-collection", "surveillance"],
      tosSection: "Privacy Policy - How We Share Information",
    },
    {
      id: "linkedin-sensitive-attribute-inference",
      title: "Inference of Sensitive Attributes from Behavioral Data",
      originalText:
        "We infer your interests and preferences using the data we have about you. For example, if you engage with content about a particular industry, we may infer that you work in or are interested in that field. We may combine information we collect about you across our services and devices.",
      explanation:
        "LinkedIn's algorithms analyze member activity, including content engagement, group memberships, job applications, and connection patterns, to infer sensitive attributes not explicitly disclosed. This includes political leanings inferred from followed thought leaders, economic status inferred from employer and title data, religious affiliation inferred from school or organization connections, and health conditions inferred from engagement with patient advocacy groups. These inferences are used for ad targeting and can be shared with advertising partners.",
      implications: [
        "Political views can be inferred from which politicians, publications, or advocacy organizations a member follows or engages with",
        "Religious affiliation and ethnicity can be inferred from educational institution or alumni group membership",
        "Health and disability status can be inferred from memberships in patient communities, healthcare advocacy groups, or disability employment organizations",
        "These sensitive inferences are packaged as audience segments and made available to advertisers, meaning employers, insurers, or financial institutions could potentially access this profiling",
      ],
      severity: "high",
      categories: ["automated-decisions", "data-collection", "surveillance"],
      tosSection: "Privacy Policy - How We Use Your Personal Data",
    },
  ],
  tags: [
    "professional-network",
    "microsoft",
    "ai-training",
    "cross-site-tracking",
    "advertising",
    "data-inference",
    "content-license",
    "behavioral-profiling",
  ],
};
