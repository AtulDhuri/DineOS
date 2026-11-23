import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Play, QrCode, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const liveSteps = ['QR order placed', 'Kitchen is preparing', 'Bill is ready']

export const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-[#F8FAFC] pt-16 pb-20 lg:pt-28 lg:pb-28">
    <div className="hero-grid opacity-20" />
    <div className="absolute -right-20 top-10 h-[520px] w-[520px] rounded-full bg-brand-500/15 blur-[130px] pointer-events-none" />
    <div className="container-custom relative z-10">
      <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-300/25 bg-brand-300/10 px-3 py-1.5 text-xs font-semibold text-brand-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-300" />The restaurant operating system</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="display-hero !text-slate-950">Run every service from <span className="text-brand-300">one operating system.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="section-lede mt-6 max-w-xl !text-slate-300">Connect the guest experience, kitchen, billing, stock, and business decisions in one operating view, so your team can keep service moving.</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/demo" className="btn-primary"><span>Book a practical demo</span><ArrowRight size={18} /></Link><Link to="/pricing" className="btn-secondary !border-white/25"><span>View pricing</span></Link></motion.div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400"><span className="flex items-center gap-2"><Check size={14} className="text-emerald-300" />15-minute walkthrough</span><span className="flex items-center gap-2"><Check size={14} className="text-emerald-300" />No credit card required</span></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .18, duration: .6 }} className="relative">
          <div className="product-window hero-window !border-white/15 !bg-slate-900/80">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex gap-1.5"><span className="window-dot bg-red-400/70" /><span className="window-dot bg-brand-400/70" /><span className="window-dot bg-emerald-400/70" /></div><span className="font-mono text-xs text-slate-500">app.dineos.cloud</span><span className="flex items-center gap-1.5 text-xs text-emerald-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Live workspace</span></div>
            <div className="bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/10 p-5 md:p-7"><div className="mb-6 flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-slate-500">Manager workspace</p><h2 className="mt-1 text-xl font-bold text-white">Your operation at a glance</h2></div><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-400/15"><TrendingUp size={17} className="text-brand-300" /></div></div><div className="mb-5 grid grid-cols-3 gap-3">{[['Sales overview', 'Connected', 'Live view'], ['Orders', 'In one flow', 'Real-time'], ['Prep status', 'Visible', 'At a glance']].map(([label, value, delta]) => <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3"><p className="mb-2 text-[10px] text-slate-500">{label}</p><p className="text-base font-bold text-white md:text-lg">{value}</p><p className="mt-1 text-[10px] text-emerald-400">↗ {delta}</p></div>)}</div><div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]"><div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="mb-4 flex items-center justify-between"><p className="text-sm font-semibold text-white">Live service volume</p><span className="text-[10px] uppercase tracking-wider text-brand-300">Today</span></div><div className="flex h-24 items-end gap-1.5">{[28, 36, 31, 49, 44, 62, 54, 70, 58, 82, 68, 92, 76, 100].map((height, i) => <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: .4 + i * .03 }} className="flex-1 rounded-t bg-gradient-to-t from-brand-700 to-brand-300" />)}</div></div><div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="mb-3 flex items-center justify-between"><p className="text-sm font-semibold text-white">Order journey</p><QrCode size={16} className="text-brand-300" /></div><div className="space-y-3">{liveSteps.map((step, i) => <div key={step} className="flex items-center gap-2.5"><span className={`h-2 w-2 rounded-full ${i === 1 ? 'animate-pulse bg-brand-300' : 'bg-emerald-400'}`} /><span className="text-xs text-slate-300">{step}</span></div>)}</div></div></div></div>
          </div>
          <Link to="/demo" className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl transition-colors hover:border-brand-300/30 md:flex"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400/15"><Play size={14} className="fill-brand-300 text-brand-300" /></div><div><p className="text-xs font-semibold text-white">See the product tour</p><p className="text-[10px] text-slate-500">Start with a walkthrough</p></div></Link>
        </motion.div>
      </div>
      <div className="mt-20 border-t border-white/10 pt-7"><p className="mb-5 text-center text-xs uppercase tracking-[.22em] text-slate-500">One system for the whole operation</p><div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400"><span>Ordering</span><span>Kitchen</span><span>Service</span><span>Billing</span><span>Reports</span><span>Multi-outlet</span></div></div>
    </div>
  </section>
)

export default Hero
