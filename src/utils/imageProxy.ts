/**
 * Transform external image URLs to use our serverless proxy in production
 * or Vite proxy in development to avoid CORS issues.
 */
export function getProxiedImageUrl(originalUrl: string | null | undefined): string {
  if (!originalUrl) return '';

  const isDevelopment = import.meta.env.DEV;

  // Check if it's a trainatom image that needs proxying
  if (originalUrl.startsWith('https://delta.trainatom.rpmtraining.com/')) {
    if (isDevelopment) {
      return originalUrl.replace('https://delta.trainatom.rpmtraining.com', '/delta.trainatom.rpmtraining.com');
    } else {
      const baseUrl = 'https://bauman-lift.vercel.app';
      return `${baseUrl}/api/images?url=${encodeURIComponent(originalUrl)}`;
    }
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
