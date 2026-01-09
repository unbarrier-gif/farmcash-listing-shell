import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold brand-font text-brand-black uppercase tracking-tight">
        All Adverts
      </h1>
      <p className="text-gray-600 mt-2">
        Browse what’s currently available.
      </p>

      {/* Example advert cards (replace with your real list later) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Link
          to="/listing/zurn-proficut-620"
          className="bg-brand-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            In Stock
          </p>
          <h2 className="text-xl font-bold mt-2 text-brand-black">
            Zürn ProfiCut 620
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Direct cut wholecrop header • 2013
          </p>
          <p className="mt-4 font-bold text-brand-black">View listing →</p>
        </Link>

        <Link
          to="/wanted"
          className="bg-brand-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Wanted
          </p>
          <h2 className="text-xl font-bold mt-2 text-brand-black">
            Looking for machinery?
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Tell us what you need and we’ll source it.
          </p>
          <p className="mt-4 font-bold text-brand-black">View wanted →</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
