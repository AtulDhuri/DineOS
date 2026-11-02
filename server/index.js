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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'))
})

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, inquiryType, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    await transporter.sendMail({
      from: `"DineOS Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@dineos.cloud',
      subject: `New Contact Form Submission - ${inquiryType}`,
      text: `
        Name: ${name}
        Email: ${email}
        Inquiry Type: ${inquiryType}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`DineOS backend server running on port ${PORT}`)
})