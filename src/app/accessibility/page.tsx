import Navigation from "../components/Navigation";

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-8">Accessibility Policy</h1>
          <p className="text-sm text-gray-600 mb-12">Last Updated: December 28, 2025</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-4 mt-8">Our Commitment</h2>
            <p className="mb-6 leading-relaxed">
              CALCAR is committed to ensuring digital accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying relevant accessibility standards.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">Conformance Status</h2>
            <p className="mb-6 leading-relaxed">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines
              explain how to make web content more accessible for people with disabilities.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">Measures to Support Accessibility</h2>
            <ul className="mb-6 space-y-2">
              <li>Include accessibility as part of our mission statement</li>
              <li>Integrate accessibility into our procurement practices</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>

            <h2 className="text-3xl font-light mb-4 mt-8">Feedback</h2>
            <p className="mb-6 leading-relaxed">
              We welcome your feedback on the accessibility of our website. Please contact us at accessibility@calcar.com
              if you encounter accessibility barriers.
            </p>

            <h2 className="text-3xl font-light mb-4 mt-8">Technical Specifications</h2>
            <p className="mb-6 leading-relaxed">
              Accessibility of this website relies on the following technologies to work with the particular combination
              of web browser and assistive technologies or plugins installed on your computer: HTML, WAI-ARIA, CSS, and JavaScript.
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
