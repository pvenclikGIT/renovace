# Renovace (BezSpár.cz) — projektová dokumentace

Marketing landing page pro firmu **BezSpár.cz** (rekonstrukce koupelen bez bourání pomocí cementových, epoxidových a pryskyřičných stěrek). React + Vite SPA, GitHub Pages deploy z `main` přes `.github/workflows/deploy.yml`.

URL: https://pvenclikgit.github.io/renovace/

## Tech stack

- **React 19** (Vite 8, vanilla CSS modules — žádný Tailwind/CSS-in-JS)
- **react-router-dom v7** — `/` (HomePage) + `/cenik` (Cenik subpage)
- **framer-motion** — entrance animace + sliders
- **leaflet** + **mapy.com tiles** — interaktivní mapa realizací (Praha + Středočeský kraj)
- **lucide-react** — pár ikon (větší část SVG inline custom)

## Struktura

```
src/
├── App.jsx                          # router + page layout
├── main.jsx                         # ReactDOM
├── index.css                        # GLOBAL TOKENS (fluid type/space scale)
├── App.css                          # minimal app reset
├── components/
│   ├── Navbar.jsx + .module.css     # fixed nav, hamburger drawer
│   ├── Footer.jsx + .module.css
│   ├── SectionHeader.jsx + .module.css   # tag + h2 + lead, used by every section
│   ├── FloatingCta.jsx              # bottom-right CTA chip
│   ├── StickyBar.jsx                # bottom sticky banner (NOT mounted in App)
│   ├── FadeIn.jsx                   # framer-motion in-view wrapper
│   └── Icons.jsx                    # custom SVG icons
├── sections/                         # každá je samostatná HomePage sekce
│   ├── Hero.jsx + .module.css       # 2-col text+image, mobile centered
│   ├── Urgency.jsx                  # countdown bar (volné termíny)
│   ├── Process.jsx                  # 4-step grid (konzultace → předání)
│   ├── BeforeAfter.jsx              # before/after slider (16:9 desktop, 4:3 mobile)
│   ├── Why.jsx                      # 8 benefit features + photo quote
│   ├── Comparison.jsx               # 20-row tabulka stěrka vs klasika
│   ├── Materials.jsx                # 3 material cards (cement/epoxid/pryskyřice)
│   ├── ColorSwatch.jsx              # interaktivní vzorník barev
│   ├── Calculator.jsx               # m² + materiál → orientační cena
│   ├── Gallery.jsx                  # masonry grid + lightbox
│   ├── Myths.jsx                    # 6 mýtů × pravdy (accordion)
│   ├── Segments.jsx                 # 4 segmenty zákazníků (byty/dev/hotely/komerční)
│   ├── RealizaceMap.jsx             # leaflet mapa s počty realizací
│   ├── Certificates.jsx             # 6 certifikátů + dodavatelské značky
│   ├── BrandMaterials.jsx           # 3 kategorie značek (giants/design/raw)
│   ├── Reviews.jsx                  # 6 Google reviews + score
│   ├── Testimonials.jsx             # 3 long-form citace klientů
│   ├── Faq.jsx                      # 8 FAQ items
│   └── Contact.jsx                  # info + custom-select form
└── pages/
    └── Cenik.jsx + .module.css      # /cenik subpage (hero + tiery + materials + extras + FAQ)
```

## Design system — fluid responsive (Google-style)

Všechny CSS moduly konzumují tokeny z **`src/index.css`**. Žádné hardcoded font-sizes nebo paddings v komponentách.

### Token systém

```css
/* Fluid type scale: clamp() škáluje 320 → 1440 px viewport */
--fs-2xs ... --fs-4xl, --fs-hero, --fs-body, --fs-btn, --fs-lead

/* Fluid space scale: 4 → 176 px */
--space-1 ... --space-12

/* Section padding */
--section-py, --section-px (s --py / --px aliasy pro backwards-compat)

/* Containers */
--max-w (1280), --max-w-tight (1160), --max-w-narrow (720)

/* Foundation */
--nav-h (74), --tap (44), --r (14), --r-lg (22), --ease, --shadow-sm/md/lg
```

### Pravidla která **MUSÍ** být dodržena

1. **Žádné hardcoded `font-size: Xrem`** v sekcích — vždy `var(--fs-*)`. Výjimka: dekorativní glyphy <1ch a třetí strany (Leaflet).
2. **Žádné hardcoded `padding/margin/gap: Xrem`** — vždy `var(--space-*)`. Výjimka: dekorativní border-widths, dot sizes, ikonky <12px.
3. **Logical properties** všude: `padding-block/inline`, `inset-block/inline`, `margin-inline: auto`. NIKDY `padding-left/right/top/bottom`.
4. **`@media`** výhradně pro **strukturální shifts** (grid columns, flex direction, hide/show dekorací). NIKDY `@media { font-size: ... }` ani `@media { padding: ... }` — fluid clamp tokens to dělají.
5. **`text-wrap: balance`** na každém `<h1>/<h2>/<h3>` heading. **`text-wrap: pretty`** na každém body paragraphu (sub, desc, lead, FAQ answer).
6. **`min-height: var(--tap)`** na každém clickable elementu (button, link.cta, .csOption, .question, .toggle, atd.).
7. **`aspect-ratio`** místo fixních heightů na image kontejnerech (cards, hero image, before/after slider).
8. **Modern viewport units**: `svh` + `@supports (... dvh)` fallback. Nikdy `100vh` (mobilní URL bar bug).
9. **Container queries** (`@container`) pro karty které žijí v různých grid layoutech (`Materials.card`, `Segments.featCard/.smallCard`, `Cenik.tierCard`). Karta sama detekuje svou šířku a flipne layout.
10. **Hero H1 sized via `cqi`** — `clamp(1.5rem, 8cqi, 3.25rem)`. `.content` má `container-type: inline-size`. H1 respektuje 580 px content max-width, ne celý viewport. Jinak by na desktopu maxoval na 68 px a "Koupelna bez bourání." (21 znaků) by se lámalo na 4 řádky místo 3.

### Container hierarchy

```
.section           (full bleed background)
└── .section > * (or .inner)   max-width: var(--max-w-tight) ≈ 1160px
    └── .content              max-width: 580px (Hero), 56ch (lead/sub paragrafy)
```

## Copy / messaging principles

### Materiály = 3 produkty pro různé použití (NE tier hierarchy)

3 stěrky jsou **různé produkty pro různé application zones**, ne 3 cenové tieny pro 3 typy klientů. Cena se liší podle materiálu, ne podle klienta. Stejnou kvalitu dáváme do bytu, hotelu, kanceláře i wellness.

| Materiál | Cena | Použití |
|---|---|---|
| **Cementová stěrka** | 3 000 Kč/m² | Stěny a méně exponované plochy. **NE na podlahy do mokrého provozu** (sprchový kout, koupelnová podlaha). |
| **Epoxidová stěrka** | 3 750 Kč/m² | Stěny i podlahy, sprchové kouty, vany, mokré a chemicky zatížené provozy. *Nejoblíbenější.* |
| **Pryskyřičná stěrka** | 4 500 Kč/m² | Stěny i podlahy, podlahové topení, designové vzory a leštěné povrchy. *Designová volba.* |

### Zákaznické segmenty — všichni dostávají všechno

- **Soukromé bydlení** (byty + rodinné domy)
- **Bytové projekty a developerské stavby**
- **Hospitality** (hotely + wellness)
- **Kanceláře, retail a komerční objekty**

### Realistické claimy o času

- Standardní realizace: **běžně do 14 dnů** při dodržení technologických postupů
- Výjimečně do týdne (rush term)
- Klasika s bouráním: **1 až 2 měsíce**
- **Reagujeme do 24 hodin** od poptávky (e-mail/telefon callback)
- **Termín domluvíme během pár dnů** od poptávky (NE "do 48 h start")
- Na tyto claims byly historicky mockované "3 dny realizace" — to bylo nereálné, opraveno

### Typografie copy

- **Žádné em-dashes** (—) v user-visible textu. En-dashes (–) jen v rozsazích (`10–15 let`, `Po–Pá`, `8:00–18:00`).
- **CS vykání** (vy/vás/vám/vaše + plural verbs) — žádné tykání nikde.

## FAQ structure

- Homepage: **8 FAQ items** v `src/sections/Faq.jsx`
- Cenik: **8 FAQ items** v `src/pages/Cenik.jsx` (specifické na ceny + materiály)
- Identický pattern (toggle s rotujícím +, accordion expand)

## Hero specifika

### Homepage Hero

- **2-col grid** (text vlevo, image vpravo) na desktop; **1-col stack** od ≤1024 px (text nahoře, image dole).
- Mobile (≤1024 px): vše vycentrované (`text-align: center`, `margin-inline: auto`, `justify-content: center`).
- H1 textových span má 3 forced line breaks: `"Koupelna bez bourání." / "Rekonstrukce" / "v papučích."` — H1 size přes `cqi` zajišťuje že nejdelší line ("Koupelna bez bourání.") fit-uje na **1 vizuální řádek** = celkem 3 řádky H1 vždy.
- Tag pill: `"Praha a Středočeský kraj"` (bez "Bez bourání" — to už říká H1).
- Stats: **vždy 3-col grid** (180+ / ~14 dní / 10 let), nikdy stacked.
- Trust line: `"Ozveme se do 24 hodin. Termín domluvíme během pár dnů."`
- Image: `min-height: 100%` na desktop, `aspect-ratio: 16/10` na tablet, `4/3` na mobil. Plyne přirozeně pod fold.

