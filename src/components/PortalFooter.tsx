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
                  className="w-6 h-6 fill-white hover:fill-brand-gold transition-colors"
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
                  className="w-6 h-6 fill-white hover:fill-brand-gold transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.
