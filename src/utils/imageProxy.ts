/**
 * Transform external image URLs to use our serverless proxy in production
 * to avoid CORS issues. In development, use the original URL (Vite proxy handles it).
 */
export function getProxiedImageUrl(originalUrl: string | null | undefined): string {
  if (!originalUrl) return '';

  const isDevelopment = import.meta.env.DEV;

  // In development, use original URL (Vite proxy handles CORS)
  if (isDevelopment) {
    return originalUrl;
  }

  // In production, check if it's a trainatom image that needs proxying
  if (originalUrl.startsWith('https://delta.trainatom.rpmtraining.com/')) {
    const baseUrl = import.meta.env.PROD
      ? 'https://bauman-lift.vercel.app'
      : window.location.origin;

    return `${baseUrl}/api/images?url=${encodeURIComponent(originalUrl)}`;
  }

  // For other URLs, return as-is
  return originalUrl;
}

/**
 * Build a complete image URL from base_url and relative path, then proxy if needed
 */
export function buildAndProxyImageUrl(baseUrl: string, relativePath: string): string {
  const fullUrl = `${baseUrl}${relativePath}`;
  return getProxiedImageUrl(fullUrl);
} 
