import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import SectionHeader from '../components/SectionHeader'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'Drží stěrka opravdu na starých obkladech?',
    a: 'Ano — klíčem je správná příprava podkladu. Před aplikací každý povrch očistíme, odmaštíme a ošetříme adhezním přípravkem. Správně aplikovaná stěrka drží lépe než původní obklady.',
  },
  {
    q: 'Kolik to bude stát?',
    a: 'Cena závisí na velikosti, zvoleném materiálu a náročnosti povrchu. Průměrná koupelna 5–8 m² vyjde na 20 000–45 000 Kč včetně materiálu a práce. Přesnou nabídku dostanete po bezplatné prohlídce.',
  },
  {
    q: 'Jak je to s vlhkostí a vodou?',
    a: 'Epoxidové stěrky jsou 100% voděodolné a ideální do sprchových koutů, van i podlah. Cementové stěrky zapečetíme speciálním lakem pro maximální ochranu před vlhkostí.',
  },
  {
    q: 'Jak dlouho vydrží?',
    a: 'Při správné péči 10–20 let. Epoxidové stěrky jsou extrémně odolné — odolají chemikáliím, nárazu i stálé vlhkosti. Jednou za pár let doporučujeme nový povrchový lak pro zachování lesku.',
  },
  {
    q: 'Mohu si vybrat vlastní barvu?',
    a: 'Ano, nabízíme stovky odstínů dle vzorníku RAL i NCS. Nejoblíbenější jsou teplé béžové, šedé a antracitové tóny — ale záleží jen na vás. Poradíme s výběrem, který bude ladit s vaším interiérem.',
  },
  {
    q: 'Kdy mohu koupelnu začít používat?',
    a: 'Po dokončení finálního povrchu čekáme 18–24 hodin na vytvrzení. Poté je koupelna plně funkční. Doporučujeme prvních 7 dní šetrnější zacházení pro maximální životnost.',
  },
  {
    q: 'Co když se mi výsledek nebude líbit?',
    a: 'Proto společně volíme vzorek a barvu ještě před zahájením prací. Máte možnost schválení na fyzickém vzorku. Pracujeme s plnou garancí spokojenosti.',
  },
  {
    q: 'Jezdíte i mimo Prahu?',
    a: 'Pracujeme v Praze a celém Středočeském kraji. Pro větší projekty (3+ koupelny) přijedeme i dál — kontaktujte nás a domluvíme se.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
      <FadeIn>
        <SectionHeader
          tag="Časté otázky"
          title="Otázky, které<br /><em>pokládají všichni</em>"
        />
      </FadeIn>

      <div className={styles.columns}>
        <FadeIn delay={0.05}>
          <div className={styles.col}>
            {faqs.slice(0, half).map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className={styles.col}>
            {faqs.slice(half).map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
