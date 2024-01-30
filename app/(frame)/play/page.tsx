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
        <meta name="fc:frame:post_url" content={`${process.env.DOMAIN}/api/spawn`} />
        <meta name="fc:frame:button:1" content="Start game" />
      </head>
      <body className="h-screen w-screen flex items-center justify-center"></body>
    </html>
  );
}
