import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play, RotateCcw, ArrowDown, Check } from 'lucide-react'
import customerQr from '../assets/screenshots/customer/sequence/0.png'
import customerWelcome from '../assets/screenshots/customer/sequence/1.png'
import customerTable from '../assets/screenshots/customer/sequence/2.png'
import customerMenu from '../assets/screenshots/customer/sequence/3.jpeg'
import customerCart from '../assets/screenshots/customer/sequence/4.jpeg'
import customerConfirmation from '../assets/screenshots/customer/sequence/5.jpeg'
import customerPreparing from '../assets/screenshots/customer/sequence/6.jpeg'
import customerReady from '../assets/screenshots/customer/sequence/7.jpeg'
import customerServed from '../assets/screenshots/customer/sequence/8.jpeg'
import customerPay from '../assets/screenshots/customer/sequence/9.jpeg'
import kitchenPreparation from '../assets/screenshots/kitchen/Order_arrvied.png'
import billingDashboard from '../assets/screenshots/manager/04-restaurant-orders.png'
import franchiseDashboard from '../assets/screenshots/admin/dahsboard1.png'

type FrameType = 'phone' | 'browser' | 'pos' | 'dashboard'
type StoryStage = { role: string; label: string; detail: string; image: string; frame: FrameType; transition?: string }

const stages: StoryStage[] = [
  { role: 'Customer', label: 'Scan QR', detail: 'The guest starts from the table QR code.', image: customerQr, frame: 'phone' },
  { role: 'Customer', label: 'Welcome screen', detail: 'A branded mobile ordering experience starts the visit.', image: customerWelcome, frame: 'phone' },
  { role: 'Customer', label: 'Enter table', detail: 'The table context is captured before ordering begins.', image: customerTable, frame: 'phone' },
  { role: 'Customer', label: 'Menu browsing', detail: 'The guest explores the menu from the table without waiting for a handoff.', image: customerMenu, frame: 'phone' },
  { role: 'Customer', label: 'Cart and checkout', detail: 'The order is reviewed before it enters the restaurant workflow.', image: customerCart, frame: 'phone' },
  { role: 'Customer', label: 'Order confirmation', detail: 'The guest sees that the order has been placed and is moving forward.', image: customerConfirmation, frame: 'phone', transition: 'Guest order enters DineOS' },
  { role: 'Customer', label: 'Order preparing', detail: 'The guest can follow the order as preparation begins.', image: customerPreparing, frame: 'phone' },
  { role: 'Customer', label: 'Order ready', detail: 'The customer view updates when the kitchen marks the order ready.', image: customerReady, frame: 'phone' },
  { role: 'Customer', label: 'Order served', detail: 'The completed order remains visible in the guest journey.', image: customerServed, frame: 'phone' },
  { role: 'Customer', label: 'Pay bill', detail: 'The journey closes with the customer payment screen.', image: customerPay, frame: 'phone' },
  { role: 'Kitchen', label: 'Order preparation', detail: 'The kitchen moves the order through preparation and service.', image: kitchenPreparation, frame: 'browser', transition: 'Order ready' },
  { role: 'Manager', label: 'Manager dashboard', detail: 'Managers review restaurant activity, open bills, receipts, and payment status from one workspace.', image: billingDashboard, frame: 'dashboard' },
  { role: 'Admin', label: 'Admin dashboard', detail: 'The admin view brings the wider business picture into focus for central decisions.', image: franchiseDashboard, frame: 'dashboard', transition: 'Business insights updated' },
]

const frameClasses: Record<FrameType, string> = {
  phone: 'story-frame-phone',
  browser: 'story-frame-browser',
  pos: 'story-frame-pos',
  dashboard: 'story-frame-dashboard',
}

interface ProductDemoProps {
  compact?: boolean
}

export const ProductDemo: React.FC<ProductDemoProps> = ({ compact = false }) => {
  const activeStages = compact ? [stages[3], stages[10], stages[11], stages[12]] : stages
  const [stageIndex, setStageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stage = activeStages[stageIndex]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!isPlaying || reducedMotion) return
    const timer = window.setInterval(() => setStageIndex((current) => (current + 1) % activeStages.length), 4200)
    return () => window.clearInterval(timer)
  }, [isPlaying, reducedMotion, activeStages.length])

  const reset = () => {
    setStageIndex(0)
    setIsPlaying(true)
  }

  return <section id="product-demo" className="product-demo-section bg-slate-900/30"><div className="container-custom"><div className="max-w-3xl mb-6"><p className="eyebrow">{compact ? 'Product proof' : 'One connected order story'}</p><h2 className="display-heading">{compact ? <>One order. <span className="gradient-text">Every team connected.</span></> : <>Customer phone to <span className="gradient-text">admin view.</span></>}</h2><p className="section-lede mt-5">{compact ? 'See how one restaurant order moves from the guest to the people running the business.' : 'One order moves through the restaurant while every team sees the part of the workflow they own.'}</p></div><div className="product-window overflow-hidden"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 bg-slate-950/75 px-4 py-3"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400/10 text-brand-200"><Check size={16} /></span><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-brand-300">{stage.role}</p><p className="text-sm text-slate-400">{stage.label}</p></div></div><div className="flex items-center gap-2"><div className="hidden sm:flex items-center gap-1.5 mr-2">{activeStages.map((item, index) => <span key={item.label} className={`h-1.5 rounded-full transition-all ${index === stageIndex ? 'w-7 bg-brand-300' : index < stageIndex ? 'w-3 bg-brand-500/60' : 'w-1.5 bg-white/20'}`} />)}</div><button type="button" onClick={() => setIsPlaying((playing) => !playing)} className="demo-control" aria-label={isPlaying ? 'Pause order story' : 'Play order story'}>{isPlaying ? <Pause size={14} /> : <Play size={14} />}{isPlaying ? 'Pause' : 'Play'}</button><button type="button" onClick={reset} className="demo-control" aria-label="Replay order story"><RotateCcw size={14} />Replay</button></div></div><div className="relative grid lg:grid-cols-[minmax(0,1fr)_280px] gap-5 items-center p-4 md:p-6 bg-gradient-to-br from-brand-500/[.08] via-transparent to-cyan-500/[.04]"><div className="flex min-h-[360px] items-center justify-center"><AnimatePresence mode="wait"><motion.div key={stage.image} initial={{ opacity: 0, y: reducedMotion ? 0 : 18, scale: reducedMotion ? 1 : .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -14, scale: reducedMotion ? 1 : 1.01 }} transition={{ duration: reducedMotion ? 0 : .45 }} className={`story-frame ${frameClasses[stage.frame]}`}><div className="story-frame-bar">{stage.frame !== 'phone' && <><span className="window-dot bg-red-400/70" /><span className="window-dot bg-amber-400/70" /><span className="window-dot bg-emerald-400/70" /><span className="ml-2 text-[10px] text-slate-500 font-mono">app.dineos.cloud</span></>}{stage.frame === 'phone' && <span className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />}</div><div className="story-frame-screen"><img src={stage.image} alt={`${stage.role}: ${stage.label}`} /></div></motion.div></AnimatePresence></div><div className="relative"><p className="text-xs uppercase tracking-[.18em] text-slate-500">Stage {stageIndex + 1} of {activeStages.length}</p><h3 className="mt-3 text-3xl font-bold leading-tight text-white">{stage.label}</h3><p className="mt-4 text-sm leading-relaxed text-slate-400">{stage.detail}</p>{stage.transition && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex items-center gap-3 rounded-xl border border-brand-300/20 bg-brand-400/10 px-4 py-3 text-sm font-semibold text-brand-100"><ArrowDown size={16} className="text-brand-300" />{stage.transition}</motion.div>}<div className="mt-8 border-t border-white/10 pt-5"><p className="text-xs uppercase tracking-[.16em] text-slate-500">Connected by DineOS</p><p className="mt-2 text-sm font-medium text-white">One system. One workflow. One source of truth.</p></div></div></div></div></div></section>
}

export default ProductDemo
