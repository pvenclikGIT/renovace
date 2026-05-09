import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Cenik.module.css'

const HOME = '/renovace/'

/* ─── DATA ─────────────────────────────────────────────────── */

const tiers = [
  {
    id: 'standard',
    name: 'Standardní provedení',
    tagline: 'Cementová stěrka, rovné plochy',
    rate: 3000,
    rateLabel: '3 000',
    badgeText: null,
    highlight: false,
    matName: 'Cementová stěrka',
    features: [
      { ok: true,  text: 'Cementová stěrka na stěny i podlahu' },
      { ok: true,  text: 'Rovné plochy a jednoduché vzory' },
      { ok: true,  text: 'Výběr z 32 odstínů kolekce' },
      { ok: true,  text: 'Příprava, broušení, skelná perlinka' },
      { ok: true,  text: 'Vodotěsná impregnace' },
      { ok: true,  text: 'Záruční list na 5 let' },
      { ok: false, text: 'Niky, rohy, složitější detaily' },
      { ok: false, text: 'Prémiové materiály' },
    ],
    example: { m2: 22, price: '66 000' },
    suitable: 'Soukromé koupelny, rodinné domy, byty',
    cta: 'Poptat cementovou stěrku',
  },
  {
    id: 'medium',
    name: 'Střední náročnost',
    tagline: 'Epoxidová stěrka, niky a rohy',
    rate: 3750,
    rateLabel: '3 750',
    badgeText: 'Nejoblíbenější',
    highlight: true,
    matName: 'Epoxidová stěrka',
    features: [
      { ok: true, text: 'Epoxidová stěrka na stěny i podlahu' },
      { ok: true, text: 'Niky, rohy, více detailů' },
      { ok: true, text: 'Lesklý nebo saténový povrch' },
      { ok: true, text: 'Příprava, broušení, skelná perlinka' },
      { ok: true, text: 'Plná vodotěsná impregnace' },
      { ok: true, text: 'Protiskluzová certifikace R10' },
      { ok: true, text: 'Záruční list na 10 let' },
      { ok: true, text: 'Doprava Praha zdarma' },
    ],
    example: { m2: 22, price: '82 500' },
    suitable: 'Sprchové kouty, nájemní byty, hotely, penziony',
    cta: 'Poptat epoxidovou stěrku',
  },
  {
    id: 'premium',
    name: 'Prémiové provedení',
    tagline: 'Pryskyřičná stěrka, designové efekty',
    rate: 4500,
    rateLabel: '4 500',
    badgeText: 'Hotelová kvalita',
    highlight: false,
    matName: 'Pryskyřičná stěrka',
    features: [
      { ok: true, text: 'Pryskyřičná stěrka, imitace mramoru nebo leštěný beton' },
      { ok: true, text: 'Sprchový kout se žlabem, složité detaily' },
      { ok: true, text: 'Individuální barevné vzory a efekty' },
      { ok: true, text: 'Prémiová nano impregnace' },
      { ok: true, text: 'Protiskluzová certifikace R10/R11' },
      { ok: true, text: 'Záruční list na 10 let' },
      { ok: true, text: 'Doprava Praha zdarma, prioritní termín' },
      { ok: true, text: 'Fyzické vzorky s přivezeme na konzultaci' },
    ],
    example: { m2: 22, price: '99 000' },
    suitable: 'Luxusní rezidence, wellness, hotely 4+ hvězdiček',
    cta: 'Poptat pryskyřičnou stěrku',
  },
]

const materials = [
  {
    slug: 'epoxid',
    name: 'Epoxidová stěrka',
    accentColor: '#3D7A77',
    tags: ['Stěny', 'Podlaha', 'Maximální odolnost'],
    rate: '3 750',
    desc: 'Tvrdá jako kámen, hladká jako leštěný mramor. Nejodolnější volba s nulovou nasákavostí. Ideální pro sprchové kouty a podlahy vystavené vysoké vlhkosti.',
    pros: ['Extrémní pevnost a odolnost', 'Lesklý nebo saténový povrch', 'Nulová nasákavost', 'Bezspárový monolit'],
    ideal: 'Sprchové kouty, vany, podlahy. Moderní a průmyslový styl.',
  },
  {
    slug: 'cement',
    name: 'Cementová stěrka',
    accentColor: '#C9963C',
    tags: ['Stěny', 'Podlaha', 'Nejoblíbenější'],
    rate: '3 000',
    desc: 'Minerální textura, skandinávský klid. Přirozený matný charakter připomínající beton. Oblíbená volba designérů interiérů v celé Evropě.',
    pros: ['Přírodní matný povrch', 'Betonový efekt bez betonu', 'Teplé přírodní tóny', 'Výborná prodyšnost'],
    ideal: 'Stěny, příčky, méně exponované plochy. Skandinávský a minimalistický styl.',
  },
  {
    slug: 'pryskyrice',
    name: 'Pryskyřičná stěrka',
    accentColor: '#3D3830',
    tags: ['Stěny', 'Podlaha', 'Premium'],
    rate: '4 500',
    desc: 'Nejplastičtější z trojice. Lze tvarovat, barvit, kombinovat. Ideální pro designové vzory a prémiové wellness prostory.',
    pros: ['Neomezené barvy a vzory', 'Imitace mramoru nebo leštěného betonu', 'Prémiový designový výsledek', 'Exkluzivní povrch bez spár'],
    ideal: 'Designové interiéry, wellness, hotely 4+ hvězdiček.',
  },
]

const compareRows = [
  { label: 'Celková cena (průměrná koupelna)', classic: '80 000-200 000 Kč', us: 'od 66 000 Kč bez DPH' },
  { label: 'Délka realizace',                  classic: '3-6 týdnů',          us: '3 dny v průměru'     },
  { label: 'Bourání a hluk',                   classic: 'Ano, intenzivní',     us: 'Žádné'               },
  { label: 'Prach v bytě',                     classic: 'Centimetry všude',    us: 'Žádný'               },
  { label: 'Stavební odpad',                   classic: 'Kontejner sutě',      us: 'Žádný'               },
  { label: 'Bydlení v průběhu',                classic: 'Většinou nelze',      us: 'Lze bez problémů'    },
  { label: 'Záruka na těsnost',                classic: '2-5 let',             us: 'Až 10 let'           },
]

function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M19 3H3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h12.5L20 19V4c0-.6-.4-1-1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M6 8.5h10M6 11.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
function IconLayers() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M2 7.5L11 3l9 4.5-9 4.5-9-4.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M2 11.5l9 4.5 9-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 15.5l9 4.5 9-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconDrop() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2C11 2 4 9.5 4 14a7 7 0 0 0 14 0C18 9.5 11 2 11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8.5 16c.5 1.5 2 2.5 3.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
function IconTruck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M14 10h4l2 3v2h-6V10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="6" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="17" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
}
function IconSparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2v4M11 16v4M2 11h4M16 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.9 4.9l2.8 2.8M14.3 14.3l2.8 2.8M4.9 17.1l2.8-2.8M14.3 7.7l2.8-2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
}
function IconCertificate() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 2h9.5L19 6.5V18H5V2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M14 2v4.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M8 10.5h6M8 13.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

const included = [
  { Icon: IconChat,        title: 'Konzultace zdarma',   note: 'Z fotek nebo na místě, bez závazku' },
  { Icon: IconLayers,      title: 'Příprava podkladu',   note: 'Broušení, odmašťování, penetrace, skelná perlinka' },
  { Icon: IconDrop,        title: 'Vodotěsná impregnace',note: 'Certifikovaný systém, součást každé zakázky' },
  { Icon: IconTruck,       title: 'Doprava Praha zdarma',note: 'Středočeský kraj od 590 Kč' },
  { Icon: IconSparkle,     title: 'Úklid po realizaci',  note: 'Odcházíme bez jediného zrnka prachu' },
  { Icon: IconCertificate, title: 'Záruční list písemně',note: '5 nebo 10 let na těsnost ke každé zakázce' },
]

const extras = [
  { label: 'Protiskluzová certifikace R10',     price: '+150 Kč/m²',   note: 'Doporučeno pro podlahy, vhodné pro rodiny s dětmi' },
  { label: 'Demontáž a montáž příslušenství',   price: 'od 500 Kč',    note: 'Háčky, police, zrcadlo, sprchová tyč' },
  { label: 'Express termín do 48 h',            price: '+20 %',        note: 'Dle aktuální dostupnosti' },
  { label: 'Projekty mimo Prahu',               price: 'individuálně', note: 'Větší projekty po celé ČR' },
  { label: 'Hotely, nájemní byty, developeři',  price: 'individuálně', note: 'Množstevní sleva od 3 koupelen' },
]

const process = [
  { num: '01', title: 'Konzultace a výběr', desc: 'Přivezeme fyzické vzorky, poradíme s materiálem, barvou i texturou. Stačí pár fotek na WhatsApp. Prohlídka a konzultace jsou zdarma.', badge: 'Zdarma', detail: 'Do 48 h od poptávky' },
  { num: '02', title: 'Příprava podkladu', desc: 'Stávající obklady přebrousíme, odmaštíme a ošetříme adhezním přípravkem. Vkládáme skelnou perlinku, klíč k tomu, aby stěrka nepraskala nad původními spárami.', badge: 'Den 1', detail: 'Mokrý proces, bez prachu' },
  { num: '03', title: 'Aplikace ve vrstvách', desc: 'Nanášíme 4-6 vrstev. Každá musí dostatečně zatvrdnout. Urychlovat se nedá, na tomhle stojí výsledná pevnost a estetika povrchu.', badge: 'Den 1-3', detail: 'Epoxid, cement, pryskyřice' },
  { num: '04', title: 'Lak a předání', desc: 'Finální vrstva je polyuretanový lak, který určí míru lesku a zajistí voděodolnost. Po 24 hodinách je koupelna schůdná. Záruční list součástí.', badge: 'Den 3-4', detail: 'Záruční list součástí' },
]

const faqs = [
  {
    q: 'Proč je cena za m² a ne za celou koupelnu?',
    a: 'Koupelny se liší velikostí i složitostí. Dvě koupelny stejné podlahové plochy mohou mít úplně jiný počet m² stěn, různý počet nik, rohů nebo sprchových koutů. Cena za m² je jediný transparentní způsob, jak vám dát přesnou nabídku. Kalkulaci spočítáme zdarma po konzultaci nebo z fotek.',
  },
  {
    q: 'Co přesně zahrnuje cena 3 000-4 500 Kč/m²?',
    a: 'Vše, co je potřeba pro hotový výsledek. Příprava podkladu, skelná perlinka, všechny vrstvy materiálu, finální lak, vodotěsná impregnace, úklid po práci a záruční list. Ceny jsou bez DPH. Doplatek nastává jen u volitelných příplatků jako protiskluz nebo express termín.',
  },
  {
    q: 'Lze stěrku aplikovat i na staré, popraskané nebo nerovné obklady?',
    a: 'Ve většině případů ano. Drobné praskliny nebo nerovnosti zvládneme jako součást přípravy podkladu. Pokud jsou obklady nestabilní nebo výrazně poškozené, zjistíme to při konzultaci a sdělíme vám to vždy předem. Žádné překvapení na faktuře.',
  },
  {
    q: 'Jak probíhá platba?',
    a: 'Záloha 30 % při podpisu smlouvy, doplatek 70 % po předání hotové koupelny. Přijímáme bankovní převod i hotovost. Žádné platby před podpisem smlouvy.',
  },
  {
    q: 'Jak dlouho po realizaci musím čekat, než mohu koupelnu používat?',
    a: 'Po 24 hodinách je podlaha schůdná. Plnou odolnost vůči chemii a vlhkosti má povrch po 7 dnech. Přesný harmonogram dostanete při předání.',
  },
  {
    q: 'Jaká je údržba nového povrchu?',
    a: 'Velmi jednoduchá. Neutrální čistič, měkký hadr nebo mop. Žádné agresivní chemikálie, žádné spáry, kde by se hromadil nečistota nebo plíseň. Při předání dostanete stručný návod na péči.',
  },
  {
    q: 'Pracujete i mimo Prahu a Středočeský kraj?',
    a: 'U větších projektů (hotely, bytové komplexy, developeři) jedeme po celé ČR. Kontaktujte nás přímo a domluvíme se individuálně.',
  },
]

