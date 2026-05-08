import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './Calculator.module.css'

const complexities = [
  {
    id: 'standard',
    label: 'Standardní',
    desc: 'Rovné plochy, jednoduchý vzor',
    rate: 3000,
    badge: 'Nejčastější',
  },
  {
    id: 'medium',
    label: 'Střední náročnost',
    desc: 'Niky, rohy, více detailů',
    rate: 3750,
    badge: null,
  },
  {
    id: 'premium',
    label: 'Prémiové provedení',
    desc: 'Sprchový kout se žlabem, imitace mramoru, leštěné povrchy',
    rate: 4500,
    badge: 'Nejvyšší kvalita',
  },
]

function fmt(n) {
  return new Intl.NumberFormat('cs-CZ').format(Math.round(n / 500) * 500)
}
function fmtExact(n) {
  return new Intl.NumberFormat('cs-CZ').format(Math.round(n))
}

export default function Calculator() {
  const [floor, setFloor]     = useState(6)
  const [walls, setWalls]     = useState(16)
  const [complexity, setComp] = useState('standard')
  const [sent, setSent]       = useState(false)
  const [email, setEmail]     = useState('')

  const rate    = complexities.find(c => c.id === complexity)?.rate ?? 3000
  const total   = floor + walls
  const current = total * rate
  const low     = total * 3000
  const high    = total * 4500
  const saving  = Math.round(total * 8500 * 0.85)

  return (
    <section id="calculator" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Kalkulátor ceny</div>
          <h2 className={styles.title}>Kolik to bude stát?<br/><em>Zjistěte hned.</em></h2>
          <p className={styles.lead}>
            Cena <strong>3 000–4 500 Kč/m²</strong> zahrnuje práci i materiál bez DPH.
            Orientační výpočet za 30 sekund. Přesná nabídka po bezplatné prohlídce.
          </p>
        </div>
      </FadeIn>

      <div className={styles.grid}>

        {/* LEFT — inputs */}
        <FadeIn delay={0.1}>
          <div className={styles.inputs}>

            {/* Podlaha */}
            <div className={styles.group}>
              <div className={styles.sliderHead}>
                <div className={styles.groupLabel}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="8" width="12" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 8L5 1h4l4 7" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  Plocha podlahy
                </div>
                <div className={styles.sliderVal}>
                  <strong>{floor}</strong> m²
                </div>
              </div>
              <input
                type="range" min="1" max="20" step="1" value={floor}
                className={styles.range}
                onChange={e => setFloor(Number(e.target.value))}
              />
              <div className={styles.sliderMinMax}>
                <span>1 m²</span>
                <span className={styles.sliderMid}>průměr ~6 m²</span>
                <span>20 m²</span>
              </div>
            </div>

            {/* Stěny */}
            <div className={styles.group}>
              <div className={styles.sliderHead}>
                <div className={styles.groupLabel}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 5h12M5 1v12" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  Plocha stěn
                </div>
                <div className={styles.sliderVal}>
                  <strong>{walls}</strong> m²
                </div>
              </div>
              <input
                type="range" min="0" max="100" step="1" value={walls}
                className={styles.range}
                onChange={e => setWalls(Number(e.target.value))}
              />
              <div className={styles.sliderMinMax}>
                <span>0 m²</span>
                <span className={styles.sliderMid}>průměr ~16 m²</span>
                <span>100 m²</span>
              </div>
            </div>

            {/* Celkem info */}
            <div className={styles.totalRow}>
              <div className={styles.totalItem}>
                <span className={styles.totalLabel}>Podlaha</span>
                <span className={styles.totalVal}>{floor} m²</span>
              </div>
              <span className={styles.totalPlus}>+</span>
              <div className={styles.totalItem}>
                <span className={styles.totalLabel}>Stěny</span>
                <span className={styles.totalVal}>{walls} m²</span>
              </div>
              <span className={styles.totalPlus}>=</span>
              <div className={`${styles.totalItem} ${styles.totalItemBig}`}>
                <span className={styles.totalLabel}>Celkem</span>
                <span className={styles.totalVal}>{total} m²</span>
              </div>
            </div>

            {/* Náročnost */}
            <div className={styles.group}>
              <div className={styles.groupLabel}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.5 3.5L13 5l-3 3 .5 4L7 10.5l-3.5 1.5.5-4L1 5l4.5-.5L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                Náročnost provedení
              </div>
              <div className={styles.compGrid}>
                {complexities.map(c => (
                  <button
                    key={c.id}
                    className={`${styles.compBtn} ${complexity === c.id ? styles.compBtnActive : ''}`}
                    onClick={() => setComp(c.id)}
                  >
                    <div className={styles.compTop}>
                      <span className={styles.compName}>{c.label}</span>
                      {c.badge && (
                        <span className={`${styles.compBadge} ${c.id === 'premium' ? styles.compBadgePrem : ''}`}>
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <span className={styles.compDesc}>{c.desc}</span>
                    <span className={styles.compRate}>{fmtExact(c.rate)} Kč/m²</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Co je v ceně */}
            <div className={styles.inPrice}>
              <div className={styles.inPriceTitle}>V ceně zahrnuto</div>
              <ul className={styles.inPriceList}>
                {[
                  'Veškerý materiál (stěrka, penetrace, lak)',
                  'Kompletní práce včetně přípravy podkladu',
                  'Skelná perlinka a adhezní přípravek',
                  'Finální polyuretanový lak nebo vosk',
                  'Úklid po dokončení prací',
                ].map(item => (
                  <li key={item}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <circle cx="6.5" cy="6.5" r="6" stroke="#C9963C" strokeWidth="1"/>
                      <path d="M4 6.5l2 2 3-3" stroke="#C9963C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </FadeIn>

        {/* RIGHT — result */}
        <FadeIn delay={0.2}>
          <div className={styles.result}>

            <div className={styles.resultTop}>
              <div className={styles.resultLabel}>Orientační cena celkem</div>
              <motion.div
                key={current}
                className={styles.resultPrice}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16,1,0.3,1] }}
              >
                {fmt(current)} Kč
              </motion.div>
              <div className={styles.resultSub}>
                bez DPH · {total} m² · {fmtExact(rate)} Kč/m²
              </div>
            </div>

            {/* Breakdown */}
            <div className={styles.breakdown}>
              <div className={styles.breakRow}>
                <span>Podlaha {floor} m² × {fmtExact(rate)} Kč</span>
                <span>{fmtExact(floor * rate)} Kč</span>
              </div>
              <div className={styles.breakRow}>
                <span>Stěny {walls} m² × {fmtExact(rate)} Kč</span>
                <span>{fmtExact(walls * rate)} Kč</span>
              </div>
              <div className={`${styles.breakRow} ${styles.breakTotal}`}>
                <span>Celkem orientačně</span>
                <span>{fmt(current)} Kč</span>
              </div>
            </div>

            {/* Range bar */}
            <div className={styles.rangeBox}>
              <div className={styles.rangeRow}>
                <div className={styles.rangeItem}>
                  <span className={styles.rangeItemLabel}>Minimum</span>
                  <span className={styles.rangeItemVal}>{fmt(low)} Kč</span>
                  <span className={styles.rangeItemNote}>3 000 Kč/m²</span>
                </div>
                <div className={styles.rangeDivider} />
                <div className={styles.rangeItem}>
                  <span className={styles.rangeItemLabel}>Maximum</span>
                  <span className={styles.rangeItemVal}>{fmt(high)} Kč</span>
                  <span className={styles.rangeItemNote}>4 500 Kč/m²</span>
                </div>
              </div>
              <div className={styles.rangeBar}>
                <div className={styles.rangeBarFill} style={{ width: `${((rate - 3000) / 1500) * 100}%` }} />
                <div className={styles.rangeBarThumb} style={{ left: `${((rate - 3000) / 1500) * 100}%` }} />
              </div>
              <div className={styles.rangeBarLabels}>
                <span>Standardní</span>
                <span>Prémiové</span>
              </div>
            </div>

            {/* Savings */}
            <div className={styles.savingsBox}>
              <div className={styles.savingsLabel}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1l1.5 3.5L12 5l-3 3 .5 4L6.5 10.5 3 12l.5-4L.5 5l4-.5L6.5 1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
                </svg>
                Oproti klasické rekonstrukci ušetříte
              </div>
              <div className={styles.savingsAmt}>až {fmt(saving)} Kč</div>
              <div className={styles.savingsNote}>
                Klasická rekonstrukce s bouráním: 8 500–12 000 Kč/m² (obklady + lepidlo + práce + odvoz suti)
              </div>
            </div>

            <div className={styles.disclaimer}>
              Kalkulátor je orientační bez DPH. Výsledná cena závisí na konkrétním stavu podkladu
              a přesném rozměření. Závaznou nabídku dostanete po bezplatné prohlídce — přijíždíme do 48 h.
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" className={styles.sentMsg}
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#4CAF50" strokeWidth="1.5"/>
                    <path d="M6 10l3 3 5-5" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Odesláno! Ozveme se do 24 hodin s přesnou nabídkou.
                </motion.div>
              ) : (
                <motion.div key="form" className={styles.emailRow} exit={{ opacity: 0 }}>
                  <div className={styles.emailLabel}>Chcete přesnou nabídku na e-mail?</div>
                  <div className={styles.emailFlex}>
                    <input type="email" placeholder="váš@email.cz" value={email}
                      onChange={e => setEmail(e.target.value)} className={styles.emailInput} />
                    <button className={styles.emailBtn} onClick={() => email && setSent(true)}>
                      Odeslat
                    </button>
                  </div>
                  <div className={styles.emailNote}>
                    Nebo nás rovnou kontaktujte —&nbsp;
                    <a href="#contact">konzultace zdarma →</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
