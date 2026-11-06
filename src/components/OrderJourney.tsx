import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, ChefHat, CreditCard, LayoutDashboard, QrCode, Receipt, Smartphone, UserRound } from 'lucide-react'

const steps = [
  { label: 'Guest', detail: 'Scans the table QR', icon: UserRound },
  { label: 'QR menu', detail: 'Browses and orders', icon: QrCode },
  { label: 'Order received', detail: 'Routes instantly', icon: Smartphone },
  { label: 'Kitchen', detail: 'Prepares with clarity', icon: ChefHat },
  { label: 'Billing', detail: 'Tracks the table', icon: Receipt },
  { label: 'Payment', detail: 'Closes the session', icon: CreditCard },
  { label: 'Reports', detail: 'Updates in real time', icon: BarChart3 },
  { label: 'Owner view', detail: 'One view of growth', icon: LayoutDashboard },
]

export const OrderJourney: React.FC = () => <section className="section-padding bg-slate-950 overflow-hidden"><div className="container-custom"><div className="text-center max-w-2xl mx-auto mb-14"><p className="eyebrow">The DineOS difference</p><h2 className="display-heading">Every order has<br /><span className="gradient-text">a journey.</span></h2><p className="section-lede mx-auto">DineOS keeps every handoff connected, from the first scan to the final business decision.</p></div><div className="relative"><div className="journey-line" /><div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 relative">{steps.map((step, index) => { const Icon = step.icon; return <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .07 }} className="text-center group"><div className="journey-node mx-auto mb-4 group-hover:border-brand-400 group-hover:bg-brand-500/20 transition-colors"><Icon size={20} /></div><p className="text-sm font-semibold text-white mb-1">{step.label}</p><p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p></motion.div> })}</div></div><div className="mt-14 text-center"><p className="text-sm text-slate-500 mb-4">One source of truth for every team, every outlet, every shift.</p><a href="#demo" className="inline-flex items-center gap-2 text-brand-300 hover:text-brand-200 font-semibold">See DineOS in action <span>→</span></a></div></div></section>

export default OrderJourney
