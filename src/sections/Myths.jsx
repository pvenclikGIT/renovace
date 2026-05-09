import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './Myths.module.css'

const myths = [
  {
    myth: 'Stěrka praská nad starými spárami',
    truth: 'Nepraská – pokud je proces udělán správně. Do první vrstvy vkládáme skelnou perlinku, která přemostí každou původní spáru a pohltí mikronapětí. To je ten zásadní technologický krok, který laici vynechávají.',
  },
  {
    myth: 'Je to studené a klouže to',
    truth: 'Obojí vyvrátíme fakty. Pryskyřičná stěrka je výrazně teplejší na dotek než keramická dlažba. A protiskluz? Přidáváme certifikovaná anti-slip aditiva třídy R10/R11 – stejný standard jako na plovárnách. Na místě vám ukážeme vzorek.',
  },
  {
    myth: 'Vydrží to jen pár let',
    truth: 'Správně provedená stěrka s kvalitním polyuretanovým lakem vydrží 10–15 let při normálním používání. Na webu zveřejňujeme reference z realizací starých 8+ let – a vypadají stále jako nové.',
  },
  {
    myth: 'Když se to poškodí, celou koupelnu předělám',
    truth: 'Lokální oprava stěrky je možná a relativně nenápadná – na rozdíl od keramiky, kde nikdy neseženete stejnou sérii. U stěrky se povrch lokálně přebrousí, zatmelí a nalakuje. Bez spár se oprava ztratí.',
  },
  {
    myth: 'Na starou dlažbu to nepřilne',
    truth: 'Naopak – epoxidová chemie se na minerální podklad váže silněji než původní lepidlo. Klíčem je mechanické přebroušení a správný adhezní přípravek. Dbáme na to u každé zakázky bez výjimky.',
  },
  {
    myth: 'V koupelně to nepůjde – příliš vlhko',
    truth: 'Pryskyřičné stěrky jsou speciálně vyvinuté pro vlhká prostředí. Naopak jsou odolnější než spárovaná keramika, protože nemají slabé místo – eliminují spáry, kudy vlhkost proniká do konstrukce.',
  },
]

export default function Myths() {
  const [open, setOpen] = useState(null)

  return (
    <section id="myths" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Mýty a realita
          </div>
          <h2 className={styles.title}>
            Co vám o stěrkách<br /><em>říkají blbosti</em>
          </h2>
          <p className={styles.lead}>
            Setkáváme se s nimi u každé druhé konzultace. Tady jsou odpovědi, které vás odblokují.
          </p>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {myths.map((m, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className={styles.itemHeader}>
                <div className={styles.mythLabel}>
                  <span className={styles.mythBadge}>Mýtus</span>
                  <span className={styles.mythText}>{m.myth}</span>
                </div>
                <div className={styles.toggle}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className={styles.truth}>
                      <span className={styles.truthBadge}>Realita</span>
                      <p>{m.truth}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
