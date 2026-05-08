import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Gallery.module.css'

const items = [
  { label: 'Epoxidový sprchový kout', sub: 'Praha 3 — Žižkov', span: 'large', bg: 'linear-gradient(145deg,#3D3530 0%,#1A1A1A 100%)' },
  { label: 'Cementová stěrka', sub: 'Beroun', span: 'medium', bg: 'linear-gradient(135deg,#2D4A3E 0%,#1A2E28 100%)' },
  { label: 'Celková rekonstrukce', sub: 'Praha 6', span: 'small', bg: 'linear-gradient(140deg,#3A3020 0%,#1A1505 100%)' },
  { label: 'Pryskyřičná stěrka', sub: 'Vinohrady', span: 'medium', bg: 'linear-gradient(130deg,#2A2A3D 0%,#111120 100%)' },
  { label: 'Hotel spa & wellness', sub: 'Středočeský kraj', span: 'small', bg: 'linear-gradient(145deg,#3D2A1A 0%,#1A1008 100%)' },
]

export default function Gallery() {
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
            <div key={i} className={`${styles.item} ${styles[item.span]}`}>
              <div className={styles.placeholder} style={{ background: item.bg }}>
                <div className={styles.placeholderText}>
                  <span>{item.label}</span>
                  <small>{item.sub}</small>
                </div>
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
                <small className={styles.overlaySub}>{item.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
