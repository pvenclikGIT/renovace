import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Testimonials.module.css'

const reviews = [
  { initials: 'KV', name: 'Kristýna V.', loc: 'Praha 3 — Žižkov', text: 'Nevěřila jsem, že to bude tak rychlé. Přišli v pondělí, ve čtvrtek jsem se mohla osprchovat v koupelně snů. Bez jediného zrnka prachu jinde v bytě.' },
  { initials: 'TN', name: 'Tomáš N.', loc: 'Správce bytového fondu', text: 'Jako správce pěti bytů jsem hledal spolehlivého partnera. Cena, rychlost, kvalita — vše sedí. Objednávám opakovaně a vždy jsem spokojen.' },
  { initials: 'MH', name: 'Miroslava H.', loc: 'Majitelka penzionhu, Beroun', text: 'Čtyři koupelny renovované přesně dle plánu. Pokoje dostupné hostům druhý den. Výsledek je elegantní a odolný.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <FadeIn>
        <SectionHeader tag="Reference" title={`Co říkají\nnaši <em>klienti</em>`} />
      </FadeIn>
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.1}>
            <div className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => <span key={j} className={styles.star}>★</span>)}
              </div>
              <p className={styles.text}>„{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.loc}>{r.loc}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
