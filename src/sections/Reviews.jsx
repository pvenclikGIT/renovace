import FadeIn from '../components/FadeIn'
import styles from './Reviews.module.css'

const reviews = [
  { name: 'Jana Krejčí', time: 'před 2 týdny', rating: 5, text: 'Naprosto spokojená! Přijeli v pondělí, hotovo ve čtvrtek. Koupelna vypadá luxusně a hlavně žádný prach po celém bytě. Doporučuji všem!' },
  { name: 'Pavel Horák', time: 'před měsícem', rating: 5, text: 'Profesionální přístup, pevná cena, žádné vícepráce. Jako správce bytů ocením hlavně rychlost a předvídatelnost. Budu objednávat znovu.' },
  { name: 'Michaela S.', time: 'před 3 týdny', rating: 5, text: 'Bála jsem se, že to bude klouzat. Vůbec ne — mají certifikovaný protiskluz. Výsledek je úžasný, přesně to šedé co jsem chtěla.' },
  { name: 'Tomáš Blažek', time: 'před 5 dny', rating: 5, text: 'Renovace penzionu proběhla přesně dle plánu. Pokoje byly dostupné druhý den. Hosté se ptají, kde jsme pořídili "ty italské obklady".' },
  { name: 'Lucie Procházková', time: 'před týdnem', rating: 5, text: 'Malá koupelna v panelákui se proměnila. Vybrala jsem greige a je to přesně to, co jsem viděla na vzorku. Fyzický vzorek domů byl skvělý nápad.' },
  { name: 'Martin Dvořák', time: 'před 2 měsíci', rating: 5, text: 'Developer — 8 bytů najednou, koordinace perfektní. Každý byt vypadá stejně dobře. Cena za jednotku je výrazně nižší než bourání.' },
]

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div className={styles.tag}><span className={styles.tagDot}/>Recenze</div>
          <div className={styles.headerRow}>
            <h2 className={styles.title}>Co říká Google.<br/><em>Bez úprav.</em></h2>
            <div className={styles.score}>
              <div className={styles.scoreNum}>4.9</div>
              <div className={styles.scoreRight}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#C9963C">
                      <path d="M9 1l2 5.5H17l-4.5 3.5 1.5 5.5L9 12.5 4 15.5l1.5-5.5L1 6.5h6z"/>
                    </svg>
                  ))}
                </div>
                <div className={styles.scoreCount}>z 58 recenzí na Google</div>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.googleLink}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Zobrazit na Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.08}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{r.name.charAt(0)}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.time}>{r.time}</div>
                </div>
                <div className={styles.gLogo}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stars}>
                {[...Array(r.rating)].map((_,j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 18 18" fill="#C9963C">
                    <path d="M9 1l2 5.5H17l-4.5 3.5 1.5 5.5L9 12.5 4 15.5l1.5-5.5L1 6.5h6z"/>
                  </svg>
                ))}
              </div>
              <p className={styles.text}>„{r.text}"</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
