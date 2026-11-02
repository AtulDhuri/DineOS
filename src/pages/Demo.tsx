import React from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Smartphone, Monitor, Layers, Zap, CheckCircle } from 'lucide-react'

const demoSteps = [
  {
    title: 'Scan QR Code',
    desc: 'Customer scans QR at table — zone and table automatically detected.',
    icon: Smartphone,
    color: 'text-brand-400',
  },
  {
    title: 'Browse Menu',
    desc: 'Digital menu opens with zone-based pricing and real-time availability.',
    icon: Monitor,
    color: 'text-blue-400',
  },
  {
    title: 'Place Order',
    desc: 'Prepaid or postpaid checkout — kitchen receives order instantly.',
    icon: Zap,
    color: 'text-green-400',
  },
  {
    title: 'Kitchen Prep',
    desc: 'KDS ticket appears with prep timer and status tracking.',
    icon: Layers,
    color: 'text-orange-400',
  },
  {
    title: 'Serve & Bill',
    desc: 'Waiter notified when ready — digital bill generated for postpaid.',
    icon: CheckCircle,
    color: 'text-purple-400',
  },
]

export const Demo: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Interactive Demo — DineOS Restaurant Operations Platform"
        description="Experience DineOS in action with our interactive product demo. See QR ordering, kitchen management, and billing workflows."
        path="/demo"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Interactive Product Demo"
            subtitle="Experience DineOS workflows firsthand. See how orders flow from QR scan to kitchen to payment."
            tagline="Live Demo"
          />
        </div>
      </section>

      {/* Demo Simulation Area */}
      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See the Complete Guest Journey</h2>
              <p className="text-slate-400 text-lg mb-8">
                Watch how DineOS handles a complete order — from QR scan to payment — in real-time.
              </p>

              <div className="space-y-4 mb-8">
                {demoSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: -4 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/30 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.color.replace('text-', 'bg-')}/20 border border-[${step.color}]/30 mt-0.5`}>
                      <step.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
              </div>
            </div>

            <div className="relative">
              {/* Phone mockup placeholder */}
              <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[40px] p-4 shadow-2xl border border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-20" />
                <div className="relative z-10 h-full flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-4 py-2 text-[10px] text-slate-400">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    </div>
                    <span className="font-mono">12:00</span>
                  </div>

                  {/* Demo content */}
                  <div className="flex-1 p-6 space-y-6 overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mx-auto mb-4 text-brand-400 text-2xl">
                        🍽
                      </div>
                      <h3 className="text-xl font-bold text-white">Table 15 • VIP Zone</h3>
                      <p className="text-sm text-slate-400">QR Scanned Successfully</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🍕</span>
                          <div>
                            <p className="text-sm font-bold text-white">Margherita Pizza</p>
                            <p className="text-xs text-slate-400">₹350 • VIP Zone Price</p>
                          </div>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-xs font-bold text-white">
                          +
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🥤</span>
                          <div>
                            <p className="text-sm font-bold text-white">Coca Cola</p>
                            <p className="text-xs text-slate-400">₹60 • Available</p>
                          </div>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-xs font-bold text-white">
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-auto p-4 rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600">
                      <p className="text-sm text-slate-100 mb-2">Total: ₹410</p>
                      <button className="w-full py-2 rounded-xl bg-white text-brand-600 font-bold text-sm hover:bg-brand-500 transition-colors">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Live demo simulation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Personalized Demo?</h2>
          <p className="text-slate-400 mb-8">Our product specialist will walk you through DineOS for your specific restaurant type.</p>
          <div className="flex flex-col gap-2">
          </div>
        </div>
      </section>
    </div>
  )
}

export default Demo