import { IconCheck } from '../components/Icons'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Segments.module.css'

const segments = [
  {
    icon: '/renovace/images/real-08.jpg',
    sub: 'Nejčastěji',
    badge: 'Primární segment',
    title: 'Páry s vlastním bytem',
    desc: 'Koupelna z devadesátek nebo nultých let, která vám denně kazí náladu. Chcete změnu — ale bez toho, aby přišel řemeslník a vyřídil vás na měsíc. Přesně pro vás.',
    points: [
      'Hotovo za 3 dny, ne za 3 týdny',
      'Pevná cena ještě před zahájením',
      'Fyzický vzorek před podpisem',
      'Záruční list na 10 let',
    ],
    featured: true,
  },
  {
    icon: null,
    sub: 'Sekundární segment',
    badge: null,
    title: 'Správci a pronajímatelé',
    desc: 'Potřebujete renovovat opakovaně, rychle a bez přemýšlení. Jeden dodavatel, stejná kvalita, koordinace podle vašeho harmonogramu. Od tří bytů řešíme vše najednou.',
    points: [
      'Množstevní sleva od 3 jednotek',
      'Koordinace dle vašeho plánu',
      'Dokumentace pro účetnictví',
      'Totožný výsledek napříč projektem',
    ],
    featured: false,
  },
  {
    icon: null,
    sub: 'Terciární segment',
    badge: null,
    title: 'Hotely a wellness',
    desc: 'Koupelna v hotelovém provozu musí vydržet tisíce cyklů ručníků, sprchových gelů a úklidové chemie. Epoxidová stěrka tuhle zátěž snese — a přitom vypadá jako luxusní design.',
    points: [
      'Provoz obnoven do 24–48 h',
      'Odolnost vůči hotelové chemii',
      'Protiskluz certif. R10/R11',
      'Reference z pražských hotelů',
    ],
    featured: false,
  },
]

export default function Segments() {
  return (
    <section id="segments" className={styles.section}>
      <FadeIn>
        <SectionHeader
          tag="Pro koho pracujeme"
          title={`Tři typy klientů.\n<em>Jedno řemeslo.</em>`}
          lead="Výsledek je vždy stejný — technologicky správně provedená stěrka s zárukou. Liší se pouze rozsah a podmínky spolupráce."
        />
      </FadeIn>
      <div className={styles.grid}>
        {segments.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.12}>
            <div className={`${styles.card} ${s.featured ? styles.featured : ''}`}>
              {s.featured && <div className={styles.badge}>Nejčastěji</div>}
              {s.icon && (
                <div className={styles.cardImg}>
                  <img src={s.icon} alt={s.title} />
                  <div className={styles.cardImgOverlay} />
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.sub}>{s.sub}</div>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <ul className={styles.list}>
                  {s.points.map(p => (
                    <li key={p}>
                      <span className={styles.checkWrap}><IconCheck /></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={styles.cardCta}>
                  Chci konzultaci
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
