import React from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Smartphone, CreditCard, Users, Shield, Clock, Layout, Eye, Flame } from 'lucide-react'

const features = [
  {
    title: 'QR Ordering',
    problem: 'Customers wait for menus and servers, slowing down table turnover.',
    solution: 'Scan a QR code at the table to instantly open the digital menu and place orders.',
    benefit: '30% faster table turnover, reduced labor costs.',
    icon: Smartphone,
    color: 'text-brand-400',
  },
  {
    title: 'Prepaid Ordering',
    problem: 'Payment collection at the table delays kitchen start and slows service.',
    solution: 'Collect payment before the kitchen starts preparing — ideal for cafes and QSR.',
    benefit: 'Faster service, no bill collection at table.',
    icon: CreditCard,
    color: 'text-green-400',
  },
  {
    title: 'Postpaid Ordering',
    problem: 'Full-service restaurants need flexible payment — serve first, pay later.',
    solution: 'Order now, pay at the end with bill request workflow and split bill support.',
    benefit: 'Premium guest experience for fine dining.',
    icon: CreditCard,
    color: 'text-blue-400',
  },
  {
    title: 'Zone Based Pricing',
    problem: 'Same item priced the same across all zones misses revenue opportunities.',
    solution: 'Set different prices for AC, VIP, Lounge, and Outdoor zones — auto-detected by table.',
    benefit: 'Higher revenue from premium seating areas.',
    icon: Layout,
    color: 'text-purple-400',
  },
  {
    title: 'Zone Based Menu Visibility',
    problem: 'Premium items should not be visible in casual zones.',
    solution: 'Control which menu items appear in which zones - VIP exclusives stay exclusive.',
    benefit: 'Protect premium offerings and brand positioning.',
    icon: Eye,
    color: 'text-pink-400',
  },
  {
    title: 'Kitchen Dashboard',
    problem: 'Paper tickets get lost, and kitchen staff cannot track prep status.',
    solution: 'Real-time KDS with ticket tracking, prep timers, and order status updates.',
    benefit: 'Zero lost orders, faster prep times.',
    icon: Flame,
    color: 'text-orange-400',
  },
  {
    title: 'Waiter Dashboard',
    problem: 'Waiters waste time walking between tables and kitchen to check status.',
    solution: 'Live table status, ready order alerts, call waiter requests, and bill management.',
    benefit: 'Better guest experience, faster service.',
    icon: Users,
    color: 'text-teal-400',
  },
  {
    title: 'Floor Management',
    problem: 'No visibility into which tables are available, occupied, or waiting for bill.',
    solution: 'Interactive floor map with color-coded table status updates in real-time.',
    benefit: 'Maximize table utilization and revenue.',
    icon: Layout,
    color: 'text-indigo-400',
  },
  {
    title: 'Table Mapping',
    problem: 'Customers manually enter table numbers, causing errors.',
    solution: 'QR scan automatically detects zone and table — no manual entry required.',
    benefit: 'Zero errors, instant table identification.',
    icon: Shield,
    color: 'text-emerald-400',
  },
  {
    title: 'Menu Availability Control',
    problem: '86d items still appear on digital menus, disappointing guests.',
    solution: 'Kitchen staff mark items unavailable - customer menus update instantly without refresh.',
    benefit: 'No more disappointed guests or refunds.',
    icon: Clock,
    color: 'text-red-400',
  },
  {
    title: 'Bill Requests',
    problem: 'Guests wait for the check, delaying table turnover.',
    solution: 'Waiters notified instantly when guests request bills — digital invoices generated.',
    benefit: 'Faster payment, quicker table turnover.',
    icon: CreditCard,
    color: 'text-rose-400',
  },
  {
    title: 'Analytics',
    problem: 'Restaurant owners lack visibility into revenue, occupancy, and popular items.',
    solution: 'Real-time dashboards with revenue by zone, popular dishes, and table turnover metrics.',
    benefit: 'Data-driven decisions for growth.',
    icon: Layout,
    color: 'text-violet-400',
  },
]

export const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Features — DineOS Restaurant Operations Platform"
        description="DineOS features: QR Ordering, Prepaid & Postpaid Ordering, Zone Based Pricing, Zone Based Menu Visibility, Kitchen Dashboard, Waiter Dashboard, Floor Management, Table Mapping, Menu Availability Control, Bill Requests, and Analytics."
        path="/features"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Platform Features"
            subtitle="Every feature designed to solve real restaurant operational challenges — from ordering to analytics."
            tagline="Feature Overview"
          />
        </div>
      </section>

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color.replace('text-', 'bg-')}/20 border border-[${feature.color}]/30`}>
                  <feature.icon className={`text-xl ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">The Problem</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-1">The Solution</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{feature.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Benefit</p>
                  <p className="text-sm font-medium text-white">{feature.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See All Features in Action</h2>
          <p className="text-slate-400 mb-8">Book a personalized demo to see how DineOS transforms your specific restaurant operations.</p>
          <div className="flex flex-col gap-2">
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features