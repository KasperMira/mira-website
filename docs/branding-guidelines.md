# MIRA Branding Guidelines (Derived from Homepage Screenshot)

This note captures the visual direction observed in the supplied frontpage screenshot and is intended as an internal style reference for ongoing implementation.

## Color Palette

- Primary dark: `#202326` (charcoal background for hero/footer)
- Secondary dark: `#34383C` (divider bars / dark UI surfaces)
- Accent red: `#D8232A` (primary CTAs, active states, hero highlights, key emphasis)
- Surface light: `#F3F4F5` (page background)
- Card white: `#FFFFFF` (content cards and forms)
- Body text dark: `#1F2937`
- Muted text: `#64748B`

## Typography

- Heading/display style: condensed, uppercase, high-impact.
- Recommended display font: `Oswald` (700 for major headings, 500-600 for section headings).
- Body copy style: clean and highly readable sans-serif.
- Recommended body font: `Open Sans` (400-600).
- Letter spacing:
  - Navigation and utility labels: slight positive tracking.
  - Hero and section headings: subtle tracking with uppercase.

## Layout & Rhythm

- Strong top hero block with dark background and bright color accents.
- Alternation between:
  - light content sections, and
  - dark divider bars that label/transition major segments.
- Card-based content blocks with visible separation, subtle borders, and soft elevated shadows.
- Wide desktop container (`max-width` around 6xl) with generous vertical spacing.

## UI Components

- Buttons:
  - Primary: red background + white uppercase text.
  - Secondary: outlined/light on dark surfaces.
  - Shape: mostly squared or slightly rounded corners (avoid pill-heavy UI).
- Navigation:
  - Compact uppercase labels.
  - Minimal logo mark area with high contrast.
  - Active state should use red accent.
- Sections:
  - Headings should be uppercase and visually prominent.
  - Feature items can use simple circular icon badges in red.

## Image/Media Direction

- Hero imagery should feel industrial/operational (tools, hardware, scanning, field equipment).
- Product screenshots should appear in framed cards with subtle depth.
- Video/interactive callouts should use dark overlays and clear play affordances.

## Brand Tone

- Practical, industrial, and professional.
- Messaging favors clarity and reliability over decorative marketing language.
- Visual emphasis on control, traceability, and operational efficiency.

## Implementation Notes

- Use reusable CSS custom properties for the palette.
- Prefer consistent uppercase treatment for primary headings and navigation.
- Keep shadows, borders, and spacing consistent to avoid mixed visual styles.
- Reserve red for emphasis and action points.

## Source Assets Used

- Homepage assets imported from `https://www.mirasoftware.be/nl/` and stored in `public/images/original/`.
- Imported files include hero background, screenshots, testimonial logos, and sector imagery so local rendering stays consistent.
