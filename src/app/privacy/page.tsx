import Navigation from "../components/Navigation";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: December 28, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-4 mt-8">1. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, fill out a form,
              or communicate with us. This may include your name, email address, phone number, and other contact information.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to personalize your experience.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">3. Information Sharing</h2>
            <p className="mb-6 leading-relaxed">
              We do not share your personal information with third parties except as described in this policy or with your consent.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">4. Data Security</h2>
            <p className="mb-6 leading-relaxed">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access,
              disclosure, alteration, and destruction.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">5. Your Rights</h2>
            <p className="mb-6 leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. Please contact us at
              privacy@calcar.com to exercise these rights.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">6. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@calcar.com
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
