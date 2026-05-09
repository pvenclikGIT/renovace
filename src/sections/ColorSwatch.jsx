import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './ColorSwatch.module.css'

const colors = [
  { id: 'anthracite', name: 'Antracit',       hex: '#3A3A3A', light: false, img: '/renovace/images/real-12.jpg', mat: 'Cementová stěrka' },
  { id: 'concrete',   name: 'Pohledový beton', hex: '#8B8680', light: false, img: '/renovace/images/real-04.jpg', mat: 'Cementová stěrka' },
  { id: 'greige',     name: 'Greige',          hex: '#C4B49A', light: true,  img: '/renovace/images/real-08.jpg', mat: 'Cementová stěrka' },
  { id: 'sand',       name: 'Písková',          hex: '#D4C5AD', light: true,  img: '/renovace/images/real-11.jpg', mat: 'Epoxidová stěrka' },
  { id: 'white',      name: 'Čistá bílá',       hex: '#F0EDE8', light: true,  img: '/renovace/images/real-06.jpg', mat: 'Epoxidová stěrka' },
  { id: 'graphite',   name: 'Grafit',           hex: '#5A5A5A', light: false, img: '/renovace/images/real-10.jpg', mat: 'Epoxidová stěrka' },
  { id: 'darkbrown',  name: 'Tmavá káva',       hex: '#2A1F1A', light: false, img: '/renovace/images/real-16.png', mat: 'Pryskyřičná stěrka' },
  { id: 'taupe',      name: 'Taupe',            hex: '#A89880', light: false, img: '/renovace/images/real-03.jpg', mat: 'Pryskyřičná stěrka' },
]

export default function ColorSwatch() {
  const [active, setActive] = useState(colors[0])

  return (
    <section id="colors" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Vzorník</div>
          <h2 className={styles.title}>Vyberte si barvu.<br/><em>Uvidíte výsledek.</em></h2>
          <p className={styles.lead}>Klikněte na odstín a okamžitě uvidíte jak bude koupelna vypadat. Přes 200 odstínů RAL na vyžádání.</p>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        <FadeIn delay={0.1}>
          <div className={styles.preview}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className={styles.previewImgWrap}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
              >
                <img src={active.img} alt={active.name} className={styles.previewImg} />
                <div className={styles.previewBadge}>
                  <span className={styles.previewColor} style={{ background: active.hex }} />
                  <div>
                    <div className={styles.previewName}>{active.name}</div>
                    <div className={styles.previewMat}>{active.mat}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.swatches}>
            <div className={styles.swatchGrid}>
              {colors.map(c => (
                <button
                  key={c.id}
                  className={`${styles.swatch} ${active.id === c.id ? styles.swatchActive : ''}`}
                  onClick={() => setActive(c)}
                  title={c.name}
                >
                  <div className={styles.swatchColor} style={{ background: c.hex }} />
                  <span className={styles.swatchName}>{c.name}</span>
                  <span className={styles.swatchMat}>{c.mat.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <div className={styles.swatchNote}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Zobrazené fotografie jsou ilustrativní. Fyzický vzorek vám přivezeme při konzultaci. Barva na monitoru se vždy liší.
            </div>
            <a href="#contact" className={styles.swatchCta}>
              Chci fyzický vzorník domů
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
