import { BSLogo } from './Navbar'
import styles from './Footer.module.css'

const nav = [
  { label: 'Jak to funguje', href: '#process' },
  { label: 'Proč stěrka', href: '#why' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Realizace', href: '#gallery' },
  { label: 'Mýty a realita', href: '#myths' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logoWrap} aria-label="BezSpár.cz – domů">
            <BSLogo light />
          </a>
          <p className={styles.desc}>
            Rekonstrukce koupelen bez bourání. Epoxidové, cementové
            a pryskyřičné stěrky přímo na stávající obklady.
            Praha a Středočeský kraj.
          </p>
          <div className={styles.certBadges}>
            <span className={styles.certBadge}>IČO: XXXXXXXX</span>
            <span className={styles.certBadge}>Záruka 10 let</span>
            <span className={styles.certBadge}>Certif. materiály</span>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Navigace</div>
          <ul>{nav.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Kontakt</div>
          <ul>
            <li><a href="tel:+420000000000">+420 XXX XXX XXX</a></li>
            <li><a href="mailto:info@bezspar.cz">info@bezspar.cz</a></li>
            <li><span>Praha & Středočeský kraj</span></li>
            <li><span>Po–Pá 8:00–18:00</span></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Sledujte nás</div>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Houzz</a></li>
          </ul>
          <div className={styles.socialNote}>Fotky z realizací každý týden</div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 BezSpár.cz – Koupelna bez bourání. Všechna práva vyhrazena.</span>
        <div className={styles.legal}>
          <a href="#">Zpracování osobních údajů</a>
          <a href="#">Obchodní podmínky</a>
        </div>
      </div>
    </footer>
  )
}
