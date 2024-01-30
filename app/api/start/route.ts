import { NextResponse } from 'next/server';

import engine from 'js-chess-engine';

import { getFrameMetaHTML } from '@/lib/utils';

export async function POST() {
  console.log(engine.game());
  const game = new engine.Game();
  const postUrl = `${[process.env.BASE_URL]}/api/start-game`;
  const imageUrl = `${[process.env.BASE_URL]}/api/images/flag?date=${Date.now()}`;

  return new NextResponse(
    getFrameMetaHTML({
      title: 'Start game',
      postUrl,
      imageUrl,
      buttons: ['Easy', 'Intermediate', 'Advanced'],
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    },
  );
}

export const GET = POST;
