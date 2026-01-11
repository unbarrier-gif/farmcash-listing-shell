import React from "react";

const PortalFooter: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <div className="text-3xl logo-font leading-none flex">
                <span className="text-brand-green">Farm</span>
                <span className="text-brand-gold">Cash</span>
              </div>
              <div className="text-brand-gold font-bold text-[11px] tracking-tight ml-[1.6em] logo-font uppercase">
                Input Finance and Machinery Import
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs">
              Machinery sourcing, import support, and finance options — delivered with clear comms and practical logistics.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
              Contact
            </h5>

            <div className="space-y-3 text-gray-400 text-xs">
              <p className="uppercase tracking-[0.12em]">
                Monkley Stables, Monkley Lane
                <br />
                Monkley, Rode, Frome, BA11 6QQ
                <br />
                United Kingdom
              </p>

              <p>
                <a
                  href="https://wa.me/447393138063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold transition-colors"
                >
                  WhatsApp: +44 7393 138063
                </a>
              </p>

              <p>
                <a
                  href="https://farmcash.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-brand-gold underline-offset-4 hover:text-brand-gold transition-colors"
                >
                  farmcash.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">
              Legal
            </h5>

            <div className="space-y-2 text-gray-500 text-[11px]">
              <p>FarmCash Ltd | Registered No: 14016448</p>
              <p>© {new Date().getFullYear()} FarmCash. All rights reserved.</p>
              <p className="text-gray-600">
                Listings and specifications are provided in good faith. Please confirm details prior to purchase.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-[11px] text-gray-500">
          Built as a lightweight sales portal for fast viewing on mobile and desktop.
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
