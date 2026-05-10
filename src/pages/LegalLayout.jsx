import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import styles from './Legal.module.css'

/*
  Shared shell for all legal subpages (GDPR / Cookies / Obchodní podmínky).
  Children render the article body. Section IDs in `sections` are used to
  build the table of contents and scroll-to anchors.
*/
export default function LegalLayout({
  tag, title, lead, lastUpdated, sections, children,
}) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.nav
            className={styles.breadcrumb}
            aria-label="Drobečková navigace"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">Domů</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span aria-current="page">{title}</span>
          </motion.nav>

          <motion.div
            className={styles.tag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className={styles.tagDot} />
            {tag}
          </motion.div>

          <motion.h1
            className={styles.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {lead}
          </motion.p>

          {lastUpdated && (
            <motion.div
              className={styles.meta}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <span className={styles.metaDot} />
              Naposledy aktualizováno: {lastUpdated}
            </motion.div>
          )}
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <FadeIn>
            <nav className={styles.toc} aria-label="Obsah dokumentu">
              <div className={styles.tocTitle}>Obsah</div>
              <ol className={styles.tocList}>
                {sections.map(s => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </FadeIn>

          {children}
        </div>
      </section>
    </main>
  )
}

/* Helper komponenty pro section + heading + body content */
export function LegalSection({ id, num, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>
        <small>{num}.</small>
        {title}
      </h2>
      {children}
    </section>
  )
}

export const legalStyles = styles
