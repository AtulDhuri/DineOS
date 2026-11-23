import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => (
  <main className="min-h-[70vh] bg-[#F8FAFC] px-4 py-24 text-center text-[#0F172A]">
    <div className="mx-auto max-w-xl">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="display-heading">This page is outside the operating view.</h1>
      <p className="section-lede mt-5">The page may have moved. Return to the platform overview or book a walkthrough with the DineOS team.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className="btn-primary"><ArrowLeft size={17} /> Back to home</Link>
        <Link to="/demo#booking" className="btn-secondary">Book a demo <ArrowRight size={17} /></Link>
      </div>
    </div>
  </main>
)

export default NotFound
