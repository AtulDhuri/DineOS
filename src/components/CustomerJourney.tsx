import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, CreditCard, Clock, ArrowRight, CheckCircle, Bell, Layout, Shield, Users, TrendingUp, FileText, Zap, Printer, Filter, Settings } from 'lucide-react'

function ShoppingCart(props: any) {
  return (
    <svg {...props} className="lucide lucide-shopping-cart" viewBox="0 0 24 24">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l1.66 17.46c.21 2.25 1.82 4.02 4.07 4.02h11c2.25 0 3.86-1.77 4.07-4.02l1.66-17.46h1.91" />
      <path d="M3 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h1.06l.34 3.61a2 2 0 0 1-1.94 2.29H5.92a2 2 0 0 1-1.94-1.82l.34-3.61z" />
      <path d="M16 17v-1a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1" />
    </svg>
  )
}

const stepIcons: Record<string, React.FC<any>> = {
  'QR Scan': Smartphone,
  'Token Resolved': Shield,
  'Table+Zone Detected': Layout,
  'Session Minted': CreditCard,
  'Session Resumed': CreditCard,
  'Menu with Zone Prices': Layout,
  'Add to Cart': ShoppingCart,
  'UPI Payment': CreditCard,
  'Place Order': ArrowRight,
  'Order to Kitchen': Bell,
  'Live Tracker': Clock,
  'Session Closed': CheckCircle,
  'Payment → Session Closed': CheckCircle,
  'New Order + Sound': Bell,
  'Grouped by Table': Users,
  'Elapsed Timer': Clock,
  'Advance Status': ArrowRight,
  'Reminder/Danger Alerts': Zap,
  'Cancel Order': TrendingUp,
  'Force-Close Table': Printer,
  'Live Feed': TrendingUp,
  'KPI Bar': TrendingUp,
  'Delayed Panel': Clock,
  'Mark PAID': CheckCircle,
  'Print Receipt': Printer,
  'Filter+Export': Filter,
  'Order-Ready Sound': Bell,
  'Setup Wizard': Settings,
  'PDF/JSON Menu Upload': FileText,
  'Tables+Zones': Layout,
  'Availability Toggles': Zap,
  'QR Generation': Smartphone,
  'Staff Management': Users,
  'Analytics': TrendingUp,
}

const realtimeTags: Record<string, string> = {
  kitchen: '🔴 Realtime: New order fires to Kitchen',
  customer: '🔴 Realtime: Status change fires to Customer tracker',
  km: '🔴 Realtime: Cancellation fires between Kitchen ↔ Manager',
}

const customerPrepaidSteps = [
  { title: 'QR Scan', desc: 'Customer scans table QR code', rt: false },
  { title: 'Token Resolved', desc: 'Auth token resolved for session', rt: false },
  { title: 'Table+Zone Detected', desc: 'VIP Zone • Table 15 auto-detected', rt: false },
  { title: 'Session Minted', desc: 'New ordering session created', rt: false },
  { title: 'Menu with Zone Prices', desc: 'Zone-specific pricing displayed', rt: false },
  { title: 'Add to Cart', desc: 'Items added to cart', rt: false },
  { title: 'UPI Payment', desc: 'Payment collected upfront', rt: true, rtTarget: 'kitchen' },
  { title: 'Order to Kitchen', desc: 'Kitchen receives order ticket', rt: true, rtTarget: 'kitchen' },
  { title: 'Live Tracker', desc: 'Placed → Preparing → Served', rt: true, rtTarget: 'customer' },
  { title: 'Session Closed', desc: 'Session auto-closes after serve', rt: false },
]

const customerPostpaidSteps = [
  { title: 'QR Scan', desc: 'Customer scans table QR code', rt: false },
  { title: 'Token Resolved', desc: 'Auth token resolved for session', rt: false },
  { title: 'Table+Zone Detected', desc: 'VIP Zone • Table 15 auto-detected', rt: false },
  { title: 'Session Minted', desc: 'New ordering session created', rt: false },
  { title: 'Menu with Zone Prices', desc: 'Zone-specific pricing displayed', rt: false },
  { title: 'Add to Cart', desc: 'Items added to cart', rt: false },
  { title: 'Place Order', desc: 'Order placed, no payment yet', rt: true, rtTarget: 'kitchen' },
  { title: 'Order to Kitchen', desc: 'Kitchen receives order ticket', rt: true, rtTarget: 'kitchen' },
  { title: 'Live Tracker', desc: 'Placed → Preparing → Served', rt: true, rtTarget: 'customer' },
  { title: 'Payment → Session Closed', desc: 'Bill paid, session auto-closes', rt: true, rtTarget: 'km' },
]

const kitchenSteps = [
  { title: 'New Order + Sound', desc: '🔴 Realtime: New order fires to Kitchen', rt: true, rtTarget: 'kitchen' },
  { title: 'Grouped by Table', desc: 'Orders grouped by table number', rt: false },
  { title: 'Elapsed Timer', desc: 'Prep time tracked per order', rt: false },
  { title: 'Advance Status', desc: 'Placed → Preparing → Ready → Served', rt: true, rtTarget: 'customer' },
  { title: 'Reminder/Danger Alerts', desc: 'Overdue order alerts', rt: false },
  { title: 'Cancel Order / Force-Close', desc: '🔴 Realtime: Cancellation fires Kitchen ↔ Manager', rt: true, rtTarget: 'km' },
]

const managerSteps = [
  { title: 'Realtime Live Feed', desc: '🔴 Realtime: All orders stream live', rt: true, rtTarget: 'kitchen' },
  { title: 'KPI Bar', desc: 'Sales, orders, AOV, occupancy metrics', rt: false },
  { title: 'Delayed Panel', desc: 'Orders exceeding prep time threshold', rt: false },
  { title: 'Mark PAID', desc: 'Mark order as paid', rt: true, rtTarget: 'customer' },
  { title: 'Cancel Order', desc: 'Cancel order with reason', rt: true, rtTarget: 'km' },
  { title: 'Print Receipt', desc: 'Print kitchen/customer receipt', rt: false },
  { title: 'Filter+Export', desc: 'Filter and export order data', rt: false },
  { title: 'Order-Ready Sound', desc: 'Audio alert when order ready', rt: false },
]

const adminSteps = [
  { title: 'Setup Wizard', desc: 'Initial restaurant setup', rt: false },
  { title: 'PDF/JSON Menu Upload', desc: 'Upload menu via PDF or JSON', rt: false },
  { title: 'Tables+Zones', desc: 'Configure tables and zones', rt: false },
  { title: 'Availability Toggles', desc: 'Enable/disable menu items', rt: false },
  { title: 'QR Generation', desc: 'Generate table QR codes', rt: false },
  { title: 'Staff Management', desc: 'Add/manage staff roles', rt: false },
  { title: 'Analytics', desc: 'View restaurant analytics', rt: false },
]

const roleConfigs: Record<string, {
  title: string
  subtitle: string
  steps: Array<{ title: string; desc: string; rt: boolean; rtTarget?: string }>
  icon: React.FC<any>
  color: string
}> = {
  'customer-prepaid': {
    title: 'Customer — Prepaid',
    subtitle: '10 steps from QR scan to session close',
    steps: customerPrepaidSteps,
    icon: Smartphone,
    color: 'text-green-400',
  },
  'customer-postpaid': {
    title: 'Customer — Postpaid',
    subtitle: '10 steps from QR scan to payment close',
    steps: customerPostpaidSteps,
    icon: CreditCard,
    color: 'text-blue-400',
  },
  kitchen: {
    title: 'Kitchen',
    subtitle: '6 steps from new order to force-close',
    steps: kitchenSteps,
    icon: Layout,
    color: 'text-orange-400',
  },
  manager: {
    title: 'Manager',
    subtitle: '8 steps from live feed to order-ready sound',
    steps: managerSteps,
    icon: Users,
    color: 'text-purple-400',
  },
  admin: {
    title: 'Admin',
    subtitle: '7 steps from setup wizard to analytics',
    steps: adminSteps,
    icon: Settings,
    color: 'text-pink-400',
  },
}

