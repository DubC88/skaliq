import Link from 'next/link';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] mb-6">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 18, 2025</p>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <h2 className="text-xl font-semibold text-gray-100 pt-4">1. Introduction</h2>
          <p>
            This Cookie Policy explains how Skaliq ("we", "us", "our") uses cookies and similar technologies on our website, https://www.skaliq.com/. By continuing to browse or use our site, you consent to the use of cookies as described below.
          </p>
          <p>
            Company details:<br />
            Skaliq (sole proprietorship)<br />
            Registered Address: P.O. BOX 240, Montréal, Québec H3B 0A2, Canada<br />
            Email for inquiries: info@skaliq.com
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by your web browser when you visit a website. They help the site remember your preferences and whether you've already seen certain notifications (e.g., our cookie banner).
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[#ffffff20] rounded-md">
              <thead>
                <tr className="bg-[#ffffff10]">
                  <th className="py-2 px-4 border-b border-[#ffffff20] text-left">Cookie Category</th>
                  <th className="py-2 px-4 border-b border-[#ffffff20] text-left">Purpose</th>
                  <th className="py-2 px-4 border-b border-[#ffffff20] text-left">Third-Party?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-[#ffffff20]">Essential cookies</td>
                  <td className="py-2 px-4 border-b border-[#ffffff20]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Remember that you've accepted our Cookie Policy (so we don't show the banner on every page load).</li>
                      <li>Ensure basic site functionality.</li>
                    </ul>
                  </td>
                  <td className="py-2 px-4 border-b border-[#ffffff20]">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="italic">
            Note: We do not use any analytics tools (e.g., Google Analytics, Mixpanel, Mouseflow), advertising platforms (e.g., Google Ads, Facebook Ads), or social-media plugins/log-ins/"Like" buttons on our site. We therefore do not set any cookies for tracking, targeting, or social sharing.
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">4. Your Cookie Choices</h2>
          <p>Most web browsers allow you to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>View the cookies currently stored on your device.</li>
            <li>Block new cookies from being set.</li>
            <li>Delete existing cookies.</li>
          </ul>
          <p>
            Browser settings vary, but you can usually find these options under Settings or Preferences → Privacy & Security → Cookies and site data.
          </p>
          <p>
            Please note: Blocking or deleting essential cookies may impair certain parts of the site (for example, the cookie banner may reappear on every page).
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">5. Data Retention</h2>
          <p>
            We retain only the minimal information stored in our essential cookies (your banner-acceptance flag) for up to 365 days. No other data about your browsing or behavior is stored.
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time (for example, if we add new functionality). When we do, we will revise the "Last updated" date at the top and prompt you via our banner if re-consent is required.
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">7. Contact Us</h2>
          <p>If you have any questions or concerns about our use of cookies, please contact us:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Email: info@skaliq.com</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
