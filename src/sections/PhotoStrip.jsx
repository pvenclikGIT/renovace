import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './PhotoStrip.module.css'

const photos = [
  '/renovace/images/real-01.jpg',
  '/renovace/images/real-02.jpg',
  '/renovace/images/real-05.jpg',
  '/renovace/images/real-07.jpg',
  '/renovace/images/real-09.webp',
  '/renovace/images/real-13.jpg',
]

export default function PhotoStrip() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <div ref={ref} className={styles.wrap}>
      <motion.div className={styles.track} style={{ x }}>
        {[...photos, ...photos].map((src, i) => (
          <div key={i} className={styles.photo}>
            <img src={src} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
