import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import Process from '../sections/Process'
import styles from './Cenik.module.css'

const HOME = '/renovace/'

/* ─── DATA ─────────────────────────────────────────────────── */

const tiers = [
  {
    id: 'cementova',
    name: 'Cementová stěrka',
    tagline: 'Minerální matný povrch s betonovým efektem',
    rate: 3000,
    rateLabel: '3 000',
    badgeText: null,
    highlight: false,
    matName: 'Cementová stěrka',
    features: [
      { ok: true, text: 'Aplikace na stěny a méně exponované plochy' },
      { ok: true, text: 'Matný minerální povrch, skandinávský klid' },
      { ok: true, text: 'Výběr z 32 odstínů kolekce' },
      { ok: true, text: 'Příprava podkladu, broušení, skelná perlinka' },
      { ok: true, text: 'Vodotěsná impregnace a finální lak' },
      { ok: true, text: 'Fyzické vzorky před podpisem' },
      { ok: true, text: 'Doprava po Praze zdarma, úklid po realizaci' },
      { ok: true, text: 'Záruční list na 5 let' },
    ],
    example: { m2: 22, price: '66 000' },
    suitable: 'Stěny a méně exponované plochy. Na podlahy do mokrého provozu volíme epoxid nebo pryskyřici.',
    cta: 'Poptat cementovou stěrku',
  },
  {
    id: 'epoxidova',
    name: 'Epoxidová stěrka',
    tagline: 'Tvrdá jako kámen, na stěny i na podlahy',
    rate: 3750,
    rateLabel: '3 750',
    badgeText: 'Nejoblíbenější',
    highlight: true,
    matName: 'Epoxidová stěrka',
    features: [
      { ok: true, text: 'Aplikace na stěny i podlahy' },
      { ok: true, text: 'Sprchové kouty, vany, mokré a chemicky zatížené provozy' },
      { ok: true, text: 'Lesklý nebo saténový povrch' },
      { ok: true, text: 'Příprava podkladu, broušení, skelná perlinka' },
      { ok: true, text: 'Plná vodotěsná impregnace a polyuretanový lak' },
      { ok: true, text: 'Protiskluzová certifikace R10 na podlaze' },
      { ok: true, text: 'Doprava po Praze zdarma, úklid po realizaci' },
      { ok: true, text: 'Záruční list na 10 let' },
    ],
    example: { m2: 22, price: '82 500' },
    suitable: 'Stěny i podlahy, sprchové kouty, vany, mokré a chemicky zatížené provozy.',
    cta: 'Poptat epoxidovou stěrku',
  },
  {
    id: 'pryskyricna',
    name: 'Pryskyřičná stěrka',
    tagline: 'Pružná, designová, snáší podlahové topení',
    rate: 4500,
    rateLabel: '4 500',
    badgeText: 'Designová volba',
    highlight: false,
    matName: 'Pryskyřičná stěrka',
    features: [
      { ok: true, text: 'Aplikace na stěny i podlahy' },
      { ok: true, text: 'Podlahové topení, dilatace, teplotní změny' },
      { ok: true, text: 'Individuální barvy, imitace mramoru, leštěný beton' },
      { ok: true, text: 'Příprava podkladu, broušení, skelná perlinka' },
      { ok: true, text: 'Prémiová nano impregnace a polyuretanový lak' },
      { ok: true, text: 'Protiskluzová certifikace R10/R11 na podlaze' },
      { ok: true, text: 'Fyzické vzorky přivezeme osobně ke konzultaci' },
      { ok: true, text: 'Záruční list na 10 let' },
    ],
    example: { m2: 22, price: '99 000' },
    suitable: 'Stěny i podlahy, podlahové topení, designové vzory a leštěné povrchy.',
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
    desc: 'Tvrdá jako kámen, hladká jako leštěný mramor. Epoxidová stěrka je nejodolnější volba s nulovou nasákavostí. Sprchové kouty, vany i podlahy vystavené každodenní vlhkosti ji jen tak nezlomí.',
    pros: ['Extrémní pevnost a odolnost', 'Lesklý nebo saténový povrch', 'Nulová nasákavost', 'Bezspárový monolit'],
    ideal: 'Stěny i podlahy, sprchové kouty, vany, mokré provozy. Moderní a průmyslový styl.',
  },
  {
    slug: 'cement',
    name: 'Cementová stěrka',
    accentColor: '#C9963C',
    tags: ['Stěny', 'Podlaha', 'Nejoblíbenější'],
    rate: '3 000',
    desc: 'Minerální textura, skandinávský klid. Přirozený matný povrch připomínající pohledový beton. Nejoblíbenější volba designérů interiérů v celé Evropě pro svůj nadčasový charakter.',
    pros: ['Přírodní matný povrch', 'Betonový efekt bez betonu', 'Teplé přírodní tóny', 'Výborná prodyšnost'],
    ideal: 'Stěny, příčky, méně exponované plochy. Na podlahy do mokrého provozu nedoporučujeme. Skandinávský a minimalistický styl.',
  },
  {
    slug: 'pryskyrice',
    name: 'Pryskyřičná stěrka',
    accentColor: '#3D3830',
    tags: ['Stěny', 'Podlaha', 'Prémiová'],
    rate: '4 500',
    desc: 'Nejplastičtější z trojice. Tvarujte ji, barvěte, kombinujte. Pryskyřičná stěrka umí imitovat mramor nebo leštěný beton v barvách a vzorech, které standardní materiály nikdy nedají.',
    pros: ['Neomezené barvy a vzory', 'Imitace mramoru nebo leštěného betonu', 'Prémiový designový výsledek', 'Exkluzivní povrch bez spár'],
    ideal: 'Stěny i podlahy, podlahové topení, designové vzory, leštěné povrchy a wellness provozy.',
  },
]

