import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const wishes = await prisma.guestWish.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(wishes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch wishes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();
    
    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    const wish = await prisma.guestWish.create({
      data: { name, message },
    });
    
    return NextResponse.json(wish, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create wish' }, { status: 500 });
  }
}
