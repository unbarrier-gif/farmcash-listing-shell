import React from "react";

const Wanted: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 md:py-14 min-h-[60vh]">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 md:p-14 text-center">
        <div className="mx-auto h-1 w-12 bg-[#ca9c29] rounded-full mb-8" />

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 uppercase tracking-tight">
          Wanted
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Tell us what machinery you’re looking for and we’ll source it through our network.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-semibold border border-[#75ac49] bg-[#75ac49] text-white shadow-md hover:brightness-110 transition-all text-center"
          >
            Submit a sourcing request
          </a>

          <a
            href="tel:07393138063"
            className="px-6 py-3 rounded-full text-sm font-semibold border border-neutral-900 bg-neutral-900 text-white shadow-md hover:brightness-110 transition-all text-center"
          >
            Call 07393 138063
          </a>
        </div>

        <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold">
          Fast response · UK & Europe sourcing
        </p>
      </div>
    </main>
  );
};

export default Wanted;
