import { NextResponse } from 'next/server';
import { getProperties, addProperty } from '@/lib/db';

export async function GET() {
  try {
    const properties = await getProperties();
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProperty = await addProperty(body);
    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add property' }, { status: 500 });
  }
}
