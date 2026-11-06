import React from 'react'
import { SEO } from '../components/ui/SEO'
import { SectionHeader } from '../components/ui/SectionHeader'
import DemoBookingForm from '../components/DemoBookingForm'
import DemoExpectations from '../components/DemoExpectations'
import ProductDemo from '../components/ProductDemo'

export const Demo: React.FC = () => <div className="min-h-screen bg-slate-950 text-slate-100"><SEO title="Interactive Demo — DineOS Restaurant Operations Platform" description="Explore the complete DineOS product flow from customer ordering to kitchen operations, billing, manager visibility, and admin reporting." path="/demo" /><section className="section-padding"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><SectionHeader title="See DineOS across the whole operation" subtitle="Explore the complete product flow from customer ordering to kitchen operations, billing, management, and admin visibility." tagline="Product Demo" /></div></section><ProductDemo /><section id="booking" className="section-padding"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-start"><DemoExpectations /><DemoBookingForm /></div></div></section></div>

export default Demo
