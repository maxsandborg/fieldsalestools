export type IndustryData = {
  slug: string;
  name: string;
  industryKey: string; // matches tools.ts industries array value
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  whyFieldSales: string;
  topFeatures: { icon: string; title: string; desc: string }[];
  buyingGuide: { question: string; answer: string }[];
};

export const industries: IndustryData[] = [
  {
    slug: "solar",
    name: "Solar",
    industryKey: "Solar",
    metaTitle: "Best Solar Field Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best field sales and D2D software for solar companies. SPOTIO, SalesRabbit, Knockbase, and more — honest reviews, real pricing.",
    heroHeading: "Best Field Sales Software for Solar",
    heroSubheading:
      "Compare D2D canvassing and territory management tools built for solar sales teams.",
    intro:
      "Solar is one of the highest-volume door-to-door sales industries in the US. Reps knock hundreds of doors per week, managers oversee large territories, and accurate lead tracking directly impacts close rates and commission payouts. The right software can mean the difference between a team that crushes quota and one that burns through leads with no visibility.",
    whyFieldSales:
      "Solar sales is competitive, rep-heavy, and territory-driven. Purpose-built D2D platforms offer territory heat maps, lead status tracking, appointment scheduling, and performance dashboards that generic CRMs simply can't match for field teams.",
    topFeatures: [
      { icon: "🗺️", title: "Territory Heat Maps", desc: "Visualize where your reps are knocking, which homes have been contacted, and where opportunity is highest." },
      { icon: "📋", title: "Lead Status Tracking", desc: "Move prospects through stages (Not Home → Interested → Appointment Set → Sold) and never lose track of a lead." },
      { icon: "📊", title: "Performance Dashboards", desc: "Track rep activity, close rates, and pipeline by territory so managers can coach in real time." },
      { icon: "✍️", title: "Digital Contracts", desc: "Close deals in the field with e-signature and paperless proposals that sync to your CRM." },
      { icon: "🤖", title: "Prospect Scoring", desc: "Tools like SalesRabbit's DataGrid AI identify high-propensity homeowners before your reps knock a single door." },
    ],
    buyingGuide: [
      {
        question: "How large is your team?",
        answer:
          "SPOTIO requires a 5-user minimum and annual contract — ideal for teams of 10+. SalesRabbit has no minimum and offers monthly billing, making it accessible for smaller solar teams getting started.",
      },
      {
        question: "Do you need prospect data built in?",
        answer:
          "SalesRabbit's DataGrid AI provides pre-scored homeowner data, saving your reps time on manual research. SPOTIO focuses more on territory management and activity tracking.",
      },
      {
        question: "How important is CRM integration?",
        answer:
          "If you're running Salesforce or HubSpot, SPOTIO and SalesRabbit both offer native integrations. Knockbase has limited integrations but may be more affordable for smaller teams.",
      },
      {
        question: "Is commission tracking critical?",
        answer:
          "Knockbase has standout built-in commission tracking. SPOTIO and SalesRabbit both support commissions but it's not their primary differentiator.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    industryKey: "Roofing & Storm Restoration",
    metaTitle: "Best Roofing Field Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D and field sales software for roofing and storm restoration companies. SalesRabbit, SPOTIO, Knockbase, and more.",
    heroHeading: "Best Field Sales Software for Roofing",
    heroSubheading:
      "Compare canvassing, territory, and lead-tracking tools built for roofing and storm restoration sales teams.",
    intro:
      "Roofing is one of the most active D2D industries, with storm chasers, seasonal campaigns, and large canvassing crews descending on neighborhoods after hail or wind events. Speed matters: the first rep to knock a storm-damaged neighborhood often wins the job. Software that enables rapid territory deployment, mobile lead capture, and real-time rep tracking is mission-critical.",
    whyFieldSales:
      "Roofing sales is reactive and geographically concentrated. Purpose-built D2D tools let managers deploy reps to storm-hit areas, track who's been contacted, and manage the full pipeline from knock to signed contract — all from a mobile device in the field.",
    topFeatures: [
      { icon: "⚡", title: "Rapid Territory Deployment", desc: "Quickly assign reps to specific neighborhoods or ZIP codes following storm events." },
      { icon: "📱", title: "Mobile Lead Capture", desc: "Capture homeowner info, damage notes, and photos at the door without paper or manual data entry." },
      { icon: "📍", title: "Pin Mapping", desc: "Drop pins to show which homes have been contacted, need follow-up, or have signed." },
      { icon: "✍️", title: "Digital Proposals", desc: "Present estimates and get signatures at the door with e-signature integrations." },
      { icon: "🏆", title: "Leaderboards & Gamification", desc: "Drive rep competition and accountability with real-time leaderboards." },
    ],
    buyingGuide: [
      {
        question: "Are you storm chasing or doing steady-state canvassing?",
        answer:
          "Storm chasers need rapid territory setup and mobile-first tools. SalesRabbit and SPOTIO are both excellent for this use case. Knockbase is also popular with roofing crews.",
      },
      {
        question: "Do you need roofing-specific integrations?",
        answer:
          "SPOTIO integrates with AccuLynx (roofing CRM) natively. If your back office runs on Salesforce or HubSpot, both SPOTIO and SalesRabbit have those covered too.",
      },
      {
        question: "How do you manage commissions?",
        answer:
          "If commission tracking is critical to your workflow, Knockbase has the strongest built-in commission tools. SalesRabbit and SPOTIO both support it but as secondary features.",
      },
    ],
  },
  {
    slug: "telecom",
    name: "Telecom",
    industryKey: "Telecom",
    metaTitle: "Best Telecom & Fiber Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D and field sales software for telecom and fiber internet sales. SPOTIO, SalesRabbit, Knockbase, and more.",
    heroHeading: "Best Field Sales Software for Telecom & Fiber",
    heroSubheading:
      "Purpose-built D2D tools for cable, internet, and fiber sales teams canvassing residential and commercial markets.",
    intro:
      "Telecom and fiber internet companies run some of the largest and most structured door-to-door sales operations in the country. With millions of homes to reach and high rep turnover, telecom sales managers need software that can handle large-scale territory assignment, real-time rep tracking, and seamless onboarding for new reps.",
    whyFieldSales:
      "Telecom D2D is high-volume and process-driven. Large teams, structured territories, and strict compliance requirements make purpose-built field sales software essential — generic CRMs can't match the mapping, activity tracking, and rep accountability features these teams need.",
    topFeatures: [
      { icon: "🗺️", title: "Large-Scale Territory Management", desc: "Assign and manage territories across entire cities or regions, with sub-territory breakdowns by team or rep." },
      { icon: "👥", title: "Rep Onboarding & Training", desc: "Get new reps productive faster with built-in onboarding flows and training content." },
      { icon: "📊", title: "Activity Analytics", desc: "Track doors knocked, contacts made, demos delivered, and sales closed — all in one dashboard." },
      { icon: "📋", title: "Service Eligibility Checking", desc: "Some platforms integrate with serviceability databases to verify if a home is in-footprint before knocking." },
      { icon: "🔗", title: "CRM Integration", desc: "Push qualified leads directly into Salesforce or HubSpot for order entry and provisioning handoff." },
    ],
    buyingGuide: [
      {
        question: "What's your team size?",
        answer:
          "Telecom D2D teams range from 5-person regional crews to enterprise deployments of 500+ reps. SPOTIO handles both ends well. SalesRabbit is strong for mid-size telecom teams.",
      },
      {
        question: "Do you need fiber-specific features?",
        answer:
          "Some tools are adding fiber/ISP-specific features like address-level serviceability. Ask vendors specifically about fiber sales workflows before signing.",
      },
      {
        question: "How important is rep GPS tracking?",
        answer:
          "For large telecom crews, knowing where reps are and whether they're actually knocking is essential. SPOTIO and SalesRabbit both offer robust GPS tracking.",
      },
    ],
  },
  {
    slug: "fiber-cable-isp",
    name: "Fiber / Cable / ISP",
    industryKey: "Fiber / Cable / ISP",
    metaTitle: "Best Fiber & ISP Field Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D canvassing and field sales tools for fiber internet, cable, and ISP companies. SPOTIO, SalesRabbit, Knockbase, and more.",
    heroHeading: "Best Field Sales Software for Fiber & ISP",
    heroSubheading:
      "D2D canvassing and territory tools for fiber internet, cable, and broadband providers expanding their footprint.",
    intro:
      "Fiber internet expansion is one of the fastest-growing D2D sales categories. As ISPs roll out new infrastructure to previously unserved markets, they're deploying canvassing teams to drive residential take-rates. Getting to homeowners before competitors do — and converting them in the field — requires purpose-built software that handles territory, lead tracking, and real-time reporting.",
    whyFieldSales:
      "Fiber and ISP sales are time-sensitive and geographically constrained. Reps need to work newly-activated areas efficiently, track which homes have been contacted or converted, and feed data back to the business. Field sales platforms built for this workflow dramatically outperform generic tools.",
    topFeatures: [
      { icon: "📡", title: "Address-Level Mapping", desc: "Map territories down to individual addresses to track contact and conversion at the highest level of granularity." },
      { icon: "🗺️", title: "Build-Out Territory Coordination", desc: "Coordinate canvassing campaigns aligned with network build-out phases and go-live timelines." },
      { icon: "📊", title: "Take-Rate Reporting", desc: "Track conversion percentages by street, block, or territory to identify high-performing and underperforming areas." },
      { icon: "🔗", title: "OSS/BSS Integration", desc: "Connect with back-office systems for order entry and service activation handoff." },
      { icon: "📱", title: "Same-Day Install Scheduling", desc: "Some platforms allow reps to schedule installation appointments on the spot during the sales visit." },
    ],
    buyingGuide: [
      {
        question: "How large is your deployment footprint?",
        answer:
          "Small ISPs with one or two crews can start with SalesRabbit or Knockbase. Large telcos rolling out fiber nationally should look at SPOTIO's enterprise tier.",
      },
      {
        question: "Do you need integration with your provisioning system?",
        answer:
          "Most D2D platforms will push to Salesforce or HubSpot via API. Ask specifically about direct integration with OSS/BSS systems — fewer platforms support this natively.",
      },
    ],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    industryKey: "Pest Control",
    metaTitle: "Best Pest Control Field Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D and field sales software for pest control companies. SPOTIO, SalesRabbit, Knockbase, and more — honest reviews and pricing.",
    heroHeading: "Best Field Sales Software for Pest Control",
    heroSubheading:
      "D2D canvassing and territory management tools for pest control sales teams.",
    intro:
      "Pest control is one of the original door-to-door industries — and it remains one of the most active. Summer sales campaigns, college rep programs, and subscription-based service models make pest control D2D a unique combination of high volume, seasonal intensity, and recurring-revenue tracking. The right software helps managers run large summer teams and track the full customer lifecycle from initial knock to annual renewal.",
    whyFieldSales:
      "Pest control D2D has unique needs: managing large seasonal teams, tracking one-time vs. subscription sales, and maximizing the efficiency of summer canvassing campaigns. Purpose-built tools offer features that generic tools miss entirely.",
    topFeatures: [
      { icon: "☀️", title: "Summer Campaign Management", desc: "Manage large seasonal rep cohorts, territories, and leaderboards for summer pest campaigns." },
      { icon: "🔄", title: "Subscription Tracking", desc: "Track initial sale vs. recurring service agreement, with renewal reminders and lifecycle status." },
      { icon: "🏆", title: "Rep Gamification", desc: "Leaderboards, competitions, and performance tracking to keep seasonal reps motivated." },
      { icon: "📍", title: "Neighborhood Canvassing", desc: "Map contact history by household and build efficient knocking routes for your team." },
      { icon: "📱", title: "Mobile-First UX", desc: "Fast, simple mobile apps that new summer reps can learn in minutes." },
    ],
    buyingGuide: [
      {
        question: "Are you running summer campaigns with seasonal reps?",
        answer:
          "SalesRabbit's community and gamification features make it the top choice for summer pest programs. SPOTIO also handles seasonal scaling well.",
      },
      {
        question: "How important is subscription/renewal tracking?",
        answer:
          "Most D2D platforms track initial deals but treat recurring revenue differently. Ask vendors specifically about subscription lifecycle tracking before committing.",
      },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    industryKey: "HVAC",
    metaTitle: "Best HVAC Field Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best field sales and D2D software for HVAC companies. SPOTIO, SalesRabbit, Badger Maps, and more — honest reviews and pricing.",
    heroHeading: "Best Field Sales Software for HVAC",
    heroSubheading:
      "Territory, canvassing, and route planning tools for HVAC sales and service teams.",
    intro:
      "HVAC companies use field sales software in two distinct ways: D2D canvassing to acquire new residential customers, and route-optimized account management to service existing clients. Depending on your business model, you might need a pure D2D platform like SPOTIO or a route-planning CRM like Badger Maps.",
    whyFieldSales:
      "Whether you're knocking doors for system replacements or managing a territory of service accounts, field sales software helps HVAC reps work more efficiently, capture leads faster, and close more deals with fewer wasted trips.",
    topFeatures: [
      { icon: "🗺️", title: "Territory Management", desc: "Assign service zones and canvassing territories to reps and track coverage in real time." },
      { icon: "🔄", title: "Route Optimization", desc: "For service-based HVAC teams, route planning tools like Badger Maps minimize drive time between stops." },
      { icon: "📋", title: "Lead Capture", desc: "Capture homeowner info, system age, and needs at the door for efficient follow-up." },
      { icon: "📅", title: "Appointment Scheduling", desc: "Book estimates or maintenance appointments directly in the field with calendar integration." },
      { icon: "💰", title: "Quote & Proposal Tools", desc: "Some platforms integrate with HVAC quoting software for in-home presentations." },
    ],
    buyingGuide: [
      {
        question: "Are you focused on new customer acquisition or account management?",
        answer:
          "For D2D canvassing to find new customers, SPOTIO or SalesRabbit are the right tools. For managing existing service accounts and optimizing routes, Badger Maps is the better fit.",
      },
      {
        question: "Do you need integration with HVAC-specific software?",
        answer:
          "Most D2D platforms integrate with Salesforce and HubSpot. If you run Service Titan or similar HVAC field service software, ask vendors specifically about those integrations.",
      },
    ],
  },
  {
    slug: "home-services",
    name: "Home Services",
    industryKey: "Home Services",
    metaTitle: "Best Home Services Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D and field sales software for home services companies. SPOTIO, SalesRabbit, Knockbase, and more.",
    heroHeading: "Best Field Sales Software for Home Services",
    heroSubheading:
      "Compare canvassing and field sales tools for home improvement, home services, and residential sales teams.",
    intro:
      "Home services is a broad category that includes everything from solar and roofing to HVAC, pest control, windows, waterproofing, and landscaping. What these businesses share is a reliance on field sales reps — whether canvassing for new customers or managing service territories — who need mobile, real-time tools to be effective.",
    whyFieldSales:
      "Home services companies live and die by their field teams. Purpose-built tools offer territory heat maps, lead tracking, mobile capture, and performance analytics that generic CRMs aren't designed for. The best platforms let managers see exactly what their reps are doing — and optimize it.",
    topFeatures: [
      { icon: "🗺️", title: "Territory Heat Maps", desc: "See contact density and conversion rates by block, ZIP, or custom territory." },
      { icon: "📱", title: "Mobile Lead Capture", desc: "Reps capture homeowner info, photos, and notes at the door — no paper, no data entry lag." },
      { icon: "📊", title: "Rep Performance Tracking", desc: "Track doors knocked, demos, and sales by rep and territory to identify top performers." },
      { icon: "📅", title: "Appointment Scheduling", desc: "Book in-home consultations or service visits directly in the field." },
      { icon: "🔗", title: "CRM Integration", desc: "Push qualified leads to Salesforce, HubSpot, or industry-specific CRMs automatically." },
    ],
    buyingGuide: [
      {
        question: "What home services verticals do you serve?",
        answer:
          "Some platforms specialize: Knockbase is built for home services broadly. SPOTIO skews toward solar, telecom, and security. SalesRabbit is strong across roofing, solar, and general home services.",
      },
      {
        question: "What's your team size and budget?",
        answer:
          "SPOTIO requires a 5-user minimum and annual contract. SalesRabbit has a monthly billing option. Knockbase may offer the best value for small to mid-size home services teams.",
      },
    ],
  },
  {
    slug: "home-security",
    name: "Home Security",
    industryKey: "Home Security & Alarm",
    metaTitle: "Best Home Security Sales Software | FieldSalesTools.com",
    metaDescription:
      "Compare the best D2D and field sales software for home security and alarm companies. SPOTIO, SalesRabbit, and more.",
    heroHeading: "Best Field Sales Software for Home Security",
    heroSubheading:
      "D2D canvassing and territory management tools for home security and alarm system sales teams.",
    intro:
      "Home security is one of the most competitive D2D sales categories, with companies deploying hundreds of reps across national territories. The combination of high rep turnover, strict FTC compliance requirements, and intense quota pressure makes purpose-built software essential for managing large home security sales organizations.",
    whyFieldSales:
      "Home security D2D is highly regulated and fiercely competitive. The best platforms offer compliance-friendly workflows, territory management at scale, and detailed activity logging that protects both reps and companies from regulatory scrutiny.",
    topFeatures: [
      { icon: "📋", title: "Compliance-Ready Workflows", desc: "Log all customer interactions with timestamps and GPS data for regulatory compliance." },
      { icon: "🗺️", title: "Multi-Region Territory Management", desc: "Manage territories across multiple states or regions from a single dashboard." },
      { icon: "✍️", title: "Digital Contracts & E-Signature", desc: "Capture signed agreements in the field with compliant digital contracts." },
      { icon: "📊", title: "Rep Activity Logging", desc: "Full audit trail of rep location, doors knocked, and customer interactions." },
      { icon: "🏆", title: "Quota & Leaderboard Tracking", desc: "Daily, weekly, and monthly performance tracking with competitive leaderboards." },
    ],
    buyingGuide: [
      {
        question: "How large is your sales organization?",
        answer:
          "Large home security companies (50+ reps) should look at SPOTIO's enterprise tier for its depth of analytics and territory control. SalesRabbit handles mid-size teams very well.",
      },
      {
        question: "Do you need FTC/regulatory compliance features?",
        answer:
          "Ask vendors specifically about compliance workflows — cancellation period tracking, contract disclosures, and interaction logging are important for home security D2D.",
      },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getAllIndustrySlugs = () => industries.map((i) => i.slug);
