import React, { useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ListingGalleryProps = {
  images: GalleryImage[];
  videoUrl?: string;
};

const ListingGallery: React.FC<ListingGalleryProps> = ({ images, videoUrl }) => {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = safeImages[activeIndex];

  return (
    <div className="bg-brand-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h4 className="font-bold text-brand-black uppercase tracking-widest text-xs">
          Media
        </h4>
        <p className="text-xs text-gray-500 font-semibold">
          {safeImages.length > 0 ? `${activeIndex + 1}/${safeImages.length}` : "0/0"}
        </p>
      </div>

      {/* Main media */}
      <div className="p-6 space-y-4">
        {videoUrl ? (
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <video controls className="w-full" preload="metadata">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        ) : null}

        {active ? (
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
            No images added for this advert yet.
          </div>
        )}

        {/* Thumbnails */}
        {safeImages.length > 1 ? (
          <div className="grid grid-cols-4 gap-3">
            {safeImages.map((img, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={`${img.src}-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "rounded-lg overflow-hidden border transition-all",
                    isActive
                      ? "border-brand-black shadow-md"
                      : "border-gray-200 hover:border-gray-400 hover:shadow-sm",
                  ].join(" ")}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-20 object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListingGallery;
