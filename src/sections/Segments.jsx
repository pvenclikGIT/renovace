import { IconCheck } from '../components/Icons'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Segments.module.css'

const segments = [
  {
    img: '/renovace/images/real-08.jpg',
    badge: 'Nejčastěji',
    sub: 'Byty a rodinné domy',
    title: 'Soukromé bydlení',
    desc: 'Koupelna z devadesátek, která vám denně kazí náladu. Chcete změnu bez toho, aby přišel řemeslník a vyřídil vás na měsíc. Přesně pro vás. Stejnou kvalitu nabízíme v paneláku, ve vile i v rodinném domě.',
    points: ['Běžně hotovo do 14 dnů, ne za 2 měsíce', 'Pevná cena ještě před zahájením', 'Fyzický vzorek před podpisem', 'Záruční list na 10 let'],
    featured: true,
    dark: false,
  },
  {
    img: '/renovace/images/dev-02.jpg',
    badge: 'Pro projekty',
    sub: 'Developeři a investoři',
    title: 'Bytové projekty a developerské stavby',
    desc: 'Potřebujete vybavit desítky koupelen ve stejné kvalitě, ve stanoveném termínu a bez překvapení. Jsme partner pro celé projekty. Od prvního bytu po celý bytový dům.',
    points: ['Jednotná kvalita napříč celým projektem', 'Koordinace přesně dle vašeho HMG', 'Množstevní ceny od 5 jednotek', 'Dokumentace a předávací protokoly'],
    featured: true,
    dark: true,
  },
  {
    img: '/renovace/images/hotel-01.jpg',
    badge: null,
    sub: 'Hotely a wellness',
    title: 'Hospitality a lázeňské provozy',
    desc: 'Koupelna v hotelovém provozu musí vydržet tisíce cyklů. Epoxidová nebo pryskyřičná stěrka tuhle zátěž snese a přitom vypadá jako luxusní design. Realizace plánujeme do mezisezónních pauz.',
    points: ['Plánujeme do mezisezónních pauz', 'Odolnost vůči hotelové chemii', 'Protiskluz certif. R10/R11', 'Reference z pražských hotelů'],
    featured: false,
    dark: false,
  },
  {
    img: '/renovace/images/dev-01.jpg',
    badge: null,
    sub: 'Komerční prostory a kanceláře',
    title: 'Kanceláře, retail a komerční objekty',
    desc: 'Sociální zázemí v kancelářích, showroomech, gastro provozu i v retailu. Bezspárový povrch se snadno udržuje a vydrží zátěž denního provozu. Realizujeme i mimo provozní hodiny.',
    points: ['Realizace mimo provozní hodiny po dohodě', 'Splňuje hygienické nároky', 'Snadná údržba, žádné spáry', 'Faktura s DPH a předávací protokol'],
    featured: false,
    dark: false,
  },
]

export default function Segments() {
  return (
    <section id="segments" className={styles.section}>
      <div className={styles.inner}>
      <FadeIn>
        <SectionHeader
          tag="Pro koho pracujeme"
          title={`Byty, hotely, kanceláře. <em>Jedno řemeslo.</em>`}
          lead="Stejnou technologii a stejnou záruku dáváme do panelákové koupelny i do hotelového wellness. Liší se rozsah a podmínky spolupráce, ne kvalita provedení."
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
      </div>
    </section>
  )
}
