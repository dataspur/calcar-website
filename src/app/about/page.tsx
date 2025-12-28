import Link from "next/link";
import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">ABOUT CALCAR</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Innovating with purpose. Leading with influence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-light mb-6">OUR MISSION</h2>
              <p className="text-lg leading-relaxed mb-6">
                At CALCAR, we're dedicated to shaping the future of sports, music, and entertainment.
                Our incomparable ideas, expert craft, and global reach create valuable difference for
                talent, brands, and properties.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in the power of innovation and the importance of leading with integrity.
                Every project we undertake is driven by our commitment to excellence and our passion
                for making a meaningful impact.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl font-light text-[#c5b358] mb-4">50+</div>
              <h3 className="text-xl mb-2">YEARS OF EXPERIENCE</h3>
              <p className="text-gray-600">Leading the industry with innovative solutions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-[#c5b358] mb-4">1000+</div>
              <h3 className="text-xl mb-2">CLIENTS WORLDWIDE</h3>
              <p className="text-gray-600">Trusted by top brands and talent</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-[#c5b358] mb-4">25</div>
              <h3 className="text-xl mb-2">GLOBAL OFFICES</h3>
              <p className="text-gray-600">Presence across major markets</p>
            </div>
          </div>

          <div className="bg-[#292726] text-white p-12 md:p-16">
            <h2 className="text-4xl font-light mb-8">OUR VALUES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4 text-[#c5b358]">Innovation</h3>
                <p className="leading-relaxed">
                  We constantly push boundaries and challenge the status quo to deliver groundbreaking solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 text-[#c5b358]">Integrity</h3>
                <p className="leading-relaxed">
                  Trust and transparency are at the core of everything we do, building lasting relationships.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 text-[#c5b358]">Excellence</h3>
                <p className="leading-relaxed">
                  We strive for perfection in every project, setting the highest standards in our industry.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 text-[#c5b358]">Collaboration</h3>
                <p className="leading-relaxed">
                  Working together with clients and partners to achieve extraordinary results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">JOIN OUR TEAM</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore exciting career opportunities at CALCAR and be part of shaping the future.
          </p>
          <Link href="/careers" className="inline-block bg-[#292726] text-white px-8 py-4 text-lg tracking-wider hover:bg-[#c5b358] hover:text-[#292726] transition">
            VIEW OPEN POSITIONS
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">LATEST NEWS</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay informed with the latest updates, insights, and success stories from CALCAR.
          </p>
          <Link href="/news" className="inline-block bg-[#292726] text-white px-8 py-4 text-lg tracking-wider hover:bg-[#c5b358] hover:text-[#292726] transition">
            READ MORE
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="px-6 py-20 bg-[#292726] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">OUR IMPACT</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-light text-[#c5b358] mb-4">$10B+</div>
              <p className="text-lg">In Revenue Generated for Clients</p>
            </div>
            <div>
              <div className="text-5xl font-light text-[#c5b358] mb-4">5000+</div>
              <p className="text-lg">Successful Campaigns Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-light text-[#c5b358] mb-4">100+</div>
              <p className="text-lg">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Collective Section */}
      <section id="collective" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">THE COLLECTIVE</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our network of industry-leading partners, collaborators, and innovators working together to drive success.
          </p>
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="global" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">GLOBAL PRESENCE</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            With offices in major cities worldwide, we serve clients across all continents.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {["Los Angeles", "New York", "London", "Tokyo", "Dubai", "Sydney", "São Paulo", "Singapore"].map((city, i) => (
              <div key={i} className="p-6 bg-[#fbfbf5] border-l-4 border-[#c5b358]">
                <p className="text-lg font-light">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">GET IN TOUCH</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to work with us? Let's start a conversation about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#292726] text-white px-8 py-4 text-lg tracking-wider hover:bg-[#c5b358] hover:text-[#292726] transition"
          >
            CONTACT US
          </Link>
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

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/about" className="block mb-3 hover:text-[#c5b358] transition">About Us</Link>
              <Link href="/careers" className="block mb-3 hover:text-[#c5b358] transition">Careers</Link>
              <Link href="/news" className="block mb-3 hover:text-[#c5b358] transition">News</Link>
              <Link href="/contact" className="block mb-3 hover:text-[#c5b358] transition">Contact Us</Link>
            </div>
          </div>

          <div className="border-t border-[#292726]/10 pt-8">
            <p className="text-sm">Copyright © 2025 CALCAR.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
