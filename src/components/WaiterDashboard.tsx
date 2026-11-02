import React from 'react'
import { motion } from 'framer-motion'

const waiterStats = [
  { label: 'Active Tables', value: '12', color: 'text-brand-400' },
  { label: 'Ready Orders', value: '5', color: 'text-green-400' },
  { label: 'Call Requests', value: '2', color: 'text-blue-400' },
  { label: 'Bill Pending', value: '3', color: 'text-orange-400' },
]

const tables = [
  { id: 'T1', zone: 'AC Zone', status: 'available', label: 'Available' },
  { id: 'T2', zone: 'AC Zone', status: 'occupied', label: 'Occupied' },
  { id: 'T3', zone: 'AC Zone', status: 'ordering', label: 'Ordering' },
  { id: 'T4', zone: 'Outdoor', status: 'available', label: 'Available' },
  { id: 'T5', zone: 'Outdoor', status: 'waiting-bill', label: 'Waiting Bill' },
  { id: 'T6', zone: 'VIP Zone', status: 'reserved', label: 'Reserved' },
  { id: 'T7', zone: 'VIP Zone', status: 'occupied', label: 'Occupied' },
  { id: 'T8', zone: 'VIP Zone', status: 'ordering', label: 'Ordering' },
]

const callRequests = [
  { table: 'T15 - VIP', request: 'Check please', time: '2 min ago', type: 'bill' },
  { table: 'T3 - AC', request: 'More water', time: '5 min ago', type: 'service' },
]

export const WaiterDashboard: React.FC = () => {
  return (
    <section id="waiter-dashboard" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Waiter Dashboard</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Floor management at your fingertips. Table status, ready orders, and guest requests — all in one view.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {waiterStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color.replace('text-', 'bg-')}/20 border border-[${stat.color}]/30`}>
                  <span className="text-lg">{stat.label === 'Active Tables' ? '🍽' : stat.label === 'Ready Orders' ? '✅' : stat.label === 'Call Requests' ? '🔔' : '🧾'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Floor layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Floor Layout</h3>
              <span className="text-xs font-bold text-brand-400 tracking-wider uppercase">Live</span>
            </div>
            
            <div className="grid md:grid-cols-4 gap-3">
              {tables.map((t) => {
                const statusConfig = {
                  available: { color: 'bg-green-500', dot: 'bg-green-400' },
                  occupied: { color: 'bg-yellow-500', dot: 'bg-yellow-400' },
                  ordering: { color: 'bg-blue-500', dot: 'bg-blue-400' },
                  'waiting-bill': { color: 'bg-orange-500', dot: 'bg-orange-400' },
                  reserved: { color: 'bg-red-500', dot: 'bg-red-400' },
                }
                const config = statusConfig[t.status as keyof typeof statusConfig]
                return (
                  <motion.button
                    key={t.id}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 ${t.status === 'ordering' ? 'ring-2 ring-brand-500' : ''}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${config.dot} animate-pulse`} />
                    <span className="text-[10px] font-bold text-white">{t.id}</span>
                    <span className="text-[9px] text-slate-400">{t.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Call requests & ready orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 border-brand-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Guest Requests</h3>
              <button className="text-xs font-bold text-brand-400">View All</button>
            </div>
            
            <div className="space-y-3 mb-8">
              {callRequests.map((req) => (
                <div key={req.table} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div>
                    <p className="text-sm font-bold text-white">{req.table}</p>
                    <p className="text-xs text-slate-400">{req.request}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-brand-400">{req.time}</p>
                    <button className="mt-1 px-3 py-1 rounded text-xs font-bold bg-brand-600 text-white hover:bg-brand-500 transition-colors">
                      Respond
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-bold text-slate-300 mb-4">Ready to Serve</h4>
              <div className="space-y-2">
                {[
                  { order: '#1085', table: 'T15 - VIP', items: 'Pizza, Coke' },
                  { order: '#1087', table: 'T8 - VIP', items: 'Salmon, Wine' },
                ].map((o) => (
                  <div key={o.order} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="text-sm font-bold text-white">{o.order}</p>
                      <p className="text-xs text-slate-400">{o.table} • {o.items}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-xs font-bold text-white transition-colors">
                      ✓
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WaiterDashboard