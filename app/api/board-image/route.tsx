import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

import { blueDark, grayDark, purpleDark, redDark } from '@radix-ui/colors';

import { STARTING_POSITION } from '@/lib/constants/chess';

// -----------------------------------------------------------------------------
// Image
// -----------------------------------------------------------------------------

export async function GET(req: NextRequest) {
  // ---------------------------------------------------------------------------
  // Fonts
  // ---------------------------------------------------------------------------

  const robotoMono400 = fetch(
    new URL(
      '../../../node_modules/@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  // ---------------------------------------------------------------------------
  // Search params
  // ---------------------------------------------------------------------------

  const stateSearchParam = req.nextUrl.searchParams.get('state');
  const [from, to] = req.nextUrl.searchParams.get('user')?.split('-') ?? ['', ''];
  const [cpuFrom, cpuTo] = req.nextUrl.searchParams.get('cpu')?.split('-') ?? ['', ''];
  const gg = req.nextUrl.searchParams.get('gg');

  const state = (stateSearchParam ? decodeURIComponent(stateSearchParam) : STARTING_POSITION).split(
    ' ',
  );
  const board = state[0].split('/');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: grayDark.gray1,
        }}
      >
        <div
          style={{
            display: 'flex',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '6px solid',
            borderColor: grayDark.gray6,
          }}
        >
          <svg
            width="440"
            height="440"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g visibility="hidden">
              <path
                id="bishop"
                d="M10.625 1c-.76 0-1.375.614-1.375 1.375 0 .692.511 1.263 1.177 1.362C8.494 5.59 5.47 9.164 5.47 13.375c0 2.037 1.323 3.107 2.406 3.64v1.172h8.25v-1.172c1.083-.538 2.406-1.608 2.406-3.64 0-1.603-.438-3.11-1.087-4.473l-4.271 4.271a.69.69 0 0 1-.971 0 .69.69 0 0 1 0-.971l4.559-4.559c-.997-1.637-2.226-2.986-3.188-3.906a1.379 1.379 0 0 0 1.177-1.362c0-.76-.614-1.375-1.375-1.375h-2.75ZM7.187 19.563 5.41 21.34A.97.97 0 0 0 6.097 23h11.807a.97.97 0 0 0 .687-1.659l-1.779-1.779H7.188Z"
              />
              <path
                id="king"
                d="M12 1c.76 0 1.375.614 1.375 1.375v.688h.688a1.374 1.374 0 1 1 0 2.75h-.688v2.062h6.531a1.718 1.718 0 0 1 1.586 2.38l-3.305 7.932H5.813l-3.304-7.932a1.718 1.718 0 0 1 1.586-2.38h6.531V5.812h-.688c-.76 0-1.374-.614-1.374-1.375 0-.76.614-1.375 1.374-1.375h.688v-.687A1.372 1.372 0 0 1 12 1ZM4.034 21.341l1.779-1.779h12.375l1.778 1.78A.97.97 0 0 1 19.278 23H4.722a.97.97 0 0 1-.687-1.66Z"
              />
              <path
                id="knight"
                d="m6.5 3.063-.571.571a2.741 2.741 0 0 0-.804 1.942v5.69c0 .459.228.889.61 1.142l.456.301c.614.412 1.405.46 2.066.129l.138-.069a2.13 2.13 0 0 0 .314-.193l2.122-1.59a.8.8 0 1 1 .928 1.302l-5.5 3.751a2.605 2.605 0 0 0-1.134 2.148h13.75l1.242-6.832c.09-.485.133-.98.133-1.473V9.25A8.252 8.252 0 0 0 12 1H5.976a.853.853 0 0 0-.383 1.611l.907.451Zm1.031 2.921a.86.86 0 1 1 1.719 0 .86.86 0 0 1-1.719 0ZM3.346 21.341A.97.97 0 0 0 4.034 23h15.932a.97.97 0 0 0 .688-1.659l-1.779-1.779H5.125l-1.779 1.78Z"
              />
              <path
                id="pawn"
                d="M14.544 9.8A4.769 4.769 0 0 0 12 1a4.769 4.769 0 0 0-2.544 8.8h-.39a1.465 1.465 0 0 0-.16 2.924l-.573 5.143h7.334l-.573-5.143a1.469 1.469 0 0 0 1.306-1.457c0-.812-.655-1.467-1.467-1.467h-.39ZM5.702 21.23A1.035 1.035 0 0 0 6.435 23h11.13a1.035 1.035 0 0 0 .732-1.77L16.4 19.334H7.6l-1.898 1.898Z"
              />
              <path
                id="queen"
                d="M12 1a2.406 2.406 0 1 1 0 4.813A2.406 2.406 0 0 1 12 1ZM6.762 7.179A1.346 1.346 0 0 1 8.06 6.156c.528 0 .97.31 1.19.73a3.095 3.095 0 0 0 5.5 0c.22-.42.662-.73 1.19-.73.658 0 1.16.464 1.298 1.023a2.752 2.752 0 0 0 3.949 1.757 1.195 1.195 0 0 1 1.581 1.672l-4.593 7.58H5.825l-4.593-7.58a1.192 1.192 0 0 1 1.581-1.672A2.752 2.752 0 0 0 6.762 7.18Zm-.95 12.383h12.375l1.78 1.78A.97.97 0 0 1 19.278 23H4.72a.97.97 0 0 1-.687-1.66l1.778-1.779Z"
              />
              <path
                id="rook"
                d="M3.2 8.333v-6.6c0-.403.33-.733.733-.733h2.934c.403 0 .733.33.733.733v1.834c0 .201.165.366.367.366h1.466a.368.368 0 0 0 .367-.366V1.733c0-.403.33-.733.733-.733h2.934c.403 0 .733.33.733.733v1.834c0 .201.165.366.367.366h1.466a.368.368 0 0 0 .367-.366V1.733c0-.403.33-.733.733-.733h2.934c.403 0 .733.33.733.733v6.6c0 .463-.215.899-.587 1.174l-2.346 1.76.733 6.6H5.4l.733-6.6-2.346-1.76A1.457 1.457 0 0 1 3.2 8.333Zm8.067 4.4h1.466c.404 0 .734-.33.734-.733V9.8a1.466 1.466 0 1 0-2.934 0V12c0 .403.33.733.734.733Zm-8.498 8.498 1.898-1.898h14.666l1.898 1.898a1.035 1.035 0 0 1-.733 1.77H3.502a1.035 1.035 0 0 1-.734-1.77Z"
              />
            </g>
            <path d="M0 0h256v256H0z" fill={grayDark.gray9} />
            <g fill={grayDark.gray4}>
              <path d="M0 32h256v32H0zm0 64h256v32H0zm0 64h256v32H0zm0 64h256v32H0z" />
              <path d="M32 0h32v256H32zm64 0h32v256H96zm64 0h32v256h-32zm64 0h32v256h-32z" />
            </g>
            <path
              d="M32 32h32v32H32zm64 0h32v32H96zm64 0h32v32h-32zm64 0h32v32h-32zM32 96h32v32H32zm64 0h32v32H96zm64 0h32v32h-32zm64 0h32v32h-32zM32 160h32v32H32zm64 0h32v32H96zm64 0h32v32h-32zm64 0h32v32h-32zM32 224h32v32H32zm64 0h32v32H96zm64 0h32v32h-32zm64 0h32v32h-32z"
              fill={grayDark.gray9}
            />
            {new Array(8).fill(null).map((_, i) => {
              return (
                <g key={i}>
                  {new Array(8).fill(null).map((_, j) => {
                    const index = `${'ABCDEFGH'[j]}${'87654321'[i]}`;
                    const pieceOverlap: number =
                      // eslint-disable-nextline @typescript-eslint/ban-ts-comment
                      // @ts-expect-error Adding booleans is legal.
                      (from === index) + (to === index) + (cpuFrom === index) + (cpuTo === index);
                    const squareFill =
                      pieceOverlap > 1
                        ? purpleDark.purple9
                        : from === index
                          ? blueDark.blue3
                          : to === index
                            ? blueDark.blue9
                            : cpuFrom === index
                              ? redDark.red3
                              : cpuTo === index
                                ? redDark.red9
                                : undefined;

                    return squareFill ? (
                      <rect
                        key={j}
                        x={32 * j}
                        y={32 * i}
                        width={32}
                        height={32}
                        fill={squareFill}
                      />
                    ) : null;
                  })}
                </g>
              );
            })}
            {board.map((rank, i) => {
              let offset = 0;

              return (
                <g key={i}>
                  {rank.split('').map((square, j) => {
                    const number = Number(square);
                    if (!Number.isNaN(number)) {
                      offset += number - 1;
                      return null;
                    }

                    const piece = square.toLowerCase();
                    const pieceId =
                      piece === 'b'
                        ? 'bishop'
                        : piece === 'k'
                          ? 'king'
                          : piece === 'n'
                            ? 'knight'
                            : piece === 'p'
                              ? 'pawn'
                              : piece === 'q'
                                ? 'queen'
                                : piece === 'r'
                                  ? 'rook'
                                  : '';
                    const white = square !== piece;

                    return (
                      <use
                        key={j}
                        href={`#${pieceId}`}
                        x={4 + j * 32 + offset * 32}
                        y={4 + i * 32}
                        fill={white ? grayDark.gray12 : grayDark.gray1}
                        stroke={white ? grayDark.gray1 : grayDark.gray12}
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 24,
            fontFamily: 'Roboto_Mono_400',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: grayDark.gray12,
              fontSize: 24,
              lineHeight: 1.5,
            }}
          >
            {state[0]}
          </div>
          <div
            style={{
              display: 'flex',
              color: grayDark.gray11,
              fontSize: 20,
              lineHeight: 1.5,
            }}
          >
            {gg !== null ? (gg === '1' ? 'You won! - ' : 'You lost. - ') : ''} Move {state[5]}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Roboto_Mono_400', data: await robotoMono400, weight: 400 }],
    },
  );
}

// -----------------------------------------------------------------------------
// Next.js config
// -----------------------------------------------------------------------------

export const runtime = 'edge';
