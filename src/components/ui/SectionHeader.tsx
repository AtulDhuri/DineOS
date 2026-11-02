import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  tagline?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  tagline,
}) => {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const mx = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`mb-12 ${textAlign}`}>
      {tagline && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-400 mb-4 block">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          {tagline}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${mx}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg text-slate-400 max-w-2xl ${mx} leading-relaxed`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader