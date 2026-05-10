import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { getArticle, getRelatedArticles, CATEGORIES } from '../data/articles'
import styles from './Blog.module.css'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

/* Reading progress bar — fixed top, fills as you scroll the article */
function ProgressBar() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={styles.progress} aria-hidden="true">
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
    </div>
  )
}

/* Renders a single block based on its type */
function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return <p className={styles.bodyLead} dangerouslySetInnerHTML={{ __html: block.text }} />
    case 'paragraph':
      return <p className={styles.bodyP} dangerouslySetInnerHTML={{ __html: block.text }} />
    case 'heading': {
      const Tag = `h${block.level}`
      const cls = block.level === 2 ? styles.bodyH2 : styles.bodyH3
      return <Tag id={block.id} className={cls}>{block.text}</Tag>
    }
    case 'image':
      return (
        <figure className={styles.bodyFigure}>
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'quote':
      return (
        <blockquote className={styles.bodyQuote}>
          <p dangerouslySetInnerHTML={{ __html: block.text }} />
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      )
    case 'list':
      return (
        <ul className={styles.bodyList}>
          {block.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
        </ul>
      )
    case 'numbered':
      return (
        <ol className={styles.bodyOrdered}>
          {block.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: it }} />)}
        </ol>
      )
    case 'callout':
      return (
        <aside className={`${styles.bodyCallout} ${block.kind === 'warn' ? styles.bodyCalloutWarn : ''}`}>
          {block.title && <div className={styles.bodyCalloutTitle}>{block.title}</div>}
          <p dangerouslySetInnerHTML={{ __html: block.text }} />
        </aside>
      )
    case 'divider':
      return <hr className={styles.bodyDivider} aria-hidden="true" />
    default:
      return null
  }
}

export default function BlogArticle() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <Navigate to="/blog" replace />

  const cat = CATEGORIES[article.category]
  const related = getRelatedArticles(article.slug, 2)

  /* Build TOC from H2 headings */
  const toc = article.blocks.filter(b => b.type === 'heading' && b.level === 2)

  return (
    <main className={styles.page}>
      <ProgressBar />

      {/* ARTICLE HEADER */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.articleHeaderInner}>
            <motion.span
              className={styles.articleCat}
              style={{ background: cat.color }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {cat.label}
            </motion.span>

            <motion.h1
              className={styles.articleTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {article.title}
            </motion.h1>

            <motion.p
              className={styles.articleSubtitle}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              {article.lead}
            </motion.p>

            <motion.div
              className={styles.articleMeta}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className={styles.metaAvatar}>{article.author.initials}</span>
              <div className={styles.metaPerson}>
                <span className={styles.metaName}>{article.author.name}</span>
                <span className={styles.metaRole}>{article.author.role}</span>
              </div>
              <span className={styles.metaSep} aria-hidden="true" />
              <time dateTime={article.date} className={styles.metaDate}>{formatDate(article.date)}</time>
              <span className={styles.metaSep} aria-hidden="true" />
              <span className={styles.metaRead}>{article.readTime} min čtení</span>
            </motion.div>
          </div>
        </header>

        <motion.figure
          className={styles.articleCover}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <img src={article.coverImage} alt={article.coverAlt} />
        </motion.figure>

        {/* CONTENT + STICKY TOC */}
        <div className={styles.articleBodyWrap}>
          {toc.length > 1 && (
            <aside className={styles.tocAside}>
              <div className={styles.tocSticky}>
                <div className={styles.tocLabel}>Obsah článku</div>
                <ol className={styles.tocList}>
                  {toc.map(t => (
                    <li key={t.id}>
                      <a href={`#${t.id}`}>{t.text}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          )}

          <div className={styles.articleBody}>
            {article.blocks.map((block, i) => <Block key={i} block={block} />)}
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <FadeIn>
              <div className={styles.sectionLead}>
                <span className={styles.sectionEyebrow}>Pokračujte čtením</span>
                <h2 className={styles.sectionTitle}>Další články</h2>
              </div>
            </FadeIn>
            <div className={styles.gridTwo}>
              {related.map((a, i) => {
                const c = CATEGORIES[a.category]
                return (
                  <FadeIn key={a.slug} delay={i * 0.08}>
                    <Link to={`/blog/${a.slug}`} className={styles.card}>
                      <div className={styles.cardImage}>
                        <img src={a.coverImage} alt={a.coverAlt} loading="lazy" />
                        <span className={styles.cardCat} style={{ background: c.color }}>{c.label}</span>
                      </div>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{a.title}</h3>
                        <p className={styles.cardLead}>{a.lead}</p>
                        <div className={styles.cardMeta}>
                          <span className={styles.cardAvatar} aria-hidden="true">{a.author.initials}</span>
                          <span className={styles.cardAuthor}>{a.author.name}</span>
                          <span className={styles.cardDot} aria-hidden="true">·</span>
                          <span>{a.readTime} min čtení</span>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}
