import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FloatingCta.module.css'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrap}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#contact" className={styles.btn}>
            <span>Konzultace zdarma</span>
            <span className={styles.arrow}>→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
