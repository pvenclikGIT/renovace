import { motion } from 'framer-motion'
import { IconArrow } from '../components/Icons'
import styles from './Hero.module.css'

const stats = [
  { num: '180+', label: 'dokončených koupelen' },
  { num: '~14 dní', label: 'běžná realizace' },
  { num: '10 let', label: 'záruka na těsnost' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <motion.div variants={stagger} initial="hidden" animate="show" className={styles.content}>
          <motion.div variants={item} className={styles.tag}>
            <span className={styles.tagDot} />
            Praha a Středočeský kraj
          </motion.div>

          <motion.h1 variants={item} className={styles.h1}>
            <span className={styles.line}>Koupelna bez bourání.</span>
            <span className={styles.line}>Rekonstrukce</span>
            <span className={`${styles.line} ${styles.lineGold}`}>v papučích.</span>
          </motion.h1>

          <motion.p variants={item} className={styles.sub}>
            Dopřejte své koupelně luxusní vzhled bez nekonečného chaosu. Specializujeme se na aplikaci epoxidových, cementových a pryskyřičných stěrek přímo na stávající obklady, čímž eliminujeme potřebu jakéhokoliv bourání. Celý proces je čistý, tloušťka materiálu nepřesáhne 3 mm.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Chci konzultaci zdarma
              <span className={styles.btnIcon}><IconArrow /></span>
            </a>
            <a href="#gallery" className={styles.btnGhost}>
              Prohlédnout realizace
            </a>
          </motion.div>

          <motion.div variants={item} className={styles.stats}>
            {stats.map((s, i) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
                {i < stats.length - 1 && <span className={styles.statDiv} />}
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className={styles.trust}>
            <span className={styles.trustDot} />
            Ozveme se do 24 hodin. Termín domluvíme během pár dnů.
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.right}>
        <motion.div
          className={styles.imgWrap}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/renovace/images/real-12.jpg" alt="Koupelna po realizaci cementové stěrky" />
          <div className={styles.imgOverlay} />
        </motion.div>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badgeTop}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeLabel}>Právě realizujeme</span>
          </div>
          <div className={styles.badgeText}>Cementová stěrka · Praha 6</div>
          <div className={styles.badgeSub}>Hotovo bez bourání</div>
        </motion.div>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Přejít dolů</span>
        </motion.div>
      </div>
    </section>
  )
}
