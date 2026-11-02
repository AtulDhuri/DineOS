import React from 'react'
import { motion } from 'framer-motion'

const features = [
  { title: 'Zone Based Pricing', desc: 'Different prices for AC, VIP, Outdoor, Lounge zones', icon: '💰', color: 'text-purple-400' },
  { title: 'Zone Based Menus', desc: 'Show/hide items based on dining zone', icon: '📋', color: 'text-blue-400' },
  { title: 'Table Mapping', desc: 'Every table auto-mapped to its zone', icon: '🗺', color: 'text-green-400' },
  { title: 'Live Occupancy', desc: 'Real-time table status across all zones', icon: '📊', color: 'text-orange-400' },
  { title: 'QR Based Identification', desc: 'Scan QR to detect zone and table instantly', icon: '📱', color: 'text-indigo-400' },
  { title: 'Menu Availability Control', desc: 'Enable/disable items in real-time', icon: '🔘', color: 'text-red-400' },
  { title: 'VIP Dining Rules', desc: 'Special pricing and service for VIP guests', icon: '⭐', color: 'text-amber-400' },
  { title: 'Premium Zone Pricing', desc: 'Higher pricing for premium seating areas', icon: '💎', color: 'text-pink-400' },
]

export const PremiumFeatures: React.FC = () => {
  return (
    <section id="premium-features" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Special Premium Features</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade capabilities built for modern hospitality operations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color.replace('text-', 'bg-')}/20 border border-[${f.color}]/30`}>
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional features list */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">Service & Cover Charge Rules</h3>
              <p className="text-slate-400 mb-6">
                Configure automatic service charges and cover charges per zone, per time period, or per party size. Everything is customizable from the manager dashboard.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                  <span>Service charge rules by zone</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                  <span>Cover charge for peak hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                  <span>Banquet pricing for events</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-64 rounded-2xl p-2 bg-gradient-to-br from-brand-600 to-purple-700 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative z-10 h-full p-6 flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-4">Banquet Pricing</h4>
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Standard Hall</span>
                      <span className="font-mono">₹500/head</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Premium Hall</span>
                      <span className="font-mono">₹800/head</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>VIP Banquet</span>
                      <span className="font-mono">₹1,200/head</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumFeatures