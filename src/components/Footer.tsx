import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer
      ref={ref}
      className="bg-black text-white py-12 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400">
            ©Grid Pictures. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

