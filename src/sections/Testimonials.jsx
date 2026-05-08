import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Testimonials.module.css'

const reviews = [
  {
    initials: 'KV',
    name: 'Kristýna V.',
    loc: 'Praha 3 — Žižkov, rodinný byt',
    text: 'Nevěřila jsem, že to bude tak rychlé a čisté. Přišli v pondělí, ve čtvrtek jsem se mohla osprchovat v koupelně snů. Bez jediného zrnka prachu jinde v bytě.',
  },
  {
    initials: 'TN',
    name: 'Tomáš N.',
    loc: 'Správce bytového fondu, Praha',
    text: 'Jako správce pěti bytů jsem hledal spolehlivého partnera. Cena, rychlost, kvalita — vše sedí. Objednávám opakovaně a vždy jsem spokojen.',
  },
  {
    initials: 'MH',
    name: 'Miroslava H.',
    loc: 'Majitelka penzionhu, Beroun',
    text: 'Renovace čtyř koupelen probíhala přesně dle plánu. Pokoje byly k dispozici hostům druhý den. Výsledek je elegantní a odolný.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <FadeIn>
        <SectionHeader
          light
          tag="Co říkají klienti"
          title="Slova, která nás<br /><em>pohání vpřed</em>"
        />
      </FadeIn>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.1}>
            <div className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.text}>{r.text}</p>
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
