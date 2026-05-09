import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Faq.module.css'

const faqs = [
  { q: 'Kolik to stojí? Kde se vzala ta cena?', a: 'Průměrná koupelna 5 až 8 m² s aplikací stěrky na stěny i podlahu vyjde na 18 000 až 45 000 Kč. Cena závisí na velikosti, zvoleném materiálu a stavu podkladu. Po prohlídce dostanete pevnou nabídku, bez skrytých položek a bez možnosti doúčtování.' },
  { q: 'Jak dlouho bude koupelna mimo provoz?', a: 'Při dodržení technologických postupů je celá koupelna běžně hotová do 14 dnů, ve výjimečných případech zvládneme i kratší termín, třeba do týdne. Klasická rekonstrukce s bouráním přitom trvá 1 až 2 měsíce. Po posledním lakování vyčkáte 24 hodin, pak je koupelna plně funkční. Plnou chemickou odolnost (šampony, čisticí prostředky) má povrch po 7 dnech, na to vás upozorníme dopředu.' },
  { q: 'Drží to na starých kachličkách? Fakt?', a: 'Ano. Epoxidová chemie se na minerální podklad po správném přebroušení a ošetření adhezním přípravkem váže silněji než původní lepidlo. Kritický detail: skelná perlinka ve spodní vrstvě zabrání pnutí nad původními spárami. Bez ní by stěrka mohla po čase prasknout, s ní nepraská.' },
  { q: 'Která stěrka kam patří?', a: 'Cementovou stěrku používáme na stěny a méně exponované plochy. Na podlahy do koupelny ji nedoporučujeme. Tam volíme epoxidovou nebo pryskyřičnou stěrku, které snášejí trvalou vlhkost, mokrý provoz i podlahové topení. Při konzultaci vždy navrhneme materiál podle konkrétní plochy a způsobu užívání.' },
  { q: 'Co se stane, když se stěrka poškodí?', a: 'Lokální oprava je možná. Povrch se v poškozené oblasti přebrousí, zatmelí a nalakuje. Výsledek není stoprocentně neviditelný, ale výrazně méně nápadný než u keramiky, kde nikdy neseženete stejnou sérii dlaždic. Větší šok absorbuje pryskyřice lépe než keramika.' },
  { q: 'Jak se o stěrku starám?', a: 'Stačí pH neutrální čisticí prostředky. Žádné abrazivní pískovce ani drátěnky. Jednou za pár let lze nanést novou vrstvu finálního laku, který povrch "omladí". Nedoporučujeme nechávat stát agresivní chemii (odstraňovač rtěnky, aceton) déle než nutno.' },
  { q: 'Kde je háček? Proč to není všude?', a: 'Háček je v aplikaci. Stěrka je technologicky náročná. Špatně provedená praská, puchýřuje nebo nedrží. Proto je na trhu hodně levných firem se špatnými referencemi. My děláme stěrky denně, máme certifikace materiálů a záruční list ke každé zakázce.' },
  { q: 'Jezdíte jen do Prahy?', a: 'Primárně Praha a Středočeský kraj. Pro větší projekty (3 a více koupelen) přijedeme i dál. Kontaktujte nás a domluvíme se.' },
  { q: 'Mohu si objednat vzorek domů?', a: 'Ano, a doporučujeme to. Fyzický vzorek ve vaší koupelně při vašem osvětlení je jiný zážitek než fotka na monitoru. Při konzultaci přivezeme vzorkovou desku nebo ji zašleme poštou. Povrch si osaháte, přiložíte k bateriím a nábytku.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button className={styles.question} onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        <span className={styles.toggle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className={styles.answer}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const half = Math.ceil(faqs.length / 2)
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <SectionHeader
            tag="Časté otázky"
            title={`Ptáte se. Tady jsou <em>přímé odpovědi.</em>`}
            lead="Bez marketingového kecu. Otázky, které dostáváme nejčastěji, a odpovědi, které vás skutečně odblokují."
          />
        </FadeIn>
        <div className={styles.columns}>
          <FadeIn delay={0.05}>
            <div className={styles.col}>{faqs.slice(0, half).map(f => <FaqItem key={f.q} {...f} />)}</div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className={styles.col}>{faqs.slice(half).map(f => <FaqItem key={f.q} {...f} />)}</div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
