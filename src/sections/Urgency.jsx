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

const units = [
  { key: 'd', label: 'dní' },
  { key: 'h', label: 'hodin' },
  { key: 'm', label: 'minut' },
  { key: 's', label: 'sekund' },
]

export default function Urgency() {
  const time = useCountdown(6)
  const slots = 2

  return (
    <FadeIn>
      <section className={styles.section}>
        <div className={styles.inner}>

          {/* Left — text */}
          <div className={styles.left}>
            <span className={styles.pulse} aria-hidden="true" />
            <div className={styles.texts}>
              <p className={styles.title}>
                Zbývají <em>{slots}</em> volné termíny tento měsíc
              </p>
              <p className={styles.sub}>
                Realizace jsou rozepsané do konce měsíce. Konzultaci zarezervujte teď.
              </p>
            </div>
          </div>

          {/* Center — countdown */}
          <div className={styles.countdown}>
            {units.map(({ key, label }, i) => (
              <div key={key} className={styles.unitWrap}>
                <div className={styles.unit}>
                  <motion.span
                    key={time[key]}
                    className={styles.val}
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.22 }}
                  >
                    {String(time[key]).padStart(2, '0')}
                  </motion.span>
                  <span className={styles.unitLabel}>{label}</span>
                </div>
                {i < units.length - 1 && (
                  <span className={styles.sep} aria-hidden="true">:</span>
                )}
              </div>
            ))}
          </div>

          {/* Right — CTA */}
          <a href="#contact" className={styles.cta}>
            Zarezervovat termín
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

        </div>
      </section>
    </FadeIn>
  )
}
