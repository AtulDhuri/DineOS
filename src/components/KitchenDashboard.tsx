import React from 'react'
import { motion } from 'framer-motion'

const kitchenStats = [
  { label: 'New Orders', value: '12', color: 'text-brand-400', icon: '📥' },
  { label: 'Preparing', value: '5', color: 'text-blue-400', icon: '🍳' },
  { label: 'Ready to Serve', value: '3', color: 'text-green-400', icon: '✅' },
  { label: 'Completed', value: '48', color: 'text-purple-400', icon: '🎯' },
]

const kitchenTickets = [
  { id: '#1085', table: 'T15 - VIP', items: 'Margherita Pizza, Coke', status: 'preparing', time: '12 min ago' },
  { id: '#1086', table: 'T3 - AC', items: 'Caesar Salad, Water', status: 'new', time: '5 min ago' },
  { id: '#1087', table: 'T8 - VIP', items: 'Grilled Salmon, Wine', status: 'ready', time: '2 min ago' },
  { id: '#1088', table: 'T1 - AC', items: 'Coffee, Cake', status: 'completed', time: '1 min ago' },
]

export const KitchenDashboard: React.FC = () => {
  return (
    <section id="kitchen-dashboard" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Kitchen Dashboard</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Modern ticket system for kitchen staff. Real-time order updates with prep time tracking.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {kitchenStats.map((stat) => (
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
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color.replace('text-', 'bg-')}/20 border border-[${stat.color}]/30`}>
                  <span className="text-xl">{stat.icon}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Active tickets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Active Kitchen Tickets</h3>
              <span className="text-xs font-bold text-brand-400 tracking-wider uppercase">Live</span>
            </div>
            
            <div className="space-y-3">
              {kitchenTickets.map((ticket) => {
                const statusConfig = {
                  new: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', label: 'NEW' },
                  preparing: { bg: 'bg-brand-500/20', border: 'border-brand-500/30', text: 'text-brand-400', label: 'PREPARING' },
                  ready: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', label: 'READY' },
                  completed: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', label: 'DONE' },
                }
                const config = statusConfig[ticket.status as keyof typeof statusConfig]
                return (
                  <div key={ticket.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/30 transition-colors">
                    <div>
                      <p className="text-sm font-bold text-white">{ticket.id}</p>
                      <p className="text-xs text-slate-400">{ticket.table} • {ticket.items}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${config.bg} ${config.border} ${config.text}`}>
                        {config.label}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{ticket.time}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Kitchen display preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 border-brand-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Kitchen Display System (KDS)</h3>
              <span className="text-xs font-bold text-brand-400 tracking-wider uppercase">Touch-enabled</span>
            </div>
            
            <div className="h-64 rounded-2xl bg-slate-900/50 border border-white/10 p-4 overflow-y-auto">
              <div className="space-y-3">
                {[
                  { item: '2x Margherita Pizza', table: 'T15 - VIP', prep: '15 min', time: '12:01 PM' },
                  { item: '1x Caesar Salad', table: 'T3 - AC', prep: '8 min', time: '12:03 PM' },
                  { item: '1x Grilled Salmon', table: 'T8 - VIP', prep: '20 min', time: '12:05 PM' },
                ].map((k) => (
                  <div key={k.item} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="text-sm font-bold text-white">{k.item}</p>
                      <p className="text-xs text-slate-400">{k.table}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-brand-400">{k.prep}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{k.time}</p>
                    </div>
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

export default KitchenDashboard