const compareRows = [
  { label: 'Celková cena (průměrná koupelna)', classic: '80 000 až 200 000 Kč', us: 'od 66 000 Kč bez DPH' },
  { label: 'Délka realizace',                  classic: '1 až 2 měsíce',        us: 'běžně do 14 dnů'      },
  { label: 'Bourání a hluk',                   classic: 'Ano, intenzivní',      us: 'Žádné'                },
  { label: 'Prach v prostoru',                 classic: 'Centimetry všude',     us: 'Žádný'                },
  { label: 'Stavební odpad',                   classic: 'Kontejner sutě',       us: 'Žádný'                },
  { label: 'Bydlení v průběhu',                classic: 'Většinou nelze',       us: 'Lze bez problémů'     },
  { label: 'Záruka na těsnost',                classic: '2 až 5 let',           us: 'Až 10 let'            },
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
  { Icon: IconChat,        title: 'Konzultace zdarma',    note: 'Z fotek nebo na místě, bez závazku' },
  { Icon: IconLayers,      title: 'Příprava podkladu',    note: 'Broušení, odmašťování, penetrace, skelná perlinka' },
  { Icon: IconDrop,        title: 'Vodotěsná impregnace', note: 'Certifikovaný systém, součást každé zakázky' },
  { Icon: IconTruck,       title: 'Doprava Praha zdarma', note: 'Středočeský kraj od 590 Kč' },
  { Icon: IconSparkle,     title: 'Úklid po realizaci',   note: 'Odcházíme bez jediného zrnka prachu' },
  { Icon: IconCertificate, title: 'Záruční list písemně', note: '5 nebo 10 let na těsnost ke každé zakázce' },
]

const extras = [
  { label: 'Protiskluzová certifikace R10',    price: '+150 Kč/m²',   note: 'Doporučeno pro podlahy, vhodné pro rodiny s dětmi' },
  { label: 'Demontáž a montáž příslušenství',  price: 'od 500 Kč',    note: 'Háčky, police, zrcadlo, sprchová tyč' },
  { label: 'Přednostní termín',                price: '+20 %',        note: 'Dle aktuální dostupnosti' },
  { label: 'Projekty mimo Prahu',              price: 'individuálně', note: 'Větší projekty po celé ČR' },
  { label: 'Hotely, developeři, komerční',     price: 'individuálně', note: 'Množstevní sleva od 3 koupelen' },
]

