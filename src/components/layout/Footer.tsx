import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import logo from '../../DineOS_footer.png'

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Platform', href: '/product' },
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Pricing', href: '/pricing' },
    // { label: 'Demo', href: '/demo' },
    { label: 'About', href: '/about' },
  ]

  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="DineOS logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              The Operating System for Modern Restaurants. Streamline ordering, kitchen, billing, and operations in one platform.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {/* <li>
                <Link to="/blog" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/pricing" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link to="/demo" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                  Live Demo
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Get Started</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-slate-400">
                <Mail size={16} />
              </span>
              <span className="text-sm text-white">contact@dineos.cloud</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-slate-400">
                <Phone size={16} />
              </span>
              <span className="text-sm text-white">+91 9004576271</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DineOS. All rights reserved.</p>
          <p className="mt-1">The Operating System for Modern Restaurants</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer