import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  scrolled: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrolled)
  }, [scrolled])

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Customer Journey', href: '#journey' },
    { label: 'Zone Management', href: '#zones' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-white">RestoFlow</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </motion.button>
            <div className="flex flex-col gap-2">
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-slate-300 hover:text-white text-sm font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
                  <button className="text-left text-slate-300 hover:text-white text-sm font-medium py-2">
                    Sign In
                  </button>
                  <div className="flex flex-col gap-2">
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar