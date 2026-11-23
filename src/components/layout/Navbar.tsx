import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/DineOS_logo_final/DineOS.png'

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar: React.FC<{ scrolled?: boolean }> = ({ scrolled = false }) => {
  const [open, setOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(scrolled)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${hasScrolled || open ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl' : 'border-transparent bg-white/60 backdrop-blur-md'}`}>
      <div className="container-custom flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="DineOS home" className="-ml-4 flex items-center">
          <img src={logo} alt="DineOS" width={1024} height={433} className="-my-2 h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className={`text-sm font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-600' : 'text-slate-500 hover:text-slate-900'}`}>{link.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/demo" className="btn-primary !px-5 !py-2.5 !text-sm">Book a Demo <ArrowRight size={15} /></Link>
        </div>
        <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-900 hover:bg-brand-50 md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-200 bg-white md:hidden">
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link key={link.href} to={link.href} className="rounded-xl px-3 py-3 text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600">{link.label}</Link>
              ))}
              <Link to="/demo" className="btn-primary mt-2">Book a Demo <ArrowRight size={16} /></Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
