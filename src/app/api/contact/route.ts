import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, phone, company, city, projectType, units } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    // In a production setup, this sends an email, WhatsApp notification, or inserts into DB
    console.log('[Demo Request Inbound]:', {
      name,
      phone,
      company,
      city,
      projectType,
      units,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Demo request received successfully! Our real estate ERP consultant will connect with you within 2 business hours.',
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
