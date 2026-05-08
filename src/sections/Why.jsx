import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Why.module.css'

const features = [
  { icon: '⚡', title: 'Žádný výpadek koupelny', text: 'Hotovo za 2–4 dny. Standardní rekonstrukce s bouráním trvá 3–6 týdnů.' },
  { icon: '🔇', title: 'Nulový hluk a prach', text: 'Bez bourání, bez vrtání. Sousedé to nepoznají, vy budete spokojení.' },
  { icon: '💎', title: 'Cena předem, bez překvapení', text: 'Pevná cena z konzultace je konečná. Vícepráce u nás neexistují.' },
  { icon: '🛡', title: 'Výsledek na dekády', text: 'Stěrka vydrží 10–15 let. Voděodolná, odolná plísni, snadná údržba.' },
]

export default function Why() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.visual}>
        <img src="/renovace/images/real-06.jpg" alt="Sprchový kout se stěrkou" />
        <div className={styles.quoteWrap}>
          <blockquote className={styles.quote}>
            „Koupelna hotová za 3 dny —<br />
            <em>bez jediného zrnka prachu</em><br />
            jinde v bytě."
          </blockquote>
        </div>
      </div>
      <div className={styles.content}>
        <FadeIn>
          <SectionHeader
            tag="Proč stěrka"
            title={`Bez bourání vs.\n<em>klasická rekonstrukce</em>`}
            lead="Ušetříte čas, nervy i peníze. Klasická rekonstrukce trvá měsíce a stojí 2–4× více."
          />
        </FadeIn>
        <div className={styles.features}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className={styles.feature}>
                <div className={styles.iconWrap}>{f.icon}</div>
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
