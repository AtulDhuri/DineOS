import React from 'react'
import { motion } from 'framer-motion'

const trackingSteps = [
  { status: 'Received', completed: true, time: '12:00 PM', icon: '📥' },
  { status: 'Accepted', completed: true, time: '12:02 PM', icon: '👨‍🍳' },
  { status: 'Preparing', completed: true, time: '12:05 PM', icon: '🍳' },
  { status: 'Ready', completed: false, time: '12:15 PM', icon: '✅' },
  { status: 'Served', completed: false, time: '—', icon: '🍽' },
]

export const OrderTracking: React.FC = () => {
  return (
    <section id="order-tracking" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real-Time Order Tracking</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Customers and staff can track every order from kitchen to table with live status updates.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-20" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Order #1085</h3>
                  <p className="text-sm text-slate-400">VIP Zone • Table 15</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-green-400">Active</span>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-4 bottom-4 left-12 w-px bg-gradient-to-b from-brand-500 via-white/20 to-transparent" />

                {trackingSteps.map((step, i) => {
                  const isCompleted = step.completed
                  const isCurrent = i === 3
                  return (
                    <motion.div
                      key={step.status}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start mb-10 pl-12"
                    >
                      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-green-500 border-2 border-white'
                          : isCurrent
                            ? 'bg-brand-600 border-4 border-brand-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                            : 'bg-white/5 border-2 border-white/10'
                      } transition-all duration-500`}>
                        {isCompleted ? (
                          <span className="text-[10px] text-white font-bold">✓</span>
                        ) : isCurrent ? (
                          <span className="text-[10px] text-white font-bold animate-pulse">⟳</span>
                        ) : (
                          <span className="text-[10px] text-slate-500">○</span>
                        )}
                      </div>
                      <div className="ml-3">
                        <div className={`flex items-center gap-2 mb-1`}>
                          <span className={`text-sm font-bold ${isCompleted ? 'text-white' : isCurrent ? 'text-brand-400' : 'text-slate-400'}`}>
                            {step.status}
                          </span>
                          <span className={`text-xs ${isCompleted ? 'text-green-400' : isCurrent ? 'text-brand-400' : 'text-slate-600'}`}>
                            {step.time}
                          </span>
                        </div>
                        <span className={`text-xs ${isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
                          {isCompleted ? 'Completed' : isCurrent ? 'In progress...' : 'Pending'}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Estimated delivery */}
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Estimated Delivery</p>
                  <p className="text-lg font-bold text-white">12:15 PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                  <span className="text-sm text-slate-300">Kitchen preparing your order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderTracking