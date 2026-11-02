import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingItem {
  name: string
  description: string
  zones: Array<{ zone: string; price: string; visible: boolean }>
}

const menuItems: PricingItem[] = [
  {
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    zones: [
      { zone: 'AC Zone', price: '₹100', visible: true },
      { zone: 'VIP Zone', price: '₹150', visible: true },
      { zone: 'Lounge Zone', price: '₹180', visible: true },
      { zone: 'Outdoor', price: '₹100', visible: true },
    ],
  },
  {
    name: 'Premium Whisky',
    description: 'Single malt scotch whisky',
    zones: [
      { zone: 'AC Zone', price: '₹500', visible: false },
      { zone: 'VIP Zone', price: '₹800', visible: true },
      { zone: 'Lounge Zone', price: '₹900', visible: true },
      { zone: 'Outdoor', price: '₹500', visible: false },
    ],
  },
  {
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato, basil',
    zones: [
      { zone: 'AC Zone', price: '₹250', visible: true },
      { zone: 'VIP Zone', price: '₹350', visible: true },
      { zone: 'Lounge Zone', price: '₹400', visible: false },
      { zone: 'Outdoor', price: '₹250', visible: true },
    ],
  },
]

export const ZonePricing: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Cappuccino')

  const item = menuItems.find(m => m.name === selectedItem)

  return (
    <section id="zone-pricing" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Zone-Based Menu Pricing</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Same item, different price based on which zone the customer is sitting in. Automatically detected when they scan the QR.
          </p>
        </div>

        {/* Demo animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 mb-12 border-brand-500/30 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">Customer scans VIP table</h3>
              <p className="text-slate-400 mb-6">Table 15 → VIP Zone detected → Price automatically adjusts</p>
              
              <div className="space-y-4">
                {item?.zones.map((z) => (
                  <motion.div
                    key={z.zone}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      z.zone === 'VIP Zone' ? 'bg-brand-500/20 border border-brand-500/40' : 'bg-white/5 border border-white/10'
                    } ${!z.visible ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-white">{z.visible ? '✓' : '✗'}</span>
                      <span className="text-sm font-medium text-white">{z.zone}</span>
                    </div>
                    <span className={`text-sm font-mono font-bold ${z.zone === 'VIP Zone' ? 'text-brand-400' : 'text-slate-400'}`}>
                      {z.visible ? z.price : 'Hidden'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="w-full h-80 rounded-2xl p-2 bg-gradient-to-br from-brand-600 to-purple-700 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">VIP TABLE 15</span>
                    <span className="text-xs text-white/70">Zone: VIP</span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-8">{item?.name}</h4>
                  <div className="space-y-3 mb-8">
                    {item?.zones.filter(z => z.visible).map((z) => (
                      <div key={z.zone} className="flex justify-between text-sm text-white/90">
                        <span>{z.zone}</span>
                        <span className="font-mono">{z.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4">
                    <span className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-1 block">Auto-detected pricing</span>
                    <span className="text-2xl font-bold text-white">₹{item?.zones.find(z => z.zone === 'VIP Zone')?.price.replace('₹', '')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Zone selector */}
        <div className="flex justify-center gap-2 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelectedItem(item.name)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedItem === item.name
                  ? 'bg-brand-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Full zone matrix */}
        <div className="glass-card rounded-3xl p-6 border border-white/10 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 text-left text-slate-400 text-xs uppercase font-semibold">Menu Item</th>
                {menuItems[0].zones.map((z) => (
                  <th key={z.zone} className="pb-4 text-center text-slate-400 text-xs uppercase font-semibold">{z.zone}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-slate-300 font-medium">{item.name}</td>
                  {item.zones.map((z) => (
                    <td key={z.zone} className="py-4 text-center">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        z.visible
                          ? z.zone === 'VIP Zone' || z.zone === 'Lounge Zone'
                            ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-white/10 text-slate-600 border border-white/10'
                      }`}>
                        {z.visible ? z.price : '—'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ZonePricing