import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Use environment variables for security
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO;

  if (!user || !pass || !to) {
    return NextResponse.json({ error: 'Email credentials not set.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `Portfolio Contact <${user}>`,
    to,
    subject: `New message from ${name} via Portfolio Contact Form`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #222; padding: 24px;">
        <h2 style="color: #0ea5e9;">📬 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="margin-top: 16px;"><strong>Message:</strong></p>
        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 16px;">${message.replace(/\n/g, '<br/>')}</div>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 14px; color: #64748b;">Sent from the portfolio contact form.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 500 });
  }
}
