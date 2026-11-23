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
  <footer className="border-t border-[#E2E8F0] bg-white text-[#0F172A]">
    <div className="container-custom px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <img src={logo} alt="DineOS" width={1024} height={433} className="-ml-4 h-20 w-auto object-contain" loading="lazy" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#64748B]">QR ordering, kitchen updates, billing and analytics for modern restaurants, cafes, hotels and multi-outlet groups.</p>
          <div className="mt-6 space-y-3 text-sm text-[#0F172A]">
            <a className="flex items-center gap-2 hover:text-brand-600" href="mailto:contact@dineos.cloud"><Mail size={15} className="text-brand-600" />contact@dineos.cloud</a>
            <a className="flex items-center gap-2 hover:text-brand-600" href="tel:+919004576271"><Phone size={15} className="text-brand-600" />+91 9004576271</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-bold text-[#0F172A]">{g.title}</h3>
              <ul className="mt-4 space-y-3">{g.links.map(([label, href]) => <li key={label}><Link to={href} className="text-sm text-[#64748B] transition hover:text-brand-600">{label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 border-t border-[#E2E8F0] pt-6 text-xs text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} DineOS. All rights reserved.</p>
        <div className="flex items-center gap-5"><span>Privacy Policy</span><span>Terms</span><Link to="/demo" className="flex items-center gap-1 font-semibold text-brand-600">Book a walkthrough <ArrowUpRight size={13} /></Link></div>
      </div>
    </div>
  </footer>
)

export default Footer
