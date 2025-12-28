"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const allMenus = [
    { label: "ABOUT", isActive: openMenu === "about", onClick: () => setOpenMenu("about") },
    { label: "TALENT REPRESENTATION", isActive: openMenu === "talent", onClick: () => setOpenMenu("talent") },
    { label: "MARKETING", isActive: openMenu === "marketing", onClick: () => setOpenMenu("marketing") },
    { label: "LIVE EVENTS", isActive: openMenu === "events", onClick: () => setOpenMenu("events") },
    { label: "SALES", isActive: openMenu === "sales", onClick: () => setOpenMenu("sales") },
  ];

  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm px-6 lg:px-12 py-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#292726] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src="/calcar-logo.png" alt="CALCAR" className="h-10 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* About Section */}
              <div>
                <Link
                  href="/about"
                  className="text-white text-lg font-light tracking-wider block mb-3 hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <div className="pl-4 space-y-2">
                  {menuData.about.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-400 text-sm block hover:text-[#c5b358] transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Talent Representation Section */}
              <div>
                <Link
                  href="/talent-representation"
                  className="text-white text-lg font-light tracking-wider block mb-3 hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  TALENT REPRESENTATION
                </Link>
                <div className="pl-4 space-y-2">
                  {menuData.talent.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-400 text-sm block hover:text-[#c5b358] transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Marketing Section */}
              <div>
                <Link
                  href="/marketing"
                  className="text-white text-lg font-light tracking-wider block mb-3 hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  MARKETING
                </Link>
                <div className="pl-4 space-y-2">
                  {menuData.marketing.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-400 text-sm block hover:text-[#c5b358] transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Live Events Section */}
              <div>
                <Link
                  href="/live-events"
                  className="text-white text-lg font-light tracking-wider block mb-3 hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LIVE EVENTS
                </Link>
                <div className="pl-4 space-y-2">
                  {menuData.events.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-400 text-sm block hover:text-[#c5b358] transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sales Section */}
              <div>
                <Link
                  href="/sales"
                  className="text-white text-lg font-light tracking-wider block mb-3 hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SALES
                </Link>
                <div className="pl-4 space-y-2">
                  {menuData.sales.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-gray-400 text-sm block hover:text-[#c5b358] transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Additional Links */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <Link
                  href="/careers"
                  className="text-white text-base block hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CAREERS
                </Link>
                <Link
                  href="/news"
                  className="text-white text-base block hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NEWS
                </Link>
                <Link
                  href="/contact"
                  className="text-white text-base block hover:text-[#c5b358] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="flex gap-4 justify-center">
              <a href="https://instagram.com/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#c5b358] hover:border-[#c5b358] transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#c5b358] hover:border-[#c5b358] transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/calcar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-[#c5b358] hover:border-[#c5b358] transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menus */}
      <MegaMenu
        title="ABOUT"
        items={menuData.about}
        isOpen={openMenu === "about"}
        onClose={() => setOpenMenu(null)}
        allMenus={allMenus}
      />
      <MegaMenu
        title="TALENT REPRESENTATION"
        items={menuData.talent}
        isOpen={openMenu === "talent"}
        onClose={() => setOpenMenu(null)}
        allMenus={allMenus}
      />
      <MegaMenu
        title="MARKETING"
        items={menuData.marketing}
        isOpen={openMenu === "marketing"}
        onClose={() => setOpenMenu(null)}
        allMenus={allMenus}
      />
      <MegaMenu
        title="LIVE EVENTS"
        items={menuData.events}
        isOpen={openMenu === "events"}
        onClose={() => setOpenMenu(null)}
        allMenus={allMenus}
      />
      <MegaMenu
        title="SALES"
        items={menuData.sales}
        isOpen={openMenu === "sales"}
        onClose={() => setOpenMenu(null)}
        allMenus={allMenus}
      />
    </>
  );
}
