import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { articles, ARTICLES_PER_PAGE, CATEGORIES } from '../data/articles'
import styles from './Blog.module.css'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

function ArticleCard({ article }) {
  const cat = CATEGORIES[article.category]
  return (
    <Link to={`/blog/${article.slug}`} className={styles.card}>
      <div className={styles.cardImage}>
        <img src={article.coverImage} alt={article.coverAlt} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCat} style={{ color: cat.color }}>{cat.label}</span>
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

function Pagination({ currentPage, totalPages }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav className={styles.pagination} aria-label="Stránkování článků">
      <Link
        to={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
        className={`${styles.pageBtn} ${currentPage === 1 ? styles.pageBtnDisabled : ''}`}
        aria-disabled={currentPage === 1}
        onClick={e => { if (currentPage === 1) e.preventDefault() }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Předchozí</span>
      </Link>

      <ol className={styles.pageNums}>
        {pages.map(p => (
          <li key={p}>
            <Link
              to={p === 1 ? '/blog' : `?page=${p}`}
              className={`${styles.pageNum} ${p === currentPage ? styles.pageNumActive : ''}`}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </Link>
          </li>
        ))}
      </ol>

      <Link
        to={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
        className={`${styles.pageBtn} ${currentPage === totalPages ? styles.pageBtnDisabled : ''}`}
        aria-disabled={currentPage === totalPages}
        onClick={e => { if (currentPage === totalPages) e.preventDefault() }}
      >
        <span>Další</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </nav>
  )
}

export default function Blog() {
  const [searchParams] = useSearchParams()
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
  const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const start = (safePage - 1) * ARTICLES_PER_PAGE
  const pageArticles = articles.slice(start, start + ARTICLES_PER_PAGE)

  return (
    <main className={styles.page}>
      {/* HERO — no breadcrumb */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroTagDot} />
            Blog
          </motion.div>

          <motion.h1
            className={styles.heroH1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Rady, příběhy, <em>technika.</em>
          </motion.h1>

          <motion.p
            className={styles.heroLead}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Píšeme o tom, co z naší práce stojí za to vědět dřív, než si objednáte první prohlídku. Bez marketingových frází, bez SEO balastu, bez výplní.
          </motion.p>
        </div>
      </section>

      {/* GRID — 10 articles per page, paginated */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.grid}>
            {pageArticles.map((a, i) => (
              <FadeIn key={a.slug} delay={i * 0.06}>
                <ArticleCard article={a} />
              </FadeIn>
            ))}
          </div>

          <Pagination currentPage={safePage} totalPages={totalPages} />
        </div>
      </section>
    </main>
  )
}
