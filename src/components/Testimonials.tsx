import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const proofPoints = ['Connected restaurant workflows', 'Operational views for every team', 'Built for single and multi-outlet operations']

export const Testimonials: React.FC = () => <section className="section-padding bg-slate-900/30"><div className="container-custom"><div className="max-w-2xl mx-auto text-center"><p className="eyebrow">Operational clarity</p><h2 className="display-heading">Trust the workflow, not a marketing number.</h2><p className="section-lede mt-5">DineOS is designed to make the work between guest, team, kitchen, and owner easier to see and easier to act on.</p><div className="mt-8 grid sm:grid-cols-3 gap-3 text-left">{proofPoints.map((point) => <div key={point} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-sm text-slate-300"><CheckCircle2 size={17} className="text-emerald-400 mb-3" />{point}</div>)}</div></div></div></section>

export default Testimonials
