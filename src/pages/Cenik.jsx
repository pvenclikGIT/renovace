import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Cenik.module.css'

/* ─── DATA ─────────────────────────────────────────────────── */

const packages = [
  {
    id: 'zaklad',
    badge: null,
    name: 'Stěny',
    tagline: 'Osvěžení bez bourání',
    price: 14900,
    desc: 'Proměna stěn vaší koupelny bez jediného úderu kladívka. Ideální, když je podlaha stále v pořádku a chcete jen nový vizuál.',
    features: [
      { ok: true,  text: 'Cementová stěrka na stěny' },
      { ok: true,  text: 'Základní vodotěsná impregnace' },
      { ok: true,  text: 'Výběr z 32 barev kolekce' },
      { ok: true,  text: 'Příprava, broušení, penetrace povrchu' },
      { ok: true,  text: 'Profesionální úklid po realizaci' },
      { ok: true,  text: 'Záruční list 5 let na těsnost' },
      { ok: false, text: 'Podlaha' },
      { ok: false, text: 'Prémiové materiály (epoxid, microcement)' },
    ],
    cta: 'Poptat Stěny',
    highlight: false,
    time: '1–2 dny',
  },
  {
    id: 'komplet',
    badge: 'Nejoblíbenější',
    name: 'Kompletní',
    tagline: 'Celá koupelna. Nový svět.',
    price: 22900,
    desc: 'Stěny i podlaha. Komplexní proměna, která koupelnu vizuálně i funkčně posune na úplně jinou úroveň.',
    features: [
      { ok: true, text: 'Cementová stěrka — stěny + podlaha' },
      { ok: true, text: 'Protiskluzová certifikace podlahy R10' },
      { ok: true, text: 'Plná vodotěsná impregnace' },
      { ok: true, text: 'Výběr ze 2 barev kolekce (32 odstínů)' },
      { ok: true, text: 'Příprava, broušení, penetrace povrchu' },
      { ok: true, text: 'Profesionální úklid po realizaci' },
      { ok: true, text: 'Záruční list 10 let na těsnost' },
      { ok: true, text: 'Doprava Praha zdarma' },
    ],
    cta: 'Poptat Kompletní',
    highlight: true,
    time: '2–3 dny',
  },
  {
    id: 'premium',
    badge: 'Prémiový výběr',
    name: 'Premium',
    tagline: 'Hotelová kvalita doma.',
    price: 32900,
    desc: 'Microcement nebo epoxid — materiály nejvyšší třídy. Bez spár, s efekty a vzory na přání. Výsledek, který hosté nepřestanou obdivovat.',
    features: [
      { ok: true, text: 'Microcement nebo epoxidová stěrka' },
      { ok: true, text: 'Stěny + podlaha + doplňkové plochy (niky, police)' },
      { ok: true, text: 'Individuální barevná kombinace a efekty' },
      { ok: true, text: 'Designové vzory na přání (mramor, beton, art)' },
      { ok: true, text: 'Prémiová vodotěsná impregnace — nano vrstva' },
      { ok: true, text: 'Protiskluz R10 + certifikát' },
      { ok: true, text: 'Záruční list 10 let na těsnost' },
      { ok: true, text: 'Doprava Praha zdarma + prioritní termín' },
    ],
    cta: 'Poptat Premium',
    highlight: false,
    time: '3–4 dny',
  },
]

const materials = [
  {
    slug: 'cement',
    name: 'Cementová stěrka',
    accentColor: '#C9963C',
    priceWall: '890–1 190',
    priceFloor: '990–1 290',
    unit: 'Kč / m²',
    tags: ['Stěny', 'Podlaha', 'Nejpopulárnější'],
    pros: ['Přírodní matný vzhled', 'Výborná prodyšnost', 'Snadná údržba', 'Ekologický původ'],
    suitable: 'Soukromé koupelny, rodinné domy, byty. Moderní i skandinávský styl.',
    ideal: true,
  },
  {
    slug: 'epoxid',
    name: 'Epoxidová stěrka',
    accentColor: '#3D7A77',
    priceWall: '1 090–1 490',
    priceFloor: '1 190–1 590',
    unit: 'Kč / m²',
    tags: ['Stěny', 'Podlaha', 'Maximální odolnost'],
    pros: ['Extrémní pevnost a odolnost', 'Lesklý nebo saténový povrch', 'Odolné vůči chemikáliím', 'Bezspárový povrch'],
    suitable: 'Pronajímané byty, hotely, penziony. Průmyslový a loftový styl.',
    ideal: false,
  },
  {
    slug: 'micro',
    name: 'Microcement',
    accentColor: '#3D3830',
    priceWall: '1 390–1 890',
    priceFloor: '1 490–1 990',
    unit: 'Kč / m²',
    tags: ['Stěny', 'Podlaha', 'Premium'],
    pros: ['Hedvábně hladký povrch', 'Hloubkový 3D efekt', 'Bez spár a napojení', 'Výsledek jako ze showroomu'],
    suitable: 'Luxusní rezidence, designové byty, wellness, hotely 4★+.',
    ideal: false,
  },
]

const process = [
  { num: '01', title: 'Konzultace zdarma', desc: 'Stačí fotky na WhatsApp nebo e-mail. Do 24 hodin dostanete orientační cenu a dostupné termíny — bez závazku.' },
  { num: '02', title: 'Inspekce a přesná nabídka', desc: 'Přijedeme se osobně podívat, ověříme stav obkladů, domluvíme materiál, barvu a termín. Podepíšeme smlouvu.' },
  { num: '03', title: 'Realizace', desc: 'Přijdeme v domluveném termínu. Příprava povrchu, aplikace materiálu, impregnace. Průměrně 2–3 dny čistě a tiše.' },
  { num: '04', title: 'Předání a záruční list', desc: 'Koupelnu uklidíme, předáme záruční list a ukážeme vám péči o nový povrch. Hotovo — v papučích.' },
]

const included = [
  { icon: '🛡', title: 'Konzultace zdarma',      note: 'Z fotek nebo na místě — bez závazku' },
  { icon: '🚗', title: 'Doprava (Praha)',          note: 'Středočeský kraj od 590 Kč' },
  { icon: '🔧', title: 'Příprava povrchu',         note: 'Broušení, čištění, penetrace' },
  { icon: '💧', title: 'Vodotěsná impregnace',     note: 'Certifikovaný systém' },
  { icon: '🧹', title: 'Úklid po realizaci',       note: 'Odcházíme bez jednoho zrnka prachu' },
  { icon: '📄', title: 'Záruční list písemně',     note: '5 nebo 10 let na těsnost' },
]

const extras = [
  { label: 'Protiskluzová úprava podlahy R10',  price: '+150 Kč/m²',   note: 'Certifikace, vhodné pro rodiny s dětmi' },
  { label: 'Demontáž / montáž příslušenství',   price: 'od 500 Kč',    note: 'Háčky, police, zrcadlo, sprch. tyč' },
  { label: 'Express termín (do 48 h)',           price: '+20 %',        note: 'Dle aktuální dostupnosti' },
  { label: 'Projekt mimo Prahu',                 price: 'individuálně', note: 'Větší projekt = celá ČR' },
  { label: 'Hotely, nájemní byty, developeři',  price: 'individuálně', note: 'Množstevní sleva od 3 koupelen' },
]

const calcExample = {
  label: 'Průměrná koupelna — 6 m² podlaha, stěny 22 m²',
  rows: [
    { item: 'Cementová stěrka — stěny (22 m² × 990 Kč)',    val: '21 780 Kč' },
    { item: 'Cementová stěrka — podlaha (6 m² × 1 090 Kč)', val: '6 540 Kč' },
    { item: 'Protiskluzová úprava podlahy (6 m² × 150 Kč)',  val: '900 Kč' },
    { item: 'Příprava, impregnace, záruční list',            val: 'zahrnuto' },
    { item: 'Doprava Praha',                                  val: 'zdarma' },
  ],
  total: '29 220 Kč',
  note: 'Orientační kalkulace dle průměrných rozměrů a standardní cementové stěrky. Přesná cena závisí na stavu obkladů, zvoleném materiálu a barvě.',
}

const guarantees = [
  { icon: '🏆', title: '10 let záruka', desc: 'Záruční list ke každé zakázce. Vodotěsnost i přilnavost kryjeme písemně.' },
  { icon: '🔍', title: 'Transparentní cena', desc: 'Pevná nabídka předem. Co podepíšeme, to zaplatíte — ani korunu navíc.' },
  { icon: '⚡', title: 'Hotovo za 3 dny', desc: 'Průměrná realizace trvá 2–3 dny. Plně funkční koupelna do 48 h po dokončení.' },
  { icon: '✅', title: 'Certifikované materiály', desc: 'Používáme pouze atestované materiály s certifikáty EU. BASF, Mapei, Ardex.' },
]

const faqs = [
  {
    q: 'Proč jsou ceny uváděny "od"? Co finální cenu ovlivňuje?',
    a: 'Cena závisí na třech věcech: velikost koupelny, stav povrchu stávajících obkladů a zvolený materiál. Praskliny nebo nestabilní obklady mohou vyžadovat přípravu navíc. Pro přesnou cenu nám stačí pár fotek — do 24 hodin máte nabídku zdarma.',
  },
  {
    q: 'Balíček nebo sazba per m² — co je pro mě výhodnější?',
    a: 'Balíčky jsou výhodnější pro průměrné koupelny (4–8 m²). Pokud máte koupelnu výrazně větší nebo menší, nebo potřebujete jen část plochy, použijeme sazbu per m². Vždy vám navrhneme výhodnější variantu.',
  },
  {
    q: 'Lze aplikovat stěrku i na staré, popraskané nebo nerovné obklady?',
    a: 'Ve většině případů ano. Drobné praskliny nebo nerovnosti zvládneme jako součást přípravy povrchu. Pokud jsou obklady nestabilní nebo výrazně poškozené, zjistíme to při konzultaci a sdělíme vám to vždy předem — žádné překvapení na faktuře.',
  },
  {
    q: 'Jak vypadá platba? Je nutná záloha?',
    a: 'Záloha 30 % při podpisu smlouvy, doplatek 70 % po předání hotové koupelny. Přijímáme bankovní převod i hotovost. Žádné platby do podpisu smlouvy.',
  },
  {
    q: 'Jak dlouho musím po realizaci čekat, než mohu koupelnu používat?',
    a: 'Základní vrstva je pochozí do 24 hodin. Plná funkčnost (sprcha, koupelna) nastane po 48 hodinách. Přesný harmonogram vám sdělíme při předání.',
  },
  {
    q: 'Jaká je údržba nového povrchu?',
    a: 'Velmi jednoduchá. Běžný neutrální čistič, žádné agresivní chemikálie, měkký hadr nebo mop. Při předání dostanete stručný návod k péči. Povrch je nenáročný a vydrží roky.',
  },
  {
    q: 'Pracujete i mimo Prahu a Středočeský kraj?',
    a: 'Ano, u větších projektů (hotely, bytové komplexy) jedeme po celé ČR. U projektů mimo dosah kontaktujte nás přímo — domluvíme se individuálně.',
  },
]

