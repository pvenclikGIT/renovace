import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Materials.module.css'

const materials = [
  {
    img: '/renovace/images/real-03.jpg',
    name: 'Epoxidová stěrka',
    desc: 'Tvrdá jako kámen, hladká jako leštěný mramor. Nejodolnější volba s nulovou nasákavostí. Standardní volba na podlahy a do mokrých zón.',
    tags: ['Maximální odolnost', 'Lesklý povrch', 'Bezfugový', '100% voděodolný'],
    ideal: 'Stěny i podlahy, sprchové kouty, vany, mokré provozy',
  },
  {
    img: '/renovace/images/real-04.jpg',
    name: 'Cementová stěrka',
    desc: 'Minerální textura, skandinávský klid. Přirozený matný charakter připomínající beton. Oblíbená volba designérů interiérů.',
    tags: ['Matný povrch', 'Přírodní look', 'Betonový efekt', 'Teplé tóny'],
    ideal: 'Stěny a méně exponované plochy. Na podlahy do mokrého provozu nedoporučujeme, tam volíme epoxid nebo pryskyřici.',
  },
  {
    img: '/renovace/images/real-15.webp',
    name: 'Pryskyřičná stěrka',
    desc: 'Nejplastičtější z trojice. Lze tvarovat, barvit, kombinovat. Pružná, takže snáší dilatační pohyby a podlahové topení.',
    tags: ['Neomezené barvy', 'Pružnost', 'Kreativní vzory', 'Exkluzivní vzhled'],
    ideal: 'Stěny i podlahy, podlahové topení, designové vzory a leštěné povrchy',
  },
]

export default function Materials() {
  return (
    <section id="materials" className={styles.section}>
      <FadeIn>
        <SectionHeader light tag="Materiály" title={`Tři <em>charaktery</em>, jeden výsledek`} lead="Každý materiál má svůj charakter. Vybereme společně ten, který sedí vašemu prostoru." />
      </FadeIn>
      <div className={styles.grid}>
        {materials.map((m, i) => (
          <FadeIn key={m.name} delay={i * 0.12}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={m.img} alt={m.name} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{m.name}</h3>
                <p className={styles.cardDesc}>{m.desc}</p>
                <div className={styles.ideal}>
                  <span className={styles.idealLabel}>Vhodné pro:</span>
                  {m.ideal}
                </div>
                <div className={styles.tags}>
                  {m.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
