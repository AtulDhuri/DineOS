import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI4MCIgY3k9IjgwIiByPSI4MCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[100px] -translate-y-1/3" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            DineOS — The Operating System<br />
            <span className="gradient-text">for Modern Restaurants.</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
          >
            From QR Ordering to Kitchen Management, Billing, Zone Pricing, and Real-Time Operations.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA