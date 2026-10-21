# Baan Lao — Visual & Layout Refresh Spec (Revision 2, 2026-10-21, Layout Lab)

## Revision 2 changes (from `elegance-research.md`)
- **No boxes:** cards, shadows and radii are gone (`--shadow-*` deleted, all radii 0). Edges come from photo edges, 1px gold-deep hairlines (`--c-hair`) or whitespace. Buttons are 0-radius hairline outlines; at most one solid button per screen.
- **Asymmetric, editorial layouts:** hero headline flush lower-left (Noma); Offering = two offset images (cols 1–7 and 8–12, dropped 220px) with plain-type captions; dish gallery = 4 images at mixed sizes with one overlapping; vision text panel overlaps the photo by 1 column and starts 160px lower (Le Du / Kissa Tanto).
- **Awards band removed:** award text links float in the hero's bottom-right corner in gold (Nusara / Le Du).
- **One dark moment:** brown awards strip and separate reserve band are removed; the reserve invitation is merged into the top of the dark footer ("finale"). Everything else is ivory + photography.
- **Type:** display moves to **Cormorant Garamond 300**, larger (96px hero desktop); Cormorant SC kept only for the footer wordmark. Tracked caps only in nav-adjacent UI (eyebrows, buttons, text links). Desktop nav is Cormorant Garamond 16px upper/lower case (Nusara). Inter kept for body at 16px.
- **One Thai motif:** a single hairline lotus line drawing (`lotus.svg`, decorative, `aria-hidden`) — used once per page as a divider above the finale invite, plus once on /chef-nutcha mid-page.
- **Arrival:** nothing overlays the hero (no newsletter modal; cookie notice is a bottom sheet that appears after first scroll, never over the hero CTA).
- Mockups regenerated; new `/chef-nutcha` mockup added. Shared mockup CSS: `mockup.css`.

> Where Rev 2 conflicts with older text below, **Rev 2 wins**. Sections 2, 3, 4 (`/`, `/chef-nutcha`, shared pattern) and 5 have been updated in place.


Source of truth for copy, links, images: `source/` (crawl of baanlao.ca, 2026-10-21). Mockup: `mockup-home.html` (+ `mockup-home-desktop.png` @1440, `mockup-home-mobile.png` @390×2). The mockup implements this spec for `/` and is the reference for components.

**Hard rules (repeat for the builder):** keep all 13 paths exactly (`/`, `/reservations`, `/afternoon-thai-tea-experience`, `/team`, `/chef-nutcha`, `/farm-to-table`, `/media-reviews`, `/shop`, `/wine-menu`, `/royal-thai-cuisine`, `/faqs`, `/menus`, `/gift-card`). Copy is verbatim from `source/*.md` (typos included, e.g. "lastest", "palette", "hand- hewn"). Keep `<title>` and meta description from each md front-matter unchanged. Every external href is copied byte-for-byte from the md (OpenTable, Tock, files.elfsightcdn.com PDFs, Gift Up widget, Google Maps, `tel:7788395711`, `mailto:`, Facebook, Instagram, award/press/farm/winery links). No new copy except: the visually hidden skip-link text "Skip to content", ARIA labels ("Open menu", "Close menu", "Facebook", "Instagram") and image alt text (see §5). Any of these that the client must approve is flagged in §9.

