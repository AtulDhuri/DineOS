import React, { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  { name: 'Margherita Pizza', status: 'available', icon: '🍕', color: 'text-green-400' },
  { name: 'Pasta Carbonara', status: 'available', icon: '🍝', color: 'text-green-400' },
  { name: 'Grilled Salmon', status: 'out-of-stock', icon: '🐟', color: 'text-yellow-400' },
  { name: 'Chocolate Cake', status: 'hidden', icon: '🍰', color: 'text-red-400' },
  { name: 'Caesar Salad', status: 'seasonal', icon: '🥗', color: 'text-emerald-400' },
]

export const MenuAvailability: React.FC = () => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(!toggled)
  }

  return (
    <section id="menu-availability" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Menu Availability Control</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Kitchen staff can instantly update availability. Customer menus update in real-time — no page refresh required.
          </p>
        </div>

        {/* Demo controls */}
        <div className="flex justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              toggled
                ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                : 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
            }`}
          >
            {toggled ? 'Restore Pizza' : 'Disable Pizza'}
            <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kitchen view */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-8 border-brand-500/30 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Kitchen Dashboard</h3>
                <p className="text-sm text-slate-400">Manager view - update availability</p>
              </div>
              <span className="text-xs font-bold text-brand-400 tracking-wider uppercase">LIVE</span>
            </div>
            
            <div className="space-y-3">
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/30 transition-colors group`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium text-slate-300">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-3">Changes sync instantly to all customer devices</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs text-brand-400 font-medium">Syncing...</span>
              </div>
            </div>
          </motion.div>

          {/* Customer view */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-8 border-white/10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Customer Menu</h3>
                <p className="text-sm text-slate-400">Updates in real-time</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs text-green-400 font-bold">
                Online
              </div>
            </div>
            
            <div className="space-y-3">
              {items.map((item) => {
                const isHidden = item.status === 'hidden' || (item.name === 'Margherita Pizza' && toggled)
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 ${
                      isHidden ? 'opacity-0 scale-95 pointer-events-none' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-300">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.status === 'out-of-stock' ? (
                        <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Out of Stock</span>
                      ) : (
                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Available</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Menu synced with kitchen</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MenuAvailability