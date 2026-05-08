import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import { IconNoDemo, IconDust, IconTime, IconPrice, IconWater, IconShield, IconLeaf, IconWarm, IconPaint } from '../components/Icons'
import styles from './Why.module.css'

const features = [
  { Icon: IconTime, title: 'Koupelna za 3 dny, ne za 3 týdny', text: 'Tradiční rekonstrukce s bouráním paralyzuje váš byt na 3–6 týdnů. Stěrka jde přímo na stávající obklady — přijdeme v pondělí, v pátek předáváme hotovou koupelnu.' },
  { Icon: IconDust, title: 'Nulový prach. Žádný chaos.', text: 'Bourání keramiky = centimetry prachu ve skříních, v posteli, v elektronice. Aplikace stěrky je mokrý proces s odsáváním. Zbytek bytu zůstane přesně takový, jaký byl.' },
  { Icon: IconPrice, title: 'Cena, která se nemění', text: 'Vícepráce u nás neexistují. Cenu dostanete po prohlídce — závaznou. Žádné "to jsme nečekali" a žádné faktury, ze kterých spadnete ze židle.' },
  { Icon: IconWater, title: 'Voděodolnost v každém centimetru', text: 'Stěrka tvoří neprostupný monolit. Na rozdíl od dlažby, kde může voda pronikat poškozenou spárou pod obklad a roky nepozorovaně podemílat konstrukci.' },
  { Icon: IconShield, title: 'Odolnost na 10–15 let', text: 'Správně aplikovaná stěrka přežije vše, co do koupelny přijde — parfémy, barvicí sady, chemii i každodenní sprchování celé rodiny. Záruční list to potvrzuje.' },
  { Icon: IconLeaf, title: 'Ekologická volba bez kompromisů', text: 'Tradiční rekonstrukce = stovky kilogramů suti na skládce. Stěrka starou keramiku neprobourá — jen ji překryje. Méně odpadu, méně energie, stejný výsledek.' },
  { Icon: IconWarm, title: 'Teplo pod nohama, nižší účty', text: 'Vrstva 2–3 mm má minimální tepelnou setrvačnost. Podlahové topení reaguje okamžitě — nehřeje centimetry lepidla a keramiky, ale rovnou prostor. Úspora energie měřitelná.' },
  { Icon: IconPaint, title: 'Design bez kompromisů', text: 'Stovky odstínů, matný i lesklý povrch, betonový efekt, mramorování. Stěrku vytáhnete na stěny, podlahu i pult pod umyvadlem — vše splyne v jeden celistvý materiál.' },
]

export default function Why() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.visual}>
        <img src="/renovace/images/real-06.jpg" alt="Sprchový kout bez spár" />
        <div className={styles.visualOverlay} />
        <div className={styles.quoteWrap}>
          <svg className={styles.quoteIcon} width="36" height="28" viewBox="0 0 36 28" fill="none">
            <path d="M0 28V16.8C0 7.5 5.6 1.9 16.8 0l1.9 3.7c-6.5 1.9-9.8 4.7-10.3 9.1H15V28H0zm20 0V16.8C20 7.5 25.6 1.9 36.8 0L38.7 3.7c-6.5 1.9-9.8 4.7-10.3 9.1H35V28H20z" fill="white" opacity="0.18"/>
          </svg>
          <blockquote className={styles.quote}>
            Koupelna hotová za 3 dny. Bez jediného zrnka prachu jinde v bytě. Nevěřila jsem, že to jde.
          </blockquote>
          <div className={styles.quoteAuthor}>
            <div className={styles.quoteAvatar}>KV</div>
            <div>
              <div className={styles.quoteName}>Kristýna V.</div>
              <div className={styles.quoteLoc}>Praha 3 · Cementová stěrka</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <FadeIn>
          <SectionHeader
            tag="8 důvodů, proč ne bourání"
            title={`Tradiční rekonstrukce\nvs. <em>stěrka na obklady</em>`}
            lead="Výsledek je stejný. Cesta k němu je diametrálně odlišná. Zde je osm konkrétních důvodů, proč si klienti vybírají stěrku."
          />
        </FadeIn>
        <div className={styles.features}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07}>
              <div className={styles.feature}>
                <div className={styles.iconWrap}><f.Icon /></div>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureText}>{f.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
