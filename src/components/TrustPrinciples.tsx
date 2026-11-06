import React from 'react'
import { Compass, Layers3, Workflow } from 'lucide-react'

const principles = [
  { icon: Workflow, title: 'Built around restaurant workflows', copy: 'DineOS follows the real path of service, from the guest request to kitchen execution, payment, and the next business decision.' },
  { icon: Layers3, title: 'Everything connected in one place', copy: 'Bring ordering, billing, kitchen operations, inventory, and reporting into one shared operating view.' },
  { icon: Compass, title: 'Designed for growth across outlets', copy: 'Give each location room to operate while giving owners and franchise teams the consistency and visibility to grow.' },
]

export const TrustPrinciples: React.FC = () => <section className="section-padding bg-slate-950"><div className="container-custom"><div className="max-w-2xl mb-10"><p className="eyebrow">A better operating foundation</p><h2 className="display-heading">Confidence comes from <span className="gradient-text">connected work.</span></h2><p className="section-lede mt-5">DineOS is designed around how restaurants actually run, not how disconnected software is usually sold.</p></div><div className="grid md:grid-cols-3 gap-4">{principles.map(({ icon: Icon, title, copy }) => <div key={title} className="outcome-card"><div className="w-11 h-11 rounded-xl border border-brand-300/20 bg-brand-400/10 flex items-center justify-center text-brand-200"><Icon size={20} /></div><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

export default TrustPrinciples
