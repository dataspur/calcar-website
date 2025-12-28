import Navigation from "../components/Navigation";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Terms of Use</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: December 28, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">2. Use License</h2>
            <p className="mb-6 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on CALCAR's website
              for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">3. Disclaimer</h2>
            <p className="mb-6 leading-relaxed">
              The materials on CALCAR's website are provided on an 'as is' basis. CALCAR makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions
              of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">4. Limitations</h2>
            <p className="mb-6 leading-relaxed">
              In no event shall CALCAR or its suppliers be liable for any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of the use or inability to use the materials on CALCAR's website.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">5. Contact Information</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about these Terms, please contact us at legal@calcar.com
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
