import Navigation from "../components/Navigation";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Cookie Policy</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: December 28, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-4 mt-8">What Are Cookies</h2>
            <p className="mb-6 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">How We Use Cookies</h2>
            <p className="mb-6 leading-relaxed">
              We use cookies to understand how you use our website, to remember your preferences, and to improve your experience.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">Types of Cookies We Use</h2>
            <ul className="mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements</li>
            </ul>

            <h2 className="text-3xl font-light mb-4 mt-8">Managing Cookies</h2>
            <p className="mb-6 leading-relaxed">
              You can control and manage cookies through your browser settings. However, disabling cookies may affect
              the functionality of our website.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at privacy@calcar.com
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#fbfbf5] px-6 py-12 border-t border-[#292726]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <img src="/calcar-logo.png" alt="CALCAR" className="h-20 w-auto" />
          </div>
          <div className="border-t border-[#292726]/10 pt-8">
            <p className="text-sm">Copyright © 2025 CALCAR.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
