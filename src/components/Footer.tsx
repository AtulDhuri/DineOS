import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-lg font-bold text-white">RestoFlow</span>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              <span className="text-lg">📧</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              <span className="text-lg">📱</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">
              <span className="text-lg">🔗</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          <p>RestoFlow Platform. Built for modern restaurant operations.</p>
          <p className="mt-1">© 2026 RestoFlow Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer