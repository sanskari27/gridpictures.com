import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const StudioXchange = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: 'Studio on Rent Service',
      description: 'Professional studio space available for rent',
    },
    {
      title: 'Political (Analysts)',
      description: 'Political analysis and content creation',
    },
    {
      title: 'Political Videos/Films',
      description: 'Professional political video production',
    },
    {
      title: 'Events/Campaigns',
      description: 'Event coverage and campaign videos',
    },
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
          Studio Xchange
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02, rotate: 0.5 }}
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudioXchange

