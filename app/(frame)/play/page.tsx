export default function Page() {
  const title = 'Onframe Chess';

  return (
    <html>
      <head>
        <title>Onframe Chess</title>
        <meta property="og:title" content={title} />
        {/* TODO */}
        <meta property="og:image" content="https://fiveoutofnine.com/static/og/home.png" />
        <meta name="fc:frame" content="vNext" />
        {/* TODO */}
        <meta name="fc:frame:image" content="https://fiveoutofnine.com/static/og/home.png" />
        <meta name="fc:frame:post_url" content={`${process.env.BASE_URL}/api/start`} />
        <meta name="fc:frame:button:1" content="Easy" />
        <meta name="fc:frame:button:2" content="Intermediate" />
        <meta name="fc:frame:button:3" content="Advanced" />
      </head>
    </html>
  );
}
