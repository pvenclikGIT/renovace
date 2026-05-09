import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './BrandMaterials.module.css'

const BASE = '/renovace/images/brands/'

const CATEGORIES = [
  {
    id: 'giants',
    label: 'Průmysloví giganti',
    desc: 'Firmy s vlastními výzkumnými laboratořemi, které diktují celosvětové standardy chemie pro podlahy.',
    accent: '#C9963C',
    brands: [
      {
        id: 'basf',
        name: 'BASF / MasterBuilders',
        country: 'Německo', flag: '🇩🇪',
        logo: `${BASE}basf.svg`,
        system: 'MasterTop – epoxidové & PU podlahy',
        desc: 'Největší chemická firma světa. Systém MasterTop pokrývá celé spektrum – od jednovrstvých epoxidových nátěrů po prémiové polyuretanové stěrky pro koupelny a wellness.',
      },
      {
        id: 'sto',
        name: 'STO',
        country: 'Německo', flag: '🇩🇪',
        logo: `${BASE}sto.svg`,
        system: 'StoLook – microcement & dekorativní povrchy',
        desc: 'Německý specialista na dekorativní povrchy. StoLook microcement a stěrkové systémy jsou oblíbené u architektů pro jejich minerální, čistě betonový vzhled na stěnách i podlahách.',
      },
      {
        id: 'sika',
        name: 'SIKA',
        country: 'Švýcarsko', flag: '🇨🇭',
        logo: `${BASE}sika.png`,
        system: 'Sikafloor – vodotěsné podlahové systémy',
        desc: 'Sikafloor dominuje tam, kde je prioritou absolutní vodotěsnost a mechanická odolnost. Standardní systém v luxusních wellness centrech a hotelových lázních.',
      },
      {
        id: 'ardex',
        name: 'ARDEX',
        country: 'Německo', flag: '🇩🇪',
        logo: `${BASE}ardex.png`,
        system: 'Pandomo Floor & Loft',
        desc: 'Rolls-Royce mezi stěrkami. Pandomo Floor je považován za nejodolnější a vizuálně nejčistší systém na trhu – první volba pro architektonicky výrazné koupelny.',
      },
      {
        id: 'mapei',
        name: 'MAPEI',
        country: 'Itálie', flag: '🇮🇹',
        logo: `${BASE}mapei.png`,
        system: 'Ultratop Loft – stěrky & hydroizolace',
        desc: 'Španělská špička v poměru odolnosti a estetiky. Nejpropracovanější systém hydroizolací pod stěrku zajišťuje, že koupelna nikdy nepropustí ani kapku vlhkosti do konstrukce.',
      },
      {
        id: 'remmers',
        name: 'REMMERS',
        country: 'Německo', flag: '🇩🇪',
        logo: `${BASE}remmers.svg`,
        system: 'PU systémy – pružné podlahové stěrky',
        desc: 'Vysoce odolné polyuretanové systémy s výjimečnou pružností. Klíčová volba pro koupelny s podlahovým topením – stěrka se hýbe s dilataèními pohyby a nepraská.',
      },
    ],
  },
  {
    id: 'design',
    label: 'Designové a specializované značky',
    desc: 'Firmy zaměřené na estetiku, zakázkové vzory a specifické aplikace v prémiových interiérech.',
    accent: '#4A7B8A',
    brands: [
      {
        id: 'arturo',
        name: 'ARTURO',
        country: 'Nizozemsko', flag: '🇳🇱',
        logo: `${BASE}arturo.svg`,
        system: 'Polyuretanové designové podlahy',
        desc: 'Součást skupiny Uzin Utz. Polyuretanové podlahy ARTURO jsou měkké, teplé na dotek a designově čisté. Skvělá volba pro koupelnu, kde chodíte naboso.',
      },
      {
        id: 'panbex',
        name: 'PANBEX',
        country: 'Litva / Evropa', flag: '🇱🇹',
        logo: `${BASE}panbex.png`,
        system: 'Dvousložkové epoxidové systémy',
        desc: 'Litevský výrobce s celoevropskou distribucí. Specializují se na dvousložkové epoxidové systémy s excelentní adhezí i na starý, problematický podklad.',
      },
      {
        id: 'resiplan',
        name: 'RESIPLAN',
        country: 'Švýcarsko', flag: '🇨🇭',
        logo: `${BASE}resiplan.png`,
        system: 'Pryskyřičné stěrky pro vlhká prostředí',
        desc: 'Švýcarská preciznost v epoxidových pryskyřicích. Systémy Resiplan jsou navrženy přímo pro vlhké prostory – odolávají chemii, trvalé vlhkosti i teplotním změnám.',
      },
      {
        id: 'fotiadis',
        name: 'FOTIADIS',
        country: 'Řecko', flag: '🇬🇷',
        logo: `${BASE}fotiadis.png`,
        system: 'Dekorativní beton & microtopping',
        desc: 'Řecký specialista na dekorativní betonové povrchy a microtopping. Systémy přinášejí středomořský design s moderní technologií – oblíbené v hotelech na Kypru i v Praze.',
      },
      {
        id: 'duracon',
        name: 'DURACON',
        country: 'Německo', flag: '🇩🇪',
        logo: `${BASE}duracon.png`,
        system: 'Průmyslové & designové podlahové systémy',
        desc: 'Německá spolehlivost v průmyslových i designových aplikacích. Duracon systémy jsou extrémně odolné vůči chemii a dostupné ve stovkách barevných odstínů RAL.',
      },
    ],
  },
  {
    id: 'raw',
    label: 'Surovinové značky',
    desc: 'Výrobci základních chemických surovin, ze kterých jsou sestaveny hotové stěrkové systémy.',
    accent: '#5A5A5A',
    brands: [
      {
        id: 'huntsman',
        name: 'HUNTSMAN / Araldite',
        country: 'USA', flag: '🇺🇸',
        logo: `${BASE}huntsman.svg`,
        system: 'Araldite – epoxidové pryskyřice',
        desc: 'Araldite je synonymum pro epoxidové pryskyřice. Huntsman dodává základní suroviny, ze kterých jsou vyráběny nejkvalitnější stěrkové systémy světa.',
      },
      {
        id: 'westsystem',
        name: 'WEST SYSTEM',
        country: 'USA', flag: '🇺🇸',
        logo: `${BASE}westsystem.png`,
        system: 'Epoxy pro extrémní podmínky',
        desc: 'Původně námořní epoxidové systémy pro extrémní vlhkost a mechanické namáhání. Dnes standard v prémiových podlahových aplikacích, kde se nesmí nic pokazit.',
      },
      {
        id: 'spyndel',
        name: 'SPYNDEL',
        country: 'Evropa', flag: '🇪🇺',
        logo: `${BASE}spyndel.png`,
        system: 'Pojiva & suroviny pro stěrkové systémy',
        desc: 'Evropský výrobce specializovaných pojiv a modifikátorů pro výrobu stěrkových systémů. Tichý hráč, jehož chemie je základem mnoha prémiových značkových produktů.',
      },
    ],
  },
]

