import { type NextRequest, NextResponse } from 'next/server';

import { getFrameMetaHTML } from '@/lib/utils';

export async function POST(req: NextRequest) {
  // ---------------------------------------------------------------------------
  // Initialize game
  // ---------------------------------------------------------------------------

  const winnerSearchParam = req.nextUrl.searchParams.get('winner')?.toLowerCase() ?? 'white';

  const winner =
    winnerSearchParam === 'white' || winnerSearchParam === 'black' ? winnerSearchParam : 'white';
  console.log(winner);

  // ---------------------------------------------------------------------------
  // Frame parameters
  // ---------------------------------------------------------------------------

  const postUrl = `${process.env.BASE_URL}/play`;

  // ---------------------------------------------------------------------------
  // Return game state
  // ---------------------------------------------------------------------------

  return new NextResponse(
    getFrameMetaHTML({
      title: 'Game over',
      postUrl,
      /* TODO */
      imageUrl: 'https://fiveoutofnine.com/static/og/home.png',
      buttons: ['Play again'],
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    },
  );
}

export const GET = POST;
