import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SocialMediaMarketing = () => {
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
          Social Media Marketing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-8">
            We help brands tell their stories through engaging visual social content
            to grow their following and drive sales.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMediaMarketing

