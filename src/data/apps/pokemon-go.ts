import { AnalyzedApp } from "../types";

export const pokemonGo: AnalyzedApp = {
  slug: "pokemon-go",
  name: "Pokemon GO",
  company: "Niantic, Inc.",
  icon: "🔴",
  description:
    "Augmented reality mobile game where players catch virtual Pokemon in real-world locations using their phone's camera and GPS.",
  tosUrl: "https://nianticlabs.com/terms",
  tosLastUpdated: "2024-11-01",
  analysisDate: "2025-03-22",
  overallSeverity: "critical",
  summary:
    "Pokemon GO's Terms of Service and Privacy Policy grant Niantic extraordinarily broad rights over location data, camera footage, and environmental scans. The app's AR features enable Niantic to build detailed 3D maps of real-world environments at centimeter-level precision through its Visual Positioning System (VPS). Players generate this spatial data simply by playing the game, often without realizing the scope of what is being collected. Niantic retains a perpetual, worldwide license to all user-generated content and shares aggregated location intelligence with third parties.",
  clauses: [
    {
      id: "pokemon-go-vps-mapping",
      title: "3D World Mapping via AR Scanning",
      originalText:
        "Niantic collects visual information from your device camera and sensors when you use AR features, including images, depth data, and spatial mapping information, to build and improve Niantic's 3D world map and Visual Positioning System.",
      explanation:
        "When you use AR features or scan PokéStops, your phone's camera and sensors capture detailed 3D scans of your surroundings. Niantic uses this data to build a centimeter-precision 3D map of the real world through its Visual Positioning System (VPS). This map includes buildings, streets, parks, and private property that happens to be in range.",
      implications: [
        "Your phone acts as a surveying device, mapping physical spaces at centimeter-level detail for Niantic's proprietary 3D world map",
        "Private residences, businesses, and sensitive locations near PokéStops get scanned and added to Niantic's spatial database without the property owners' knowledge or consent",
        "The resulting 3D map has significant commercial and surveillance value, usable for navigation, advertising, urban planning, or potentially government applications",
        "Niantic has explicitly stated its ambition to build a 'planet-scale AR map' and players are the unpaid labor generating this asset",
      ],
      severity: "critical",
      categories: ["surveillance", "data-collection", "implicit-consent"],
      tosSection: "Privacy Policy - Information We Collect Automatically",
    },
    {
      id: "pokemon-go-precise-location",
      title: "Continuous Precise Location Tracking",
      originalText:
        "We collect precise location information from your device, including GPS coordinates, Wi-Fi access points, cell tower data, Bluetooth signals, and sensor data such as gyroscope, accelerometer, and compass readings.",
      explanation:
        "Pokemon GO requires continuous access to your precise GPS location, but it also collects Wi-Fi, Bluetooth, cell tower, and motion sensor data. Combined, these sources enable location accuracy far beyond standard GPS, and allow Niantic to track movement patterns, walking speed, elevation changes, and indoor positioning.",
      implications: [
        "Niantic builds a detailed profile of where you go, how long you stay, what routes you take, and how you move through spaces",
        "Location tracking persists in the background when Adventure Sync is enabled, even when the app is not actively open",
        "Combining GPS with Wi-Fi and Bluetooth signals enables indoor positioning, tracking your location inside buildings, malls, and private spaces",
        "Historical location data reveals sensitive patterns such as visits to medical facilities, places of worship, political gatherings, and personal relationships",
      ],
      severity: "critical",
      categories: ["location-tracking", "data-collection", "surveillance"],
      tosSection: "Privacy Policy - Location Information",
    },
    {
      id: "pokemon-go-perpetual-license",
      title: "Perpetual License to All User Content",
      originalText:
        "You grant Niantic a worldwide, nonexclusive, royalty-free, transferable, sublicensable, perpetual, irrevocable license to use, reproduce, modify, distribute, and display any content you submit, upload, or make available through the Services.",
      explanation:
        "Any content you create or contribute through the app, including AR scans, photos, PokéStop nominations, route data, and environmental scans, becomes licensed to Niantic forever. This license survives account deletion, is transferable to other companies, and can be sublicensed to any third party.",
      implications: [
        "Deleting your account does not revoke Niantic's rights to use your contributed scans, photos, and location data",
        "Niantic can sell, license, or transfer your contributed content to any third party without notifying you or sharing revenue",
        "AR scans of your neighborhood become Niantic's commercial asset in perpetuity",
        "If Niantic is acquired, all your contributed data transfers to the acquiring company under this license",
      ],
      severity: "high",
      categories: ["content-rights", "data-retention"],
      tosSection: "Terms of Service - Ownership; License Grant",
    },
    {
      id: "pokemon-go-third-party-sharing",
      title: "Broad Third-Party Data Sharing",
      originalText:
        "We may share aggregated or de-identified information about our users with third-party partners, including sponsors, advertisers, event collaborators, and analytics providers, for purposes including advertising, analytics, and research.",
      explanation:
        "Niantic shares user data with sponsors, advertisers, research partners, and event collaborators. While described as 'aggregated or de-identified,' research has repeatedly demonstrated that location data can be re-identified. Niantic's sponsored location partnerships (e.g., with McDonald's, Starbucks) inherently involve sharing foot traffic and player behavior data with commercial partners.",
      implications: [
        "Sponsored PokéStop and Gym partnerships are built on sharing player foot traffic data with corporate sponsors",
        "De-identified location data is notoriously re-identifiable, especially at the precision level Niantic collects",
        "Third-party researchers and analytics firms receive player behavior data that maps real-world movement patterns across millions of people",
        "Players have no visibility into which specific partners receive their data or what those partners do with it",
      ],
      severity: "high",
      categories: ["third-party-sharing", "location-tracking"],
      tosSection: "Privacy Policy - How We Share Information",
    },
    {
      id: "pokemon-go-forced-arbitration",
      title: "Mandatory Arbitration and Class Action Waiver",
      originalText:
        "You and Niantic agree that any dispute arising out of or relating to these Terms or the Services shall be resolved through binding individual arbitration, and you waive the right to participate in a class action lawsuit or class-wide arbitration.",
      explanation:
        "By using Pokemon GO, you agree to resolve all legal disputes through private arbitration rather than courts. You also waive your right to join class action lawsuits. There is a short opt-out window (typically 30 days from account creation), but most players miss it. This means even if Niantic suffered a massive data breach affecting millions, each affected user would need to pursue arbitration individually.",
      implications: [
        "Individual arbitration is expensive and time-consuming, effectively discouraging players from pursuing legitimate grievances",
        "Class action waiver prevents collective legal action even in cases of widespread harm like data breaches",
        "The opt-out window is brief and most players are unaware it exists",
        "Private arbitration proceedings lack the public accountability and precedent-setting effect of court cases",
      ],
      severity: "high",
      categories: ["forced-arbitration"],
      tosSection: "Terms of Service - Dispute Resolution",
    },
  ],
  tags: [
    "augmented-reality",
    "location-tracking",
    "3d-mapping",
    "gaming",
    "niantic",
    "ar-scanning",
    "spatial-data",
    "vps",
  ],
};
