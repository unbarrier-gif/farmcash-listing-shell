import React from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "All Ads", path: "/", accent: "all" as const },
  { label: "For sale", path: "/for-sale", accent: "sale" as const },
  { label: "Wanted", path: "/wanted", accent: "wanted" as const },
];

const pillBase =
  "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border whitespace-nowrap flex items-center gap-2";

const pillClass = (accent: "all" | "sale" | "wanted") => {
  return ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      if (accent === "all")
        return `${pillBase} bg-neutral-900 text-white border-neutral-900 shadow-md cursor-default pointer-events-none`;
      if (accent === "sale")
        return `${pillBase} bg-[#75ac49] text-white border-[#75ac49] shadow-md cursor-default pointer-events-none`;
      return `${pillBase} bg-[#ca9c29] text-white border-[#ca9c29] shadow-md cursor-default pointer-events-none`;
    }

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
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-5">
        {/* Brand (logo-only) */}
        <Link
          to="/"
          className="flex items-center justify-center transition-opacity hover:opacity-95"
          aria-label="FarmCash Home"
        >
          <img
            src="/brand/farmcash-mark.png"
            alt="FarmCash – Input Finance and Machinery Import"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Nav + CTAs */}
        <div className="w-full flex flex-col items-center gap-3">
          {/* Nav pills */}
          <nav
            className="flex items-center gap-3 bg-gray-50/50 p-1.5 rounded-full border border-gray-100 shadow-inner overflow-x-auto max-w-full"
            role="navigation"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={pillClass(item.accent)}
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* CTA row (under pills) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="https://farmcash.co.uk/import-finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#75ac49] bg-[#75ac49] text-white shadow-md hover:brightness-110 transition-all text-center"
            >
              Request a finance quote
            </a>

            <a
              href="tel:+447393138063"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-neutral-900 bg-neutral-900 text-white shadow-md hover:brightness-110 transition-all text-center"
            >
              Call 07393 138063
            </a>

            <a
              href="https://wa.me/447393138063"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#ca9c29] bg-[#ca9c29] text-white shadow-md hover:brightness-110 transition-all text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortalHeader;
