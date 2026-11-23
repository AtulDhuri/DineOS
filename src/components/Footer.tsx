import React from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const groups = [
  { title: 'Platform', links: [['Product overview', '/product'], ['Features', '/features'], ['Pricing', '/pricing']] },
  { title: 'Solutions', links: [['Restaurants', '/solutions'], ['Hotels & resorts', '/solutions'], ['Multi-outlet groups', '/solutions']] },
  { title: 'Company', links: [['About DineOS', '/about'], ['Resources', '/blog'], ['Contact', '/contact']] },
]

export const Footer: React.FC = () => <footer className="border-t border-slate-200 bg-white"><div className="container-custom px-4 py-14 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]"><div><Link to="/" className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-black text-white">D</span><span className="text-xl font-black tracking-tight text-slate-950">Dine<span className="text-brand-600">OS</span></span></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">The connected operating platform for modern restaurants, cafes, hotels, lounges, and multi-outlet groups.</p><div className="mt-6 space-y-2 text-sm text-slate-600"><a className="flex items-center gap-2 hover:text-brand-700" href="mailto:contact@dineos.cloud"><Mail size={15} />contact@dineos.cloud</a><a className="flex items-center gap-2 hover:text-brand-700" href="tel:+919004576271"><Phone size={15} />+91 9004576271</a></div></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{groups.map((group) => <div key={group.title}><h3 className="text-sm font-bold text-slate-950">{group.title}</h3><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><Link to={href} className="text-sm text-slate-600 transition hover:text-brand-700">{label}</Link></li>)}</ul></div>)}</div></div><div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 DineOS. Built for modern restaurant operations.</p><div className="flex items-center gap-5"><span>Privacy</span><span>Terms</span><Link to="/demo" className="flex items-center gap-1 font-semibold text-brand-700">Book a walkthrough <ArrowUpRight size={13} /></Link></div></div></div></footer>

export default Footer
