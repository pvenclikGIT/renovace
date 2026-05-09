import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Testimonials.module.css'

const reviews = [
  {
    initials: 'KV', name: 'Kristýna Vlčková', loc: 'Praha 3 – Žižkov', type: 'Rodinný byt',
    text: 'Celý byt jsme měli v pořádku – jen koupelna byla z devadesátek. Bála jsem se týdnů plných prachu a stavbaření. Místo toho přišli v pondělí, pracovali tři dny a v pátek jsem měla koupelnu, která vypadá jako z Pinterestu.',
    material: 'Cementová stěrka · Antracit',
  },
  {
    initials: 'TN', name: 'Tomáš Novotný', loc: 'Správa nemovitostí', type: 'Bytový fond',
    text: 'Spravuji sedm nájemních bytů a hledal jsem partnera, se kterým se nemusím hádat o každou položku. Pevná cena, domluvený termín a výsledek, se kterým se nájemníci chlubí. Přesně to jsem potřeboval.',
    material: 'Epoxidová stěrka · 4 byty',
  },
  {
    initials: 'MH', name: 'Miroslava Horáčková', loc: 'Penzion U Tří lip, Beroun', type: 'Hotelový provoz',
    text: 'Čtyři koupelny renovované přesně v termínu, který jsem potřebovala mezi hlavní sezónou a Vánocemi. Hosté se ptají, kde jsme pořídili "takové krásné italské kachle". Říkám jim pravdu a jsou v šoku.',
    material: 'Pryskyřičná stěrka · Béžová',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
      <FadeIn>
        <SectionHeader
          tag="Co říkají klienti"
          title={`Reference, které nás <em>pohání vpřed</em>`}
          lead="Tři různé příběhy, jeden společný jmenovatel: koupelna bez bourání funguje přesně tak, jak jsme slíbili."
        />
      </FadeIn>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.12}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M7 1l1.5 3.1 3.4.5-2.5 2.4.6 3.4L7 8.8l-3 1.6.6-3.4L2.1 4.6l3.4-.5L7 1z"/>
                    </svg>
                  ))}
                </div>
                <span className={styles.type}>{r.type}</span>
              </div>

              <blockquote className={styles.text}>„{r.text}"</blockquote>

              <div className={styles.cardBottom}>
                <div className={styles.author}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.name}>{r.name}</div>
                    <div className={styles.loc}>{r.loc}</div>
                  </div>
                </div>
                <div className={styles.material}>{r.material}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  )
}