---
## 1. Design direction
- Today: white page, centred everything, gold (#DCB84D) text on white (1.91:1 — fails WCAG), tiny icon nav, long single column. It reads like a template, not a No. 1 restaurant.
- Refresh: "Royal house at dusk". Warm ivory paper (#FAF6EC) for reading, deep teak-brown (#362C18 / #241D10) bands for the header-adjacent awards strip, reserve band and footer, and gold used **only on brown** (7.19:1) or as fills. A darkened text-safe gold (#7A5C12) carries gold accents on light backgrounds.
- Cormorant SC stays as the display face (royal, engraved). (Rev 2: display is now Cormorant Garamond 300; Cormorant SC only for the footer wordmark.) Body moves from licensed Proxima Nova to **Inter** (already loaded on the site, free, OFL) — so no new font family is introduced. If a closer Proxima match is ever wanted: **Montserrat** (free, Google Fonts) is the usual near-equivalent; not used here.
- Photography does the selling: large, full-bleed, edge-to-edge imagery of the dishes and room, generous whitespace, one obvious "Reserve Your Table" action everywhere.

## 2. Tokens
```css
:root{
  /* colour */
  --c-brown:#362C18;      /* existing brand brown: bands, primary button, headings */
  --c-brown-900:#241D10;  /* deeper brown: reserve band, hero scrim base */
  --c-gold:#DCB84D;       /* existing gold: ONLY on brown, or as button fill with brown text */
  --c-amber:#EB9E10;      /* existing amber: hover state of gold buttons, focus ring on dark */
  --c-gold-deep:#7A5C12;  /* new derived gold for text/links on light bgs */
  --c-ivory:#FAF6EC;      /* page background */
  --c-sand:#F1E8D4;       /* alt section bg; body text on brown */
  --c-white:#FFFFFF;      /* cards */
  --c-ink:#2B2416;        /* body text on light */
  --c-muted:#5E5444;      /* secondary text on light */
  --c-line:rgba(54,44,24,.12);
  --c-scrim:linear-gradient(180deg,rgba(36,29,16,.35) 0%,rgba(36,29,16,.45) 40%,rgba(36,29,16,.9) 100%);
}
```
**Contrast (computed with WCAG 2.x relative-luminance formula):**
| Foreground | Background | Ratio | Use allowed |
|---|---|---|---|
| ink #2B2416 | ivory #FAF6EC | 14.24 | all text |
| ink #2B2416 | white #FFFFFF | 15.37 | all text |
| ink #2B2416 | sand #F1E8D4 | 12.61 | all text |
| brown #362C18 | ivory #FAF6EC | 12.72 | headings, button fill |
| muted #5E5444 | ivory #FAF6EC | 6.88 | secondary text (AA) |
| muted #5E5444 | sand #F1E8D4 | 6.09 | secondary text (AA) |
| gold-deep #7A5C12 | ivory #FAF6EC | 5.78 | eyebrows, links (AA) |
| gold-deep #7A5C12 | white | 6.24 | card links (AA) |
| gold-deep #7A5C12 | sand | 5.12 | links (AA) |
| gold #DCB84D | brown #362C18 | 7.19 | text on brown (AAA) |
| gold #DCB84D | brown-900 #241D10 | 8.75 | text on dark (AAA) |
| brown #362C18 | gold #DCB84D | 7.19 | gold-button label |
| brown #362C18 | amber #EB9E10 | 6.16 | hover gold-button label |
| ivory #FAF6EC | brown #362C18 | 12.72 | text on brown |
| sand #F1E8D4 | brown #362C18 | 11.26 | footer body text |
| ✗ gold #DCB84D | ivory / white | 1.77 / 1.91 | **never for text** |
| ✗ amber #EB9E10 | ivory | 2.06 | **never for text** |
| ✗ taupe #9D968E (current) | white | 2.92 | retire |
Hero text sits on `--c-scrim` (bottom stop ≈ brown-900 at 90%); ivory on that ≈ 13:1 at the text baseline — verify visually per hero image.

**Type** (`--f-display:"Cormorant Garamond",Georgia,serif; --f-caps:"Cormorant SC",Georgia,serif; --f-body:Inter,system-ui,-apple-system,sans-serif`). Load Cormorant Garamond 300/400/500 (+300 italic), Cormorant SC 400/500, Inter 400/500, `display=swap`.
| Token | Font / weight | Desktop ≥1024 | Mobile <768 | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| --t-display (home hero h1) | Cormorant Garamond 300 | 96px | 46px | 0.98 | -.005em |
| --t-h1 (interior h1) | Cormorant Garamond 300 | 84px | 46px | 1.0 | -.005em |
| --t-h2 (finale invite, section) | Cormorant Garamond 300 | 64px | 44px | 1.05 | 0 |
| --t-h3 (captions/titles) | Cormorant Garamond 300 | 34px | 28px | 1.15 | 0 |
| --t-lead (pull paragraphs) | Cormorant Garamond 300 | 30px | 23–24px | 1.4 | 0 |
| --t-nav (desktop) | Cormorant Garamond 400, mixed case | 16px (15px 1024–1279) | — (menu panel 28px) | 1 | 0 |
| --t-body | Inter 400 | 16px | 16px | 1.75 | 0 |
| --t-small (footer) | Inter 400 | 14px | 14px | 1.8 | 0 |
| --t-eyebrow / --t-button / --t-textlink | Inter 500 uppercase | 12px | 11–12px | 1–1.4 | .2–.22em |
| --t-wordmark (footer) | Cormorant SC 400 | 22px | 22px | 1.3 | .08em |
Headings keep the source's capitalisation verbatim (no forced sentence case or uppercase). Tablet: `clamp()`, e.g. display `clamp(46px, 1.6rem + 5vw, 96px)`. Body measure ≤58ch. Minimum text 11px only for button/eyebrow labels at weight 500 in AA colours; everything readable ≥14px.

**Spacing** 4px base: `--s1:4 --s2:8 --s3:12 --s4:16 --s5:24 --s6:32 --s7:48 --s8:64 --s9:96 --s10:128` (px). Section padding (Rev 2, more air) 120–160px desktop / 96px tablet / 72–96px mobile. Column gap 32px. Gutters 64px desktop / 32px tablet / 24px mobile. Mobile galleries 12px gaps.
**Radii** 0 everywhere (buttons, inputs, images). **Shadows** none (Rev 2: deleted). **Lines** `--c-hair:rgba(122,92,18,.45)` (1px on ivory: header bottom, dividers, text-link dash) · `--c-hair-dark:rgba(220,184,77,.35)` (1px on brown). Inputs are underline-only.
**Overlap / offset tokens** `--offset-drop:220px` (Offering 2nd image), `--overlap-panel:1 column + 72px padding` (vision panel), `--gal-gap:48–96px uneven`. Image "mat" when an image overlaps another: `outline:16px solid var(--c-ivory)`.
**Breakpoints** mobile `<768px`, tablet `768–1023px`, desktop `≥1024px`. `--max:1280px` content container, `--max-wide:1440px` for galleries; header spans full width with 64px gutters. Full-bleed heroes ignore the container.
**Motion** `--ease:cubic-bezier(.2,.7,.2,1)`, 200ms hovers, 300ms menu slide; images fade-in 400ms on load only.

## 3. Global header, nav, footer
**Header (Rev 2)** `position:sticky; top:0; z-index:50; height:88px` (≥1024) / 64px (<1024). Background solid ivory, 1px `--c-hair` bottom border — no blur, no shadow. Grid `auto 1fr auto`, column-gap 40px, 64px side padding.
- Left: logo `68d47b662b.jpg` 52px tall desktop / 38px mobile (centred on mobile), `mix-blend-mode:multiply`; link `./`, alt "Baan Lao Fine Thai Cuisine".
- Centre (≥1024): From Thailand With Love · Afternoon Tea Experience · Menus · Chef Nutcha · Gift Card, Cormorant Garamond 400 16px mixed case (15px & 16px gap at 1024–1279), gap 24px, `white-space:nowrap`, 44px hit area; current page = 1px gold-deep underline. Fork/knife/badge icons dropped.
- Right: **Reserve Your Table** hairline-outline button (brown 1px border, brown label, 0 radius, 44px tall, 22px padding, Inter 500 12px .2em caps; hover: brown fill, ivory label) → exact OpenTable URL `https://www.opentable.ca/r/baan-lao-fine-thai-cuisine-reservations-richmond?restref=1174369&lang=en-CA&ot_source=Restaurant%20website`.
- <1024: nav hidden; hamburger `<button aria-expanded aria-controls="menu" aria-label="Open menu">` 44×44 at **left**, two 22×1px brown hairlines; logo centred; outline Reserve at right, 11px .14em, padding 0 14px (fits 390px; verified in mockup).
- Menu panel: full-screen overlay below header, bg `--c-brown-900`, slides down 300ms (no slide with reduced motion). Contents: all 13 pages in this order — Home, From Thailand With Love, Afternoon Tea Experience, Menus, Chef Nutcha, Royal Thai Cuisine, Farm to Table, Team, Press + Accolades, Shop, FAQ, Gift Card — Cormorant SC 28px ivory, 56px rows, 1px `rgba(220,184,77,.2)` dividers; then a gold hairline-outline Reserve button full width, then `tel:7788395711` "778 839 5711" and Facebook/Instagram icons. (/wine-menu is reached from /menus "Learn More About Our Wines", as today — not in nav; keep so.) Focus trapped while open; Esc closes; body scroll locked; focus returns to button.

**Footer = "finale" (Rev 2)** — the only dark block on every page; bg `--c-brown-900`, text sand 14px/1.8.
- Top: reserve invitation, centred, padding 128/96px desktop, 88/64 mobile: lotus motif (200px wide, gold) → h2 "Reserve Your Table" (Cormorant Garamond 300, 64/44px, ivory) → "Dinner Service 5 pm + 6:30 pm · Wednesday Through Sunday" (existing hours copy, 15px sand) → gold hairline-outline "Reserve Your Table" (OpenTable). 1px `--c-hair-dark` rule below.
- Then a 4-column grid (1.4fr 1fr 1fr 1.3fr, gap 56), 2 cols tablet, 1 col mobile (gap 40); padding 72/56.
1. "BAAN LAO FINE THAI CUISINE" (Cormorant SC 24px ivory) · "● **4100 Bayview Street, Richmond, BC**" → existing Google Maps URL · "Contact:" · info@baanlao.ca (`mailto:`) · 778 839 5711 (`tel:7788395711`) · "Facebook" and "Instagram" as small tracked-caps gold text links with a hairline underline, 44px tall (replaces the raster logos `7541b8502f.jpg` / `c91bc69057.png`; links unchanged).
2. Hours (heading label "Hours" is a visual group label — omit if client won't accept, see §9): "Closed Monday +Tuesday / Dinner Service 5 pm + 6:30 pm / Wednesday Through Sunday" then "Thai Tea Service / Saturday + Sunday / 12:30 pm".
3. Explore: Home, Chef Nutcha, Royal Thai Cuisine, Farm to Table, Menus, Team, Press + Accolades, Shop, FAQ (existing footer nav order is: Chef Nutcha, Shop, FAQ, Home, Farm to Table, Menus, Team, Royal Thai Cuisine, Press + Accolades — either order is acceptable; keep all 9).
4. Newsletter: "Sign up to receive insider information and the lastest news from Baan Lao!" + existing Mailchimp form (Email Address field, "Subscribe" button, "* indicates required" as in current embed). Keep the existing Mailchimp action URL from `source/home.html`. Input 44px, underline only (1px `--c-hair-dark`); button = gold hairline outline.
Bottom bar: "© 2025 All rights reserved. Baan Lao Fine Thai Cuisine", 13px, centred, top rule sand 15%. Cookie Settings link + banner text ("We use cookies to personalize content, run ads, and analyze traffic.") kept; restyle as a slim bottom sheet (brown-900, sand text, gold outline "Okay"), ≤96px tall, shown only after first scroll, never over the hero or its Reserve CTA. No newsletter modal, ever.

The v1 separate "Reserve band" is **removed** in Rev 2; the finale invite replaces it. Wherever a page layout below says "Reserve band", read "finale".

## 4. Per-page layouts
Shared page pattern ("interior hero", Rev 2): every interior page in the source opens with a page photo, then the logo banner `68d47b662b.jpg`. Pick per page: **(a) editorial split** (default, as in the /chef-nutcha mockup) — ivory, 12-col; h1 in cols 1–6 vertically centred, photo cols 7–12 at 4:5, 96px top / 140px bottom padding; mobile: eyebrow + h1 then photo offset (margin-left 18%, bleeding off the right edge). **(b) full-bleed** for wide room/landscape photos (/media-reviews, /wine-menu, /faqs) — 72vh desktop, `--c-scrim`, h1 flush lower-left at 80px from bottom. Eyebrow above the h1 uses the nav label of the page (an existing link label). The repeated logo banner `68d47b662b.jpg` is **not** shown again in content (it's the header logo). The h1 text = the page's existing `###` headline (no new titles). Body below on ivory.
Grid: 12-col, 32px gap desktop; 8-col 24px tablet; 4-col 16px mobile. "Split" (Rev 2) = asymmetric 5/7 or 6/5 with the text column starting 96–160px lower than the image; stacked on mobile with the image offset 18–24% from one edge. "Card" anywhere below = image + plain type caption, **no background, border or shadow**. "Accordion" rows use 1px `--c-hair` only. Galleries anywhere = mixed sizes per the homepage rule (one image overlaps another with a 16px ivory mat), never a uniform contact sheet.

### `/` (index.md) — see mockup (Rev 2)
1. Hero: `aeb50aa1c2.jpg` full-bleed, `calc(100vh - 88px)` min 620 max 900; mobile image 78vh min 520. Scrim `linear-gradient(200deg, rgba(36,29,16,.15) 0%, rgba(36,29,16,.35) 45%, rgba(36,29,16,.86) 100%)`. Flush **lower-left** at left gutter, 80px from bottom, max-width 760px: h1 "Exquisite Flavors, Timeless Traditions" (display 96/46), sub "Baan Lao Fine Thai Cuisine | Steveston, Richmond, BC" (13px .2em caps, sand), one ivory hairline-outline "Reserve Your Table". (Menus stays in nav — no second button.)
2. Awards (no band): two gold text links floating bottom-**right** of the hero, right-aligned, 11px .18em caps, max-width 300px, separated by a 40px hairline: "No. 1 NORTH AMERICA'S 50 BEST RESTAURANTS / BEST IN WEST CANADA AWARD 2026" (50 Best URL) and "BEST DESTINATION RESTAURANT AWARD 2026" (canadas100best URL). Mobile: left-aligned, under the CTA, 28px from bottom. The 50 Best badge `cf63e21bfa.png` (white box) is not used on the hero; it lives on /media-reviews. Gold on the scrim's dark bottom ≈ 7:1+ — verify.
3. Offering (160px top / 120px bottom): eyebrow "OFFERING", then 12-col: A (cols 1–7) `f3aa707814.webp` 4:5 + h3 caption + text link "Afternoon Tea Experience" (gold-deep caps with a 40px trailing hairline) → `/afternoon-thai-tea-experience`; B (cols 8–12, margin-top 220px) `4c4d8ec029.webp` 3:4 + h3 "From Thailand with Love, 18 Dish Journey" + text link "From Thailand With Love" → `/reservations`. Mobile: A full width; B indented 18% left, 56px below.
4. Dish gallery (1440 wide, 1020px tall, absolute-positioned desktop): `10fc6e3182.jpg` left, 44% wide 3:2 at top 0; `28906ae334.jpeg` right (6% in from gutter), 26% wide 4:5 at top 120; `f08d570c2d.jpeg` 24% wide 1:1 at left 22%, top 500, **overlapping** g1 with a 16px ivory outline mat; `a0d701d2a5.jpeg` right, 34% 3:2 at top 640. (`e14db0f060.jpeg` dropped — too low-res.) Tablet: scale proportionally; mobile: 2-col grid, g1 full width, g2 dropped 40px, g3 pulled up -40px (4:5), g4 86% width right-aligned.
5. Vision (overlap): photo `4c21c25eda.jpg` 4:5 in cols 1–6; text panel cols 6–11 (overlaps 1 column), margin-top 160px, ivory bg, padding 64px 0 0 72px, z-index above photo. First paragraph as --t-lead (Cormorant 300 30px brown), other two Inter body. No button (header + finale carry the CTA). Mobile: photo 82% width left, panel overlaps it by -80px from 10% left.
6. Room: `54c0a27e8e.webp` alone, 21:9, wide container, 160px bottom space (no second copy of the hero photo).
7. Finale (reserve invite + footer).
Drop the stray empty link to `claudeusercontent.com/...#reservation` (crawl artefact, §9).

### `/reservations` (title "Menu")
1. Page hero `4c4d8ec029.webp`, h1 "A culinary journey around the four corners of the Kingdom of Thailand."
2. Split 7/5: left the two body paragraphs + button-link "From Thailand with Love Menu" (Elfsight PDF, outline brown, opens PDF; add visually-hidden "(PDF)"); right `d9b36aec83.jpg` 4:5. The small `20f2da0da1.jpeg` (320×220 menu-notes drawing) sits under the text at max 320px wide, as an ornament.
3. Accordion block (max 760px centred): "Food Allergies & Restrictions", "Cancellation Policy" — these are the h6 toggles in source; the bodies are not in the crawl (Framer collapsed) → pull the exact text from the live site/Framer before build (§9). `<details>`/button accordions, 56px rows, 1px line, + / − icon gold-deep.
4. Gallery masonry: 3 cols desktop / 2 tablet / 2 mobile, gap 12/8: `85293a4339.jpg`, `21033934e3.jpg`, `0e5b7039db.jpeg`, `b18a5816c9.jpg`, `74aaed478e.jpg`, `f84e6c463b.jpeg`, `9774088546.jpeg`, `f08d570c2d.jpeg`, `e2488ee7ae.jpeg`, `0f9c51e960.jpeg`, `7d8278ccd5.jpg` (portraits 2:3, landscapes 3:2; keep natural ratio, CSS columns).
5. Finale.

### `/afternoon-thai-tea-experience`
1. Page hero `f3aa707814.webp`, h1 "The World’s First Sommelier-led Afternoon Tea Thai Experience"; eyebrow above h1: "Available Saturday and Sunday Afternoons".
2. Split 6/6: two paragraphs (merge the broken line-wraps in source into normal paragraphs — wording unchanged) + gold-deep outline button "Afternoon Thai Tea Menu" (Elfsight PDF). Right `b56a7fd644.jpg` 4:5.
3. "Learn more" (h6 in source; its target/body not in crawl → §9): render as text link-button only if a target exists, else omit visually but keep in DOM? → ask (§9).
4. Gallery: row 1 three 3:2 (`4066a040f0.jpg`, `2213c8d3b7.jpg`, `943c464dc7.jpg`), row 2 four 3:4 portraits (`e428799501.jpg`, `ed5c83b7cb.jpg`, `6823477816.jpg`, `7622560c86.jpg`). Mobile 2 cols. Note 480–640px sources: cap displayed width at 480 CSS px or they blur at 2×.
5. Finale.

### `/team`
1. Page hero `fdcf96f07c.webp`, h1 "A world-class team of beverage artisans."; intro paragraph below at --t-lead, max 65ch, centred.
2. Team grid 4 cols desktop / 2 tablet / 1 mobile (gap 32). Each card: portrait 4:5 cover + name h4. Source has 2 images per person (portrait + a product/logo image). Pairing by order: Kaitlyn Stewart — `89c6c4aa8b.png`, `66dce817f2.png`; Lena Pan — `a34db827d9.png`, `13ad41a868.png`; Patrick Ellis — `511f881136.jpg`, `ee5403a881.png`; Emmanuelle Viennois — `537d76f528.jpg`, `15f73c5e1c.png`. Builder must eyeball which of each pair is the face and use the other as a 64px square secondary thumbnail under the name (or hover swap). Confirm the pairing visually — crawl order is the only evidence.
3. Finale.

### `/chef-nutcha` — see `mockup-chef-nutcha.html` (Rev 2)
1. Editorial-split hero: eyebrow "Chef Nutcha" (the nav label) + h1 "Nutcha Phanthoupheng, Proprietor & Executive Chef" (84/46px) in cols 1–6; `066a474e67.webp` cols 7–12, 4:5, `object-position:50% 20%`. Mobile: photo below, margin-left 18%, bleeding off the right edge.
2. Bio split: `91296fa499.png` (chef plating) cols 1–5 at 3:4; text cols 7–11 starting 120px lower: the first sentence of paragraph 1 ("Born in the countryside…at home.") as --t-lead, the rest of paragraph 1 and paragraph 2 as body (wording unchanged; only the paragraph break after the first sentence is new). Then the "Learn More" text link (target unknown, §9). `6c88237a15.png` is a painted/illustrated version of the same pose — **not used** in the mockup (looks like a duplicate); confirm (§9).
3. Collage (1440 wide, 1180px tall desktop): `764ffb44f0.jpg` 46% 5:4 top-left; `17904c7144.jpg` 28% 2:3 top 140 right; `e5fffc9de5.jpg` 30% 3:2 at left 12%/top 640 overlapping with ivory mat; `41f63b8087.jpg` 22% at 46%/820; `1613e725c0.jpg` 22% right/900. Mobile: 2-col grid, c1 full, c2 spans 2 rows, c5 80% right-aligned.
4. Lotus motif (160px), the page's single ornament.
5. Coronation Medal (overlap split): text cols 1–5 starting 96px lower, paragraph as Cormorant 300 26px brown with the existing `<strong>` runs at 500; text link "Learn More about the King Charles III Coronation Medal" (target unknown, §9); photo `0356b0fd99.webp` cols 6–12 at 4:3. Mobile: photo bleeds off left edge, text below.
6. Field: `2e8171fc85.jpg` (chef in a rice field) 21:8 wide (4:3 mobile).
7. Finale.

### `/farm-to-table`
1. Page hero `9ecc82931a.webp` (chef in rice field), h1 = the existing ### headline.
2. Intro split 7/5: the four paragraphs ("Our commitment… / We choose… / At the very heart… / Tilled by water buffalo…") — make "At the very heart of Baan Lao, is Chef Nutcha's Organic Rice Farm:" an h3; right `0dc4e41382.webp`.
3. "Learn More" (§9). Image trio 3 cols: `73287ef05c.jpg`, `673038904b.jpg`, + `673e37c149.webp` (portrait).
4. "Our Farm Partnerships" (h2) on sand: partner list as 3-col desktop / 2 tablet / 1 mobile list grouped as in source (the source's line groups by town order). Each item: bold name + town; link unchanged; "Captain Daryl Falk, Pacific Searcher Fishing, Steveston Harbour" has no link — render as plain text. Keep the stray trailing comma after Acadian Sturgeon? It's in content — keep.
5. Partnerships: three h4 tiles "The Baan Lao and Sumas Mountain Farm Partnership", "…Athiana Acres Partnership", "…John Volken Academy Farms Partnership" with 1:1 images `64709fd2bb.jpg`, `7ffeb27c7d.jpg`, `bfbaa7f65e.jpg`; remaining `fb77759408.jpg`, `350a2d2a85.jpg` as a 2-up row. (Which image belongs to which partnership is not in the crawl; §9.)
6. Finale.

### `/media-reviews` (title "Accolades")
1. Page hero `90d27e3fb9.webp` (exterior), h1: none exists as heading in source; use "ACCOLADES" (existing text) as h1.
2. Caption "Click or Tap Icons to View Full Story" (--t-small, muted, centred).
3. Badge wall on white band: flex-wrap centred, each badge in a 160×160 (mobile 120×120) cell, `object-fit:contain`, padding 16, links unchanged: `bca3de97fd.png`, `bcd3bb0df1.jpg`, `add5f4781b.png`, `258a19f40c.png`, `cf36a582b7.png`, `db2489e7bc.png`, `28c83c03ae.jpg`, `d896d9c637.jpg`, `17a704fdf5.jpg`. Hover: 1px gold-deep hairline under the cell.
4. Accolades list: 2-col desktop definition-style: each group title (e.g. "Canada's 100 Best Restaurants", "Vancouver Golden Plates") as h3, lines below as body. The `*` separators in "2021*2022*2023" stay as text (don't reformat).
5. "PRESS" (h2, linked to Daily Hive as in source) then press list: each row = outlet name (eyebrow, gold-deep) + article title link (Cormorant SC 24px brown), 1px line between, 20px padding.
6. Closing h4 "First Thai Chef in Canada to be named Maître Rôtisseur with La Chaîne des Rôtisseurs".
7. Finale.

### `/shop`
1. Page hero `02acac13a9.jpg`. h1: none in source — make the pull-quote the hero text: the quote in Cormorant SC 40/28px ivory italic-free (it is the first content line). Keep quotes exactly.
2. Rice: split 6/6, paragraph (with mailto/tel links) + `95b24099eb.png`, `8b2ef1356d.png` (product shots, contain on white 1:1), `3feae697c3.jpg` 3:2.
3. Product cards 2 cols (1 mobile): "Baan Lao Gift Card" (h3) + text + `3815f356fa.png`/`710e7a926f.png`; "Organic Jute Tote" + text + `c3785d3d7a.png`. No card boxes: image on a sand 1:1 field, caption as plain type below. Gift card card gets a secondary link to `/gift-card`? — not in source; don't add (§9).
4. Finale.

### `/wine-menu`
1. Page hero `58c78333d1.webp` (barrel cellar), h1 "ALL OUR WINES HAVE BEEN CAREFULLY CURATED BY OUR MASTER SOMMELIER, PIER-ALEXIS SOULIÈRE." — render in Cormorant SC (small caps make the all-caps read fine), 44/30px.
2. Split 5/7: `95e5665f07.jpeg` 4:5 + `67fb5613a9.jpeg` small; right: the quote as --t-lead blockquote with 2px gold-deep left rule, then the three winery paragraphs (links unchanged, gold-deep underline).
3. "Wine Menu" outline button (Elfsight PDF).
4. Winery logo/photo row: `92fae4d777.png`, `8a692fa40a.jpg`, `5e323f23b8.png`, `b88a2a0505.png`, `b6f93f6abb.jpg`, `265ed0cc7b.png`, `b5a7167ee8.png` — logos contain 120px tall on white cells, photos cover 3:2. 4 cols desktop / 2 mobile.
5. Finale.

### `/royal-thai-cuisine`
1. Page hero `d8455df54c.webp` (carved melon), h1 = existing ### line.
2. Long-read column, max 680px centred, --t-body 18px desktop, first two paragraphs then `897bad1c8a.webp` inset (portrait, float right 320px desktop with 32px margin; full width mobile), then remaining paragraphs. Fix only the hard line-breaks inside paragraphs (wording unchanged). One pull-quote callout allowed using an existing sentence: "Though many people believe Thai food is spicy, Royal Thai Cuisine must be perfectly balanced, absent of excessive heat or overwhelming spice." (render once, as the paragraph itself, styled — no duplication).
3. "GUIDE TO ROYAL THAI CUISINE" (h6 → link/target not in crawl, §9) as h2 above a 4-up grid: `68d6dd5cc7.jpg`, `d65c842151.jpg`, `07947c7c8f.jpg`, `70ddda4923.jpg` (2×2 mobile).
4. Finale.

### `/faqs`
1. Page hero `e16f1bff72.webp`, h1 "Frequently Asked Questions".
2. Content column max 760px. "Children at Baan Lao" block shown open as intro (h2 + 3 paragraphs). NOTE the source paragraph ends "…when we launch our Fine" and the next heading is "Dining Experience" — a Framer split; join as "…launch our Fine Dining Experience" only after confirming (§9).
3. Each question = accordion (`<details><summary>`), summary Cormorant SC 24/20px brown, 64px min-height, + icon; answer body text with existing bold, tel, mailto and **Tock** link unchanged. First 3 open on desktop? No — all closed except Children; deep-linkable via `id` slugs.
4. Dietary lists: "Gluten-free Dairy-free Pescatarian No shrimp, but not allergic to shellfish." and "Vegetarian-Vegan Shellfish-Free" render as inline pill lists (same text, split on the visible item boundaries).
5. Image strip 4-up under the column: `a94bc93cf3.jpg`, `19588a2b53.jpg`, `97bfc40fde.webp`, `a3b5d432a3.webp`.
6. Finale.

### `/menus` (title "FAQ" — keep, §9)
1. No page hero; instead a 6-image carousel/scroll-snap strip (as source `<ul>`): `e63a09786a.jpg`, `acd85385bd.jpg`, `a2b2b0cca0.jpg`, `fa67d69c5d.jpg`, `84f3623737.jpg`, `09d2d1d3ba.jpg` — 3:2, desktop shows 2.5 slides, mobile 1.1; prev/next 44px buttons; no autoplay.
2. Menu chooser: 3 large link tiles (3 cols desktop, 1 mobile, hairline-outlined, 0 radius, 32px padding, brown fill + ivory text on hover): "From Thailand with Love Menu" (PDF), "Afternoon Thai Tea Menu" (PDF), "Learn More About Our Wines" (`./wine-menu`). The two SVGs `aa59dac0ed.svg`, `4cf4a8808e.svg` are ornaments — use as tile icons (48px) if they're decorative marks; inspect.
3. Finale.

### `/gift-card` (title "Baan Lao Website")
1. Compact page header (no photo; 240px sand band): h1 "Baan Lao Gift Cards", sub "To Redeem, reservations must be made directly with the restaurant." (muted).
2. Gift Up widget container (existing embed code from the live page, unchanged), max-width 720px, centred, no box — 1px `--c-hair` top and bottom rules, 32px padding. Widget min-height 600px to avoid layout shift.
3. Finale.

## 5. Image use
- Rev 2: square corners, no frames/shadows; overlapping images use a 16px ivory `outline` mat. Never put a white-boxed badge on a photo.
- Hero / page hero: `object-fit:cover`, explicit `object-position` per image (default 50% 50%; chef 50% 25%), `fetchpriority="high"`, **not** lazy. Preload the `/` hero.
- Ratios: cards 4:3, splits 4:5 (mobile 3:2), galleries 3:2 / 1:1 / 2:3 natural, badges/logos `object-fit:contain` in fixed cells, product PNGs contain on 1:1 sand.
- `srcset` widths: 480, 768, 1080, 1440, 1920, 2560 (heroes up to 2560; cards/splits max 1440). `sizes`: hero `100vw`; card `(min-width:768px) 50vw, 100vw`; gallery tile `(min-width:1024px) 33vw, 50vw`. Serve AVIF + WebP, JPEG fallback, quality ~70. Many sources are 7008px/3900px — downscale; never ship originals.
- Low-res sources (≤640px: `e14db0f060`, `20f2da0da1`, `943c464dc7`, `e428799501`, `ed5c83b7cb`, `6823477816`, badges): never upscale past native width / DPR 2.
- Always set `width`/`height` attrs to stop CLS. `loading="lazy" decoding="async"` for everything below the first viewport.
- Alt text: describe what is visible, no claims. E.g. `aeb50aa1c2.jpg` "Baan Lao dining room with white-clothed tables and an open kitchen"; `4c21c25eda.jpg` "The red exterior of Baan Lao"; `f3aa707814.webp` "Tea being poured from a black kettle into a glass pitcher"; `10fc6e3182.jpg` "A dish on a gold scalloped plate". Badges: name the award as printed on the badge only. Decorative ornaments (fork/knife icons, SVG flourishes) `alt=""`. Logo: "Baan Lao Fine Thai Cuisine". Do not name dishes or ingredients unless the page text names them.

## 6. Mobile behaviour
- Header 64px; Reserve button always visible in header (no extra floating bar — avoids double CTA). Hamburger 44×44.
- Tap targets ≥44×44 everywhere (nav rows 56px, buttons 48px, accordion rows 64px, footer links padded to 44px line box via `padding:10px 0`, social 44px circles).
- Click-to-call: every phone number is `<a href="tel:7788395711">` (footer, menu panel, FAQ, Shop). Address → Google Maps link. Email → mailto.
- Body 16px min; no horizontal scroll at 320px (test); hero CTAs stack full width; cards 1 col; galleries 2 col; tables none.
- PDFs: label "(PDF)" visually hidden; open in same tab on mobile.
- Cookie banner: bottom sheet ≤120px, must not cover header Reserve.

## 7. Accessibility
- Contrast per §2 table; gold/amber never as text on light.
- Focus: `:focus-visible{outline:2px solid var(--c-gold-deep);outline-offset:3px}` on light; on brown use `outline-color:var(--c-amber)`. Never remove outlines.
- Skip link: first focusable element, "Skip to content" → `#main`, visually hidden until focused (then brown pill top-left, gold text).
- Headings: one h1 per page (hero headline), sections h2, cards/names h3/h4; don't skip levels for styling (source uses h6 for labels — remap to proper level, style via class).
- Landmarks: `header`, `nav[aria-label="Primary"]`, `main#main`, `footer`. Mobile menu dialog semantics + focus trap.
- `prefers-reduced-motion: reduce` → no slides, fades, carousel transitions, or smooth scroll; carousel never autoplays anyway.
- Accordions keyboard operable (`<details>` or button + `aria-expanded`). Carousel buttons labelled ("Previous image"/"Next image" — these are ARIA strings, §9).
- `lang="en"`. Form input has a `<label>` (Email Address).

## 8. QA checklist
- [ ] All 13 paths return 200 with unchanged `<title>` + meta description.
- [ ] Diff each page's visible text against `source/<page>.md` — no words added/removed (except §9-approved items).
- [ ] Every external href matches the crawl byte-for-byte (script: extract hrefs from build vs md).
- [ ] Reserve CTA in header on every page at 390, 768, 1024, 1440, 1920; links to exact OpenTable URL.
- [ ] Contrast spot-check with axe/Lighthouse: 0 contrast failures; Lighthouse a11y ≥95.
- [ ] Keyboard: skip link, nav, menu (open/Esc/trap), accordions, carousel, footer form.
- [ ] Reduced-motion on: no animation.
- [ ] No horizontal scroll 320–1920; tap targets ≥44px (Lighthouse).
- [ ] Images: no originals shipped; hero LCP < 2.5s on 4G; CLS < 0.1; below-fold lazy.
- [ ] tel/mailto/Maps work on iOS & Android.
- [ ] Gift Up widget loads and checks out (test mode); Elfsight PDFs open; Mailchimp form posts.
- [ ] Rev 2: no element has box-shadow or border-radius >0; only one dark block (finale) per page; ≤1 solid button per viewport; lotus motif ≤2 per page.
- [ ] Compare `/chef-nutcha` against `mockup-chef-nutcha-*.png`, and `/` against `mockup-home-desktop.png` / `mockup-home-mobile.png`.

## 9. Open questions / ambiguities (for Site Foreman → Jim)
1. **Award years conflict**: homepage text says "…BEST IN WEST CANADA AWARD 2026" and "BEST DESTINATION RESTAURANT AWARD 2026", but the linked canadas100best URL slug is `…-2025`, the 50 Best badge image reads 2025, and /media-reviews says "#12 … 2025" / "#1 Best Destination Restaurant 2025". Kept verbatim; client should confirm.
2. Meta description (/, /gift-card) cites "Canada's Best Restaurant in 2024 by the World Culinary Awards" — kept.
3. `/menus` has title "FAQ" and the FAQ meta description (inventory notes duplicate); `/reservations` is titled "Menu"; `/gift-card` "Baan Lao Website". Kept as-is per rules — recommend fixing later.
4. Collapsed/unknown content not in crawl: /reservations "Food Allergies & Restrictions" + "Cancellation Policy" bodies; "Learn more"/"Learn More" targets on tea, chef, farm pages; "Learn More about the King Charles III Coronation Medal" target; "GUIDE TO ROYAL THAI CUISINE" target. Pull from live Framer before build.
5. Homepage contains an empty link to `https://www.claudeusercontent.com/?errorReportingMode=parent#reservation` — looks like a paste artefact; recommend dropping (it's not visible content).
6. FAQ "…when we launch our Fine" / "Dining Experience" split across a heading — likely one sentence.
7. Image ↔ person/partnership pairing on /team and /farm-to-table inferred from crawl order only.
8. New microcopy introduced: "Skip to content", ARIA labels, footer group labels "Hours" / "Explore" / "Subscribe" ("Subscribe" exists in the Mailchimp embed), and alt text. Approve or drop the group labels.
9. Header nav promotes Menus and Chef Nutcha (from the footer) into the top bar and drops the decorative fork/knife/badge icons — layout change, not content.
11. Rev 2: `/chef-nutcha` images `91296fa499.png` and `6c88237a15.png` appear to be the same pose (one photo-like, one painted/illustrated) — mockup uses only the first; confirm whether both should stay.
12. Rev 2 adds one decorative lotus line drawing (`lotus.svg`, drawn by Layout Lab, not a brand asset). Client should approve or supply a Thai motif of their own.
10. Logo only exists as a grey-on-white JPG; an SVG or transparent PNG would be better (mockup uses `mix-blend-mode:multiply`).
