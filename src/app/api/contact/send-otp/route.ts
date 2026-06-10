// COMMENTED OUT - Using direct send instead of OTP
// This route has been disabled. Use /api/contact instead for direct email sending.

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'This endpoint has been deprecated. Please use /api/contact instead.' },
    { status: 410 }
  );
}
