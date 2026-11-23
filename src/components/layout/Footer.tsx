import React from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/DineOS_logo_final/DineOS.png'

const groups = [
  { title: 'Product', links: [['Platform', '/product'], ['Features', '/features'], ['Pricing', '/pricing']] },
  { title: 'Solutions', links: [['Restaurants & Hotels', '/solutions'], ['Live demo', '/demo'], ['About DineOS', '/about']] },
  { title: 'Company', links: [['Contact', '/contact'], ['Resources', '/blog'], ['Book a Demo', '/demo']] },
]

export const Footer: React.FC = () => (
  <footer className="bg-gradient-to-br from-brand-800 to-brand-700 text-white">
    <div className="container-custom px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <span className="-ml-2 inline-block rounded-2xl bg-white px-3 py-1"><img src={logo} alt="DineOS" className="h-12 w-auto object-contain" loading="lazy" /></span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100">QR ordering, kitchen updates, billing and analytics for modern restaurants, cafes, hotels and multi-outlet groups.</p>
          <div className="mt-6 space-y-3 text-sm text-white">
            <a className="flex items-center gap-2 hover:text-brand-200" href="mailto:contact@dineos.cloud"><Mail size={15} className="text-brand-200" />contact@dineos.cloud</a>
            <a className="flex items-center gap-2 hover:text-brand-200" href="tel:+919004576271"><Phone size={15} className="text-brand-200" />+91 9004576271</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-bold text-white">{g.title}</h3>
              <ul className="mt-4 space-y-3">{g.links.map(([label, href]) => <li key={label}><Link to={href} className="text-sm text-brand-100 transition hover:text-brand-200">{label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-6 text-xs text-brand-100 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} DineOS. All rights reserved.</p>
        <div className="flex items-center gap-5"><span>Privacy Policy</span><span>Terms</span><Link to="/demo" className="flex items-center gap-1 font-semibold text-brand-200">Book a walkthrough <ArrowUpRight size={13} /></Link></div>
      </div>
    </div>
  </footer>
)

export default Footer
