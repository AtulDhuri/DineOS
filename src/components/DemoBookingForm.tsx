import React, { useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, Clock3, Mail, MessageSquare, Phone, Users } from 'lucide-react'
import CustomSelect from './ui/CustomSelect'

const CONTACT_EMAIL = 'contact@dineos.cloud'
const TIME_SLOTS = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM']

type BookingStatus = 'idle' | 'submitting' | 'success' | 'error'

const getAvailableDates = () => {
  const dates: string[] = []
  const current = new Date()
  current.setHours(12, 0, 0, 0)
  while (dates.length < 7) {
    current.setDate(current.getDate() + 1)
    const day = current.getDay()
    if (day !== 0 && day !== 6) dates.push(current.toISOString().slice(0, 10))
  }
  return dates
}

const formatDate = (date: string) => new Intl.DateTimeFormat('en-IN', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date(`${date}T12:00:00`))

export const DemoBookingForm: React.FC = () => {
  const dates = useMemo(getAvailableDates, [])
  const [date, setDate] = useState(dates[0])
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

  if (status === 'success') return <div className="glass-card rounded-3xl border border-emerald-400/20 p-8 md:p-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300"><CheckCircle2 size={28} /></div><h3 className="mt-6 text-2xl font-bold text-white">Demo request confirmed</h3><p className="mt-3 text-slate-400">{message}</p><p className="mt-5 text-sm text-slate-500">We sent the request details to your email. Our team will try to reach you within 5 working days.</p><button type="button" onClick={() => { setStatus('idle'); setBusinessType(''); setFormKey((key) => key + 1) }} className="btn-secondary mt-7">Request another time</button></div>

  return <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl"><div className="text-center mb-7"><p className="eyebrow">Choose a time</p><h3 className="text-2xl font-bold text-white">Schedule a DineOS walkthrough</h3><p className="mt-2 text-sm text-slate-400">Select a preferred weekday slot. All times are shown in IST.</p></div>{status === 'error' && <div role="alert" className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">We could not complete the booking request. You can email us directly at <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and include your preferred time.</div>}<form key={formKey} onSubmit={handleSubmit} className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><div className="relative"><Users className="absolute left-3 top-3.5 text-slate-500" size={17} /><input name="name" required placeholder="Full Name" aria-label="Full Name" className="form-input pl-10" /></div><div className="relative"><Mail className="absolute left-3 top-3.5 text-slate-500" size={17} /><input type="email" name="email" required placeholder="Work Email" aria-label="Work Email" className="form-input pl-10" /></div></div><div className="grid md:grid-cols-2 gap-4"><div className="relative"><MessageSquare className="absolute left-3 top-3.5 text-slate-500" size={17} /><input name="restaurant" required placeholder="Restaurant / Business Name" aria-label="Restaurant or business name" className="form-input pl-10" /></div><div className="relative"><Phone className="absolute left-3 top-3.5 text-slate-500" size={17} /><input name="phone" placeholder="Phone Number" aria-label="Phone Number" className="form-input pl-10" /></div></div><CustomSelect label="Business Type" name="businessType" value={businessType} onChange={setBusinessType} required options={[{ value: '', label: 'Select Business Type' }, { value: 'restaurant', label: 'Restaurant' }, { value: 'hotel', label: 'Hotel' }, { value: 'cafe', label: 'Cafe' }, { value: 'fine-dining', label: 'Fine Dining' }, { value: 'food-court', label: 'Food Court' }, { value: 'lounge', label: 'Lounge' }, { value: 'resort', label: 'Resort' }, { value: 'banquet', label: 'Banquet' }]} /><div className="grid md:grid-cols-2 gap-4"><label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-400"><CalendarDays size={15} />Preferred date</span><select value={date} onChange={(event) => setDate(event.target.value)} className="form-input">{dates.map((item) => <option key={item} value={item}>{formatDate(item)}</option>)}</select></label><label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-400"><Clock3 size={15} />Preferred time</span><select value={time} onChange={(event) => setTime(event.target.value)} className="form-input">{TIME_SLOTS.map((item) => <option key={item}>{item}</option>)}</select></label></div><textarea name="details" rows={3} placeholder="What would you like to see in the walkthrough? (optional)" aria-label="Additional demo details" className="form-input resize-y" /><button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">{status === 'submitting' ? 'Sending request...' : 'Confirm demo request'} <CalendarDays size={18} /></button><p className="text-center text-xs text-slate-500">A confirmation email will be sent to you and the DineOS team.</p></form></div>
}

export default DemoBookingForm
