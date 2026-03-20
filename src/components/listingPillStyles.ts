export const listingPillBaseClass =
  "inline-flex h-7 items-center justify-center rounded-full border px-3 py-0 text-[11px] font-semibold uppercase tracking-[0.16em] leading-none whitespace-nowrap";

export const listingPillToneClass = {
  default: "border-gray-200 bg-white/95 text-gray-700",
  subtle: "border-white/20 bg-black/65 text-white",
  sold: "border-red-200 bg-red-600 text-white",
  newIn: "border-emerald-200 bg-emerald-600 text-white",
} as const;
