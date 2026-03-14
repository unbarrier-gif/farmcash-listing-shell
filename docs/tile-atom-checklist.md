# Core tile atom consistency checklist

Use this checklist when reviewing listing tiles and sourcing-request cards for desktop and mobile parity.

## 1) Image overlay pills
- [x] Overlay pills use consistent spacing and corner treatment across breakpoints (`top-3`, compact pill padding, uppercase labels).
- [x] Badge stack keeps predictable left/center/right anchors on both mobile and desktop.
- [x] Any size change is intentional and documented (none currently required).

## 2) Photo counter badge
- [x] Counter keeps identical type scale and pill style across breakpoints.
- [x] Counter remains pinned to lower-left image area on all widths.

## 3) Price / title / meta typography
- [x] Price, title, and metadata use shared scale and rhythm with no breakpoint-only jumps in tile cards.
- [x] Vertical spacing between price, title, and meta is consistent across device sizes.

## 4) Feature pill
- [x] Highlight pill uses the same uppercase treatment, border weight, and spacing on mobile/desktop.
- [x] Pill line-wrap behavior is acceptable for long content.

## 5) Detail lines
- [x] Quick spec and buyer-signal lines maintain consistent hierarchy and tracking at all breakpoints.
- [x] Reserved detail area height remains stable to prevent CTA jumps.

## 6) Footer CTA button
- [x] Footer CTA row has matching top divider spacing in both listing and sourcing cards.
- [x] CTA weight, size, and interaction affordance remain visually consistent across widths.

## 7) WhatsApp / request CTA alignment
- [x] Sourcing-request WhatsApp CTA aligns to bottom of card like listing CTA rows.
- [x] Request CTA text treatment matches listing CTA rhythm (uppercase, strong weight, tight tracking).
- [x] No breakpoint-only typography drift for request CTA (single scale on mobile/desktop).
