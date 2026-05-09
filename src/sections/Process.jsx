import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Konzultace a výběr',
    text: 'Přijedeme k vám – nebo stačí pár fotek na WhatsApp. Poradíme s typem materiálu, barvou i texturou. Přivezeme fyzické vzorky, ať si sáhnete. Prohlídka a konzultace jsou zdarma.',
    day: 'Zdarma',
    detail: 'Do 48 h od poptávky',
  },
  {
    num: '02',
    title: 'Příprava podkladu',
    text: 'Stávající obklady přebrousíme, odmaštíme a ošetříme adhezním přípravkem. Do první vrstvy vkládáme skelnou perlinku – to je klíč k tomu, aby stěrka nepraskala nad původními spárami.',
    day: 'Den 1',
    detail: 'Mokrý proces, bez prachu',
  },
  {
    num: '03',
    title: 'Aplikace ve vrstvách',
    text: 'Nanášíme 4–6 vrstev v závislosti na stavu podkladu. Každá vrstva musí dostatečně zatvrdnout. Urychlovat se nedá – na tomhle stojí výsledná pevnost a estetika povrchu.',
    day: 'Den 1–3',
    detail: 'Epoxid, cement, pryskyřice',
  },
  {
    num: '04',
    title: 'Lak a předání',
    text: 'Finální vrstva je polyuretanový lak, který určí míru lesku a zajistí voděodolnost. Po 24 hodinách je koupelna schůdná. Plnou odolnost vůči chemii má po 7 dnech.',
    day: 'Den 3–4',
    detail: 'Záruční list součástí',
  },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <FadeIn>
            <SectionHeader
              tag="Jak to funguje"
              title={`Čtyři kroky. Žádná <em>překvapení po cestě.</em>`}
              lead="Přesně víte, co se bude dít, kdy to bude hotové a kolik to bude stát – ještě předtím, než se do toho pustíme."
            />
          </FadeIn>
        </div>

        <div className={styles.grid}>
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.num}>{s.num}</span>
                <div className={styles.badges}>
                  <span className={styles.dayBadge}>{s.day}</span>
                  <span className={styles.detailBadge}>{s.detail}</span>
                </div>
              </div>
              <div className={styles.stepAccent} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </div>
          </FadeIn>
        ))}
        </div>

        <FadeIn delay={0.3}>
          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <strong>Kde jsme teď?</strong> Aktuálně máme volné termíny od příštího týdne.
            </div>
            <a href="#contact" className={styles.ctaBtn}>
              Zarezervovat termín
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
