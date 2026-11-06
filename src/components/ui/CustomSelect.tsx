import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface CustomSelectProps {
  label?: string
  name: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  required?: boolean
  className?: string
  error?: string
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  className = '',
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string>(value || '')

  useEffect(() => {
    setSelected(value || '')
  }, [value])

  const handleSelect = (val: string) => {
    setSelected(val)
    setIsOpen(false)
    onChange?.(val)
  }

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={`${name}-select`} className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      )}
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          id={`${name}-select`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={label || name}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all ${className} ${error ? 'border-red-500' : ''}`}
        >
          <span>{selected || options[0]?.label || 'Select an option'}</span>
          <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div role="listbox" aria-label={label || name} className="absolute z-50 w-full mt-1 rounded-xl bg-slate-900/95 border border-white/10 shadow-2xl overflow-hidden max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={selected === opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full px-4 py-3 text-sm text-left transition-colors ${
                  selected === opt.value
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}

export default CustomSelect