import Navigation from "../components/Navigation";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#292726] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">CAREERS</h1>
          <p className="text-2xl md:text-3xl text-[#c5b358] italic font-serif mb-12">
            Join our team and shape the future of sports, music, and entertainment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-8">WHY WORK AT CALCAR?</h2>
            <p className="text-xl leading-relaxed mb-6">
              At CALCAR, we believe in empowering our people to do their best work. We offer a
              dynamic, collaborative environment where innovation thrives and talent flourishes.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Great Culture</h3>
              <p className="text-gray-600">
                Work with passionate, talented people who are dedicated to excellence.
              </p>
            </div>

            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Career Growth</h3>
              <p className="text-gray-600">
                Continuous learning opportunities and clear paths for advancement.
              </p>
            </div>

            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-[#c5b358] mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Work on projects that reach millions of people worldwide.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <h2 className="text-4xl font-light mb-12 tracking-wide">OPEN POSITIONS</h2>
          <div className="space-y-6 mb-20">
            {[
              { title: "Senior Marketing Manager", location: "Los Angeles, CA", type: "Full-time" },
              { title: "Talent Agent - Sports", location: "New York, NY", type: "Full-time" },
              { title: "Event Coordinator", location: "Miami, FL", type: "Full-time" },
              { title: "Digital Content Strategist", location: "Remote", type: "Full-time" },
              { title: "Sales Executive", location: "Chicago, IL", type: "Full-time" },
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 border-l-4 border-[#c5b358] hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-light mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-gray-600">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="bg-[#292726] text-white px-6 py-3 hover:bg-[#c5b358] hover:text-[#292726] transition"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#292726] text-white p-12 md:p-16 text-center">
            <h2 className="text-4xl font-light mb-6">DON'T SEE A ROLE THAT FITS?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c5b358] text-[#292726] px-8 py-4 text-lg tracking-wider hover:bg-white transition"
            >
              SUBMIT YOUR RESUME
            </Link>
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
