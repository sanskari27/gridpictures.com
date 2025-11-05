import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = ['Services', 'Work', 'About Us', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-black"
        >
          GRID PICTURES
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-black hover:text-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block text-black hover:text-gray-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

