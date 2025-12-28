"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./components/MegaMenu";

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuData = {
    about: [
      { label: "OVERVIEW", href: "/about" },
      { label: "CAREERS", href: "/about#careers" },
      { label: "NEWS & VIEWS", href: "/about#news" },
      { label: "IMPACT", href: "/about#impact" },
      { label: "THE COLLECTIVE", href: "/about#collective" },
      { label: "GLOBAL PRESENCE", href: "/about#global" },
      { label: "CONTACT US", href: "/about#contact" },
    ],
    talent: [
      { label: "SPORTS & MEDIA", href: "/talent-representation#sports" },
      { label: "MUSIC", href: "/talent-representation#music" },
      { label: "ENTERTAINMENT", href: "/talent-representation#entertainment" },
      { label: "CREATORS", href: "/talent-representation#creators" },
    ],
    marketing: [
      { label: "OVERVIEW", href: "/marketing" },
      { label: "CASE STUDIES", href: "/marketing#case-studies" },
    ],
    events: [
      { label: "OVERVIEW", href: "/live-events" },
      { label: "OUR EXPERTISE", href: "/live-events#expertise" },
      { label: "OUR REGIONAL REACH", href: "/live-events#regional" },
      { label: "MASS PARTICIPATION", href: "/live-events#participation" },
    ],
    sales: [
      { label: "RIGHTS SALES", href: "/sales#rights" },
      { label: "HOSPITALITY SALES", href: "/sales#hospitality" },
      { label: "MAJOR EVENTS", href: "/sales#events" },
    ],
  };

  return (
    <main className="min-h-screen">
      {/* Full-Screen Black Hero Section */}
      <section className="min-h-screen bg-black relative flex flex-col">
        {/* Header Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm px-6 lg:px-12 py-6">
          <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/calcar-logo.png"
                alt="CALCAR"
                className="h-12 w-auto"
              />
              <span className="text-white text-2xl font-light tracking-[0.3em]">CALCAR</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 xl:gap-8">
              <button
                onMouseEnter={() => setOpenMenu("about")}
                className="text-white text-xs xl:text-sm tracking-wider hover:text-gray-300 transition"
              >
                ABOUT
              </button>
              <button
                onMouseEnter={() => setOpenMenu("talent")}
                className="text-white text-xs xl:text-sm tracking-wider hover:text-gray-300 transition whitespace-nowrap"
              >
                TALENT REPRESENTATION
              </button>
              <button
                onMouseEnter={() => setOpenMenu("marketing")}
                className="text-white text-xs xl:text-sm tracking-wider hover:text-gray-300 transition"
              >
                MARKETING
              </button>
              <button
                onMouseEnter={() => setOpenMenu("events")}
                className="text-white text-xs xl:text-sm tracking-wider hover:text-gray-300 transition whitespace-nowrap"
              >
                LIVE EVENTS
              </button>
              <button
                onMouseEnter={() => setOpenMenu("sales")}
                className="text-white text-xs xl:text-sm tracking-wider hover:text-gray-300 transition"
              >
                SALES
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Centered Logo and Brand */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <img
            src="/calcar-logo.png"
            alt="CALCAR"
            className="w-32 md:w-48 lg:w-64 mb-8 opacity-90"
          />
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-center">
            CALCAR
          </h1>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-12 right-8 md:right-12 animate-bounce">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>


      </section>

      {/* Main Content - Beige Background */}
      <section className="bg-[#fbfbf5] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
            <span className="italic text-[#c5b358]">Shaping the future</span> of sports, music and entertainment{" "}
            <span className="italic text-[#c5b358]">today</span>.
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl text-[#292726] leading-relaxed">
            At CALCAR, we're dedicated to innovating with purpose and leading with influence.
            Our incomparable ideas, expert craft and global reach create valuable difference for talent,
            brands and properties.
          </p>

          <Link href="/about" className="text-lg flex items-center hover:translate-x-2 transition-transform">
            LEARN MORE
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#fbfbf5] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 tracking-wide">THE NEWS</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* News Card 1 */}
            <div className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
                  alt="News 1"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm mb-2 tracking-wider">October 15, 2025</p>
              <h3 className="text-xl font-light mb-4 leading-tight">
                EMPOWERING THE NEXT GENERATION OF MUSIC CREATORS.
              </h3>
              <Link href="/news" className="flex items-center text-sm tracking-wider hover:translate-x-2 transition-transform">
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* News Card 2 */}
            <div className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
                  alt="News 2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm mb-2 tracking-wider">September 29, 2025</p>
              <h3 className="text-xl font-light mb-4 leading-tight">
                WHY WOMEN ARE THE FUTURE OF FANDOM.
              </h3>
              <Link href="/news" className="flex items-center text-sm tracking-wider hover:translate-x-2 transition-transform">
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* News Card 3 */}
            <div className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
                  alt="News 3"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm mb-2 tracking-wider">August 28, 2025</p>
              <h3 className="text-xl font-light mb-4 leading-tight">
                BEYOND A COMMERCIAL TO BECOME A MOMENT.
              </h3>
              <Link href="/news" className="flex items-center text-sm tracking-wider hover:translate-x-2 transition-transform">
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <Link href="/news" className="flex items-center text-sm tracking-wider hover:translate-x-2 transition-transform">
            SEE ALL NEWS
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-[#fbfbf5] px-6 py-20 border-t border-[#292726]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-6">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide">FOLLOW US @CALCAR</h2>
            <div className="flex gap-4">
              <a href="https://instagram.com/calcar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/calcar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/calcar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                alt="Instagram"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Sections */}
      <section className="bg-[#fbfbf5] px-6 py-20 border-t border-[#292726]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-light mb-4">ABOUT<br/>CALCAR</h3>
          </div>
          <div>
            <h3 className="text-3xl font-light mb-4">NEWS & VIEWS</h3>
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

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/about" className="block mb-3 hover:text-[#c5b358] transition">About Us</Link>
              <Link href="/careers" className="block mb-3 hover:text-[#c5b358] transition">Careers</Link>
              <Link href="/news" className="block mb-3 hover:text-[#c5b358] transition">News</Link>
              <Link href="/contact" className="block mb-3 hover:text-[#c5b358] transition">Contact Us</Link>
            </div>
          </div>

          <div className="border-t border-[#292726]/10 pt-8">
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <Link href="/terms" className="hover:text-[#c5b358] transition">Terms of Use</Link>
              <span>|</span>
              <Link href="/cookie-policy" className="hover:text-[#c5b358] transition">Cookie Policy</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-[#c5b358] transition">Privacy Policy</Link>
              <span>|</span>
              <Link href="/accessibility" className="hover:text-[#c5b358] transition">Accessibility Policy</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-[#c5b358] transition">Modern Slavery Statement</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-[#c5b358] transition">Tax Strategy</Link>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm">Copyright © 2025 CALCAR.</p>

              <div className="flex gap-4">
                <a href="https://instagram.com/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#292726] flex items-center justify-center hover:bg-[#292726] hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <button className="mt-12 ml-auto flex items-center justify-center w-12 h-12 border-2 border-[#292726] hover:bg-[#292726] hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#292726]/20 p-6 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h3 className="font-semibold mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve personalized ads or content,
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-6 py-2 border border-[#292726] text-sm hover:bg-[#292726] hover:text-white transition"
              >
                Customize
              </button>
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-6 py-2 border border-[#292726] text-sm hover:bg-[#292726] hover:text-white transition"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-6 py-2 bg-[#292726] text-white text-sm hover:bg-[#c5b358] hover:text-[#292726] transition"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menus */}
      <MegaMenu
        title="ABOUT"
        items={menuData.about}
        isOpen={openMenu === "about"}
        onClose={() => setOpenMenu(null)}
        allMenus={[
          { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
          { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
          { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
          { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
          { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
        ]}
      />
      <MegaMenu
        title="TALENT REPRESENTATION"
        items={menuData.talent}
        isOpen={openMenu === "talent"}
        onClose={() => setOpenMenu(null)}
        allMenus={[
          { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
          { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
          { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
          { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
          { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
        ]}
      />
      <MegaMenu
        title="MARKETING"
        items={menuData.marketing}
        isOpen={openMenu === "marketing"}
        onClose={() => setOpenMenu(null)}
        allMenus={[
          { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
          { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
          { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
          { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
          { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
        ]}
      />
      <MegaMenu
        title="LIVE EVENTS"
        items={menuData.events}
        isOpen={openMenu === "events"}
        onClose={() => setOpenMenu(null)}
        allMenus={[
          { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
          { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
          { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
          { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
          { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
        ]}
      />
      <MegaMenu
        title="SALES"
        items={menuData.sales}
        isOpen={openMenu === "sales"}
        onClose={() => setOpenMenu(null)}
        allMenus={[
          { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
          { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
          { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
          { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
          { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
        ]}
      />
    </main>
  );
}
