import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/apply', '/api/'],
            },
        ],
        sitemap: 'https://www.capitalflax.com/sitemap.xml',
        host: 'https://www.capitalflax.com',
    };
}
