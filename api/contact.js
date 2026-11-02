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

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, inquiryType, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    await transporter.sendMail({
      from: `"DineOS Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@dineos.cloud',
      subject: `New Contact Form Submission - ${inquiryType}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Inquiry Type:</strong> ${inquiryType}</p><hr /><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br />')}</p>`,
    })

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
