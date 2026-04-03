import { MetadataRoute } from 'next';
import { blogPosts } from './blog/data/posts';

const BASE_URL = 'https://www.capitalflax.com';

const cities = ['hyderabad', 'mumbai', 'delhi', 'bangalore', 'chennai', 'pune'];
const loanTypes = [
    'home-loan',
    'business-loan',
    'personal-loan',
    'gold-loan',
    'mortgage-loan',
    'professional-loan',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/professionals`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/apply`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        // Blog listing page
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // Programmatic city × loan type pages
    const cityLoanPages: MetadataRoute.Sitemap = cities.flatMap((city) =>
        loanTypes.map((type) => ({
            url: `${BASE_URL}/loans/${city}/${type}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            // Hyderabad pages get higher priority as the primary city
            priority: city === 'hyderabad' ? 0.85 : 0.75,
        }))
    );

    // Blog post pages
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishedDate),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...cityLoanPages, ...blogPages];
}
