"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

export default function Navigation() {
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
          <button className="md:hidden text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

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
