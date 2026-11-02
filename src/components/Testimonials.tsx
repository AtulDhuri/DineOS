import React, { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Spice Garden Restaurant',
    business: 'Fine Dining • 120 seats',
    avatar: 'RK',
    rating: 5,
    text: "The zone-based pricing has increased our revenue by 30%. VIP guests don't mind paying premium for premium seating.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Sarah Chen',
    role: 'Manager, Café Mocha',
    business: 'Cafe • 50 seats',
    avatar: 'SC',
    rating: 5,
    text: 'Prepaid ordering reduced our table turnover time by 40%. We serve more customers during peak hours.',
    color: 'from-brand-500 to-cyan-500',
  },
  {
    name: 'Marcus Bell',
    role: 'Hotel Manager, Grand Plaza',
    business: 'Hotel • Multi-outlet',
    avatar: 'MB',
    rating: 5,
    text: 'Room service and restaurant billing are now unified. Postpaid model works perfectly for hotel guests.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operator, Urban Lounge',
    business: 'Lounge • Rooftop',
    avatar: 'ER',
    rating: 5,
    text: 'Dynamic pricing based on zone is a game changer. Our lounge area commands higher prices automatically.',
    color: 'from-emerald-500 to-teal-500',
  },
]

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Hospitality Leaders</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Restaurant owners, hotel managers, and cafe operators share their experience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="relative mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 50 }}
              animate={current === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center ${current === i ? 'relative z-10' : ''}`}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br {...{ style: { background: t.color.replace('from-', 'from-').replace(' to-', ' to-') } }} text-white font-bold text-2xl shadow-2xl">
                {t.avatar}
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-xs">{star <= t.rating ? '★' : '☆'}</span>
                ))}
              </div>
              <p className="text-slate-300 text-lg italic leading-relaxed text-center max-w-lg mb-6">
                "{t.text}"
              </p>
              <div className="text-left">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
                <p className="text-xs text-brand-400 font-medium uppercase tracking-wider">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? 'bg-brand-500 w-8 rounded-full' : 'bg-white/10 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Auto-rotate indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Live testimonials
        </div>
      </div>
    </section>
  )
}

export default Testimonials