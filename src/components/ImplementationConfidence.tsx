import React from 'react'
import { CheckCircle2, Database, GraduationCap, Printer, Rocket, Utensils } from 'lucide-react'

const steps = [
  { title: 'Menu setup', copy: 'We help configure menus, pricing, taxes, tables, and outlet rules.', icon: Utensils },
  { title: 'Staff training', copy: 'Teams learn the workflows they use during service, role by role.', icon: GraduationCap },
  { title: 'Printer setup', copy: 'We review your printer and network setup before go-live.', icon: Printer },
  { title: 'Data migration', copy: 'Existing menu and operating data is mapped into the new workflow where supported.', icon: Database },
  { title: 'Multi-outlet onboarding', copy: 'Roll out outlet by outlet with shared standards and central visibility.', icon: CheckCircle2 },
  { title: 'Go-live support', copy: 'Your team has a clear launch plan and support through the first service.', icon: Rocket },
]

export const ImplementationConfidence: React.FC = () => <section className="section-padding bg-slate-900/30"><div className="container-custom"><div className="max-w-3xl mb-8"><p className="eyebrow">Switch with a plan</p><h2 className="display-heading">Implementation should feel <span className="gradient-text">clear, not risky.</span></h2><p className="section-lede mt-5">A DineOS demo covers the operating workflow and the practical rollout questions before your team commits to a change.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{steps.map(({ title, copy, icon: Icon }) => <div key={title} className="outcome-card"><div className="w-10 h-10 rounded-xl border border-brand-300/20 bg-brand-400/10 flex items-center justify-center text-brand-200"><Icon size={18} /></div><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

export default ImplementationConfidence
