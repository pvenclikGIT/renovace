import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Gallery.module.css'

const items = [
  { src: '/renovace/images/real-12.jpg', label: 'Cementová stěrka — sprcha', sub: 'Praha 6', span: 'large' },
  { src: '/renovace/images/real-04.jpg', label: 'Epoxidová stěrka', sub: 'Praha 3', span: 'medium' },
  { src: '/renovace/images/real-06.jpg', label: 'Sprchový kout s LED', sub: 'Beroun', span: 'small' },
  { src: '/renovace/images/real-08.jpg', label: 'Cementová stěrka', sub: 'Praha 2 — Vinohrady', span: 'medium' },
  { src: '/renovace/images/real-16.png', label: 'Voděodolná stěrka', sub: 'Středočeský kraj', span: 'small' },
  { src: '/renovace/images/real-01.jpg', label: 'Stěrka + vana', sub: 'Praha 5', span: 'medium' },
  { src: '/renovace/images/real-10.jpg', label: 'Tmavá stěrka', sub: 'Praha 10', span: 'small' },
  { src: '/renovace/images/real-11.jpg', label: 'Moderní koupelna', sub: 'Praha 4', span: 'medium' },
  { src: '/renovace/images/real-14.webp', label: 'Stěrka za vanou', sub: 'Kladno', span: 'small' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + items.length) % items.length)
  const next = () => setLightbox(i => (i + 1) % items.length)

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <FadeIn>
          <SectionHeader tag="Realizace" title={`Koupelny, které\njsme <em>proměnili</em>`} />
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
