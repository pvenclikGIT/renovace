import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Jak to funguje', href: '#process' },
  { label: 'Materiály', href: '#materials' },
  { label: 'Realizace', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const close = () => setOpen(false)
  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#" className={styles.logo}>
          ŠtěrkaBad <span className={styles.logoDot} />
        </a>
        <ul className={styles.links}>
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#contact" className={styles.cta}>Konzultace zdarma</a></li>
        </ul>
        <button className={styles.hamburger} onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerInner}>
          {links.map(l => <a key={l.href} href={l.href} onClick={close} className={styles.drawerLink}>{l.label}</a>)}
          <a href="#contact" onClick={close} className={styles.drawerCta}>Konzultace zdarma</a>
        </div>
      </div>
      {open && <div className={styles.overlay} onClick={close} />}
    </>
  )
}
