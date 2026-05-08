import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import styles from './RealizaceMap.module.css'

const districts = [
  { id: 'p1',  label: 'Praha 1',  x: 310, y: 195, count: 8  },
  { id: 'p2',  label: 'Praha 2',  x: 340, y: 225, count: 14 },
  { id: 'p3',  label: 'Praha 3',  x: 380, y: 200, count: 19 },
  { id: 'p4',  label: 'Praha 4',  x: 360, y: 270, count: 22 },
  { id: 'p5',  label: 'Praha 5',  x: 260, y: 240, count: 16 },
  { id: 'p6',  label: 'Praha 6',  x: 255, y: 175, count: 18 },
  { id: 'p7',  label: 'Praha 7',  x: 300, y: 160, count: 11 },
  { id: 'p8',  label: 'Praha 8',  x: 360, y: 155, count: 15 },
  { id: 'p9',  label: 'Praha 9',  x: 415, y: 165, count: 9  },
  { id: 'p10', label: 'Praha 10', x: 420, y: 225, count: 17 },
  { id: 'p13', label: 'Praha 13', x: 215, y: 270, count: 7  },
  { id: 'kladno', label: 'Kladno',  x: 160, y: 100, count: 5  },
  { id: 'beroun', label: 'Beroun',  x: 155, y: 300, count: 6  },
  { id: 'mnichovo', label: 'Mn. Hradiště', x: 480, y: 100, count: 3 },
  { id: 'brandys', label: 'Brandýs n. L.', x: 460, y: 130, count: 4 },
]

const total = districts.reduce((s, d) => s + d.count, 0)

export default function RealizaceMap() {
  const [hovered, setHovered] = useState(null)
  const active = hovered ? districts.find(d => d.id === hovered) : null

  return (
    <section id="map" className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div className={styles.header}>
            <div className={styles.tag}><span className={styles.tagDot}/>Kde pracujeme</div>
            <h2 className={styles.title}>Děláme ve vaší čtvrti.<br/><em>{total} realizací</em> a přibývá.</h2>
            <p className={styles.lead}>Praha a celý Středočeský kraj. Najeďte myší na oblast a uvidíte počet realizací.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.mapWrap}>
            {/* Simplified SVG map of Prague districts */}
            <svg viewBox="80 60 480 320" className={styles.svg} aria-label="Mapa realizací BezSpár.cz">
              {/* Background region */}
              <ellipse cx="320" cy="230" rx="200" ry="140" fill="#F0EDE8" stroke="#E2DED8" strokeWidth="1"/>
              {/* Středočeský kraj hint */}
              <ellipse cx="320" cy="230" rx="245" ry="175" fill="none" stroke="#E2DED8" strokeWidth="1" strokeDasharray="4 4"/>

              {/* District dots */}
              {districts.map(d => {
                const isHov = hovered === d.id
                const size = Math.max(10, Math.min(22, d.count * 0.7))
                return (
                  <g key={d.id}
                    onMouseEnter={() => setHovered(d.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Pulse ring */}
                    {isHov && (
                      <circle cx={d.x} cy={d.y} r={size + 8} fill="rgba(201,150,60,0.15)" stroke="rgba(201,150,60,0.3)" strokeWidth="1"/>
                    )}
                    <circle
                      cx={d.x} cy={d.y}
                      r={isHov ? size + 3 : size}
                      fill={isHov ? '#C9963C' : '#1A1A1A'}
                      stroke="white"
                      strokeWidth="2"
                      style={{ transition: 'r 0.2s, fill 0.2s' }}
                    />
                    <text
                      x={d.x} y={d.y + 4}
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="800"
                      fill="white"
                      fontFamily="Poppins, sans-serif"
                      style={{ pointerEvents: 'none' }}
                    >
                      {d.count}
                    </text>
                    {/* Label */}
                    <text
                      x={d.x} y={d.y + size + 14}
                      textAnchor="middle"
                      fontSize="8"
                      fontWeight="500"
                      fill={isHov ? '#C9963C' : '#888'}
                      fontFamily="Poppins, sans-serif"
                      style={{ pointerEvents: 'none', transition: 'fill 0.2s' }}
                    >
                      {d.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Tooltip */}
            <div className={`${styles.tooltip} ${active ? styles.tooltipVisible : ''}`}>
              {active && (
                <>
                  <div className={styles.ttLabel}>{active.label}</div>
                  <div className={styles.ttCount}>{active.count} realizací</div>
                </>
              )}
            </div>

            {/* Legend */}
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#1A1A1A', width: 14, height: 14 }} />
                <span>Realizace v oblasti</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#C9963C', width: 14, height: 14 }} />
                <span>Najeďte myší pro detail</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.stats}>
            {[
              { num: `${total}+`, label: 'Realizací celkem' },
              { num: '15', label: 'Oblastí Prahy' },
              { num: '48 h', label: 'Termín prohlídky' },
              { num: '100%', label: 'Spokojenost klientů' },
            ].map(s => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
