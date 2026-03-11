export type ComparisonData = {
  slug: string;
  title: string;
  metaDescription: string;
  tool1: string; // tool slug
  tool2: string; // tool slug
  verdict: string;
  bestFor1: string;
  bestFor2: string;
  summary: string;
  differences: { label: string; tool1: string; tool2: string }[];
  winnerOverall: "tool1" | "tool2" | "tie";
  winnerReason: string;
};

export const comparisons: ComparisonData[] = [
  {
    slug: "spotio-vs-salesrabbit",
    title: "SPOTIO vs SalesRabbit",
    metaDescription: "SPOTIO vs SalesRabbit — detailed comparison of pricing, features, and use cases for field sales and D2D teams. Which is right for you?",
    tool1: "spotio",
    tool2: "salesrabbit",
    verdict: "SPOTIO wins for enterprise teams that need deep analytics and territory control. SalesRabbit wins for SMB D2D teams that want the best mobile UX and the largest user community.",
    bestFor1: "Mid-market and enterprise D2D teams that need advanced territory management, deep analytics, and CRM integrations.",
    bestFor2: "SMB to mid-market D2D teams, especially in roofing and solar, that want a proven mobile-first platform with 85,000+ users.",
    summary: "SPOTIO and SalesRabbit are the two most widely used purpose-built D2D sales platforms. Both offer territory management, canvassing tools, lead tracking, and mobile apps — but they serve slightly different needs. SPOTIO skews enterprise with deeper analytics and a more structured CRM. SalesRabbit skews toward SMBs with a more intuitive UX, stronger gamification, and DataGrid AI for prospect scoring.",
    differences: [
      { label: "Starting Price", tool1: "$25/user/mo (5-user min)", tool2: "$39/user/mo" },
      { label: "Contract", tool1: "Annual only", tool2: "Monthly or annual" },
      { label: "User Base", tool1: "Thousands of reps", tool2: "85,000+ users" },
      { label: "Best Industry Fit", tool1: "Solar, telecom, enterprise", tool2: "Roofing, solar, home services" },
      { label: "Analytics Depth", tool1: "Enterprise-grade dashboards", tool2: "Good — gamification-focused" },
      { label: "AI Features", tool1: "Activity AI insights", tool2: "DataGrid AI prospect scoring" },
      { label: "Minimum Team Size", tool1: "5 users minimum", tool2: "No minimum" },
      { label: "Mobile UX", tool1: "Strong", tool2: "Best-in-class" },
    ],
    winnerOverall: "tie",
    winnerReason: "Both are top-tier. Choose SPOTIO for enterprise control, SalesRabbit for SMB simplicity and community.",
  },
  {
    slug: "spotio-vs-badger-maps",
    title: "SPOTIO vs Badger Maps",
    metaDescription: "SPOTIO vs Badger Maps — D2D canvassing platform vs route planning CRM. Compare pricing, features, and which is better for your field sales team.",
    tool1: "spotio",
    tool2: "badger-maps",
    verdict: "SPOTIO wins for D2D and canvassing teams. Badger Maps wins for outside sales reps managing existing accounts who need best-in-class route optimization.",
    bestFor1: "High-volume D2D canvassing teams in solar, telecom, pest control, and home security.",
    bestFor2: "Outside sales reps visiting existing customers who need to optimize routes and manage accounts geographically.",
    summary: "SPOTIO and Badger Maps serve meaningfully different field sales use cases. SPOTIO is built for door-to-door canvassing — knocking new doors, capturing leads, tracking rep activity. Badger Maps is built for outside sales reps managing existing account relationships — route optimization, CRM visualization, and account visit management. The right choice depends entirely on whether your team is acquiring new customers (SPOTIO) or managing existing ones (Badger Maps).",
    differences: [
      { label: "Primary Use Case", tool1: "D2D canvassing & new leads", tool2: "Account management & route optimization" },
      { label: "Starting Price", tool1: "$25/user/mo", tool2: "$49/user/mo" },
      { label: "User Base", tool1: "Thousands of reps", tool2: "100,000+ field reps" },
      { label: "Route Optimization", tool1: "Good", tool2: "Best-in-class (100 stops)" },
      { label: "Canvassing Tools", tool1: "Best-in-class", tool2: "Limited" },
      { label: "CRM Integration", tool1: "Custom CRM + integrations", tool2: "Salesforce, HubSpot native sync" },
      { label: "Territory Mapping", tool1: "Strong", tool2: "Strong" },
      { label: "Best For", tool1: "Solar, telecom, pest control", tool2: "Medical, distribution, HVAC" },
    ],
    winnerOverall: "tie",
    winnerReason: "Different tools for different jobs. SPOTIO for new customer acquisition, Badger Maps for existing account management.",
  },
  {
    slug: "salesrabbit-vs-knockbase",
    title: "SalesRabbit vs Knockbase",
    metaDescription: "SalesRabbit vs Knockbase — 85K-user D2D leader vs fast-growing home services challenger. Compare features, pricing, and which is best for your team.",
    tool1: "salesrabbit",
    tool2: "knockbase",
    verdict: "SalesRabbit wins on track record and user community. Knockbase wins for home services teams wanting a focused, potentially more affordable alternative.",
    bestFor1: "Teams that want the proven platform with the largest D2D user community, especially in roofing, solar, and telecom.",
    bestFor2: "Home services teams (solar, roofing, HVAC, pest control) looking for a focused D2D platform with strong commission tracking.",
    summary: "SalesRabbit is the established market leader with 85,000+ users and a proven track record. Knockbase is a fast-growing challenger built specifically for home services D2D teams, with strong commission tracking and canvassing features. SalesRabbit has more integrations, a larger community, and DataGrid AI. Knockbase may offer more affordable pricing and a cleaner experience for teams that only need home services workflows.",
    differences: [
      { label: "User Base", tool1: "85,000+ users", tool2: "Growing (undisclosed)" },
      { label: "Starting Price", tool1: "$39/user/mo", tool2: "Contact for pricing" },
      { label: "Commission Tracking", tool1: "Available", tool2: "Built-in and strong" },
      { label: "DataGrid AI", tool1: "Yes — prospect scoring", tool2: "No" },
      { label: "Industry Focus", tool1: "Broad D2D + roofing/solar", tool2: "Home services specialist" },
      { label: "Telecom / Fiber", tool1: "Strong", tool2: "Good" },
      { label: "Digital Contracts", tool1: "Built-in", tool2: "Available" },
      { label: "Integrations", tool1: "Salesforce, HubSpot, Zapier", tool2: "Limited (newer)" },
    ],
    winnerOverall: "tool1",
    winnerReason: "SalesRabbit's track record, community, and DataGrid AI give it the edge — unless you specifically need Knockbase's commission workflow.",
  },
  {
    slug: "badger-maps-vs-map-my-customers",
    title: "Badger Maps vs Map My Customers",
    metaDescription: "Badger Maps vs Map My Customers — two leading field sales CRMs with mapping. Compare pricing, features, and which is better for outside sales teams.",
    tool1: "badger-maps",
    tool2: "map-my-customers",
    verdict: "Badger Maps wins for pure route optimization power. Map My Customers wins for CRM-first teams that want mapping as part of a fuller relationship management system.",
    bestFor1: "Outside sales reps who drive a lot and need the best route optimization with up to 100 stops.",
    bestFor2: "Field sales teams that need a full CRM with mapping, contact management, and deal tracking in one place.",
    summary: "Both Badger Maps and Map My Customers are purpose-built field sales CRMs with strong mapping features. Badger Maps has a larger user base (100,000+ vs growing) and is the undisputed leader in route optimization. Map My Customers offers a more complete CRM with better contact and deal management at a slightly higher price point. The choice comes down to whether route efficiency or CRM completeness is your top priority.",
    differences: [
      { label: "User Base", tool1: "100,000+ field reps", tool2: "Growing mid-market" },
      { label: "Starting Price", tool1: "$49/user/mo", tool2: "$60/user/mo" },
      { label: "Route Optimization", tool1: "Up to 100 stops — best-in-class", tool2: "Good route planning" },
      { label: "CRM Depth", tool1: "Good", tool2: "Strong — contact + deal mgmt" },
      { label: "Offline Mode", tool1: "Good", tool2: "Good" },
      { label: "Salesforce Integration", tool1: "Native sync", tool2: "Available" },
      { label: "HubSpot Integration", tool1: "Native sync", tool2: "Available" },
      { label: "Best For", tool1: "Medical, distribution, food & bev", tool2: "Distribution, home services, manufacturing" },
    ],
    winnerOverall: "tool1",
    winnerReason: "Badger Maps' larger user base, proven route optimization, and native CRM integrations give it the edge for most outside sales teams.",
  },
  {
    slug: "spotio-vs-knockbase",
    title: "SPOTIO vs Knockbase",
    metaDescription: "SPOTIO vs Knockbase — enterprise D2D leader vs affordable home services alternative. Compare features, pricing, and which is right for your team.",
    tool1: "spotio",
    tool2: "knockbase",
    verdict: "SPOTIO wins for mid-market and enterprise teams needing deep analytics and enterprise CRM. Knockbase is a solid alternative for home services SMBs that want D2D-specific features at lower cost.",
    bestFor1: "Mid-market to enterprise D2D teams across solar, telecom, pest control, and home security that need enterprise-grade analytics.",
    bestFor2: "SMB home services teams (solar, roofing, HVAC) that find SPOTIO too expensive or complex for their needs.",
    summary: "SPOTIO is the market-leading D2D platform with the deepest analytics and territory management capabilities. Knockbase is a focused alternative built for home services teams that offers similar core canvassing features — potentially at a lower price. SPOTIO requires a 5-user minimum and annual contract. Knockbase may be more accessible for smaller or newer D2D teams.",
    differences: [
      { label: "Starting Price", tool1: "$25/user/mo", tool2: "Contact for pricing" },
      { label: "Minimum Users", tool1: "5-user minimum", tool2: "No stated minimum" },
      { label: "Contract", tool1: "Annual only", tool2: "Flexible" },
      { label: "Analytics Depth", tool1: "Enterprise-grade", tool2: "Good for SMB" },
      { label: "Territory Management", tool1: "Best-in-class", tool2: "Strong" },
      { label: "Commission Tracking", tool1: "Available", tool2: "Built-in — stronger" },
      { label: "Telecom / Fiber", tool1: "Strong", tool2: "Good" },
      { label: "CRM Integrations", tool1: "Salesforce, HubSpot, AccuLynx", tool2: "Limited" },
    ],
    winnerOverall: "tool1",
    winnerReason: "SPOTIO wins on depth and integrations. Knockbase is the better choice only if SPOTIO's pricing or team minimum is a barrier.",
  },
  {
    slug: "repmove-vs-badger-maps",
    title: "RepMove vs Badger Maps",
    metaDescription: "RepMove vs Badger Maps — highest-rated app vs most widely used. Compare pricing, features, and which is best for outside sales teams.",
    tool1: "repmove",
    tool2: "badger-maps",
    verdict: "RepMove wins on price, ratings, and AI features. Badger Maps wins on user base, proven route power, and enterprise integrations.",
    bestFor1: "SMB and mid-market outside sales teams that want the best-rated tool at the most affordable price.",
    bestFor2: "Established outside sales teams that need proven route optimization with native Salesforce and HubSpot integration.",
    summary: "RepMove is the highest-rated field sales app on the market (4.9/5 G2) and dramatically more affordable than Badger Maps — starting at $20/user/mo vs $49. Badger Maps has a 100,000+ user base and is the established leader in route optimization with native CRM integrations. RepMove is the smarter choice on paper for cost-conscious teams; Badger Maps is the safer bet for teams that need proven scale and Salesforce connectivity.",
    differences: [
      { label: "G2 Rating", tool1: "4.9/5 (near-perfect)", tool2: "4.3/5" },
      { label: "Starting Price", tool1: "$20/user/mo", tool2: "$49/user/mo" },
      { label: "User Base", tool1: "Growing", tool2: "100,000+ field reps" },
      { label: "AI Features", tool1: "AI sales assistant built in", tool2: "Limited AI" },
      { label: "Route Optimization", tool1: "Strong", tool2: "Best-in-class (100 stops)" },
      { label: "Integrations", tool1: "5,000+ via Zapier", tool2: "Native Salesforce, HubSpot" },
      { label: "Annual Cost (1 user)", tool1: "$199–$499", tool2: "$588–$828" },
      { label: "Free Trial", tool1: "7-day free trial", tool2: "14-day free trial" },
    ],
    winnerOverall: "tool1",
    winnerReason: "RepMove's superior ratings, AI features, and 2.5x lower price make it the better value for most teams. Choose Badger Maps only if native Salesforce/HubSpot sync is non-negotiable.",
  },
];

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const getAllComparisonSlugs = () => comparisons.map((c) => c.slug);
