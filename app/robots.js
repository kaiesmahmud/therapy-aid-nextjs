export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        Disallow: '/img/',
      },
      sitemap: 'https://therapyaid.com.au/sitemap.xml',
    }
  }