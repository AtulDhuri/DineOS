import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'www')))

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const escapeHtml = (value) => String(value).replace(/[&<>'\"]/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}[character]))

const clean = (value, maxLength = 2000) => String(value ?? '').trim().slice(0, maxLength)
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

app.post('/api/contact', async (req, res) => {
  try {
    const name = clean(req.body?.name, 120)
    const email = clean(req.body?.email, 254)
    const inquiryType = clean(req.body?.inquiryType || 'general', 80).replace(/[^a-zA-Z0-9 _-]/g, '')
    const message = clean(req.body?.message, 5000)

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    if (!validEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeType = escapeHtml(inquiryType)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    await transporter.sendMail({
      from: `"DineOS Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@dineos.cloud',
      replyTo: email,
      subject: `New Contact Form Submission - ${inquiryType}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Inquiry Type:</strong> ${safeType}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

app.post('/api/book-demo', async (req, res) => {
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

    await transporter.sendMail({ from: `"DineOS Demo" <${process.env.EMAIL_USER}>`, to: process.env.CONTACT_EMAIL || 'contact@dineos.cloud', replyTo: email, subject: `New DineOS demo request - ${dateLabel} ${time}`, text, html })
    await transporter.sendMail({ from: `"DineOS" <${process.env.EMAIL_USER}>`, to: email, replyTo: process.env.CONTACT_EMAIL || 'contact@dineos.cloud', subject: 'Your DineOS demo request was received', text: `Hi ${name},\n\nWe received your DineOS demo request for ${dateLabel} at ${time} (${timezone}). Our team will try to reach you within 5 working days to confirm the walkthrough.\n\nDineOS Team`, html: `<p>Hi ${escapeHtml(name)},</p><p>We received your DineOS demo request for <strong>${escapeHtml(dateLabel)} at ${escapeHtml(time)} (${escapeHtml(timezone)})</strong>.</p><p>Our team will try to reach you within 5 working days to confirm the walkthrough.</p><p>DineOS Team</p>` })

    return res.status(200).json({ success: true, message: `Your request for ${dateLabel} at ${time} was received. A confirmation email is on its way.` })
  } catch (error) {
    console.error('Demo booking email error:', error)
    return res.status(500).json({ error: 'Booking service unavailable. Please email contact@dineos.cloud.' })
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`DineOS backend server running on port ${PORT}`)
})
