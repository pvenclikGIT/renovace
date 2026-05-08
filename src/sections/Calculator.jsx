import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './Calculator.module.css'

const materials = [
  { id: 'cement', label: 'Cementová stěrka', desc: 'Matný beton efekt', mult: 1.0 },
  { id: 'epoxy',  label: 'Epoxidová stěrka', desc: 'Lesklý, voděodolný', mult: 1.2 },
  { id: 'resin',  label: 'Pryskyřičná stěrka', desc: 'Prémiový design', mult: 1.45 },
]

const BASE_FLOOR = 2800   // Kč/m² podlaha
const BASE_WALL  = 2200   // Kč/m² stěny

function fmt(n) {
  return new Intl.NumberFormat('cs-CZ').format(Math.round(n))
}

export default function Calculator() {
  const [floor, setFloor]     = useState(6)
  const [walls, setWalls]     = useState(14)
  const [mat, setMat]         = useState('cement')
  const [condition, setCond]  = useState('good')
  const [sent, setSent]       = useState(false)
  const [email, setEmail]     = useState('')

  const condMult = condition === 'good' ? 1 : condition === 'fair' ? 1.12 : 1.22
  const matMult  = materials.find(m => m.id === mat)?.mult ?? 1
  const low  = Math.round((floor * BASE_FLOOR + walls * BASE_WALL) * matMult * condMult * 0.92 / 1000) * 1000
  const high = Math.round((floor * BASE_FLOOR + walls * BASE_WALL) * matMult * condMult * 1.08 / 1000) * 1000
  const saved = Math.round((floor * 5800 + walls * 4400) * 0.95 / 1000) * 1000

  return (
    <section id="calculator" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Kalkulátor ceny</div>
          <h2 className={styles.title}>Kolik to bude stát?<br/><em>Zjistěte hned.</em></h2>
          <p className={styles.lead}>Orientační cena za 30 sekund. Přesná nabídka po bezplatné prohlídce.</p>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {/* LEFT — inputs */}
        <FadeIn delay={0.1}>
          <div className={styles.inputs}>

            {/* Material */}
            <div className={styles.group}>
              <div className={styles.groupLabel}>Typ materiálu</div>
              <div className={styles.matGrid}>
                {materials.map(m => (
                  <button
                    key={m.id}
                    className={`${styles.matBtn} ${mat === m.id ? styles.matBtnActive : ''}`}
                    onClick={() => setMat(m.id)}
                  >
                    <span className={styles.matName}>{m.label}</span>
                    <span className={styles.matDesc}>{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Floor */}
            <div className={styles.group}>
              <div className={styles.sliderHead}>
                <div className={styles.groupLabel}>Plocha podlahy</div>
                <div className={styles.sliderVal}><strong>{floor}</strong> m²</div>
              </div>
              <input
                type="range" min="2" max="30" step="1" value={floor}
                className={styles.range}
                onChange={e => setFloor(Number(e.target.value))}
              />
              <div className={styles.sliderMinMax}><span>2 m²</span><span>30 m²</span></div>
            </div>

            {/* Walls */}
            <div className={styles.group}>
              <div className={styles.sliderHead}>
                <div className={styles.groupLabel}>Plocha stěn</div>
                <div className={styles.sliderVal}><strong>{walls}</strong> m²</div>
              </div>
              <input
                type="range" min="0" max="50" step="1" value={walls}
                className={styles.range}
                onChange={e => setWalls(Number(e.target.value))}
              />
              <div className={styles.sliderMinMax}><span>0 m²</span><span>50 m²</span></div>
            </div>

            {/* Condition */}
            <div className={styles.group}>
              <div className={styles.groupLabel}>Stav podkladu</div>
              <div className={styles.condRow}>
                {[
                  { id: 'good', label: 'Dobrý', desc: 'Pevné, rovné obklady' },
                  { id: 'fair', label: 'Průměrný', desc: 'Drobné nerovnosti' },
                  { id: 'poor', label: 'Špatný', desc: 'Velké nerovnosti' },
                ].map(c => (
                  <button
                    key={c.id}
                    className={`${styles.condBtn} ${condition === c.id ? styles.condBtnActive : ''}`}
                    onClick={() => setCond(c.id)}
                  >
                    <span className={styles.condLabel}>{c.label}</span>
                    <span className={styles.condDesc}>{c.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

        {/* RIGHT — result */}
        <FadeIn delay={0.2}>
          <div className={styles.result}>
            <div className={styles.resultTop}>
              <div className={styles.resultLabel}>Orientační cena</div>
              <motion.div
                key={`${low}-${high}`}
                className={styles.resultPrice}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
              >
                {fmt(low)} – {fmt(high)} Kč
              </motion.div>
              <div className={styles.resultSub}>vč. materiálu a práce · bez DPH</div>
            </div>

            <div className={styles.savingsBox}>
              <div className={styles.savingsLabel}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4 7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                Oproti klasické rekonstrukci ušetříte
              </div>
              <div className={styles.savingsAmt}>až {fmt(saved)} Kč</div>
              <div className={styles.savingsNote}>bez nákladů na bourání, odvoz suti a nové obklady</div>
            </div>

            <div className={styles.breakdown}>
              <div className={styles.breakRow}>
                <span>Podlaha {floor} m²</span>
                <span>{fmt(floor * BASE_FLOOR * matMult * condMult)} Kč</span>
              </div>
              <div className={styles.breakRow}>
                <span>Stěny {walls} m²</span>
                <span>{fmt(walls * BASE_WALL * matMult * condMult)} Kč</span>
              </div>
              <div className={`${styles.breakRow} ${styles.breakTotal}`}>
                <span>Celkem orientačně</span>
                <span>{fmt(low)} – {fmt(high)} Kč</span>
              </div>
            </div>

            <div className={styles.disclaimer}>
              Kalkulátor je orientační. Přesná cena závisí na stavu podkladu a detailech prostoru.
              Po bezplatné prohlídce dostanete závaznou nabídku.
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  className={styles.sentMsg}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#4CAF50" strokeWidth="1.5"/>
                    <path d="M7 11l3 3 5-5" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Odesláno! Ozveme se do 24 hodin.
                </motion.div>
              ) : (
                <motion.div key="form" className={styles.emailRow} exit={{ opacity: 0 }}>
                  <input
                    type="email"
                    placeholder="váš@email.cz"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.emailInput}
                  />
                  <button
                    className={styles.emailBtn}
                    onClick={() => email && setSent(true)}
                  >
                    Chci přesnou nabídku
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
