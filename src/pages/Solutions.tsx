import React from 'react'
import { SEO } from '../components/ui/SEO'
import { LeadForm } from '../components/ui/LeadForm'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Store, Building, Coffee, Utensils, Wine, Bed, Users, GraduationCap } from 'lucide-react'

const solutions = [
  {
    title: 'Restaurants',
    emoji: '🍽',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
    challenges: ['Manual order taking slows service', 'Kitchen tickets get lost', 'No table status visibility'],
    solution: 'QR ordering, KDS kitchen tickets, and real-time floor management for full-service restaurants.',
    outcome: '25% faster table turnover, 40% fewer order errors.',
  },
  {
    title: 'Hotels',
    emoji: '🏨',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    challenges: ['Room service billing complexity', 'Multiple outlet management', 'Guest folio integration'],
    solution: 'Postpaid billing, multi-outlet support, and room charge integration for hotel F&B operations.',
    outcome: 'Streamlined room service, unified billing across outlets.',
  },
  {
    title: 'Cafes',
    emoji: '☕',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    challenges: ['High turnover needs fast payment', 'Limited staff for order taking', 'Peak hour bottlenecks'],
    solution: 'Prepaid ordering with QR codes — customers pay before the kitchen starts.',
    outcome: '30% faster service during peak hours, reduced labor costs.',
  },
  {
    title: 'Food Courts',
    emoji: '🍔',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    challenges: ['Multiple vendors in one space', 'Complex payment splitting', 'Order tracking across vendors'],
    solution: 'Zone-based vendor management with shared seating and split payment capabilities.',
    outcome: 'Efficient multi-vendor operations, seamless customer experience.',
  },
  {
    title: 'Fine Dining',
    emoji: '🍷',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    challenges: ['Premium guest expectations', 'Wine and specialty item management', 'Table turnover without rushing'],
    solution: 'Postpaid ordering, VIP zone pricing, and premium menu visibility controls.',
    outcome: 'Elevated guest experience with premium pricing per zone.',
  },
  {
    title: 'Lounges',
    emoji: '🍺',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    challenges: ['Dynamic happy hour pricing', 'Zone-based menu availability', 'Tab management'],
    solution: 'Dynamic pricing by zone and time, real-time menu visibility, and open tab management.',
    outcome: 'Maximized revenue per seat during peak hours.',
  },
  {
    title: 'Resorts',
    emoji: '🌴',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    challenges: ['Multiple dining venues', 'Guest room charging', 'Seasonal menu changes'],
    solution: 'Multi-venue management, room charge integration, and seasonal menu availability controls.',
    outcome: 'Unified operations across all resort dining outlets.',
  },
  {
    title: 'Banquets',
    emoji: '🏛',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    challenges: ['Large party coordination', 'Banquet pricing complexity', 'Pre-event menu planning'],
    solution: 'Banquet pricing rules, pre-event menu selection, and large party table mapping.',
    outcome: 'Streamlined banquet operations, higher event revenue.',
  },
]

export const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Solutions — Industries & Use Cases | DineOS"
        description="DineOS solutions for Restaurants, Hotels, Cafes, Food Courts, Fine Dining, Lounges, Resorts, and Banquets. Industry-specific restaurant operations platforms."
        path="/solutions"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Solutions for Every Hospitality Business"
            subtitle="DineOS adapts to your specific industry — whether you run a cafe, hotel, fine dining restaurant, or resort."
            tagline="Industry Solutions"
          />
        </div>
      </section>

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${sol.bg} ${sol.border}`}>
                  <span className="text-3xl">{sol.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">{sol.title}</h3>

                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Challenges</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {sol.challenges.map((c, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">How DineOS Helps</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{sol.solution}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Expected Outcome</h4>
                  <p className="text-sm font-medium text-white">{sol.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Find Your Solution</h2>
          <p className="text-slate-400 mb-8">Not sure which solution fits your business? Our team can help you choose.</p>
          <LeadForm title="Get a Personalized Solution" buttonText="Request Consultation" />
        </div>
      </section>
    </div>
  )
}

export default Solutions