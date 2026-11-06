import React from 'react'
import SEO from '../components/ui/SEO'
import Hero from '../components/Hero'
import WhySwitch from '../components/WhySwitch'
import ImplementationConfidence from '../components/ImplementationConfidence'
import RestaurantModels from '../components/RestaurantModels'
import OwnerFAQ from '../components/OwnerFAQ'
import FinalCTA from '../components/FinalCTA'

export const Home: React.FC = () => <div className="min-h-screen bg-slate-950 text-slate-100"><SEO title="The Restaurant Operating System" description="DineOS connects restaurant ordering, kitchen operations, billing, reporting, and multi-outlet management in one operating system." path="/" /><Hero /><WhySwitch /><ImplementationConfidence /><RestaurantModels /><OwnerFAQ /><FinalCTA /></div>

export default Home
