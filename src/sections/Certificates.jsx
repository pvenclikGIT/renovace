import FadeIn from '../components/FadeIn'
import styles from './Certificates.module.css'

const certs = [
  { icon: '🛡', title: 'Vodotěsnost', desc: 'Certifikát EN 14891 – voděodolnost pod obklady i bez nich', color: '#3D7A77' },
  { icon: '👣', title: 'Protiskluz R10/R11', desc: 'Certifikovaná protiskluzová třída pro mokré provozy', color: '#C9963C' },
  { icon: '🌿', title: 'Zdravotní nezávadnost', desc: 'Atesty na styk s potravinami – bez emisí po vytvrzení', color: '#4A7B4E' },
  { icon: '🔥', title: 'Požární odolnost', desc: 'Třída reakce na oheň B-s1,d0 dle EN 13501-1', color: '#C94040' },
  { icon: '♻️', title: 'Ekologická výroba', desc: 'Materiály bez obsahu těžkých kovů a formaldehydu', color: '#2D7A3A' },
  { icon: '⭐', title: 'Garance kvality', desc: '10 let záruka na těsnost a přilnavost – záruční list ke každé zakázce', color: '#C9963C' },
]

const brands = ['MAPEI', 'SIKA', 'WEBER', 'ARDEX', 'KNAUF', 'BAUMIT']

export default function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Certifikáty & záruky</div>
          <h2 className={styles.title}>Nejde jen o hezký<br/><em>výsledek.</em></h2>
          <p className={styles.lead}>Používáme certifikované materiály předních evropských výrobců. Každá realizace má záruční list a atesty.</p>
        </div>
      </FadeIn>

      <div className={styles.certsGrid}>
        {certs.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <div className={styles.certCard}>
              <div className={styles.certIcon} style={{ background: `${c.color}18`, color: c.color }}>
                {c.icon}
              </div>
              <div>
                <div className={styles.certTitle}>{c.title}</div>
                <div className={styles.certDesc}>{c.desc}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className={styles.brands}>
          <div className={styles.brandsLabel}>Certifikované materiály od</div>
          <div className={styles.brandsRow}>
            {brands.map(b => (
              <div key={b} className={styles.brandBadge}>{b}</div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
