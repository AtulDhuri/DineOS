import React from 'react'
import { ArrowRight, ClipboardCheck, MessageSquare, PlayCircle, Wrench } from 'lucide-react'

const expectations = [
  { icon: MessageSquare, title: 'Submit your details', copy: 'Tell us your restaurant model, outlet count, and the workflow you want to improve.' },
  { icon: ClipboardCheck, title: 'A product specialist reviews it', copy: 'Your request goes to the DineOS team so the walkthrough can match your operation.' },
  { icon: PlayCircle, title: 'See a practical walkthrough', copy: 'We cover customer ordering, kitchen flow, billing, management, and admin visibility.' },
  { icon: Wrench, title: 'Bring your rollout questions', copy: 'Have your menu, printer setup, outlet structure, and current workflow ready if relevant.' },
]

export const DemoExpectations: React.FC = () => <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 md:p-8"><p className="eyebrow">What happens next</p><h3 className="text-2xl font-bold text-white">A useful demo starts before the call.</h3><p className="text-sm leading-relaxed text-slate-400 mt-3">After you submit the form, a DineOS product specialist will review your request. Our team will try to reach you within 5 working days to arrange a practical walkthrough.</p><div className="space-y-4 mt-6">{expectations.map(({ icon: Icon, title, copy }, index) => <div key={title} className="flex items-start gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-400/10 text-brand-200"><Icon size={16} /></div><div><p className="text-sm font-semibold text-white">{index + 1}. {title}</p><p className="text-xs leading-relaxed text-slate-500 mt-1">{copy}</p></div></div>)}</div></div>

export default DemoExpectations
