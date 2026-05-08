import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import styles from './Hero.module.css'

const stats = [
  { num: '180+', label: 'Realizací' },
  { num: '3 dny', label: 'Průměrná doba' },
  { num: '10 let', label: 'Záruka kvality' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.tag}>
            <span className={styles.tagDot} />
            Praha & Středočeský kraj
          </motion.div>

          <motion.h1 variants={item} className={styles.h1}>
            <span className={styles.line}>Nová</span>
            <span className={styles.line}>koupelna</span>
            <span className={styles.line}><em>bez bourání.</em></span>
          </motion.h1>

          <motion.p variants={item} className={styles.sub}>
            Epoxidové, pryskyřičné a cementové stěrky přímo na stávající obklady.
            Žádný prach, žádný chaos — výsledek za 3 dny.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Konzultace zdarma <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a href="#gallery" className={styles.btnGhost}>
              Realizace <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </motion.div>

          <motion.div variants={item} className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.right}>
        <motion.div
          className={styles.imgWrap}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.placeholder}>
            <div className={styles.placeholderInner}>
              <span>🛁</span>
              <p>Fotografie realizace</p>
              <small>Nahraďte vlastním snímkem</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badgeTop}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeLabel}>Bez demolice</span>
          </div>
          <div className={styles.badgeText}>Tloušťka pouhé 2–3 mm</div>
        </motion.div>
      </div>
    </section>
  )
}
