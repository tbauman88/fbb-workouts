import { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, validateMethod, createTimeoutController, createErrorResponse, logger } from '../_utils';
import { ALLOWED_CONTENT_TYPES } from '../const';

const ALLOWED_DOMAIN = 'https://delta.trainatom.rpmtraining.com/';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const REQUEST_TIMEOUT = 15000; // 15 seconds
const CACHE_MAX_AGE = 86400; // 1 day

function validateImageUrl(url: unknown): { isValid: boolean; url?: string; error?: string } {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: 'Missing or invalid url parameter' };
  }

  // Validate that the URL is from the allowed domain
  if (!url.startsWith(ALLOWED_DOMAIN)) {
    return {
      isValid: false,
      error: `Invalid domain. Only ${ALLOWED_DOMAIN} is allowed`
    };
  }

  // Basic URL validation
  try {
    const parsedUrl = new URL(url);

    // Additional security checks
    if (parsedUrl.protocol !== 'https:') {
      return { isValid: false, error: 'Only HTTPS URLs are allowed' };
    }

    // Check for suspicious patterns
    if (url.includes('..') || url.includes('%2e%2e')) {
      return { isValid: false, error: 'Invalid URL pattern detected' };
    }

    return { isValid: true, url };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

function validateContentType(contentType: string | null): boolean {
  if (!contentType) return false;

  // Extract the main content type (ignore charset etc.)
  const mainType = contentType.split(';')[0].trim().toLowerCase();
  return ALLOWED_CONTENT_TYPES.includes(mainType);
}

function setImageHeaders(res: VercelResponse, contentType: string, contentLength?: number) {
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', `public, max-age=${CACHE_MAX_AGE}`);

  if (contentLength) {
    res.setHeader('Content-Length', contentLength);
  }

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res, ['GET', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const methodValidation = validateMethod(req.method, ['GET']);
  if (!methodValidation.isValid) {
    return res.status(405).json(methodValidation.error);
  }

  // Validate URL parameter
  const urlValidation = validateImageUrl(req.query.url);
  if (!urlValidation.isValid) {
    return res.status(400).json({ error: urlValidation.error });
  }

  const imageUrl = urlValidation.url!;

  try {
    logger.info(`Proxying image request`, { imageUrl });

    const { controller, cleanup } = createTimeoutController(REQUEST_TIMEOUT);

    // Fetch the image with security headers
    const response = await fetch(imageUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BaumanLift-ImageProxy/1.0)',
        'Accept': 'image/*',
        'Accept-Encoding': 'gzip, deflate',
      },
      signal: controller.signal,
    });

    cleanup();

    if (!response.ok) {
      logger.error(`Failed to fetch image`, null, { status: response.status, statusText: response.statusText, imageUrl });
      return res.status(response.status).json(createErrorResponse(
        `Failed to fetch image: ${response.statusText}`,
        'IMAGE_FETCH_FAILED',
        { url: imageUrl }
      ));
    }

    // Validate content type
    const contentType = response.headers.get('content-type');
    if (!validateContentType(contentType)) {
      logger.error(`Invalid content type`, null, { contentType, imageUrl });
      return res.status(400).json(createErrorResponse(
        'Invalid content type. Only image files are allowed.',
        'INVALID_CONTENT_TYPE',
        { received_type: contentType }
      ));
    }

    // Check content length
    const contentLengthHeader = response.headers.get('content-length');
    const contentLength = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;

    if (contentLength > MAX_FILE_SIZE) {
      logger.error(`File too large`, null, { contentLength, maxSize: MAX_FILE_SIZE, imageUrl });
      return res.status(413).json(createErrorResponse(
        `File too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB`,
        'FILE_TOO_LARGE',
        { size: contentLength }
      ));
    }

    // Set response headers
    setImageHeaders(res, contentType!, contentLength || undefined);

    // Stream the response for better memory usage
    if (response.body) {
      const reader = response.body.getReader();
      let totalBytes = 0;

      try {
        while (true) {
          const { done, value } = await reader.read();

          if (done) break;

          totalBytes += value.length;

          // Additional size check during streaming
          if (totalBytes > MAX_FILE_SIZE) {
            reader.cancel();
            return res.status(413).json(createErrorResponse(
              'File too large during transfer',
              'FILE_TOO_LARGE_STREAM',
              { bytes_received: totalBytes }
            ));
          }

          res.write(value);
        }

        res.end();
        logger.success(`Image proxied successfully`, { totalBytes, imageUrl });
      } catch (streamError) {
        logger.error('Error during streaming', streamError, { imageUrl });
        if (!res.headersSent) {
          return res.status(500).json(createErrorResponse('Failed to stream image', 'STREAM_ERROR'));
        }
      }
    } else {
      return res.status(500).json(createErrorResponse('No response body received', 'NO_RESPONSE_BODY'));
    }

  } catch (error) {
    logger.error('Error proxying image', error, { imageUrl });

    if ((error as Error).name === 'AbortError') {
      return res.status(408).json(createErrorResponse(
        'Request timeout - Image took too long to load',
        'REQUEST_TIMEOUT',
        { url: imageUrl }
      ));
    }

    return res.status(500).json(createErrorResponse(
      'Failed to proxy image',
      'PROXY_ERROR',
      { message: (error as Error).message, url: imageUrl }
    ));
  }
} 
