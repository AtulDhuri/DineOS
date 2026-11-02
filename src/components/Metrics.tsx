import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const metrics = [
  { label: 'Orders Processed', value: '50,000+', suffix: '', color: 'text-brand-400' },
  { label: 'Restaurant Locations', value: '500+', suffix: '', color: 'text-purple-400' },
  { label: 'Uptime', value: '99.9%', suffix: '', color: 'text-green-400' },
  { label: 'Meals Served', value: '1M+', suffix: '', color: 'text-blue-400' },
]

export const Metrics: React.FC = () => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const countUp = (target: string) => {
    if (!animated) return '0'
    // Extract numeric part
    const num = target.replace(/[^\d.]/g, '')
    return target
  }

  return (
    <section id="metrics" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platform at Scale</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by hospitality groups worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 text-center"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto bg-white/5 border border-white/10">
                <span className={`text-2xl ${m.color}`}>📊</span>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white block mb-2"
              >
                {m.value}
              </motion.span>
              <p className="text-sm text-slate-400 font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics