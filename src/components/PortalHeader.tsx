import React from "react";
import { NavLink, Link } from "react-router-dom";

type Counts = {
  all?: number;
  forSale?: number;
  wanted?: number;
};

type PortalHeaderProps = {
  /** If you already have a logo component, pass it in (optional) */
  logo?: React.ReactNode;

  /** Optional counts shown in brackets, e.g. (12) */
  counts?: Counts;
};

const baseLink =
  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 border";

const inactive =
  "bg-[#fefefe] text-neutral-600 border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-sm hover:-translate-y-[1px]";

// Active pills — always white text + visible shadow
const activeAll = "bg-neutral-900 text-white border-neutral-900 shadow-md";
const activeSale = "bg-[#75ac49] text-white border-[#75ac49] shadow-md";
const activeWanted = "bg-[#ca9c29] text-white border-[#ca9c29] shadow-md";

export default function PortalHeader({ logo, counts }: PortalHeaderProps) {
  return (
    <header className="w-full bg-white">
      {/* Logo row */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 flex justify-center">
        <Link to="/" className="inline-flex items-center">
          {logo ? (
            logo
          ) : (
            <div className="text-center leading-none">
              <div className="text-6xl font-extrabold tracking-tight">
                <span className="text-[#75ac49]">Farm</span>
                <span className="text-[#ca9c29]">Cash</span>
              </div>
              <div className="mt-2 text-sm font-semibold tracking-wide text-[#ca9c29] uppercase">
                Input finance and machinery import
              </div>
            </div>
          )}
        </Link>
      </div>

      {/* Pills row */}
      <div className="max-w-6xl mx-auto px-4 pb-10 flex justify-center">
        <div className="bg-white rounded-full border border-neutral-200 shadow-sm px-3 py-3">
          <nav className="flex flex-wrap justify-center gap-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeAll : inactive}`
              }
            >
              All adverts
              {typeof counts?.all === "number" ? (
                <span className="ml-2 opacity-70">({counts.all})</span>
              ) : null}
