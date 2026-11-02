import React from 'react'
import { motion } from 'framer-motion'

export const ProductDetails: React.FC = () => {
  return (
    <section id="product-details" className="section-padding bg-slate-900/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Details & Variants</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Rich product pages with variants, add-ons, special instructions, and live price updates based on zone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product image */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-purple-600/20" />
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-6xl">🍕</span>
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-white">Veg</span>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-bold text-white">25 min</span>
              </div>
            </motion.div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🍕</span>
                <h2 className="text-3xl font-bold text-white">Margherita Pizza</h2>
                <span className="ml-auto bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">Veg</span>
              </div>
              <p className="text-slate-400 mb-6">Fresh mozzarella, tomato sauce, basil leaves, and extra virgin olive oil on a wood-fired crust.</p>
              
              {/* Variants */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Variants</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Personal (8")', 'Medium (12")', 'Large (16")'].map((v, i) => (
                    <button key={v} className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      i === 1 ? 'bg-brand-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}>
                      {v}
                    </button>
                  ))}
                </div>

                {/* Add-ons */}
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mt-6 mb-3">Add-ons</h3>
                <div className="space-y-2">
                  {['Extra Cheese +₹40', 'Mushrooms +₹30', 'Olives +₹25', 'Jalapeños +₹25'].map((a) => (
                    <div key={a} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-sm text-slate-300">{a}</span>
                      <input type="checkbox" className="w-4 h-4 rounded border-brand-500 bg-slate-900 text-brand-500 focus:ring-brand-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Special instructions */}
              <div className="mt-6">
                <label className="block text-sm font-bold text-slate-300 mb-2">Special Instructions</label>
                <textarea className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors" rows={3} placeholder="Extra crispy, less cheese..." />
              </div>

              {/* Price & Add to Cart */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-white">₹350</span>
                  <span className="text-sm text-slate-500 ml-2">Live price - AC Zone</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-brand-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2"
                >
                  Add to Cart
                  <span className="text-sm">→</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails