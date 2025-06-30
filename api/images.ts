import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid url parameter' });
  }

  // Validate that the URL is from the allowed domain
  if (!url.startsWith('https://delta.trainatom.rpmtraining.com/')) {
    return res.status(400).json({ error: 'Invalid domain. Only delta.trainatom.rpmtraining.com is allowed' });
  }

  try {
    console.log(`Proxying image request: ${url}`);

    // Fetch the image from the original URL
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
        'Accept': 'image/*',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({
        error: `Failed to fetch image: ${response.statusText}`
      });
    }

    // Get the content type and buffer
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageBuffer = await response.arrayBuffer();

    // Set appropriate headers
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    res.setHeader('Content-Length', imageBuffer.byteLength);

    // Send the image
    res.status(200).send(Buffer.from(imageBuffer));

  } catch (error) {
    console.error('Error proxying image:', error);
    return res.status(500).json({ error: 'Failed to proxy image' });
  }
} 
