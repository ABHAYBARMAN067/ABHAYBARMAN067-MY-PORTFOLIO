// COMMENTED OUT - Using direct send instead of OTP
/*
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStore } from '../../../../lib/otp-store';

export const runtime = 'nodejs';

function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const otp = typeof body.otp === 'string' ? body.otp.trim() : '';
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    // Validate OTP
    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required.' }, { status: 400 });
    }

    const storedOTP = otpStore[email];
    if (!storedOTP) {
      return NextResponse.json({ error: 'OTP not found. Please request a new one.' }, { status: 400 });
    }

    if (storedOTP.expiresAt < Date.now()) {
      delete otpStore[email];
      return NextResponse.json({ error: 'OTP has expired. Please request a new one.' }, { status: 400 });
    }

    if (storedOTP.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP. Please try again.' }, { status: 400 });
    }

    // OTP is valid, now process the contact message
    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
    }

    if (name.length > 100 || message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

    // Delete OTP after successful verification
    delete otpStore[email];

    const host = getEnv('SMTP_HOST');
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const to = getEnv('CONTACT_TO') ?? user;
    const port = Number(getEnv('SMTP_PORT') ?? '587');

    if (!host || !user || !pass || !to) {
      console.error('Contact API: missing SMTP_HOST, SMTP_USER, SMTP_PASS, or CONTACT_TO');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user, pass },
    });

    const from = getEnv('SMTP_FROM') ?? `"Abhay Barman" <${user}>`;

    // Send to admin
    await transporter.sendMail({
      from,
      to,
      replyTo: { name, address: email },
      subject: `Portfolio contact from ${name}`,
      text: [
        `New message from your portfolio contact form`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    // Send confirmation to user
    try {
      await transporter.sendMail({
        from,
        to: email,
        replyTo: to,
        subject: 'Thanks for contacting me',
        text: [
          `Hi ${name},`,
          ``,
          `Thanks for contacting me. I received your message and will reply soon.`,
          ``,
          `Best regards,`,
          `Abhay Barman`,
        ].join('\n'),
        html: `
          <div style="margin:0;padding:32px 16px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
            <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;">
              <div style="background:#0a0a0a;padding:24px 28px;color:#ffffff;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#a1a1aa;">Portfolio Contact</p>
                <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;">Message received</h1>
              </div>
              <div style="padding:28px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hi ${escapeHtml(name)},</p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Thanks for contacting me. I received your message and will reply to you as soon as possible.</p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Best regards,<br />Abhay Barman</p>
              </div>
              <div style="background:#f9fafb;padding:20px 28px;text-align:center;border-top:1px solid #e4e4e7;">
                <p style="margin:0;font-size:12px;color:#71717a;">© 2024 Abhay Barman. All rights reserved.</p>
              </div>
            </div>
          </div>
        `,
      });
    } catch {
      // Confirmation email failed, but main email was sent successfully
      console.error('Failed to send confirmation email');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 },
    );
  }
}
*/



import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'This endpoint has been deprecated. Please use /api/contact instead.' },
    { status: 410 }
  );
}