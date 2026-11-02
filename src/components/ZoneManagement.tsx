import React from 'react'
import { motion } from 'framer-motion'

const zones = [
  { id: 'ac', name: 'AC Zone', emoji: '❄', color: 'blue', tables: ['T1', 'T2', 'T3', 'T4'], occupancy: 75 },
  { id: 'outdoor', name: 'Outdoor Zone', emoji: '🌳', color: 'green', tables: ['T5', 'T6', 'T7'], occupancy: 40 },
  { id: 'vip', name: 'VIP Zone', emoji: '⭐', color: 'purple', tables: ['T8', 'T9', 'T10'], occupancy: 90 },
  { id: 'lounge', name: 'Lounge Zone', emoji: '🍷', color: 'pink', tables: ['T11', 'T12'], occupancy: 60 },
  { id: 'family', name: 'Family Zone', emoji: '👨‍👩‍👧', color: 'orange', tables: ['T13', 'T14', 'T15'], occupancy: 50 },
  { id: 'banquet', name: 'Banquet Area', emoji: '🏨', color: 'red', tables: ['T16', 'T17', 'T18'], occupancy: 30 },
  { id: 'cafe', name: 'Cafe Area', emoji: '☕', color: 'yellow', tables: ['T19', 'T20'], occupancy: 80 },
]

export const ZoneManagement: React.FC = () => {
  return (
    <section id="zones" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Zone-Based Management</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            One of our major platform differentiators. Every table belongs to a zone with its own pricing, menu, and rules.
          </p>
        </div>

        {/* Zone cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {zones.map((z) => (
              <motion.button
                key={z.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-3 px-4 py-6 rounded-2xl transition-all duration-300 cursor-pointer bg-white/5 border border-white/10 hover:border-white/20"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-2 ${z.color === 'blue' ? 'bg-blue-500/20 border border-blue-500/30' : z.color === 'green' ? 'bg-green-500/20 border border-green-500/30' : z.color === 'purple' ? 'bg-purple-500/20 border border-purple-500/30' : z.color === 'pink' ? 'bg-pink-500/20 border border-pink-500/30' : z.color === 'orange' ? 'bg-orange-500/20 border border-orange-500/30' : z.color === 'red' ? 'bg-red-500/20 border border-red-500/30' : 'bg-yellow-500/20 border border-yellow-500/30'}`}>
                <span className="text-2xl">{z.emoji}</span>
              </div>
              <h4 className="font-bold text-white text-sm">{z.name}</h4>
              <span className="text-xs text-slate-400">{z.occupancy}% occupied</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ZoneManagement