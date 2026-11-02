import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  { title: 'Reduce Wait Time', desc: 'QR ordering eliminates menu wait', icon: '⚡' },
  { title: 'Faster Table Turnover', desc: 'Prepaid model clears tables faster', icon: '🔄' },
  { title: 'Better Guest Experience', desc: 'Seamless ordering from seat', icon: '✨' },
  { title: 'Real-Time Kitchen Visibility', desc: 'KDS keeps kitchen coordinated', icon: '👁' },
  { title: 'Dynamic Pricing Support', desc: 'Zone-based pricing maximizes revenue', icon: '📈' },
  { title: 'Menu Availability Control', desc: 'Instant out-of-stock updates', icon: '📋' },
  { title: 'VIP Experience Management', desc: 'Special treatment for VIP guests', icon: '⭐' },
  { title: 'Multiple Business Models', desc: 'Prepaid, postpaid, or hybrid', icon: '💼' },
  { title: 'More Revenue Per Table', desc: 'Zone pricing + faster turnover', icon: '💰' },
]

export const WhyRestaurants: React.FC = () => {
  return (
    <section id="why" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Restaurants Love It</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for modern hospitality — from single cafes to hotel chains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${b.icon === '⚡' ? 'bg-blue-500/20 border border-blue-500/30' : b.icon === '🔄' ? 'bg-green-500/20 border border-green-500/30' : b.icon === '✨' ? 'bg-purple-500/20 border border-purple-500/30' : b.icon === '👁' ? 'bg-indigo-500/20 border border-indigo-500/30' : b.icon === '📈' ? 'bg-orange-500/20 border border-orange-500/30' : b.icon === '📋' ? 'bg-red-500/20 border border-red-500/30' : b.icon === '⭐' ? 'bg-amber-500/20 border border-amber-500/30' : b.icon === '💼' ? 'bg-brand-500/20 border border-brand-500/30' : 'bg-pink-500/20 border border-pink-500/30'}`}>
                <span className="text-3xl">{b.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyRestaurants