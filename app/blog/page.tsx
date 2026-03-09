import type { Metadata } from 'next';
import { blogPosts } from './data/posts';
import BlogSearch from './components/BlogSearch';

export const metadata: Metadata = {
  title: 'Financial Insights Blog – Loans, Tips & Guides for Professionals | CapitalFlax',
  description:
    'Expert articles on home loans, business loans, personal loans, CIBIL scores and financial planning for doctors, CAs, and architects in India.',
  keywords: [
    'financial blog india',
    'home loan guide',
    'business loan tips',
    'CIBIL score improvement',
    'loan for professionals india',
    'personal loan eligibility',
  ],
  alternates: { canonical: 'https://www.capitalflax.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Financial Insights Blog | CapitalFlax',
    description:
      'Expert financial articles for India\'s top professionals — home loans, business loans, CIBIL, and more.',
    url: 'https://www.capitalflax.com/blog',
    siteName: 'CapitalFlax',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Insights Blog | CapitalFlax',
    description: 'Expert loan & finance tips for doctors, CAs, and architects in India.',
  },
};

const blogListingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'CapitalFlax Financial Insights Blog',
  url: 'https://www.capitalflax.com/blog',
  description:
    'Expert articles on home loans, business loans, personal loans, and financial planning for professionals in India.',
  publisher: {
    '@type': 'Organization',
    name: 'CapitalFlax Financial Services',
    logo: 'https://www.capitalflax.com/logo.png',
  },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.metaDescription,
    url: `https://www.capitalflax.com/blog/${p.slug}`,
    datePublished: p.publishedDate,
    author: { '@type': 'Organization', name: p.author },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      <main className="blog-page">
        {/* Hero */}
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <div className="blog-hero-badge">
              <span className="blog-hero-dot" />
              FINANCIAL INSIGHTS
            </div>
            <h1 className="blog-hero-title">
              Expert Guides for <span className="text-primary-blue">Smart Borrowers</span>
            </h1>
            <p className="blog-hero-subtitle">
              In-depth articles on home loans, business loans, CIBIL scores, and financial planning —
              crafted specifically for India's top professionals.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-stat">
                <span className="blog-stat-value">8</span>
                <span className="blog-stat-label">Expert Articles</span>
              </div>
              <div className="blog-stat-divider" />
              <div className="blog-stat">
                <span className="blog-stat-value">5</span>
                <span className="blog-stat-label">Categories</span>
              </div>
              <div className="blog-stat-divider" />
              <div className="blog-stat">
                <span className="blog-stat-value">10,000+</span>
                <span className="blog-stat-label">Professionals Helped</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search + Listing (Client Component) */}
        <section className="blog-content-section">
          <div className="blog-content-inner">
            <BlogSearch posts={blogPosts} />
          </div>
        </section>

        {/* Newsletter / CTA Banner */}
        <section className="blog-cta-section">
          <div className="blog-cta-inner">
            <div className="blog-cta-text">
              <h2 className="blog-cta-title">Ready to Get Your Loan Approved?</h2>
              <p className="blog-cta-subtitle">
                Join 10,000+ professionals who trust CapitalFlax for the fastest, lowest-cost loan experience in India.
              </p>
            </div>
            <div className="blog-cta-buttons">
              <a href="/apply" className="btn btn-primary">
                Apply Now — Free Consultation
              </a>
              <a href="/services" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
