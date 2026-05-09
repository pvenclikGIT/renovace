import FadeIn from '../components/FadeIn'
import styles from './Certificates.module.css'

/* ── Custom SVG icons ─────────────────────────────────────────────── */

const IconWaterproof = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shield */}
    <path d="M13 2l9 3.5v6c0 5.5-4 9.5-9 11C8 21 4 17 4 11.5v-6L13 2z"/>
    {/* Water drop inside shield */}
    <path d="M13 8s-3 3.5-3 5.5a3 3 0 0 0 6 0C16 11.5 13 8 13 8z" strokeWidth="1.3"/>
  </svg>
)

const IconAntislip = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shoe sole */}
    <path d="M7 6c0-2 1.5-3 3-3s2.5 1 3.5 2.5L16 9.5c1 1.5 2.5 2 3.5 2.5s2 1.5 1.5 3-2 2.5-4 2.5H7c-2 0-3-1-3-2.5V9c0-1.5 1-3 3-3z"/>
    {/* Grip lines */}
    <line x1="5" y1="18" x2="9" y2="18" strokeWidth="2"/>
    <line x1="11" y1="20" x2="16" y2="20" strokeWidth="2"/>
    <line x1="18" y1="18" x2="21" y2="18" strokeWidth="2"/>
  </svg>
)

const IconHealthSafe = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Leaf */}
    <path d="M13 22C7 16 5 9 8 3c4 3 9 4 10 10-1 3-2.5 5-5 9z"/>
    {/* Stem */}
    <path d="M13 22c0-4-1-7-3-10"/>
    {/* Checkmark */}
    <path d="M10 11l2 2 4-4" strokeWidth="1.8"/>
  </svg>
)

const IconFireResist = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer flame */}
    <path d="M13 23C8 21 4 16 4 12c0-3 2-6 4-8 0 3 1.5 5 3 6 0-3 1-6 1-9 3 2 6 6 7 10 .5 2 .5 4-.5 6A5 5 0 0 0 22 12c0 4-3 9-9 11z"/>
    {/* Inner flame core */}
    <path d="M13 19a3 3 0 0 0 2-4c-1 .5-2 2-2 4z" strokeWidth="1.2"/>
  </svg>
)

const IconEco = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Circular arrows — recycle */}
    <path d="M9 4.5L13 2l1.5 3.5"/>
    <path d="M13 2C8 2 4 6 4 11"/>
    <path d="M4 11l-2 .5L3.5 15"/>
    <path d="M4 11c0 5 4 9 9 9"/>
    <path d="M17 21.5L13 24l-1.5-3.5"/>
    <path d="M13 24c5 0 9-4 9-9"/>
    <path d="M22 15l2-.5-1.5-3.5"/>
    <path d="M22 15c0-5-4-9-9-9"/>
  </svg>
)

const IconQuality = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Medal circle */}
    <circle cx="13" cy="16" r="7"/>
    {/* Ribbon left */}
    <path d="M9 10.5L7 3h5z"/>
    {/* Ribbon right */}
    <path d="M17 10.5L19 3h-5z"/>
    {/* Star / check inside medal */}
    <path d="M10 16l2 2 4-4" strokeWidth="1.8"/>
  </svg>
)

/* ── Data ─────────────────────────────────────────────────────────── */

const certs = [
  { Icon: IconWaterproof, title: 'Vodotěsnost',           desc: 'Certifikát EN 14891, voděodolnost pod obklady i bez nich',      color: '#3D7A77' },
  { Icon: IconAntislip,   title: 'Protiskluz R10/R11',    desc: 'Certifikovaná protiskluzová třída pro mokré provozy',            color: '#C9963C' },
  { Icon: IconHealthSafe, title: 'Zdravotní nezávadnost', desc: 'Atesty na styk s potravinami, bez emisí po vytvrzení',           color: '#4A7B4E' },
  { Icon: IconFireResist, title: 'Požární odolnost',      desc: 'Třída reakce na oheň B-s1,d0 dle EN 13501-1',                   color: '#C94040' },
  { Icon: IconEco,        title: 'Ekologická výroba',     desc: 'Materiály bez obsahu těžkých kovů a formaldehydu',              color: '#2D7A3A' },
  { Icon: IconQuality,    title: 'Garance kvality',       desc: '10 let záruka na těsnost a přilnavost, záruční list ke každé zakázce', color: '#C9963C' },
]


export default function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.inner}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Certifikáty a záruky</div>
          <h2 className={styles.title}>Nejde jen o hezký<br/><em>výsledek.</em></h2>
          <p className={styles.lead}>Používáme certifikované materiály předních evropských výrobců. Každá realizace má záruční list a atesty.</p>
        </div>
      </FadeIn>

      <div className={styles.certsGrid}>
        {certs.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <div className={styles.certCard}>
              <div className={styles.certIcon} style={{ background: `${c.color}18`, color: c.color }}>
                <c.Icon />
              </div>
              <div>
                <div className={styles.certTitle}>{c.title}</div>
                <div className={styles.certDesc}>{c.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  )
}
