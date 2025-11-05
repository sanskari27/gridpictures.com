import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          BRANDING
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Digital Marketing / Corporate Solutions',
            'Digital Marketing Strategy',
            'SEO (Search Engine Optimization)',
            'Content Creation',
            '(SMM) Social Media Marketing',
            'Pay-Per-Click (PPC) Advertising',
            'Website Development',
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise

