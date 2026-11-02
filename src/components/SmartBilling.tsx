import React from 'react'
import { motion } from 'framer-motion'

const paymentMethods = [
  { name: 'UPI', icon: '📱', desc: 'Google Pay, PhonePe, Paytm', color: 'text-green-400' },
  { name: 'Card', icon: '💳', desc: 'Visa, Mastercard, Amex', color: 'text-blue-400' },
  { name: 'Cash', icon: '💵', desc: 'Physical currency', color: 'text-yellow-400' },
  { name: 'Digital Wallet', icon: '👛', desc: 'Apple Pay, Google Wallet', color: 'text-purple-400' },
]

export const SmartBilling: React.FC = () => {
  return (
    <section id="smart-billing" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Smart Billing</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Flexible billing for every scenario — prepaid, postpaid, split bills, and multiple payment methods.
          </p>
        </div>

        {/* Billing models */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-8 border-brand-500/30 shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xl">
                💳
              </div>
              <h3 className="text-2xl font-bold text-white">Prepaid Billing</h3>
            </div>
            <p className="text-slate-400 mb-6">Payment collected before food preparation. Ideal for cafes, food courts, and QSR.</p>
            <div className="space-y-3">
              {['Instant payment confirmation', 'Kitchen starts immediately', 'No bill at table', 'Faster table turnover'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-green-400">✓</span> {f}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-8 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl">
                🧾
              </div>
              <h3 className="text-2xl font-bold text-white">Postpaid Billing</h3>
            </div>
            <p className="text-slate-400 mb-6">Order first, pay at the end. Perfect for restaurants, hotels, and fine dining.</p>
            <div className="space-y-3">
              {['Bill on request', 'Split bill support', 'Multiple payment methods', 'Digital invoice'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-blue-400">✓</span> {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Payment methods */}
        <div className="glass-card rounded-3xl p-8 border border-white/10 mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Supported Payment Methods</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {paymentMethods.map((pm) => (
              <div key={pm.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/10 border border-white/10">
                  {pm.icon}
                </div>
                <p className="font-bold text-white">{pm.name}</p>
                <p className="text-xs text-slate-400">{pm.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bill request workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 border-white/10 shadow-2xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Bill Request Workflow</h3>
          <div className="flex items-center justify-between text-sm font-mono text-slate-300">
            <div className="flex items-center gap-2 text-green-400">
              <span>👨‍💼</span> <span>Waiter requests bill</span>
            </div>
            <span className="text-brand-400">↓</span>
            <div className="flex items-center gap-2 text-blue-400">
              <span>📱</span> <span>Bill generated instantly</span>
            </div>
            <span className="text-brand-400">↓</span>
            <div className="flex items-center gap-2 text-purple-400">
              <span>💳</span> <span>Customer pays (UPI/Card/Cash)</span>
            </div>
            <span className="text-brand-400">↓</span>
            <div className="flex items-center gap-2 text-emerald-400">
              <span>🧾</span> <span>Digital invoice sent</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SmartBilling