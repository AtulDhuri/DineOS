import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

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

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const name = clean(req.body?.name, 120)
    const email = clean(req.body?.email, 254)
    const inquiryType = clean(req.body?.inquiryType || 'general', 80).replace(/[^a-zA-Z0-9 _-]/g, '')
    const message = clean(req.body?.message, 5000)

    if (!name || !email || !message) return res.status(400).json({ error: 'Name, email, and message are required' })
    if (!validEmail(email)) return res.status(400).json({ error: 'Please provide a valid email address' })

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
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Inquiry Type:</strong> ${safeType}</p><hr /><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