/* ─── COMPONENTS ────────────────────────────────────────────── */

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
  const [activeMat, setActiveMat] = useState('epoxid')
  const mat = materials.find(m => m.slug === activeMat)

  return (
    <main className={styles.page}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <FadeIn>
            <nav className={styles.breadcrumb} aria-label="Drobeckova navigace">
              <Link to="/">Domu</Link>
              <span aria-hidden="true">/</span>
              <span>Cenik</span>
            </nav>

            <div className={styles.heroTag}>
              <span className={styles.heroDot} />
              Transparentni ceny bez prekvapeni
            </div>

            <h1 className={styles.heroH1}>
              Kolik stoji nova<br />
              <em className={styles.heroGold}>koupelna bez bourání?</em>
            </h1>

            <p className={styles.heroLead}>
              Cena stěrky se pohybuje od <strong>3 000 do 4 500 Kč/m²</strong> bez DPH a zahrnuje práci i materiál.
              Vyplatí se to? Pro průměrnou koupelnu ušetříte oproti klasické rekonstrukci{' '}
              <strong>80 000-150 000 Kč</strong> a máte hotovo za 3 dny místo 6 týdnů.
            </p>

            <div className={styles.heroActions}>
              <a href={`${HOME}#contact`} className={styles.heroBtnPrimary}>
                Chci orientacni cenu
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
                { num: '0 Kč',   label: 'konzultace zdarma' },
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

      {/* ── SROVNANI ──────────────────────────────────────────── */}
      <section className={styles.whyCheaper}>
        <div className={styles.compareInner}>
          <FadeIn>
            <div className={styles.compareText}>
              <div className={styles.compareTag}>Proc je to levnejsi?</div>
              <h2 className={styles.compareH2}>
                Klasická rekonstrukce vs. <strong>stěrka bez bourání</strong>
              </h2>
              <p className={styles.compareLead}>
                Tradiční rekonstrukce koupelny stojí 80 000-200 000 Kč a trvá 3-6 týdnů. Stěrka jde přímo
                na stávající obklady. Žádné bourání, žádný prach, žádný odpad. Výsledek za zlomek ceny.
              </p>
            </div>

            <div className={styles.compareTable}>
              <div className={`${styles.compareRow} ${styles.compareHead}`}>
                <span className={styles.compareLabel}></span>
                <span className={styles.compareClassicHead}>Klasická rekonstrukce</span>
                <span className={styles.compareUsHead}>BezSpár.cz</span>
              </div>
              {compareRows.map(row => (
                <div key={row.label} className={styles.compareRow}>
                  <span className={styles.compareLabel}>{row.label}</span>
                  <span className={styles.compareClassic}>{row.classic}</span>
                  <span className={styles.compareUs}>{row.us}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CENOVE TIERS ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Cenové sazby"
              title="Tři úrovně provedení. <em>Jedna cena za m².</em>"
              lead="Cena závisí na materiálu a složitosti provedení. Všechny sazby jsou bez DPH a zahrnují práci i materiál."
            />
          </FadeIn>

          <div className={styles.tiers}>
            {tiers.map((tier, i) => (
              <FadeIn key={tier.id} delay={i * 0.08}>
                <div className={`${styles.tierCard} ${tier.highlight ? styles.tierHighlight : ''}`}>
                  {tier.badgeText && (
                    <div className={`${styles.tierBadge} ${tier.highlight ? styles.tierBadgeGold : styles.tierBadgeDim}`}>
                      {tier.badgeText}
                    </div>
                  )}

                  <div className={styles.tierTop}>
                    <div className={styles.tierName}>{tier.name}</div>
                    <div className={styles.tierTagline}>{tier.tagline}</div>
                    <div className={styles.tierRateRow}>
                      <span className={styles.tierNum}>{tier.rateLabel}</span>
                      <span className={styles.tierUnit}>Kč/m² bez DPH</span>
                    </div>
                    <div className={styles.tierExample}>
                      Průměrná koupelna {tier.example.m2} m²:
                      <strong> {tier.example.price} Kč bez DPH</strong>
                    </div>
                    <div className={styles.tierSuitable}>
                      <strong>Vhodné pro:</strong> {tier.suitable}
                    </div>
                  </div>

                  <ul className={styles.tierFeatures}>
                    {tier.features.map(f => (
                      <li key={f.text} className={`${styles.tierFeat} ${!f.ok ? styles.tierFeatNo : ''}`}>
                        <span className={styles.tierFeatIcon}>{f.ok ? <CheckIcon /> : <CrossIcon />}</span>
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${HOME}#contact`}
                    className={`${styles.tierCta} ${tier.highlight ? styles.tierCtaGold : ''}`}
                  >
                    {tier.cta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className={styles.tiersNote}>
              Ceny jsou orientační pro průměrnou koupelnu (podlaha 6 m² + stěny 16 m² = 22 m² celkem).
              Přesnou kalkulaci dostanete zdarma po konzultaci nebo z fotek.{' '}
              <a href={`${HOME}#contact`}>Napište nám</a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MATERIALY ─────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Materiály"
              title="Tři charaktery. <em>Jeden výsledek.</em>"
              lead="Každý materiál má svůj charakter. Vybereme společně ten, který sedí vašemu prostoru a rozpočtu."
              light
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.matTabs} role="tablist" aria-label="Vyber materialu">
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
                  {m.slug === 'epoxid' && <span className={styles.matTabPill}>Nejoblíbenější</span>}
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
                    <p className={styles.matPanelDesc}>{mat.desc}</p>
                    <p className={styles.matPanelSuitable}><strong>Vhodné pro:</strong> {mat.ideal}</p>
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
                      <div className={styles.matPriceLabel}>Sazba</div>
                      <div className={styles.matPriceVal}>
                        <span className={styles.matPriceNum}>{mat.rate}</span>
                        <span className={styles.matPriceUnit}>Kč/m² bez DPH</span>
                      </div>
                      <div className={styles.matPriceDivider} />
                      <div className={styles.matPriceNote}>
                        Zahrnuje práci i materiál.<br />
                        Průměrná koupelna 22 m²:
                        <strong> {(parseInt(mat.rate.replace(' ', '')) * 22).toLocaleString('cs-CZ')} Kč bez DPH</strong>
                      </div>
                      <a href={`${HOME}#contact`} className={styles.matPriceCta} style={{ background: mat.accentColor }}>
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

      {/* ── CO JE V CENE ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Co je v cene"
              title="Vždy zahrnuto. <em>Bez skrytých nákladů.</em>"
              lead="Žádné vícepráce, žádné faktury navíc. Cenu dostanete po konzultaci a ta se nemění."
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
                  <h3 className={styles.includedCardTitle}>Vzdy v cene</h3>
                </div>
                <ul className={styles.includedList}>
                  {included.map(it => (
                    <li key={it.title} className={styles.includedItem}>
                      <span className={styles.includedIcon}><it.Icon /></span>
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
                  <h3 className={styles.includedCardTitle}>Volitelné príplatky</h3>
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
              title="Od první zprávy <em>k hotové koupelně.</em>"
              lead="Čtyři kroky. Přesně víte, co se bude dít, kdy to bude hotové a kolik to bude stát, ještě předtím než se do toho pustíme."
            />
          </FadeIn>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className={styles.processCard}>
                  <div className={styles.processTopRow}>
                    <div className={styles.processNum}>{step.num}</div>
                    <div className={styles.processBadges}>
                      <span className={styles.processBadge}>{step.badge}</span>
                      <span className={styles.processDetail}>{step.detail}</span>
                    </div>
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIKLAD KALKULACE ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Priklad kalkulace"
              title="Kolik vyjde <em>průměrná koupelna?</em>"
              lead="Průměrná koupelna: podlaha 6 m², stěny 16 m², celkem 22 m². Cementová stěrka, standardní provedení."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.calc}>
              <div className={styles.calcRows}>
                {[
                  { item: 'Stěny 16 m² × 3 000 Kč/m²',      val: '48 000 Kč' },
                  { item: 'Podlaha 6 m² × 3 000 Kč/m²',      val: '18 000 Kč' },
                  { item: 'Příprava podkladu a impregnace',   val: 'zahrnuto' },
                  { item: 'Doprava Praha',                     val: 'zdarma' },
                  { item: 'Záruční list na 5 let',             val: 'zahrnuto' },
                ].map(row => (
                  <div key={row.item} className={styles.calcRow}>
                    <span className={styles.calcItem}>{row.item}</span>
                    <span className={styles.calcVal}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div className={styles.calcTotal}>
                <span className={styles.calcTotalLabel}>Celkem bez DPH</span>
                <span className={styles.calcTotalNum}>66 000 Kč</span>
              </div>
              <p className={styles.calcNote}>
                Orientacni kalkulace. Konecna cena zavisi na stavu povrchu a zvolene barvě.
                Pro přesnější kalkulaci zkuste{' '}
                <a href={`${HOME}#calculator`}>interaktivní kalkulátor</a> nebo{' '}
                <a href={`${HOME}#contact`}>napište nám</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Caste dotazy"
              title="Otázky o ceníku <em>a platbách</em>"
              lead="Nejcastejsi dotazy zakazniku k cenam, materialum a prubahu prace."
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
                Konzultace zdarma, odpovídáme do 24 h
              </div>
              <h2 className={styles.ctaH2}>
                Chcete přesnou cenu<br />pro vaši koupelnu?
              </h2>
              <p className={styles.ctaLead}>
                Pošlete nám pár fotek přes WhatsApp nebo e-mail. Do 24 hodin dostanete
                orientacni cenu, volne terminy a doporuceni materialu. Zcela zdarma a bez zavazku.
              </p>
            </div>
            <div className={styles.ctaRight}>
              <a href={`${HOME}#contact`} className={styles.ctaBtn}>
                Nezavazna poptavka
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
