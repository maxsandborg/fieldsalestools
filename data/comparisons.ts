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
    title: "SPOTIO vs SalesRabbit (2025)",
    metaDescription:
      "SPOTIO vs SalesRabbit — an honest, research-backed comparison of pricing, features, use cases, and real user reviews. Which D2D platform is right for your team?",
    tool1: "spotio",
    tool2: "salesrabbit",
    verdict:
      "For most D2D teams, SalesRabbit is the easier, more flexible choice — especially if you're in roofing or solar. SPOTIO earns its place for enterprise teams that need serious territory analytics and don't mind committing to an annual contract with a 5-user floor.",
    bestFor1:
      "Mid-market and enterprise field sales teams (10+ reps) in solar, telecom, and home security that need the deepest territory management, data visualization, and CRM integrations available.",
    bestFor2:
      "SMB to enterprise D2D teams in roofing, solar, and pest control that want a proven mobile-first platform with a lower barrier to entry and the strongest support in the category.",
    summary:
      "SPOTIO and SalesRabbit are the two most battle-tested D2D platforms on the market. Both serve the same core use case — territory assignment, door-to-door lead tracking, rep performance monitoring — but they've carved out meaningfully different positions over time.\n\nSPOTIO is the territory analytics powerhouse. Its mapping scored 9.7/10 on G2 — the highest data visualization score in the category — and its integrations are unmatched: native Salesforce, HubSpot, NetSuite, AccuLynx, plus 5,000+ apps via Zapier. In March 2025, SPOTIO launched AI-powered coaching tools and instant selling insights. The catch: a 5-user minimum and annual-contract-only pricing mean SPOTIO is a considered purchase, not an impulse one.\n\nSalesRabbit is the ease-of-use champion. It holds the #1 position on G2's Small-Business Results Index for Field Sales — a direct measure of user satisfaction and reported ROI. Its free Lite tier removes all financial risk for solo reps evaluating the platform. The team recently acquired Roofle (January 2026), adding e-commerce pricing, AI-assisted financing, and digital proposals to build the most complete roofing tech stack in the market. If you're in roofing, this acquisition alone is a compelling reason to choose SalesRabbit.\n\nBoth platforms have approximately 85,000 active users and strikingly similar G2 ratings (4.5/5). The real decision comes down to your team's priorities: analytics depth vs. ease of use, roofing-vertical dominance vs. broader CRM integration, or annual commitment vs. flexible billing.",
    differences: [
      { label: "Starting Price", tool1: "$25/user/mo (5-user min, annual)", tool2: "$39/user/mo (Team, annual) or free Lite" },
      { label: "Free Option", tool1: "None — demo/pilot only", tool2: "Free forever Lite plan (1 user)" },
      { label: "Contract Flexibility", tool1: "Annual contract required", tool2: "Monthly or annual billing" },
      { label: "G2 Rating", tool1: "4.5/5 — 387 reviews", tool2: "4.5/5 — 426 reviews" },
      { label: "Data Visualization", tool1: "9.7/10 G2 — category-leading", tool2: "Strong but not benchmarked" },
      { label: "Integrations", tool1: "5,000+ via Zapier + native CRM suite", tool2: "30+ direct + Zapier + API" },
      { label: "AI Features", tool1: "SPOTIO AI (launched Mar 2025)", tool2: "DataGrid AI for lead prioritization" },
      { label: "Best Industry", tool1: "Solar, telecom, enterprise B2B", tool2: "Roofing (+ Roofle acquisition), solar" },
      { label: "Roofing Ecosystem", tool1: "AccuLynx integration", tool2: "Roofle + RoofLink — full stack" },
      { label: "Support Score", tool1: "Responsive — some complaints", tool2: "98% satisfaction score" },
      { label: "Revenue (2024)", tool1: "$3.6M", tool2: "$5M" },
    ],
    winnerOverall: "tool2",
    winnerReason:
      "SalesRabbit edges it for most teams: lower entry cost, free tier, flexible billing, higher revenue growth, and the Roofle acquisition giving it a clear edge in the largest D2D vertical. SPOTIO is the better pick for teams that need enterprise-grade territory analytics above all else.",
  },

  {
    slug: "spotio-vs-badger-maps",
    title: "SPOTIO vs Badger Maps (2025)",
    metaDescription:
      "SPOTIO vs Badger Maps — which field sales tool is right for your team? Compare pricing, use cases, ratings, and real user feedback.",
    tool1: "spotio",
    tool2: "badger-maps",
    verdict:
      "These two tools are less competitors than they are different tools for different jobs. SPOTIO is built for teams running high-volume D2D canvassing campaigns. Badger Maps is built for account managers who drive a territory and need to visit clients efficiently. Pick based on your sales motion — not brand recognition.",
    bestFor1:
      "D2D canvassing teams in solar, telecom, roofing, and home security that need territory assignment, rep tracking, and pipeline management at scale.",
    bestFor2:
      "Outside sales reps and account managers who visit existing clients on a regular schedule and need to dramatically reduce drive time and increase daily meetings.",
    summary:
      "At first glance, SPOTIO and Badger Maps look like head-to-head competitors — both have maps, territories, and mobile apps. But spend 30 minutes with each and the difference is obvious.\n\nBadger Maps is fundamentally a route optimization tool that added CRM features. Its signature 'Lasso' function lets reps circle customers on a map and get an optimized route in seconds. The company claims users spend 20% less time driving and attend 22% more meetings per week. Launched in 2012 with no VC funding beyond a seed round, Badger Maps has quietly grown to 4,000+ customers and $8M ARR — profitable and capital-efficient. Its G2 support score of 9.4/10 is the highest in the category, and it backs everything with a 90-day money-back guarantee.\n\nSPOTIO is fundamentally a D2D engagement platform that added routing. Its core strength is territory management — overlaying 200+ data points on heat maps, assigning reps to specific zones, and tracking what those reps actually do in the field. If your business model involves knocking doors you've never knocked before, rather than revisiting a structured account list, SPOTIO is the more appropriate tool.\n\nThe pricing reflects the positioning: Badger Maps has no user minimum and charges $49/user/month with a 90-day guarantee, which makes it approachable for individual reps or small teams. SPOTIO requires 5 users and an annual commitment, which signals its target market clearly.\n\nBadger Maps' 4.7 G2 rating outperforms SPOTIO's 4.5, driven largely by exceptional support and proven ROI metrics. But for a pure D2D sales team, Badger Maps simply doesn't have the canvassing infrastructure SPOTIO does.",
    differences: [
      { label: "Primary Use Case", tool1: "D2D canvassing & territory campaigns", tool2: "Route optimization for account managers" },
      { label: "Starting Price", tool1: "$25/user/mo (5-user min, annual only)", tool2: "$49/user/mo (no minimum, monthly available)" },
      { label: "Free Trial", tool1: "None", tool2: "14-day free trial + 90-day guarantee" },
      { label: "G2 Rating", tool1: "4.5/5 — 387 reviews", tool2: "4.7/5 — 270 reviews" },
      { label: "Support Score (G2)", tool1: "Good", tool2: "9.4/10 — category best" },
      { label: "Revenue (2025)", tool1: "$3.6M (2024)", tool2: "$8M — profitable & self-funded" },
      { label: "Customers", tool1: "1,500+ teams", tool2: "4,000+ customers" },
      { label: "Founded", tool1: "2014", tool2: "2012 — most established" },
      { label: "Territory Management", tool1: "Deep — 200+ data overlays", tool2: "Standard — zone-based" },
      { label: "Route Optimization", tool1: "Included", tool2: "Core feature — 'Lasso' function" },
      { label: "Canvassing Tools", tool1: "Full canvassing feature set", tool2: "Not designed for cold canvassing" },
      { label: "Money-Back Guarantee", tool1: "None", tool2: "90 days — no questions asked" },
    ],
    winnerOverall: "tie",
    winnerReason:
      "Neither wins outright — they serve fundamentally different workflows. If you're knocking unfamiliar doors, choose SPOTIO. If you're managing existing accounts and need to visit clients efficiently, choose Badger Maps.",
  },

  {
    slug: "salesrabbit-vs-knockbase",
    title: "SalesRabbit vs Knockbase (2025)",
    metaDescription:
      "SalesRabbit vs Knockbase — compare pricing, features, maturity, and real user reviews. Which D2D platform fits your canvassing team?",
    tool1: "salesrabbit",
    tool2: "knockbase",
    verdict:
      "SalesRabbit is the safe, proven choice — battle-tested by 85,000+ reps, backed by a decade of product development, and now the only D2D platform with a fully integrated roofing e-commerce stack. Knockbase is an interesting dark horse for teams that need offline-first canvassing with built-in gamification, but it carries real risk as a 2023-founded, unfunded startup.",
    bestFor1:
      "D2D teams in roofing, solar, pest control, or telecom that want a proven, full-featured platform with flexible billing and the largest user community in the category.",
    bestFor2:
      "Pure D2D canvassing teams that operate in areas with poor connectivity, want gamified leaderboards and commission tracking built-in, and are comfortable being an early adopter.",
    summary:
      "This comparison is less a battle of equals and more a study in risk appetite. SalesRabbit is a mature, funded platform with 426 G2 reviews, 85,000+ active users, and a January 2026 acquisition (Roofle) that makes it the most complete roofing sales platform on the market. Knockbase launched in 2023, has no external funding, and has yet to accumulate public reviews on G2 or Capterra.\n\nThat doesn't mean Knockbase is without merit. Its offline-first architecture is a genuine differentiator — canvassing crews working rural areas or spotty coverage zones will genuinely perform better with a platform that doesn't freeze when the signal drops. Knockbase also bakes commission calculators and gamified leaderboards directly into its core product, giving reps real-time earnings visibility that motivates performance in ways that SalesRabbit's leaderboards don't fully match.\n\nThe SalesRabbit case writes itself: 426 reviews averaging 4.5/5 stars, a free Lite tier to evaluate before committing, flexible monthly billing, and a team that answers customer service calls with a documented 98% satisfaction rate. For most sales managers with a budget to protect and a team to scale, SalesRabbit is the rational choice.\n\nThe Knockbase case is more nuanced: if you run a 10–50 rep D2D team in solar or roofing, are willing to bet on a newer platform, and need offline performance and gamification above all else, Knockbase is worth a serious demo. Just go in with eyes open about the company's maturity.",
    differences: [
      { label: "Founded", tool1: "2013 — 12+ years in market", tool2: "2023 — 2 years in market" },
      { label: "Funding", tool1: "$4.27M raised", tool2: "Bootstrapped — no external funding" },
      { label: "G2 Reviews", tool1: "426 reviews — 4.5/5", tool2: "No public G2 presence yet" },
      { label: "Active Users", tool1: "85,000+", tool2: "Not publicly disclosed" },
      { label: "Pricing", tool1: "From $39/user/mo (or free Lite)", tool2: "Custom — contact sales" },
      { label: "Offline Mode", tool1: "Solid but not marketed as core", tool2: "Offline-first architecture" },
      { label: "Gamification", tool1: "Leaderboards available", tool2: "Leaderboards + commission calculator built-in" },
      { label: "Roofing Stack", tool1: "Roofle + RoofLink integration (2026)", tool2: "Standard D2D without vertical specialization" },
      { label: "GPS Tracking", tool1: "Rep tracking available", tool2: "Real-time heat maps" },
      { label: "Support", tool1: "98% satisfaction score", tool2: "Unknown — no reviews" },
      { label: "Risk Level", tool1: "Low — established, funded", tool2: "High — new, unfunded, unproven" },
    ],
    winnerOverall: "tool1",
    winnerReason:
      "SalesRabbit wins convincingly on maturity, reviews, user base, and overall product breadth. Knockbase is a promising alternative for offline-heavy D2D operations, but the lack of public track record makes it hard to recommend for teams where software reliability is mission-critical.",
  },

  {
    slug: "badger-maps-vs-map-my-customers",
    title: "Badger Maps vs Map My Customers (2025)",
    metaDescription:
      "Badger Maps vs Map My Customers — honest comparison of pricing, features, and ratings for outside sales teams. Which route planning CRM is right for you?",
    tool1: "badger-maps",
    tool2: "map-my-customers",
    verdict:
      "Badger Maps is the stronger product with a proven track record — but both tools serve the same core use case. If you're on Salesforce or want a lighter, slightly cheaper option, Map My Customers is a legitimate alternative. For most teams, Badger Maps' combination of best-in-class support, 90-day guarantee, and 4,000+ customer track record makes it the lower-risk choice.",
    bestFor1:
      "Outside sales and account management teams of any size that need proven route optimization, excellent customer support, and deep CRM integrations.",
    bestFor2:
      "Salesforce users wanting a lightweight mobile CRM companion, or smaller teams seeking a slightly more affordable entry to territory mapping.",
    summary:
      "Badger Maps and Map My Customers are the two most direct competitors in the field sales route-planning CRM space. Both serve account managers who visit existing clients on territory-based routes. Both offer mapping, route optimization, CRM functionality, and mobile apps. The differences are a matter of scale, maturity, and depth.\n\nBadger Maps is the category leader by a wide margin. Founded in 2012, it has 4,000+ customers, $8M in annual revenue, and a 4.7 G2 rating built on 270 reviews — all earned without significant VC funding. Its 'Lasso' route-building feature remains a uniquely fast way to build optimized routes from a territory view. Critically, Badger Maps backs its product with a 90-day money-back guarantee and charges zero setup or integration fees. The support team scores 9.4/10 on G2 — the highest in the category.\n\nMap My Customers is a solid, lower-profile alternative that has carved out a niche as a Salesforce-friendly lightweight option. It's available on the Salesforce AppExchange, making it easily discoverable for Salesforce admins, and its self-service Salesforce integration works without IT involvement. With roughly 100 customers and $2.6M in revenue, it's a meaningfully smaller company — which means less track record but also potentially more responsive product development.\n\nPricing is close but not identical: Badger Maps starts at $49/user/month, Map My Customers at $55 for individuals. Badger Maps has a 14-day free trial; Map My Customers' trial terms are less clearly advertised. Both have native integrations with Salesforce, HubSpot, and Dynamics.\n\nThe one area where Map My Customers genuinely wins is the Salesforce AppExchange listing, which gives it visibility and credibility inside Salesforce-heavy organizations. For everyone else, Badger Maps is the more proven platform.",
    differences: [
      { label: "G2 Rating", tool1: "4.7/5 — 270 reviews", tool2: "Limited G2 presence" },
      { label: "Capterra Rating", tool1: "4.6/5 — 199 reviews", tool2: "4.5/5 — 69 reviews" },
      { label: "Founded", tool1: "2012", tool2: "2015" },
      { label: "Customers", tool1: "4,000+", tool2: "~100–200" },
      { label: "Revenue", tool1: "$8M ARR (profitable)", tool2: "$2.6M ARR" },
      { label: "Starting Price", tool1: "$49/user/mo", tool2: "~$55/user/mo" },
      { label: "Free Trial", tool1: "14 days + 90-day guarantee", tool2: "Contact company" },
      { label: "Support Score", tool1: "9.4/10 — category-leading", tool2: "4.5/5 on Capterra" },
      { label: "Salesforce AppExchange", tool1: "No dedicated listing", tool2: "Yes — native presence" },
      { label: "Mobile Quality", tool1: "Web + mobile — both strong", tool2: "iOS better than desktop" },
      { label: "Route Optimization", tool1: "'Lasso' feature — fast & intuitive", tool2: "Standard route planning" },
      { label: "Setup Fees", tool1: "$0", tool2: "Not published" },
    ],
    winnerOverall: "tool1",
    winnerReason:
      "Badger Maps wins on nearly every dimension: higher ratings, more customers, more revenue, better support score, and a money-back guarantee that removes purchase risk entirely. Map My Customers is a reasonable alternative for Salesforce-centric organizations or teams wanting a lighter-weight option.",
  },

  {
    slug: "spotio-vs-knockbase",
    title: "SPOTIO vs Knockbase (2025)",
    metaDescription:
      "SPOTIO vs Knockbase — compare pricing, features, company maturity, and use cases for D2D and canvassing sales teams.",
    tool1: "spotio",
    tool2: "knockbase",
    verdict:
      "SPOTIO is the enterprise-ready choice backed by 10+ years of product development and 1,500+ teams. Knockbase is a scrappy 2023 startup with offline-first architecture and built-in gamification that punches above its weight — but carries company-stage risk that most sales managers won't accept.",
    bestFor1:
      "D2D teams of 10–200+ reps in solar, telecom, roofing, or home security that need enterprise-grade territory management, analytics, and CRM integrations.",
    bestFor2:
      "Small to mid-size D2D canvassing teams (3–50 reps) willing to bet on a newer platform in exchange for offline performance, gamification, and a potentially lower price.",
    summary:
      "SPOTIO launched in 2014, has raised $4.75M, serves 1,500+ teams across 85,000+ reps, and spent the last decade building arguably the deepest territory analytics product in the D2D category. Knockbase launched in 2023, has raised nothing, has no public G2 or Capterra presence, and is asking you to take their word for it.\n\nThat's not a knock on Knockbase — every market leader was once an unknown startup. But it does mean the comparison is genuinely lopsided on the dimensions that matter most for corporate procurement: review volume, company stability, integration depth, and documented customer outcomes.\n\nWhere Knockbase genuinely differentiates itself is offline-first architecture. SPOTIO works well in connected environments but isn't marketed as offline-first. Knockbase was built from the ground up for canvassing crews in areas with unreliable coverage — rural solar markets, newly built subdivisions, and anywhere signal drops mid-shift. If your reps regularly lose data when the app loses connection, Knockbase's architecture solves a real problem.\n\nKnockbase also integrates commission calculators directly into rep workflows, giving field reps real-time earnings visibility during their shift. SPOTIO has commission support but it's not a front-and-center feature.\n\nFor the vast majority of sales managers evaluating these two platforms, SPOTIO is the obvious choice: proven, integrated, and backed by years of iteration. For the specific subset of buyers who need offline-first D2D with built-in gamification and are willing to be an early adopter, Knockbase is worth a demo.",
    differences: [
      { label: "Founded", tool1: "2014", tool2: "2023" },
      { label: "Funding", tool1: "$4.75M (Ballast Point Ventures)", tool2: "Bootstrapped" },
      { label: "G2 Reviews", tool1: "387 reviews — 4.5/5", tool2: "No public reviews" },
      { label: "Teams Served", tool1: "1,500+ teams", tool2: "Not disclosed" },
      { label: "Starting Price", tool1: "$25/user/mo (5-user min, annual)", tool2: "Custom — contact sales" },
      { label: "Offline Mode", tool1: "Available but not core positioning", tool2: "Offline-first — built for dead zones" },
      { label: "Commission Tracking", tool1: "Supported via reporting", tool2: "Built-in calculator — core feature" },
      { label: "Territory Analytics", tool1: "200+ data overlays — industry-leading", tool2: "Standard territory management" },
      { label: "AI Features", tool1: "SPOTIO AI (launched 2025)", tool2: "Not yet documented" },
      { label: "Integrations", tool1: "Salesforce, HubSpot, NetSuite, 5,000+ Zapier", tool2: "CRM support claimed, details sparse" },
      { label: "Company Risk", tool1: "Low — funded, 10+ years, 1,500 customers", tool2: "High — 2 years old, unfunded" },
    ],
    winnerOverall: "tool1",
    winnerReason:
      "SPOTIO wins on every measure of product maturity and market validation. Knockbase is the right bet only if offline performance is your single most critical requirement and you're comfortable adopting an early-stage platform.",
  },

  {
    slug: "repmove-vs-badger-maps",
    title: "RepMove vs Badger Maps (2025)",
    metaDescription:
      "RepMove vs Badger Maps — an honest comparison of the budget-friendly upstart vs the established route optimization leader. Who wins on value, ratings, and features?",
    tool1: "repmove",
    tool2: "badger-maps",
    verdict:
      "RepMove is the better value proposition on paper — lower price, higher ratings, more features per dollar. Badger Maps is the more proven platform with 4,000+ customers, $8M ARR, and a track record that reduces implementation risk. Your choice ultimately comes down to whether you prioritize cost-efficiency or peace of mind.",
    bestFor1:
      "Budget-conscious field sales teams (1–300 reps) looking for a full-featured mobile CRM with voice notes, expense tracking, and business card scanning at $19.99–$49/month.",
    bestFor2:
      "Outside sales teams that need proven route optimization, deep CRM integrations, and the confidence of a 13-year-old platform with 4,000+ customers behind it.",
    summary:
      "RepMove vs Badger Maps is one of the most interesting comparisons in the field sales software category, because the numbers tell a story that challenges conventional wisdom: a 2-person bootstrapped startup from Omaha is outscoring an 11-year-old San Francisco company with $490K in VC backing on every major user satisfaction metric.\n\nRepMove holds a 4.9 on G2 and a perfect 5.0 on Capterra. Badger Maps holds a 4.7 on G2 and a 4.6 on Capterra. RepMove's Flex plan starts at $19.99/month — roughly 40% of Badger Maps' $49 entry price. RepMove includes voice-to-text notes, a business card scanner, expense reports, mileage tracking, and a full mobile CRM at every paid tier. Badger Maps' equivalent tier doesn't include most of those features.\n\nSo why would anyone choose Badger Maps? Track record. With 4,000+ customers and $8M in annual revenue, Badger Maps has been tested in more edge cases, at more team sizes, and in more industries than RepMove. The 90-day money-back guarantee is a confident move by a company that's been doing this for 13 years. Badger Maps' support team scores 9.4/10 on G2 — the highest in the category — and that kind of institutional support quality takes years to build.\n\nRepMove is a 2–10 person team. That means the support is genuinely responsive — users consistently say the team builds features based on direct customer requests — but it also means the company's capacity for enterprise-scale onboarding, dedicated account management, and long-term product investment is naturally limited compared to a team of 15–20.\n\nFor a solo rep or a 5–10 person team on a tight budget, RepMove is hard to beat. For a 50+ rep organization that needs a vendor it can grow into and rely on for years, Badger Maps' longer runway is worth the price premium.",
    differences: [
      { label: "Starting Price", tool1: "$19.99/month — industry low", tool2: "$49/user/month" },
      { label: "Free Option", tool1: "Free forever tier + free trial", tool2: "14-day trial, 90-day guarantee" },
      { label: "G2 Rating", tool1: "4.9/5 — highest in category", tool2: "4.7/5" },
      { label: "Capterra Rating", tool1: "5.0/5 — perfect score", tool2: "4.6/5" },
      { label: "Founded", tool1: "2019", tool2: "2012" },
      { label: "Customers", tool1: "Not publicly disclosed", tool2: "4,000+ — well-documented" },
      { label: "Revenue", tool1: "Not disclosed", tool2: "$8M ARR (profitable)" },
      { label: "Team Size", tool1: "2–10 employees", tool2: "~15–20 employees" },
      { label: "Features (base tier)", tool1: "CRM, routing, voice notes, biz card scanner, expense tracking, mileage", tool2: "Route optimization, territory, check-ins, CRM sync" },
      { label: "Integrations", tool1: "5,000+ via Zapier + native CRM", tool2: "Native: Salesforce, HubSpot, Dynamics, Zoho + Zapier" },
      { label: "Support Score", tool1: "Praised — actively builds user-requested features", tool2: "9.4/10 G2 — category-leading support team" },
      { label: "Risk Profile", tool1: "Low cost, high value — smaller company", tool2: "Higher cost, proven — established company" },
    ],
    winnerOverall: "tool1",
    winnerReason:
      "RepMove wins on value: lower cost, higher ratings, more features per dollar, and a free tier that makes evaluation risk-free. Badger Maps wins on track record. If budget is tight, start with RepMove. If you're scaling a team and need a vendor you can bank on long-term, Badger Maps is worth the premium.",
  },
];

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
export const getAllComparisonSlugs = () => comparisons.map((c) => c.slug);
