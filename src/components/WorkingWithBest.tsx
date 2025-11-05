import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WorkingWithBest = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Working with the best
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 opacity-60"
        >
          {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map(
            (partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-gray-600 text-lg"
                whileHover={{ scale: 1.2, opacity: 1 }}
              >
                {partner}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkingWithBest

