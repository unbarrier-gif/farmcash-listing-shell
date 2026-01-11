import React from "react";

const Wanted: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-[60vh]">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold brand-font text-brand-black uppercase tracking-tight mb-3">
          Wanted
        </h2>

        <div className="flex items-center gap-4">
          <span className="h-1 w-12 bg-brand-gold rounded-full" />
          <p className="text-gray-500 uppercase text-[10px] md:text-xs font-bold tracking-[0.3em]">
            Active sourcing requests and market watch
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 text-center">
        <div className="w-12 h-1 bg-brand-gold mx-auto mb-8 rounded-full" />
        <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">
          No active wanted adverts currently listed
        </p>

        <p className="mt-4 text-gray-500 text-sm">
          If you’d like FarmCash to source a unit, please get in touch.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://farmcash.co.uk/import-finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#75ac49] bg-[#75ac49] text-white shadow-md hover:brightness-110 transition-all"
          >
            Request a finance quote
          </a>

          <a
            href="tel:07393138063"
            className="px-6 py-2.5 rounded-full text-sm font-semibold border border-neutral-900 bg-neutral-900 text-white shadow-md hover:brightness-110 transition-all"
          >
            Call 07393 138063
          </a>
        </div>
      </div>
    </main>
  );
};

export default Wanted;
