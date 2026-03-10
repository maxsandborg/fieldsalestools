import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | FieldSalesTools.com",
  description: "Privacy Policy for FieldSalesTools.com — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-10" style={{ border: "1px solid #e2e8f0" }}>
          <h1 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "#0f2340" }}>
            Privacy Policy
          </h1>
          <p className="text-xs mb-8" style={{ color: "#94a3b8" }}>
            Last updated: March 10, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#374151" }}>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>1. Introduction</h2>
              <p>
                Welcome to FieldSalesTools.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fieldsalestools.com. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>2. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in the following ways:</p>
              <p className="mb-2"><strong>Automatically Collected Data:</strong> When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected through cookies and similar tracking technologies.</p>
              <p><strong>Information You Provide:</strong> If you submit a tool listing or contact us via email, we collect the information you voluntarily provide, such as your name, email address, company name, and website URL.</p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Operate and improve the website</li>
                <li>Respond to your inquiries and process tool submissions</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Display relevant advertising through third-party ad networks (such as Google AdSense)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>4. Cookies and Tracking Technologies</h2>
              <p className="mb-3">
                We use cookies and similar technologies to enhance your experience on our site. Cookies are small data files placed on your device that help us understand how you use the site.
              </p>
              <p className="mb-3">
                <strong>Google AdSense:</strong> We may display advertisements served by Google AdSense. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#1d6ce8" }}>
                  Google Ads Settings
                </a>.
              </p>
              <p>
                You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of some parts of our site.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>5. Third-Party Links and Affiliate Links</h2>
              <p>
                Our site contains links to third-party websites and may include affiliate links. When you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>6. Third-Party Analytics</h2>
              <p>
                We may use third-party analytics services such as Google Analytics to help us understand how visitors interact with our site. These services may collect information about your use of our site and other websites. The data is used in aggregate form to improve the site. Google Analytics&apos; privacy policy is available at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#1d6ce8" }}>
                  policies.google.com/privacy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>7. Data Retention</h2>
              <p>
                We retain information you provide (such as tool submission emails) only as long as necessary to respond to your inquiry or process your request. Automatically collected data is retained in accordance with our analytics providers&apos; standard retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>8. Children&apos;s Privacy</h2>
              <p>
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>9. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete personal information we hold about you. To exercise these rights, please contact us at the email address below.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-base font-black mb-3" style={{ color: "#0f2340" }}>11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:advertise@fieldsalestools.com" style={{ color: "#1d6ce8" }}>
                  advertise@fieldsalestools.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
