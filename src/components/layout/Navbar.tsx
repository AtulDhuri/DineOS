import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../DineOS_header.png'

interface NavbarProps {
  scrolled?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Platform', href: '/product' },
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    // { label: 'Blog', href: '/blog' },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled || hasScrolled
          ? 'bg-slate-950/90 border-b border-white/10 shadow-lg'
          : 'bg-slate-950/70 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <img
              src={logo}
              alt="DineOS logo"
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-300 hover:text-brand-300 text-sm font-medium transition-colors duration-200"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/demo" onClick={handleNavClick} className="btn-primary px-4 py-2 text-sm">Book a demo <ArrowRight size={15} /></Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
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
              className="lg:hidden mt-4 overflow-hidden rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-slate-300 hover:text-brand-300 hover:bg-white/5 text-base font-medium transition-colors px-3 py-3 rounded-lg"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/demo" className="btn-primary mt-3 w-full" onClick={handleNavClick}>Book a demo <ArrowRight size={16} /></Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar