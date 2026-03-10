import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer | FieldSalesTools.com",
  description: "Affiliate disclosure and editorial disclaimer for FieldSalesTools.com.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ border: "1px solid #e2e8f0" }}>
          <h1 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "#0f2340" }}>
            Disclaimer
          </h1>
          <p className="text-xs mb-8" style={{ color: "#94a3b8" }}>
            Last updated: March 10, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#374151" }}>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Affiliate Disclosure</h2>
              <p className="mb-3">
                FieldSalesTools.com participates in affiliate marketing programs. This means that some of the links on this website are affiliate links. If you click on one of these links and make a purchase or sign up for a service, we may receive a commission — at no additional cost to you.
              </p>
              <p>
                We only recommend tools and services that we believe provide genuine value to field sales professionals. Our affiliate relationships do not influence the content, rankings, or reviews published on this site. Affiliate links are used to help fund and maintain this free resource.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Featured Listings Disclosure</h2>
              <p>
                Some tool listings on FieldSalesTools.com are marked with a &quot;Featured&quot; badge. These vendors have paid for prominent placement in our directory, including priority positioning on the homepage and category pages. Paid featured placement does not influence our editorial reviews, star ratings, or independent analysis of these tools.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Editorial Independence</h2>
              <p>
                The reviews, rankings, and content published on FieldSalesTools.com reflect our independent research and analysis. We gather information from publicly available sources, vendor websites, customer review platforms, and industry research. We do not guarantee the accuracy, completeness, or timeliness of any information presented, as software features and pricing change frequently.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>No Professional Advice</h2>
              <p>
                The content on this website is for informational purposes only and does not constitute professional business, legal, or financial advice. Before making a purchasing decision, we encourage you to conduct your own due diligence, request demos, and evaluate software based on your specific business needs.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Third-Party Links</h2>
              <p>
                Our website contains links to external websites operated by third parties. These links are provided for convenience and informational purposes only. FieldSalesTools.com has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Pricing and Feature Accuracy</h2>
              <p>
                Software pricing, features, and availability are subject to change at any time without notice. While we do our best to keep information current, we recommend visiting the vendor&apos;s official website to confirm current pricing and features before making any purchasing decision.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Advertising</h2>
              <p>
                FieldSalesTools.com may display advertisements through third-party networks, including Google AdSense. These ads are served automatically and their content is not endorsed by FieldSalesTools.com. Ad revenues help support the free operation of this directory.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>Contact</h2>
              <p>
                If you have questions about this disclaimer or our editorial practices, please reach out at{" "}
                <a href="mailto:advertise@fieldsalestools.com" style={{ color: "#1d6ce8" }}>
                  advertise@fieldsalestools.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
