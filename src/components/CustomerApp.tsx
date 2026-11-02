import React from 'react'
import { motion } from 'framer-motion'

const screens = [
  { name: 'Home', color: 'from-brand-500 to-purple-600', icon: '🏠' },
  { name: 'Categories', color: 'from-blue-500 to-cyan-500', icon: '📂' },
  { name: 'Product Listing', color: 'from-green-500 to-emerald-500', icon: '📋' },
  { name: 'Product Details', color: 'from-purple-500 to-pink-500', icon: '📱' },
  { name: 'Cart', color: 'from-orange-500 to-red-500', icon: '🛒' },
  { name: 'Checkout', color: 'from-indigo-500 to-brand-500', icon: '💳' },
  { name: 'Order Tracking', color: 'from-teal-500 to-cyan-500', icon: '📦' },
  { name: 'Bill Request', color: 'from-rose-500 to-pink-500', icon: '🧾' },
  { name: 'Feedback', color: 'from-violet-500 to-fuchsia-500', icon: '⭐' },
]

export const CustomerApp: React.FC = () => {
  return (
    <section id="customer-app" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer App Showcase</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Native mobile experience for guests — from browsing to feedback, all in one seamless flow.
          </p>
        </div>

        <div className="relative flex justify-center items-center mb-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-[320px] h-[640px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[40px] p-4 shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Status bar */}
            <div className="flex justify-between items-center px-4 py-2 text-[10px] text-slate-400">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              </div>
              <span className="font-mono">12:00</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 rounded-full bg-white/50" />
              </div>
            </div>

            <div className="h-full flex flex-col">
              <motion.div
                key="current"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 p-6 space-y-6 overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                      R
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Welcome back,</p>
                      <p className="text-xs text-slate-400">Alex</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-400">
                    🔔
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-2">Featured</p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {['Margherita Pizza', 'Caesar Salad', 'Iced Coffee', 'Chocolate Cake'].map((item) => (
                        <div key={item} className="flex-shrink-0 w-20 h-24 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-2">
                          <span className="text-xl mb-1">🍕</span>
                          <span className="text-xs text-slate-300 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🍝</span>
                        <div>
                          <p className="text-sm font-bold text-white">Pasta Carbonara</p>
                          <p className="text-xs text-slate-400">₹350 • Available</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-brand-600 hover:bg-brand-500 flex items-center justify-center text-xs font-bold text-white transition-colors">
                        +
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🥗</span>
                        <div>
                          <p className="text-sm font-bold text-white">Caesar Salad</p>
                          <p className="text-xs text-slate-400">₹280 • Available</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-brand-600 hover:bg-brand-500 flex items-center justify-center text-xs font-bold text-white transition-colors">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 backdrop-blur border-t border-white/10 rounded-[40px] mt-2">
              {[0, 1, 2, 3].map((i) => (
                <button key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  {['🏠', '📋', '🛒', '👤'][i]}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Screen list */}
        <div className="grid md:grid-cols-3 gap-4">
          {screens.map((screen) => (
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 cursor-pointer transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${screen.color} text-white text-xl shadow-lg`}>
                {screen.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{screen.name}</h4>
                <p className="text-xs text-slate-400">Mobile screen</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerApp