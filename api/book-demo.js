import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
})

const clean = (value, maxLength = 1000) => String(value ?? '').trim().slice(0, maxLength)
const escapeHtml = (value) => String(value).replace(/[&<>'\"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]))
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const name = clean(req.body?.name, 120)
    const email = clean(req.body?.email, 254)
    const restaurant = clean(req.body?.restaurant, 160)
    const phone = clean(req.body?.phone, 60)
    const businessType = clean(req.body?.businessType, 80)
    const dateLabel = clean(req.body?.dateLabel, 80)
    const time = clean(req.body?.time, 40)
    const timezone = clean(req.body?.timezone || 'IST (India Standard Time)', 80)
    const details = clean(req.body?.details, 3000)

    if (!name || !email || !restaurant || !businessType || !dateLabel || !time) return res.status(400).json({ error: 'Please complete the required booking fields' })
    if (!validEmail(email)) return res.status(400).json({ error: 'Please provide a valid email address' })

    const text = `Name: ${name}\nEmail: ${email}\nRestaurant: ${restaurant}\nPhone: ${phone || 'Not provided'}\nBusiness Type: ${businessType}\nPreferred Slot: ${dateLabel}, ${time} (${timezone})\nAdditional Details: ${details || 'Not provided'}`
    const html = `<h2>DineOS demo booking request</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Restaurant:</strong> ${escapeHtml(restaurant)}</p><p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p><p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p><p><strong>Preferred Slot:</strong> ${escapeHtml(dateLabel)}, ${escapeHtml(time)} (${escapeHtml(timezone)})</p><p><strong>Additional Details:</strong><br />${escapeHtml(details || 'Not provided').replace(/\n/g, '<br />')}</p>`

    await transporter.sendMail({
      from: `"DineOS Demo" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@dineos.cloud',
      replyTo: email,
      subject: `New DineOS demo request - ${dateLabel} ${time}`,
      text,
      html,
    })

    await transporter.sendMail({
      from: `"DineOS" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.CONTACT_EMAIL || 'contact@dineos.cloud',
      subject: 'Your DineOS demo request was received',
      text: `Hi ${name},\n\nWe received your DineOS demo request for ${dateLabel} at ${time} (${timezone}). Our team will try to reach you within 5 working days to confirm the walkthrough.\n\nIf you need to update the request, reply to this email or contact ${process.env.CONTACT_EMAIL || 'contact@dineos.cloud'}.\n\nDineOS Team`,
      html: `<p>Hi ${escapeHtml(name)},</p><p>We received your DineOS demo request for <strong>${escapeHtml(dateLabel)} at ${escapeHtml(time)} (${escapeHtml(timezone)})</strong>.</p><p>Our team will try to reach you within 5 working days to confirm the walkthrough.</p><p>If you need to update the request, reply to this email or contact <a href="mailto:${process.env.CONTACT_EMAIL || 'contact@dineos.cloud'}">${process.env.CONTACT_EMAIL || 'contact@dineos.cloud'}</a>.</p><p>DineOS Team</p>`,
    })

    return res.status(200).json({ success: true, message: `Your request for ${dateLabel} at ${time} was received. A confirmation email is on its way.` })
  } catch (error) {
    console.error('Demo booking email error:', error)
    return res.status(500).json({ error: 'Booking service unavailable. Please email contact@dineos.cloud.' })
  }
}
