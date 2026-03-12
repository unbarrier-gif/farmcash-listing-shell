import React from "react";

const whatsappUrl =
  "https://wa.me/447939138063?text=Hi%20FarmCash%20-%20I'm%20looking%20for%20a%20machine.%20Make:%20%0AModel:%20%0AType:%20%0ABudget:%20";

const SourcingRequestCard: React.FC = () => {
  return (
    <article className="group relative block h-full overflow-hidden rounded-2xl border border-gray-200 bg-brand-green/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-[1px]">
      <div className="p-6 py-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-brand-green text-white uppercase tracking-widest">
          Sourcing request
        </span>

        <h3 className="mt-4 text-xl md:text-2xl font-black uppercase tracking-tight leading-snug text-black">
          Wanted: your next machine story
        </h3>

        <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>Looking for something specific?</p>
          <p>
            Can&apos;t find the right machine? Tell us the make, model or spec and we&apos;ll source it.
          </p>
          <p>We regularly source machinery across the UK and Europe.</p>
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
          No obligation – just tell us what you&apos;re looking for.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-xl bg-brand-green px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-black"
          aria-label="Send your sourcing request on WhatsApp"
        >
          <span aria-hidden="true" className="mr-2">
            💬
          </span>
          Send your request →
        </a>
      </div>
    </article>
  );
};

export default SourcingRequestCard;
