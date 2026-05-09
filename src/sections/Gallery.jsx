import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Gallery.module.css'

const items = [
  // Row 1-2: hero (6 cols × 2 rows) + 2×2 smalls on right
  { src: '/renovace/images/podlaha-04.jpg', label: 'Microcement – rohová vana + dvojité umývadlo', sub: 'Praha západ', span: 'large' },
  { src: '/renovace/images/real-05.jpg', label: 'Industriální koupelna – cihla + stěrka', sub: 'Praha 2', span: 'small' },
  { src: '/renovace/images/podlaha-07.jpg', label: 'Minimalistický sprchový kout', sub: 'Praha 6', span: 'small' },
  { src: '/renovace/images/real-10.jpg', label: 'Tmavá stěrka – design s pendantovými světly', sub: 'Praha 6', span: 'small' },
  { src: '/renovace/images/podlaha-03.jpg', label: 'Béžová dekorativní stěrka', sub: 'Praha 5', span: 'small' },
  // Row 3: 3 equal medium columns
  { src: '/renovace/images/real-02.jpg', label: 'Rustikální koupelna – dřevo + kámen + stěrka', sub: 'Praha 9', span: 'medium' },
  { src: '/renovace/images/podlaha-01.jpg', label: 'Cementová stěrka – podlaha i stěny', sub: 'Praha 3', span: 'medium' },
  { src: '/renovace/images/podlaha-09.jpg', label: 'Rohová vana + dřevo + stěrka', sub: 'Praha západ', span: 'medium' },
  // Row 4-5: hero (6 cols × 2 rows) + 2×2 smalls on right
  { src: '/renovace/images/real-11.jpg', label: 'Stěrka + dřevěný nábytek + kamenné umývadlo', sub: 'Praha západ', span: 'large' },
  { src: '/renovace/images/podlaha-06.jpg', label: 'Šedá stěrka – kompletní koupelna', sub: 'Středočeský kraj', span: 'small' },
  { src: '/renovace/images/real-04.jpg', label: 'Stěrka – dvojité umývadlo s podsvíceným zrcadlem', sub: 'Praha 5', span: 'small' },
  { src: '/renovace/images/podlaha-02.jpg', label: 'Stěrka – detail koupelny', sub: 'Praha 3', span: 'small' },
  { src: '/renovace/images/real-12.jpg', label: 'Stěrka – sprchový kout + dvojité umývadlo', sub: 'Praha 3', span: 'small' },
  // Row 6: two wide halves
  { src: '/renovace/images/podlaha-05.jpg', label: 'Koupelna s vanou a mikrobetonem', sub: 'Praha západ', span: 'half' },
  { src: '/renovace/images/podlaha-08.jpg', label: 'Stěrka – celá koupelna', sub: 'Středočeský kraj', span: 'half' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + items.length) % items.length)
  const next = () => setLightbox(i => (i + 1) % items.length)

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <FadeIn>
          <SectionHeader tag="Realizace" title={`Koupelny, které jsme <em>proměnili</em>`} />
        </FadeIn>
        <FadeIn delay={0.15}>
          <a href="#contact" className={styles.cta}>
            Chci taky takovou <ArrowRight size={14} strokeWidth={2} />
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[item.span]}`}
              onClick={() => setLightbox(i)}
            >
              <img src={item.src} alt={item.label} className={styles.img} />
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
                <small className={styles.overlaySub}>{item.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <button className={styles.lbClose} onClick={() => setLightbox(null)}>
              <X size={24} />
            </button>
            <button className={`${styles.lbNav} ${styles.lbPrev}`} onClick={e => { e.stopPropagation(); prev() }}>
              <ChevronLeft size={28} />
            </button>
            <motion.div
              className={styles.lbImgWrap}
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <img src={items[lightbox].src} alt={items[lightbox].label} className={styles.lbImg} />
              <div className={styles.lbCaption}>
                <span>{items[lightbox].label}</span>
                <small>{items[lightbox].sub}</small>
              </div>
            </motion.div>
            <button className={`${styles.lbNav} ${styles.lbNext}`} onClick={e => { e.stopPropagation(); next() }}>
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
