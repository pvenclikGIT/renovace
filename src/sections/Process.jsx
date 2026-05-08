import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Konzultace & návrh',
    text: 'Prohlédneme vaši koupelnu, poradíme s výběrem materiálu, barevnosti a povrchu. Fyzický vzorek před zahájením prací.',
    day: 'Zdarma',
  },
  {
    num: '02',
    title: 'Příprava podkladu',
    text: 'Stávající obklady očistíme, odmaštíme a ošetříme adhezním přípravkem. Základ, který rozhoduje o výsledku.',
    day: 'Den 1',
  },
  {
    num: '03',
    title: 'Aplikace stěrky',
    text: 'Nanášíme v přesných vrstvách. Epoxid, cementová nebo pryskyřičná stěrka dle výběru — 2–3 mm tloušťka.',
    day: 'Den 1–2',
  },
  {
    num: '04',
    title: 'Finální povrch & předání',
    text: 'Zapečetíme lakem nebo voskem pro maximální odolnost. Koupelna plně funkční do 24 hodin po dokončení.',
    day: 'Den 3',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.header}>
        <FadeIn>
          <SectionHeader
            tag="Postup práce"
            title="Od první zprávy po<br /><em>hotovou koupelnu</em>"
            lead="Čtyři kroky, žádná překvapení. Přesná cena a termín ještě před tím, než začneme."
          />
        </FadeIn>
      </div>

      <div className={styles.grid}>
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className={styles.step}>
              <div className={styles.num}>{s.num}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
              <span className={styles.day}>{s.day}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
