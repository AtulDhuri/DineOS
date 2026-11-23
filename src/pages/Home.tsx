import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, BellRing, ChefHat, Check, ChevronDown, Percent, QrCode, Quote, Table2, TimerReset, Users, Smile, ClipboardCheck } from 'lucide-react'
import SEO from '../components/ui/SEO'
import { VideoPlayer } from '../components/ProductDemo'

const features = [
  { title: 'QR Menu Ordering', copy: 'Guests scan the table QR, browse the live menu and order from their phone, prepaid or postpaid.', icon: QrCode },
  { title: 'Real-time Kitchen Updates', copy: 'Orders reach the kitchen queue instantly and status flows back to guests and waiters.', icon: ChefHat },
  { title: 'Table Management', copy: 'Live floor view of available, occupied, ordering and waiting-for-bill tables across zones.', icon: Table2 },
  { title: 'Service Requests', copy: 'Call-waiter and bill requests land with the right team member, not lost across the floor.', icon: BellRing },
  { title: 'Multiple Tax Support', copy: 'Configure the taxes and charges your outlet needs and get clear digital invoices.', icon: Percent },
  { title: 'Analytics Dashboard', copy: 'Revenue, occupancy, popular dishes, table turnover and average order value in one view.', icon: BarChart3 },
]

const benefits = [
  { title: 'Faster Table Turnover', copy: 'Order and pay from the table without waiting on a handoff.', icon: TimerReset },
  { title: 'Reduced Waiter Dependency', copy: 'Staff focus on hospitality while the platform handles routine requests.', icon: Users },
  { title: 'Better Customer Experience', copy: 'Guests see the menu, track the order and pay on their own schedule.', icon: Smile },
  { title: 'Increased Order Accuracy', copy: 'Orders go straight from the guest to the kitchen with no retyping.', icon: ClipboardCheck },
]

const testimonials = [
  { quote: 'Our floor team stopped running back and forth for orders. Everything lands in the kitchen queue the moment a guest taps place order.', name: 'Restaurant owner', role: 'Full-service restaurant' },
  { quote: 'Seeing tables, bills and revenue in one dashboard changed how we manage a busy dinner service.', name: 'Operations manager', role: 'Multi-outlet group' },
  { quote: 'Guests love scanning, ordering and paying without waiting. Setup and training were handled for us.', name: 'Cafe manager', role: 'Cafe & QSR' },
]

const plans = [
  { name: 'Standard Outlet', price: '$79', unit: '/month', setup: '$299 one-time setup', copy: 'For restaurants, cafes, cloud kitchens and single locations.', items: ['QR Table Ordering', 'Kitchen Order Management', 'Real-Time Order Tracking', 'Revenue Reports', 'Unlimited tables'], popular: true },
  { name: 'Multi-Outlet', price: '$199', unit: '/month base', setup: '$999 one-time setup', copy: 'For groups and franchises. $79/month per additional outlet.', items: ['Centralized Dashboard', 'Consolidated Revenue Reports', 'Centralized Menu Management', 'Everything in Standard'], popular: false },
]

const faqs = [
  ['Is DineOS only a QR menu?', 'No. QR ordering is the guest entry point. DineOS also connects the kitchen, waiter operations, billing, tables, zones, availability and analytics.'],
  ['Can I use prepaid and postpaid ordering?', 'Yes. Prepaid suits cafes and food courts, postpaid suits full-service restaurants and hotels.'],
  ['How does onboarding work?', 'Menu configuration, QR generation, tax setup, staff training and go-live assistance are included.'],
]

const iconTone = (i: number) => (i % 2 === 0 ? 'bg-brand-500 text-white shadow-brand-500/30' : 'bg-brand-300 text-slate-900 shadow-brand-300/40')

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SEO title="Restaurant Operations, Simplified" description="DineOS is a QR-based restaurant ordering and management platform: QR ordering, kitchen status, service requests, billing and analytics in one place." path="/" />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-brand-100/80 via-brand-50/50 to-transparent" />
        <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-brand-300/30 blur-[110px]" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-600 shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />QR-based restaurant ordering & management</span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Restaurant Operations, <span className="bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent">Simplified.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">Scan QR, Order Food, Track Kitchen Status, Manage Service Requests, and Run Your Restaurant from a Single Platform.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/demo" className="btn-primary">Book a Demo <ArrowRight size={18} /></Link>
              <Link to="/features" className="btn-secondary">View Features</Link>
            </div>
          </div>

          {/* Hero visual: platform tour video */}
          <div id="tour" className="mx-auto mt-16 max-w-4xl scroll-mt-24">
            <VideoPlayer />
            <p className="mt-4 text-center text-sm text-[#64748B]">Watch the full platform tour: guest ordering, kitchen display and manager dashboard.</p>
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="px-4 py-20 pt-28 sm:px-6 lg:px-8 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-500">Features</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Everything service needs, in one platform</h2>
            <p className="mt-4 text-[#64748B]">From the first scan to the final bill, every team works from the same live view.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, copy, icon: Icon }, i) => (
              <div key={title} className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,.06),0_12px_32px_-16px_rgba(15,23,42,.12)] transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${iconTone(i)}`}><Icon size={22} /></span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-500">Benefits</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Run a calmer, faster floor</h2>
            <p className="mt-4 max-w-md text-[#64748B]">DineOS removes the handoffs that slow service so your team can focus on guests.</p>
            <Link to="/demo" className="mt-8 inline-flex items-center gap-2 font-bold text-brand-600">See it in your restaurant <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map(({ title, copy, icon: Icon }, i) => (
              <div key={title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,23,42,.12)]">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${i % 2 === 0 ? 'bg-brand-50 text-brand-500' : 'bg-brand-100 text-brand-600'}`}><Icon size={21} /></span>
                <h3 className="mt-5 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-500">Testimonials</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Built for the people on the floor</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.quote} className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_12px_32px_-16px_rgba(15,23,42,.12)]">
                <Quote size={24} className="text-brand-300" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#0F172A]">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-300 text-sm font-bold text-white">{t.name[0]}</span><span><span className="block text-sm font-bold">{t.name}</span><span className="block text-xs text-[#64748B]">{t.role}</span></span></figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#64748B]">Sample feedback shown for layout. Replace with verified customer quotes before launch.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-500">Pricing</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-[#64748B]">Unlimited tables and orders. No hidden fees. Cancel anytime.</p>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative flex flex-col rounded-2xl bg-white p-8 ${plan.popular ? 'border-2 border-[#FF8A3D] shadow-2xl shadow-orange-300/25' : 'border border-[#E2E8F0] shadow-sm'}`}>
                {plan.popular && <span className="absolute -top-3 left-8 rounded-full bg-[#FF8A3D] px-3 py-1 text-xs font-bold text-white">Most Popular</span>}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-[#64748B]">{plan.copy}</p>
                <p className="mt-6 flex items-baseline gap-1"><span className="text-5xl font-black tracking-tight">{plan.price}</span><span className="text-sm text-[#64748B]">{plan.unit}</span></p>
                <p className="mt-1 text-xs text-[#64748B]">{plan.setup}</p>
                <ul className="mt-6 flex-1 space-y-3">{plan.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><Check size={16} className="shrink-0 text-[#22C55E]" />{item}</li>)}</ul>
                <Link to="/demo" className={`mt-8 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>{plan.popular ? 'Book a Demo' : 'Talk to sales'}</Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#64748B]">INR pricing and the outlet calculator are on the <Link to="/pricing" className="font-semibold text-brand-600 underline">full pricing page</Link>.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Questions, answered</h2>
          <div className="mt-10 divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white px-6 shadow-sm">
            {faqs.map(([q, a], i) => (
              <div key={q} className="py-5">
                <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 text-left font-semibold"><span>{q}</span><ChevronDown size={18} className={`shrink-0 text-brand-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} /></button>
                {openFaq === i && <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="container-custom relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-300 px-6 py-16 text-center text-white shadow-2xl shadow-brand-500/25 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">See DineOS run your restaurant</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">A practical 15-minute walkthrough. No credit card required.</p>
          <Link to="/demo" className="btn-primary mt-8">Book a Demo <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  )
}

export default Home
