import { type NextRequest, NextResponse } from 'next/server';

import { STARTING_POSITION } from '@/lib/constants/chess';
import { getFrameMetaHTML } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const engine = require('js-chess-engine');

export async function POST(req: NextRequest) {
  // ---------------------------------------------------------------------------
  // Read Frame `POST` request props
  // ---------------------------------------------------------------------------

  const { untrustedData } = await req.json();
  const buttonIndex = untrustedData.buttonIndex as number;

  // ---------------------------------------------------------------------------
  // Initialize game
  // ---------------------------------------------------------------------------

  const stateSearchParam = req.nextUrl.searchParams.get('state');
  const pageSearchParam = Number(req.nextUrl.searchParams.get('page') ?? 0);
  const difficultySearchParam = Number(req.nextUrl.searchParams.get('difficulty') ?? 0);

  const state = stateSearchParam ? decodeURIComponent(stateSearchParam) : STARTING_POSITION;
  const page = Number.isNaN(pageSearchParam) ? 0 : pageSearchParam;
  const game = new engine.Game(state);
  const init = Boolean(req.nextUrl.searchParams.get('init')) ?? false;
  // Read from `buttonIndex` if it's the first move, otherwise read from
  // `difficultySearchParam`.
  const difficulty = init
    ? buttonIndex
    : Number.isNaN(difficultySearchParam)
      ? 0
      : difficultySearchParam;

  // ---------------------------------------------------------------------------
  // New Frame parameters
  // ---------------------------------------------------------------------------

  const moves = Object.entries(game.moves())
    // @ts-expect-error `js-chess-engine` does not have defined types.
    .map((item: [string, string[]]) => item[1].map((to) => `${item[0]} to ${to}`))
    .flat();

  const maxPage = Math.floor((Math.max(moves.length - 4, 0) + 1) / 2);

  const normalizedPage = Math.min(page, maxPage);
  const startIndex = 3 * Number(normalizedPage > 1) + 2 * Math.max(normalizedPage - 1, 0);
  const offset = normalizedPage === 0 || normalizedPage === maxPage ? 3 : 2;
  const movesSubset = moves.length > 4 ? moves.slice(startIndex, startIndex + offset) : moves;

  const buttons =
    moves.length < 5
      ? moves
      : // We'll always have 3 moves in `movesSubset` if we're on the first page.
        normalizedPage === 0
        ? [movesSubset[0], movesSubset[1], movesSubset[2], '→']
        : // We'll always have 2 moves in `movesSubset` if we're on a middle page.
          normalizedPage < maxPage
          ? ['←', movesSubset[0], movesSubset[1], '→']
          : ([
              '←',
              movesSubset[0],
              movesSubset.length > 1 ? movesSubset[1] : undefined,
              movesSubset.length > 2 ? movesSubset[2] : undefined,
            ].filter(Boolean) as string[]);

  const newPage =
    normalizedPage === 0 && buttonIndex === 4
      ? normalizedPage + 1
      : normalizedPage < maxPage && buttonIndex === 4
        ? normalizedPage + 1
        : normalizedPage > 0 && buttonIndex === 1
          ? normalizedPage - 1
          : normalizedPage;

  let winner: 'white' | 'black' | undefined = undefined;
  // If it wasn't the first move, and the page wasn't changed, it was a move.
  if (!init && newPage === normalizedPage) {
    const move = buttons[buttonIndex - 1];
    const [from, to] = move.split(' to ');

    // Play the user's move.
    game.move(from, to);
    if (game.exportJson().isFinished) {
      winner = 'white';
    } else {
      // Play the engine's move.
      game.aiMove(difficulty);
      if (game.exportJson().isFinished) {
        winner = 'black';
      }
    }
  }
  const fen = game.exportFEN();

  const postUrl = !winner
    ? `${process.env.BASE_URL}/api/move?state=${encodeURIComponent(fen)}&page=${newPage}?difficulty=${difficulty}`
    : `${process.env.BASE_URL}/game-over?winner=${winner}`;
  const imageUrl = `https://fen2image.chessvision.ai/${encodeURIComponent(fen)}`;

  // ---------------------------------------------------------------------------
  // Return game state
  // ---------------------------------------------------------------------------

  return new NextResponse(
    getFrameMetaHTML({
      title: 'Play move',
      postUrl,
      imageUrl,
      buttons,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    },
  );
}

export const GET = POST;

export const dynamic = 'force-dynamic';