### Cenik Hero

- Stejný pattern ale s breadcrumb (`Domů > Ceník`).
- 3 stat tiles ve stejném 3-col grid layoutu.
- Hero photo badge `"Průměrná realizace od 66 000 Kč"` viditelné jen na desktop (≥1024 px).

## Deployment

- GitHub Actions: `.github/workflows/deploy.yml` (a redundantní `main.yml`) — push na `main` triggeruje build + deploy na GitHub Pages
- Live URL: `https://pvenclikgit.github.io/renovace/`
- Vite output do `dist/`, asset hash vede na `dist/assets/index-*.{js,css}`

## Bot Protection

- Vercel Bot Protection **vypnuto** (per global CLAUDE.md note ze 2026-04-08) aby Claude/server-side fetch mohl kontrolovat web. **Před launchem zapnout zpět ON.**

## Browser support

- Container queries (`@container`, `cqi`): Chrome 105+, Safari 16+, Firefox 110+ (~94 % global)
- `svh` / `dvh`: Chrome 108+, Safari 15.4+, Firefox 101+ (~95 %)
- `text-wrap: balance` / `pretty`: Chrome 114+, Firefox 121+, Safari 17.5+ (graceful degrade — bez balance se text wrap-uje normálně)
- Logical properties: ~98 %

Žádné fallbacky kromě `@supports (min-height: 100dvh)` blocků v Hero (kde `dvh` je upgrade nad `svh`).

## Co je hotovo (commits chronologicky)

### Copy a obsah

- `ffd265c` — site-wide em-dashes removal, realistic timing claims, application-based material targeting
- `356a207` — drop tier hierarchy framing v Cenik+Calculator (Standardní/Střední/Prémiové → Cementová/Epoxidová/Pryskyřičná)
- `0f635d1` — FAQ unify na 8 items, Process step pills redesign
- `2367317` — Hero tag drop "Bez bourání" (redundant s H1)

### Design / responsive system

- `9fd77e0` — site-wide responsive overhaul (initial pass)
- `0a5625c` — modern viewport units, logical properties, text-wrap pretty
- `7a1d631` — container queries pro karty (Materials, Segments, Cenik tier)
- `c2e74c6` — Hero stats z stacked column → 3-col grid na všech viewportech
- `602c714` — fluid token system v `index.css` + Hero refactor
- `ff94896` — Cenik refactor na fluid tokens, drop force-fit hero
- `e201b26` — full-site fluid token refactor (23 souborů, všechny sekce)
- `96f2a9e` — Hero H1 přes `cqi` container queries místo `vw`
- `bdb8cd6` — final cleanup tiny margins/gaps na `--space-1`, ikony Myths na tokeny

## Co dělat / nedělat při dalším vývoji

### NEDĚLEJ

- **Nepřidávej hardcoded** `font-size: 1rem`, `padding: 2rem`, `gap: 1.5rem` do nových komponent. Vždy `var(--fs-*)` a `var(--space-*)`.
- **Nepřidávej `@media (max-width: ...) { font-size: ... }`** ani padding override. Pokud potřebuješ jinou velikost na mobilu, fluid clamp se postará.
- **Nepoužívej `padding-left/right/top/bottom`**. Vždy `padding-block` / `padding-inline`.
- **Nepoužívej `100vh`** (mobile URL bar bug). Vždy `100svh` + `@supports dvh` fallback.
- **Nepřidávej `<br>`** do nadpisů místo balance — moderní `text-wrap: balance` to vyřeší automaticky.

### DĚLEJ

- Pro novou sekci kopíruj pattern z existující (`Section.module.css`):
  ```css
  .section {
    background: var(--bg);
    padding-block: var(--section-py);
    padding-inline: var(--section-px);
  }
  .inner { max-width: var(--max-w-tight); margin-inline: auto; }
  ```
- Pro nový heading: `font-size: var(--fs-3xl); text-wrap: balance; line-height: var(--lh-tight);`
- Pro nový body paragraph: `font-size: var(--fs-body); text-wrap: pretty; line-height: var(--lh-relaxed);`
- Pro novou kartu: `container-type: inline-size;` + `@container (min-width: ...)` pro layout shift když karta naroste (např. v 1-col grid).
- Pro nový button: `min-height: var(--tap); padding-block: var(--space-3); padding-inline: var(--space-6);`
