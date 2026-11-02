import React from 'react'
import { motion } from 'framer-motion'

const modules = [
  { icon: '🍽', title: 'Customer Ordering', desc: 'QR-based ordering with real-time menu', color: 'blue' },
  { icon: '👨‍🍳', title: 'Kitchen Management', desc: 'Ticket system with prep tracking', color: 'orange' },
  { icon: '🍽', title: 'Waiter Operations', desc: 'Table status and order delivery', color: 'purple' },
  { icon: '💳', title: 'Smart Billing', desc: 'Prepaid, postpaid, split bills', color: 'green' },
  { icon: '🗺', title: 'Zone Management', desc: 'AC, Outdoor, VIP, Lounge zones', color: 'pink' },
  { icon: '💰', title: 'Dynamic Pricing', desc: 'Zone-based menu pricing', color: 'yellow' },
  { icon: '📋', title: 'Menu Availability', desc: 'Real-time stock control', color: 'red' },
  { icon: '📊', title: 'Analytics', desc: 'Revenue, occupancy, popular items', color: 'indigo' },
  { icon: '🏠', title: 'Floor Management', desc: 'Live table status map', color: 'emerald' },
]

export const PlatformOverview: React.FC = () => {
  return (
    <section id="platform" className="bg-slate-900/30 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Complete Platform Modules
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every module connects seamlessly — from the customer's phone to the kitchen ticket printer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl ${mod.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/20' : mod.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/20' : mod.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/20' : mod.color === 'green' ? 'bg-green-500/10 border border-green-500/20' : mod.color === 'pink' ? 'bg-pink-500/10 border border-pink-500/20' : mod.color === 'yellow' ? 'bg-yellow-500/10 border border-yellow-500/20' : mod.color === 'red' ? 'bg-red-500/10 border border-red-500/20' : mod.color === 'indigo' ? 'bg-indigo-500/10 border border-indigo-500/20' : 'bg-emerald-500/10 border border-emerald-500/20'}`}>
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{mod.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection visualization */}
        <div className="mt-12 flex items-center justify-center space-x-1 text-brand-400">
          <div className="w-20 h-px bg-gradient-to-r from-brand-500 to-transparent" />
          <span className="text-sm font-mono">All modules connected in real-time</span>
          <div className="w-20 h-px bg-gradient-to-l from-brand-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default PlatformOverview