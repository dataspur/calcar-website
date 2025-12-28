import Navigation from "../components/Navigation";
import Link from "next/link";

export default function NewsPage() {
  const newsArticles = [
    {
      date: "December 20, 2025",
      title: "CALCAR ANNOUNCES PARTNERSHIP WITH MAJOR SPORTS LEAGUE",
      excerpt: "Groundbreaking deal brings innovative marketing solutions to millions of fans worldwide.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
    },
    {
      date: "December 15, 2025",
      title: "NEW OFFICE OPENING IN TOKYO",
      excerpt: "Expanding our global presence to better serve clients in the Asia-Pacific region.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    },
    {
      date: "October 15, 2025",
      title: "EMPOWERING THE NEXT GENERATION OF MUSIC CREATORS",
      excerpt: "Our new talent development program launches with record-breaking enrollment.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    },
    {
      date: "September 29, 2025",
      title: "WHY WOMEN ARE THE FUTURE OF FANDOM",
      excerpt: "New research reveals shifting demographics and opportunities in sports marketing.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    },
    {
      date: "August 28, 2025",
      title: "BEYOND A COMMERCIAL TO BECOME A MOMENT",
      excerpt: "Case study: How we helped a brand create cultural impact through live events.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    },
    {
      date: "August 10, 2025",
      title: "CALCAR WINS AGENCY OF THE YEAR AWARD",
      excerpt: "Recognized for outstanding work in talent representation and brand partnerships.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">NEWS & VIEWS</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif">
            Stay updated on the latest from CALCAR.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm mb-2 tracking-wider text-gray-600">{article.date}</p>
                <h3 className="text-xl font-light mb-4 leading-tight">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="flex items-center text-sm tracking-wider text-[#c5b358] hover:translate-x-2 transition-transform">
                  READ MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
