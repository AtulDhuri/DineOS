import React from 'react'

const capabilities = ['POS billing', 'QR ordering', 'Kitchen display', 'Inventory', 'Reports', 'Multi-outlet operations']

export const Metrics: React.FC = () => <section className="section-padding bg-slate-950"><div className="container-custom"><div className="rounded-3xl border border-white/10 bg-white/[.03] p-8 md:p-10"><p className="eyebrow">One connected foundation</p><h2 className="display-heading max-w-3xl">The operating view your restaurant can grow from.</h2><div className="flex flex-wrap gap-3 mt-8">{capabilities.map((capability) => <span key={capability} className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300">{capability}</span>)}</div></div></div></section>

export default Metrics
