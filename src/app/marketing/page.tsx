import Navigation from "../components/Navigation";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">MARKETING</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Creating campaigns that move culture forward.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-xl md:text-2xl leading-relaxed">
              Our marketing team creates innovative campaigns that connect brands with audiences
              in meaningful ways. From strategy to execution, we deliver results that exceed expectations.
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-light mb-8">OUR EXPERTISE</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#c5b358] pl-6">
                  <h3 className="text-xl font-light mb-2">Brand Strategy</h3>
                  <p className="text-gray-600">
                    Developing comprehensive brand strategies that resonate with target audiences
                    and drive business growth.
                  </p>
                </div>
                <div className="border-l-4 border-[#c5b358] pl-6">
                  <h3 className="text-xl font-light mb-2">Digital Marketing</h3>
                  <p className="text-gray-600">
                    Leveraging social media, content marketing, and digital advertising to
                    maximize reach and engagement.
                  </p>
                </div>
                <div className="border-l-4 border-[#c5b358] pl-6">
                  <h3 className="text-xl font-light mb-2">Sponsorship Activation</h3>
                  <p className="text-gray-600">
                    Creating impactful sponsorship programs that deliver measurable ROI
                    for brands and properties.
                  </p>
                </div>
                <div className="border-l-4 border-[#c5b358] pl-6">
                  <h3 className="text-xl font-light mb-2">Content Creation</h3>
                  <p className="text-gray-600">
                    Producing compelling content across all platforms that tells your
                    brand's story effectively.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop"
                alt="Marketing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Case Studies */}
          <h2 id="case-studies" className="text-4xl font-light mb-12 tracking-wide">CASE STUDIES</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                  alt="Case study 1"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Global Sports Campaign</h3>
              <p className="text-gray-600 mb-4">
                Delivered a 300% increase in brand awareness through integrated marketing strategy.
              </p>
              <Link href="/contact" className="text-[#c5b358] flex items-center hover:translate-x-2 transition-transform">
                VIEW CASE STUDY
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&fit=crop"
                  alt="Case study 2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Music Festival Activation</h3>
              <p className="text-gray-600 mb-4">
                Created immersive brand experiences reaching over 500,000 festival attendees.
              </p>
              <Link href="/contact" className="text-[#c5b358] flex items-center hover:translate-x-2 transition-transform">
                VIEW CASE STUDY
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#292726] text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl font-light mb-6">LET'S CREATE SOMETHING AMAZING</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with us to build marketing campaigns that drive real results.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c5b358] text-[#292726] px-8 py-4 text-lg tracking-wider hover:bg-white transition"
            >
              START A PROJECT
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
