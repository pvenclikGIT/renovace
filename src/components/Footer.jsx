import { Link, useLocation } from 'react-router-dom'
import { BSLogo } from './Navbar'
import styles from './Footer.module.css'

const BASE = '/renovace'

const nav = [
  { label: 'Jak to funguje', href: '#process' },
  { label: 'Proč stěrka', href: '#why' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Realizace', href: '#gallery' },
  { label: 'Mýty a realita', href: '#myths' },
]

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  // Section anchors must be absolute when on a subpage (e.g. /cenik),
  // so they navigate back to homepage and scroll to the section.
  const homeHref = (hash) => isHome ? hash : `${BASE}/${hash}`

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoWrap} aria-label="BezSpár.cz, domů">
            <BSLogo light />
          </Link>
          <p className={styles.desc}>
            Rekonstrukce koupelen bez bourání. Epoxidové, cementové
            a pryskyřičné stěrky přímo na stávající obklady.
            Praha a Středočeský kraj.
          </p>
          <div className={styles.certBadges}>
            <span className={styles.certBadge}>IČO: 24477648</span>
            <span className={styles.certBadge}>Záruka 10 let</span>
            <span className={styles.certBadge}>Certif. materiály</span>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Navigace</div>
          <ul>
            <li><Link to="/">Domů</Link></li>
            {nav.map(l => <li key={l.href}><a href={homeHref(l.href)}>{l.label}</a></li>)}
            <li><Link to="/cenik">Ceník</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <div className={styles.colTitle}>Kontakt</div>
          <ul>
            <li><a href="tel:+420776661661">+420 776 661 661</a></li>
            <li><a href="tel:+420604913683">+420 604 913 683</a></li>
            <li><a href="mailto:info@bezspar.cz">info@bezspar.cz</a></li>
            <li><span>Zbraslavská 12/11, Praha 5</span></li>
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
        <span>© 2025 BezSpár.cz, ServisProfi s.r.o. Všechna práva vyhrazena.</span>
        <div className={styles.legal}>
          <a href="#">Zpracování osobních údajů</a>
          <a href="#">Obchodní podmínky</a>
        </div>
      </div>
    </footer>
  )
}
