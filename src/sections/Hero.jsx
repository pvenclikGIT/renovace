import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

const stats = [
  { num: '180+', label: 'Dokončených koupelen' },
  { num: '3', label: 'Dny realizace průměrně' },
  { num: '10+', label: 'Let životnost stěrky' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.tag}>
            <span className={styles.tagLine} />
            Praha & Středočeský kraj
          </motion.div>

          <motion.h1 variants={item} className={styles.h1}>
            Nová koupelna.<br />
            <em>Bez bourání.</em><br />
            Za 3 dny.
          </motion.h1>

          <motion.p variants={item} className={styles.sub}>
            Epoxidové, pryskyřičné a cementové stěrky přímo na stávající
            obklady a dlažbu. Žádný prach. Žádný chaos. Výsledek, který
            vydrží desetiletí.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Konzultace zdarma
            </a>
            <a href="#gallery" className={styles.btnGhost}>
              Prohlédnout realizace
              <ArrowRight size={15} strokeWidth={1.5} />
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
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Replace src with your own photo */}
          <div className={styles.placeholder}>
            <div className={styles.placeholderInner}>
              <span className={styles.placeholderIcon}>✦</span>
              <p>Fotografie realizace</p>
              <span>Nahraďte vlastním snímkem koupelny</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.badgeLabel}>Bez demolice</span>
          <p className={styles.badgeText}>
            Stěrka přímo na stávající obklady — tloušťka pouhé 2–3 mm
          </p>
        </motion.div>
      </div>
    </section>
  )
}
