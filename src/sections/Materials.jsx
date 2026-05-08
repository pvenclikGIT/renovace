import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Materials.module.css'

const materials = [
  {
    icon: '◈',
    name: 'Epoxidová stěrka',
    desc: 'Tvrdá jako kámen, hladká jako leštěný mramor. Nejodolnější volba s nulovou nasákavostí. Ideální pro sprchové kouty, vany i celé podlahy.',
    tags: ['Maximální odolnost', 'Lesklý povrch', 'Bezfugový', 'Voděodolný 100%'],
    ideal: 'Sprchové kouty, koupací vany, podlahy',
  },
  {
    icon: '◇',
    name: 'Cementová stěrka',
    desc: 'Minerální textura, Skandinávský klid. Přirozený, matný charakter připomínající beton. Oblíbená volba interiérových designérů.',
    tags: ['Matný povrch', 'Přírodní look', 'Betonový efekt', 'Teplé barevnosti'],
    ideal: 'Stěny, příčky, méně exponované podlahy',
  },
  {
    icon: '◉',
    name: 'Pryskyřičná stěrka',
    desc: 'Nejplastičtější z trojice. Lze tvarovat, barvit, kombinovat. Ideální pro designové vzory, ombré přechody nebo prémiové wellness prostory.',
    tags: ['Neomezené barvy', 'Prémiový segment', 'Kreativní vzory', 'Exkluzivní vzhled'],
    ideal: 'Design interiors, wellness, hotely',
  },
]

export default function Materials() {
  const [active, setActive] = useState(null)

  return (
    <section id="materials" className={styles.section}>
      <FadeIn>
        <SectionHeader
          light
          tag="Materiály"
          title="Tři <em>charaktery</em>,<br />jeden výsledek"
          lead="Každý materiál má svůj charakter, strukturu a vibe. Vybereme společně ten, který sedí vašemu prostoru."
        />
      </FadeIn>

      <div className={styles.grid}>
        {materials.map((m, i) => (
          <FadeIn key={m.name} delay={i * 0.12}>
            <div
              className={`${styles.card} ${active === i ? styles.cardActive : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className={styles.cardIcon}>{m.icon}</div>
              <h3 className={styles.cardName}>{m.name}</h3>
              <p className={styles.cardDesc}>{m.desc}</p>
              <div className={styles.ideal}>
                <span className={styles.idealLabel}>Vhodné pro:</span>
                <span>{m.ideal}</span>
              </div>
              <div className={styles.tags}>
                {m.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
