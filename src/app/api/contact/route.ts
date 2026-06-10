import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

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
                <p style="margin:0 0 22px;font-size:16px;line-height:1.7;color:#3f3f46;">
                  Thanks for contacting me. I received your message and will reply soon.
                </p>
                <div style="margin:24px 0;padding:16px 18px;border-left:4px solid #22c55e;background:#f0fdf4;border-radius:8px;">
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#166534;">
                    Your message has been delivered successfully.
                  </p>
                </div>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#3f3f46;">
                  Best regards,<br />
                  <strong style="color:#18181b;">Abhay Barman</strong>
                </p>
              </div>
              <div style="padding:16px 28px;background:#fafafa;border-top:1px solid #e4e4e7;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#71717a;">
                  This is an automatic confirmation from Abhay Barman's portfolio.
                </p>
              </div>
            </div>
          </div>
        `,
      });
    } catch (confirmationError) {
      console.error('Contact API confirmation email error:', confirmationError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);

    const maybeMailError = error as {
      code?: string;
      command?: string;
      responseCode?: number;
      response?: string;
    };

    if (
      maybeMailError.code === 'EAUTH' ||
      maybeMailError.responseCode === 534 ||
      maybeMailError.responseCode === 535
    ) {
      return NextResponse.json(
        {
          error: 'Please send mail to my email ID',
        },
        { status: 502 },
      );
    }

    if (maybeMailError.code === 'ETIMEDOUT' || maybeMailError.code === 'ESOCKET') {
      return NextResponse.json(
        { error: 'Please send mail to my email ID' },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { error: 'Please send mail to my email ID' },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
