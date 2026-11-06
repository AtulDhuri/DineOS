import React from 'react'
import { ArrowRight, ChefHat, Coffee, Crown, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const models = [
  { title: 'Restaurants', copy: 'Keep tables, orders, kitchen, billing, and service moving together through every shift.', icon: Store },
  { title: 'Cafes & QSRs', copy: 'Make ordering and payment feel quick during peak service without losing visibility.', icon: Coffee },
  { title: 'Cloud kitchens', copy: 'Coordinate incoming orders, prep flow, menus, and reporting from one operating view.', icon: ChefHat },
  { title: 'Multi-outlet groups', copy: 'Create consistent operating standards while keeping each outlet accountable.', icon: Crown },
]

export const RestaurantModels: React.FC = () => <section className="section-padding bg-slate-900/30"><div className="container-custom"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8"><div><p className="eyebrow">Designed for your model</p><h2 className="display-heading">One operating system, <span className="gradient-text">different service models.</span></h2></div><p className="section-lede max-w-md">Start with the workflows your operation needs today. Add structure as your business grows.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{models.map(({ title, copy, icon: Icon }) => <Link to="/solutions" key={title} className="group outcome-card"><div className="flex items-start justify-between"><div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[.04] flex items-center justify-center text-brand-200"><Icon size={19} /></div><ArrowRight size={16} className="text-slate-600 group-hover:text-brand-300 transition-colors" /></div><h3>{title}</h3><p>{copy}</p></Link>)}</div></div></section>

export default RestaurantModels
