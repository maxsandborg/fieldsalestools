export type PricingTier = {
  name: string;
  price: string;
  period: string;
  features: string[];
};

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string; // emoji placeholder
  website: string;
  affiliateUrl?: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  featuredOrder?: number;
  categories: string[];
  industries: string[];
  companySize: string[];
  pricingFrom: string;
  pricingModel: string;
  founded: string;
  headquartered: string;
  userBase: string;
  pros: string[];
  cons: string[];
  keyFeatures: string[];
  pricing: PricingTier[];
  integrations: string[];
  platforms: string[];
  badgeText?: string;
};

export const tools: Tool[] = [
  {
    slug: "spotio",
    name: "SPOTIO",
    tagline: "The #1 Field Sales Engagement Platform",
    description:
      "SPOTIO is the leading field sales engagement platform built for high-volume D2D and canvassing teams. Trusted by solar, telecom, pest control, and home security companies, SPOTIO delivers territory management, lead tracking, and performance analytics in one platform. Ideal for mid-size to enterprise sales organizations that need deep visibility into rep activity and pipeline.",
    logo: "📍",
    website: "https://spotio.com",
    rating: 4.4,
    reviewCount: 412,
    featured: true,
    featuredOrder: 1,
    categories: ["Field Sales CRM", "Territory Management", "D2D Software"],
    industries: ["Solar", "Roofing & Storm Restoration", "Telecom", "Fiber / Cable / ISP", "Pest Control", "Home Security & Alarm", "HVAC", "Energy & Utilities"],
    companySize: ["Mid-Market", "Enterprise"],
    pricingFrom: "$25/user/mo",
    pricingModel: "Per user, annual contract, 5-user minimum",
    founded: "2014",
    headquartered: "Dallas, TX",
    userBase: "Thousands of reps across North America",
    badgeText: "Most Popular",
    pros: [
      "Best-in-class territory management and mapping",
      "Deep analytics and rep performance dashboards",
      "Strong integrations (Salesforce, HubSpot, AccuLynx)",
      "#1 rated D2D app in both App Store and Google Play",
      "Multi-channel activity tracking",
    ],
    cons: [
      "Requires 5-user minimum — not ideal for solo reps or tiny teams",
      "Annual contract only — no month-to-month option",
      "Steeper learning curve than lighter alternatives",
      "Premium pricing vs. competitors",
    ],
    keyFeatures: [
      "Territory management & assignment",
      "Lead capture & pipeline tracking",
      "Rep GPS tracking & activity logs",
      "Performance dashboards & leaderboards",
      "Digital contracts & e-signature",
      "Appointment scheduling",
      "CRM integrations",
    ],
    pricing: [
      {
        name: "Team",
        price: "$25",
        period: "/user/mo (billed annually)",
        features: [
          "Territory management",
          "Lead tracking",
          "Basic reporting",
          "Mobile app",
        ],
      },
      {
        name: "Business",
        price: "Custom",
        period: "Contact sales",
        features: [
          "Everything in Team",
          "Advanced analytics",
          "API access",
          "Priority support",
          "Custom integrations",
        ],
      },
    ],
    integrations: ["Salesforce", "HubSpot", "AccuLynx", "HailTrace", "SOLO"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "salesrabbit",
    name: "SalesRabbit",
    tagline: "The All-in-One Platform for Field Sales Management",
    description:
      "SalesRabbit is the most widely-used purpose-built platform for door-to-door and field sales teams. With 85,000+ users and a strong following in roofing, solar, telecom, and home services, SalesRabbit combines canvassing, lead management, area mapping, gamification, and digital contracts in one mobile-first platform. Their DataGrid AI feature identifies high-potential prospects in any area based on purchase history.",
    logo: "🐇",
    website: "https://salesrabbit.com",
    rating: 4.3,
    reviewCount: 528,
    featured: true,
    featuredOrder: 2,
    categories: ["D2D Software", "Field Sales CRM", "Canvassing"],
    industries: ["Solar", "Roofing & Storm Restoration", "Telecom", "Fiber / Cable / ISP", "Pest Control", "Home Security & Alarm", "Home Services", "Windows & Doors"],
    companySize: ["SMB", "Mid-Market"],
    pricingFrom: "$39/user/mo",
    pricingModel: "Per user, monthly or annual",
    founded: "2012",
    headquartered: "Lehi, UT",
    userBase: "85,000+ sales professionals",
    badgeText: "85K+ Users",
    pros: [
      "Largest dedicated D2D user base — proven in the field",
      "Excellent mobile UX — built for reps on the go",
      "DataGrid AI identifies high-potential homes in any area",
      "Strong gamification and leaderboard features",
      "Digital contracts and e-signature built in",
    ],
    cons: [
      "Some users report occasional sync issues on poor connections",
      "Limited customization compared to enterprise CRMs",
      "Support response times can vary",
    ],
    keyFeatures: [
      "Area mapping & territory assignment",
      "Lead management & disposition tracking",
      "DataGrid AI prospect scoring",
      "Gamification & sales leaderboards",
      "Digital contracts & e-signature",
      "Rep GPS tracking",
      "Video training library",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$39",
        period: "/user/mo",
        features: [
          "Lead management",
          "Area mapping",
          "Mobile app",
          "Basic reporting",
        ],
      },
      {
        name: "Pro",
        price: "$59",
        period: "/user/mo",
        features: [
          "Everything in Basic",
          "DataGrid AI",
          "Digital contracts",
          "Gamification",
          "Advanced analytics",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "Contact sales",
        features: [
          "Everything in Pro",
          "Custom integrations",
          "Dedicated support",
          "SLA",
        ],
      },
    ],
    integrations: ["Salesforce", "HubSpot", "Zapier", "RoofLink"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "badger-maps",
    name: "Badger Maps",
    tagline: "Route Planner & Territory Management for Outside Sales",
    description:
      "Badger Maps is the leading route planning and territory management tool for outside sales reps. With 100,000+ field reps using the platform, Badger Maps helps salespeople plan the most efficient routes, manage their accounts on a map, and track their activity. It integrates directly with major CRMs, making it ideal for companies already on Salesforce or HubSpot who want to add field sales capability.",
    logo: "🦡",
    website: "https://www.badgermapping.com",
    rating: 4.3,
    reviewCount: 634,
    featured: true,
    featuredOrder: 3,
    categories: ["Route Planning", "Territory Management", "Field Sales CRM"],
    industries: ["Medical Devices", "HVAC", "Telecom", "Fiber / Cable / ISP", "Distribution & Wholesale", "Food & Beverage", "Manufacturing", "Real Estate"],
    companySize: ["SMB", "Mid-Market", "Enterprise"],
    pricingFrom: "$49/user/mo",
    pricingModel: "Per user, monthly or annual",
    founded: "2012",
    headquartered: "San Francisco, CA",
    userBase: "100,000+ field reps",
    badgeText: "100K+ Users",
    pros: [
      "Best-in-class route optimization — saves reps hours weekly",
      "100K+ users — one of the largest field sales platforms",
      "Seamless Salesforce and HubSpot integration",
      "Excellent account visualization on map",
      "Strong reporting for managers",
    ],
    cons: [
      "Less D2D canvassing-specific than SalesRabbit or SPOTIO",
      "Mobile app can be slow on older devices",
      "Pricing is higher per user vs. lighter alternatives",
    ],
    keyFeatures: [
      "Optimized route planning (up to 100 stops)",
      "Account and lead mapping",
      "Territory management & visualization",
      "CRM data synced to map in real-time",
      "Rep check-in and activity tracking",
      "Reporting & leaderboards",
    ],
    pricing: [
      {
        name: "Business",
        price: "$49",
        period: "/user/mo",
        features: [
          "Route optimization",
          "Account mapping",
          "CRM integrations",
          "Mobile app",
          "Basic reporting",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "Contact sales",
        features: [
          "Everything in Business",
          "Advanced analytics",
          "Dedicated support",
          "Custom integrations",
        ],
      },
    ],
    integrations: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics", "Pipedrive"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "map-my-customers",
    name: "Map My Customers",
    tagline: "Field Sales CRM with Powerful Mapping & Route Planning",
    description:
      "Map My Customers is a field-first CRM built for outside sales teams that need both relationship management and geographic intelligence. It combines contact management, route planning, territory visualization, and activity tracking in a clean, intuitive interface. A strong choice for teams moving away from spreadsheets or basic CRMs who need something purpose-built for field reps.",
    logo: "🗺️",
    website: "https://mapmycustomers.com",
    rating: 4.5,
    reviewCount: 289,
    featured: false,
    categories: ["Field Sales CRM", "Route Planning", "Territory Management"],
    industries: ["Distribution & Wholesale", "Medical Devices", "Manufacturing", "Telecom", "Fiber / Cable / ISP", "Real Estate", "Insurance"],
    companySize: ["SMB", "Mid-Market"],
    pricingFrom: "$60/user/mo",
    pricingModel: "Per user, billed annually",
    founded: "2016",
    headquartered: "Chicago, IL",
    userBase: "Growing mid-market user base",
    pros: [
      "Clean, intuitive interface — low learning curve",
      "Strong CRM features combined with mapping",
      "Good route optimization for account visits",
      "Excellent customer support ratings",
    ],
    cons: [
      "Less canvassing-specific than SalesRabbit/SPOTIO",
      "Fewer integrations than Badger Maps",
      "Pricing is on the higher end for smaller teams",
    ],
    keyFeatures: [
      "Visual account mapping",
      "Route optimization",
      "Contact & deal management",
      "Activity logging & history",
      "Territory management",
      "Pipeline tracking",
      "Team performance reports",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$60",
        period: "/user/mo (billed annually)",
        features: [
          "CRM",
          "Route planning",
          "Account mapping",
          "Mobile app",
        ],
      },
      {
        name: "Growth",
        price: "Custom",
        period: "Contact sales",
        features: [
          "Everything in Starter",
          "Advanced territory management",
          "Custom fields",
          "API access",
        ],
      },
    ],
    integrations: ["Salesforce", "HubSpot", "Zoho", "Pipedrive", "Mailchimp"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "knockbase",
    name: "Knockbase",
    tagline: "Smart D2D Software for High-Performance Field Teams",
    description:
      "Knockbase is a fast-growing door-to-door sales platform built specifically for home services industries including solar, roofing, HVAC, pest control, and home security. It offers intelligent canvassing, route optimization, commission tracking, and detailed lead management — all in a platform designed from the ground up for D2D workflows. A strong value alternative to SPOTIO for specialized teams.",
    logo: "🏠",
    website: "https://www.knockbase.com",
    rating: 4.6,
    reviewCount: 178,
    featured: false,
    categories: ["D2D Software", "Canvassing", "Field Sales CRM"],
    industries: ["Solar", "Roofing & Storm Restoration", "HVAC", "Pest Control", "Home Security & Alarm", "Fiber / Cable / ISP", "Telecom", "Windows & Doors"],
    companySize: ["SMB", "Mid-Market"],
    pricingFrom: "Contact for pricing",
    pricingModel: "Per user, contact sales",
    founded: "2019",
    headquartered: "USA",
    userBase: "Growing, home services focused",
    pros: [
      "Built specifically for home services D2D workflows",
      "Smart commission tracking and payroll reporting",
      "Strong canvassing and knock-tracking features",
      "More affordable than SPOTIO for similar features",
    ],
    cons: [
      "Newer platform — smaller ecosystem and fewer integrations",
      "Less brand recognition than SPOTIO or SalesRabbit",
      "Limited enterprise features",
    ],
    keyFeatures: [
      "Door-to-door canvassing tools",
      "Route optimization",
      "Commission & compensation tracking",
      "Lead management & dispositions",
      "Team performance tracking",
      "Territory mapping",
    ],
    pricing: [
      {
        name: "Standard",
        price: "Contact",
        period: "for pricing",
        features: [
          "Full canvassing suite",
          "Route optimization",
          "Commission tracking",
          "Territory management",
        ],
      },
    ],
    integrations: ["Zapier", "Various CRMs"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "sunbase",
    name: "Sunbase",
    tagline: "D2D CRM Built for Solar, Roofing & Home Services",
    description:
      "Sunbase is a CRM and field sales platform built specifically for solar, roofing, and home improvement companies that rely on door-to-door sales. It handles the full sales cycle from canvassing to proposal, contract, and installation management — making it one of the few platforms that bridges the gap between field sales and project delivery.",
    logo: "☀️",
    website: "https://www.sunbasedata.com",
    rating: 4.2,
    reviewCount: 143,
    featured: false,
    categories: ["D2D Software", "Field Sales CRM", "Solar CRM"],
    industries: ["Solar", "Roofing & Storm Restoration", "Home Improvement", "HVAC", "Windows & Doors", "Waterproofing & Foundation"],
    companySize: ["SMB", "Mid-Market"],
    pricingFrom: "Contact for pricing",
    pricingModel: "Per user, contact sales",
    founded: "2018",
    headquartered: "USA",
    userBase: "Solar and home services focused",
    pros: [
      "End-to-end from canvassing to project management",
      "Strong solar and roofing workflow support",
      "Proposal and contract tools built in",
      "Good value for solar-specific teams",
    ],
    cons: [
      "Very industry-specific — less useful outside solar/roofing",
      "UI is less polished than SPOTIO or SalesRabbit",
      "Fewer third-party integrations",
    ],
    keyFeatures: [
      "D2D canvassing and lead capture",
      "Solar/roofing proposal tools",
      "Contract management",
      "Project tracking",
      "Territory management",
      "Performance analytics",
    ],
    pricing: [
      {
        name: "Standard",
        price: "Contact",
        period: "for pricing",
        features: [
          "D2D CRM",
          "Proposal tools",
          "Contract management",
          "Project tracking",
        ],
      },
    ],
    integrations: ["Zapier", "Solar-specific tools"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "knockio",
    name: "Knockio",
    tagline: "Simple, Powerful Canvassing Software for D2D Teams",
    description:
      "Knockio is a lightweight, affordable canvassing platform purpose-built for small to mid-size D2D sales teams. It strips away the complexity of larger platforms and focuses entirely on what field reps need: territory mapping, door tracking, lead capture, and follow-up tools. A strong choice for teams who find SalesRabbit or SPOTIO too expensive or feature-heavy.",
    logo: "👊",
    website: "https://knockio.com",
    rating: 4.4,
    reviewCount: 97,
    featured: false,
    categories: ["Canvassing", "D2D Software"],
    industries: ["Solar", "Pest Control", "Telecom", "Fiber / Cable / ISP", "Roofing & Storm Restoration", "Home Services", "Energy & Utilities"],
    companySize: ["SMB"],
    pricingFrom: "Affordable — contact for pricing",
    pricingModel: "Per user",
    founded: "2020",
    headquartered: "USA",
    userBase: "Small-mid D2D teams",
    pros: [
      "Simple, clean interface — minimal training needed",
      "Affordable vs. SPOTIO and SalesRabbit",
      "Focused feature set — exactly what D2D teams need",
      "Fast to set up and deploy",
    ],
    cons: [
      "Limited advanced analytics",
      "Fewer integrations than larger platforms",
      "Not suitable for enterprise-scale teams",
      "Newer, smaller support team",
    ],
    keyFeatures: [
      "Territory mapping & assignment",
      "Door knock tracking",
      "Lead capture & follow-up",
      "Rep activity tracking",
      "Basic reporting",
    ],
    pricing: [
      {
        name: "Standard",
        price: "Contact",
        period: "for pricing",
        features: [
          "Full canvassing suite",
          "Territory mapping",
          "Lead management",
          "Mobile app",
        ],
      },
    ],
    integrations: ["Zapier"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "canvass",
    name: "Canvass",
    tagline: "Purpose-Built Canvassing for D2D Sales Teams",
    description:
      "Canvass is a dedicated door-to-door canvassing app with a laser focus on the knocking workflow. It provides territory visualization, knock logging, real-time team tracking, and lead management without the overhead of a full field sales CRM. Best for teams that do pure canvassing work and want a fast, no-frills tool.",
    logo: "🎨",
    website: "https://canvass.com",
    rating: 4.1,
    reviewCount: 85,
    featured: false,
    categories: ["Canvassing", "D2D Software"],
    industries: ["Solar", "Pest Control", "Home Services", "Roofing & Storm Restoration", "Fiber / Cable / ISP", "Energy & Utilities", "Political Campaigns"],
    companySize: ["SMB"],
    pricingFrom: "Contact for pricing",
    pricingModel: "Per user",
    founded: "2017",
    headquartered: "USA",
    userBase: "Niche D2D canvassing teams",
    pros: [
      "Pure canvassing focus — no unnecessary features",
      "Easy to learn and use for field reps",
      "Real-time team location tracking",
      "Good for non-sales canvassing (campaigns, surveys)",
    ],
    cons: [
      "Limited CRM and pipeline features",
      "Not suitable for complex sales workflows",
      "Basic reporting only",
      "No advanced integrations",
    ],
    keyFeatures: [
      "Territory mapping",
      "Knock logging & dispositions",
      "Real-time rep tracking",
      "Lead capture",
      "Team management",
    ],
    pricing: [
      {
        name: "Standard",
        price: "Contact",
        period: "for pricing",
        features: [
          "Canvassing tools",
          "Territory mapping",
          "Team tracking",
          "Lead management",
        ],
      },
    ],
    integrations: ["Limited"],
    platforms: ["iOS", "Android"],
  },
  {
    slug: "d2d-crm",
    name: "D2D CRM",
    tagline: "CRM Software Designed From the Ground Up for D2D Sales",
    description:
      "D2D CRM is a niche platform built exclusively for door-to-door sales organizations. It focuses on the specific workflows of D2D teams — territory management, door-to-door tracking, lead follow-up, commission tracking, and rep accountability. A solid option for companies in home services that want a cost-effective solution without paying for features they'll never use.",
    logo: "🚪",
    website: "https://www.d2dcrm.com",
    rating: 4.0,
    reviewCount: 64,
    featured: false,
    categories: ["D2D Software", "Field Sales CRM"],
    industries: ["Home Services", "Pest Control", "Home Security & Alarm", "Energy & Utilities", "Roofing & Storm Restoration", "Solar", "Fiber / Cable / ISP"],
    companySize: ["SMB"],
    pricingFrom: "Contact for pricing",
    pricingModel: "Per user",
    founded: "2016",
    headquartered: "USA",
    userBase: "Small D2D organizations",
    pros: [
      "Built exclusively for D2D workflows",
      "Affordable for small teams",
      "Commission tracking built in",
      "Easy onboarding for non-technical teams",
    ],
    cons: [
      "Limited scalability for large organizations",
      "Basic UI compared to larger platforms",
      "Few third-party integrations",
    ],
    keyFeatures: [
      "Door-to-door tracking",
      "Territory management",
      "Lead and pipeline management",
      "Commission tracking",
      "Rep performance reporting",
    ],
    pricing: [
      {
        name: "Standard",
        price: "Contact",
        period: "for pricing",
        features: [
          "D2D workflow tools",
          "Commission tracking",
          "Territory management",
          "Mobile app",
        ],
      },
    ],
    integrations: ["Limited"],
    platforms: ["iOS", "Android", "Web"],
  },
  {
    slug: "leadsquared-field-force",
    name: "LeadSquared Field Force",
    tagline: "Enterprise Field Sales Automation at Scale",
    description:
      "LeadSquared Field Force is the enterprise-grade field sales automation module from LeadSquared, a larger CRM platform used by companies across North America, India, and Southeast Asia. It offers robust territory management, rep tracking, lead distribution, and advanced analytics — making it a good fit for large organizations running structured field sales operations with hundreds or thousands of reps.",
    logo: "🏢",
    website: "https://www.leadsquared.com",
    rating: 4.2,
    reviewCount: 312,
    featured: false,
    categories: ["Field Sales CRM", "Territory Management", "Enterprise Sales"],
    industries: ["Insurance", "Finance & Lending", "Healthcare", "Telecom", "Fiber / Cable / ISP", "Education", "Pharma & Medical Devices"],
    companySize: ["Mid-Market", "Enterprise"],
    pricingFrom: "$25/user/mo",
    pricingModel: "Per user, annual contract",
    founded: "2011",
    headquartered: "Bengaluru, India (offices in USA)",
    userBase: "100,000+ users globally",
    pros: [
      "Enterprise-scale — handles thousands of reps",
      "Strong lead distribution and automation",
      "Advanced analytics and reporting",
      "Good value at enterprise scale",
    ],
    cons: [
      "Not purpose-built for North American D2D workflows",
      "Complex setup and implementation",
      "Support is international (time zone gaps for US teams)",
      "Overkill for small D2D teams",
    ],
    keyFeatures: [
      "Field rep tracking & management",
      "Territory assignment & routing",
      "Lead distribution & prioritization",
      "Activity tracking & compliance",
      "Advanced analytics & dashboards",
      "CRM with automation",
    ],
    pricing: [
      {
        name: "Field Force",
        price: "$25",
        period: "/user/mo (annual)",
        features: [
          "Field rep management",
          "Territory tools",
          "Lead management",
          "Reporting",
        ],
      },
    ],
    integrations: ["Salesforce", "Zapier", "Webhooks", "Custom API"],
    platforms: ["iOS", "Android", "Web"],
  },
];

export const categories = [
  "All",
  "D2D Software",
  "Field Sales CRM",
  "Canvassing",
  "Territory Management",
  "Route Planning",
];

// All unique industries represented across tools — used for industry browsing & filtering
export const allIndustries = [
  "Solar",
  "Roofing & Storm Restoration",
  "Telecom",
  "Fiber / Cable / ISP",
  "Pest Control",
  "Home Security & Alarm",
  "HVAC",
  "Home Services",
  "Home Improvement",
  "Windows & Doors",
  "Waterproofing & Foundation",
  "Energy & Utilities",
  "Insurance",
  "Finance & Lending",
  "Healthcare",
  "Medical Devices",
  "Pharma & Medical Devices",
  "Distribution & Wholesale",
  "Manufacturing",
  "Food & Beverage",
  "Real Estate",
  "Education",
  "Political Campaigns",
];

export const getFeaturedTools = () =>
  tools
    .filter((t) => t.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const getToolBySlug = (slug: string) =>
  tools.find((t) => t.slug === slug);

export const getAllSlugs = () => tools.map((t) => t.slug);
