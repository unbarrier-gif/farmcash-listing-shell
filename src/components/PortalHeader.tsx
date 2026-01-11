import React from "react";
import { Link, NavLink } from "react-router-dom";
import { counts } from "../data/listings";

/**
 * FarmCash Portal Header
 * - Keeps your existing typography
 * - Adds the brand icon to the LEFT of the wordmark
 * - Uses pill-style navigation like the original mock
 */
const PortalHeader: React.FC = () => {
  const navItems = [
    { label: "All adverts", path: "/", count: counts.all },
    { label: "For sale", path: "/for-sale", count: counts.forSale },
    { label: "Wanted", path: "/wanted", count: counts.wanted },
  ];

  const getPillStyles = (label: string) => {
    return ({ isActive }: { isActive: boolean }) => {
      const base =
        "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border whitespace-nowrap flex items-center gap-2";

      if (isActive) {
        if (label === "All adverts") {
          return `${base} bg-brand-black text-white border-brand-black shadow-md cursor-default pointer-events-none`;
        }
        if (label === "For sale") {
          return `${base} bg-brand-green text-white border-brand-green shadow-md cursor-default pointer-events-none`;
        }
        return `${base} bg-brand-gold text-white border-brand-gold shadow-md cursor-default pointer-events-none`;
      }

      return `${base} bg-[#fefefe] text-neutral-600 border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-sm hover:-translate-y-[1px]`;
    };
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fefefe] shadow-sm border-b border-gray-100">
      {/* Top strapline */}
      <div className="bg-brand-black h-9 flex items-center justify-end px-6 border-b border-gray-800">
        <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
          Official FarmCash Sales Portal
        </span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Brand (icon + wordmark) */}
        <Link
          to="/"
          className="flex items-center gap-4 group transition-opacity hover:opacity-95"
          aria-label="FarmCash Home"
        >
          {/* Brand icon */}
          <img
            src="/brand/farmcash-mark.png"
            alt="FarmCash logo mark"
            className="h-14 w-14 object-contain"
            loading="eager"
          />

          {/* Wordmark */}
          <div className="flex flex-col">
            <div className="text-5xl logo-font leading-[0.85] flex">
              <span className="text-brand-green">Farm</span>
              <span className="text-brand-gold">Cash</span>
            </div>
            <div className="text-brand-gold font-bold text-[11px] tracking-tight whitespace-nowrap logo-font uppercase opacity-90">
              Input Finance and Machinery Import
            </div>
          </div>
        </Link>

        {/* Nav pills */}
        <nav
          className="flex items-center gap-3 bg-gray-50/50 p-1.5 rounded-full border border-gray-100 shadow-inner overflow-x-auto max-w-full no-scrollbar"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={getPillStyles(item.label)}
            >
              <span>{item.label}</span>
              <span className="opacity-60 text-[10px] font-bold">({item.count})</span>
            </NavLink>
          ))}

          {/* Optional CTA pill */}
          <a
            href="https://wa.me/447393138063"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold border whitespace-nowrap flex items-center gap-2 bg-brand-green text-white border-brand-green shadow-md hover:brightness-110 hover:-translate-y-[1px] transition-all"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PortalHeader;
