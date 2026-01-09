import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Wanted from "./pages/Wanted";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <div className="bg-brand-black border-b border-gray-800 py-2 px-6 text-white text-xs font-semibold h-10">
        <div className="max-w-7xl mx-auto flex justify-end items-center h-full">
          <span className="text-gray-500 uppercase tracking-[0.3em]">
            Official FarmCash Sales Portal
          </span>
        </div>
      </div>

      <header className="bg-brand-white border-b border-gray-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex flex-col">
            <div className="text-5xl logo-font leading-[0.9] flex">
              <span className="text-brand-green">Farm</span>
              <span className="text-brand-gold">Cash</span>
            </div>
            <div className="text-brand-gold font-bold text-sm tracking-tight ml-[1.6em] whitespace-nowrap logo-font uppercase">
              Input Finance and Machinery Import
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="bg-brand-black text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
            >
              All Adverts
            </Link>

            <Link
              to="/wanted"
              className="bg-brand-gold text-black px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-md"
            >
              Wanted
            </Link>

            <a
              href="https://wa.me/447393138063"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#75ac49] text-white px-6 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-md"
            >
              WhatsApp Seller
            </a>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:slug" element={<Listing />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

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