function BrandLogo({ logo, name }) {
  const [err, setErr] = useState(false)
  if (err) return <div className={styles.logoFallback}>{name}</div>
  return (
    <img
      src={logo} alt={`${name} logo`}
      className={styles.logoImg}
      onError={() => setErr(true)}
      loading="lazy"
    />
  )
}

function BrandCard({ brand, delay }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setOpen(o => !o)}
    >
      <div className={styles.cardTop}>
        <div className={styles.logoWrap}>
          <BrandLogo logo={brand.logo} name={brand.name} />
        </div>
        <div className={styles.cardMeta}>
          <div className={styles.brandName}>{brand.name}</div>
          <div className={styles.brandCountry}><span>{brand.flag}</span>{brand.country}</div>
          <div className={styles.brandSystem}>{brand.system}</div>
        </div>
        <div className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className={styles.cardDesc}>{brand.desc}</p>
      </motion.div>
    </motion.div>
  )
}

export default function BrandMaterials() {
  return (
    <section id="brands" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot} />Naši dodavatelé</div>
          <h2 className={styles.title}>Materiály, na která<br /><em>přísaháme.</em></h2>
          <p className={styles.lead}>
            Pracujeme výhradně se systémy světových lídrů. Žádné no-name —
            každý materiál má záruční list, atest a laboratorně ověřenou odolnost.
          </p>
        </div>
      </FadeIn>

      <div className={styles.categories}>
        {CATEGORIES.map((cat, ci) => (
          <FadeIn key={cat.id} delay={ci * 0.07}>
            <div className={styles.category}>
              <div className={styles.catHeader}>
                <div className={styles.catAccent} style={{ background: cat.accent }} />
                <div>
                  <div className={styles.catLabel}>{cat.label}</div>
                  <div className={styles.catDesc}>{cat.desc}</div>
                </div>
              </div>
              <div className={styles.grid}>
                {cat.brands.map((brand, bi) => (
                  <BrandCard key={brand.id} brand={brand} delay={ci * 0.05 + bi * 0.06} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className={styles.footer}>
          <div className={styles.footerIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 2l7 2.5v5C17 14 13.5 17.5 10 19 6.5 17.5 3 14 3 9.5v-5L10 2z"/>
              <path d="M7 10l2 2 4-4" strokeWidth="1.6"/>
            </svg>
          </div>
          <p>Ke každé zakázce vydáváme <strong>záruční list s atestem</strong> použitého materiálu. Víte přesně, co máte pod nohama.</p>
        </div>
      </FadeIn>
    </section>
  )
}
