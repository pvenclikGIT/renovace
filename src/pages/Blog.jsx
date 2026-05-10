import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { articles, CATEGORIES } from '../data/articles'
import styles from './Blog.module.css'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

function ArticleCard({ article, featured = false }) {
  const cat = CATEGORIES[article.category]
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
    >
      <div className={styles.cardImage}>
        <img src={article.coverImage} alt={article.coverAlt} loading="lazy" />
        <span className={styles.cardCat} style={{ background: cat.color }}>{cat.label}</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardLead}>{article.lead}</p>
        <div className={styles.cardMeta}>
          <span className={styles.cardAvatar} aria-hidden="true">{article.author.initials}</span>
          <span className={styles.cardAuthor}>{article.author.name}</span>
          <span className={styles.cardDot} aria-hidden="true">·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span className={styles.cardDot} aria-hidden="true">·</span>
          <span>{article.readTime} min čtení</span>
        </div>
      </div>
    </Link>
  )
}

export default function Blog() {
  const [featured, ...rest] = articles

  return (
    <main className={styles.page}>
      {/* HERO */}
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
            <span aria-current="page">Blog</span>
          </motion.nav>

          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className={styles.heroTagDot} />
            Blog
          </motion.div>

          <motion.h1
            className={styles.heroH1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Rady, příběhy, <em>technika.</em>
          </motion.h1>

          <motion.p
            className={styles.heroLead}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            Píšeme o tom, co z naší práce stojí za to vědět dřív, než si objednáte první prohlídku. Bez marketingových frází, bez SEO balastu, bez výplní.
          </motion.p>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <FadeIn>
            <div className={styles.sectionLead}>
              <span className={styles.sectionEyebrow}>Doporučujeme</span>
              <h2 className={styles.sectionTitle}>Nejnovější článek</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ArticleCard article={featured} featured />
          </FadeIn>
        </div>
      </section>

      {/* GRID */}
      {rest.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <FadeIn>
              <div className={styles.sectionLead}>
                <span className={styles.sectionEyebrow}>Archiv</span>
                <h2 className={styles.sectionTitle}>Další články</h2>
              </div>
            </FadeIn>
            <div className={styles.grid}>
              {rest.map((a, i) => (
                <FadeIn key={a.slug} delay={i * 0.08}>
                  <ArticleCard article={a} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
