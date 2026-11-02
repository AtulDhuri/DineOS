import React, { useState } from 'react'
import { motion } from 'framer-motion'

const businessTypes = [
  { id: 'cafe', emoji: '☕', name: 'Cafe', flow: 'prepaid', desc: 'Prepaid flow → Quick turnover' },
  { id: 'qsr', emoji: '🍔', name: 'Quick Service Restaurant', flow: 'prepaid', desc: 'Prepaid flow → Fast service' },
  { id: 'restaurant', emoji: '🍽', name: 'Restaurant', flow: 'postpaid', desc: 'Postpaid flow → Full service' },
  { id: 'hotel', emoji: '🏨', name: 'Hotel', flow: 'postpaid', desc: 'Postpaid flow → Room service' },
  { id: 'fine-dining', emoji: '🍷', name: 'Fine Dining', flow: 'postpaid', desc: 'Postpaid flow → Premium experience' },
  { id: 'lounge', emoji: '🍺', name: 'Lounge', flow: 'dynamic', desc: 'Dynamic pricing → Zone based' },
  { id: 'resort', emoji: '🌴', name: 'Resort', flow: 'postpaid', desc: 'Postpaid flow → Banquet & dining' },
]

const flowColors: Record<string, { text: string; bg: string; border: string; icon: string }> = {
  prepaid: { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/20', icon: '💳' },
  postpaid: { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/20', icon: '💰' },
  dynamic: { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/20', icon: '📊' },
}

export const BusinessSelector: React.FC = () => {
  const [selected, setSelected] = useState<string>('restaurant')

  return (
    <section id="business-selector" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What kind of business are you running?</h2>
          <p className="text-slate-400 text-lg">We automatically configure the right flow for your business type.</p>
        </div>

        {/* Business type cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {businessTypes.map((biz) => {
            const f = flowColors[biz.flow]
            const isActive = selected === biz.id
            const baseCls = `group relative flex flex-col items-center justify-center gap-3 px-6 py-8 rounded-3xl transition-all duration-300 ${
              isActive ? 'ring-2 ring-brand-500 bg-white/10 scale-105' : 'bg-white/5 border border-white/10 hover:border-white/20'
            }`
            const badgeCls = `text-xs ${f.text} font-medium ${f.bg} ${f.border} px-3 py-1 rounded-full`

            return (
              <motion.button
                key={biz.id}
                onClick={() => setSelected(biz.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={baseCls}
              >
                <span className="text-4xl">{biz.emoji}</span>
                <span className="font-bold text-white text-lg">{biz.name}</span>
                <span className={badgeCls}>
                  {biz.flow === 'prepaid' ? 'Prepaid' : biz.flow === 'postpaid' ? 'Postpaid' : 'Dynamic'}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BusinessSelector