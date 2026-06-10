import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStore } from '../../../../lib/otp-store';

export const runtime = 'nodejs';

function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const host = getEnv('SMTP_HOST');
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const port = Number(getEnv('SMTP_PORT') ?? '587');

    if (!host || !user || !pass) {
      console.error('Contact API: missing SMTP configuration');
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

    const otp = generateOTP();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Store OTP
    otpStore[email] = { otp, expiresAt };

    const from = getEnv('SMTP_FROM') ?? `"Abhay Barman" <${user}>`;

    // Send OTP email
    await transporter.sendMail({
      from,
      to: email,
      subject: 'Your OTP for Portfolio Contact Form',
      text: `Your OTP is: ${otp}\n\nThis OTP will expire in 10 minutes.`,
      html: `
        <div style="margin:0;padding:32px 16px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;">
            <div style="background:#0a0a0a;padding:24px 28px;color:#ffffff;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#a1a1aa;">Verification</p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;">Your OTP Code</h1>
            </div>
            <div style="padding:28px;text-align:center;">
              <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#71717a;">Use this code to verify your email:</p>
              <div style="background:#f4f4f5;padding:20px;border-radius:8px;margin-bottom:24px;">
                <p style="margin:0;font-size:32px;font-weight:700;letter-spacing:4px;color:#0a0a0a;font-family:'Courier New',monospace;">${otp}</p>
              </div>
              <p style="margin:0;font-size:14px;color:#71717a;">This code will expire in <strong>10 minutes</strong>.</p>
              <p style="margin:16px 0 0;font-size:12px;color:#a1a1aa;">If you didn't request this code, you can safely ignore this email.</p>
            </div>
            <div style="background:#f9fafb;padding:20px 28px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#71717a;">© 2024 Abhay Barman. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'OTP sent to your email.' });
  } catch (error) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP. Please try again later.' },
      { status: 500 },
    );
  }
}
