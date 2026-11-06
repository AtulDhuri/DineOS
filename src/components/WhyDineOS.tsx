import React from 'react'
import { Check, X } from 'lucide-react'

const comparisons = [
  ['Billing', 'End-of-day reconciliation', 'Live, connected billing'],
  ['QR ordering', 'Add-on or separate tool', 'Built into the guest journey'],
  ['Kitchen workflow', 'Tickets and manual updates', 'Real-time KOT to KDS flow'],
  ['Inventory', 'Periodic stock counts', 'Know what is moving now'],
  ['Multi-outlet', 'Separate systems and spreadsheets', 'One command centre'],
  ['Franchise controls', 'Limited visibility', 'Central standards and reports'],
  ['Reporting', 'Static, delayed exports', 'Live decisions from one view'],
]

export const WhyDineOS: React.FC = () => <section className="section-padding bg-slate-900/30"><div className="container-custom"><div className="max-w-3xl mb-12"><p className="eyebrow">Why DineOS</p><h2 className="display-heading">Stop stitching together<br /><span className="gradient-text">systems that do not talk.</span></h2><p className="section-lede">Traditional POS tools record transactions. DineOS connects the operation around them.</p></div><div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60"><div className="grid grid-cols-[1.1fr_1fr_1fr] min-w-[680px] border-b border-white/10 bg-white/[.03] px-5 py-4 text-xs font-semibold uppercase tracking-[.14em] text-slate-500"><span>Capability</span><span>Traditional POS</span><span className="text-brand-300">DineOS</span></div>{comparisons.map(([name, oldValue, newValue]) => <div key={name} className="grid grid-cols-[1.1fr_1fr_1fr] min-w-[680px] items-center border-b border-white/[.06] px-5 py-4 text-sm last:border-0"><span className="font-semibold text-white">{name}</span><span className="flex items-center gap-2 text-slate-500"><X size={15} />{oldValue}</span><span className="flex items-center gap-2 text-slate-200"><Check size={15} className="text-emerald-400 shrink-0" />{newValue}</span></div>)}</div><div className="mt-10 grid md:grid-cols-3 gap-4"><div className="outcome-card"><span className="text-brand-300">01</span><h3>Serve more guests</h3><p>Remove the bottlenecks between a guest request and a finished order.</p></div><div className="outcome-card"><span className="text-brand-300">02</span><h3>Reduce costly mistakes</h3><p>Keep the guest, waiter, kitchen, and bill on the same page.</p></div><div className="outcome-card"><span className="text-brand-300">03</span><h3>Grow with visibility</h3><p>Make the next outlet easier to run than the last one.</p></div></div></div></section>

export default WhyDineOS
