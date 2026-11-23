import React, { useState } from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Globe, CheckCircle, ShieldCheck, Clock, ArrowRight, Layout } from 'lucide-react'
import { CustomSelect } from '../components/ui/CustomSelect'
import { Link } from 'react-router-dom'

type Currency = 'USD' | 'INR'
type Billing = 'monthly' | 'annual'

interface PriceConfig {
  setup: string
  monthly: string
  annual: string
  save: string
  setupLabel: string
  monthlyLabel: string
  annualLabel: string
}

const PRICING: Record<Currency, PriceConfig> = {
  USD: {
    setup: '$299',
    monthly: '$79',
    annual: '$790',
    save: 'Save $158 per year',
    setupLabel: 'One-Time Setup Fee',
    monthlyLabel: '/month',
    annualLabel: '/year',
  },
  INR: {
    setup: '₹9,999',
    monthly: '₹1,999',
    annual: '₹19,990',
    save: 'Save ₹3,998 per year',
    setupLabel: 'One-Time Setup Fee',
    monthlyLabel: '/month',
    annualLabel: '/year',
  },
}

const MULTI_PRICING: Record<Currency, {
  setup: string
  baseMonthly: string
  baseAnnual: string
  baseSave: string
  additionalMonthly: string
  additionalAnnual: string
  additionalSave: string
}> = {
  USD: {
    setup: '$999',
    baseMonthly: '$199',
    baseAnnual: '$1,990',
    baseSave: 'Save $398 per year',
    additionalMonthly: '$79',
    additionalAnnual: '$790',
    additionalSave: 'Save $158 per year',
  },
  INR: {
    setup: '₹29,999',
    baseMonthly: '₹7,999',
    baseAnnual: '₹79,990',
    baseSave: 'Save ₹15,998 per year',
    additionalMonthly: '₹1,999',
    additionalAnnual: '₹19,990',
    additionalSave: 'Save ₹3,998 per year',
  },
}

const currencySymbol: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
}

const standardFeatures = [
  'QR Table Ordering',
  'Digital Menu Management',
  'Kitchen Order Management',
  'Real-Time Order Tracking',
  'Staff Management',
  'Revenue Reports',
  'Unlimited Tables',
  'Cloud Hosting',
]

const multiFeatures = [
  'Centralized Dashboard',
  'Multi-Outlet Management',
  'Consolidated Revenue Reports',
  'Centralized Menu Management',
  'Everything in Standard Plan',
]

const onboarding = [
  'Menu Configuration',
  'QR Code Generation',
  'Restaurant Setup',
  'Tax Configuration',
  'Staff Training',
  'Go-Live Assistance',
  'Initial Priority Support',
]

