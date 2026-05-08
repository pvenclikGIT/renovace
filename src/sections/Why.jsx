import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Why.module.css'

const features = [
  {
    icon: '⏱',
    title: 'Žádný výpadek koupelny',
    text: 'Dokončíme za 2–4 dny. Standardní rekonstrukce s bouráním trvá 3–6 týdnů — a vy si mezitím nemáte kde umýt ruce.',
  },
  {
    icon: '🔇',
    title: 'Žádný hluk, prach ani chaos',
    text: 'Pracujeme čistě. Bez bourání, bez vrtání, bez dní plných prachu. Sousedé to nepoznají, vy budete spokojení.',
  },
  {
    icon: '💰',
    title: 'Cena předem, bez překvapení',
    text: 'Vícepráce u nás neexistují. Cena z konzultace je konečná. Garantujeme pevnou cenu ještě před zahájením prací.',
  },
  {
    icon: '✦',
    title: 'Výsledek, který trvá dekády',
    text: 'Správně nanesená stěrka vydrží 10–15 let a víc. Je voděodolná, odolná vůči plísni a snadná na údržbu.',
  },
]

export default function Why() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.visual}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderInner}>
            <span>✦</span>
            <p>Detail struktury povrchu</p>
            <small>Vlastní fotografie</small>
          </div>
        </div>
        <div className={styles.quoteWrap}>
          <blockquote className={styles.quote}>
            „Konečně koupelna,<br />
            kterou jsem chtěla —<br />
            a manžel nemusel brát dovolenou."
          </blockquote>
        </div>
      </div>

      <div className={styles.content}>
        <FadeIn>
          <SectionHeader
            tag="Proč stěrka"
            title="Tradiční rekonstrukce vs.<br /><em>Štěrka Bad</em>"
            lead="Klasická rekonstrukce koupelny trvá 2–4 týdny, stojí 2–4× více a zanechá v bytě centimetry prachu. Naše metoda ne."
          />
        </FadeIn>

        <div className={styles.features}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className={styles.feature}>
                <div className={styles.icon}>{f.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureText}>{f.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
