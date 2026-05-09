import { IconCheck } from '../components/Icons'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Segments.module.css'

const segments = [
  {
    img: '/images/real-08.jpg',
    badge: 'Nejčastěji',
    sub: 'Soukromé osoby',
    title: 'Páry s vlastním bytem',
    desc: 'Koupelna z devadesátek, která vám denně kazí náladu. Chcete změnu – bez toho, aby přišel řemeslník a vyřídil vás na měsíc. Přesně pro vás.',
    points: ['Hotovo za 3 dny, ne za 3 týdny', 'Pevná cena ještě před zahájením', 'Fyzický vzorek před podpisem', 'Záruční list na 10 let'],
    featured: true,
    dark: false,
  },
  {
    img: '/images/dev-02.jpg',
    badge: 'Pro projekty',
    sub: 'Developeři',
    title: 'Bytové projekty a developerské stavby',
    desc: 'Potřebujete vybavit desítky koupelen ve stejné kvalitě, ve stanoveném termínu a bez překvapení. Jsme partner pro celé projekty – od prvního bytu po celý bytový dům.',
    points: ['Jednotná kvalita napříč celým projektem', 'Koordinace přesně dle vašeho HMG', 'Množstevní ceny od 5 jednotek', 'Dokumentace a předávací protokoly'],
    featured: true,
    dark: true,
  },
  {
    img: '/images/dev-01.jpg',
    badge: null,
    sub: 'Správa nemovitostí',
    title: 'Pronajímatelé a správci',
    desc: 'Rychle, opakovaně, spolehlivě. Jeden dodavatel, stejná kvalita, koordinace podle vašeho harmonogramu. Od tří bytů řešíme vše najednou.',
    points: ['Množstevní sleva od 3 jednotek', 'Koordinace dle vašeho plánu', 'Dokumentace pro účetnictví', 'Totožný výsledek napříč projektem'],
    featured: false,
    dark: false,
  },
  {
    img: '/images/hotel-01.jpg',
    badge: null,
    sub: 'Prémiový segment',
    title: 'Hotely a wellness',
    desc: 'Koupelna v hotelovém provozu musí vydržet tisíce cyklů. Epoxidová stěrka tuhle zátěž snese – a přitom vypadá jako luxusní design.',
    points: ['Provoz obnoven do 24–48 h', 'Odolnost vůči hotelové chemii', 'Protiskluz certif. R10/R11', 'Reference z pražských hotelů'],
    featured: false,
    dark: false,
  },
]

export default function Segments() {
  return (
    <section id="segments" className={styles.section}>
      <FadeIn>
        <SectionHeader
          tag="Pro koho pracujeme"
          title={`Čtyři typy klientů. <em>Jedno řemeslo.</em>`}
          lead="Výsledek je vždy stejný – technologicky správně provedená stěrka se zárukou. Liší se pouze rozsah a podmínky spolupráce."
        />
      </FadeIn>

      <div className={styles.featuredRow}>
        {segments.filter(s => s.featured).map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.12}>
            <div className={`${styles.featCard} ${s.dark ? styles.featCardDark : ''}`}>
              {s.badge && <div className={`${styles.badge} ${s.dark ? styles.badgeDark : ''}`}>{s.badge}</div>}
              <div className={styles.featImg}>
                <img src={s.img} alt={s.title} />
                <div className={styles.featImgOverlay} />
              </div>
              <div className={styles.featBody}>
                <div className={`${styles.sub} ${s.dark ? styles.subDark : ''}`}>{s.sub}</div>
                <h3 className={`${styles.title} ${s.dark ? styles.titleDark : ''}`}>{s.title}</h3>
                <p className={`${styles.desc} ${s.dark ? styles.descDark : ''}`}>{s.desc}</p>
                <ul className={styles.list}>
                  {s.points.map(p => (
                    <li key={p} className={s.dark ? styles.liDark : ''}>
                      <span className={styles.checkWrap}><IconCheck /></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`${styles.cardCta} ${s.dark ? styles.cardCtaDark : ''}`}>
                  Chci konzultaci
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className={styles.smallRow}>
        {segments.filter(s => !s.featured).map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.12}>
            <div className={styles.smallCard}>
              <div className={styles.smallImg}>
                <img src={s.img} alt={s.title} />
                <div className={styles.smallImgOverlay} />
              </div>
              <div className={styles.smallBody}>
                <div className={styles.sub}>{s.sub}</div>
                <h3 className={styles.smallTitle}>{s.title}</h3>
                <p className={styles.smallDesc}>{s.desc}</p>
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
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
