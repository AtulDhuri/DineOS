import React, { useState } from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Users, CheckCircle } from 'lucide-react'
import { CustomSelect } from '../components/ui/CustomSelect'

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [inquiryType, setInquiryType] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setSubmitError(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      inquiryType: inquiryType || formData.get('inquiryType') || '',
      message: formData.get('message') || '',
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        throw new Error(errData.error || 'Failed to send message')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <SEO
          title="Contact — DineOS"
          description="Get in touch with DineOS sales and support team."
          path="/contact"
        />

        <section className="section-padding">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6 text-green-400 text-3xl">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-slate-400 mb-8">Thank you for reaching out. Our team will contact you within 24 hours.</p>
            <button className="btn-secondary px-8 py-3" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Contact — DineOS Restaurant Operations Platform"
        description="Contact DineOS sales and support. Get a demo, request support, or learn more about our restaurant operations platform."
        path="/contact"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions? Ready to see DineOS in action? Contact our team today."
            tagline="Contact Sales"
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 text-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email</h3>
                  <p className="text-slate-400">contact@dineos.cloud</p>
                  <p className="text-xs text-slate-500 mt-1">Sales & general inquiries</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Phone</h3>
                  <p className="text-slate-400">+1 (800) DINE-OS1</p>
                  <p className="text-xs text-slate-500 mt-1">Mon-Fri 9am-6pm EST</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Office</h3>
                  <p className="text-slate-400">DineOS HQ, San Francisco, CA</p>
                  <p className="text-xs text-slate-500 mt-1">By appointment only</p>
                </div>
              </motion.div>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
              {submitError && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {submitError || 'Failed to send message. Please try again or email us directly at contact@dineos.cloud'}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    <Users size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
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
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
                  />
                </div>
                <CustomSelect
                  label="Inquiry Type"
                  name="inquiryType"
                  value={inquiryType}
                  onChange={setInquiryType}
                  options={[
                    { value: 'sales', label: 'Sales Inquiry' },
                    { value: 'support', label: 'Technical Support' },
                    { value: 'partnership', label: 'Partnership' },
                    { value: 'other', label: 'Other' },
                  ]}
                  required
                />
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSending
                      ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-brand-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {isSending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact