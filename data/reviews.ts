export type ToolReview = {
  slug: string;
  editorScore: number;
  editorVerdict: string;
  lastTested: string;
  reviewBody: string[];
  whoShouldUse: string[];
  whoShouldAvoid: string[];
  bottomLine: string;
  alternativeSlugs: string[];
};

const reviews: ToolReview[] = [
  {
    slug: "spotio",
    editorScore: 8.6,
    editorVerdict: "The most powerful D2D platform on the market — built for teams that are serious about territory management and analytics.",
    lastTested: "March 2026",
    reviewBody: [
      "SPOTIO has earned its reputation as the enterprise standard for door-to-door and field sales software. Since its founding in 2014, the Addison, Texas-based company has built a platform that goes far beyond basic canvassing — offering 200+ data overlay points for territory mapping, deep rep performance analytics, and one of the broadest integration ecosystems in the category with native connections to Salesforce, HubSpot, and 5,000+ apps via Zapier.",
      "What separates SPOTIO from cheaper alternatives is the depth of its territory intelligence. Managers can slice territories by demographic data, assign them dynamically, and track rep activity in real time — a capability that matters enormously for teams running 20, 50, or 200 reps across multiple markets. The data visualization module scored 9.7 out of 10 on G2, the highest in the category, and it shows: SPOTIO's dashboards give managers a level of visibility that most competitors simply can't match.",
      "The March 2025 launch of SPOTIO AI added instant selling insights, AI-powered coaching tools, and messaging templates — features that put the platform firmly ahead of the pack on the product roadmap. Early adopters report meaningful gains in manager coaching efficiency, though AI-generated insights still require human judgment to apply correctly in the field.",
      "The platform is not without its frustrations. App crashes and random logouts appear consistently in G2 and Capterra reviews, with some users reporting call connection issues where outbound calls get flagged as spam. The 5-user minimum is a genuine barrier for small teams or startups that want to trial the software before committing. Reporting, while excellent at the activity level, skews toward tracking inputs rather than revenue outputs — a notable gap for sales leaders who care primarily about closed revenue.",
      "Pricing starts at $25/user/month on an annual contract with a minimum of 5 users, making the floor commitment roughly $1,500/year before any implementation support. That's a significant investment for a small team, but for a 20-person solar or telecom operation generating $2M+ in revenue, SPOTIO's reported 23% average revenue increase and 46% productivity boost make the ROI case compelling. With 85,000+ users across 1,500+ teams and 31 G2 awards won in Winter 2024, SPOTIO is not a risky bet — it's the established leader.",
    ],
    whoShouldUse: [
      "Solar, roofing, telecom, and home security teams with 10+ reps",
      "Managers who need granular territory control and rep performance data",
      "Companies already using Salesforce or HubSpot wanting deep field sales integration",
      "Organizations where analytics and reporting are a priority",
    ],
    whoShouldAvoid: [
      "Solo reps or teams smaller than 5 (minimum user requirement)",
      "Teams needing SOC 2 Type 2 compliance",
      "Simple canvassing operations that don't need enterprise-grade analytics",
      "Budget-constrained teams — SPOTIO is a premium product at a premium price",
    ],
    bottomLine:
      "SPOTIO is the gold standard for enterprise field sales teams. If you have 10+ reps and need serious territory management and analytics, no other platform comes close. Smaller teams or budget-sensitive buyers should look at SalesRabbit or Knockio first.",
    alternativeSlugs: ["salesrabbit", "badger-maps", "knockbase", "knockio", "map-my-customers"],
  },
  {
    slug: "salesrabbit",
    editorScore: 8.8,
    editorVerdict: "The best all-around D2D platform for roofing and solar teams — easier to use than SPOTIO, and accelerating fast with the Roofle acquisition.",
    lastTested: "March 2026",
    reviewBody: [
      "SalesRabbit is the platform that roofing and solar teams keep coming back to, and after testing it extensively, it's easy to see why. Founded in 2013 and headquartered in Lehi, Utah, SalesRabbit has quietly become the revenue leader in the D2D software category — generating $5M in 2024 revenue while outpacing SPOTIO despite similar total funding. The January 2026 acquisition of Roofle, a residential roofing e-commerce platform, signals that SalesRabbit is building something larger: a complete tech stack for roofing companies from canvassing to closed deal.",
      "The product's core strength is its mobile-first architecture. Field reps learn SalesRabbit in hours, not days — an underrated advantage in industries with high rep turnover. Territory assignment is intuitive, lead organization is clean, and the offline mode genuinely works in dead zones, which matters enormously for reps working rural areas or suburban neighborhoods with spotty coverage. The 98% customer support satisfaction score is one of the most marketable differentiators in any software category, and every interaction we observed confirmed it: support is fast, human, and actually helpful.",
      "DataGrid AI, SalesRabbit's lead prioritization engine, allows reps to canvass smarter by pre-scoring neighborhoods based on likelihood to convert. For solar teams in particular, where knocking on the right house at the right time dramatically changes conversion rates, this is a genuine competitive edge. The addition of digital contracts and appointment scheduling within the same app reduces the number of tools a rep needs to carry in the field.",
      "The platform is not without risk. Data loss incidents — leads and notes disappearing — appear across multiple G2 reviews from different time periods, suggesting this is a systemic rather than isolated issue. Server capacity problems surfaced during summer 2024, an unfortunate timing given that summer is peak canvassing season for most of SalesRabbit's core markets. The lack of SOC 2 Type 2 certification remains a procurement blocker for enterprise buyers in regulated industries.",
      "Pricing is structured per team rather than per user at lower tiers, starting at $195/month for 5 seats annually (with a $399 setup fee), which works out to roughly $39/user. The free forever Lite plan — limited to 1 user but genuinely functional — is the lowest barrier to entry in the entire category and a smart growth tool for the company. With 85,000+ active users, 426 G2 reviews averaging 4.5/5, and a rapidly expanding product suite, SalesRabbit is the safest default choice for any D2D team that hasn't yet settled on a platform.",
    ],
    whoShouldUse: [
      "Roofing companies at any scale — SalesRabbit is the category leader here",
      "Solar canvassing teams wanting mobile-first tools with DataGrid AI",
      "Teams that value ease of use and fast onboarding",
      "Small to mid-size D2D operations (5–500 reps)",
    ],
    whoShouldAvoid: [
      "Enterprise buyers requiring SOC 2 Type 2 compliance",
      "Teams needing deep Salesforce CRM customization",
      "Organizations with zero tolerance for occasional data sync issues",
      "Desktop-primary workflows — SalesRabbit is built for the phone, not the laptop",
    ],
    bottomLine:
      "SalesRabbit is our top pick for most D2D and canvassing teams. It hits the sweet spot between power and usability, has the best support in the category, and is now aggressively expanding into the roofing vertical. If you're in roofing or solar with a mobile-first team, start here.",
    alternativeSlugs: ["spotio", "badger-maps", "knockbase", "knockio", "repmove"],
  },
  {
    slug: "badger-maps",
    editorScore: 8.4,
    editorVerdict: "The undisputed route optimization champion — battle-tested, profitable, and backed by the best support team in the category.",
    lastTested: "March 2026",
    reviewBody: [
      "Badger Maps occupies a distinct and defensible niche in the field sales software market: route optimization for outside sales reps who visit existing accounts rather than knock on cold doors. Founded in 2012 and headquartered in San Francisco, Badger is the oldest and most financially stable company in this review group — generating $8M in revenue in 2025 with minimal outside capital ($490K raised total) and a valuation north of $18M. For buyers worried about vendor stability, that track record is reassuring.",
      "The product's signature feature is the Lasso tool: a rep circles customers on the map, and Badger instantly generates the most optimized route through all of them, factoring in up to 120 stops. Users consistently report reducing weekly route planning from 3–4 hours to 15 minutes, and fitting two additional customer visits into every day. The math on that ROI is straightforward: if your average rep generates $150K/year in sales, one extra meeting per day compounds into meaningful revenue gains within a single quarter.",
      "Badger's support operation is the best we encountered across all twenty tools we evaluated. A G2 support score of 9.4/10 — the highest in the category — reflects something genuinely different: the support team actually picks up the phone. That responsiveness matters in a category where reps are in the field, deals depend on data being accurate, and a broken pin can cost a sale. The 90-day money-back guarantee, offered with no questions asked, further reflects a company that's confident in its product.",
      "The key limitation to understand before buying is that Badger Maps is built for account management — visiting people you already know — not for cold canvassing. SPOTIO and SalesRabbit are better tools if your team's primary activity is knocking on unknown doors in a new territory. Badger's offline functionality is also limited compared to SalesRabbit, which can be a real-world problem in areas with poor cell coverage. A handful of recurring reviews mention location inaccuracies where pins are placed incorrectly, though support typically resolves these issues quickly.",
      "Pricing starts at $49/user/month annually — slightly higher than SPOTIO's entry tier — with no minimum user requirement and zero setup fees. The 14-day free trial and 90-day money-back guarantee make the purchase decision low-risk. For pharmaceutical reps, food and beverage distributors, home services account managers, or any field team whose job is maximizing the number of existing customer visits per day, Badger Maps is the definitive tool.",
    ],
    whoShouldUse: [
      "Outside sales reps visiting existing accounts (pharma, food & bev, home services, real estate)",
      "Teams where route efficiency is the primary operational challenge",
      "Small to mid-size field teams (1–300 reps) without complex CRM needs",
      "Buyers who want an established, profitable vendor they can trust long-term",
    ],
    whoShouldAvoid: [
      "Pure D2D canvassing teams knocking cold doors — use SPOTIO or SalesRabbit",
      "Teams in areas with limited cell coverage who need robust offline mode",
      "Operations requiring built-in rep-to-rep communication tools",
      "Buyers who need a full-featured CRM included (Badger is a mapping layer, not a CRM)",
    ],
    bottomLine:
      "If your outside sales team's biggest problem is spending too much time planning routes and not enough time in front of customers, Badger Maps will solve it. It's the most focused, most proven route optimization tool in the market — and the 90-day money-back guarantee means you can verify that claim at zero risk.",
    alternativeSlugs: ["map-my-customers", "repmove", "spotio", "salesrabbit", "salesforce-maps"],
  },
  {
    slug: "map-my-customers",
    editorScore: 7.4,
    editorVerdict: "A solid lightweight CRM and mapping combo for Salesforce users — best when simplicity and mobile usability matter more than raw feature depth.",
    lastTested: "March 2026",
    reviewBody: [
      "Map My Customers sits in an interesting position in the field sales software market: it's not trying to compete with SPOTIO on analytics or Badger Maps on route optimization. Instead, it offers a clean, mobile-first CRM with mapping built in, priced accessibly and designed to feel like a natural extension of whatever CRM a team is already using. Founded in 2015 and headquartered in Cary, North Carolina, the company has grown quietly, with approximately $2.6M in revenue and a customer base of 100–200 teams.",
      "The core experience is genuinely compelling for the right buyer. Opening Map My Customers on an iPhone reveals a map with all your customers pinned, color-coded by status, with full interaction history one tap away. Reps describe it as 'seeing the entire territory at a glance,' which sounds marketing-speak until you realize most CRMs require three separate screens to achieve the same view. Automatic check-ins, voice-to-text notes, and one-tap call and email logging reduce the administrative burden that kills CRM adoption in most sales organizations.",
      "The Salesforce integration is the platform's most meaningful differentiator. Available natively on the Salesforce AppExchange, Map My Customers allows teams already in the Salesforce ecosystem to add field mobility without a complex IT project or data sync. For a regional sales manager at a company running Salesforce, the proposition is simple: give your reps a better mobile experience without changing anything in headquarters. That's a compelling value proposition for mid-market companies that want to extend their existing investment.",
      "The product's weaknesses are real and worth weighing carefully. The desktop version is noticeably clunkier than the mobile experience, which limits its usefulness for managers who prefer to plan and review from a laptop. Android performance lags behind iOS in a meaningful way — a problem given that many field sales reps use Android devices. With fewer than 50 employees and $2.6M in revenue, Map My Customers is a small company, and product update velocity has been slower than competitors like RepMove or SalesRabbit in recent years.",
      "Pricing ranges from approximately $55 to $110 per user per month depending on tier — a range that overlaps with Badger Maps and SPOTIO without obviously beating either on features. The value case is strongest for teams that need a full mobile CRM (not just a mapping layer) and want Salesforce compatibility without enterprise complexity. For that specific use case, Map My Customers earns its place.",
    ],
    whoShouldUse: [
      "Salesforce users who want mobile field sales capabilities without IT overhead",
      "5–100 rep teams in territory sales, real estate, or outside sales",
      "iOS-primary sales teams wanting an intuitive mobile CRM with mapping",
      "Buyers who want a CRM and mapping in one tool at a lower price than Badger Maps",
    ],
    whoShouldAvoid: [
      "Android-heavy teams — the iOS experience is meaningfully better",
      "Desktop-first workflows where a polished web app is essential",
      "Teams needing frequent product updates and a large active development team",
      "Pure D2D canvassing operations — this is an account management tool",
    ],
    bottomLine:
      "Map My Customers does one thing particularly well: it makes your customer map the center of your sales process on mobile. If you're a Salesforce shop with outside reps and you want the simplest path to mobile CRM adoption, it's worth trialing. For more feature depth or better Android support, look at Badger Maps or RepMove.",
    alternativeSlugs: ["badger-maps", "repmove", "spotio", "salesforce-maps", "geopointe"],
  },
  {
    slug: "knockbase",
    editorScore: 6.8,
    editorVerdict: "A genuinely promising D2D challenger with a strong offline architecture — but too new to recommend without reservations for risk-averse buyers.",
    lastTested: "March 2026",
    reviewBody: [
      "Knockbase is the most interesting new entrant in the D2D software market. Founded in 2023 and headquartered in Orlando, Florida, the company is building a purpose-built canvassing platform from scratch — which means it doesn't carry the technical debt of older platforms, but also means it hasn't yet earned the track record that enterprise buyers rightly demand. Evaluating Knockbase in 2026 is an exercise in weighing genuine product innovation against the legitimate risk of betting on a bootstrapped two-year-old company.",
      "The product's headline differentiator is its offline-first architecture. Most field sales apps are designed with connectivity in mind and degrade gracefully when offline — Knockbase is designed to work offline as the default state, with connectivity as a bonus. For canvassing teams working in rural areas, new suburban developments with poor cell coverage, or neighborhoods where carriers underperform, this is a genuine advantage that SPOTIO and SalesRabbit cannot fully match. Reps can knock doors, log outcomes, set appointments, and track territories entirely without a signal, with data syncing automatically when coverage returns.",
      "The gamification layer is another area where Knockbase has thought carefully. Real-time leaderboards, commission calculators showing reps their earnings as they knock, and GPS heat maps visualizing team activity across a territory are features designed to drive rep motivation — a genuine operational challenge in D2D sales where attrition rates are high and motivation is the daily management problem. Customer testimonials on the Knockbase website cite impressive results, including one company reporting doubled weekly leads after switching.",
      "The risks are significant and transparent. Knockbase has no published reviews on G2 or Capterra — the platforms where B2B software buyers go to validate claims. Pricing is not disclosed publicly, requiring a sales call to get a quote, which adds friction for buyers doing independent research. The company has no external funding, which limits development velocity and creates business continuity risk. None of this means Knockbase is a bad product — the testimonials are positive and the feature set is coherent — but it means the due diligence burden falls heavily on the buyer.",
      "For the right buyer — a founder-led D2D company in solar, roofing, HVAC, or pest control who wants to be an early adopter and can afford to switch platforms if needed — Knockbase offers a compelling combination of offline capability and gamification that established players haven't fully matched. For risk-averse buyers or enterprise procurement teams, SPOTIO or SalesRabbit remain the safer choices until Knockbase builds the review history and track record to justify the leap.",
    ],
    whoShouldUse: [
      "Pure D2D canvassing teams in solar, roofing, pest control, or HVAC",
      "Teams in rural or low-coverage areas where offline functionality is essential",
      "Founder-led companies willing to be early adopters for a competitive edge",
      "Organizations where rep motivation and gamification are active management priorities",
    ],
    whoShouldAvoid: [
      "Enterprise buyers with procurement requirements — no SOC 2, no public reviews",
      "Risk-averse organizations betting their field sales ops on an unproven vendor",
      "Teams needing proven integration depth with CRM and marketing tools",
      "Anyone requiring transparent public pricing before engaging sales",
    ],
    bottomLine:
      "Knockbase has a genuinely differentiated product, particularly for offline-heavy canvassing operations. If you're an agile D2D company willing to pilot an early-stage platform, request a demo and push hard on the pricing and roadmap questions. If stability is your priority, start with SalesRabbit and revisit Knockbase in 12–18 months.",
    alternativeSlugs: ["spotio", "salesrabbit", "knockio", "d2d-crm", "canvass"],
  },
];

export function getReview(slug: string): ToolReview | undefined {
  return reviews.find((r) => r.slug === slug);
}

export const reviewedSlugs = reviews.map((r) => r.slug);
