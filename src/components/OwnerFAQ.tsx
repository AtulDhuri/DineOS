import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  ['Will staff learn it quickly?', 'DineOS is designed around familiar restaurant workflows. A guided rollout and role-based training can help teams learn the parts they use during service first.'],
  ['Does it support multiple outlets?', 'Yes. DineOS is positioned to connect outlet operations with central visibility for groups and franchise teams. The right setup depends on your menu, roles, and reporting needs.'],
  ['Can I manage inventory?', 'Inventory is part of the operating system, alongside ordering, kitchen operations, billing, and reporting. A demo can map the stock workflow you use today.'],
  ['Can I use my existing printers?', 'Hardware compatibility depends on your current setup, printer model, network, and integration requirements. Bring those details to the demo so the team can confirm the rollout path.'],
  ['How does kitchen management work?', 'Orders can move from the guest or front-of-house workflow into kitchen preparation and status updates, keeping the team aligned from order received to ready to serve.'],
]

export const OwnerFAQ: React.FC = () => { const [open, setOpen] = useState(0); return <section className="section-padding bg-slate-950"><div className="container-custom grid lg:grid-cols-[.8fr_1.2fr] gap-12"><div><p className="eyebrow">Before you switch</p><h2 className="display-heading">Questions restaurant owners usually ask.</h2><p className="section-lede mt-5">Bring the practical questions. A DineOS walkthrough should make the rollout clearer, not add another layer of uncertainty.</p></div><div className="space-y-3">{questions.map(([question, answer], index) => <div key={question} className="rounded-2xl border border-white/10 bg-white/[.03] overflow-hidden"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white"><span>{question}</span><ChevronDown size={18} className={`shrink-0 text-brand-300 transition-transform ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <div className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{answer}</div>}</div>)}</div></div></section> }

export default OwnerFAQ
