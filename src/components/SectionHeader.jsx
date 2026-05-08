import styles from './SectionHeader.module.css'

export default function SectionHeader({ tag, title, lead, light = false }) {
  return (
    <div className={`${styles.wrap} ${light ? styles.light : ''}`}>
      {tag && (
        <div className={styles.tag}>
          <span className={styles.tagLine} />
          {tag}
        </div>
      )}
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
