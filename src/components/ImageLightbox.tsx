import React, { useEffect } from "react";
import type { MediaImage } from "../data/listings";

type Props = {
  open: boolean;
  image?: MediaImage | null;
  onClose: () => void;
};

const ImageLightbox: React.FC<Props> = ({ open, image, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    // Prevent background scroll when open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Backdrop: blurred + soft opacity (not solid black) */}
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute inset-0 w-full h-full bg-brand-black/50 backdrop-blur-md"
      />

      {/* Close icon */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-brand-black/70 text-brand-gold flex items-center justify-center hover:opacity-90 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Image */}
      <div className="relative max-h-[84vh] max-w-[92vw]">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[84vh] max-w-[92vw] rounded-2xl shadow-2xl border border-white/20 object-contain bg-white"
        />

        {/* Alt / description underneath */}
        {image.alt ? (
          <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-white/80 drop-shadow">
            {image.alt}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ImageLightbox;
