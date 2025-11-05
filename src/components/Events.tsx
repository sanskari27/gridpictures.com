import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Events = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const eventTypes = [
    'Events',
    'Wedding Events',
    'Political Events',
    'Corporate Events',
  ]

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
          Events
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((eventType, index) => (
            <motion.div
              key={eventType}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold">{eventType}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
            whileHover={{ scale: 1.05, backgroundColor: '#333' }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Events

