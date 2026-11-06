import React, { useState } from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { FileText, Clock, Tag, Users, Target } from 'lucide-react'

const blogPosts = [
  {
    title: 'QR Ordering vs Traditional Menus: Why Restaurants Are Switching',
    excerpt: 'Discover how QR-based ordering reduces wait times, increases table turnover, and improves guest experience.',
    date: 'Oct 25, 2024',
    readTime: '5 min read',
    category: 'Operations',
    icon: FileText,
  },
  {
    title: 'Prepaid vs Postpaid: Which Payment Model Works for Your Restaurant?',
    excerpt: 'A complete guide to choosing between prepaid and postpaid ordering for different restaurant types.',
    date: 'Oct 20, 2024',
    readTime: '7 min read',
    category: 'Billing',
    icon: Clock,
  },
  {
    title: 'Zone-Based Pricing: How to Maximize Revenue Per Table',
    excerpt: 'Learn how dynamic zone pricing can increase your restaurant revenue by 20-30%.',
    date: 'Oct 15, 2024',
    readTime: '6 min read',
    category: 'Pricing',
    icon: Tag,
  },
  {
    title: 'Kitchen Display Systems: Eliminating Paper Tickets for Good',
    excerpt: 'Why modern kitchens are moving to digital KDS and how it improves prep times.',
    date: 'Oct 10, 2024',
    readTime: '4 min read',
    category: 'Kitchen',
    icon: Users,
  },
  {
    title: 'Table Turnover Strategies for Busy Restaurants',
    excerpt: 'Proven tactics to increase table turnover without compromising guest experience.',
    date: 'Oct 5, 2024',
    readTime: '5 min read',
    category: 'Operations',
    icon: Target,
  },
]

export const Blog: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter subscriber',
          email,
          inquiryType: 'newsletter',
          message: 'Please add this email address to the DineOS newsletter list.',
        }),
      })
      if (!response.ok) throw new Error('Newsletter request failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="Blog — Restaurant Operations Insights | DineOS"
        description="DineOS blog: restaurant operations insights, QR ordering, kitchen management, zone pricing, and hospitality industry trends."
        path="/blog"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Restaurant Operations Insights"
            subtitle="Expert tips, industry trends, and best practices for modern restaurant operations."
            tagline="Blog"
          />
        </div>
      </section>

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${post.icon.name === 'FileText' ? 'text-brand-400' : 'text-blue-400'}`}>
                  <post.icon className="text-xl" />
                </div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider mb-3 block">{post.category}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date} • {post.readTime}</span>
                  <span className="text-brand-400 font-medium">Read more →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want More Restaurant Operations Content?</h2>
          <p className="text-slate-400 mb-8">Subscribe to our newsletter for weekly insights and product updates.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none"
            />
            <button type="submit" disabled={status === 'sending'} className="btn-primary px-6 disabled:opacity-60">{status === 'sending' ? 'Sending...' : 'Subscribe'}</button>
          </form>
          {status === 'success' && <p role="status" className="text-sm text-emerald-400 mt-4">Thanks. We received your subscription request. Our team will try to reach you within 5 working days.</p>}
          {status === 'error' && <p role="alert" className="text-sm text-red-400 mt-4">We could not submit that request. Please email contact@dineos.cloud.</p>}
        </div>
      </section>
    </div>
  )
}

export default Blog