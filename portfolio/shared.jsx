// Shared primitives for both portfolio directions.

const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const DownloadIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);
const SparkleIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17z" />
  </svg>
);
const CommandIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6a3 3 0 10-3-3v18a3 3 0 103-3H6a3 3 0 103 3V3a3 3 0 10-3 3h12z"/>
  </svg>
);

// Case-study data — single source of truth, shared between the two directions.
const CASES = [
  {
    slug: "personalization",
    year: "2021–2025",
    company: "Salesforce",
    title: "Personalization Core Platform",
    kicker: "0→1 · 4-year initiative · Cross-cloud",
    tags: ["AI/ML UX", "0→1", "Enterprise"],
    blurb: "End-to-end personalization engine powering AI-driven experiences across Marketing Cloud — recommendations, decisioning, experimentation, and engagement signals.",
    outcome: "Shipped to enterprise customers; core to Marketing Cloud personalization.",
    accent: "linear-gradient(145deg, #0f0520 0%, #1e0b42 50%, #2d1060 100%)",
    hero: "portfolio/case-assets/personalization/hero-decisions-step.png",
  },
  {
    slug: "recommendations-engine",
    year: "2024–2025",
    company: "Salesforce",
    title: "AI Recommendations Engine",
    kicker: "Companion · Agentic UX · Recommenders",
    tags: ["Agentic AI", "NL Interfaces", "Companion"],
    blurb: "Companion to Personalization Core. Three connected surfaces — complex catalog filters, an agentic NL filter builder, and an agent-led recommender setup — that turn a deeply technical configuration problem into a marketer-friendly conversation.",
    outcome: "Filter rules and recommender setup that previously required Professional Services, now self-serve.",
    accent: "linear-gradient(145deg, #1a0633 0%, #3a0f6a 55%, #491cff 100%)",
  },
  {
    slug: "pulse-nexio",
    year: "2023–2024",
    company: "Tableau",
    title: "Tableau Pulse & Project Nexio",
    kicker: "Generative AI · Insight discovery",
    tags: ["Generative AI", "Data UX", "0→1"],
    blurb: "Design strategy for Tableau Pulse and 0→1 design for Project Nexio — validating interaction models that make AI outputs trustworthy and actionable for analysts.",
    outcome: "Metrics Digest, Pulse Homepage, AI insight flows shipped.",
    accent: "linear-gradient(145deg, #0d0d1a 0%, #1a0f3a 50%, #2d1060 100%)",
  },
  {
    slug: "data-stories",
    year: "2021–2022",
    company: "Tableau · Salesforce",
    title: "Data Stories — Salesforce's first NLG feature",
    kicker: "Post-acquisition integration · NLG",
    tags: ["NLG / AI Content", "Acquisition"],
    blurb: "Led integration of Narrative Science into Tableau, launching Data Stories — one of Salesforce's earliest NLG features — aligning two product cultures and design systems.",
    outcome: "First NLG feature shipped across the Salesforce ecosystem.",
    accent: "linear-gradient(145deg, #0a0f1e 0%, #0f1f3d 60%, #162952 100%)",
    hero: "portfolio/case-assets/data-stories/hero.png",
  },
  {
    slug: "experimentation",
    year: "2020–2022",
    company: "Salesforce",
    title: "Experimentation Infrastructure UX",
    kicker: "Systems design · A/B testing",
    tags: ["Systems", "Technical UX"],
    blurb: "A/B testing and experimentation interface for Salesforce Personalization — making statistical tooling usable for both data scientists and non-technical marketers.",
    outcome: "Self-serve experimentation, no eng support required.",
    accent: "linear-gradient(145deg, #110520 0%, #2a0a4a 55%, #491cff 100%)",
  },
];

const TESTIMONIALS = [
  {
    quote: "Aditya doesn't just design screens — he redesigns the problem. He's one of a small handful of designers I'd trust to own a 0→1 AI product end-to-end.",
    name: "PM, Salesforce",
    role: "Marketing Cloud Personalization",
  },
  {
    quote: "The clearest translator between ML research and a usable product I've worked with. Our shipped UX was dramatically better because of him.",
    name: "Eng Lead, Tableau",
    role: "Pulse & Project Nexio",
  },
  {
    quote: "He treats vibe-coding as a design medium, not a shortcut. The prototypes he built set the bar for the entire org.",
    name: "Design Director",
    role: "Salesforce",
  },
];

const NOW = [
  {
    label: "Active project at work",
    text: "Personalization Core — designing the configuration experience both inside the product and as a platform that integrates with other Salesforce clouds. Includes LLM-based recommender creation and filtering.",
  },
  {
    label: "Sharpening",
    text: "The new-age vibe-coding design process — using Claude, Cursor, and live prototypes as primary design tools, not afterthoughts.",
  },
];

Object.assign(window, {
  ArrowIcon, DownloadIcon, SparkleIcon, CommandIcon,
  CASES, TESTIMONIALS, NOW,
});
