import React, { useState } from 'react'
import { ArrowRight, BarChart3, Check, ChefHat, CreditCard, LayoutDashboard, Monitor, QrCode, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import ProductDemo from '../components/ProductDemo'
import { LeadForm } from '../components/ui/LeadForm'
import customer from '../assets/screenshots/customer/sequence/4.jpeg'
import customerOrdering from '../assets/screenshots/DineOS_screen1.png'
import kitchen from '../assets/screenshots/kitchen/04-order-received.png'
import manager from '../assets/screenshots/manager/03-dashboard.png'
import admin from '../assets/screenshots/admin/dahsboard1.png'

const modules = [
  ['Customer Ordering', 'QR-based ordering with real-time menu, zone-based pricing, and prepaid or postpaid checkout.', 'Reduce wait times and capture more orders.', QrCode, customerOrdering],
  ['Kitchen Dashboard', 'Live ticket management with prep tracking, order status, and kitchen display synchronization.', 'Eliminate lost orders and clarify prep.', ChefHat, kitchen],
  ['Waiter Operations', 'Table status tracking, ready-order notifications, call waiter requests, and bill management.', 'Give the service team the context to move faster.', Users, manager],
  ['Smart Billing', 'Prepaid, postpaid, split bills, UPI, card, cash, and digital invoices with bill request workflow.', 'Collect payments faster with fewer errors.', CreditCard, customer],
  ['Table Management', 'Live floor map with available, occupied, ordering, waiting bill, and reserved states.', 'See table utilization while service is live.', Monitor, manager],
  ['Zone Management', 'AC, Outdoor, VIP, Lounge, Family, and Banquet zones with custom pricing, menus, and rules.', 'Run different seating models without separate systems.', LayoutDashboard, admin],
  ['Availability Control', 'Mark items available, out of stock, hidden, seasonal, or disabled in real time.', 'Keep the guest menu aligned with the kitchen.', Check, customer],
  ['Analytics', 'Revenue by zone, occupancy, popular dishes, table turnover, average order value, and outlet reports.', 'Turn service activity into better decisions.', BarChart3, admin],
] as const

export const Product: React.FC = () => {
  const [active, setActive] = useState(0)
  const item = modules[active]
  return <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]"><SEO title="Platform" description="Explore DineOS modules for QR ordering, kitchen operations, waiter service, billing, tables, zones, availability, and analytics." path="/product" />
    <section className="border-b border-brand-100 bg-[#F8FAFC] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24"><div className="container-custom"><div className="max-w-3xl"><p className="eyebrow">DineOS platform</p><h1 className="display-hero !text-[#0F172A]">The operating layer between <span className="text-brand-600">every team.</span></h1><p className="section-lede mt-6 max-w-2xl !text-[#64748B]">From the guest's phone to the kitchen ticket, service floor, bill, and manager view, DineOS keeps the full restaurant workflow connected.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/demo#booking" className="btn-primary">See the platform live <ArrowRight size={18} /></Link><Link to="/features" className="btn-secondary">Compare workflows</Link></div></div></div></section>
    <section className="section-padding bg-white"><div className="container-custom"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Explore the system</p><h2 className="display-heading !text-[#0F172A]">Designed around restaurant work, not feature checklists.</h2><div className="mt-8 grid gap-2 sm:grid-cols-2 lg:block">{modules.map(([title, , , Icon], i) => <button type="button" key={title} onClick={() => setActive(i)} className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${i === active ? 'border-brand-300 bg-brand-50' : 'border-slate-200 hover:border-brand-200'}`}><Icon size={18} className={i === active ? 'text-brand-600' : 'text-[#64748B]'} /><span className="text-sm font-bold">{title}</span></button>)}</div></div><div className="rounded-[1.75rem] bg-brand-50 border border-brand-100 p-4 shadow-xl sm:p-6"><p className="text-xs font-bold uppercase tracking-[.18em] text-brand-600">{item[0]}</p><h3 className="mt-2 text-2xl font-bold text-[#0F172A]">{item[1]}</h3><div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div className="rounded-xl bg-white p-2"><img src={item[4]} alt={`${item[0]} product screenshot`} className="aspect-[4/3] w-full object-contain" /></div><div><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Business benefit</p><p className="mt-3 text-xl font-semibold text-[#0F172A]">{item[2]}</p><p className="mt-5 text-sm leading-relaxed text-[#64748B]">The workflow is visible to the people who own it, while the operating context stays connected across the restaurant.</p><Link to="/demo#booking" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-600">Walk through this module <ArrowRight size={16} /></Link></div></div></div></div></div></section>
    <ProductDemo />
    <section className="section-padding bg-[#E6F6F9]"><div className="container-custom"><div className="mx-auto max-w-4xl rounded-3xl border border-brand-200 bg-white p-6 shadow-sm sm:p-10"><div className="mb-8 max-w-2xl"><p className="eyebrow">Make it specific to your operation</p><h2 className="display-heading !text-[#0F172A]">Request a DineOS walkthrough.</h2><p className="mt-4 text-[#64748B]">Tell us about your restaurant and the team can focus the walkthrough on your service model.</p></div><LeadForm title="" buttonText="Request a demo" /></div></div></section>
  </div>
}
export default Product
