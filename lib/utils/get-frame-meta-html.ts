/**
 * @author https://github.com/seangeng/based-adventure/blob/3c342dc5613e9cd2bfbf893536cb9f8805f7f70f/src/lib/frameUtils.tsx
 */
const getFrameMetaHTML = ({
  title,
  imageUrl,
  postUrl,
  buttons,
}: {
  title: string;
  imageUrl: string;
  postUrl: string;
  buttons: string[];
}) => {
  const buttonsMetadata = buttons
    .map((button, i) => `<meta name="fc:frame:button:${i + 1}" content="${button}">`)
    .join('');

  /* return `<!DOCTYPE html>
    <html>
      <head>
          <title>${title}</title>
          <meta property="og:title" content="${title}">
          <meta property="og:image" content="${process.env.BASE_URL}/${imageUrl}">
          <meta name="fc:frame" content="vNext">
          <meta name="fc:frame:image" content="${process.env.BASE_URL}/${imageUrl}">
          <meta name="fc:frame:post_url" content="${process.env.BASE_URL}/${postUrl}">
          ${buttonsMetadata}
      </head>
    </html>`; */
  return `<!DOCTYPE html>
    <html>
      <head>
          <title>${title}</title>
          <meta property="og:title" content="${title}">
          <meta property="og:image" content="${imageUrl}">
          <meta name="fc:frame" content="vNext">
          <meta name="fc:frame:image" content="${imageUrl}">
          <meta name="fc:frame:post_url" content="${postUrl}">
          ${buttonsMetadata}
      </head>
    </html>`;
};

export default getFrameMetaHTML;
