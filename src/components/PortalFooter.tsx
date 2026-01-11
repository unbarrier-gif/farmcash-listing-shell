import React from "react";

const PortalFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT */}
          <div>
            <div className="mb-6">
              <img
                src="/brand/farmcash-mark.png"
                alt="FarmCash – Input Finance and Machinery Import"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 text-xs uppercase tracking-[0.15em] leading-relaxed max-w-sm">
              Professional Financial Services for Modern Agriculture. Specialising in Machinery
              Import Bridging.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/FarmCashUK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-white hover:fill-[#ca9c29] transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/farmcashuk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors"
              >
                <svg
                  className="w-6 h-6 fill-white hover:fill-[#ca9c29] transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm9.65 2.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h5 className="font-bold text-white mb-8 uppercase tracking-widest text-lg">
              Headquarters
            </h5>

            <p className="text-gray-400 leading-relaxed uppercase text-xs tracking-[0.15em]">
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
                rel="noopener noreferrer"
                className="hover:text-[#ca9c29] transition-colors border-b-2 border-[#ca9c29] pb-1"
              >
                farmcash.co.uk
              </a>
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h5 className="font-bold text-white mb-8 uppercase tracking-widest text-lg">Legal</h5>

            <p className="text-gray-400 leading-relaxed uppercase text-xs tracking-[0.15em]">
              FarmCash Ltd | Registered No: 14016448
            </p>

            <p className="mt-6 text-gray-400 uppercase text-xs tracking-[0.15em]">
              © 2026 FarmCash. All rights reserved.
            </p>
          </div>
        </div>

        {/* subtle divider + credit */}
        <div className="mt-12 pt-6 border-t border-gray-800/40">
          <p className="text-gray-500 text-xs text-center tracking-wide">
            Built for fast static delivery via Cloud Run · Designed by{" "}
            <a
             <a
              href="https://unbarrier.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="cherry-bomb-one-regular underline underline-offset-2 transition-opacity hover:opacity-90"
              style={{ color: "#38ff99" }}
>
  unbarrier.me
</a>

            >
              unbarrier.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
