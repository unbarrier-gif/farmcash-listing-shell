import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Wanted from "./pages/Wanted";
import PortalHeader from "./components/PortalHeader";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header (single source of truth) */}
      <PortalHeader />

      {/* Page content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Temporary route so the header "For sale" pill doesn't break.
              Replace Home with a proper ForSale page later. */}
          <Route path="/for-sale" element={<Home />} />

          <Route path="/listing/:slug" element={<Listing />} />
          <Route path="/wanted" element={<Wanted />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer (leave as-is for now; we'll refactor next) */}
      <footer className="bg-brand-black text-white py-20 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
          <div>
            <div className="flex flex-col mb-8">
              <div className="text-3xl logo-font leading-none flex">
                <span className="text-brand-green">Farm</span>
                <span className="text-brand-gold">Cash</span>
              </div>
              <div className="text-brand-gold font-bold text-[10px] tracking-tight ml-[1.6em] logo-font uppercase">
                Input Finance and Machinery Import
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-xs uppercase tracking-widest">
              Professional Financial Services for Modern Agriculture. Specialising in Machinery Import Bridging.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-8 brand-font uppercase tracking-widest text-lg">
              Headquarters
            </h5>
            <p className="text-gray-400 leading-relaxed uppercase text-xs tracking-[0.15em] space-y-1">
              Monkley Stables, Monkley Lane
              <br />
              Monkley, Rode, Frome, BA11 6QQ
              <br />
              United Kingdom
            </p>
            <p className="mt-6 text-white font-bold uppercase tracking-widest text-xs">
              <a
                href="https://farmcash.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold transition-colors underline decoration-brand-gold underline-offset-4"
              >
                farmcash.co.uk
              </a>
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-8 brand-font uppercase tracking-widest text-lg">
              Legal
            </h5>
            <div className="space-y-4 text-gray-500 uppercase text-[10px] tracking-widest">
              <p>FarmCash Ltd | Registered No: 14016448</p>
              <p>© 2024 FarmCash. Professional Machinery Sales.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
