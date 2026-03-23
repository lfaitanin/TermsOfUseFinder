import { AnalyzedApp } from "../types";

export const spotify: AnalyzedApp = {
  slug: "spotify",
  name: "Spotify",
  company: "Spotify AB",
  icon: "spotify",
  description:
    "Music and podcast streaming platform with over 600 million users worldwide.",
  tosUrl: "https://www.spotify.com/legal/end-user-agreement/",
  tosLastUpdated: "2024-11-15",
  analysisDate: "2025-03-22",
  overallSeverity: "high",
  summary:
    "Spotify collects extensive data beyond what is necessary for music streaming, including voice data, sensor readings from devices, and inferred information about household members. Listening habits are used to build detailed behavioral profiles shared with advertising partners.",
  clauses: [
    {
      id: "spotify-voice-data",
      title: "Voice Data Collection",
      originalText:
        "We collect information about you when you use the Spotify Service, including your voice data when you use voice features.",
      explanation:
        "Spotify collects and processes voice recordings when users interact with voice-controlled features such as Hey Spotify. This audio data can reveal speech patterns, accents, emotional state, and ambient sounds in your environment.",
      implications: [
        "Voice recordings may capture background conversations and ambient audio",
        "Voice data can be used to build biometric voice profiles",
        "Speech patterns can reveal emotional state and personal characteristics",
      ],
      severity: "high",
      categories: ["data-collection", "surveillance"],
      tosSection: "Personal Data We Collect",
    },
    {
      id: "spotify-listening-profiling",
      title: "Behavioral Profiling from Listening Habits",
      originalText:
        "We collect and use your personal data in order to provide personalized content and advertising, understand your preferences, and to provide recommendations.",
      explanation:
        "Spotify builds detailed behavioral profiles based on listening history, including mood inference, activity patterns, time-of-day habits, and genre preferences. These profiles are used not only for recommendations but also to serve targeted advertising.",
      implications: [
        "Listening habits can reveal mental health states, political views, and religious beliefs",
        "Time-based listening patterns expose daily routines and sleep schedules",
        "Mood-based playlists allow inference of emotional and psychological states",
      ],
      severity: "high",
      categories: ["data-collection", "third-party-sharing"],
      tosSection: "How We Use Your Personal Data",
    },
    {
      id: "spotify-sensor-data",
      title: "Device Sensor Data Collection",
      originalText:
        "We collect information from your device, including sensor data such as accelerometer, gyroscope, and GPS data.",
      explanation:
        "Spotify collects sensor data from mobile devices including accelerometer, gyroscope, and location sensors. This goes well beyond what a music streaming service needs and can be used to infer physical activity, transportation mode, and precise location.",
      implications: [
        "Accelerometer data can reveal physical activities and movement patterns",
        "Combined sensor data can track transportation modes and daily commutes",
        "Sensor data collection persists even when not actively using the app",
      ],
      severity: "medium",
      categories: ["data-collection", "location-tracking"],
      tosSection: "Device Data",
    },
    {
      id: "spotify-third-party-ad-data",
      title: "Third-Party Advertising Data Sharing",
      originalText:
        "We may share your personal data with our advertising partners to deliver targeted ads and measure their effectiveness.",
      explanation:
        "Spotify shares user data with a broad network of advertising partners and data brokers. This includes listening habits, demographic information, and inferred interests, which are combined with data from other sources to build comprehensive advertising profiles.",
      implications: [
        "User data is combined with external data sources by ad partners",
        "Advertising profiles persist across platforms and services",
        "Users have limited visibility into which partners receive their data",
      ],
      severity: "high",
      categories: ["third-party-sharing", "data-collection"],
      tosSection: "Sharing Your Personal Data",
    },
    {
      id: "spotify-household-inference",
      title: "Household and Social Circle Inference",
      originalText:
        "We may infer information about you, including your interests, preferences, and the people around you based on your usage of the Spotify Service.",
      explanation:
        "Spotify infers information about users' household members, relationships, and social circles based on shared accounts, listening patterns, and device usage. This creates shadow profiles of people who may not have consented to data collection.",
      implications: [
        "Family members and roommates may be profiled without their knowledge",
        "Shared device usage exposes household composition and dynamics",
        "Inferred relationship data can be shared with advertising partners",
      ],
      severity: "medium",
      categories: ["data-collection", "implicit-consent", "surveillance"],
      tosSection: "Inferred Data",
    },
  ],
  tags: [
    "streaming",
    "music",
    "podcasts",
    "advertising",
    "voice-data",
    "behavioral-profiling",
  ],
};
