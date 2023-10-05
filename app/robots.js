export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        Disallow: '/img/*',
      },
    //   sitemap: 'https://acme.com/sitemap.xml',
    }
  }