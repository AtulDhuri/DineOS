import React from 'react'
import { ArrowRight, CalendarCheck, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export const FinalCTA: React.FC = () => (
  <section id="demo" className="relative overflow-hidden bg-[#E6F6F9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
    <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-300/30 blur-3xl" />
    <div className="container-custom relative z-10">
      <div className="text-center">
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center text-brand-700"><CalendarCheck size={32} /></div>
        <p className="eyebrow !text-brand-700">Ready when you are</p>
        <h2 className="display-heading mx-auto max-w-3xl !text-slate-950">Give your restaurant a <span className="text-brand-700">better operating system.</span></h2>
        <p className="section-lede mx-auto mt-5 max-w-2xl !text-slate-700">See how DineOS can help your team serve faster, reduce mistakes, and run every outlet with more confidence.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/demo" className="btn-primary">Book a demo <ArrowRight size={18} /></Link><Link to="/pricing" className="btn-secondary "><Play size={16} /> Explore plans</Link></div>
        <p className="mt-5 text-xs font-medium !text-slate-700">A practical 15-minute walkthrough. No pressure, no credit card.</p>
      </div>
    </div>
  </section>
)

export default FinalCTA
