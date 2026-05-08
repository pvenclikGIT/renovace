import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Gallery.module.css'

const items = [
  { label: 'Epoxidový sprchový kout', sub: 'Praha 3 — Žižkov', span: 'large' },
  { label: 'Cementová stěrka — stěna', sub: 'Beroun', span: 'medium' },
  { label: 'Celková rekonstrukce', sub: 'Praha 6', span: 'small' },
  { label: 'Pryskyřičná stěrka', sub: 'Praha 2 — Vinohrady', span: 'medium' },
  { label: 'Hotel — spa & wellness', sub: 'Středočeský kraj', span: 'small' },
]

const gradients = [
  'linear-gradient(150deg, #C4B49A 0%, #7B6E5C 100%)',
  'linear-gradient(135deg, #EDE5D8 0%, #C4B49A 100%)',
  'linear-gradient(140deg, #3D7A77 0%, #1E1A17 100%)',
  'linear-gradient(130deg, #D4C5AD 0%, #A8935A 100%)',
  'linear-gradient(145deg, #2A2520 0%, #6B6560 100%)',
]

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <FadeIn>
          <SectionHeader
            tag="Realizace"
            title="Koupelny, které<br />jsme <em>proměnili</em>"
            lead="Každý projekt je jiný. Stejná je ale preciznost práce a spokojenost klientů."
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <a href="#contact" className={styles.cta}>
            Chci taky takovou koupelnu →
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${styles[item.span]}`}
            >
              {/* Replace with <img src={...} /> */}
              <div
                className={styles.placeholder}
                style={{ background: gradients[i] }}
              >
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