const trust = [
  'No Hidden Fees',
  'Unlimited Tables',
  'Unlimited Orders',
  'Cancel Anytime',
  'Secure Cloud Hosting',
  'Regular Feature Updates',
]

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [billing, setBilling] = useState<Billing>('annual')
  const [additionalOutlets, setAdditionalOutlets] = useState(1)

  const prices = PRICING[currency]
  const multi = MULTI_PRICING[currency]
  const symbol = currencySymbol[currency]

  const isAnnual = billing === 'annual'

  const totalMonthly = parseInt(multi.baseMonthly.replace(/[^0-9]/g, '')) + (parseInt(multi.additionalMonthly.replace(/[^0-9]/g, '')) * additionalOutlets)
  const totalAnnual = parseInt(multi.baseAnnual.replace(/[^0-9]/g, '')) + (parseInt(multi.additionalAnnual.replace(/[^0-9]/g, '')) * additionalOutlets)

  const currencyOptions = [
    { value: 'USD', label: '🇺🇸 USD ($)' },
    { value: 'INR', label: '🇮🇳 INR (₹)' },
  ]

  const regularYearlyStandard = parseInt(prices.monthly.replace(/[^0-9]/g, '')) * 12
  const regularYearlyMultiBase = parseInt(multi.baseMonthly.replace(/[^0-9]/g, '')) * 12
  const regularYearlyMultiAdd = parseInt(multi.additionalMonthly.replace(/[^0-9]/g, '')) * 12

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SEO
        title="Pricing — DineOS Restaurant Operations Platform"
        description="Simple, transparent pricing for DineOS. Standard Outlet and Multi-Outlet plans with USD and INR currency support and monthly/annual billing."
        path="/pricing"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <SectionHeader
                title="Simple, Transparent Pricing"
                subtitle="Everything your restaurant needs to accept orders, manage operations, and serve customers efficiently."
                tagline="Everything Included"
                align="left"
              />
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="hidden md:block w-80">
                <CustomSelect
                  label="Currency"
                  name="currency"
                  options={currencyOptions}
                  value={currency}
                  onChange={(val) => setCurrency(val as Currency)}
                  className=""
                />
              </div>

              <div className="relative group inline-block">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Billing</span>
                  <div role="group" aria-label="Billing period" className="inline-flex items-center gap-1 rounded-2xl border border-[#E2E8F0] bg-white p-1 shadow-sm">
                    <button
                      onClick={() => setBilling('monthly')}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        billing === 'monthly'
                          ? 'bg-brand-500 text-white shadow-sm'
                          : 'text-[#64748B] hover:text-[#0F172A]'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBilling('annual')}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        billing === 'annual'
                          ? 'bg-brand-500 text-white shadow-sm'
                          : 'text-[#64748B] hover:text-[#0F172A]'
                      }`}
                    >
                      Annual
                      <span className={`ml-2 inline-block whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                        billing === 'annual'
                          ? 'bg-white text-brand-600 border-white'
                          : 'bg-brand-50 text-brand-600 border-brand-100'
                      }`}>
                        Save 20%
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-2xl flex flex-col"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  <CheckCircle size={12} className="text-white" />
                  Most Popular
                </span>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 text-xs font-bold uppercase tracking-wider mb-4 block">
                  Standard Outlet
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Standard Outlet</h3>
                <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                  Perfect for restaurants, cafes, cloud kitchens, and single-location businesses.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl font-extrabold text-[#0F172A] tracking-tight`}>{prices.setup}</span>
                    <span className="text-base text-[#64748B] font-medium">{prices.setupLabel}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className={`flex items-baseline gap-1 mb-2 ${isAnnual ? '' : 'hidden'}`}>
                    <span className={`text-5xl font-extrabold text-brand-600 tracking-tight`}>{prices.annual}</span>
                    <span className="text-lg text-[#64748B] font-medium">{prices.annualLabel}</span>
                  </div>
                  <div className={`flex items-baseline gap-1 mb-2 ${isAnnual ? 'hidden' : ''}`}>
                    <span className={`text-5xl font-extrabold text-brand-600 tracking-tight`}>{prices.monthly}</span>
                    <span className="text-lg text-[#64748B] font-medium">{prices.monthlyLabel}</span>
                  </div>

                  {isAnnual && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                        {prices.save}
                      </span>
                      <span className="text-xs text-[#64748B] line-through">
                        {symbol}{regularYearlyStandard}/year
                      </span>
                    </div>
                  )}

                  {!isAnnual && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-[#64748B] font-medium">Monthly billing · cancel anytime</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {standardFeatures.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-3 text-sm text-[#64748B]"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-brand-500/20 border border-brand-500/30">
                        <CheckCircle size={14} className="text-brand-600" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/demo" className="btn-primary w-full">Talk to sales <ArrowRight size={16} /></Link>
                </div>
            </motion.div>

            {/* Multi-Outlet Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="relative glass-card rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-2xl flex flex-col"
            >
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-50 border border-[#E2E8F0] text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Layout size={12} className="text-[#0F172A]" />
                  Restaurant Chains
                </span>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-[#E2E8F0] text-[#0F172A] text-xs font-bold uppercase tracking-wider mb-4 block">
                  Multi-Outlet
                </span>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Multi-Outlet</h3>
                <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                  Built for restaurant groups, franchises, and businesses operating multiple locations.
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl font-extrabold text-[#0F172A] tracking-tight`}>{multi.setup}</span>
                    <span className="text-base text-[#64748B] font-medium">One-Time Setup Fee</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className={`flex items-baseline gap-1 mb-2 ${isAnnual ? '' : 'hidden'}`}>
                    <span className={`text-4xl font-extrabold text-brand-600 tracking-tight`}>{multi.baseAnnual}</span>
                    <span className="text-base text-[#64748B] font-medium">/year (base)</span>
                  </div>
                  <div className={`flex items-baseline gap-1 mb-2 ${isAnnual ? 'hidden' : ''}`}>
                    <span className={`text-4xl font-extrabold text-brand-600 tracking-tight`}>{multi.baseMonthly}</span>
                    <span className="text-base text-[#64748B] font-medium">/month (base)</span>
                  </div>

                  {isAnnual && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                        {multi.baseSave}
                      </span>
                      <span className="text-xs text-[#64748B] line-through">
                        {symbol}{regularYearlyMultiBase}/year
                      </span>
                    </div>
                  )}
                </div>

                <div className="bg-brand-50/60 border border-[#E2E8F0] rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#64748B] font-medium">Number of Additional Outlets</span>
                    <span className={`text-sm font-bold text-[#0F172A] ${symbol}`}>{isAnnual ? multi.additionalAnnual : multi.additionalMonthly}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={additionalOutlets}
                    onChange={(e) => setAdditionalOutlets(parseInt(e.target.value))}
                    className="w-full h-2 bg-brand-50 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className={`text-2xl font-bold text-[#0F172A]`}>{symbol}{isAnnual ? totalAnnual : totalMonthly}</span>
                    <span className="text-sm text-[#64748B] font-medium">{isAnnual ? '/year total' : '/month total'}</span>
                  </div>
                  <p className="text-xs text-[#64748B] mt-2 text-center">
                    {isAnnual
                      ? `${multi.baseAnnual} + (${multi.additionalAnnual} × ${additionalOutlets} additional outlets)`
                      : `${multi.baseMonthly} + (${multi.additionalMonthly} × ${additionalOutlets} additional outlets)`}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {multiFeatures.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-start gap-3 text-sm text-[#64748B]"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-brand-500/20 border border-brand-500/30">
                        <CheckCircle size={14} className="text-brand-600" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <Link to="/demo" className="btn-primary w-full">Plan a multi-outlet demo <ArrowRight size={16} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-600 text-xl">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Setup & Onboarding Includes</h3>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
              {onboarding.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-brand-50/60 border border-[#E2E8F0]"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-green-500/20 border border-green-500/30">
                    <CheckCircle size={16} className="text-green-400" />
                  </div>
                  <span className="text-sm text-[#64748B] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Trusted & Transparent</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {trust.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-brand-50/60 border border-[#E2E8F0]"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle size={20} className="text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-[#64748B] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing