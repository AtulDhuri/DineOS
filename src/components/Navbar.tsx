import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps { scrolled?: boolean }

const links = [
  { label: 'Workflows', href: '/demo' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
]

export const Navbar: React.FC<NavbarProps> = ({ scrolled = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(scrolled)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${hasScrolled || menuOpen ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl' : 'border-transparent bg-[#F8FAFC]/80 backdrop-blur-sm'}`}>
    <div className="container-custom flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-2.5" aria-label="DineOS home"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-black text-white shadow-lg shadow-brand-600/20">D</span><span className="text-xl font-black tracking-tight text-slate-950">Dine<span className="text-brand-600">OS</span></span></Link>
      <nav className="hidden items-center gap-7 lg:flex">{links.map((link) => <Link key={link.href} to={link.href} className={`text-sm font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-700' : 'text-slate-600 hover:text-slate-950'}`}>{link.label}</Link>)}</nav>
      <div className="hidden items-center gap-4 lg:flex"><Link to="/contact" className="text-sm font-semibold text-slate-600 hover:text-slate-950">Talk to sales</Link><Link to="/demo#booking" className="btn-primary !rounded-lg !px-4 !py-2.5 !text-sm !shadow-none">Book a demo <ArrowRight size={15} /></Link></div>
      <button type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-slate-900 hover:bg-brand-100 lg:hidden">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
    </div>
    <AnimatePresence>{menuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"><div className="container-custom flex flex-col gap-1 px-4 py-4 sm:px-6">{links.map((link) => <Link key={link.href} to={link.href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700">{link.label}</Link>)}<Link to="/demo#booking" className="btn-primary mt-2">Book a demo <ArrowRight size={16} /></Link></div></motion.nav>}</AnimatePresence>
  </motion.header>
}

export default Navbar