const stepColors: Record<string, string> = {
  'QR Scan': 'text-brand-400 bg-brand-500/20 border border-brand-500/30',
  'Token Resolved': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Table+Zone Detected': 'text-indigo-400 bg-indigo-500/20 border border-indigo-500/30',
  'Session Minted': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Session Resumed': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Menu with Zone Prices': 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
  'Add to Cart': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'UPI Payment': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'Place Order': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Order to Kitchen': 'text-orange-400 bg-orange-500/20 border border-orange-500/30',
  'Live Tracker': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Session Closed': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'Payment → Session Closed': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'New Order + Sound': 'text-orange-400 bg-orange-500/20 border border-orange-500/30',
  'Grouped by Table': 'text-indigo-400 bg-indigo-500/20 border border-indigo-500/30',
  'Elapsed Timer': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Advance Status': 'text-brand-400 bg-brand-500/20 border border-brand-500/30',
  'Reminder/Danger Alerts': 'text-red-400 bg-red-500/20 border border-red-500/30',
  'Cancel Order / Force-Close': 'text-red-400 bg-red-500/20 border border-red-500/30',
  'Realtime Live Feed': 'text-brand-400 bg-brand-500/20 border border-brand-500/30',
  'KPI Bar': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Delayed Panel': 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/30',
  'Mark PAID': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Cancel Order': 'text-red-400 bg-red-500/20 border border-red-500/30',
  'Print Receipt': 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
  'Filter+Export': 'text-indigo-400 bg-indigo-500/20 border border-indigo-500/30',
  'Order-Ready Sound': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'Setup Wizard': 'text-pink-400 bg-pink-500/20 border border-pink-500/30',
  'PDF/JSON Menu Upload': 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
  'Tables+Zones': 'text-indigo-400 bg-indigo-500/20 border border-indigo-500/30',
  'Availability Toggles': 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/30',
  'QR Generation': 'text-brand-400 bg-brand-500/20 border border-brand-500/30',
  'Staff Management': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Analytics': 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
}

export const CustomerJourney: React.FC = () => {
  const [role, setRole] = useState<'customer-prepaid' | 'customer-postpaid' | 'kitchen' | 'manager' | 'admin'>('customer-prepaid')
  const [activeStep, setActiveStep] = useState(0)

  const config = roleConfigs[role]
  const steps = config.steps

  // Auto-advance steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steps.length])

  // Reset step when switching role
  useEffect(() => {
    setActiveStep(0)
  }, [role])

  const step = steps[activeStep]
  const Icon = stepIcons[step.title] || Layout

  // return (
  //   // <section id="journey" className="section-padding bg-slate-900/30">
  //   //   <div className="container-custom">
  //   //     <div className="text-center mb-16">
  //   //       <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See The Entire Guest Journey</h2>
  //   //       <p className="text-slate-400 text-lg max-w-2xl mx-auto">
  //   //         Complete application flow across Customer, Kitchen, Manager, and Admin roles.
  //   //       </p>
  //   //     </div>

  //   //     {/* Role Tabs */}
  //   //     <div className="flex justify-center mb-12">
  //   //       <motion.div
  //   //         className="relative w-[700px] h-12 rounded-full bg-white/5 border-2 border-white/10 flex overflow-hidden"
  //   //       >
  //   //         {[
  //   //           { id: 'customer-prepaid', label: 'Customer — Prepaid', color: 'text-green-400' },
  //   //           { id: 'customer-postpaid', label: 'Customer — Postpaid', color: 'text-blue-400' },
  //   //           { id: 'kitchen', label: 'Kitchen', color: 'text-orange-400' },
  //   //           { id: 'manager', label: 'Manager', color: 'text-purple-400' },
  //   //           { id: 'admin', label: 'Admin', color: 'text-pink-400' },
  //   //         ].map((r) => (
  //   //           <button
  //   //             key={r.id}
  //   //             onClick={() => setRole(r.id as any)}
  //   //             className={`flex-1 h-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
  //   //               role === r.id
  //   //                 ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg'
  //   //               : 'text-slate-400 hover:text-white'
  //   //             }`}
  //   //           >
  //   //             {r.label}
  //   //           </button>
  //   //         ))}
  //   //       </motion.div>
  //   //     </div>

  //   //     {/* Role Content */}
  //   //     <motion.div
  //   //       initial={{ opacity: 0, y: 20 }}
  //   //       animate={{ opacity: 1, y: 0 }}
  //   //       exit={{ opacity: 0, y: -20 }}
  //   //       transition={{ duration: 0.3 }}
  //   //       key={role}
  //   //       className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-5xl mx-auto"
  //   //     >
  //   //       <div className="flex items-start justify-between gap-6 mb-8">
  //   //         <div className="flex-1">
  //   //           <div className="flex items-center gap-3 mb-4">
  //   //             <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${config.color.replace('text-', 'bg-')}/20 border border-[${config.color}]/30`}>
  //   //               <config.icon className={`${config.color}`} size={24} />
  //   //             </div>
  //   //             <div>
  //   //               <h3 className="text-2xl font-extrabold text-white tracking-tight">{config.title}</h3>
  //   //               <p className="text-sm text-slate-400">{config.subtitle}</p>
  //   //             </div>
  //   //           </div>
  //   //         </div>

  //   //         {/* Realtime Tag */}
  //   //         {step.rt && (
  //   //           <div className={`px-4 py-2 rounded-xl bg-white/5 border border-[${config.color}]/30 flex items-center gap-2`}>
  //   //             <span className={`w-2 h-2 rounded-full ${config.color} animate-pulse`} />
  //   //             <span className={`text-xs font-bold ${config.color}`}>
  //   //               {realtimeTags[step.rtTarget || 'kitchen']}
  //   //             </span>
  //   //           </div>
  //   //         )}
  //   //       </div>

  //   //       {/* Current Step Highlight */}
  //   //       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
  //   //         <motion.div
  //   //           initial={{ opacity: 0, scale: 0.9 }}
  //   //           animate={{ opacity: 1, scale: 1 }}
  //   //           transition={{ duration: 0.3 }}
  //   //           className="flex items-center gap-4"
  //   //         >
  //   //           <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stepColors[step.title] || `${config.color.replace('text-', 'bg-')}/20`} border border-[${config.color}]/30`}>
  //   //             <Icon size={28} />
  //   //           </div>
  //   //           <div>
  //   //             <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
  //   //             <p className="text-sm text-slate-300">{step.desc}</p>
  //   //           </div>
  //   //         </motion.div>
  //   //       </div>

  //   //       {/* All Steps List */}
  //   //       <div className="space-y-3">
  //   //         {steps.map((s, i) => {
  //   //           const StepIcon = stepIcons[s.title] || Layout
  //   //           const sc = `${stepColors[s.title] || config.color.replace('text-', 'bg-')}/20`
  //   //           return (
  //   //             <motion.div
  //   //               key={s.title}
  //   //               initial={{ opacity: 0, x: -20 }}
  //   //               animate={i === activeStep ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -20 }}
  //   //               transition={{ duration: 0.3 }}
  //   //               className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
  //   //                 i === activeStep
  //   //                   ? `bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]`
  //   //                   : 'bg-white/5 border border-white/10'
  //   //               }`}
  //   //             >
  //   //               <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${sc} border border-[${config.color}]/30`}>
  //   //                 <StepIcon size={14} className={i === activeStep ? 'animate-pulse' : ''} />
  //   //               </span>
  //   //               <span className={`text-sm font-medium ${i === activeStep ? 'text-white' : 'text-slate-400'}`}>
  //   //                 {s.title}
  //   //               </span>
  //   //               {s.rt && (
  //   //                 <span className={`text-[10px] font-bold ${config.color.replace('text-', '')}`}>
  //   //                   🔴 {s.rtTarget}
  //   //                 </span>
  //   //               )}
  //   //               {i < steps.length - 1 && (
  //   //                 <ArrowRight size={12} className={`text-slate-600 ${i === activeStep ? 'text-brand-400' : ''}`} />
  //   //               )}
  //   //             </motion.div>
  //   //           )
  //   //         })}
  //   //       </div>
  //   //     </motion.div>

  //   //     {/* Realtime Cross-Role Legend */}
  //   //     <div className="mt-12 glass-card rounded-3xl p-6 border border-white/10">
  //   //       <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4">🔴 Realtime Cross-Role Events (Supabase)</h3>
  //   //       <div className="grid md:grid-cols-3 gap-4">
  //   //         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
  //   //           <p className="text-xs text-slate-300 mb-2">New Order</p>
  //   //           <p className="text-xs text-green-400 font-mono">Customer → Kitchen</p>
  //   //         </div>
  //   //         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
  //   //           <p className="text-xs text-slate-300 mb-2">Status Change</p>
  //   //           <p className="text-xs text-blue-400 font-mono">Kitchen → Customer</p>
  //   //         </div>
  //   //         <div className="p-4 rounded-xl bg-white/5 border border-white/10">
  //   //           <p className="text-xs text-slate-300 mb-2">Cancellation</p>
  //   //           <p className="text-xs text-purple-400 font-mono">Kitchen ↔ Manager</p>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </section>
    
  // )
  return null;
}

export default CustomerJourney