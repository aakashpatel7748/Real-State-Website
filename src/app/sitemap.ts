import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plotline-erp.vercel.app';
  const now = new Date();

  const routes = [
    '',
    '/modules/pre-sales',
    '/modules/inventory-and-map',
    '/modules/post-sales',
    '/modules/accounting',
    '/modules/land-and-construction',
    '/pricing',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
