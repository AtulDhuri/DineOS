import React, { useState } from 'react'
import { motion } from 'framer-motion'

const visibilityItems = [
  {
    name: 'Premium Whisky',
    desc: 'Single malt scotch - $900',
    visible: ['VIP', 'Lounge'],
    hidden: ['Outdoor', 'Family Zone'],
    icon: '🥃',
    color: 'amber',
  },
  {
    name: 'Executive Lunch',
    desc: 'Business meal - $45',
    visible: ['AC Zone', 'VIP'],
    hidden: ['Outdoor', 'Lounge', 'Family Zone'],
    icon: '🍱',
    color: 'blue',
  },
  {
    name: 'Late Night Menu',
    desc: 'Available after 10 PM - $30',
    visible: ['Lounge', 'Outdoor'],
    hidden: ['AC Zone', 'VIP', 'Family Zone'],
    icon: '🌙',
    color: 'purple',
  },
]

export const MenuVisibility: React.FC = () => {
  return (
    <section id="menu-visibility" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Zone-Based Menu Visibility</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Control which menu items appear in which zones. Perfect for age-restricted items, VIP exclusives, or area-specific offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibilityItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-400">✓ Visible in</span>
                    <span className="text-xs font-medium text-slate-300">{item.visible.join(', ')}</span>
                  </div>
                  <div className="flex gap-2">
                    {item.visible.map((v) => (
                      <span key={v} className="w-2 h-2 rounded-full bg-green-400" />
                    ))}
                  </div>
                </div>
                
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400">✗ Hidden from</span>
                    <span className="text-xs font-medium text-slate-300">{item.hidden.join(', ')}</span>
                  </div>
                  <div className="flex gap-2">
                    {item.hidden.map((v) => (
                      <span key={v} className="w-2 h-2 rounded-full bg-red-500/30" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500">Toggle visibility</span>
                <span className="text-xs font-bold text-brand-400">Manage →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 glass-card rounded-3xl p-8 border-brand-500/30 shadow-2xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Live Preview: Premium Whisky Menu</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {['VIP', 'Lounge', 'Outdoor', 'Family Zone'].map((zone) => (
              <div key={zone} className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center min-h-[200px] ${
                ['VIP', 'Lounge'].includes(zone)
                  ? 'bg-green-500/20 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/20 opacity-60'
              }`}>
                <span className="text-2xl font-bold mb-2 text-white">{zone}</span>
                {['VIP', 'Lounge'].includes(zone) ? (
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                    <span>✓</span> Premium Whisky
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm opacity-60">
                    <span>✗</span> Hidden
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuVisibility