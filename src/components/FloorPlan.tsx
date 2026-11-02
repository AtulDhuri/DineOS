import React, { useState } from 'react'
import { motion } from 'framer-motion'

const tableStatuses = [
  { id: 'T1', zone: 'AC Zone', status: 'available', label: 'Available', color: 'bg-green-500' },
  { id: 'T2', zone: 'AC Zone', status: 'available', label: 'Available', color: 'bg-green-500' },
  { id: 'T3', zone: 'AC Zone', status: 'occupied', label: 'Occupied', color: 'bg-yellow-500' },
  { id: 'T4', zone: 'Outdoor', status: 'ordering', label: 'Ordering', color: 'bg-blue-500' },
  { id: 'T5', zone: 'Outdoor', status: 'available', label: 'Available', color: 'bg-green-500' },
  { id: 'T6', zone: 'Outdoor', status: 'waiting-bill', label: 'Waiting For Bill', color: 'bg-orange-500' },
  { id: 'T7', zone: 'VIP Zone', status: 'reserved', label: 'Reserved', color: 'bg-red-500' },
  { id: 'T8', zone: 'VIP Zone', status: 'occupied', label: 'Occupied', color: 'bg-yellow-500' },
  { id: 'T9', zone: 'VIP Zone', status: 'available', label: 'Available', color: 'bg-green-500' },
  { id: 'T10', zone: 'VIP Zone', status: 'ordering', label: 'Ordering', color: 'bg-blue-500' },
  { id: 'T11', zone: 'Lounge', status: 'occupied', label: 'Occupied', color: 'bg-yellow-500' },
  { id: 'T12', zone: 'Lounge', status: 'available', label: 'Available', color: 'bg-green-500' },
]

export const FloorPlan: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null)

  const statusColors: Record<string, string> = {
    available: 'bg-green-500',
    occupied: 'bg-yellow-500',
    ordering: 'bg-blue-500',
    'waiting-bill': 'bg-orange-500',
    reserved: 'bg-red-500',
  }

  return (
    <section id="floor-plan" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Restaurant Floor Plan</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Live table status across all zones. Colors update in real-time as orders flow through the system.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: 'Available', color: 'bg-green-500' },
            { label: 'Occupied', color: 'bg-yellow-500' },
            { label: 'Ordering', color: 'bg-blue-500' },
            { label: 'Waiting For Bill', color: 'bg-orange-500' },
            { label: 'Reserved', color: 'bg-red-500' },
          ].map((s) => (
            <span key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
              <span className={`w-2 h-2 rounded-full ${s.color}`} />
              {s.label}
            </span>
          ))}
        </div>

        {/* Floor visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-30" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: Zone sections */}
            <div className="w-full lg:w-1/3 space-y-6">
              {['AC Section', 'Outdoor Section', 'VIP Section', 'Lounge Section', 'Banquet Area'].map((section, i) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-white">{section}</span>
                    <span className="text-xs text-brand-400 font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="w-6 h-6 rounded-full bg-white/10 border border-white/20" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Tables grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid md:grid-cols-4 gap-4">
                {tableStatuses.map((table) => (
                  <motion.button
                    key={table.id}
                    onClick={() => setSelectedTable(table.id)}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer relative group ${table.status === 'ordering' ? 'ring-2 ring-brand-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' : ''}`}
                  >
                    <div className={`w-3 h-3 rounded-full ${statusColors[table.status]} animate-pulse`} />
                    <span className="text-[10px] font-bold text-white">{table.id}</span>
                    <span className="text-[9px] text-slate-400">{table.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Live status indicator */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium">Live updates enabled</span>
          </div>
        </motion.div>

        {/* Table detail popup */}
        {selectedTable && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedTable(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedTable(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tableStatuses.find(t => t.id === selectedTable)?.color || 'bg-green-500'
                }`}>
                  <span className="text-white font-bold">{selectedTable}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tableStatuses.find(t => t.id === selectedTable)?.label}</h3>
                  <p className="text-sm text-slate-400">{tableStatuses.find(t => t.id === selectedTable)?.zone}</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors flex items-center justify-center gap-2">
                  Serve Order
                </button>
                <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-slate-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Bill Request
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default FloorPlan