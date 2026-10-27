/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: (process.env.SITE_URL || 'https://dwebcreation.com').replace(/\/+$/, ''),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // /portfolio reste hors sitemap tant qu'aucune réalisation n'est publiée (page en noindex)
  exclude: ['/admin/*', '/api/*', '/opengraph-image', '/icon.svg', '/portfolio'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
  },
}
