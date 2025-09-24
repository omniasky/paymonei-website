import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://paymonei.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/console/*', // Protected console area
          '/api/*', // API endpoints
          '/admin/*', // Admin area if any
          '/_next/*', // Next.js internals
          '/private/*', // Private files
        ],
      },
      // Specific rules for AI agents/crawlers
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/pricing',
          '/agent-protocol',
          '/developers',
          '/enterprise',
          '/about',
          '/supports/*',
        ],
        disallow: [
          '/console/*',
          '/api/*',
          '/auth/*',
        ],
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by Claude)
        allow: [
          '/',
          '/pricing',
          '/agent-protocol',
          '/developers',
          '/enterprise',
          '/about',
          '/supports/*',
        ],
        disallow: [
          '/console/*',
          '/api/*',
          '/auth/*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}