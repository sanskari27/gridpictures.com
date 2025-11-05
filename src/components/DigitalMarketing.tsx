import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const DigitalMarketing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    'Digital Marketing Strategy',
    'SEO (Search Engine Optimization)',
    'Content Creation',
    '(SMM) Social Media Marketing',
    'Pay-Per-Click (PPC) Advertising',
    'Website Development',
  ]

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
          Digital Marketing / Corporate Solutions
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg text-center hover:bg-gray-100 transition-colors"
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalMarketing

