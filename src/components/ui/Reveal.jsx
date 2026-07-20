import { motion } from 'framer-motion'

/**
 * Reveal — enveloppe tout contenu et l'anime à l'entrée dans le viewport.
 * direction: 'up' | 'left' | 'right' | 'none'
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '', once = true }) {
  const offsets = {
    up: { y: 28, x: 0 },
    left: { y: 0, x: -28 },
    right: { y: 0, x: 28 },
    none: { y: 0, x: 0 }
  }
  const { x, y } = offsets[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
