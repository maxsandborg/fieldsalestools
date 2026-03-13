export type StackTool = {
  slug: string;
  name: string;
  role: string; // "Primary field CRM", "Route optimization", etc.
  why: string; // 1-2 sentences on why it's in this stack
  price: string;
  priceNote?: string;
  rating: number;
  reviewCount: number;
  keyFeatures: string[];
  toolsUrl: string; // internal link to /tools/[slug]
  website: string;
  logo: string;
};

export type Stack = {
  slug: string;
  category: "industry" | "team-size";
  industry?: string;
  teamSize?: string;
  title: string;
  headline: string; // bold h1 for the page
  metaDescription: string;
  intro: string; // 2-3 paragraph article intro
  heroGradient: string; // CSS gradient for hero
  icon: string; // emoji
  totalCostLow: string; // e.g. "$39"
  totalCostHigh: string; // e.g. "$88"
  totalCostNote: string; // "per rep/mo, billed annually"
  tools: StackTool[];
  whyThisStack: string; // editorial "why this combination works"
  whoIsItFor: string;
  verdict: string;
  faqs: { question: string; answer: string }[];
  lastUpdated: string;
};

export const stacks: Stack[] = [
  // ─── INDUSTRY STACKS ──────────────────────────────────────────────────────

  {
    slug: "roofing",
    category: "industry",
    industry: "Roofing",
    title: "Roofing Tech Stack (2026)",
    headline: "The Roofing Sales Tech Stack That Top Companies Actually Use",
    metaDescription:
      "The complete roofing sales tech stack for 2026. Tools successful roofing companies use, costs, and why this combination works for D2D teams.",
    icon: "🏠",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1e3a5f 50%, #1d4ed8 100%)",
    totalCostLow: "$39",
    totalCostHigh: "$75",
    totalCostNote: "per rep/mo (billed annually, 3-rep team)",
    intro:
      "Roofing is one of the most competitive D2D sales verticals in the US. A rep knocking doors in a storm-hit neighborhood has maybe 30 seconds to book an inspection before the next company shows up. The tools you put in their hands determine how many of those 30-second windows turn into signed jobs.\n\nThe best-performing roofing companies aren't using one all-in-one platform. They're running a 2-3 tool stack: a primary canvassing and CRM platform, a proposal and estimation tool, and in some cases a dedicated mapping tool for storm-chasing routes. Each tool does one job well. Together, they cover the full roofing sales motion from door knock to signed contract.\n\nThis guide covers the specific tools used by high-performing roofing sales teams in 2026, why each one earns its place in the stack, and what it actually costs per rep.",
    whoIsItFor:
      "Roofing companies (2–200 reps) running D2D storm restoration or new roof sales in residential markets. Particularly suited for companies doing retail, insurance, or hybrid roofing sales.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary canvassing platform & field CRM",
        why:
          "SalesRabbit is the most-used D2D platform in roofing by a significant margin. Its territory heat maps, DataGrid AI lead scoring (which identifies high-propensity households before reps knock), and gamified leaderboards are built specifically for the door-knock workflow. The January 2026 acquisition of Roofle — which adds e-commerce roof pricing, AI financing, and digital proposals — makes SalesRabbit the closest thing to an all-in-one roofing platform available.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite tier available",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Territory heat maps & assignment",
          "DataGrid AI lead scoring",
          "Rep GPS tracking",
          "Roofle integration (e-commerce pricing)",
          "Digital proposals & e-signature",
          "Gamified leaderboards",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "sunbase",
        name: "Sunbase",
        role: "Roofing CRM & job management",
        why:
          "Sunbase bridges the gap between field sales and operations. Where SalesRabbit manages the canvassing workflow, Sunbase handles what comes after: estimates, insurance claims workflow, job scheduling, and customer communications. Roofing companies using both report significantly less slippage between signed inspection and completed job.",
        price: "Contact for pricing",
        priceNote: "typically $40–60/user/mo",
        rating: 4.3,
        reviewCount: 89,
        keyFeatures: [
          "Roofing-specific CRM",
          "Insurance claims workflow",
          "Estimate & proposal builder",
          "Job scheduling & dispatch",
          "Customer portal",
        ],
        toolsUrl: "/tools/sunbase",
        website: "https://sunbasedata.com",
        logo: "☀️",
      },
      {
        slug: "knockbase",
        name: "Knockbase",
        role: "Canvassing & territory mapping (optional — for storm-chase teams)",
        why:
          "For roofing companies running high-volume storm-restoration canvassing — especially with multiple crews hitting different neighborhoods simultaneously — Knockbase's pin-drop canvassing maps and territory heat visualization add a layer of granularity that SalesRabbit's territory management alone doesn't cover. Not essential for every roofing company, but valuable for storm-chasing operations with 10+ canvassers.",
        price: "Contact for pricing",
        priceNote: "optional addition to the stack",
        rating: 4.2,
        reviewCount: 54,
        keyFeatures: [
          "Real-time canvassing heat maps",
          "Multi-crew territory coordination",
          "Pin-drop lead tracking",
          "Mobile-first for field reps",
        ],
        toolsUrl: "/tools/knockbase",
        website: "https://knockbase.com",
        logo: "🚪",
      },
    ],
    whyThisStack:
      "The roofing sales motion has two distinct phases that require different tools. Phase one is acquisition: finding the right doors to knock, assigning territory to reps, tracking what happened at each door, and booking the inspection. SalesRabbit owns this phase — it's been built specifically for it over 12+ years, and 85,000+ reps already use it in this vertical.\n\nPhase two is conversion and execution: turning the inspection into a signed job, managing the insurance claim (for retail storm work), scheduling the crew, and communicating with the homeowner. This is where Sunbase fills a real gap. Most roofing companies using only SalesRabbit manage phase two in spreadsheets or a generic CRM — and that's where deals slip.\n\nThe result: SalesRabbit maximizes inspection bookings; Sunbase maximizes close rate and job completion after the booking. Knockbase is additive for storm teams running 10+ canvassers across multiple neighborhoods at once.",
    verdict:
      "For a roofing company with 3–20 reps, start with SalesRabbit. Add Sunbase when you hit the point where managing jobs in spreadsheets is losing you money (usually around 5–10 jobs/week). Add Knockbase if you're running storm-restoration campaigns with multiple canvassing crews in parallel.",
    faqs: [
      {
        question: "What software do roofing companies use for door-to-door sales?",
        answer:
          "The most common setup for roofing D2D teams is SalesRabbit for canvassing and territory management, combined with a roofing-specific CRM like Sunbase or JobNimbus for job management after the inspection is booked. SalesRabbit's acquisition of Roofle in January 2026 has made it the most complete roofing sales platform available.",
      },
      {
        question: "How much does roofing sales software cost per rep?",
        answer:
          "A typical roofing sales stack costs $39–75 per rep per month (billed annually). SalesRabbit starts at $39/user/mo. Sunbase typically runs $40–60/user/mo depending on team size. Many companies start with SalesRabbit alone at $39/user/mo and add Sunbase when volume justifies the investment.",
      },
      {
        question: "Does SalesRabbit work for roofing?",
        answer:
          "Yes — SalesRabbit is arguably the #1 platform for roofing D2D sales. It's used by tens of thousands of roofing reps across the US. The January 2026 acquisition of Roofle added e-commerce roof pricing, AI financing, and digital proposal tools, making it the most complete roofing-specific sales platform available.",
      },
      {
        question: "What's the difference between SalesRabbit and JobNimbus for roofing?",
        answer:
          "SalesRabbit handles the door-knock-to-inspection workflow: territory mapping, canvassing tracking, lead management, and rep performance. JobNimbus handles the inspection-to-completed-job workflow: estimates, proposals, insurance claims, job scheduling, and invoicing. They solve different problems and are often used together.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "solar",
    category: "industry",
    industry: "Solar",
    title: "Solar Sales Tech Stack (2026)",
    headline: "The Solar Sales Tech Stack That Closes More Doors in 2026",
    metaDescription:
      "Complete solar sales tech stack for 2026. Tools top solar companies use for D2D canvassing, lead management, and closing — with real pricing.",
    icon: "⚡",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #d97706 100%)",
    totalCostLow: "$39",
    totalCostHigh: "$88",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Solar is the most data-intensive D2D vertical in field sales. Before a rep even knocks a door, they need to know if the house has the right roof angle, utility rates that make solar pencil out, and whether the homeowner is likely to be receptive. That kind of intelligence — and the tools to act on it — is what separates the top solar sales organizations from the average.\n\nThe best solar sales stacks in 2026 combine a primary canvassing platform with territory heat maps and AI lead scoring, a proposal tool that can generate a custom solar quote at the door, and a CRM that tracks the deal from first knock through PTO (permission to operate).\n\nThis guide breaks down the tools, the rationale for each, and realistic cost expectations.",
    whoIsItFor:
      "Solar installation companies (5–500 reps) running D2D residential canvassing campaigns. Particularly relevant for companies using a sit-down appointment model after initial door knock.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary canvassing platform, territory management & lead tracking",
        why:
          "SalesRabbit's DataGrid AI is the most sophisticated pre-knock intelligence tool available for solar. It scores households by purchase propensity using utility data, home characteristics, and demographic signals — so reps spend time on doors most likely to convert, not random neighborhoods. Combined with territory heat maps that show where reps have been and where leads are clustering, SalesRabbit gives solar managers real-time visibility into campaign performance.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite tier for solo reps",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "DataGrid AI — household lead scoring",
          "Territory heat maps",
          "Rep GPS tracking",
          "Appointment setting from the door",
          "Gamification & leaderboards",
          "Digital contracts",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "spotio",
        name: "SPOTIO",
        role: "Advanced territory analytics & multi-channel outreach (for larger teams)",
        why:
          "For solar companies with 20+ reps across multiple territories, SPOTIO's territory analytics (9.7/10 on G2 — highest in the category) and multi-channel outreach add a layer of management visibility that SalesRabbit alone doesn't provide. SPOTIO's integration with Salesforce and HubSpot is also deeper, which matters for solar companies with complex CRM setups. The 5-user minimum makes it unsuitable for small teams, but for scaling solar operations it's the analytics-first alternative.",
        price: "$25/user/mo",
        priceNote: "5-user minimum · annual contract required",
        rating: 4.4,
        reviewCount: 387,
        keyFeatures: [
          "Territory analytics (9.7/10 G2)",
          "Multi-channel sequences (call, text, email)",
          "SPOTIO AI coaching",
          "Salesforce & HubSpot native integration",
          "Performance dashboards",
        ],
        toolsUrl: "/tools/spotio",
        website: "https://spotio.com",
        logo: "📍",
      },
      {
        slug: "knockio",
        name: "Knockio",
        role: "Canvassing & door-knock coordination",
        why:
          "Knockio excels at the specific problem of coordinating multiple canvassers in the same neighborhood without overlap or confusion. Its real-time canvassing maps show which doors have been knocked, by whom, and what the result was — reducing the wasted effort of multiple reps hitting the same streets. For solar campaigns with setter/closer teams, Knockio's appointment handoff workflow is particularly smooth.",
        price: "Affordable — contact for pricing",
        priceNote: "typically lower cost than SalesRabbit",
        rating: 4.3,
        reviewCount: 72,
        keyFeatures: [
          "Real-time multi-rep canvassing coordination",
          "Setter/closer appointment handoff",
          "Knock result tracking by door",
          "Territory overlap prevention",
        ],
        toolsUrl: "/tools/knockio",
        website: "https://knockio.com",
        logo: "🔔",
      },
    ],
    whyThisStack:
      "Solar has the highest average deal value of any D2D residential vertical — a single closed deal can be worth $20,000–50,000 in revenue. That math justifies investing in the best available pre-knock intelligence and post-knock follow-up automation.\n\nSalesRabbit's DataGrid AI is the best pre-knock intelligence tool available specifically for residential solar. Knowing which houses on a street are most likely to convert before you start knocking isn't just efficient — it's a competitive advantage in markets where 4–5 solar companies are hitting the same neighborhoods.\n\nFor companies scaling past 20 reps, SPOTIO's analytics layer helps managers spot which territories, rep profiles, and times of day are generating the best conversion rates. That data compounds over time into genuine strategic advantage. Knockio's canvassing coordination is particularly valuable for setter/closer models where you need seamless handoff between the rep who books the appointment and the closer who runs it.",
    verdict:
      "Small solar teams (under 15 reps): SalesRabbit only — its free Lite tier removes evaluation risk entirely. Mid-size teams (15–50 reps): SalesRabbit + Knockio for canvassing coordination. Large operations (50+ reps): Consider SPOTIO for analytics depth, or run SalesRabbit + SPOTIO in parallel for different team functions.",
    faqs: [
      {
        question: "What software do solar sales companies use for D2D canvassing?",
        answer:
          "The most widely used solar D2D platform is SalesRabbit, with 85,000+ reps across the US — the majority in solar and roofing. SPOTIO is the second most common choice for larger solar operations that need deeper territory analytics and enterprise CRM integrations. Knockio is popular for companies running setter/closer canvassing models.",
      },
      {
        question: "How much does solar sales software cost?",
        answer:
          "A solar sales tech stack typically costs $39–88 per rep per month. SalesRabbit starts at $39/user/mo (annual). SPOTIO starts at $25/user/mo with a 5-user minimum ($125/mo minimum). Knockio is typically lower-cost. Many solar teams start with SalesRabbit alone and add tools as they scale.",
      },
      {
        question: "Does SalesRabbit have AI for solar lead scoring?",
        answer:
          "Yes — SalesRabbit's DataGrid AI scores residential households by solar purchase propensity using utility data, home characteristics, and demographic signals. Reps see which homes on a street are high-propensity before they knock, which concentrates effort on the highest-converting doors.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "pest-control",
    category: "industry",
    industry: "Pest Control",
    title: "Pest Control Sales Tech Stack (2026)",
    headline: "The Pest Control Sales Stack for D2D Teams in 2026",
    metaDescription:
      "The best field sales tech stack for pest control companies in 2026. Tools used by top D2D pest control teams, cost per rep, and why each tool earns its place.",
    icon: "🐛",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #059669 100%)",
    totalCostLow: "$25",
    totalCostHigh: "$55",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Pest control is a volume-driven D2D business. Reps knock dozens of doors per day, pitch a subscription service (not a one-time sale), and need to handle immediate objections fast. The sales cycle is short — same-day or next-day close — which means the tool that helps reps cover the most doors and capture leads cleanest wins.\n\nThe right pest control sales stack keeps it simple: a primary canvassing tool that tracks doors, assigns neighborhoods, and logs outcomes, paired with a field service platform that handles scheduling and recurring subscription management. Together they bridge the gap between new customer acquisition and long-term retention.",
    whoIsItFor:
      "Pest control companies (3–100 reps) running residential D2D new customer acquisition campaigns. Works for both seasonal push campaigns and year-round canvassing operations.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary D2D canvassing platform",
        why:
          "SalesRabbit is the dominant platform for pest control D2D sales. Its territory management lets managers assign and rotate neighborhoods systematically, and the gamification layer (leaderboards, contests, rep challenges) is particularly effective in the high-volume, commission-driven pest control sales culture. The free Lite tier lets solo reps and small companies evaluate it without financial commitment.",
        price: "$39/user/mo",
        priceNote: "annual · Free Lite tier",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Territory assignment & heat maps",
          "Lead tracking by door",
          "Gamification & leaderboards",
          "Rep GPS tracking",
          "Digital contracts & e-signature",
          "Free Lite tier for solo reps",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "knockio",
        name: "Knockio",
        role: "Door-knock coordination & canvassing maps",
        why:
          "For pest control companies running seasonal blitzes with multiple crews hitting the same neighborhoods, Knockio prevents the #1 canvassing inefficiency: multiple reps knocking the same door on the same day. Its real-time multi-rep canvassing maps show every rep's location and knock results live, so managers can redirect crews in real time and maximize neighborhood coverage.",
        price: "Contact for pricing",
        priceNote: "typically more affordable than SalesRabbit",
        rating: 4.3,
        reviewCount: 72,
        keyFeatures: [
          "Multi-rep canvassing coordination",
          "Real-time knock result tracking",
          "Duplicate knock prevention",
          "Mobile-optimized for high-volume days",
        ],
        toolsUrl: "/tools/knockio",
        website: "https://knockio.com",
        logo: "🔔",
      },
    ],
    whyThisStack:
      "Pest control D2D has a simple loop: knock doors → pitch subscription → sign digital contract → hand off to service. The sales motion doesn't need complex analytics or AI — it needs speed, volume, and clean handoff. SalesRabbit optimizes the knock-to-sign part of that loop. Knockio handles the coordination problem when multiple reps are working the same subdivision.\n\nPest control companies don't need to spend $50+/user on enterprise software. The $25–39 range covers everything a field sales team needs for new customer acquisition. The investment in good canvassing tools compounds over time: systematic territory coverage, captured knock history, and rep performance data build into genuine operational leverage.",
    verdict:
      "Start with SalesRabbit. The free Lite tier lets you validate the workflow before committing. Add Knockio when you're running multi-crew blitzes and losing time to coordination overhead. Most pest control companies don't need a third tool — keep the stack lean.",
    faqs: [
      {
        question: "What software do pest control companies use for door-to-door sales?",
        answer:
          "SalesRabbit is the most commonly used D2D platform in pest control. Its territory management, digital contracts, and gamification are well-suited to the high-volume, commission-driven canvassing culture. Some companies add Knockio for multi-crew coordination during seasonal blitzes.",
      },
      {
        question: "Is SalesRabbit good for pest control?",
        answer:
          "Yes — pest control is one of SalesRabbit's primary verticals alongside solar and roofing. Its territory heat maps, digital contract signing, and rep performance leaderboards match the pest control sales model well. The free Lite tier is a good starting point for small teams.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "hvac",
    category: "industry",
    industry: "HVAC",
    title: "HVAC Sales Tech Stack (2026)",
    headline: "The HVAC Sales Tech Stack for Field Teams in 2026",
    metaDescription:
      "The best sales tech stack for HVAC companies in 2026. Tools for D2D and service sales teams, route optimization, and field CRM — with honest pricing.",
    icon: "❄️",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #0ea5e9 100%)",
    totalCostLow: "$39",
    totalCostHigh: "$88",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "HVAC field sales runs two distinct motions that often exist inside the same company: new customer acquisition through D2D canvassing (particularly in shoulder seasons for tune-ups and replacement leads) and account management with existing commercial and residential service customers.\n\nThe tools that work for each motion are different. D2D canvassing needs territory maps, lead tracking, and fast mobile workflows. Account management needs route optimization, visit logging, and CRM integration. The right HVAC sales stack depends on which motion your team runs — or, for companies that run both, how to tool up each team appropriately.",
    whoIsItFor:
      "HVAC companies with field sales or service sales teams — both residential D2D acquisition and commercial account management reps. Covers SMB (3–20 reps) through mid-market (20–100 reps) organizations.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "D2D canvassing & residential lead acquisition",
        why:
          "For HVAC companies with residential canvassing teams — particularly those doing shoulder-season tune-up campaigns or replacement lead generation — SalesRabbit is the most purpose-built option available. Territory heat maps let managers assign specific neighborhoods for summer AC and fall heating campaigns, and the digital contract workflow gets maintenance agreements signed at the door.",
        price: "$39/user/mo",
        priceNote: "annual · Free Lite tier for solo reps",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Territory assignment for seasonal campaigns",
          "Digital maintenance agreement signing",
          "Lead tracking by address",
          "Rep GPS & activity tracking",
          "Gamified leaderboards",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "badger-maps",
        name: "Badger Maps",
        role: "Route optimization for commercial & service account reps",
        why:
          "For HVAC reps managing commercial accounts — visiting building managers, property management companies, or existing service customers — Badger Maps' route optimization is the right tool. Its Lasso feature lets reps draw a region, pull all accounts in that area, and build an optimized multi-stop route in seconds. The 9.4/10 support score on G2 means implementation issues get resolved fast.",
        price: "$49/user/mo",
        priceNote: "annual · 14-day trial + 90-day money-back guarantee",
        rating: 4.7,
        reviewCount: 570,
        keyFeatures: [
          "Multi-stop route optimization",
          "Lasso territory planning",
          "CRM sync (Salesforce, HubSpot, Zoho)",
          "Visit logging & check-ins",
          "Account history at each stop",
        ],
        toolsUrl: "/tools/badger-maps",
        website: "https://badgermaps.com",
        logo: "🦡",
      },
    ],
    whyThisStack:
      "HVAC companies that run both residential canvassing and commercial account management often make the mistake of trying to use one tool for both motions. It never works well — canvassing tools are optimized for high-volume door-knock workflows; account management tools are optimized for visit planning and CRM sync. Using the wrong tool for the wrong motion costs reps time every day.\n\nThe clean solution: SalesRabbit for residential D2D reps, Badger Maps for commercial account reps. Each team gets a tool built for their specific workflow, and management gets consistent data on both motions. The cost difference ($39 vs $49/user) is immaterial compared to the efficiency gain.",
    verdict:
      "D2D residential team only: SalesRabbit. Commercial/service account team only: Badger Maps. Both teams under one roof: use both — don't force one tool onto the wrong motion.",
    faqs: [
      {
        question: "What sales software do HVAC companies use?",
        answer:
          "HVAC companies typically use different tools depending on their sales motion. D2D residential teams predominantly use SalesRabbit. Commercial account management reps tend to use route optimization tools like Badger Maps or Map My Customers. Companies running both motions often run both tools simultaneously.",
      },
      {
        question: "Does HVAC need field sales software or field service software?",
        answer:
          "Both — but they serve different functions. Field sales software (SalesRabbit, Badger Maps) handles new customer acquisition and account management. Field service software (ServiceTitan, Jobber, Housecall Pro) handles dispatching, job management, and invoicing after the sale. Most professional HVAC companies run both.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "telecom-fiber",
    category: "industry",
    industry: "Telecom & Fiber",
    title: "Telecom & Fiber Sales Stack (2026)",
    headline: "The Telecom & Fiber D2D Sales Stack for 2026",
    metaDescription:
      "The complete tech stack for telecom and fiber D2D sales teams in 2026. Tools used by top ISP and fiber sales organizations, pricing, and honest recommendations.",
    icon: "📡",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #7c3aed 100%)",
    totalCostLow: "$25",
    totalCostHigh: "$64",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Fiber and telecom D2D is one of the fastest-growing field sales verticals in the US, driven by the ongoing fiber buildout. ISPs deploying new infrastructure in a market have a narrow window to convert households before competitors arrive — which puts a premium on the tools that help canvassing teams maximize speed and coverage.\n\nTelecom D2D has a specific constraint that other verticals don't: address eligibility. Reps can only sell to addresses that are on the serviceability map. The best telecom sales stacks integrate that constraint directly — showing reps exactly which doors are serviceable and which aren't before they walk up the driveway.",
    whoIsItFor:
      "Telecom companies, ISPs, and fiber internet providers running residential or commercial D2D sales campaigns. Relevant for both in-house canvassing teams and outsourced sales organizations.",
    tools: [
      {
        slug: "spotio",
        name: "SPOTIO",
        role: "Primary D2D platform — territory analytics & multi-channel outreach",
        why:
          "SPOTIO is the most-used enterprise D2D platform in telecom. Its territory analytics (9.7/10 on G2) give managers real-time visibility into coverage rates by address, allowing rapid redeployment of canvassing resources to under-covered streets. The multi-channel outreach feature — combining door knocks, texts, and calls in a single workflow — is particularly effective for telecom's longer lead nurture cycle compared to one-call-close verticals.",
        price: "$25/user/mo",
        priceNote: "5-user minimum · annual contract",
        rating: 4.4,
        reviewCount: 387,
        keyFeatures: [
          "Territory analytics (9.7/10 G2)",
          "Multi-channel sequences (door, text, call)",
          "Address-level lead tracking",
          "Salesforce & HubSpot integration",
          "Rep performance dashboards",
          "SPOTIO AI coaching",
        ],
        toolsUrl: "/tools/spotio",
        website: "https://spotio.com",
        logo: "📍",
      },
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "D2D canvassing — smaller teams & satellite crews",
        why:
          "For telecom companies running smaller regional crews or satellite expansion teams, SalesRabbit's lower entry price and free Lite tier make it the practical choice. It covers the core canvassing workflow — territory maps, lead tracking, digital contracts, GPS tracking — without SPOTIO's 5-user minimum and annual contract requirement. Many telecom companies use SalesRabbit for expansion crews and SPOTIO for their core markets.",
        price: "$39/user/mo",
        priceNote: "annual · Free Lite tier",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Territory management",
          "Digital contract signing",
          "Rep GPS tracking",
          "Lead status by address",
          "Free Lite tier for evaluation",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
    ],
    whyThisStack:
      "Telecom D2D is an analytics-driven operation at scale. The ISPs deploying fiber in 2025–2026 are sophisticated buyers — they know their cost per acquisition, they track coverage rates by census block, and they measure canvassing performance weekly. SPOTIO's analytics and reporting depth match that operational maturity.\n\nFor smaller telecom operations or companies building out new territories, SalesRabbit's lower cost and free entry tier makes it the smarter starting point. Once a market is proven and the team scales past 15 reps, the analytics investment in SPOTIO typically pays back within a few months through better territory allocation.",
    verdict:
      "Under 10 reps or evaluating the channel: SalesRabbit. 10+ reps in a proven market: SPOTIO. Large ISP with multiple regional teams: consider running both — SPOTIO for core markets, SalesRabbit for expansion territories.",
    faqs: [
      {
        question: "What software do fiber and ISP companies use for D2D sales?",
        answer:
          "The most common tools in telecom D2D are SPOTIO (for mid-market and enterprise deployments) and SalesRabbit (for smaller teams and expansion markets). Both handle territory management, lead tracking, and CRM integrations. SPOTIO has stronger analytics for large-scale operations; SalesRabbit has a lower barrier to entry and a free tier.",
      },
      {
        question: "How do fiber companies track door-to-door canvassing?",
        answer:
          "Most professional fiber sales teams use dedicated D2D platforms like SPOTIO or SalesRabbit that track every door knock by address — recording when it was knocked, by whom, what the result was, and when follow-up is needed. This address-level data integrates with serviceability maps to ensure reps only spend time on serviceable addresses.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "medical-devices",
    category: "industry",
    industry: "Medical Devices",
    title: "Medical Device Sales Tech Stack (2026)",
    headline: "The Medical Device Sales Rep Tech Stack for 2026",
    metaDescription:
      "Best field sales tech stack for medical device reps. Route optimization, CRM integration, visit tracking, and pricing for med device teams.",
    icon: "🏥",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #10b981 100%)",
    totalCostLow: "$49",
    totalCostHigh: "$99",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Medical device reps don't knock doors — they manage territories of hospitals, clinics, surgical centers, and physician offices. The job is about maximizing face time with the right people at the right accounts. A rep covering 80 accounts across a three-state territory lives and dies by their route planning and visit consistency.\n\nThe medical device sales stack looks nothing like the D2D canvassing stack. There are no heat maps, no lead scoring by household — instead, the priorities are route efficiency, complete account history at each visit, and seamless CRM sync to track relationship depth over time.",
    whoIsItFor:
      "Medical device and pharmaceutical sales reps managing account territories — visiting hospitals, surgery centers, clinics, and physician offices. Relevant for individual reps through large enterprise sales organizations.",
    tools: [
      {
        slug: "badger-maps",
        name: "Badger Maps",
        role: "Route optimization & account territory management",
        why:
          "Badger Maps is the category standard for medical device field reps. Its Lasso tool — draw a region, pull all accounts, build an optimized route — addresses the core efficiency problem for reps covering large geographic territories. Native CRM integrations with Salesforce, HubSpot, Dynamics, and Zoho mean reps see full account history before each visit and log call notes that sync back automatically. The 9.4/10 support score means reps get help fast when issues arise.",
        price: "$49/user/mo",
        priceNote: "annual · 14-day trial + 90-day money-back",
        rating: 4.7,
        reviewCount: 570,
        keyFeatures: [
          "Multi-stop route optimization",
          "Lasso territory planning",
          "Native Salesforce, HubSpot, Dynamics, Zoho sync",
          "Visit logging & check-in",
          "Account history access pre-visit",
          "9.4/10 G2 support score",
        ],
        toolsUrl: "/tools/badger-maps",
        website: "https://badgermaps.com",
        logo: "🦡",
      },
      {
        slug: "map-my-customers",
        name: "Map My Customers",
        role: "Visual field CRM & account pipeline management",
        why:
          "For medical device teams that need a more CRM-forward interface — managing deals in various stages across their account territory — Map My Customers provides a visual pipeline view on a map that Badger Maps doesn't offer. The ability to see all accounts geographically while understanding where each sits in the sales pipeline helps reps prioritize visits by opportunity value rather than just proximity.",
        price: "$60/user/mo",
        priceNote: "annual billing",
        rating: 4.4,
        reviewCount: 280,
        keyFeatures: [
          "Map-based pipeline management",
          "Account visit planning",
          "CRM sync (Salesforce, HubSpot, Zoho)",
          "Activity logging by account",
          "Sales funnel visualization on map",
        ],
        toolsUrl: "/tools/map-my-customers",
        website: "https://mapmycustomers.me",
        logo: "📍",
      },
    ],
    whyThisStack:
      "Medical device sales has a long relationship cycle and high account complexity. A single hospital account might involve 3–5 stakeholders, a 6–12 month evaluation process, and recurring reorder relationships after the initial close. The tools that support this motion need to handle relationship depth, not just visit volume.\n\nBadger Maps handles the routing efficiency problem — ensuring reps spend as much time in front of customers as possible, rather than driving. Map My Customers adds the pipeline visibility layer — helping reps prioritize accounts by opportunity stage rather than just physical proximity. Together they address the two biggest levers in medical device sales productivity: efficiency and prioritization.",
    verdict:
      "Start with Badger Maps for route optimization — it's the most proven tool in this category with the deepest CRM integrations. Add Map My Customers if your reps need a pipeline-first interface rather than a route-first interface, or if account prioritization by deal stage is a bigger problem than routing efficiency.",
    faqs: [
      {
        question: "What CRM do medical device sales reps use?",
        answer:
          "Most enterprise medical device companies use Salesforce as their primary CRM, often with Badger Maps or Veeva overlaid for territory management and route optimization. Smaller and mid-market device companies often use Badger Maps as a standalone field CRM or connect it to HubSpot or Dynamics.",
      },
      {
        question: "What is the best route planning app for medical device reps?",
        answer:
          "Badger Maps is consistently rated the best route optimization tool for medical device field reps, with 100,000+ users and a 4.7/5 G2 rating. Its Lasso tool, deep CRM integrations, and 9.4/10 support score make it the category standard. Map My Customers is a strong alternative for teams that prioritize pipeline visibility over pure routing.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "distribution",
    category: "industry",
    industry: "Distribution",
    title: "Distribution & Wholesale Stack (2026)",
    headline: "The Field Sales Tech Stack for Distribution & Wholesale Teams",
    metaDescription:
      "The best field sales tech stack for distribution and wholesale companies in 2026. Route optimization, order capture, visit tracking, and CRM tools reviewed.",
    icon: "📦",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #dc2626 100%)",
    totalCostLow: "$29",
    totalCostHigh: "$79",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Distribution field sales is built around repeat visits and order capture. Reps drive routes visiting retail stores, restaurants, or industrial accounts — logging orders, checking inventory levels, building relationships, and ensuring their products have the right placement. The sales cycle is measured in call frequency, not deal stages.\n\nThe tools that matter in distribution are different from D2D or medical device sales. Route efficiency is critical (reps visit 15–25 accounts per day). Order capture needs to be fast and accurate. And the data captured at each visit — facings, stock levels, competitor presence — needs to sync back to a CRM that tracks account health over time.",
    whoIsItFor:
      "Distribution, wholesale, food & beverage, and CPG companies with field sales reps visiting accounts on regular call cycles. Relevant for SMB (5–30 reps) through large enterprise distribution operations.",
    tools: [
      {
        slug: "badger-maps",
        name: "Badger Maps",
        role: "Route optimization & account visit management",
        why:
          "Distribution reps living in a route optimization world — 15+ stops per day, multi-city territories — need Badger Maps' best-in-class routing. The Lasso tool makes building optimized daily routes from an account list a 30-second task. CRM integrations with Salesforce, HubSpot, Dynamics, and Zoho mean order history and account notes are accessible at each stop. With 100,000+ users and $8M ARR, Badger Maps is the most financially stable independent field sales tool in the market.",
        price: "$49/user/mo",
        priceNote: "annual · 90-day money-back guarantee",
        rating: 4.7,
        reviewCount: 570,
        keyFeatures: [
          "Multi-stop route optimization (15+ stops/day)",
          "Lasso territory planning",
          "CRM sync (Salesforce, HubSpot, Dynamics, Zoho, Pipedrive)",
          "Visit check-in & activity logging",
          "Account history at each stop",
        ],
        toolsUrl: "/tools/badger-maps",
        website: "https://badgermaps.com",
        logo: "🦡",
      },
      {
        slug: "repsly",
        name: "Repsly",
        role: "Retail execution, order capture & shelf audits",
        why:
          "For distribution companies selling through retail, Repsly's retail execution workflows handle what Badger Maps doesn't: order capture with product catalogs, shelf audit documentation with photos, promotional compliance tracking, and distributor/broker performance management. It's the field execution layer that sits between the rep's visit and the back-office inventory system.",
        price: "$29/user/mo",
        priceNote: "Starter plan · paid plans from $29",
        rating: 4.3,
        reviewCount: 127,
        keyFeatures: [
          "Order capture with product catalog",
          "Shelf audit (photo documentation)",
          "Promotional compliance tracking",
          "Visit forms & checklists",
          "Retail execution analytics",
        ],
        toolsUrl: "/tools/repsly",
        website: "https://repsly.com",
        logo: "🛒",
      },
      {
        slug: "repmove",
        name: "RepMove",
        role: "Field CRM & activity tracking (SMB alternative)",
        why:
          "For distribution companies that want an all-in-one field CRM without the complexity of running separate route and order-capture tools, RepMove delivers more features per dollar than almost any other option. At $20/user/mo with a 4.9/5 G2 rating and a perfect 5.0 on Capterra, it's particularly well-suited to SMB distributors who don't need Badger Maps' advanced routing or Repsly's retail execution workflows.",
        price: "$20/user/mo",
        priceNote: "Flex plan · no minimum seats",
        rating: 4.9,
        reviewCount: 38,
        keyFeatures: [
          "Route optimization",
          "Account visit logging",
          "AI sales assistant",
          "5,000+ integrations",
          "Mileage & expense tracking",
          "No seat minimum",
        ],
        toolsUrl: "/tools/repmove",
        website: "https://repmove.app",
        logo: "🚚",
      },
    ],
    whyThisStack:
      "Distribution field sales has two distinct needs that rarely get served by one tool. Routing efficiency is the first: getting 15–25 accounts visited per day in the most efficient order is a routing math problem, and Badger Maps is the best solver of that problem. Order capture and retail execution is the second: recording orders, checking compliance, auditing shelves — workflows that Repsly was built specifically to handle.\n\nFor SMB distributors who don't want to manage two tools, RepMove is the most capable single-tool solution in the category at $20/user/mo. For mid-market and enterprise distribution operations, the Badger Maps + Repsly combination handles each workflow best in class.",
    verdict:
      "SMB (under 15 reps, simple call cycle): RepMove alone at $20/user/mo. Mid-market (15–50 reps, retail execution needs): Badger Maps + Repsly. Enterprise (50+ reps, deep CRM integration): Badger Maps + Repsly + Salesforce.",
    faqs: [
      {
        question: "What field sales software do distribution companies use?",
        answer:
          "Badger Maps is the most widely used route optimization tool in distribution and wholesale, with 100,000+ users. Repsly is popular for retail execution and order capture. RepMove is the fastest-growing alternative for SMB distributors who want an all-in-one solution at a lower price point.",
      },
      {
        question: "What's the best order capture app for distribution reps?",
        answer:
          "Repsly is purpose-built for distribution order capture with product catalogs, customer-specific pricing, and real-time inventory sync. For teams that need both order capture and route planning, Repsly pairs well with Badger Maps. RepMove is a lower-cost alternative that covers both functions adequately for smaller teams.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "food-beverage",
    category: "industry",
    industry: "Food & Beverage",
    title: "Food & Beverage Sales Stack (2026)",
    headline: "The F&B Field Sales Stack for Account Reps in 2026",
    metaDescription:
      "The best field sales tech stack for food and beverage companies in 2026. Route planning, retail execution, order capture, and account management tools reviewed.",
    icon: "🍺",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #d97706 100%)",
    totalCostLow: "$29",
    totalCostHigh: "$69",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Food and beverage field sales is one of the most demanding account management jobs in field sales. Reps visit 20–30 accounts per day — bars, restaurants, grocery stores, convenience stores — checking product placement, managing shelf presence, capturing reorders, and building the relationships that drive velocity. Speed matters: a rep has 10–15 minutes per account, and every minute lost to admin or navigation is a visit not made.\n\nThe F&B field sales stack needs to solve three problems fast: getting to the right accounts in the right order (routing), capturing orders and auditing shelves efficiently (execution), and syncing all that activity back to a CRM that tracks account performance over time.",
    whoIsItFor:
      "Food, beverage, CPG, and specialty food companies with field sales reps managing on-premise and off-premise account visits. Relevant for distributors, importers, brand reps, and broker networks.",
    tools: [
      {
        slug: "repsly",
        name: "Repsly",
        role: "Retail execution & order capture",
        why:
          "Repsly is the category leader for F&B retail execution. Its shelf audit workflows — photo documentation with timestamp and GPS, display compliance checklists, promotion verification — match the daily reality of an F&B account rep's job. Order capture with customer-specific pricing and product catalog sync means reps can take a reorder in 90 seconds at the account, with inventory syncing back automatically. The analytics layer shows execution rates across the account base, flagging underperforming locations for management review.",
        price: "$29/user/mo",
        priceNote: "Starter · paid plans from $29",
        rating: 4.3,
        reviewCount: 127,
        keyFeatures: [
          "Shelf audit (photo + GPS + timestamp)",
          "Order capture with product catalog",
          "Promotion compliance tracking",
          "Visit checklist workflows",
          "Execution analytics across accounts",
          "Distributor/broker performance tracking",
        ],
        toolsUrl: "/tools/repsly",
        website: "https://repsly.com",
        logo: "🛒",
      },
      {
        slug: "badger-maps",
        name: "Badger Maps",
        role: "Route optimization — maximize daily account coverage",
        why:
          "F&B account reps covering 20–30 accounts per day need Badger Maps' route optimization to maximize visit count. The Lasso tool — draw a region, pull all accounts, get an optimized route in seconds — is how the best F&B reps start every morning. Badger Maps integrates with Salesforce, HubSpot, and Zoho so account history and visit notes sync automatically. The financial stability (100,000+ users, $8M ARR, 13 years in market) means it's a safe long-term investment.",
        price: "$49/user/mo",
        priceNote: "annual · 14-day trial",
        rating: 4.7,
        reviewCount: 570,
        keyFeatures: [
          "Multi-stop route optimization",
          "Lasso territory planning",
          "CRM integration (Salesforce, HubSpot, Zoho)",
          "Check-in logging",
          "Account history access",
        ],
        toolsUrl: "/tools/badger-maps",
        website: "https://badgermaps.com",
        logo: "🦡",
      },
      {
        slug: "outfield",
        name: "Outfield",
        role: "Gamified field CRM — rep engagement & accountability",
        why:
          "For F&B companies where rep engagement and accountability is a bigger challenge than routing or execution tooling, Outfield's gamification layer — leaderboards, team challenges, goal-setting — drives the daily activity metrics that matter in high-volume account management. At $20/user/mo, it's also the most affordable full-featured option in the stack and works across 50+ countries for international F&B operations.",
        price: "$20/user/mo",
        priceNote: "no minimum",
        rating: 4.4,
        reviewCount: 186,
        keyFeatures: [
          "Gamified leaderboards & challenges",
          "Territory management",
          "Visit logging & GPS check-in",
          "50+ country coverage",
          "Salesforce & HubSpot integration",
        ],
        toolsUrl: "/tools/outfield",
        website: "https://getoutfield.com",
        logo: "🏆",
      },
    ],
    whyThisStack:
      "F&B field sales has three distinct problems that require different tools to solve well. Routing (Badger Maps), retail execution (Repsly), and rep engagement (Outfield) each have a purpose-built solution, and none of the three tools tries to do the other's job.\n\nNot every F&B company needs all three. A small importer with 5 reps probably needs Repsly for order capture and that's it. A national beverage distributor with 100 reps covering every on-premise account in a region needs all three — the routing efficiency, the execution consistency, and the gamification layer to keep reps performing week over week.",
    verdict:
      "Start with Repsly for order capture and retail execution — it's the highest-value addition to any F&B field sales operation. Add Badger Maps when reps are making enough daily visits that routing inefficiency is costing you 30+ minutes per day. Add Outfield if rep engagement and accountability is a consistent management challenge.",
    faqs: [
      {
        question: "What CRM do food and beverage field reps use?",
        answer:
          "The most common F&B field sales stack uses Repsly for retail execution and order capture, Badger Maps for route optimization, and Salesforce or HubSpot as the back-office CRM. Smaller F&B companies often use Outfield as an all-in-one alternative at a lower cost.",
      },
      {
        question: "What is the best app for CPG field reps?",
        answer:
          "Repsly is purpose-built for CPG and F&B retail execution — shelf audits, order capture, promotional compliance, and distributor tracking. For CPG brands that need both retail execution and route optimization, Repsly plus Badger Maps is the combination used by most mid-market and enterprise CPG field teams.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  // ─── TEAM SIZE STACKS ──────────────────────────────────────────────────────

  {
    slug: "solo-rep",
    category: "team-size",
    teamSize: "Solo rep",
    title: "Best Tools for Solo Reps (2026)",
    headline: "The Best Field Sales Stack for Solo Reps in 2026",
    metaDescription:
      "The best field sales tools for solo reps in 2026. Low-cost, high-value tools for individual outside sales reps — with honest pricing and no fluff.",
    icon: "👤",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #6366f1 100%)",
    totalCostLow: "$0",
    totalCostHigh: "$39",
    totalCostNote: "per month (no minimum commitment)",
    intro:
      "Solo reps have different constraints than teams. There's no manager to approve software spend, no IT department to handle integrations, and no budget for tools that require a 5-user minimum. The right solo rep stack needs to be affordable, fast to set up, and powerful enough to replace a spreadsheet without requiring a week of onboarding.\n\nThe good news: the solo rep has never had more purpose-built options available. Several high-quality field sales platforms have built specifically for the individual rep market, with free tiers and low-commitment monthly pricing that make evaluation risk-free.",
    whoIsItFor:
      "Individual outside sales reps, 1099 contractors, part-time canvassers, and sales solopreneurs who need a professional field sales toolkit without enterprise pricing.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Free Lite tier — canvassing, territory mapping & lead tracking",
        why:
          "SalesRabbit's free Lite plan is the best free field sales tool available for a solo rep. Territory mapping, lead tracking, basic canvassing workflows — all free, no credit card. For reps in roofing, solar, pest control, or home services who just want to get started, the Lite tier covers 80% of what they need.",
        price: "Free (Lite plan)",
        priceNote: "paid plans from $39/mo if you need more",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Free territory mapping",
          "Lead tracking by address",
          "Basic canvassing workflow",
          "Mobile-first iOS + Android",
          "No credit card required",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "repmove",
        name: "RepMove",
        role: "Full-featured field CRM at the lowest per-user price in the category",
        why:
          "If you need more than SalesRabbit's free tier but don't want to pay $39+/mo, RepMove's $20/user/mo Flex plan delivers a complete field CRM — route optimization, AI sales assistant, account management, 5,000+ integrations — at half the price of most competitors. The 4.9/5 G2 rating (highest in the category) means the product quality matches the price. No seat minimums. 7-day free trial, no credit card.",
        price: "$20/user/mo",
        priceNote: "Flex plan · 7-day free trial · no minimum seats",
        rating: 4.9,
        reviewCount: 38,
        keyFeatures: [
          "Route optimization",
          "AI sales assistant",
          "Account & contact management",
          "5,000+ integrations",
          "Mileage tracking",
          "No seat minimum",
        ],
        toolsUrl: "/tools/repmove",
        website: "https://repmove.app",
        logo: "🚚",
      },
    ],
    whyThisStack:
      "The solo rep has one real decision to make: free or paid. SalesRabbit's Lite tier is the best free starting point in the market — it covers the essentials without the commitment. RepMove at $20/mo is the best paid option when free isn't enough — it delivers more features per dollar than anything else at that price point.\n\nDon't over-invest in tooling as a solo rep. The highest-ROI investment of a solo rep's time is in the field, not in learning new software. Start free, upgrade when you feel the limitation.",
    verdict:
      "Start with SalesRabbit Lite (free). If you need route optimization, AI assistance, or deeper integrations, upgrade to RepMove at $20/mo. Most solo reps don't need both.",
    faqs: [
      {
        question: "What field sales app should a solo rep use?",
        answer:
          "For solo reps just starting out, SalesRabbit's free Lite plan is the best starting point — no credit card, full mobile territory management. For reps who need more (route optimization, AI assistant, integrations), RepMove at $20/user/mo delivers more features per dollar than any other option in the category.",
      },
      {
        question: "Is there a free field sales app?",
        answer:
          "Yes — SalesRabbit's free Lite plan is the best free field sales tool available. It includes territory mapping, lead tracking, and a mobile canvassing workflow at no cost. It's limited compared to the paid plans, but covers the essentials for solo reps doing D2D or outside sales.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "smb-team",
    category: "team-size",
    teamSize: "SMB (2–20 reps)",
    title: "Stack for Small Teams (2–20 Reps)",
    headline: "The Best Field Sales Tech Stack for Small Teams in 2026",
    metaDescription:
      "The best field sales tools for small teams of 2–20 reps in 2026. Affordable, effective tools that don't require an IT department or enterprise budget.",
    icon: "👥",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #0891b2 100%)",
    totalCostLow: "$20",
    totalCostHigh: "$49",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Small field sales teams — 2 to 20 reps — have a different set of constraints than enterprise organizations. Budget matters. Setup time matters. The sales manager is often also a rep. There's no dedicated ops person to manage software rollouts, and the cost of a bad tool choice is felt immediately.\n\nThe best small team stack balances capability with simplicity. You need territory management, lead tracking, and ideally route optimization — but you don't need SPOTIO's 5-user minimum and annual contract, or Salesforce Maps' enterprise pricing. The $20–49/user range covers everything a 2–20 rep team needs.",
    whoIsItFor:
      "Small field sales operations (2–20 reps) across any vertical — D2D canvassing, outside B2B sales, or account management. Particularly relevant for owner-operated businesses and growing SMBs.",
    tools: [
      {
        slug: "repmove",
        name: "RepMove",
        role: "Full-featured field CRM — best value per dollar in the category",
        why:
          "RepMove is the highest-rated field sales tool in the market (4.9/5 G2, 5.0/5 Capterra) at $20/user/mo with no seat minimum. For a small team that needs a complete CRM — route optimization, account management, activity tracking, AI assistant, 5,000+ integrations — RepMove delivers more than tools at double the price. The no-minimum pricing means a 3-rep team pays $60/mo total, not a $125 minimum.",
        price: "$20/user/mo",
        priceNote: "no minimum · 7-day free trial",
        rating: 4.9,
        reviewCount: 38,
        keyFeatures: [
          "Route optimization",
          "Account & pipeline management",
          "AI sales assistant",
          "5,000+ integrations",
          "No minimum seats",
          "Highest-rated in category",
        ],
        toolsUrl: "/tools/repmove",
        website: "https://repmove.app",
        logo: "🚚",
      },
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "D2D canvassing — for SMB teams in residential verticals",
        why:
          "For small D2D teams in roofing, solar, pest control, or home services — SalesRabbit is the natural fit. Its free Lite tier removes financial risk during evaluation, and the $39/user/mo paid plan unlocks territory heat maps, DataGrid AI lead scoring, and gamified leaderboards. It's the most widely used D2D tool in these verticals, which means abundant community resources, training materials, and peer benchmarks.",
        price: "$39/user/mo",
        priceNote: "annual · Free Lite tier available",
        rating: 4.5,
        reviewCount: 426,
        keyFeatures: [
          "Territory heat maps",
          "DataGrid AI lead scoring",
          "Gamified leaderboards",
          "Free Lite tier for evaluation",
          "Digital contracts",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
    ],
    whyThisStack:
      "The small team stack decision comes down to sales motion. D2D canvassing in residential verticals (roofing, solar, pest control): SalesRabbit. Outside B2B sales or account management in any other vertical: RepMove. Both deliver enterprise-level functionality at SMB pricing, without minimums or annual contract requirements that penalize smaller teams.\n\nDon't get upsold into SPOTIO or Salesforce Maps at this stage. Both have minimum seat requirements and annual contracts that make them wrong for sub-20-rep teams. The $20–39 range covers everything you need.",
    verdict:
      "D2D residential: SalesRabbit (free Lite to start, $39/mo when you're ready). B2B outside or account management: RepMove at $20/user/mo. If you're unsure which motion you run, try RepMove — it's more flexible.",
    faqs: [
      {
        question: "What's the best field sales CRM for small teams?",
        answer:
          "RepMove is the highest-rated field sales CRM for small teams — 4.9/5 on G2, $20/user/mo with no seat minimum. For D2D canvassing teams specifically, SalesRabbit with its free Lite tier is the best starting point. Both avoid the minimum-seat and annual-contract requirements that make enterprise tools inappropriate for sub-20-rep teams.",
      },
      {
        question: "Does a small sales team need dedicated field sales software?",
        answer:
          "Yes, if reps are doing in-person visits. A spreadsheet or generic CRM like HubSpot lacks the mobile-first design, route optimization, and territory management that field reps need. The best field sales tools for small teams cost $20–39/user/mo — a small investment relative to the route efficiency and lead tracking improvements they deliver.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  {
    slug: "mid-market-team",
    category: "team-size",
    teamSize: "Mid-market (20–100 reps)",
    title: "Stack for Mid-Market Teams (20–100)",
    headline: "The Field Sales Tech Stack for Mid-Market Teams (20–100 Reps)",
    metaDescription:
      "The best field sales tech stack for mid-market teams of 20–100 reps in 2026. Analytics, territory management, CRM integration, and honest pricing.",
    icon: "🏢",
    heroGradient: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 50%, #7c3aed 100%)",
    totalCostLow: "$25",
    totalCostHigh: "$75",
    totalCostNote: "per rep/mo (billed annually)",
    intro:
      "Mid-market field sales teams — 20 to 100 reps — have crossed the threshold where gut feel and spreadsheets don't scale anymore. Territory overlap, rep performance variance, and coverage gaps become management challenges that require data to solve. The right tools at this stage need to deliver analytics, not just activity tracking.\n\nThe 20–100 rep tier is also where enterprise tools become accessible without being overkill. SPOTIO's 5-user minimum is no longer a barrier. Salesforce Maps starts making sense for teams already on Salesforce. The budget per rep is higher, and the ROI expectation should be higher too.",
    whoIsItFor:
      "Mid-market field sales operations (20–100 reps) in any vertical — D2D, outside B2B, or territory account management. Companies at the inflection point between SMB tools and enterprise platforms.",
    tools: [
      {
        slug: "spotio",
        name: "SPOTIO",
        role: "Primary D2D platform — territory analytics & performance management",
        why:
          "SPOTIO is built for the management problems that appear at 20+ reps. Its territory analytics (9.7/10 on G2 — highest in category) surface which territories are underperforming, which reps are outliers, and where coverage gaps exist. SPOTIO AI (launched 2025) adds coaching insights and selling recommendations at the rep level. Native integrations with Salesforce, HubSpot, and NetSuite handle the CRM complexity that comes with larger teams.",
        price: "$25/user/mo",
        priceNote: "5-user minimum · annual contract",
        rating: 4.4,
        reviewCount: 387,
        keyFeatures: [
          "Territory analytics (9.7/10 G2)",
          "SPOTIO AI coaching & insights",
          "Multi-channel outreach sequences",
          "Rep performance dashboards",
          "Native Salesforce, HubSpot, NetSuite integration",
          "AccuLynx integration (roofing)",
        ],
        toolsUrl: "/tools/spotio",
        website: "https://spotio.com",
        logo: "📍",
      },
      {
        slug: "badger-maps",
        name: "Badger Maps",
        role: "Route optimization for account management teams",
        why:
          "For mid-market companies with both D2D and account management reps — or pure account management organizations at 20+ reps — Badger Maps' route optimization and CRM integrations at $49/user/mo deliver the best ROI in the category. 100,000+ users and 13 years of product maturity mean there are no rough edges. The 9.4/10 support score matters more at this scale — implementation issues need to get resolved without disrupting a 50-rep field team.",
        price: "$49/user/mo",
        priceNote: "annual · 14-day trial + 90-day money-back",
        rating: 4.7,
        reviewCount: 570,
        keyFeatures: [
          "Enterprise-grade route optimization",
          "Deep CRM integrations (Salesforce, HubSpot, Dynamics, Zoho, Pipedrive)",
          "Team territory management",
          "Visit tracking at scale",
          "9.4/10 G2 support",
        ],
        toolsUrl: "/tools/badger-maps",
        website: "https://badgermaps.com",
        logo: "🦡",
      },
    ],
    whyThisStack:
      "At 20–100 reps, the ROI of good analytics compounds fast. A 10% improvement in territory allocation across a 50-rep team is 5 rep-equivalents of additional productivity — worth $150K+/year in a typical field sales organization. SPOTIO's analytics depth justifies its cost at this scale in a way it doesn't for a 5-rep team.\n\nThe SPOTIO + Badger Maps combination works for companies that run both D2D canvassing and account management teams. SPOTIO handles the canvassing analytics and CRM complexity. Badger Maps handles the account visit routing and relationship history. Each tool at its best, for its specific motion.",
    verdict:
      "D2D or canvassing at 20+ reps: SPOTIO — the analytics justify the cost. Account management or mixed motion: add Badger Maps for route optimization. Pure account management: Badger Maps alone is enough.",
    faqs: [
      {
        question: "When should a field sales team upgrade from SMB to enterprise tools?",
        answer:
          "The inflection point is typically 15–20 reps. Below that, the $20–39 tools (RepMove, SalesRabbit Lite) cover the essentials. Above that, territory overlap, coverage gaps, and rep performance variance become management problems that need data to solve — which is what SPOTIO and Badger Maps are built for.",
      },
      {
        question: "What analytics do field sales managers need at 50+ reps?",
        answer:
          "The most important analytics at 50+ reps are territory coverage rates (what percentage of target addresses have been contacted), rep performance by territory (identifying outliers and replicating top performers), and pipeline velocity by geography (where are deals moving faster or slower). SPOTIO's analytics dashboard covers all three.",
      },
    ],
    lastUpdated: "2026-03-01",
  },

  // ─── NEW STACKS (Day 5) ───────────────────────────────────────────────────────

  {
    slug: "solar-enterprise",
    category: "industry",
    industry: "Solar",
    title: "Enterprise Solar Sales Stack (2026)",
    headline: "The Enterprise Solar Sales Stack Used by 100+ Rep Solar Organizations",
    metaDescription:
      "Enterprise solar sales tech stack for 2026. Field sales tools high-volume solar companies use, costs at scale, and why this combination works.",
    icon: "☀️",
    heroGradient: "linear-gradient(135deg, #451a03 0%, #78350f 50%, #f59e0b 100%)",
    totalCostLow: "$64",
    totalCostHigh: "$115",
    totalCostNote: "per rep/mo at 50+ rep scale (billed annually)",
    intro:
      "Enterprise solar operations don't just need better canvassing software — they need a platform ecosystem that handles the full acquisition motion at scale. When you're managing 50–300 reps across multiple states, the coordination problems compound: territory overlap, rep performance variance, proposal inconsistency, and CRM data hygiene all become organizational-level challenges.\n\nThe best enterprise solar stacks solve these problems through specialization. Rather than one all-in-one platform that does everything adequately, the highest-performing solar organizations use two to three tools that each do one thing excellently: a territory-and-canvassing platform, a proposal-and-financing tool, and a CRM backbone for post-sale pipeline management.\n\nThis stack guide is specifically for enterprise solar organizations — those managing 50+ reps, running multi-state campaigns, and dealing with the operational complexity that comes with scale. For smaller solar teams, see our solar startup stack guide.",
    whoIsItFor:
      "Enterprise solar companies (50–500 reps) running D2D campaigns across multiple states or regions, with existing CRM infrastructure and a need for enterprise-grade territory analytics and rep performance management.",
    tools: [
      {
        slug: "spotio",
        name: "SPOTIO",
        role: "Primary territory management & field analytics platform",
        why:
          "At enterprise scale, territory analytics and CRM integration depth matter more than any single feature. SPOTIO's 5,000+ integration library connects to Salesforce, HubSpot, and solar-specific CRMs. Its multi-territory management handles complex state-by-state campaign structures. The 9.7/10 territory visualization score is the best in the category.",
        price: "$25/user/mo",
        priceNote: "enterprise tiers above entry price",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "Multi-territory management for state-level campaigns",
          "5,000+ CRM and solar tool integrations",
          "Enterprise SSO and role-based access controls",
          "Per-rep and per-territory performance analytics",
          "Heat map visualization for solar lead density",
        ],
        toolsUrl: "/tools/spotio",
        website: "https://spotio.com",
        logo: "📍",
      },
      {
        slug: "sunbase",
        name: "Sunbase",
        role: "Solar proposal, financing & project management",
        why:
          "Enterprise solar operations need proposal consistency across hundreds of reps. Sunbase's native solar workflow — from canvassing lead through proposal, financing options, and installation scheduling — reduces the proposal-to-signature cycle and ensures pricing consistency. The built-in financing workflow reduces friction between the sale and project kickoff.",
        price: "Contact for pricing",
        priceNote: "enterprise pricing available",
        rating: 4.2,
        reviewCount: 143,
        keyFeatures: [
          "Solar-native proposal generation",
          "Built-in financing workflow",
          "Installation project management and scheduling",
          "Utility data integration for solar savings calculations",
          "Multi-rep proposal consistency controls",
        ],
        toolsUrl: "/tools/sunbase",
        website: "https://sunbasedata.com",
        logo: "🌞",
      },
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Rep enablement, training & gamification layer",
        why:
          "Enterprise solar organizations with high rep turnover need a platform that gets new reps productive fast. SalesRabbit's training content library, gamified leaderboards, and DataGrid AI lead scoring are the rep-facing productivity layer that SPOTIO's analytics-heavy platform doesn't provide. Many enterprise solar orgs run SPOTIO for management and SalesRabbit for rep-facing tools.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite for evaluation",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "Video training library for rep onboarding",
          "Gamified leaderboards for competitive solar campaigns",
          "DataGrid AI for residential lead prioritization",
          "Roofle integration for solar/roofing proposals",
          "Free Lite tier for evaluating before scaling",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
    ],
    whyThisStack:
      "Enterprise solar has two distinct management layers that most single platforms don't serve equally well. The first is organizational: territory allocation across states, campaign planning, CRM integration, and performance analytics — SPOTIO excels here. The second is rep-facing: daily workflow, training, motivation, and proposal execution — SalesRabbit and Sunbase excel here.\n\nThe SPOTIO + SalesRabbit + Sunbase combination is the enterprise stack that covers all three layers. It's more expensive than running a single platform, but at 100+ rep scale, the specialization gains — better territory analytics, better training, better proposal consistency — outweigh the integration cost.\n\nNote: not every enterprise solar org needs all three. If your org has strong internal training programs, SalesRabbit may be redundant. If you use a separate CPQ tool for proposals, Sunbase may overlap. Audit your current workflow gaps before adding all three.",
    verdict:
      "Enterprise solar: SPOTIO for territory management + Sunbase for solar lifecycle + SalesRabbit for rep enablement. Each tool at its best layer.",
    faqs: [
      {
        question: "What field sales platform do large solar companies use?",
        answer:
          "Enterprise solar companies most commonly use SPOTIO for territory analytics and enterprise integrations, with SalesRabbit for rep training and gamification. Sunbase is the leading solar-specific lifecycle platform for organizations that need canvassing through installation in one system. Many larger organizations run two of these three tools in combination.",
      },
      {
        question: "How much does enterprise solar field sales software cost?",
        answer:
          "Enterprise solar field sales software costs $25–$115/rep/month depending on the stack. SPOTIO starts at $25/user/mo (enterprise tiers above entry price), SalesRabbit at $39/user/mo, and Sunbase is quote-based. Most enterprise solar orgs negotiate volume pricing at 50+ seats. Budget $64–$90/rep/mo for a two-tool enterprise stack.",
      },
    ],
    lastUpdated: "2026-03-11",
  },

  {
    slug: "roofing-mid-market",
    category: "industry",
    industry: "Roofing",
    title: "Mid-Market Roofing Sales Stack (2026)",
    headline: "The Roofing Sales Stack for 10–50 Rep Teams: Better Than One-Size-Fits-All",
    metaDescription:
      "Best field sales tech stack for mid-market roofing (10–50 reps). Tools, pricing, and strategy for growth-stage roofing companies.",
    icon: "🏠",
    heroGradient: "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #78716c 100%)",
    totalCostLow: "$39",
    totalCostHigh: "$78",
    totalCostNote: "per rep/mo at 10–50 rep scale (billed annually)",
    intro:
      "Mid-market roofing companies — those running 10–50 reps — sit in an awkward zone. They've outgrown the simple tools designed for 3-rep crews (spreadsheets, basic canvassing apps) but don't yet need the complexity and cost of enterprise platforms built for 200+ rep organizations. The wrong tool choice at this stage either caps growth or creates unnecessary overhead.\n\nThe right mid-market roofing stack focuses on three things: territory management that scales from 10 reps to 50 without requiring a platform migration, proposal tools that create consistency across a growing sales team, and analytics that help a 3-person management team identify which reps and territories are generating the most ROI.\n\nThis guide is for roofing companies in the 10–50 rep growth phase that want to invest in the right platform for their next 24 months.",
    whoIsItFor:
      "Roofing companies with 10–50 active canvassers and closers, running retail or insurance storm restoration sales, looking for a platform that can handle their current scale and grow with them to 100 reps.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary canvassing platform, territory management & rep training",
        why:
          "SalesRabbit hits the mid-market roofing sweet spot. The Team plan ($39/user/mo) includes DataGrid AI, territory heat maps, video training, and gamification — all features that matter at 10–50 reps. The Roofle acquisition adds e-commerce roof pricing and digital proposals without needing a separate tool. It scales to 200+ reps if needed.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite for evaluation",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "DataGrid AI for lead prioritization by neighborhood",
          "Territory heat maps and rep GPS tracking",
          "Roofle integration — e-commerce roof pricing + digital proposals",
          "Video training library for mid-market onboarding",
          "Gamified leaderboards for competitive roofing teams",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "knockio",
        name: "Knockio",
        role: "Budget canvassing layer for high-volume door knockers",
        why:
          "Some mid-market roofing companies run a two-tier sales team: senior closers on SalesRabbit and high-volume door knockers on a cheaper canvassing tool. Knockio's affordability and simplicity makes it the right choice for the canvassing-only tier — reps learn it in an hour, and it tracks doors effectively without the platform overhead of full SalesRabbit.",
        price: "Contact for pricing",
        priceNote: "typically lower than SalesRabbit",
        rating: 4.4,
        reviewCount: 97,
        keyFeatures: [
          "Simple door-knock tracking and territory assignment",
          "Lead capture and disposition logging",
          "Route planning for canvassing crews",
          "Affordable pricing for high-headcount canvassing teams",
        ],
        toolsUrl: "/tools/knockio",
        website: "https://knockio.com",
        logo: "🚪",
      },
    ],
    whyThisStack:
      "Mid-market roofing companies don't need three tools. They need one excellent platform (SalesRabbit) that handles the full sales motion from territory to proposal, with an optional second tool (Knockio) if they're running a separate canvassing-only tier at volume.\n\nThe Roofle acquisition makes the SalesRabbit-only approach viable for the first time. Previously, roofing companies needed SalesRabbit for canvassing and a separate proposal tool (AccuLynx, JobNimbus). Now SalesRabbit + Roofle handles both at a single price point. For mid-market operations where simplicity matters, this two-in-one approach reduces training overhead significantly.\n\nAdd Knockio only if you're running high-volume door-knockers separately from your closer team and want to save on per-seat costs for the canvassing tier.",
    verdict:
      "Mid-market roofing: SalesRabbit as your platform. Add Knockio only if running a dedicated lower-cost canvassing tier. The Roofle acquisition makes single-platform roofing viable.",
    faqs: [
      {
        question: "What is the best roofing sales software for 20-rep teams?",
        answer:
          "SalesRabbit is the best roofing sales software for teams in the 10–50 rep range. The $39/user/mo Team plan includes territory management, DataGrid AI lead scoring, the Roofle proposal integration, and training content — everything a mid-market roofing team needs without enterprise complexity or cost.",
      },
      {
        question: "Do I need a separate proposal tool for roofing D2D sales?",
        answer:
          "No longer, as of January 2026. SalesRabbit's acquisition of Roofle adds e-commerce roof pricing, AI-assisted financing, and digital proposals directly into the SalesRabbit platform. Mid-market roofing companies that previously ran SalesRabbit + AccuLynx can now consolidate to SalesRabbit + Roofle.",
      },
    ],
    lastUpdated: "2026-03-11",
  },

  {
    slug: "telecom-smb",
    category: "industry",
    industry: "Telecom",
    title: "SMB Telecom & Fiber Sales Stack (2026)",
    headline: "The Right D2D Sales Stack for SMB Telecom and Fiber Companies",
    metaDescription:
      "Best field sales stack for SMB telecom and fiber companies. Tools, pricing, and integration strategy for ISPs running D2D campaigns.",
    icon: "📡",
    heroGradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #38bdf8 100%)",
    totalCostLow: "$20",
    totalCostHigh: "$64",
    totalCostNote: "per rep/mo for 5–30 rep telecom D2D teams",
    intro:
      "Telecom and fiber D2D sales is one of the fastest-growing applications of canvassing software. As fiber providers expand into new markets, they're increasingly using structured D2D campaigns to drive residential sign-ups in newly serviceable zones. The economics work: a $50–100/month fiber customer acquired at $150–200 CAC generates 18–24 month payback, similar to pest control economics.\n\nSMB telecom companies — regional ISPs, CLEC fiber providers, and broadband co-ops — typically run smaller D2D operations (5–30 reps) and need tools that match their scale and budget. Enterprise telecom platforms with $75/user/mo pricing don't make sense for a 10-rep regional fiber buildout campaign.\n\nThis guide is designed for SMB telecom and fiber companies running their first or second D2D campaign and looking for the right tools at the right price point.",
    whoIsItFor:
      "Regional ISPs, fiber providers, CLECs, and broadband companies with 5–30 field reps running structured D2D campaigns in newly serviceable residential zones.",
    tools: [
      {
        slug: "repmove",
        name: "RepMove",
        role: "Primary canvassing platform for SMB telecom D2D campaigns",
        why:
          "RepMove's $20/user/mo pricing and no-minimum structure make it the most cost-effective starting point for SMB telecom D2D operations. At a 15-rep fiber campaign, RepMove costs $300/month vs $600/month for SalesRabbit — a meaningful savings when CAC is a critical metric. The 4.4/5 G2 rating confirms it does the job well at this scale.",
        price: "$20/user/mo",
        priceNote: "no minimum reps required",
        rating: 4.4,
        reviewCount: 186,
        keyFeatures: [
          "Territory assignment and door tracking",
          "Lead capture and disposition logging",
          "Route planning for structured fiber buildout zones",
          "Manager dashboard for campaign performance",
          "No minimum rep count — scales from 1 to 50",
        ],
        toolsUrl: "/tools/repmove",
        website: "https://repmove.com",
        logo: "📱",
      },
      {
        slug: "spotio",
        name: "SPOTIO",
        role: "Upgrade path for growing telecom D2D teams (20+ reps)",
        why:
          "When SMB telecom teams scale past 20 reps or add CRM integration requirements, SPOTIO is the right upgrade from RepMove. Its territory management for network buildout zones, CRM integration for provisioning systems, and analytics for cost-per-door tracking are all relevant for telecom D2D at scale. The $25/user/mo entry price keeps it competitive.",
        price: "$25/user/mo",
        priceNote: "enterprise tiers available",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "Territory management by network zone or service availability",
          "CRM integration for provisioning system connection",
          "Cost-per-door and cost-per-acquisition analytics",
          "Multi-territory management for multi-market fiber launches",
          "5,000+ integrations for telecom tech stack connection",
        ],
        toolsUrl: "/tools/spotio",
        website: "https://spotio.com",
        logo: "📍",
      },
    ],
    whyThisStack:
      "SMB telecom D2D doesn't need an expensive platform on day one. Start with RepMove at $20/user/mo — it handles territory assignment, door tracking, and basic campaign management well at 5–20 rep scale. As your campaign scales or you need CRM integration with provisioning systems, migrate to SPOTIO.\n\nThe migration path from RepMove to SPOTIO is relatively smooth compared to jumping straight to enterprise platforms. Both tools share similar workflow concepts, and most SMB telecom orgs make the switch when they hit 20–25 reps or when CRM integration becomes a bottleneck.\n\nOne caveat: neither tool includes native fiber serviceability lookup — that requires custom integration with your network management system. SPOTIO's API and integration library makes this integration most feasible when it becomes necessary.",
    verdict:
      "SMB telecom: Start with RepMove ($20/user/mo) for 5–20 reps. Scale to SPOTIO when you hit 20+ reps or need CRM/provisioning integration.",
    faqs: [
      {
        question: "What D2D software do fiber internet companies use?",
        answer:
          "Smaller fiber providers and regional ISPs commonly use RepMove ($20/user/mo) for cost-effective campaign management. Larger telecom companies and enterprise fiber operations typically use SPOTIO for its territory analytics and enterprise integration capabilities. Most telecom D2D teams require custom integration with their provisioning systems regardless of platform.",
      },
      {
        question: "How do you organize a fiber D2D campaign with software?",
        answer:
          "The standard approach is to define territory zones based on network serviceability (which addresses can receive service), assign reps to zones using the canvassing platform's territory management, track every door with disposition logging, and sync converted leads to the provisioning CRM. RepMove handles this workflow well for SMB operations; SPOTIO for enterprise.",
      },
    ],
    lastUpdated: "2026-03-11",
  },

  {
    slug: "home-security-smb",
    category: "industry",
    industry: "Home Security",
    title: "Security Stack for SMB (2026)",
    headline: "The Home Security D2D Sales Stack That Works for Small and Mid-Market Teams",
    metaDescription:
      "Best D2D sales stack for home security companies. Tools, pricing, and workflow strategy for SMB home security D2D campaigns.",
    icon: "🔐",
    heroGradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #6366f1 100%)",
    totalCostLow: "$39",
    totalCostHigh: "$78",
    totalCostNote: "per rep/mo for 5–50 rep home security teams",
    intro:
      "Home security is one of D2D sales' most lucrative verticals. Recurring monitoring contracts worth $30–60/month per customer create lifetime values of $1,500–$3,600 at typical churn rates — economics that justify $200–400 customer acquisition costs. The result is a vertical that invests heavily in D2D canvassing and expects high rep performance.\n\nHome security D2D has specific requirements that differ from roofing or solar. The product is an in-home demonstration and installation commitment — not a same-day close on a visible problem. Reps need to capture detailed lead information, schedule follow-up appointments, and manage a longer consideration cycle than the typical storm-restoration sale. Software that handles roofing D2D well may not fit the home security motion.\n\nHere's the right D2D tech stack for SMB home security companies running effective canvassing campaigns.",
    whoIsItFor:
      "Home security companies (5–75 reps) running residential D2D campaigns for monitoring system installations. Includes ADT dealers, Vivint sub-dealers, and independent home security operations.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary D2D platform — canvassing, training & CRM",
        why:
          "SalesRabbit is widely used in home security D2D because of its fit with the multi-step sales motion: door knock → lead capture → appointment scheduling → follow-up management. The training library is particularly valuable for home security, where product knowledge and objection handling scripts need to be consistently delivered. Territory heat maps prevent rep overlap in high-density residential areas.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite for evaluation",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "Territory heat maps for residential neighborhood management",
          "Lead capture with appointment scheduling workflow",
          "Video training library for home security product training",
          "Gamified leaderboards for competitive home security campaigns",
          "DataGrid AI for identifying high-propensity home security leads",
          "Follow-up lead management for the multi-touch home security sale",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "knockbase",
        name: "Knockbase",
        role: "Affordable canvassing layer for budget-sensitive home security teams",
        why:
          "For home security teams that find SalesRabbit's $39/user/mo pricing heavy for their current scale, Knockbase offers core canvassing capability at lower cost. Its appointment-tracking and door-disposition workflow suits the home security multi-touch motion. Consider Knockbase as a starter tool before scaling to SalesRabbit.",
        price: "Contact for pricing",
        priceNote: "typically lower than SalesRabbit",
        rating: 4.2,
        reviewCount: 143,
        keyFeatures: [
          "Door tracking and disposition logging",
          "Territory assignment for residential campaigns",
          "Lead capture for appointment scheduling",
          "Affordable pricing for small home security operations",
        ],
        toolsUrl: "/tools/knockbase",
        website: "https://knockbase.com",
        logo: "🏠",
      },
    ],
    whyThisStack:
      "Home security D2D rewards the platforms best at managing multi-touch lead workflows — because not every door closes on the first knock. Reps often knock, leave a door hanger, follow up in 3 days, and close on the second visit. SalesRabbit's lead disposition system and follow-up management handle this motion well.\n\nFor teams just starting out or operating on tight margins (ADT dealers, smaller independents), Knockbase provides the canvassing fundamentals at lower cost. The downside is missing SalesRabbit's training library — a meaningful loss in a vertical where product knowledge and objection handling directly drive close rates.\n\nMost successful home security D2D operations eventually graduate to SalesRabbit as they scale past 15 reps. The training investment alone — reducing time-to-productive for new reps — typically justifies the per-seat cost increase.",
    verdict:
      "Home security D2D: SalesRabbit for teams of 10+ reps — the training library and follow-up management justify the cost. Knockbase for smaller teams starting out.",
    faqs: [
      {
        question: "What software do home security door-to-door companies use?",
        answer:
          "SalesRabbit is the most widely used D2D platform in home security sales. Its training library, territory management, and lead tracking are well-matched to the multi-touch home security sales motion. Knockbase and RepMove are used by smaller home security operations looking for lower-cost alternatives.",
      },
      {
        question: "How do you manage home security D2D leads with software?",
        answer:
          "The standard workflow is: knock door → log disposition in canvassing app → if interested, capture lead with contact info and preferred appointment time → follow-up reminder triggered automatically → rep returns for in-home demo. SalesRabbit's lead management system handles this multi-touch workflow natively.",
      },
    ],
    lastUpdated: "2026-03-11",
  },

  {
    slug: "pest-control-growth",
    category: "industry",
    industry: "Pest Control",
    title: "Pest Control Growth Stack (2026)",
    headline: "The D2D Sales Stack That Powers High-Performance Pest Control Summer Campaigns",
    metaDescription:
      "Best D2D tech stack for pest control running summer campaigns. Tools, pricing, and strategy for operations scaling 10 to 50 reps.",
    icon: "🦟",
    heroGradient: "linear-gradient(135deg, #14532d 0%, #166534 50%, #22c55e 100%)",
    totalCostLow: "$20",
    totalCostHigh: "$58",
    totalCostNote: "per rep/mo for 10–50 rep seasonal pest control teams",
    intro:
      "Pest control D2D is one of the most process-driven sales environments in the industry. The summer campaign model — recruiting 20–50 college-age reps, deploying them across residential neighborhoods for 90 days, then scaling back down — is a well-proven business model with strong unit economics. Recurring service contracts at $400–800/year per customer mean even a 25-rep summer team can add $500K+ in annual contract value in a single season.\n\nThe software challenge in pest control is unique: rapid seasonal scaling (onboarding 30 reps in 2 weeks), rep inexperience (many are first-time salespeople), high competitive intensity (multiple pest control companies working the same neighborhoods in summer), and the recurring-contract nature of the sale (vs one-time transactions). The platform needs to handle all of these simultaneously.\n\nThis guide covers the D2D stack optimized specifically for pest control summer campaign operations.",
    whoIsItFor:
      "Pest control companies running seasonal D2D campaigns — primarily in the April–September summer window — with 10–75 reps. Includes both independent companies and franchise operations.",
    tools: [
      {
        slug: "salesrabbit",
        name: "SalesRabbit",
        role: "Primary D2D platform — canvassing, training & summer campaign management",
        why:
          "SalesRabbit is the dominant platform in pest control D2D, partly because its training library directly addresses the seasonal rep problem. Getting 30 new college hires productive in under 2 weeks requires structured training content — SalesRabbit's video library handles this. The gamification system drives summer performance in the competitive campaign environment. Territory heat maps protect experienced rep areas from being overlapped by newer recruits.",
        price: "$39/user/mo",
        priceNote: "annual billing · Free Lite for evaluation",
        rating: 4.3,
        reviewCount: 528,
        keyFeatures: [
          "Video training library for rapid seasonal rep onboarding",
          "Gamified leaderboards for summer campaign competition",
          "Territory heat maps and protection for experienced reps",
          "DataGrid AI for high-propensity lead identification",
          "GPS tracking and real-time rep activity for summer managers",
          "Free Lite tier for small pest control operations evaluating the platform",
        ],
        toolsUrl: "/tools/salesrabbit",
        website: "https://salesrabbit.com",
        logo: "🐇",
      },
      {
        slug: "repmove",
        name: "RepMove",
        role: "Budget alternative for cost-sensitive pest control companies",
        why:
          "For pest control companies where per-seat cost is a critical constraint — particularly franchise operators or companies running large canvassing crews — RepMove's $20/user/mo pricing delivers meaningful savings at scale. A 40-rep summer team on RepMove costs $800/month vs $1,560/month on SalesRabbit. The trade-off is losing the training library and gamification, which have real value in summer campaigns.",
        price: "$20/user/mo",
        priceNote: "no minimum reps — good for seasonal scaling",
        rating: 4.4,
        reviewCount: 186,
        keyFeatures: [
          "Core door tracking and territory assignment",
          "Lead management for recurring service agreement tracking",
          "Manager dashboard for daily campaign performance",
          "No minimum reps — easy seasonal scale-up and scale-down",
          "Affordable pricing for high-headcount summer campaigns",
        ],
        toolsUrl: "/tools/repmove",
        website: "https://repmove.com",
        logo: "📱",
      },
    ],
    whyThisStack:
      "Pest control summer campaigns have two cost drivers that pull in opposite directions: rep headcount (40 reps × $39/user/mo = $1,560/month in software alone) and rep productivity (trained reps close more contracts, justifying higher software cost). The right platform choice depends on which constraint matters more to your operation.\n\nIf rep inexperience is your primary challenge — you're bringing on 30 first-time salespeople each summer and need them productive fast — SalesRabbit's training library is worth the $39/user/mo premium. The training investment pays back quickly when it reduces ramp time from 3 weeks to 1 week.\n\nIf per-seat cost is the binding constraint — you're running a tight margin franchise operation or optimizing for contribution margin — RepMove's $20/user/mo delivers core canvassing functionality at the lowest transparent price in the category.\n\nFor most growing pest control companies, start on SalesRabbit during the season you're investing in training, and evaluate whether the lift justifies the premium before next summer's campaign.",
    verdict:
      "Pest control summer campaigns: SalesRabbit if rep training and performance management matter. RepMove if controlling per-rep software cost is the priority.",
    faqs: [
      {
        question: "What software do pest control door-to-door companies use?",
        answer:
          "SalesRabbit is the most widely used D2D platform in pest control — its training library, gamification, and territory management are all well-matched to summer campaign operations. RepMove is a popular lower-cost alternative for pest control companies prioritizing margin over platform features. Many summer canvassers learn SalesRabbit at their first pest control job.",
      },
      {
        question: "How do you onboard seasonal pest control reps quickly with software?",
        answer:
          "SalesRabbit's video training library is the most effective tool for rapid seasonal onboarding. Reps can complete product and sales training modules within the app during their first day, reducing ramp time significantly. Territory assignment through the platform's map interface ensures new reps are working productively from day one without management bottlenecks.",
      },
      {
        question: "Can pest control canvassing software handle seasonal rep headcount changes?",
        answer:
          "Yes — both SalesRabbit and RepMove support adding and removing users as your seasonal headcount changes. RepMove has no stated minimum reps, making it particularly flexible for seasonal operations. SalesRabbit's annual billing can create friction around seasonal scaling — verify the contract terms for your specific plan before committing if seasonal scaling is a priority.",
      },
    ],
    lastUpdated: "2026-03-11",
  },
];

export const getStack = (slug: string) => stacks.find((s) => s.slug === slug);
export const getAllStackSlugs = () => stacks.map((s) => s.slug);
export const getStacksByCategory = (category: "industry" | "team-size") =>
  stacks.filter((s) => s.category === category);
