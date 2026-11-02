import React from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import { LeadForm } from '../components/ui/LeadForm'
import { Hero } from '../components/Hero'
import { PlatformOverview } from '../components/PlatformOverview'
import { BusinessSelector } from '../components/BusinessSelector'
import { CustomerJourney } from '../components/CustomerJourney'
import { PrepaidVsPostpaid } from '../components/PrepaidVsPostpaid'
import { ZoneManagement } from '../components/ZoneManagement'
import { KitchenDashboard } from '../components/KitchenDashboard'
import { MenuAvailability } from '../components/MenuAvailability'
import { ManagerDashboard } from '../components/ManagerDashboard'
import { Testimonials } from '../components/Testimonials'
import { Metrics } from '../components/Metrics'
import { FinalCTA } from '../components/FinalCTA'
import { motion } from 'framer-motion'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO
        title="DineOS — The Operating System for Modern Restaurants"
        description="DineOS is a Restaurant Operations Platform that helps restaurants, hotels, cafes, lounges, food courts, resorts and fine-dining establishments manage prepaid ordering, postpaid billing, QR ordering, kitchen management, waiter operations, billing, floor management, table mapping, zone management, dynamic pricing, menu availability, and analytics."
        path="/"
      />

      <Hero />
      <PlatformOverview />
      <BusinessSelector />
      <CustomerJourney />
      <PrepaidVsPostpaid />
      <ZoneManagement />

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Kitchen Workflow, Reimagined"
            subtitle="Real-time ticket management with prep tracking, order status, and kitchen display synchronization."
            tagline="Kitchen Management"
          />
          <KitchenDashboard />
        </div>
      </section>

      <MenuAvailability />

      <section className="bg-slate-900/30 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Real-Time Analytics & Operations"
            subtitle="Track revenue by zone, occupancy rates, popular dishes, and table turnover — all in one dashboard."
            tagline="Analytics"
          />
          <ManagerDashboard />
        </div>
      </section>

      <Testimonials />
      <Metrics />
      <FinalCTA />
    </div>
  )
}

export default Home