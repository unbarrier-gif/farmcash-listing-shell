import React from "react";

const Wanted: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold brand-font text-brand-black uppercase tracking-tight">
        Wanted
      </h1>
      <p className="text-gray-600 mt-2">
        Tell us what machinery you’re looking for and we’ll help source it.
      </p>

      <div className="bg-brand-white rounded-2xl border border-gray-200 shadow-md p-6 mt-8">
        <p className="text-sm text-gray-700">
          Add your wanted form link here (Cognito / Typeform / email button).
        </p>
      </div>
    </main>
  );
};

export default Wanted;
