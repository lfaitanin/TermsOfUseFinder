import { AnalyzedApp } from "../types";

export const chatgpt: AnalyzedApp = {
  slug: "chatgpt",
  name: "ChatGPT",
  company: "OpenAI",
  icon: "chatgpt",
  description:
    "AI-powered conversational assistant capable of generating text, code, and answering questions.",
  tosUrl: "https://openai.com/policies/terms-of-use/",
  tosLastUpdated: "2024-12-16",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "OpenAI's terms allow user conversations to be used for model training by default, grant a broad license over user inputs, provide no guarantees of accuracy, and allow third-party plugins to access conversation data. Users must proactively opt out to prevent their data from being used for training.",
  clauses: [
    {
      id: "chatgpt-training-default",
      title: "Conversations Used for AI Training by Default",
      originalText:
        "We may use Content you provide to us to improve our Services, including to train models. You can opt out of training by adjusting your settings.",
      explanation:
        "By default, all conversations with ChatGPT can be used to train and improve OpenAI's models. This means sensitive information shared in chats, including personal details, business strategies, or confidential code, may be incorporated into training data. Users must actively opt out through account settings.",
      implications: [
        "Sensitive personal or business information may become part of training data",
        "Opt-out requires proactive action, meaning most users unknowingly contribute data",
        "Training data could theoretically surface in responses to other users",
        "No clear mechanism to verify that past data is removed after opting out",
      ],
      severity: "critical",
      categories: ["data-collection", "implicit-consent", "data-retention"],
      tosSection: "Content",
    },
    {
      id: "chatgpt-broad-license",
      title: "Broad License Grant Over User Content",
      originalText:
        "You grant OpenAI a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your Content for the purpose of providing and improving our Services.",
      explanation:
        "Users grant OpenAI an expansive license to use, reproduce, modify, and distribute any content they submit. While OpenAI assigns output ownership to users, the license over inputs is broad and could allow OpenAI to use submitted content in ways users did not anticipate.",
      implications: [
        "Creative works submitted for feedback may be reproduced or modified by OpenAI",
        "Code submitted for review is licensed to OpenAI for broad use",
        "The license persists even if the user deletes their account",
      ],
      severity: "high",
      categories: ["content-rights", "data-retention"],
      tosSection: "Content",
    },
    {
      id: "chatgpt-no-accuracy-guarantee",
      title: "No Guarantee of Output Accuracy",
      originalText:
        "You should not rely on the Output as the sole source of truth or factual information, or as a substitute for professional advice.",
      explanation:
        "OpenAI explicitly disclaims any guarantee that ChatGPT outputs are accurate, complete, or reliable. Despite this, the conversational format encourages users to trust responses as authoritative. OpenAI accepts no liability for harm caused by acting on inaccurate outputs.",
      implications: [
        "Users who rely on ChatGPT for medical, legal, or financial guidance bear all risk",
        "No accountability mechanism exists when inaccurate outputs cause harm",
        "The disclaimer shifts all responsibility for verifying information to users",
      ],
      severity: "medium",
      categories: ["automated-decisions"],
      tosSection: "Disclaimer of Warranties",
    },
    {
      id: "chatgpt-conversation-retention",
      title: "Conversation Data Retention Practices",
      originalText:
        "We may retain Content for a reasonable period of time to comply with legal obligations, resolve disputes, and enforce our agreements, even after you delete your account.",
      explanation:
        "OpenAI retains conversation data even after users delete individual chats or their accounts. The retention period is vaguely defined, and there is no clear timeline for when data is fully purged. This means sensitive conversations may persist in OpenAI's systems indefinitely.",
      implications: [
        "Deleting a chat does not guarantee the data is removed from all systems",
        "Account deletion does not immediately erase all conversation history",
        "Retained data could be subject to legal requests or data breaches",
      ],
      severity: "high",
      categories: ["data-retention", "data-collection"],
      tosSection: "Data Retention",
    },
    {
      id: "chatgpt-third-party-plugins",
      title: "Third-Party Plugin Data Access",
      originalText:
        "If you use third-party plugins or integrations, your Content may be shared with those third parties in accordance with their own terms and privacy policies.",
      explanation:
        "When users enable third-party plugins or GPTs, conversation data may be sent to external developers and companies. These third parties operate under their own privacy policies, which may offer weaker protections than OpenAI's. Users may not fully understand what data is being shared.",
      implications: [
        "Plugin developers can access conversation content sent through their tools",
        "Third-party data handling practices may be less protective than OpenAI's",
        "Users may inadvertently share sensitive information with unknown third parties",
        "No standardized privacy requirements exist for plugin developers",
      ],
      severity: "high",
      categories: ["third-party-sharing", "data-collection"],
      tosSection: "Third-Party Services",
    },
  ],
  tags: [
    "ai",
    "chatbot",
    "machine-learning",
    "training-data",
    "content-license",
    "plugins",
  ],
};
