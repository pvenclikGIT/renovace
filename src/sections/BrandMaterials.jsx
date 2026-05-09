import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './BrandMaterials.module.css'

const BASE = '/renovace/images/brands/'

const CATEGORIES = [
  {
    id: 'world',
    label: 'Světoví technologičtí lídři',
    desc: 'Vlastní laboratoře, globální standardy. Tyto systémy určují, co pryskyřice vydrží.',
    accent: '#C9963C',
    brands: [
      {
        id: 'ardex',
        name: 'ARDEX',
        country: 'Německo',
        flag: '🇩🇪',
        logo: `${BASE}ardex.png`,
        system: 'Pandomo Floor & Loft',
        desc: 'Rolls-Royce mezi stěrkami. Systém Pandomo Floor je neuvěřitelně pevný a vizuálně čistý – nejčastěji ho vidíte v architektonicky výrazných prostorech.',
      },
      {
        id: 'mapei',
        name: 'MAPEI',
        country: 'Itálie',
        flag: '🇮🇹',
        logo: `${BASE}mapei.png`,
        system: 'Ultratop Loft',
        desc: 'Špička v poměru odolnosti a estetiky. Mají nejpropracovanější systém hydroizolací pod stěrku – základ bezchybné koupelny.',
      },
      {
        id: 'sika',
        name: 'SIKA',
        country: 'Švýcarsko',
        flag: '🇨🇭',
        logo: `${BASE}sika.png`,
        system: 'Sikafloor',
        desc: 'Sikafloor dominuje tam, kde je prioritou absolutní vodotěsnost a mechanická odolnost. Standardní volba luxusních wellness center.',
      },
      {
        id: 'remmers',
        name: 'REMMERS',
        country: 'Německo',
        flag: '🇩🇪',
        logo: `${BASE}remmers.svg`,
        system: 'PU Epoxy systémy',
        desc: 'Vysoce odolné polyuretanové systémy s výjimečnou pružností. Klíčové, pokud máte podlahové topení – stěrka se hýbe s podkladem a nepraská.',
      },
    ],
  },
  {
    id: 'design',
    label: 'Designové a prémiové značky',
    desc: 'Platí se za unikátní vzhled, ekologii a pocit na dotek. Estetika na prvním místě.',
    accent: '#7B4F00',
    brands: [
      {
        id: 'arturo',
        name: 'ARTURO',
        country: 'Nizozemsko',
        flag: '🇳🇱',
        logo: `${BASE}arturo.svg`,
        system: 'Polyurethane Floor',
        desc: 'Specialista na polyuretanové podlahy. Stěrky jsou měkké, teplé na dotek a designově velmi čisté. Skvělá volba pro koupelnu, kde chodíte naboso.',
      },
      {
        id: 'senso',
        name: 'SENSO',
        country: 'Nizozemsko',
        flag: '🇳🇱',
        logo: `${BASE}senso.svg`,
        system: 'BioPolymer',
        desc: 'Lídr v oblasti biopolymerů. Pryskyřice vyráběné z přírodních olejů – ekologické, s krásnými mattnými povrchy, které vypadají jako přírodní materiál.',
      },
      {
        id: 'novacolor',
        name: 'NOVACOLOR',
        country: 'Itálie',
        flag: '🇮🇹',
        logo: `${BASE}novacolor.png`,
        system: 'Wall2Floor',
        desc: 'Zaměřená čistě na vizuální stránku. Systém Wall2Floor vytváří z koupelny jeden monolitický blok – podlaha i stěny z jednoho materiálu bez přerušení.',
      },
    ],
  },
  {
    id: 'czech',
    label: 'Česká špička – světová úroveň',
    desc: 'Vznikly v Česku, kvalitou a inovacemi směle konkurují světovým hráčům.',
    accent: '#1a6b3c',
    brands: [
      {
        id: 'nemec',
        name: 'NĚMEC',
        country: 'Česko',
        flag: '🇨🇿',
        logo: `${BASE}nemec.svg`,
        system: 'Betonepox',
        desc: 'Patentovaný Betonepox je pravděpodobně nejznámější česká stěrka. Epoxid, který je nenasákavý sám o sobě – v koupelně nepotřebuje lakování, které se časem otírá.',
      },
      {
        id: 'gravity',
        name: 'GRAVITY',
        country: 'Česko',
        flag: '🇨🇿',
        logo: `${BASE}gravity.png`,
        system: 'Lité designové podlahy',
        desc: 'Specialisté na lité designové podlahy s vysokým důrazem na detail a zakázkové vzory. Každá realizace je originál – barva, textura, vzor přesně dle přání.',
      },
    ],
  },
]

function BrandLogo({ logo, name }) {
  const [err, setErr] = useState(false)
  if (err) {
    return <div className={styles.logoFallback}>{name}</div>
  }
  return (
    <img
      src={logo}
      alt={`${name} logo`}
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setOpen(o => !o)}
    >
      <div className={styles.cardTop}>
        <div className={styles.logoWrap}>
          <BrandLogo logo={brand.logo} name={brand.name} />
        </div>
        <div className={styles.cardMeta}>
          <div className={styles.brandName}>{brand.name}</div>
          <div className={styles.brandCountry}>
            <span>{brand.flag}</span> {brand.country}
          </div>
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
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          <h2 className={styles.title}>
            Materiály, na která<br /><em>přísaháme.</em>
          </h2>
          <p className={styles.lead}>
            Pracujeme výhradně s certifikovanými systémy od lídrů oboru.
            Žádné no-name – každý materiál má záruční list a atest.
          </p>
        </div>
      </FadeIn>

      <div className={styles.categories}>
        {CATEGORIES.map((cat, ci) => (
          <FadeIn key={cat.id} delay={ci * 0.08}>
            <div className={styles.category}>
              <div className={styles.catHeader}>
                <div className={styles.catAccent} style={{ background: cat.accent }} />
                <div>
                  <div className={styles.catLabel}>{cat.label}</div>
                  <div className={styles.catDesc}>{cat.desc}</div>
                </div>
              </div>

              <div className={styles.grid} style={{ '--cols': cat.brands.length }}>
                {cat.brands.map((brand, bi) => (
                  <BrandCard
                    key={brand.id}
                    brand={brand}
                    delay={ci * 0.06 + bi * 0.07}
                  />
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
          <p>
            Ke každé zakázce vydáváme <strong>záruční list s atestem</strong> použitého materiálu.
            Víte přesně, co máte pod nohama.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
