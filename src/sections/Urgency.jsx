import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './Urgency.module.css'

function useCountdown(targetDays) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const end = new Date()
    end.setDate(end.getDate() + targetDays)
    end.setHours(18, 0, 0, 0)
    const tick = () => {
      const diff = end - Date.now()
      if (diff <= 0) return
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [targetDays])
  return time
}

export default function Urgency() {
  const { d, h, m, s } = useCountdown(6)
  const slots = 2

  return (
    <FadeIn>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.pulse} />
            <div className={styles.texts}>
              <div className={styles.title}>
                Zbývají <em>{slots}</em> volné termíny tento měsíc
              </div>
              <div className={styles.sub}>
                Realizace jsou rozepsané do konce měsíce. Konzultaci zarezervujte teď.
              </div>
            </div>
          </div>

          <div className={styles.countdown}>
            {[
              { val: d, label: 'dní' },
              { val: h, label: 'hodin' },
              { val: m, label: 'minut' },
              { val: s, label: 'sekund' },
            ].map(({ val, label }) => (
              <div key={label} className={styles.unit}>
                <motion.div
                  key={val}
                  className={styles.val}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {String(val).padStart(2, '0')}
                </motion.div>
                <div className={styles.unitLabel}>{label}</div>
              </div>
            ))}
            <div className={styles.countdownLabel}>do konce nabídky volných termínů</div>
          </div>

          <a href="#contact" className={styles.cta}>
            Zarezervovat termín
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </FadeIn>
  )
}
