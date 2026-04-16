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
        sitemap: 'https://capitalflax.in/sitemap.xml',
        host: 'https://capitalflax.in',
    };
}
