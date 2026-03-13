"use client";

import { useState, useRef } from "react";

/* ── Metadata is handled via generateMetadata in layout or head ── */

const FORM_ENDPOINT = "https://formsubmit.co/hello@fieldsalestools.com";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@fieldsalestools.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = "hello@fieldsalestools.com";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
        <section style={{ background: "linear-gradient(135deg, #0f2340 0%, #1a3a5c 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
            <div className="text-5xl mb-4">&#10003;</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Submission Received!
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#94b8d4" }}>
              Thanks for submitting your tool. We&apos;ll review it within 2 business days and
              get back to you.
            </p>
          </div>
        </section>
        <main className="flex-1 max-w-xl mx-auto w-full px-4 sm:px-6 py-12 text-center">
          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #e2e8f0" }}>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#0f2340" }}>
              What happens next?
            </h2>
            <ol className="text-sm text-left space-y-3 mb-6" style={{ color: "#374151" }}>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#1d6ce8" }}>1</span>
                <span>Our team reviews your submission for fit and accuracy.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#1d6ce8" }}>2</span>
                <span>We&apos;ll email you with any questions or to confirm listing details.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#1d6ce8" }}>3</span>
                <span>Your tool goes live on FieldSalesTools.com!</span>
              </li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/"
                className="flex-1 py-2.5 rounded-xl text-sm font-bold text-center"
                style={{ backgroundColor: "#f0f6ff", color: "#1d6ce8" }}
              >
                Back to Home
              </a>
              <button
                onClick={() => { setSubmitted(false); }}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: "#1d6ce8" }}
              >
                Submit Another Tool
              </button>
            </div>
          </div>

          {/* Contact box */}
          <div className="mt-6 bg-white rounded-2xl p-6" style={{ border: "1px solid #e2e8f0" }}>
            <p className="text-sm mb-3" style={{ color: "#64748b" }}>
              Prefer to reach out directly?
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-semibold" style={{ color: "#0f2340" }}>
                hello@fieldsalestools.com
              </span>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  backgroundColor: copied ? "#dcfce7" : "#f0f6ff",
                  color: copied ? "#16a34a" : "#1d6ce8",
                  border: copied ? "1px solid #bbf7d0" : "1px solid #dbeafe",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
            ref={formRef}
            action={FORM_ENDPOINT}
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = formRef.current;
              if (!form) return;

              fetch(FORM_ENDPOINT, {
                method: "POST",
                body: new FormData(form),
              })
                .then((res) => {
                  if (res.ok) {
                    setSubmitted(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    // Fallback: submit normally if fetch fails
                    form.submit();
                  }
                })
                .catch(() => {
                  form.submit();
                });
            }}
            className="space-y-5"
          >
            {/* Formsubmit config fields */}
            <input type="hidden" name="_subject" value="New Tool Submission — FieldSalesTools.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

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
              className="w-full py-3 rounded-xl text-white text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1d6ce8" }}
            >
              Submit for Review
            </button>
          </form>
        </section>

        {/* Direct contact */}
        <div className="mt-8 bg-white rounded-2xl p-6 text-center" style={{ border: "1px solid #e2e8f0" }}>
          <p className="text-sm mb-3" style={{ color: "#64748b" }}>
            Prefer to reach out directly? Copy our email below.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="mailto:hello@fieldsalestools.com"
              className="text-sm font-semibold"
              style={{ color: "#0f2340" }}
            >
              hello@fieldsalestools.com
            </a>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                backgroundColor: copied ? "#dcfce7" : "#f0f6ff",
                color: copied ? "#16a34a" : "#1d6ce8",
                border: copied ? "1px solid #bbf7d0" : "1px solid #dbeafe",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
