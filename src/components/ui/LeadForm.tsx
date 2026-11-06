import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, Users, MessageSquare } from 'lucide-react'
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
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = React.useState('')
  const [businessType, setBusinessType] = React.useState('')
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
        setStatusMessage('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      inquiryType: businessType || 'demo',
      message: `Restaurant: ${formData.get('restaurant')}
Phone: ${formData.get('phone')}
Business Type: ${businessType}
Additional Details: ${formData.get('details') || 'Not provided'}`,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || 'Failed to send email')
      }

      setStatus('success')
      setStatusMessage('Thanks — your request has been sent. Our team will try to reach you within 5 working days to arrange your walkthrough.')
      setBusinessType('')
      formRef.current?.reset()
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again.')
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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

      {status === 'success' && (
        <div role="status" aria-live="polite" className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center">
          {statusMessage || 'Request submitted successfully!'}
        </div>
      )}

      {status === 'error' && (
        <div role="alert" aria-live="assertive" className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center">
          {statusMessage || 'Something went wrong. Please try again.'}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
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
          value={businessType}
          onChange={setBusinessType}
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

        <div className="relative">
          <div className="absolute left-3 top-3 text-slate-500">
            <MessageSquare size={18} />
          </div>
          <textarea
            name="details"
            aria-label="Additional details"
            placeholder="Tell us about your operation, preferred demo timing, outlets, or questions (optional)"
            rows={3}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all resize-y"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
          {buttonText} <ArrowRight size={20} />
        </Button>

        <p className="text-xs text-center text-slate-500 mt-2">
          No credit card required. Our team will try to reach you within 5 working days to arrange a 15-minute walkthrough.
        </p>
      </form>
    </motion.div>
  )
}

export default LeadForm