const faqs = [
  {
    q: 'Proč je cena za m² a ne za celou koupelnu?',
    a: 'Koupelny se liší velikostí i složitostí. Dvě koupelny stejné podlahové plochy mohou mít zcela jiný počet m² stěn, různý počet nik, rohů nebo sprchových koutů. Cena za m² je jediný transparentní způsob, jak vám dát přesnou nabídku. Kalkulaci spočítáme zdarma po konzultaci nebo z fotek.',
  },
  {
    q: 'Co přesně zahrnuje cena 3 000 až 4 500 Kč/m²?',
    a: 'Vše, co je potřeba pro hotový výsledek: příprava podkladu, skelná perlinka, všechny vrstvy materiálu, finální lak, vodotěsná impregnace, úklid po práci a záruční list. Ceny jsou bez DPH. Doplatek nastává jen u volitelných příplatků jako protiskluz nebo přednostní termín.',
  },
  {
    q: 'Která stěrka je vhodná pro mou koupelnu?',
    a: 'Cementovou stěrku používáme na stěny a méně exponované plochy. Na podlahy do mokrého provozu (sprchový kout, koupelnová podlaha) volíme epoxidovou nebo pryskyřičnou. Epoxid je tvrdý a levnější, pryskyřice je pružná a vhodná na podlahové topení nebo designové vzory. Při konzultaci vždy navrhneme materiál podle konkrétní plochy a způsobu užívání. Cena se liší podle materiálu, ne podle typu klienta. Stejnou kvalitu dáváme do bytu, hotelu i kanceláří.',
  },
  {
    q: 'Lze stěrku aplikovat i na staré, popraskané nebo nerovné obklady?',
    a: 'Ve většině případů ano. Drobné praskliny nebo nerovnosti zvládneme jako součást přípravy podkladu. Pokud jsou obklady nestabilní nebo výrazně poškozené, zjistíme to při konzultaci a sdělíme vám to vždy předem. Žádné překvapení na faktuře.',
  },
  {
    q: 'Jak probíhá platba?',
    a: 'Záloha 30 % při podpisu smlouvy, doplatek 70 % po předání hotové koupelny. Přijímáme bankovní převod i hotovost. Žádné platby předem bez podpisu smlouvy.',
  },
  {
    q: 'Jak dlouho po realizaci mohu koupelnu používat?',
    a: 'Po 24 hodinách je podlaha schůdná. Plnou odolnost vůči chemii a vlhkosti získá povrch po 7 dnech. Přesný harmonogram dostanete při předání.',
  },
  {
    q: 'Jaká je údržba nového povrchu?',
    a: 'Velmi jednoduchá. Neutrální čistič a měkký hadr nebo mop. Žádné agresivní chemikálie, žádné spáry, kde by se hromadila nečistota nebo plíseň. Při předání dostanete stručný návod na péči.',
  },
  {
    q: 'Pracujete i mimo Prahu a Středočeský kraj?',
    a: 'U větších projektů, jako jsou hotely, bytové komplexy nebo developerské projekty, jedeme po celé ČR. Kontaktujte nás přímo a domluvíme se individuálně.',
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
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqToggle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className={styles.faqA}>{a}</p>
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

        {/* levý sloupec — text */}
        <div className={styles.heroLeft}>
          <motion.div
            className={styles.heroContent}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
            initial="hidden"
            animate="show"
          >
            <motion.nav
              className={styles.breadcrumb}
              aria-label="Drobečková navigace"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <Link to="/">Domů</Link>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span aria-current="page">Ceník</span>
            </motion.nav>

            <motion.div
              className={styles.heroTag}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <span className={styles.heroDot} />
              Transparentní ceny, bez překvapení
            </motion.div>

            <motion.h1
              className={styles.heroH1}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              Kolik stojí nová<br />
              <em className={styles.heroGold}>koupelna bez bourání?</em>
            </motion.h1>

            <motion.p
              className={styles.heroLead}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            >
              Stěrka vyjde od <strong>3 000 do 4 500 Kč/m²</strong> bez DPH a zahrnuje práci i materiál.
              Průměrná koupelna kolem 66 000 až 99 000 Kč. Klasická rekonstrukce? Klidně 200 000 Kč a 1 až 2 měsíce čekání.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <a href={`${HOME}#contact`} className={styles.heroBtnPrimary}>
                Chci nezávaznou kalkulaci
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
            </motion.div>

            <motion.div
              className={styles.heroStats}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } } }}
            >
              {[
                { num: '180+',   label: 'dokončených koupelen' },
                { num: '~14 dní', label: 'běžná realizace' },
                { num: '10 let', label: 'záruka na těsnost' },
              ].map((s, i) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                  {i < 2 && <span className={styles.statDiv} />}
                </div>
              ))}
            </motion.div>

            <motion.div
              className={styles.heroTrust}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
            >
              <span className={styles.heroTrustDot} />
              Ozveme se do 24 hodin. Termín domluvíme během pár dnů.
            </motion.div>
          </motion.div>
        </div>

        {/* pravý sloupec — fotka */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/renovace/images/real-05.jpg"
            alt="Dokončená koupelna s epoxidovou stěrkou"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroPriceBadge}>
            <span className={styles.heroBadgeLabel}>Průměrná realizace</span>
            <span className={styles.heroBadgeNum}>od 66 000 Kč</span>
            <span className={styles.heroBadgeSub}>bez DPH · práce i materiál</span>
          </div>
        </motion.div>

      </section>

      {/* ── SROVNÁNÍ ──────────────────────────────────────────── */}
      <section className={styles.whyCheaper}>
        <div className={styles.compareInner}>
          <FadeIn>
            <div className={styles.compareText}>
              <div className={styles.compareTag}>Proč je to levnější?</div>
              <h2 className={styles.compareH2}>
                Klasická rekonstrukce vs. <strong>stěrka bez bourání</strong>
              </h2>
              <p className={styles.compareLead}>
                Klasická rekonstrukce stojí 80 000 až 200 000 Kč a paralyzuje provoz na 1 až 2 měsíce.
                Stěrka jde přímo přes stávající obklady. Žádné bourání, žádný prach, žádný kontejner sutě.
                Výsledek za zlomek ceny, za zlomek času.
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

      {/* ── CENOVÉ SAZBY ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Cenové sazby"
              title="Tři materiály. <em>Jedna kvalita pro všechny.</em>"
              lead="Cena se liší podle zvoleného materiálu, ne podle typu klienta. Stejnou kvalitu provedení dáváme do bytu, do hotelu, do kanceláře i do wellness. Všechny sazby jsou bez DPH a zahrnují práci i materiál."
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

      {/* ── MATERIÁLY ─────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Materiály"
              title="Tři charaktery. <em>Jeden výsledek.</em>"
              lead="Každý materiál má svůj vlastní charakter. Vybereme společně ten, který nejlépe sedí vašemu prostoru a rozpočtu."
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

      {/* ── CO JE V CENĚ ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Co je v ceně"
              title="Vždy zahrnuto. <em>Bez skrytých nákladů.</em>"
              lead="Žádné vícepráce, žádné faktury navíc. Cenu dostanete před zahájením práce, závazně. Nemění se."
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

      {/* ── JAK TO FUNGUJE ────────────────────────────────────── */}
      <Process />

      {/* ── PŘÍKLAD KALKULACE ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Příklad kalkulace"
              title="Kolik vyjde <em>průměrná koupelna?</em>"
              lead="Průměrná koupelna: podlaha 6 m², stěny 16 m², celkem 22 m². Kombinace cementové stěrky na stěnách a epoxidové na podlaze."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.calc}>
              <div className={styles.calcRows}>
                {[
                  { item: 'Stěny 16 m² × 3 000 Kč/m² (cementová)',  val: '48 000 Kč' },
                  { item: 'Podlaha 6 m² × 3 750 Kč/m² (epoxidová)', val: '22 500 Kč' },
                  { item: 'Příprava podkladu a impregnace',         val: 'zahrnuto'  },
                  { item: 'Doprava Praha',                          val: 'zdarma'    },
                  { item: 'Záruční list',                           val: 'zahrnuto'  },
                ].map(row => (
                  <div key={row.item} className={styles.calcRow}>
                    <span className={styles.calcItem}>{row.item}</span>
                    <span className={styles.calcVal}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div className={styles.calcTotal}>
                <span className={styles.calcTotalLabel}>Celkem bez DPH</span>
                <span className={styles.calcTotalNum}>70 500 Kč</span>
              </div>
              <p className={styles.calcNote}>
                Toto je orientační kalkulace. Konečná cena závisí na stavu povrchu a zvoleném materiálu.
                Přesnější odhad dostanete přes{' '}
                <a href={`${HOME}#calculator`}>interaktivní kalkulátor</a> nebo{' '}
                <a href={`${HOME}#contact`}>napište nám</a> a spočítáme to zdarma.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ČASTÉ DOTAZY ──────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionHeader
              tag="Časté dotazy"
              title="Otázky o ceníku <em>a platbách</em>"
              lead="Nejčastější dotazy zákazníků k cenám, materiálům a průběhu práce. Nezodpovězené otázky? Napište nebo zavolejte."
            />
          </FadeIn>
          <div className={styles.faqColumns}>
            <FadeIn delay={0.05}>
              <div className={styles.faqCol}>
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map(item => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className={styles.faqCol}>
                {faqs.slice(Math.ceil(faqs.length / 2)).map(item => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </main>
  )
}
