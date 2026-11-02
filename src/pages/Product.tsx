import React from 'react'
import { SEO } from '../components/ui/SEO'
import { LeadForm } from '../components/ui/LeadForm'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Monitor, CreditCard, Flame, Users, ChartPie } from 'lucide-react'

const productModules = [
  {
    title: 'Customer Ordering',
    desc: 'QR-based ordering with real-time menu, zone-based pricing, and prepaid/postpaid checkout.',
    benefit: 'Reduce wait times and increase table turnover.',
    icon: Smartphone,
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    title: 'Kitchen Dashboard',
    desc: 'Real-time ticket management with prep tracking, order status, and kitchen display synchronization.',
    benefit: 'Eliminate lost orders and speed up prep times.',
    icon: Flame,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    title: 'Waiter Operations',
    desc: 'Table status tracking, ready order notifications, call waiter requests, and bill management.',
    benefit: 'Better guest experience with faster service.',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    title: 'Smart Billing',
    desc: 'Prepaid, postpaid, split bills, UPI, card, cash, and digital invoices with bill request workflow.',
    benefit: 'Faster payment collection and fewer errors.',
    icon: CreditCard,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    title: 'Table Management',
    desc: 'Live floor map with table status (available, occupied, ordering, waiting bill, reserved).',
    benefit: 'Maximize table utilization and revenue.',
    icon: Monitor,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    title: 'Zone Management',
    desc: 'AC, Outdoor, VIP, Lounge, Family, Banquet zones with custom pricing, menus, and rules.',
    benefit: 'Premium pricing for premium seating.',
    icon: ChartPie,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    title: 'Availability Control',
    desc: 'Real-time menu availability - mark items available, out of stock, hidden, seasonal, or disabled.',
    benefit: 'No more 86d items disappointing guests.',
    icon: ArrowRight,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    title: 'Analytics',
    desc: 'Revenue by zone, occupancy rates, popular dishes, table turnover, and average order value.',
    benefit: 'Data-driven decisions for growth.',
    icon: ChartPie,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

export const Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Product — DineOS Restaurant Operations Platform"
        description="Complete overview of DineOS platform modules: Customer Ordering, Kitchen Dashboard, Waiter Operations, Smart Billing, Table Management, Zone Management, Availability Control, and Analytics."
        path="/product"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Complete Platform Overview"
            subtitle="Everything you need to run modern restaurant operations — from the guest's phone to the kitchen ticket printer."
            tagline="DineOS Platform"
          />
        </div>
      </section>

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productModules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${mod.bg} ${mod.border}`}>
                  <mod.icon className={`text-2xl ${mod.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{mod.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{mod.desc}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-brand-400 tracking-wider uppercase">Key Benefit</span>
                  <span className="text-xs text-slate-300">{mod.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your restaurant operations?</h2>
            <p className="text-slate-400 text-lg mb-8">Join hundreds of restaurants using DineOS to streamline operations and increase revenue.</p>
            <LeadForm title="Get Started with DineOS" buttonText="Start Free Trial" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product