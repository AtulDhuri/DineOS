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

    await transporter.sendMail({
      from: `"DineOS" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting DineOS',
      text: `Hi ${name},\n\nThank you for reaching out to DineOS. We've received your message and will get back to you within 24 hours.\n\nYour inquiry details:\n- Type: ${inquiryType}\n- Message: ${message}\n\nBest regards,\nThe DineOS Team`,
      html: `<h2>Hi ${name},</h2><p>Thank you for reaching out to DineOS. We've received your message and will get back to you within 24 hours.</p><hr /><p><strong>Your inquiry details:</strong></p><ul><li><strong>Type:</strong> ${inquiryType}</li><li><strong>Message:</strong> ${message.replace(/\n/g, '<br />')}</li></ul><p>Best regards,<br />The DineOS Team</p>`,
    })

    res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
