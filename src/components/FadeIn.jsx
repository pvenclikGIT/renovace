import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  delay = 0,
  y = 28,
  duration = 0.75,
  className = '',
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
