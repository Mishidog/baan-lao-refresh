# baanlao.ca inventory (crawled 2026-10-21, headless Chromium render)

## Tech stack
- Built on **Framer** (`<meta name="generator" content="Framer e503c47">`), images on framerusercontent.com.
- Third-party hosts loaded during crawl: Hotjar (hotjar-6387693, on /reservations & /afternoon-thai-tea-experience), Elfsight (static.elfsight.com / files.elfsightcdn.com widgets on /menus, /reservations, /afternoon-thai-tea-experience, /wine-menu), Gift Up / yourgift.cards + Stripe (gift card checkout), Mailchimp (cdn-images.mailchimp.com), Sentry, Cloudflare challenges, Google Fonts.

## Nav (header/footer links, homepage)
Logo → / · From Thailand With Love → /reservations · Afternoon Tea Experience → /afternoon-thai-tea-experience · Reserve Your Table → OpenTable (opentable.ca/r/baan-lao-fine-thai-cuisine-reservations-richmond?restref=1174369) · Gift Card → /gift-card · Chef Nutcha → /chef-nutcha · Shop → /shop · FAQ → /faqs · Home → / · Farm to Table → /farm-to-table · Menus → /menus · Team → /team · Royal Thai Cuisine → /royal-thai-cuisine · Press + Accolades → /media-reviews
Footer: "● 4100 Bayview Street, Richmond, BC" → Google Maps link; tel:7788395711; facebook.com/BaanLaoSteveston; instagram.com/baanlaosteveston

## Pages (13) — title tag
| path | title | file |
|---|---|---|
| / | Baan Lao Website | index.md |
| /reservations | Menu | reservations.md |
| /afternoon-thai-tea-experience | Afternoon Tea | afternoon-thai-tea-experience.md |
| /team | Team | team.md |
| /chef-nutcha | Chef Nutcha | chef-nutcha.md |
| /farm-to-table | Farm to Table | farm-to-table.md |
| /media-reviews | Accolades | media-reviews.md |
| /shop | Shop | shop.md |
| /wine-menu | Wine | wine-menu.md |
| /royal-thai-cuisine | Royal Thai Cuisine | royal-thai-cuisine.md |
| /faqs | FAQ | faqs.md |
| /menus | FAQ (duplicate of /faqs title+meta) | menus.md |
| /gift-card | Baan Lao Website | gift-card.md |
Meta descriptions are in each md front-matter.

## Forms & embeds
- Reservations: external OpenTable links (no inline widget); /faqs also links exploretock.com.
- Maps: Google Maps link only (no embedded map).
- Gift cards: Gift Up / yourgift.cards widget (Stripe) on /gift-card.
- Elfsight: menus are PDF files hosted on files.elfsightcdn.com (e.g. BaanLao_New-Menu_v1-4.pdf, Afternoon-Tea.pdf), linked from /menus, /reservations, /afternoon-thai-tea-experience, /wine-menu.
- No native <form> elements found in rendered DOM. Iframes found are empty/srcdoc plus Framer's editor iframe only.

## Fonts (computed)
Cormorant SC (serif, headings), Proxima Nova Bold / Regular / Light, Inter.

## Colours (computed, homepage)
#362C18 rgb(54,44,24) dark brown · #DCB84D rgb(220,184,77) gold · #EB9E10 amber · #FFFFFF · #000000 · #111111 · #2E2929 · #333 · #444 · #EEE · #9D968E taupe · #9BA1A5 grey · #E4E6F1. (Colour roles inferred only from computed styles; see screenshots.)

## Images
113 unique files in images/ (from <img> and CSS backgrounds), images.csv maps file → source URL → page → alt (194 rows).

## Screenshots
screenshot-home-desktop.png (1440 wide, full page), screenshot-home-mobile.png (390 wide @2x, full page).
