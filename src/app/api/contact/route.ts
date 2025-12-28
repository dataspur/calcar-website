import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, category, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // For now, we'll just log it and return success

    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      category,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // await sendEmail({ to: 'info@calcar.com', subject: 'New Contact Form Submission', ...body });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. We will get back to you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
