import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Compare Field Sales Software | Side-by-Side Tool Comparisons",
  description: "Compare the top field sales and D2D software tools side-by-side. Detailed comparisons of pricing, features, and use cases to help you choose the right platform.",
};

const comparisons = [
  { slug: "spotio-vs-salesrabbit", title: "SPOTIO vs SalesRabbit", desc: "The two most popular D2D platforms — which is right for your team?" },
  { slug: "spotio-vs-badger-maps", title: "SPOTIO vs Badger Maps", desc: "D2D canvassing powerhouse vs best-in-class route planning." },
  { slug: "salesrabbit-vs-knockbase", title: "SalesRabbit vs Knockbase", desc: "85K-user established platform vs fast-growing home services challenger." },
  { slug: "badger-maps-vs-map-my-customers", title: "Badger Maps vs Map My Customers", desc: "Two leading field CRMs with mapping — how do they compare?" },
  { slug: "spotio-vs-knockbase", title: "SPOTIO vs Knockbase", desc: "Enterprise D2D leader vs affordable alternative for home services teams." },
  { slug: "repmove-vs-badger-maps", title: "RepMove vs Badger Maps", desc: "Highest-rated app vs most widely used — best value for outside sales?" },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Compare Field Sales Tools</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Side-by-side comparisons to help you pick the right platform for your team.
          </p>
        </div>
      </section>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((c) => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="no-underline">
              <div className="bg-white rounded-2xl p-6 h-full" style={{ border: "1px solid #e2e8f0", transition: "box-shadow 0.15s" }}>
                <h2 className="text-base font-black mb-2" style={{ color: "#0f2340" }}>{c.title}</h2>
                <p className="text-sm" style={{ color: "#64748b" }}>{c.desc}</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: "#1d6ce8" }}>View Comparison →</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
