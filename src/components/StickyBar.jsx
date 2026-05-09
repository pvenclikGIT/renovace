import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './StickyBar.module.css'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 600
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 400
      setVisible(scrolled && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.pulse} />
              <div className={styles.text}>
                <span className={styles.strong}>Volný termín tento týden</span>
                <span className={styles.sub}>Konzultace a cena zdarma · Praha a Středočeský kraj</span>
              </div>
            </div>
            <div className={styles.actions}>
              <a href="tel:+420000000000" className={styles.btnCall}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 2h3l1.5 3.5-1.75 1A9 9 0 008.5 10.25l1-1.75L13 10v3a1 1 0 01-1 1A11 11 0 012 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                Zavolat
              </a>
              <a href="#contact" className={styles.btnCta}>
                Konzultace zdarma
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button className={styles.close} onClick={() => setDismissed(true)} aria-label="Zavřít">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
