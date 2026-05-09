import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './BeforeAfter.module.css'

const pairs = [
  {
    label: 'Cementová stěrka · Praha 6',
    short: 'Praha 6',
    before: '/images/real-01.jpg',
    after:  '/images/real-12.jpg',
    beforeLabel: 'Před – staré obklady',
    afterLabel:  'Po – cementová stěrka',
  },
  {
    label: 'Epoxidová stěrka · Vinohrady',
    short: 'Vinohrady',
    before: '/images/real-07.jpg',
    after:  '/images/real-04.jpg',
    beforeLabel: 'Před – původní koupelna',
    afterLabel:  'Po – epoxidová stěrka',
  },
  {
    label: 'Cementová stěrka · Beroun',
    short: 'Beroun',
    before: '/images/real-05.jpg',
    after:  '/images/real-08.jpg',
    beforeLabel: 'Před – dlažba a obklady',
    afterLabel:  'Po – cementová stěrka',
  },
]

function Slider({ pair }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const ref = useRef(null)

  const calc = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  const onMouseMove = useCallback((e) => { if (dragging) calc(e.clientX) }, [dragging, calc])
  const onTouchMove = useCallback((e) => { calc(e.touches[0].clientX) }, [calc])

  useEffect(() => {
    const up = () => setDragging(false)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => { window.removeEventListener('mouseup', up); window.removeEventListener('touchend', up) }
  }, [])

  return (
    <div
      ref={ref}
      className={styles.slider}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseLeave={() => setDragging(false)}
    >
      {/* AFTER – full width bottom layer */}
      <img src={pair.after} alt={pair.afterLabel} className={styles.imgAfter} draggable={false} />

      {/* BEFORE – clipped top layer */}
      <div className={styles.beforeWrap} style={{ width: `${pos}%` }}>
        <img src={pair.before} alt={pair.beforeLabel} className={styles.imgBefore} draggable={false} />
      </div>

      {/* DIVIDER LINE */}
      <div className={styles.line} style={{ left: `${pos}%` }}>
        <div
          className={`${styles.handle} ${dragging ? styles.handleActive : ''}`}
          onMouseDown={() => setDragging(true)}
          onTouchStart={() => setDragging(true)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10l-4 0M6 10L3 7M6 10L3 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10l4 0M14 10l3-3M14 10l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* LABELS */}
      <div className={styles.labelBefore} style={{ opacity: pos > 15 ? 1 : 0 }}>
        <span className={styles.lblLong}>{pair.beforeLabel}</span>
        <span className={styles.lblShort}>Před</span>
      </div>
      <div className={styles.labelAfter} style={{ opacity: pos < 85 ? 1 : 0 }}>
        <span className={styles.lblLong}>{pair.afterLabel}</span>
        <span className={styles.lblShort}>Po</span>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0)

  return (
    <section id="beforeafter" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Před a po</div>
          <h2 className={styles.title}>Slova nestačí.<br/><em>Posuňte a uvidíte.</em></h2>
          <p className={styles.lead}>Táhněte posuvník doleva a doprava. Stejná koupelna – před stěrkou a po ní.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className={styles.tabs}>
          {pairs.map((p, i) => (
            <button
              key={i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabLong}>{p.label}</span>
              <span className={styles.tabShort}>{p.short}</span>
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className={styles.sliderWrap}>
          <Slider key={active} pair={pairs[active]} />
          <div className={styles.hint}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M4 8L1 5M4 8L1 11M12 8l3-3M12 8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Potáhněte posuvník
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={styles.cta}>
          <div className={styles.ctaLeft}>
            <strong>Chcete takhle vypadat vaše koupelna?</strong>
            <span>Konzultace a orientační cena do 24 hodin – zdarma.</span>
          </div>
          <a href="#contact" className={styles.ctaBtn}>
            Chci konzultaci zdarma
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
