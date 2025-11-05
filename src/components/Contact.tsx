import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Let's Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-gray-700 mb-12"
        >
          Contact or leave us a message.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <motion.a
                href="tel:+918007890399"
                className="text-gray-700 hover:text-black transition-colors"
                whileHover={{ x: 5 }}
              >
                +91 8007890399
              </motion.a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <motion.a
                href="mailto:contact.gridpictures@gmail.com"
                className="text-gray-700 hover:text-black transition-colors"
                whileHover={{ x: 5 }}
              >
                contact.gridpictures@gmail.com
              </motion.a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                Flat No - 402, Galaxy Orchid, Pragati Nagar, Near Pune IT Park,
                Bhau Patil Road, Pune - 411020
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Your message (optional)
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: '#333' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

