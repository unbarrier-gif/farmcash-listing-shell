import React from "react";

const PortalFooter: React.FC = () => {
  return (
    <footer className="mt-16 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
<div>
  <div className="flex flex-col mb-4">
    <div className="text-3xl logo-font leading-none flex">
      <span className="text-[#75ac49]">Farm</span>
      <span className="text-[#ca9c29]">Cash</span>
    </div>

    {/* No ml-[1.6em] — keep alignment consistent with header */}
    <div className="text-[#ca9c29] font-bold text-[10px] tracking-tight whitespace-nowrap logo-font uppercase">
      Input Finance and Machinery Import
    </div>
  </div>

  <p className="text-gray-300 text-sm leading-relaxed">
  Professional Financial Services for Modern Agriculture. Specializing in Machinery Import Bridging.
  </p>

  <div className="mt-5">
    <a
      href="https://farmcash.co.uk/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#ca9c29] transition-colors"
    >
      Visit farmcash.co.uk
    </a>
  </div>
</div>


          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
              Contact
            </h5>

            <div className="space-y-2 text-gray-300 text-sm">
              <p className="uppercase tracking-[0.12em] text-[11px] text-gray-400">
                Enquiries
              </p>

              <a
                href="https://wa.me/447393138063"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold hover:text-brand-gold transition-colors"
              >
                WhatsApp: +44 7393 138063
              </a>

              <div>
                <a
                  href="tel:+447393138063"
                  className="inline-flex items-center gap-2 font-semibold hover:text-brand-gold transition-colors"
                >
                  Call: +44 7393 138063
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.cognitoforms.com/FarmCashLtd/AgriculturalMachineryImportFinanceRequest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:text-brand-gold transition-colors"
                >
                  Request a finance quote
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
              Legal
            </h5>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>FarmCash Ltd | Registered No: 14016448</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                © {new Date().getFullYear()} FarmCash. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-400 text-xs">
          Built for fast static delivery via Cloud Run.
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