/* ─── COMPONENTS ───────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.faqA}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function Cenik() {
  const [activeMat, setActiveMat] = useState('cement')
  const mat = materials.find(m => m.slug === activeMat)

  return (
    <main className={styles.page}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <FadeIn>
            <nav className={styles.breadcrumb} aria-label="Drobečková navigace">
              <Link to="/">Domů</Link>
              <span aria-hidden="true">/</span>
              <span>Ceník</span>
            </nav>

            <div className={styles.heroTag}>
              <span className={styles.heroDot} />
              Transparentní ceny bez překvapení
            </div>

            <h1 className={styles.heroH1}>
              Kolik stojí nová<br />
              <em className={styles.heroGold}>koupelna bez bourání?</em>
            </h1>

            <p className={styles.heroLead}>
              Rekonstrukce koupelny bez bourání je ve srovnání s klasickou renovací výrazně levnější — a přitom výsledek
              nepoznáte. Tady najdete přehledný ceník balíčků i sazeb per m².{' '}
              <strong>Orientační cena z fotek — do 24 hodin zdarma.</strong>
            </p>

            <div className={styles.heroActions}>
              <a href="/#contact" className={styles.heroBtnPrimary}>
                Chci orientační cenu
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="tel:+420776661661" className={styles.heroBtnGhost}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.5 3h3l1.5 4-2 1.5c1 2 2 3 4 4L12 10.5l4 1.5v3C16 15 10 17 3.5 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                </svg>
                776 661 661
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={styles.heroStats}>
              {[
                { num: '180+',   label: 'dokončených koupelen' },
                { num: '3 dny',  label: 'průměrná realizace' },
                { num: '10 let', label: 'záruka na těsnost' },
                { num: '0 Kč',   label: 'konzultace — zdarma' },
              ].map((s, i, arr) => (
                <div key={s.label} className={styles.heroStatWrap}>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNum}>{s.num}</span>
                    <span className={styles.heroStatLabel}>{s.label}</span>
                  </div>
                  {i < arr.length - 1 && <span className={styles.heroStatDiv} aria-hidden="true" />}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY CHEAPER ───────────────────────────────────────── */}
      <section className={styles.whyCheaper}>
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.whyGrid}>
              <div className={styles.whyText}>
                <div className={styles.whyTag}>Proč je to levnější?</div>
                <h2 className={styles.whyH2}>
                  Klasická renovace vs.<br /><strong>BezSpár.cz</strong>
                </h2>
                <p className={styles.whyLead}>
                  Tradiční rekonstrukce koupelny stojí 80–180 tis. Kč a trvá 3–6 týdnů.
                  My aplikujeme prémiové materiály přímo na stávající obklady — žádné bourání,
                  žádný prach, žádný odpad. Výsledek za zlomek ceny a 3 dny.
                </p>
              </div>
              <div className={styles.whyCompare}>
                {[
                  { label: 'Cena', classic: '80–180 tis. Kč', us: 'od 14 900 Kč', win: true },
                  { label: 'Délka realizace', classic: '3–6 týdnů', us: '2–3 dny', win: true },
                  { label: 'Bourání a hluk', classic: 'Ano — intenzivní', us: 'Žádné', win: true },
                  { label: 'Stavební odpad', classic: 'Kontejner sutě', us: 'Žádný', win: true },
                  { label: 'Bydlení v průběhu', classic: 'Většinou nelze', us: 'Lze — bez problémů', win: true },
                  { label: 'Záruka na těsnost', classic: '2–5 let', us: 'Až 10 let', win: true },
                ].map(row => (
                  <div key={row.label} className={styles.compareRow}>
                    <span className={styles.compareLabel}>{row.label}</span>
                    <span className={styles.compareClassic}>{row.classic}</span>
                    <span className={styles.compareUs}>{row.us}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Cenové balíčky"
              title="Vyberte balíček <em>pro vaši koupelnu</em>"
              lead="Pevná cena za kompletní realizaci. Žádné skryté náklady, žádná překvapení na faktuře."
            />
          </FadeIn>

          <div className={styles.packages}>
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.id} delay={i * 0.08}>
                <div className={`${styles.pkgCard} ${pkg.highlight ? styles.pkgHighlight : ''}`}>
                  {pkg.badge && (
                    <div className={`${styles.pkgBadge} ${pkg.highlight ? styles.pkgBadgeGold : styles.pkgBadgeDim}`}>
                      {pkg.badge}
                    </div>
                  )}

                  <div className={styles.pkgTop}>
                    <div className={styles.pkgName}>{pkg.name}</div>
                    <div className={styles.pkgTagline}>{pkg.tagline}</div>
                    <div className={styles.pkgPriceRow}>
                      <span className={styles.pkgFrom}>od</span>
                      <span className={styles.pkgNum}>{pkg.price.toLocaleString('cs-CZ')} Kč</span>
                    </div>
                    <div className={styles.pkgTime}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Realizace {pkg.time}
                    </div>
                    <p className={styles.pkgDesc}>{pkg.desc}</p>
                  </div>

                  <ul className={styles.pkgFeatures} aria-label={`Co obsahuje balíček ${pkg.name}`}>
                    {pkg.features.map(f => (
                      <li key={f.text} className={`${styles.pkgFeat} ${!f.ok ? styles.pkgFeatNo : ''}`}>
                        <span className={styles.pkgFeatIcon}>{f.ok ? <CheckIcon /> : <CrossIcon />}</span>
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className={`${styles.pkgCta} ${pkg.highlight ? styles.pkgCtaGold : ''}`}
                  >
                    {pkg.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className={styles.pkgsNote}>
              Ceny jsou orientační pro koupelnu 4–8 m². Máte větší prostor nebo více koupelen?{' '}
              <a href="/#contact">Napište nám</a> — připravíme nabídku na míru + množstevní slevu.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MATERIALS ─────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Materiály a sazby"
              title="Ceník <em>per m²</em>"
              lead="Potřebujete přesnější kalkulaci? Zvolte materiál a zjistěte sazbu za m² — stěny i podlahu zvlášť."
              light
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.matTabs} role="tablist" aria-label="Výběr materiálu">
              {materials.map(m => (
                <button
                  key={m.slug}
                  role="tab"
                  aria-selected={activeMat === m.slug}
                  className={`${styles.matTab} ${activeMat === m.slug ? styles.matTabActive : ''}`}
                  onClick={() => setActiveMat(m.slug)}
                  style={activeMat === m.slug ? { borderColor: m.accentColor, color: m.accentColor } : {}}
                >
                  {m.name}
                  {m.ideal && <span className={styles.matTabPill}>Nejlepší hodnota</span>}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMat}
                className={styles.matPanel}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.matAccentBar} style={{ background: mat.accentColor }} />

                <div className={styles.matPanelBody}>
                  <div className={styles.matPanelLeft}>
                    <div className={styles.matPanelTags}>
                      {mat.tags.map(t => <span key={t} className={styles.matPanelTag}>{t}</span>)}
                    </div>
                    <h3 className={styles.matPanelName}>{mat.name}</h3>
                    <p className={styles.matPanelSuitable}><strong>Vhodné pro:</strong> {mat.suitable}</p>
                    <ul className={styles.matPanelPros}>
                      {mat.pros.map(p => (
                        <li key={p}>
                          <span style={{ color: mat.accentColor }}><CheckIcon /></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.matPanelRight}>
                    <div className={styles.matPriceCard}>
                      <div className={styles.matPriceRow}>
                        <span className={styles.matPriceLabel}>Stěny</span>
                        <div className={styles.matPriceVal}>
                          <span className={styles.matPriceFrom}>od</span>
                          <span className={styles.matPriceNum}>{mat.priceWall}</span>
                          <span className={styles.matPriceUnit}>Kč/m²</span>
                        </div>
                      </div>
                      <div className={styles.matPriceDivider} />
                      <div className={styles.matPriceRow}>
                        <span className={styles.matPriceLabel}>Podlaha</span>
                        <div className={styles.matPriceVal}>
                          <span className={styles.matPriceFrom}>od</span>
                          <span className={styles.matPriceNum}>{mat.priceFloor}</span>
                          <span className={styles.matPriceUnit}>Kč/m²</span>
                        </div>
                      </div>
                      <a href="/#contact" className={styles.matPriceCta} style={{ background: mat.accentColor }}>
                        Poptat {mat.name}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>

      {/* ── INCLUDED / EXTRAS ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Co je v ceně"
              title="Vždy zahrnuto. <em>Bez skrytých nákladů.</em>"
              lead="Transparentnost je pro nás základ. Tady je přesně to, co dostanete — a co jsou jedině volitelné příplatky."
            />
          </FadeIn>

          <div className={styles.includedGrid}>
            <FadeIn delay={0.1}>
              <div className={styles.includedCard}>
                <div className={styles.includedCardHeader}>
                  <div className={styles.includedCardIcon} style={{ background: 'rgba(76,175,80,0.1)' }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 2l7 3.5V11c0 4-3 7-7 8.5C7 18 4 15 4 11V5.5L11 2z" stroke="#4CAF50" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M8 11l2.5 2.5 4-4" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.includedCardTitle}>Vždy v ceně</h3>
                </div>
                <ul className={styles.includedList}>
                  {included.map(it => (
                    <li key={it.title} className={styles.includedItem}>
                      <span className={styles.includedEmoji} aria-hidden="true">{it.icon}</span>
                      <div>
                        <span className={styles.includedLabel}>{it.title}</span>
                        <span className={styles.includedNote}>{it.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className={styles.includedCard}>
                <div className={styles.includedCardHeader}>
                  <div className={styles.includedCardIcon} style={{ background: 'var(--gold-pale)' }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="9" stroke="var(--gold)" strokeWidth="1.5"/>
                      <path d="M11 7v4l3 2" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className={styles.includedCardTitle}>Volitelné příplatky</h3>
                </div>
                <ul className={styles.extrasList}>
                  {extras.map(ex => (
                    <li key={ex.label} className={styles.extrasItem}>
                      <div>
                        <span className={styles.extrasLabel}>{ex.label}</span>
                        <span className={styles.extrasNote}>{ex.note}</span>
                      </div>
                      <span className={styles.extrasPrice}>{ex.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Jak to funguje"
              title="Od první zprávy <em>k hotové koupelně</em>"
              lead="Jednoduchý čtyřkrokový proces. Bez papírování navíc, bez nečekaných prodlev."
            />
          </FadeIn>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className={styles.processCard}>
                  <div className={styles.processNum}>{step.num}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALC EXAMPLE ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Příklad kalkulace"
              title="Reálný příklad — <em>kolik to vyjde?</em>"
              lead={calcExample.label}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.calc}>
              <div className={styles.calcRows}>
                {calcExample.rows.map(row => (
                  <div key={row.item} className={styles.calcRow}>
                    <span className={styles.calcItem}>{row.item}</span>
                    <span className={styles.calcVal}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div className={styles.calcTotal}>
                <span className={styles.calcTotalLabel}>Celkem s DPH</span>
                <span className={styles.calcTotalNum}>{calcExample.total}</span>
              </div>
              <p className={styles.calcNote}>
                {calcExample.note}{' '}
                <a href="/#contact">Poptejte přesnou nabídku →</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── GUARANTEES ────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Záruky a jistoty"
              title="Proč nám <em>můžete věřit</em>"
              lead="Více než 180 spokojených koupelen v Praze a okolí. Každá s písemnou zárukou."
              light
            />
          </FadeIn>
          <div className={styles.guaranteesGrid}>
            {guarantees.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.08}>
                <div className={styles.guaranteeCard}>
                  <div className={styles.guaranteeEmoji} aria-hidden="true">{g.icon}</div>
                  <h3 className={styles.guaranteeTitle}>{g.title}</h3>
                  <p className={styles.guaranteeDesc}>{g.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Časté dotazy"
              title="Otázky o <em>ceníku a platbách</em>"
              lead="Nejčastější otázky zákazníků — upřímné odpovědi."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className={styles.faqList}>
              {faqs.map(item => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaTag}>
                <span className={styles.ctaDot} />
                Konzultace zdarma · Bez závazku · Odpovídáme do 24 h
              </div>
              <h2 className={styles.ctaH2}>
                Chcete přesnou cenu<br />pro vaši koupelnu?
              </h2>
              <p className={styles.ctaLead}>
                Pošlete nám pár fotek přes WhatsApp nebo e-mail. Do 24 hodin dostanete
                orientační cenu, volné termíny a doporučení materiálu — zcela zdarma a bez závazku.
              </p>
            </div>
            <div className={styles.ctaRight}>
              <a href="/#contact" className={styles.ctaBtn}>
                Nezávazná poptávka
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={styles.ctaContacts}>
                <a href="tel:+420776661661" className={styles.ctaContact}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 3h2.5l1.5 3.5L5 8c1 2 2 3 4 4l1.5-2 3.5 1.5V14C14 14 9 16 3 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  +420 776 661 661
                </a>
                <a href="tel:+420604913683" className={styles.ctaContact}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 3h2.5l1.5 3.5L5 8c1 2 2 3 4 4l1.5-2 3.5 1.5V14C14 14 9 16 3 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  +420 604 913 683
                </a>
                <a href="mailto:info@bezspar.cz" className={styles.ctaContact}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 5l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  info@bezspar.cz
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  )
}
