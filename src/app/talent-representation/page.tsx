import Navigation from "../components/Navigation";
import Link from "next/link";

export default function TalentRepresentationPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#292726] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">TALENT REPRESENTATION</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Empowering talent to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              At CALCAR, we represent the world's most influential talent across sports, music,
              and entertainment. Our comprehensive approach combines strategic guidance with
              personalized service to help our clients reach new heights.
            </p>
          </div>

          {/* Sports Section */}
          <h2 id="sports" className="text-4xl font-light mb-12 tracking-wide">SPORTS & MEDIA</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Sports Talent</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive representation for athletes across all major sports,
                including contract negotiations, endorsements, and career planning.
              </p>
            </div>

            {/* Music Section */}
            <div id="music" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Music Artists</h3>
              <p className="text-gray-600 leading-relaxed">
                Full-service representation for musicians and performers, from booking
                to brand partnerships and creative development.
              </p>
            </div>

            {/* Entertainment Section */}
            <div id="entertainment" className="bg-white p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Entertainment</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic representation for actors, creators, and media personalities
                across film, television, and digital platforms.
              </p>
            </div>
          </div>

          {/* Creators Section */}
          <section id="creators" className="mb-20">
            <h3 className="text-3xl font-light mb-8">DIGITAL CREATORS</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We represent the next generation of influencers and digital creators, helping them build sustainable
              careers and meaningful brand partnerships across all social platforms.
            </p>
          </section>

          {/* Featured Talent Section */}
          <h2 className="text-4xl font-light mb-12 tracking-wide">FEATURED TALENT</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", name: "Sarah Johnson", role: "Professional Tennis Player" },
              { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", name: "Marcus Chen", role: "Olympic Swimmer" },
              { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", name: "Emma Rodriguez", role: "Music Artist" },
              { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", name: "David Kim", role: "Actor" },
              { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop", name: "Lisa Anderson", role: "Digital Creator" },
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", name: "James Wilson", role: "Football Star" },
              { img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop", name: "Maya Patel", role: "Singer-Songwriter" },
              { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", name: "Alex Turner", role: "Basketball Pro" },
            ].map((talent, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={talent.img}
                    alt={talent.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-light text-lg">{talent.name}</h3>
                <p className="text-sm text-gray-600">{talent.role}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#292726] text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl font-light mb-6">BECOME A CLIENT</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our roster of world-class talent and take your career to the next level.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c5b358] text-[#292726] px-8 py-4 text-lg tracking-wider hover:bg-white transition"
            >
              APPLY NOW
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
