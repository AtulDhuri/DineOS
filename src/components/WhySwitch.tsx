import React from 'react'
import { ArrowRight, Check, FileSpreadsheet, MessageCircle, Receipt, BarChart3, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

const stack = [
  { label: 'Excel', icon: FileSpreadsheet },
  { label: 'WhatsApp', icon: MessageCircle },
  { label: 'Billing software', icon: Receipt },
  { label: 'Manual reports', icon: BarChart3 },
  { label: 'Multiple logins', icon: LogIn },
]

export const WhySwitch: React.FC = () => <section className="section-padding bg-slate-900/30"><div className="container-custom"><div className="max-w-3xl mb-12"><p className="eyebrow">A simpler way to operate</p><h2 className="display-heading">Why replace your existing setup?</h2><p className="section-lede">When information is spread across tools, your team spends service stitching it together. DineOS brings the workflow into one connected system.</p></div><div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-10"><div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-8"><p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-500 mb-6">The stack you are managing</p><div className="grid sm:grid-cols-2 gap-3">{stack.map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.03] px-4 py-3 text-sm text-slate-400"><Icon size={17} className="text-slate-500" />{label}</div>)}</div><p className="text-sm text-slate-500 mt-6">More handoffs. More places for context to get lost.</p></div><div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-brand-300/30 bg-brand-500/10 text-brand-300"><ArrowRight size={20} /></div><div className="rounded-3xl border border-brand-300/25 bg-gradient-to-br from-brand-500/15 to-slate-950/60 p-6 md:p-8 shadow-2xl shadow-brand-900/10"><p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-300 mb-6">The DineOS operating system</p><div className="space-y-3"><div className="flex items-center gap-3 text-white"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-400/20 text-brand-200"><Check size={16} /></span>One system</div><div className="flex items-center gap-3 text-white"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-400/20 text-brand-200"><Check size={16} /></span>One login</div><div className="flex items-center gap-3 text-white"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-400/20 text-brand-200"><Check size={16} /></span>One workflow</div></div><p className="text-sm text-slate-400 mt-6">Give every team the same view of the order, the table, and the business.</p><Link to="/demo" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-200 hover:text-brand-100">See how the switch works <ArrowRight size={15} /></Link></div></div></div></section>

export default WhySwitch
