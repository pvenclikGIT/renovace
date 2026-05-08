import styles from './SectionHeader.module.css'

export default function SectionHeader({ tag, title, lead, light = false }) {
  const formattedTitle = title.replace(/\n/g, '<br/>')
  return (
    <div className={`${styles.wrap} ${light ? styles.light : ''}`}>
      {tag && (
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          {tag}
        </div>
      )}
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: formattedTitle }} />
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
