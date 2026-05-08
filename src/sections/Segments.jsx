import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Segments.module.css'
import { Check } from 'lucide-react'

const segments = [
  {
    icon: '🏠',
    sub: 'Primární segment',
    title: 'Páry 30–50 let',
    desc: 'Vlastní byt nebo dům v Praze nebo Středočeském kraji. Ona chce koupelnu svých snů. On chce bez zbytečného chaosu a za rozumné peníze.',
    points: [
      'Hotovo za 3 dny bez chaosu',
      'Žádný zásah do dispozice bytu',
      'Pevná cena, žádné vícepráce',
      'Deset let bez starostí',
    ],
    featured: true,
  },
  {
    icon: '🏢',
    sub: 'Sekundární segment',
    title: 'Developeři & pronajímatelé',
    desc: 'Potřebujete renovovat rychle, opakovaně a se spolehlivou kvalitou. Jsme partner pro celé projekty.',
    points: [
      'Množstevní slevy od 3 jednotek',
      'Koordinace dle vašeho harmonogramu',
      'Dokumentace pro investory',
      'Jednotný výsledek napříč projektem',
    ],
    featured: false,
  },
  {
    icon: '🏨',
    sub: 'Terciární segment',
    title: 'Hotely & wellness',
    desc: 'Prémiový segment kde bezúdržbovost je klíčová. Povrchy odolají intenzivnímu provozu a zůstanou krásné roky.',
    points: [
      'Voděodolné — ideální pro spa',
      'Antifungální, snadný úklid',
      'Provoz obnoven do 24–48 hodin',
      'Reference v pražských hotelech',
    ],
    featured: false,
  },
]

export default function Segments() {
  return (
    <section id="segments" className={styles.section}>
      <FadeIn>
        <SectionHeader
          tag="Pro koho"
          title="Řešení pro<br /><em>každý typ klienta</em>"
        />
      </FadeIn>

      <div className={styles.grid}>
        {segments.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.12}>
            <div className={`${styles.card} ${s.featured ? styles.featured : ''}`}>
              {s.featured && (
                <div className={styles.badge}>Nejčastěji</div>
              )}
              <div className={styles.cardIcon}>{s.icon}</div>
              <div className={styles.sub}>{s.sub}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.list}>
                {s.points.map(p => (
                  <li key={p}>
                    <Check size={13} strokeWidth={2} className={styles.check} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
