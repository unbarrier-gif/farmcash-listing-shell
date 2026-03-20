export const listingPillBaseClass =
  "inline-flex items-center justify-center min-h-[1.625rem] rounded-full border border-neutral-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] leading-none whitespace-nowrap";

export const listingPillToneClass = {
  dark: "bg-brand-black text-white",
  wanted: "bg-brand-gold text-white",
  sold: "bg-red-600 text-white",
  success: "bg-brand-green text-white",
  neutral: "bg-white/90 text-gray-700",
  mutedDark: "bg-black/70 text-white",
  highlight: "bg-amber-100 text-amber-900",
} as const;
