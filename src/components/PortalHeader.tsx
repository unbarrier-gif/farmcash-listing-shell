import React from "react";
import { NavLink, Link } from "react-router-dom";
import { counts } from "../data/listings";

const basePill =
  "px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-md";

const navPillClass = ({
  isActive,
  colour,
}: {
  isActive: boolean;
  colour: "black" | "green" | "gold";
}) => {
  const colours = {
    black: "bg-brand-black text-white",
    green: "bg-brand-green text-white",
    gold: "bg-brand-gold text-white",
  } as const;

  const active = "ring-2 ring-offset-2 ring-brand-gold";
  const hover = "hover:-translate-y-[1px] hover:brightness-110";
  const inactive = isActive ? "" : "opacity-95";

  return [basePill, colours[colour], hover, inactive, isActive ? active : ""].join(" ");
};

const PortalHeader: React.FC = () => {
  return (
    <>
      {/* Top strip */}
      <div className="bg-brand-black border-b border-gray-800 py-2 px-6 text-white text-xs font-semibold h-10">
        <div className="max-w-7xl mx-auto flex justify-end items-center h-full">
          <span className="text-gray-500 uppercase tracking-[0.3em]">
            Official FarmCash Sales Portal
          </span>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-brand-white border-b border-gray-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

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
              <div className="text-5xl logo-font leading-[0.9] flex">
                <span className="text-brand-green">Farm</span>
                <span className="text-brand-gold">Cash</span>
              </div>
              <div className="text-brand-gold font-bold text-sm tracking-tight ml-[1.6em] whitespace-nowrap logo-font uppercase">
                Input Finance and Machinery Import
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                navPillClass({ isActive, colour: "black" })
              }
              end
            >
              All adverts
              {counts?.all ? (
                <span className="ml-2 opacity-70">({counts.all})</span>
              ) : null}
            </NavLink>

            <NavLink
              to="/for-sale"
              className={({ isActive }) =>
                navPillClass({ isActive, colour: "green" })
              }
            >
              For sale
              {counts?.forSale ? (
                <span className="ml-2 opacity-70">({counts.forSale})</span>
              ) : null}
            </NavLink>

            <NavLink
              to="/wanted"
              className={({ isActive }) =>
                navPillClass({ isActive, colour: "gold" })
              }
            >
              Wanted
              {counts?.wanted ? (
                <span className="ml-2 opacity-70">({counts.wanted})</span>
              ) : null}
            </NavLink>

            <a
              href="https://wa.me/447393138063"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                basePill,
                "bg-brand-green text-white hover:-translate-y-[1px] hover:brightness-110 transition-all shadow-md",
              ].join(" ")}
            >
              WhatsApp seller
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default PortalHeader;
