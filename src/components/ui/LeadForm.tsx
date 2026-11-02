import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, Users } from 'lucide-react'
import { Button } from './Button'
import { CustomSelect } from './CustomSelect'

interface LeadFormProps {
  title?: string
  subtitle?: string
  buttonText?: string
}

export const LeadForm: React.FC<LeadFormProps> = ({
  title = 'Book Your Free Demo',
  subtitle = 'See DineOS in action. Our team will show you how to transform your restaurant operations.',
  buttonText = 'Request Demo',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{subtitle}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          // Lead capture handler
        }}
        className="space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <Users size={18} />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <MapPin size={18} />
            </div>
            <input
              type="text"
              name="restaurant"
              placeholder="Restaurant / Business Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <Phone size={18} />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
            />
          </div>
        </div>

        <CustomSelect
          label="Business Type"
          name="businessType"
          options={[
            { value: '', label: 'Select Business Type' },
            { value: 'restaurant', label: 'Restaurant' },
            { value: 'hotel', label: 'Hotel' },
            { value: 'cafe', label: 'Cafe' },
            { value: 'fine-dining', label: 'Fine Dining' },
            { value: 'food-court', label: 'Food Court' },
            { value: 'lounge', label: 'Lounge' },
            { value: 'resort', label: 'Resort' },
            { value: 'banquet', label: 'Banquet' },
          ]}
          required
        />

        <Button type="submit" variant="primary" size="lg" className="w-full">
          {buttonText} <ArrowRight size={20} />
        </Button>

        <p className="text-xs text-center text-slate-500 mt-2">
          No credit card required. 15-minute demo.
        </p>
      </form>
    </motion.div>
  )
}

export default LeadForm