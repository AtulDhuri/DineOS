import React from 'react'
import { ArrowRight, BarChart3, ChefHat, CreditCard, QrCode, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import customerScreen from '../assets/screenshots/customer/sequence/4.jpeg'
import kitchenScreen from '../assets/screenshots/kitchen/04-order-received.png'
import managerScreen from '../assets/screenshots/manager/03-dashboard.png'

const stages = [
  { label: 'Guest', title: 'Order at the table', copy: 'QR ordering gives guests the right menu, table context, and prepaid or postpaid checkout.', icon: QrCode, color: 'text-brand-300' },
  { label: 'Kitchen', title: 'Prepare with clarity', copy: 'Tickets, prep status, and ready notifications keep the pass and front of house aligned.', icon: ChefHat, color: 'text-brand-300' },
  { label: 'Service', title: 'Move the floor forward', copy: 'Track tables, calls, ready orders, and bill requests without chasing updates.', icon: Users, color: 'text-brand-300' },
  { label: 'Management', title: 'See the operation', copy: 'Review revenue, occupancy, popular dishes, turnover, and payment status in one view.', icon: BarChart3, color: 'text-emerald-300' },
]

const screens = [
  { label: 'Guest ordering', image: customerScreen },
  { label: 'Kitchen queue', image: kitchenScreen },
  { label: 'Manager view', image: managerScreen },
]

export const OperatingLoop: React.FC = () => (
  <section className="section-padding bg-[#E6F6F9] text-slate-900">
    <div className="container-custom">
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-20 items-end">
        <div>
          <p className="eyebrow text-brand-700">The connected operating loop</p>
          <h2 className="display-heading !text-slate-950">Every handoff is visible, from scan to <span className="text-brand-600">settlement.</span></h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">DineOS connects the guest, kitchen, service team, and manager in the same workflow. That means fewer calls across the floor and fewer places for an order to disappear.</p>
          <Link to="/demo" className="inline-flex items-center gap-2 mt-7 font-semibold text-slate-950 hover:text-brand-700">Walk through the workflow <ArrowRight size={17} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {stages.map(({ label, title, copy, icon: Icon, color }, index) => (
            <div key={label} className="p-5">
              <div className="flex items-center justify-between mb-5"><span className="text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">0{index + 1} / {label}</span><Icon size={19} className={color} /></div>
              <h3 className="text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-4">
        {screens.map(({ label, image }) => <div key={label} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl"><div className="flex items-center gap-2 border-b border-white/10 px-4 py-3"><span className="h-2 w-2 rounded-full bg-brand-400" /><span className="text-xs font-semibold text-slate-300">{label}</span></div><div className="h-52 bg-slate-950 p-3"><img src={image} alt={`${label} interface in DineOS`} className="h-full w-full object-contain" loading="lazy" /></div></div>)}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[.16em] text-slate-500"><span className="flex items-center gap-2"><QrCode size={14} /> QR ordering</span><span className="flex items-center gap-2"><CreditCard size={14} /> Flexible billing</span><span className="flex items-center gap-2"><BarChart3 size={14} /> Operational reporting</span></div>
    </div>
  </section>
)

export default OperatingLoop
