import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(rsvps);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch RSVPs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, status, guestCount, phone } = await request.json();
    
    if (!name || !status) {
      return NextResponse.json({ error: 'Name and status are required' }, { status: 400 });
    }

    const rsvp = await prisma.rsvp.create({
      data: { 
        name, 
        status, 
        guestCount: parseInt(guestCount) || 1, 
        phone 
      },
    });
    
    return NextResponse.json(rsvp, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create RSVP' }, { status: 500 });
  }
}
