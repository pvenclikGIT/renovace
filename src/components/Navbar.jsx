import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Jak to funguje', href: '#process' },
  { label: 'Proč stěrka', href: '#why' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Realizace', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

function BSLogo({ light = false }) {
  const dark = light ? 'white' : '#171412'
  const sub = light ? 'rgba(255,255,255,0.4)' : '#9C968F'
  return (
    <svg width="180" height="46" viewBox="0 0 180 46" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BezSpár.cz – Koupelna bez bourání">
      <text x="0" y="36" fontFamily="Poppins, sans-serif" fontSize="38" fontWeight="900" fill={dark} letterSpacing="-2">BS</text>
      <rect x="0" y="41" width="56" height="3" rx="1.5" fill="#C9963C"/>
      <rect x="0" y="45" width="36" height="1.5" rx="0.75" fill="#C9963C" opacity="0.35"/>
      <text x="66" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="800" fill={dark} letterSpacing="-0.5">BezSpár.cz</text>
      <text x="66" y="38" fontFamily="Poppins, sans-serif" fontSize="9.5" fontWeight="300" fill={sub} letterSpacing="0.4">Koupelna bez bourání</text>
    </svg>
  )
}

export { BSLogo }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)

  const homeHref = (hash) => isHome ? hash : `/${hash}`

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo} aria-label="BezSpár.cz – domů">
          <BSLogo />
        </Link>
        <ul className={styles.links}>
          {links.map(l => <li key={l.href}><a href={homeHref(l.href)}>{l.label}</a></li>)}
          <li><Link to="/cenik" className={`${location.pathname === '/cenik' ? styles.navActive : ''}`}>Ceník</Link></li>
          <li><a href={homeHref('#contact')} className={styles.cta}>Konzultace zdarma</a></li>
        </ul>
        <button className={styles.hamburger} onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          {links.map(l => <a key={l.href} href={homeHref(l.href)} onClick={close} className={styles.drawerLink}>{l.label}</a>)}
          <Link to="/cenik" onClick={close} className={styles.drawerLink}>Ceník</Link>
          <a href={homeHref('#contact')} onClick={close} className={styles.drawerCta}>Konzultace zdarma</a>
        </div>
      </div>
      {open && <div className={styles.overlay} onClick={close} />}
    </>
  )
}
