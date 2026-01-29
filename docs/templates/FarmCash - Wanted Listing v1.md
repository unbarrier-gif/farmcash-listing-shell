# FarmCash Wanted Listing v1

Use this template to capture Wanted listing data for `src/data/listings.ts`.

## Listing metadata
- **id**: wanted-<n>
- **status**: wanted
- **title**:
- **subtitle** (optional):
- **year**: (display text, e.g. 2014–2017)
- **location** (optional):
- **priceText** (optional): (budget phrasing, e.g. “Open to market”)

## Images
- **heroImage.src**: /images/<folder>/hero.jpg
- **heroImage.alt**: (descriptive alt text)
- **gallery** (optional): array of `{ src, alt }` using absolute paths; include hero first if used

## Description
- **description**: (short paragraph describing the sourcing request)

## Specs (optional)
Use `{ label, value }` rows.
- Example: `{ label: "Model years", value: "2014–2017" }`

## Notes (optional)
- Bullet list of helpful notes or constraints

## CTAs
- **whatsappUrl**: default WA link
- **phoneNumber**: default phone number
- **portalUrl** (optional): https://portal.farmcash.online/

## QA checklist
- [ ] Images exist in `public/images/<folder>` and paths are absolute
- [ ] Listing appears on Wanted page and detail page
- [ ] “Budget” label shown on detail page
- [ ] Finance CTA hidden for Wanted
