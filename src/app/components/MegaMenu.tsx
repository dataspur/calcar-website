"use client";

import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

interface MegaMenuProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  allMenus: {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }[];
}

export default function MegaMenu({ title, items, isOpen, onClose, allMenus }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Header with Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm px-6 lg:px-12 py-6 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-white flex items-center gap-3 hover:text-gray-300 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-sm tracking-wider">CLOSE</span>
          </button>

          {/* Top Menu Navigation */}
          <nav className="hidden md:flex items-center gap-6 xl:gap-8">
            {allMenus.map((menu, index) => (
              <button
                key={index}
                onClick={menu.onClick}
                className={`text-xs xl:text-sm tracking-wider transition whitespace-nowrap ${
                  menu.isActive
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {menu.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Items */}
      <div className="pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="space-y-6">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-gray-400 text-2xl md:text-3xl font-light tracking-wider hover:text-white transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
