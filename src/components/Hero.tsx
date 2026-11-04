import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Background gradient glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-[120px] animate-[gradient-shift_8s_ease_infinite]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-700/20 blur-[120px] animate-[gradient-shift_8s_ease_infinite]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-400">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            DineOS Restaurant Operations Platform
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight">
            The Operating System<br />
            <span className="gradient-text">for Modern Restaurants.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
            Prepaid Ordering. Postpaid Billing. QR Ordering. Kitchen Management.<br />
            Zone-Based Pricing. Smart Billing. Floor Management.<br />
            Everything Restaurant Operations Need In One Platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
          </div>

          {/* Trust badges */}
          <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              SOC 2 Compliant
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              99.9% Uptime
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero