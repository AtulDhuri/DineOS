import React from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { motion } from 'framer-motion'
import { Users, Building2, Award, Globe, ShieldCheck, Clock } from 'lucide-react'

export const About: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Restaurant Locations' },
    { value: '50,000+', label: 'Orders Processed Monthly' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '1M+', label: 'Meals Served' },
  ]

  const values = [
    {
      title: 'Restaurant-First',
      desc: 'Built by restaurant operators, for restaurant operators. Every feature solves a real problem.',
      icon: Users,
    },
    {
      title: 'Reliability',
      desc: '99.9% uptime SLA with enterprise-grade infrastructure and daily backups.',
      icon: ShieldCheck,
    },
    {
      title: 'Global Scale',
      desc: 'Supporting hospitality groups across multiple countries and currencies.',
      icon: Globe,
    },
    {
      title: 'Continuous Innovation',
      desc: 'Weekly feature updates based on customer feedback and industry trends.',
      icon: Clock,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="About DineOS — The Operating System for Modern Restaurants"
        description="Learn about DineOS, our mission, team, and values. The Operating System for Modern Restaurants."
        path="/about"
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About DineOS"
            subtitle="We're building the operating system that modern restaurants need to thrive."
            tagline="Our Story"
          />

          <div className="mt-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Operating System for Modern Restaurants</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                DineOS was born from a simple observation: restaurants are using outdated systems, paper tickets, and disjointed tools to manage their operations. We set out to change that.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                DineOS is not just a QR menu. It's a complete Restaurant Operations Platform that handles prepaid ordering, postpaid billing, kitchen management, waiter operations, zone management, dynamic pricing, and analytics — all in one unified platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400">What guides everything we build.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 rounded-2xl border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mx-auto mb-4 text-brand-400 text-xl">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-slate-400 mb-8">We're hiring passionate people who want to transform the hospitality industry.</p>
          <button className="btn-primary px-8 py-4">View Careers</button>
        </div>
      </section>
    </div>
  )
}

export default About