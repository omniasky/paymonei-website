import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paymonei.com';
  const currentDate = new Date().toISOString();

  return [
    // Main
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },

    // Platform — Payments
    { url: `${baseUrl}/payments/links`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/payments/checkout`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

    // Platform — Billing
    { url: `${baseUrl}/billing/invoicing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/billing/subscription`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

    // Platform — Business Tools
    { url: `${baseUrl}/ai-workspaces`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },

    // Docs
    { url: `${baseUrl}/docs`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },

    // Company
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },

    // Legal
    { url: `${baseUrl}/legal/terms-of-service`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terms-of-service/indonesia`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/cookie-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.2 },
  ];
}