import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, CreditCard, Clock, Menu, ArrowRight, CheckCircle, Bell, Layout } from 'lucide-react'

const stepIcons: Record<string, React.FC<any>> = {
  'Scan QR': Smartphone,
  'Browse': Layout,
  'Pay Online': CreditCard,
  'Place Order': Layout,
  'Kitchen Starts': Menu,
  'Kitchen Receives': Bell,
  'Serve': CheckCircle,
  'Bill Request': CreditCard,
  'Payment': ArrowRight,
  'Food Ready': CheckCircle,
  'Food Served': CheckCircle,
}

const stepDescs: Record<string, string> = {
  'Scan QR': 'Customer scans the QR code at the table',
  'Browse': 'Digital menu opens with real-time availability',
  'Pay Online': 'Payment collected before kitchen starts',
  'Place Order': 'Order placed, kitchen notified instantly',
  'Kitchen Starts': 'Kitchen begins preparing the order',
  'Kitchen Receives': 'Ticket appears on kitchen display',
  'Serve': 'Waiter delivers food to the table',
  'Bill Request': 'Guest requests the bill',
  'Payment': 'Payment completed via UPI/Card/Cash',
  'Food Ready': 'Order is ready for pickup',
  'Food Served': 'Food delivered to customer',
}

const prepaidSteps = ['Scan QR', 'Browse', 'Pay Online', 'Kitchen Starts', 'Serve']

const postpaidSteps = ['Scan QR', 'Browse', 'Place Order', 'Kitchen Starts', 'Serve', 'Bill Request', 'Payment']

const stepColors: Record<string, string> = {
  'Scan QR': 'text-brand-400 bg-brand-500/20 border border-brand-500/30',
  'Browse': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Pay Online': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'Place Order': 'text-blue-400 bg-blue-500/20 border border-blue-500/30',
  'Kitchen Starts': 'text-orange-400 bg-orange-500/20 border border-orange-500/30',
  'Kitchen Receives': 'text-orange-400 bg-orange-500/20 border border-orange-500/30',
  'Serve': 'text-green-400 bg-green-500/20 border border-green-500/30',
  'Bill Request': 'text-purple-400 bg-purple-500/20 border border-purple-500/30',
  'Payment': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Food Ready': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
  'Food Served': 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30',
}

const flowConfigs: Record<string, { title: string; desc: string; idealFor: string[]; color: string; steps: string[] }> = {
  prepaid: {
    title: 'PREPAID',
    desc: 'Collect payment before the kitchen starts — perfect for high-turnover businesses.',
    idealFor: ['Cafes', 'Food Courts', 'Self Service', 'Quick Service Restaurants'],
    color: 'green',
    steps: prepaidSteps,
  },
  postpaid: {
    title: 'POSTPAID',
    desc: 'Serve first, collect later — ideal for full-service dining experiences.',
    idealFor: ['Restaurants', 'Hotels', 'Fine Dining', 'Family Dining'],
    color: 'blue',
    steps: postpaidSteps,
  },
}

export const PrepaidVsPostpaid: React.FC = () => {
  const [view, setView] = useState<'prepaid' | 'postpaid'>('prepaid')
  const [currentStep, setCurrentStep] = useState(0)

  const flow = flowConfigs[view]
  const steps = flow.steps

  // Auto-advance steps every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [steps.length])

  // Reset step when switching flow
  useEffect(() => {
    setCurrentStep(0)
  }, [view])

  const activeStep = steps[currentStep]
  const Icon = stepIcons[activeStep] || Layout
  const stepColor = stepColors[activeStep] || 'text-brand-400 bg-brand-500/20 border border-brand-500/30'

  return (
    <section id="pricing" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Prepaid vs Postpaid</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the payment model that matches your business.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="relative w-[360px] h-12 rounded-full bg-white/5 border-2 border-white/10 flex overflow-hidden"
          >
            <button
              onClick={() => setView('prepaid')}
              className={`flex-1 h-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                view === 'prepaid'
                  ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PREPAID
            </button>
            <button
              onClick={() => setView('postpaid')}
              className={`flex-1 h-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                view === 'postpaid'
                  ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              POSTPAID
            </button>
          </motion.div>
        </div>

        {/* Active Flow Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          key={view}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl w-full"
        >
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  view === 'prepaid' ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'
                }`}>
                  <span className={`${view === 'prepaid' ? 'text-green-400' : 'text-blue-400'} text-xl font-bold`}>
                    {view === 'prepaid' ? '💳' : '💰'}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">{flow.title}</h3>
              </div>
              <p className="text-slate-400 text-base mb-6 leading-relaxed">{flow.desc}</p>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-3">Ideal For</h4>
                <div className="flex flex-wrap gap-2">
                  {flow.idealFor.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Step Highlight */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Step</span>
                  <span className={`text-xs font-bold ${stepColor.split(' ')[0]}`}>
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${stepColor}`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{activeStep}</h4>
                    <p className="text-sm text-slate-300">{stepDescs[activeStep]}</p>
                  </div>
                </motion.div>
              </div>

              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-2">
                {steps.map((step, i) => (
                  <motion.div
                    key={step}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? view === 'prepaid' ? 'bg-green-400' : 'bg-blue-400'
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Steps List (Right Side) */}
            <div className="flex-1 space-y-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={i === currentStep ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    i === currentStep
                      ? `bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]`
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${stepColors[step]}`}>
                    <Icon size={14} className={i === currentStep ? 'animate-pulse' : ''} />
                  </span>
                  <span className={`text-sm font-medium ${i === currentStep ? 'text-white' : 'text-slate-400'}`}>
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight size={12} className={`text-slate-600 ${i === currentStep ? 'text-brand-400' : ''}`} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrepaidVsPostpaid