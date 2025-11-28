export const runtime = 'edge'; // optional, for edge runtime

export async function GET() {
  const baseUrl = 'https://yourwebsite.com';

  // List of your static pages
  const pages = ['/', '/about', '/portfolio', '/contact'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>monthly</changefreq>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
