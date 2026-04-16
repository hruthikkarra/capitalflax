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
  alternates: { canonical: 'https://capitalflax.in/blog' },
  openGraph: {
    type: 'website',
    title: 'Financial Insights Blog | CapitalFlax',
    description:
      'Expert financial articles for India\'s top professionals — home loans, business loans, CIBIL, and more.',
    url: 'https://capitalflax.in/blog',
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
  url: 'https://capitalflax.in/blog',
  description:
    'Expert articles on home loans, business loans, personal loans, and financial planning for professionals in India.',
  publisher: {
    '@type': 'Organization',
    name: 'CapitalFlax Financial Services',
    logo: 'https://capitalflax.in/logo.png',
  },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.metaDescription,
    url: `https://capitalflax.in/blog/${p.slug}`,
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
        {/* Premium Hero with Background */}
        <section className="blog-hero" style={{ 
            position: 'relative',
            padding: '7rem 1.5rem 6rem',
            textAlign: 'center',
            color: '#fff',
            background: '#0F172A',
            overflow: 'hidden'
        }}>
          {/* Background Image */}
          <div style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.35'
          }}></div>
          
          {/* Overlay */}
          <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.5) 100%)'
          }}></div>

          <div className="blog-hero-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
            <div className="blog-hero-badge" style={{ color: '#BFDBFE', border: '1px solid rgba(191, 219, 254, 0.3)', background: 'rgba(59, 130, 246, 0.1)', display: 'inline-flex', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '2rem' }}>
              <span className="blog-hero-dot" style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '50%', marginRight: '8px', marginTop: '3px' }} />
              FINANCIAL INSIGHTS
            </div>
            <h1 className="blog-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
              Expert Guides for <span style={{ color: '#60A5FA' }}>Smart Borrowers</span>
            </h1>
            <p className="blog-hero-subtitle" style={{ fontSize: '1.25rem', color: '#CBD5E1', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              In-depth articles on home loans, business loans, CIBIL scores, and financial planning —
              crafted specifically for India&#39;s top professionals.
            </p>
            <div className="blog-hero-stats" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div className="blog-stat">
                <span className="blog-stat-value" style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: '#60A5FA' }}>11</span>
                <span className="blog-stat-label" style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Expert Articles</span>
              </div>
              <div className="blog-stat-divider" style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div className="blog-stat">
                <span className="blog-stat-value" style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: '#60A5FA' }}>5</span>
                <span className="blog-stat-label" style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Categories</span>
              </div>
              <div className="blog-stat-divider" style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div className="blog-stat">
                <span className="blog-stat-value" style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: '#60A5FA' }}>10,000+</span>
                <span className="blog-stat-label" style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Professionals Helped</span>
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
