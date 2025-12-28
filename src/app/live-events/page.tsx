import Navigation from "../components/Navigation";
import Link from "next/link";

export default function LiveEventsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-20 px-6 relative bg-[#292726] text-white min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop"
            alt="Live event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">LIVE EVENTS</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Creating unforgettable experiences that bring people together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-xl md:text-2xl leading-relaxed">
              From concept to execution, we deliver world-class live events that captivate
              audiences and create lasting memories. Our expertise spans sports tournaments,
              music festivals, corporate events, and everything in between.
            </p>
          </div>

          {/* Event Types */}
          <h2 id="expertise" className="text-4xl font-light mb-12 tracking-wide">EVENT EXPERTISE</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop"
                  alt="Sports events"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">SPORTS EVENTS</h3>
              <p className="text-gray-600">
                Championship tournaments, marathons, and competitive sporting events
                that showcase athletic excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop"
                  alt="Music festivals"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">MUSIC FESTIVALS</h3>
              <p className="text-gray-600">
                Multi-day festivals and concerts featuring world-renowned artists
                and emerging talent.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
                  alt="Corporate events"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">CORPORATE EVENTS</h3>
              <p className="text-gray-600">
                Professional conferences, product launches, and corporate experiences
                that inspire and engage.
              </p>
            </div>
          </div>

          {/* Regional Reach */}
          <section id="regional" className="mb-20">
            <h2 className="text-4xl font-light mb-8">OUR REGIONAL REACH</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              With teams across North America, Europe, Asia, and beyond, we deliver world-class events
              with local expertise and global standards.
            </p>
          </section>

          {/* Mass Participation */}
          <section id="participation" className="mb-20">
            <h2 className="text-4xl font-light mb-8">MASS PARTICIPATION EVENTS</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From marathons to charity walks, we excel at creating engaging experiences that bring
              communities together and drive meaningful participation.
            </p>
          </section>

          {/* Services List */}
          <div className="bg-white p-12 md:p-16 mb-20">
            <h2 className="text-3xl font-light mb-8">OUR SERVICES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Event Strategy & Concept Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Venue Selection & Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Production & Technical Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Talent Booking & Coordination</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Marketing & Promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Ticketing & Registration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Sponsorship Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5b358] mr-3">→</span>
                  <span>Post-Event Analysis & Reporting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Events */}
          <h2 className="text-4xl font-light mb-12 tracking-wide">FEATURED EVENTS</h2>
          <div className="space-y-8 mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop"
                alt="Event 1"
                className="w-full h-80 object-cover"
              />
              <div>
                <h3 className="text-3xl font-light mb-4">Summer Music Festival 2024</h3>
                <p className="text-gray-600 mb-4">
                  A three-day celebration of music featuring 50+ artists across 5 stages,
                  attended by over 100,000 fans from around the world.
                </p>
                <button className="text-[#aa412e] flex items-center hover:translate-x-2 transition-transform">
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop"
                  alt="Event 2"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-3xl font-light mb-4">Championship Finals 2024</h3>
                <p className="text-gray-600 mb-4">
                  The ultimate showdown bringing together elite athletes in a weekend of
                  competitive sports and entertainment.
                </p>
                <button className="text-[#aa412e] flex items-center hover:translate-x-2 transition-transform">
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#292726] text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl font-light mb-6">PLAN YOUR NEXT EVENT</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with an unforgettable live event experience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c5b358] text-[#292726] px-8 py-4 text-lg tracking-wider hover:bg-white transition"
            >
              GET STARTED
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
