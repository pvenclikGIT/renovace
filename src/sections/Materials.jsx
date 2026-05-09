import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Materials.module.css'

const materials = [
  {
    img: '/renovace/images/real-03.jpg',
    name: 'Epoxidová stěrka',
    desc: 'Tvrdá jako kámen, hladká jako leštěný mramor. Nejodolnější volba s nulovou nasákavostí. Ideální pro sprchové kouty a podlahy.',
    tags: ['Maximální odolnost', 'Lesklý povrch', 'Bezfugový', '100% voděodolný'],
    ideal: 'Sprchové kouty, vany, podlahy',
  },
  {
    img: '/renovace/images/real-04.jpg',
    name: 'Cementová stěrka',
    desc: 'Minerální textura, skandinávský klid. Přirozený matný charakter připomínající beton. Oblíbená volba designérů interiérů.',
    tags: ['Matný povrch', 'Přírodní look', 'Betonový efekt', 'Teplé tóny'],
    ideal: 'Stěny, příčky, méně exponované plochy',
  },
  {
    img: '/renovace/images/real-15.webp',
    name: 'Pryskyřičná stěrka',
    desc: 'Nejplastičtější z trojice. Lze tvarovat, barvit, kombinovat. Ideální pro designové vzory a prémiové wellness prostory.',
    tags: ['Neomezené barvy', 'Prémiový segment', 'Kreativní vzory', 'Exkluzivní vzhled'],
    ideal: 'Design interiéry, wellness, hotely',
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
