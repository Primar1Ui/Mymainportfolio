import { NextRequest, NextResponse } from 'next/server';

/**
 * Newsletter signup API.
 * To store emails in Resend: set RESEND_API_KEY and RESEND_AUDIENCE_ID in .env,
 * then use Resend SDK to add the contact to your audience.
 * For now we return success and log the email (or you can add to a DB).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim() : '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Optional: integrate with Resend, Mailchimp, or your DB
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID! });
    if (process.env.NODE_ENV === 'development') {
      console.log('[Newsletter] Signup:', email);
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for subscribing! I'll be in touch.",
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
