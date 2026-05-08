import styles from './Footer.module.css'

const nav = [
  { label: 'Jak to funguje', href: '#process' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Realizace', href: '#gallery' },
  { label: 'Pro koho', href: '#segments' },
  { label: 'FAQ', href: '#faq' },
]

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Houzz', href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>Štěrka<span>Bad</span></a>
          <p className={styles.desc}>
            Nová koupelna bez bourání. Epoxidové, cementové a pryskyřičné stěrky
            přímo na stávající povrchy. Praha a Středočeský kraj.
          </p>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Navigace</div>
          <ul>
            {nav.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Kontakt</div>
          <ul>
            <li><a href="tel:+420000000000">+420 XXX XXX XXX</a></li>
            <li><a href="mailto:info@sterkabad.cz">info@sterkabad.cz</a></li>
            <li><span>Praha & Středočeský kraj</span></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Sledujte nás</div>
          <ul>
            {social.map(s => (
              <li key={s.label}><a href={s.href}>{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 Štěrka Bad. Všechna práva vyhrazena.</span>
        <div className={styles.legal}>
          <a href="#">Zpracování osobních údajů</a>
          <a href="#">Obchodní podmínky</a>
        </div>
      </div>
    </footer>
  )
}
