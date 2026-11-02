import React from 'react'
import { motion } from 'framer-motion'

const managerKPIs = [
  { label: "Today's Sales", value: '₹45,230', change: '+12%', changeColor: 'text-green-400', color: 'text-brand-400' },
  { label: 'Orders', value: '128', change: '+8%', changeColor: 'text-green-400', color: 'text-blue-400' },
  { label: 'Avg Order Value', value: '₹353', change: '+5%', changeColor: 'text-green-400', color: 'text-purple-400' },
  { label: 'Active Tables', value: '24', change: '+2', changeColor: 'text-green-400', color: 'text-emerald-400' },
  { label: 'Occupancy', value: '78%', change: '+3%', changeColor: 'text-green-400', color: 'text-orange-400' },
  { label: 'Popular Items', value: '42', change: '—', changeColor: 'text-slate-400', color: 'text-pink-400' },
]

const zoneRevenue = [
  { zone: 'VIP Zone', revenue: '₹12,450', pct: 35, color: 'text-purple-400' },
  { zone: 'AC Zone', revenue: '₹15,300', pct: 42, color: 'text-blue-400' },
  { zone: 'Outdoor', revenue: '₹8,200', pct: 15, color: 'text-green-400' },
  { zone: 'Lounge', revenue: '₹9,280', pct: 8, color: 'text-pink-400' },
]

const popularDishes = [
  { name: 'Margherita Pizza', orders: '45', pct: 85 },
  { name: 'Caesar Salad', orders: '32', pct: 72 },
  { name: 'Grilled Salmon', orders: '28', pct: 68 },
  { name: 'Iced Coffee', orders: '52', pct: 90 },
]

export const ManagerDashboard: React.FC = () => {
  return (
    <section id="manager-dashboard" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Manager Dashboard</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Complete business intelligence — KPIs, revenue by zone, popular items, and occupancy analytics.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {managerKPIs.map((kpi) => (
            <motion.div
              key={kpi.label}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-5 border border-white/10"
            >
              <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">{kpi.label}</p>
              <div className="flex items-baseline gap-1">
                <p className="text-xl font-bold text-white">{kpi.value}</p>
                <span className={`text-xs font-medium ${kpi.changeColor}`}>{kpi.change}</span>
              </div>
              <div className="w-full h-1 mt-2 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${kpi.color.replace('text-', 'bg-')}`} style={{ width: '60%' }} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Revenue by Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-6">Revenue by Zone</h3>
            <div className="space-y-4">
              {zoneRevenue.map((z) => (
                <div key={z.zone} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <p className="text-sm font-bold text-white">{z.zone}</p>
                    <p className="text-xs text-slate-400">{z.revenue}</p>
                  </div>
                  <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${z.color.replace('text-', 'bg-')}`} style={{ width: `${z.pct}%` }} />
                  </div>
                  <span className="text-xs font-bold text-slate-300">{z.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Popular Dishes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-3xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-6">Most Ordered Dishes</h3>
            <div className="space-y-4">
              {popularDishes.map((d) => (
                <div key={d.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🍕</span>
                    <div>
                      <p className="text-sm font-bold text-white">{d.name}</p>
                      <p className="text-xs text-slate-400">{d.orders} orders</p>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="text-xs font-bold text-slate-300">{d.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Occupancy Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-6 border-brand-500/30 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <h3 className="text-lg font-bold text-white mb-6">Live Occupancy</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">AC Zone</span>
              <span className="text-xs font-bold text-brand-400">85%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-brand-500 rounded-full" style={{ width: '85%' }} />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">VIP Zone</span>
              <span className="text-xs font-bold text-purple-400">92%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '92%' }} />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-400">Outdoor</span>
              <span className="text-xs font-bold text-green-400">45%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '45%' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ManagerDashboard