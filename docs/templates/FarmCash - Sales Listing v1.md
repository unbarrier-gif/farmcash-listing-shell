# FarmCash Sales Listing v1

Use this template to capture For sale listing data for `src/data/listings.ts`.

## Listing metadata
- **id**: fc-<year>-<ref>
- **status**: for-sale
- **title**:
- **subtitle** (optional):
- **year**: (display text)
- **location** (optional):
- **width** (optional):
- **serialRef** (optional):
- **priceText** (optional): (e.g. “£35,000” or “POA”)

## Images
- **heroImage.src**: /images/<folder>/<hero-file>
- **heroImage.alt**: (descriptive alt text)
- **gallery** (optional): array of `{ src, alt }` using absolute paths; include hero first if used

## Description
- **description**: (short technical summary)

## Specs (optional)
Use `{ label, value }` rows.
- Example: `{ label: "Working width", value: "6.20 m" }`

## Notes (optional)
- Bullet list for key notes

## CTAs
- **whatsappUrl**: default WA link
- **phoneNumber**: default phone number
- **financeQuoteUrl** (optional)
- **brochureUrl** (optional)
- **portalUrl** (optional): https://portal.farmcash.online/

## QA checklist
- [ ] Images exist in `public/images/<folder>` and paths are absolute
- [ ] Listing appears on Home (All/For sale) and detail page
- [ ] “Price” label shown on detail page
- [ ] Finance CTA visible when `financeQuoteUrl` is set
