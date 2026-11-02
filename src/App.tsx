import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { Features } from './pages/Features'
import { Solutions } from './pages/Solutions'
import { Pricing } from './pages/Pricing'
import { Demo } from './pages/Demo'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App