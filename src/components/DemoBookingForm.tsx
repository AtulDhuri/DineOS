import React, { useEffect, useMemo, useRef, useState } from 'react'
import { CalendarDays, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3, Mail, MessageSquare, Phone, Users } from 'lucide-react'
import CustomSelect from './ui/CustomSelect'

const CONTACT_EMAIL = 'contact@dineos.cloud'
const TIME_SLOTS = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM']

type BookingStatus = 'idle' | 'submitting' | 'success' | 'error'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const BOOKING_WINDOW_DAYS = 60

const toIso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const fromIso = (iso: string) => new Date(`${iso}T12:00:00`)
const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6

const getFirstAvailable = () => {
  const d = new Date()
  d.setHours(12, 0, 0, 0)
  do d.setDate(d.getDate() + 1)
  while (isWeekend(d))
  return toIso(d)
}

const formatDate = (date: string) => new Intl.DateTimeFormat('en-IN', { weekday: 'short', month: 'short', day: 'numeric' }).format(fromIso(date))

const CalendarPicker: React.FC<{ value: string; onChange: (iso: string) => void }> = ({ value, onChange }) => {
  const today = useMemo(() => { const d = new Date(); d.setHours(12, 0, 0, 0); return d }, [])
  const minDate = useMemo(() => { const d = new Date(today); d.setDate(d.getDate() + 1); return d }, [today])
  const maxDate = useMemo(() => { const d = new Date(today); d.setDate(d.getDate() + BOOKING_WINDOW_DAYS); return d }, [today])
  const [month, setMonth] = useState(() => { const d = fromIso(value); return new Date(d.getFullYear(), d.getMonth(), 1) })

  const firstWeekday = (month.getDay() + 6) % 7
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const cells: (Date | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1, 12))]
  const canPrev = month > new Date(minDate.getFullYear(), minDate.getMonth(), 1)
  const canNext = new Date(month.getFullYear(), month.getMonth() + 1, 1) <= maxDate

  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <button type="button" aria-label="Previous month" disabled={!canPrev} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="flex h-9 w-9 items-center justify-center rounded-xl text-[#0F172A] hover:bg-brand-50 disabled:opacity-30"><ChevronLeft size={18} /></button>
        <p className="text-sm font-bold text-[#0F172A]" aria-live="polite">{new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(month)}</p>
        <button type="button" aria-label="Next month" disabled={!canNext} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="flex h-9 w-9 items-center justify-center rounded-xl text-[#0F172A] hover:bg-brand-50 disabled:opacity-30"><ChevronRight size={18} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => <span key={d} className="py-1 text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">{d}</span>)}
        {cells.map((d, i) => {
          if (!d) return <span key={`e${i}`} />
          const iso = toIso(d)
          const disabled = isWeekend(d) || d < minDate || d > maxDate
          const selected = iso === value
          return (
            <button key={iso} type="button" disabled={disabled} aria-pressed={selected} aria-label={formatDate(iso)} onClick={() => onChange(iso)}
              className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition ${selected ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' : disabled ? 'cursor-not-allowed text-slate-300' : 'text-[#0F172A] hover:bg-brand-50'}`}>
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
const DatePicker: React.FC<{ value: string; onChange: (iso: string) => void }> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen((v) => !v)} className={`form-input flex items-center justify-between text-left ${open ? '!border-brand-500 !ring-2 !ring-brand-500/20' : ''}`}>
        <span className="font-semibold text-[#0F172A]">{formatDate(value)}</span>
        <CalendarDays size={18} className="text-brand-500" />
      </button>
      {open && (
        <div role="dialog" aria-label="Choose a date" className="absolute left-0 right-0 z-30 mt-2 min-w-[290px] shadow-2xl">
          <CalendarPicker value={value} onChange={(iso) => { onChange(iso); setOpen(false) }} />
        </div>
      )}
    </div>
  )
}
const TimeDropdown: React.FC<{ value: string; onChange: (slot: string) => void }> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((v) => !v)} className={`form-input flex items-center justify-between text-left ${open ? '!border-brand-500 !ring-2 !ring-brand-500/20' : ''}`}>
        <span className="font-semibold text-[#0F172A]">{value}</span>
        <ChevronDown size={18} className={`text-brand-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul role="listbox" aria-label="Preferred time" className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-1.5 shadow-2xl">
          {TIME_SLOTS.map((slot) => (
            <li key={slot} role="option" aria-selected={slot === value}>
              <button type="button" onClick={() => { onChange(slot); setOpen(false) }} className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${slot === value ? 'bg-brand-50 text-brand-600' : 'text-[#0F172A] hover:bg-brand-50'}`}>
                {slot}{slot === value && <Check size={16} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export const DemoBookingForm: React.FC = () => {
  const [date, setDate] = useState(getFirstAvailable)
  const [time, setTime] = useState(TIME_SLOTS[0])
  const [businessType, setBusinessType] = useState('')
  const [status, setStatus] = useState<BookingStatus>('idle')
  const [message, setMessage] = useState('')
  const [formKey, setFormKey] = useState(0)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')
    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      restaurant: formData.get('restaurant'),
      phone: formData.get('phone'),
      businessType,
      details: formData.get('details'),
      date,
      dateLabel: formatDate(date),
      time,
      timezone: 'IST (India Standard Time)',
    }

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Booking service unavailable')
      setStatus('success')
      setBusinessType('')
      setMessage(result.message || 'Your demo request has been confirmed.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Booking service unavailable')
    }
  }

  if (status === 'success') return <div className="glass-card rounded-3xl border border-[#22C55E]/30 p-8 md:p-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]"><CheckCircle2 size={28} /></div><h3 className="mt-6 text-2xl font-bold text-[#0F172A]">Demo request confirmed</h3><p className="mt-3 text-[#64748B]">{message}</p><p className="mt-5 text-sm text-[#64748B]">We sent the request details to your email. Our team will try to reach you within 5 working days.</p><button type="button" onClick={() => { setStatus('idle'); setBusinessType(''); setFormKey((key) => key + 1) }} className="btn-secondary mt-7">Request another time</button></div>

  return <div className="glass-card rounded-3xl border border-[#E2E8F0] p-8 md:p-10 shadow-2xl"><div className="text-center mb-7"><p className="eyebrow">Choose a time</p><h3 className="text-2xl font-bold text-[#0F172A]">Schedule a DineOS walkthrough</h3><p className="mt-2 text-sm text-[#64748B]">Select a preferred weekday slot. All times are shown in IST.</p></div>{status === 'error' && <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">We could not complete the booking request. You can email us directly at <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and include your preferred time.</div>}<form key={formKey} onSubmit={handleSubmit} className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><div className="relative"><Users className="absolute left-3 top-3.5 text-[#64748B]" size={17} /><input name="name" required placeholder="Full Name" aria-label="Full Name" className="form-input pl-10" /></div><div className="relative"><Mail className="absolute left-3 top-3.5 text-[#64748B]" size={17} /><input type="email" name="email" required placeholder="Work Email" aria-label="Work Email" className="form-input pl-10" /></div></div><div className="grid md:grid-cols-2 gap-4"><div className="relative"><MessageSquare className="absolute left-3 top-3.5 text-[#64748B]" size={17} /><input name="restaurant" required placeholder="Restaurant / Business Name" aria-label="Restaurant or business name" className="form-input pl-10" /></div><div className="relative"><Phone className="absolute left-3 top-3.5 text-[#64748B]" size={17} /><input name="phone" placeholder="Phone Number" aria-label="Phone Number" className="form-input pl-10" /></div></div><CustomSelect label="Business Type" name="businessType" value={businessType} onChange={setBusinessType} required options={[{ value: '', label: 'Select Business Type' }, { value: 'restaurant', label: 'Restaurant' }, { value: 'hotel', label: 'Hotel' }, { value: 'cafe', label: 'Cafe' }, { value: 'fine-dining', label: 'Fine Dining' }, { value: 'food-court', label: 'Food Court' }, { value: 'lounge', label: 'Lounge' }, { value: 'resort', label: 'Resort' }, { value: 'banquet', label: 'Banquet' }]} /><div className="grid gap-4 md:grid-cols-2"><div><span className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#64748B]"><CalendarDays size={15} />Preferred date</span><DatePicker value={date} onChange={setDate} /></div><div><span className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#64748B]"><Clock3 size={15} />Preferred time (IST)</span><TimeDropdown value={time} onChange={setTime} /></div></div><textarea name="details" rows={3} placeholder="What would you like to see in the walkthrough? (optional)" aria-label="Additional demo details" className="form-input resize-y" /><button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">{status === 'submitting' ? 'Sending request...' : 'Confirm demo request'} <CalendarDays size={18} /></button><p className="text-center text-xs text-[#64748B]">A confirmation email will be sent to you and the DineOS team.</p></form></div>
}

export default DemoBookingForm
