import { STARTING_POSITION } from '@/lib/constants/chess';

export default function Page() {
  const title = 'Onframe Chess';

  return (
    <html>
      <head>
        <title>Onframe Chess</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://onframe-chess.vercel.app/static/og/home.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://onframe-chess.vercel.app/static/og/home.png" />
        <meta
          name="fc:frame:post_url"
          content={`${process.env.BASE_URL}/api/move?state=${encodeURIComponent(STARTING_POSITION)}&page=0&init=1`}
        />
        <meta name="fc:frame:button:1" content="Easy" />
        <meta name="fc:frame:button:2" content="Intermediate" />
        <meta name="fc:frame:button:3" content="Advanced" />
      </head>
    </html>
  );
}
