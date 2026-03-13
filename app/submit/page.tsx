
export const metadata = {
  title: "Submit Your Tool | FieldSalesTools.com",
  description: "List your field sales or D2D software tool on FieldSalesTools.com. Free basic listing or featured placement for maximum visibility.",
};

export default function SubmitPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>


      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Submit Your Tool
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
            Get listed in front of thousands of field sales managers and D2D team leaders
            actively searching for software.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">

        {/* Listing options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
            <div className="text-2xl font-black mb-1" style={{ color: "#0f2340" }}>Free</div>
            <div className="text-sm mb-4" style={{ color: "#64748b" }}>Basic Listing</div>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "#374151" }}>
              {[
                "Listed in our directory",
                "Basic tool description",
                "Link to your website",
                "Standard placement",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6" style={{ backgroundColor: "#f0f6ff", border: "2px solid #1d6ce8" }}>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-3 inline-block" style={{ backgroundColor: "#1d6ce8" }}>
              MOST POPULAR
            </span>
            <div className="text-2xl font-black mb-1" style={{ color: "#0f2340" }}>$299<span className="text-sm font-normal text-gray-500">/mo</span></div>
            <div className="text-sm mb-4" style={{ color: "#64748b" }}>Featured Placement</div>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "#374151" }}>
              {[
                "Top 3 placement on homepage",
                "Featured badge on listing",
                "Priority in category pages",
                "Bold card border styling",
                "Included in email features",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="#22c55e" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <section className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
          <h2 className="text-xl font-black mb-2" style={{ color: "#0f2340" }}>Submit Your Tool</h2>
          <p className="text-sm mb-6" style={{ color: "#64748b" }}>
            Fill out the form below and we&apos;ll review your submission within 2 business days.
          </p>

          <form
            action="mailto:hello@fieldsalestools.com"
            method="get"
            encType="text/plain"
            className="space-y-5"
          >
            {/* Tool name */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Tool / Company Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                name="Tool Name"
                required
                placeholder="e.g. SPOTIO, SalesRabbit"
                className="w-full px-4 py-2.5 rounded-xl text-sm"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36" }}
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Website URL <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="url"
                name="Website"
                required
                placeholder="https://yoursite.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36" }}
              />
            </div>

            {/* Contact name */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Your Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                name="Contact Name"
                required
                placeholder="First Last"
                className="w-full px-4 py-2.5 rounded-xl text-sm"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36" }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Business Email <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="email"
                name="Email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36" }}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Primary Category
              </label>
              <select
                name="Category"
                className="w-full px-4 py-2.5 rounded-xl text-sm"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36", backgroundColor: "#fff" }}
              >
                <option value="">Select a category</option>
                <option>D2D Software</option>
                <option>Field Sales CRM</option>
                <option>Canvassing Tools</option>
                <option>Territory Management</option>
                <option>Route Planning</option>
                <option>Lead Management</option>
                <option>Other</option>
              </select>
            </div>

            {/* Listing type */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
                Listing Type
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: "#374151" }}>
                  <input type="radio" name="Listing Type" value="Free Basic Listing" defaultChecked />
                  Free Basic Listing
                </label>
                <label className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: "#374151" }}>
                  <input type="radio" name="Listing Type" value="Featured Placement ($299/mo)" />
                  Featured Placement — $299/month
                </label>
                <label className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: "#374151" }}>
                  <input type="radio" name="Listing Type" value="Full Package ($399/mo)" />
                  Full Package — $399/month
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#374151" }}>
                Short Description
              </label>
              <textarea
                name="Description"
                rows={4}
                placeholder="Describe your tool in 2–3 sentences. What problem does it solve for field sales teams?"
                className="w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                style={{ border: "1px solid #e2e8f0", outline: "none", color: "#1a1f36" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white text-sm font-bold"
              style={{ backgroundColor: "#1d6ce8" }}
            >
              Submit for Review →
            </button>

            <p className="text-xs text-center" style={{ color: "#94a3b8" }}>
              This will open your email client. You can also email us directly at{" "}
              <a href="mailto:hello@fieldsalestools.com" style={{ color: "#1d6ce8" }}>
                hello@fieldsalestools.com
              </a>
            </p>
          </form>
        </section>
      </main>


    </div>
  );
}
