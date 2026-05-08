import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import styles from './Comparison.module.css'

const rows = [
  { cat: 'Plíseň ve spárách',         sterka: 'Neexistuje',                    classic: 'Nevyhnutelná',              win: true },
  { cat: 'Čas na úklid',              sterka: 'Pár minut hadrem',              classic: 'Půl hodiny s chemií',       win: true },
  { cat: 'Bakterie a biofilm',        sterka: 'Žádné',                         classic: 'Ve spárách vždy',           win: true },
  { cat: 'Změna barvy koupelny',      sterka: 'Kdykoli, bez bourání',          classic: 'Nutné celé bourání',        win: true },
  { cat: 'Vodní kámen',               sterka: 'Snadno otřít',                  classic: 'Usazuje se trvale',         win: true },
  { cat: 'Prach a hluk při realizaci',sterka: 'Žádný',                         classic: 'Týdny chaosu',              win: true },
  { cat: 'Vizuální dojem',            sterka: 'Luxusní plynulost',             classic: 'Mřížka spár',               win: true },
  { cat: 'Oprava poškození',          sterka: 'Lokální přetření',              classic: 'Výměna dlaždice + shánění série', win: true },
  { cat: 'Počet spár',                sterka: 'Nulový',                        classic: 'Stovky metrů',              win: true },
  { cat: 'Tloušťka vrstvy',           sterka: 'Jen 2–3 mm',                   classic: 'Zvyšuje výšku podlahy',     win: true },
  { cat: 'Podlahové topení',          sterka: 'Lepší vedení tepla',            classic: 'Horší tepelná vodivost',    win: true },
  { cat: 'Alergie a plísňové spory',  sterka: 'Eliminovány',                   classic: 'Spáry jsou zdrojem spor',   win: true },
  { cat: 'Životnost povrchu',         sterka: 'Dekády bez degradace',          classic: 'Spáry praskají a žloutnou', win: true },
  { cat: 'Protiskluzová úprava',      sterka: 'Volitelná, certif. R10/R11',    classic: 'Omezené možnosti',          win: true },
  { cat: 'Zápach z koupelny',         sterka: 'Žádný skrytý zdroj',           classic: 'Plíseň ve spárách zapáchá', win: true },
  { cat: 'Agresivní chemie na úklid', sterka: 'Nepotřebná',                    classic: 'Nutná pravidelně',          win: true },
  { cat: 'Sjednocení povrchů',        sterka: 'Stěny + podlaha + nábytek',    classic: 'Různé povrchy a spáry',     win: true },
  { cat: 'Průsak vody pod povrch',    sterka: 'Zcela eliminován',             classic: 'Riziko podmáčení',           win: true },
  { cat: 'Ekologická zátěž',          sterka: 'Minimum odpadu',               classic: 'Suť, obaly, chemie',        win: true },
  { cat: 'Cena rekonstrukce',         sterka: 'Výrazně nižší celkově',        classic: 'Bourání + odvoz + práce',   win: true },
]

const PREVIEW = 8

export default function Comparison() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? rows : rows.slice(0, PREVIEW)

  return (
    <section id="comparison" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Srovnání
          </div>
          <h2 className={styles.title}>
            Stěrka vs. klasické obklady.<br />
            <em>20 kategorií. 20–0.</em>
          </h2>
          <p className={styles.lead}>
            Neříkáme, že stěrka je lepší ve všem. Říkáme, ať si to porovnáte sami — kategorie po kategorii.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className={styles.tableWrap}>
          <div className={styles.tableHead}>
            <div className={styles.thCat}>Kategorie</div>
            <div className={`${styles.thCol} ${styles.thSterka}`}>
              <span className={styles.thBadge}>Stěrka bez obkladů</span>
            </div>
            <div className={`${styles.thCol} ${styles.thClassic}`}>
              <span className={styles.thBadgeGray}>Klasické obklady</span>
            </div>
          </div>

          <div className={styles.tableBody}>
            {visible.map((row, i) => (
              <motion.div
                key={row.cat}
                className={styles.row}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.rowCat}>{row.cat}</div>
                <div className={`${styles.rowVal} ${styles.rowSterka}`}>
                  <span className={styles.winIcon}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" fill="rgba(201,150,60,0.12)" stroke="rgba(201,150,60,0.4)" strokeWidth="0.8"/>
                      <path d="M4 7l2 2 4-4" stroke="#C9963C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {row.sterka}
                </div>
                <div className={`${styles.rowVal} ${styles.rowClassic}`}>
                  <span className={styles.loseIcon}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6.5" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8"/>
                      <path d="M5 5l4 4M9 5l-4 4" stroke="#999" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {row.classic}
                </div>
              </motion.div>
            ))}
          </div>

          {!expanded && (
            <div className={styles.fadeOut} />
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={styles.bottomRow}>
          <button
            className={styles.expandBtn}
            onClick={() => setExpanded(v => !v)}
          >
            {expanded ? (
              <>
                Skrýt tabulku
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            ) : (
              <>
                Zobrazit všech 20 kategorií
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
          <a href="#contact" className={styles.ctaBtn}>
            Chci konzultaci zdarma
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
