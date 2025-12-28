import Navigation from "../components/Navigation";
import Link from "next/link";

export default function SalesPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">SALES</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Maximizing value through strategic partnerships and rights sales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-xl md:text-2xl leading-relaxed">
              Our sales team specializes in creating mutually beneficial partnerships between
              brands and properties. We leverage deep industry relationships and market insights
              to drive revenue and deliver exceptional results.
            </p>
          </div>

          {/* Services Grid */}
          <h2 className="text-4xl font-light mb-12 tracking-wide">WHAT WE OFFER</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div id="rights" className="bg-[#fbfbf5] p-8">
              <h3 className="text-2xl font-light mb-4">Rights Sales</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive media rights sales for sports properties, entertainment content,
                and live events. We negotiate deals that maximize value while protecting our
                clients' interests.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Broadcasting Rights</li>
                <li>• Digital Media Rights</li>
                <li>• International Distribution</li>
                <li>• Content Licensing</li>
              </ul>
            </div>

            <div className="bg-[#fbfbf5] p-8">
              <h3 className="text-2xl font-light mb-4">Sponsorship Sales</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Strategic sponsorship programs that align brands with the right properties
                and audiences. We create compelling proposals that drive revenue and brand value.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Title Sponsorships</li>
                <li>• Category Partnerships</li>
                <li>• Venue Naming Rights</li>
                <li>• Team & League Partnerships</li>
              </ul>
            </div>

            <div id="hospitality" className="bg-[#fbfbf5] p-8">
              <h3 className="text-2xl font-light mb-4">Hospitality Sales</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Premium hospitality packages for major sporting events, concerts, and entertainment
                experiences. We create unforgettable VIP experiences for clients and partners.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• VIP Suites & Boxes</li>
                <li>• Corporate Hospitality</li>
                <li>• Exclusive Access Programs</li>
                <li>• Season Packages</li>
              </ul>
            </div>

            <div className="bg-[#fbfbf5] p-8">
              <h3 className="text-2xl font-light mb-4">Ticketing Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                End-to-end ticketing services for events of all sizes. From pricing strategy
                to distribution and analytics, we optimize every aspect of ticket sales.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Dynamic Pricing</li>
                <li>• Multi-Channel Distribution</li>
                <li>• Group Sales Programs</li>
                <li>• Premium Seating</li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#292726] text-white p-12 md:p-16 mb-20">
            <h2 className="text-4xl font-light mb-12 text-center">BY THE NUMBERS</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-light text-[#c5b358] mb-2">$2B+</div>
                <p className="text-sm uppercase tracking-wider">Annual Revenue Generated</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-[#c5b358] mb-2">500+</div>
                <p className="text-sm uppercase tracking-wider">Active Partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-[#c5b358] mb-2">150+</div>
                <p className="text-sm uppercase tracking-wider">Properties Represented</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-[#c5b358] mb-2">98%</div>
                <p className="text-sm uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Major Events Section */}
          <section id="events" className="mb-20">
            <h2 className="text-3xl font-light mb-8">MAJOR EVENTS</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We specialize in maximizing revenue for major sporting events, concerts, and entertainment
              experiences through strategic ticket sales, hospitality packages, and sponsorship integration.
            </p>
          </section>

          {/* Process Section */}
          <h2 className="text-4xl font-light mb-12 tracking-wide">OUR PROCESS</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-light mb-2">ANALYSIS</h3>
              <p className="text-gray-600 text-sm">
                Deep market research and property evaluation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-light mb-2">STRATEGY</h3>
              <p className="text-gray-600 text-sm">
                Customized sales strategy development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-light mb-2">EXECUTION</h3>
              <p className="text-gray-600 text-sm">
                Targeted outreach and negotiation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center text-white text-2xl font-light mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-light mb-2">ACTIVATION</h3>
              <p className="text-gray-600 text-sm">
                Partnership management and optimization
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#fbfbf5] p-12 md:p-16">
            <h2 className="text-4xl font-light mb-6">READY TO GROW YOUR REVENUE?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you maximize the value of your property or find
              the perfect partnership for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#292726] text-white px-8 py-4 text-lg tracking-wider hover:bg-[#c5b358] hover:text-[#292726] transition"
            >
              CONTACT OUR SALES TEAM
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fbfbf5] px-6 py-12 border-t border-[#292726]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <img
              src="/calcar-logo.png"
              alt="CALCAR"
              className="h-20 w-auto"
            />
          </div>

          <div className="border-t border-[#292726]/10 pt-8">
            <p className="text-sm">Copyright © 2025 CALCAR.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
