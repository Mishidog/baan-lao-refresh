# Baan Lao — Elegance research (fine-dining reference sites)
Seen 2026-10-21 by Source Hound. Method: Firecrawl CLI scrape (rawHtml + branding + 1920×1080 above-the-fold screenshot) of each homepage. Fonts come from font-family / Google Fonts / Typekit references in the page HTML and Firecrawl's branding extraction. Firecrawl's "branding" colours and sizes are machine-extracted, so treat them as indicative. Layout notes come only from the first viewport. **Inferred** marks anything not directly visible. Not scraped: The Chef's Table BKK and Masayoshi (scrape failed), so they're excluded. Motion can't be seen in a still screenshot, so it's noted only where the HTML shows it, otherwise "not verified".

Screenshots: `elegance-refs/` (sorn, nusarabkk, ledubkk, kissatanto, noma, elevenmadisonpark, `*-home-2026-10-21.png`).

## Thai / Southeast Asian
### 1. Sorn, Bangkok (2 Michelin stars): https://sornfinesouthern.com
- **Layout:** Almost empty white first screen. A three-line manifesto ("Born from the South. / Rooted in memory. / Made with time.") is set flush-left in the upper third, with the first line indented and a ragged edge. A single oval line-art emblem sits centred below. No hero photo at all. A floating "Seasonal Menu" card sits bottom-right. The layout is asymmetric and whitespace-led.
- **Type:** Aboreto, a thin, wide, all-caps display face, for headings; Nanum Gothic for body (from branding extraction). Heading ~55px. Body text is small (~13px).
- **Colour:** Black (#1E1E1E) on white only.
- **Nav/CTA:** "MENU" with a hamburger at top left. Two small hairline-outlined, square-cornered buttons at top right ("MENUS", "RESERVATIONS"). The reservation CTA is quiet but always visible.
- **Why elegant:** Restraint. One idea per screen, hairlines instead of boxes, and the emblem treated as art.

### 2. Nusara, Bangkok (World's 50 Best 2025; Michelin star badge shown): https://www.nusarabkk.com
- **Layout:** Full-bleed dusk interior photo with Wat Pho visible through the windows. Logo centred, small nav at top left, social icons at top right. Award marks (50 Best, Prix Versailles, Michelin flower) float directly on the photo with no boxes.
- **Type:** adobe-garamond-pro and orpheus-pro (Typekit, in HTML). Nav is set in small upper/lower-case Garamond, not tracked caps.
- **Colour:** Deep green (#253C34) with gold accents (#D5A948 / #EEC366), per branding extraction.
- **CTA:** One pill-shaped hairline outline button, "Online Reservation", centred at the bottom of the hero.
- **Why elegant:** The photo *is* the page. Gold and green come from the room itself, and the CTA is a whisper rather than a block.

### 3. Le Du, Bangkok (1 Michelin star; No. 1 Asia's 50 Best 2023): https://www.ledubkk.com
- **Layout:** Thin white header bar with the wordmark centred. A large macro dish photo fills the hero. Awards sit small in the bottom-left corner of the photo. Below that, an asymmetric "About" block: narrow text column on the left, chef portrait offset to the right, and a faded food image bleeding behind it (layered, not boxed).
- **Type:** Source Sans Pro only (Google Fonts in HTML). h2 ~38px.
- **Colour:** Black/white. The food supplies the colour.
- **CTA:** A solid black, square-cornered "Reservation" button at top right. It is the only filled element in the header.
- **Why elegant:** Extreme food close-up, small type, and layered overlap in the About section.

### 4. Kiln, London (Thai grill, Michelin Bib Gourmand per its own press; **unverified here**): https://www.kilnsoho.com
- **Layout:** Tiny type columns at the left (bold, very small nav), with a large food photo placed off-centre on the right and lots of white space around it. The "KILN" wordmark sits at top right. Editorial and asymmetric.
- **Type:** Baskerville + proxima-nova (HTML); Gotham per branding (unverified).
- **Colour:** Black on white.
- **CTA:** No prominent reservation button in the first viewport. Menu is a PDF link.
- **Lesson:** An asymmetric, magazine-like placement feels curated. Its booking visibility is weaker than Baan Lao needs.

### 5. Som Saa, London (Thai): https://www.somsaa.com
- **Layout:** The full first screen is a hand-drawn, block-print style Thai geometric pattern on an off-white textured ground, with a small "som saa" wordmark at the lower right.
- **Type:** Abel (headings) + Madras Extra Light (body), per HTML/branding.
- **Colour:** Off-white/black. Accent reds in the CSS.
- **Why it matters:** Proves that a Thai motif rendered as large-scale art reads as crafted rather than decorative clutter. Note: casual, not fine dining.

## Vancouver
### 6. Kissa Tanto (Michelin-starred, Vancouver): https://www.kissatanto.com
- **Layout:** Collage hero. A textured paper ground with a black speckled panel, string lines and a coral circle overlapping its edges. Below, a black section with an off-grid photo collage of overlapping images at different sizes.
- **Type:** Script logo (an image) with adobe-garamond-pro, Josefin Sans and proxima-nova (Typekit/HTML). Section heads ("RESERVATIONS", "ABOUT THE HOUSE OF PLENTY") are small, widely tracked caps.
- **Colour:** Black, paper ivory, coral, lilac (#C6B5D4).
- **CTA:** A small dark square-cornered "RESERVATIONS" button inside the content.
- **Why elegant:** Overlap and texture remove every hard box edge.

### 7. Published on Main (Michelin-starred, Vancouver): https://publishedonmain.com
- **Observed:** On load, a newsletter modal and a top promo bar cover the hero. Amiri/IBM Plex Sans/Made Canvas fonts in the HTML. Gold #B57F2E with teal #003643.
- **Lesson (counter-example):** The popup plus promo bar plus boxed form clutters the first impression. Avoid modals on arrival.

## International benchmarks
### 8. Noma, Copenhagen: https://noma.dk
- **Layout:** Full-bleed photo of the building and garden, a small "noma" wordmark at top left, and a small text link "Reservations" at the top centre. A large serif headline sits in the lower-left of the photo with an outline-button CTA under it.
- **Type:** Reckless / Reckless Neue serif plus the Roobert and Pressura sans/mono (HTML). h1 ~72px.
- **Colour:** Warm paper background (#F9F9F3) with forest green (#29382B).
- **Why elegant:** A natural off-white instead of pure white, a single serif voice, and a photo that runs to all four edges.

### 9. Eleven Madison Park, NYC: https://www.elevenmadisonpark.com
- **Layout:** Centred leaf-mark wordmark with a single row of small tracked-caps nav underneath (Reservations first). Below is a large documentary kitchen photo, inset with white margins rather than full-bleed.
- **Type:** Nobel (headings) + EB Garamond (body), plus Plantin and Neue Haas Grotesk in the HTML.
- **Colour:** White/black with navy (#15325C). The red primary (#FC4837) is used sparingly.
- **CTA:** "Reservations" is simply the first nav item, which links to Resy.

## Patterns across the set
- None of these sites uses cards with shadows or rounded corners in the hero or first screen. Edges come from hairlines, photo edges, or nothing.
- The reservation CTA is small, either a hairline outline or one solid button, and always visible. The sites don't stack two big buttons.
- Awards float on photos or sit in a corner (Nusara, Le Du). They aren't put in a separate band.
- Asymmetry: flush-left headlines (Sorn, Noma), offset images (Kiln, Le Du), and overlap (Le Du, Kissa Tanto).
- Typography: one refined serif voice, either thin all-caps display (Sorn) or Garamond (Nusara, EMP, Kissa), with small, generous body text.

## Principles for Baan Lao (tied to current spec v1)
1. **Kill the card grid.** §4 home step 3 has two white shadowed cards (`--shadow-1`, `--r-md`). Replace them with two large images set at different heights, offset (e.g. one at cols 1–7, the other at cols 7–12 dropped 120px), with captions set as plain type under the image. No card backgrounds or shadows. (Le Du, Kiln)
2. **Let the hero breathe and go asymmetric.** Move the centred h1 and its two-button stack to the lower-left (Noma). Keep one hairline-outline "Reserve Your Table" in the hero. Menus stays in the nav.
3. **Dissolve the awards band.** Replace the brown awards strip (§4 step 2) with small gold marks floating on the hero's bottom corner (Nusara, Le Du). This removes one hard horizontal box.
4. **Fewer solid bands.** The spec stacks brown awards strip → ivory → brown reserve band → brown footer. Keep one dark moment (the footer merged with the reservation invite). Use ivory and photography elsewhere, and change sections with whitespace, not colour blocks.
5. **Break the gallery's rigid grid.** The `2fr 1fr 1fr` 260px-row grid with 12px gutters is a contact sheet. Use 3–4 images at varied sizes with generous, uneven gaps (48–96px) and at least one overlapping a text block or another image. (Kissa Tanto, Le Du)
6. **Overlap the vision split.** In the 5/7 vision split, let the text column overlap the exterior photo by ~1 column on an ivory panel, or drop the photo 80px below the text start.
7. **Typography: lighter, larger, fewer caps.** Keep Cormorant (it fits the Sorn/Nusara serif voice), but set heroes in Cormorant Garamond light/regular in sentence case at 80–96px rather than SC 500 everywhere. Limit tracked uppercase to nav and eyebrows. Consider dropping Inter body for a book serif or keeping Inter only at small sizes. (Inferred recommendation)
8. **Hairlines, not boxes.** Use 1px gold-deep rules and outline buttons with 0 radius (Sorn, Nusara). Remove `--shadow-1/2`. Keep square-cornered images.
9. **A Thai motif as art, used once.** Take a single large-scale line motif (e.g. a royal Thai kanok flame or lotus traced in hairline gold), Sorn-emblem style, used as a section divider or watermark. Don't repeat it as an icon. (Sorn, Som Saa)
10. **Never interrupt arrival.** Move the newsletter and cookie notice so neither overlaps the hero. Publish on Main's popup shows the cost.
