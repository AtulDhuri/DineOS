import React, { useState } from 'react'
import { Play } from 'lucide-react'

const VIDEO_ID = 'ff_NS4Tciz8'

export const VideoPlayer: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [playing, setPlaying] = useState(false)
  return (
    <div className={`overflow-hidden rounded-2xl border border-[#E2E8F0] bg-brand-50 shadow-2xl shadow-brand-500/15 ${className}`}>
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`} title="DineOS platform tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label="Play DineOS platform tour video" className="group absolute inset-0 h-full w-full">
            <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`} onError={(e) => { const img = e.currentTarget; if (!img.dataset.fallback) { img.dataset.fallback = '1'; img.src = `https://i.ytimg.com/vi/${VIDEO_ID}/sddefault.jpg` } }} alt="DineOS platform tour video thumbnail" width={1280} height={720} className="h-full w-full object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-brand-800/50 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cta text-white shadow-xl transition group-hover:scale-110"><Play size={30} className="ml-1 fill-white" /></span>
          </button>
        )}
      </div>
    </div>
  )
}
export const ProductDemo: React.FC = () => {

  return (
    <section id="product-demo" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Platform tour</p>
          <h2 className="display-heading !text-[#0F172A]">Watch DineOS <span className="text-brand-600">in action</span></h2>
          <p className="section-lede mt-5 !text-[#64748B]">See one order move from the guest's phone to the kitchen, the service team and the manager's dashboard.</p>
        </div>
        <VideoPlayer className="mx-auto mt-10 max-w-4xl" />
        <p className="mt-4 text-center text-sm text-[#64748B]">Prefer a live walkthrough? <a href="/demo#booking" className="font-semibold text-brand-600 underline">Book a demo</a>.</p>
      </div>
    </section>
  )
}

export default ProductDemo
