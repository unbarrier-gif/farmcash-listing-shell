import React from "react";
import { NavLink, Link } from "react-router-dom";
import { counts } from "../data/listings";

const navItems = [
  { label: "All adverts", path: "/", count: counts.all, accent: "all" as const },
  { label: "For sale", path: "/for-sale", count: counts.forSale, accent: "sale" as const },
  { label: "Wanted", path: "/wanted", count: counts.wanted, accent: "wanted" as const },
];

const pillBase =
  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border whitespace-nowrap flex items-center gap-2";

const pillClass = (accent: "all" | "sale" | "wanted") => {
  return ({ isActive }: { isActive: boolean }) => {
    // Active states (premium + consistent)
    if (isActive) {
      if (accent === "all") return `${pillBase} bg-neutral-900 text-white border-neutral-900 shadow-md cursor-default pointer-events-none`;
      if (accent === "sale") return `${pillBase} bg-[#75ac49] text-white border-[#75ac49] shadow-md cursor-default pointer-events-none`;
      return `${pillBase} bg-[#ca9c29] text-white border-[#ca9c29] shadow-md cursor-default pointer-events-none`;
    }

    // Inactive states (polished hover)
    return `${pillBase} bg-[#fefefe] text-neutral-600 border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-sm hover:-translate-y-[1px]`;
  };
};

const PortalHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#fefefe] shadow-sm border-b border-gray-100">
      {/* Top strapline */}
      <div className="bg-neutral-900 h-9 flex items-center justify-end px-6 border-b border-gray-800">
        <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
          Official FarmCash Sales Portal
        </span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-4 group transition-opacity hover:opacity-95"
          aria-label="FarmCash Home"
        >
          {/* Icon */}
          <img
            src="/brand/farmcash-mark.png"
            alt="FarmCash logo mark"
            className="h-12 w-12 object-contain"
          />

          {/* Wordmark */}
          <div className="flex flex-col">
          <div className="text-3xl md:text-4xl logo-font leading-[0.9] flex">
              <span className="text-[#75ac49]">Farm</span>
              <span className="text-[#ca9c29]">Cash</span>
            </div>

            {/* IMPORTANT: remove the old ml-[1.6em] so it aligns correctly with the icon */}
            <div className="text-[#ca9c29] font-bold text-[10px] tracking-tight whitespace-nowrap logo-font uppercase opacity-90">
              Input Finance and Machinery Import
            </div>
          </div>
        </Link>

        {/* Nav pills */}
        <nav
          className="flex items-center gap-3 bg-gray-50/50 p-1.5 rounded-full border border-gray-100 shadow-inner overflow-x-auto max-w-full"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === "/"} className={pillClass(item.accent)}>
              <span>{item.label}</span>
              <span className="opacity-60 text-[10px] font-bold">({item.count})</span>
            </NavLink>
          ))}

          {/* Optional CTA */}
          <a
            href="https://wa.me/447393138063"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pillBase} bg-[#75ac49] text-white border-[#75ac49] shadow-md hover:brightness-110 hover:-translate-y-[1px]`}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default PortalHeader;
