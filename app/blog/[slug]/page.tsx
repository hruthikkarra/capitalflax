import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getPostBySlug, getRelatedPosts } from '../data/posts';
import ScrollProgress from '../components/ScrollProgress';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `https://www.capitalflax.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.capitalflax.com/blog/${post.slug}`,
      siteName: 'CapitalFlax',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Home Loans':         { bg: '#EFF6FF', text: '#2563EB' },
  'Business Loans':    { bg: '#FFFBEB', text: '#D97706' },
  'Personal Loans':    { bg: '#F0FDF4', text: '#16A34A' },
  'Professional Tips': { bg: '#FAF5FF', text: '#7C3AED' },
  'Financial Planning':{ bg: '#FFF1F2', text: '#E11D48' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function extractH2s(html: string): { id: string; text: string }[] {
  const matches = [...html.matchAll(/<h2>(.*?)<\/h2>/g)];
  return matches.map((m) => ({
    text: m[1],
    id: m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  }));
}

function addIdsToH2s(html: string): string {
  return html.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h2 id="${id}">${text}</h2>`;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 2);
  const toc = extractH2s(post.content);
  const contentWithIds = addIdsToH2s(post.content);
  const color = categoryColors[post.category];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'CapitalFlax Financial Services',
      logo: 'https://www.capitalflax.com/logo.png',
    },
    datePublished: post.publishedDate,
    url: `https://www.capitalflax.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.capitalflax.com/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ScrollProgress />

      <main className="blog-post-page">
        {/* Breadcrumb */}
        <div className="blog-post-breadcrumb">
          <div className="blog-post-breadcrumb-inner">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{post.category}</span>
          </div>
        </div>

        {/* Post Hero */}
        <header className="blog-post-hero">
          <div className="blog-post-hero-inner">
            <span
              className="blog-category-badge"
              style={{ background: color.bg, color: color.text }}
            >
              {post.category}
            </span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {post.author}
              </span>
              <span className="blog-post-meta-dot" />
              <span className="blog-post-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {formatDate(post.publishedDate)}
              </span>
              <span className="blog-post-meta-dot" />
              <span className="blog-post-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {post.readTime} min read
              </span>
            </div>
          </div>
        </header>

        {/* Body: TOC sidebar + Article content */}
        <div className="blog-post-body">
          <div className="blog-post-layout">

            {/* Table of Contents Sidebar */}
            {toc.length > 0 && (
              <aside className="blog-toc">
                <div className="blog-toc-inner">
                  <p className="blog-toc-heading">TABLE OF CONTENTS</p>
                  <nav>
                    <ul className="blog-toc-list">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="blog-toc-link">{item.text}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            )}

            {/* Article */}
            <article className="blog-article">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* Tags */}
              <div className="blog-post-tags">
                <span className="blog-post-tags-label">Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag-chip">{tag}</span>
                ))}
              </div>

              {/* CTA Banner */}
              <div className="blog-inline-cta">
                <div className="blog-inline-cta-text">
                  <h3>Ready to Apply for a Loan?</h3>
                  <p>Get a free consultation and 72-hour approval. Zero processing fees for professionals.</p>
                </div>
                <div className="blog-inline-cta-buttons">
                  <Link href="/apply" className="btn btn-primary">Apply Now →</Link>
                  <Link href="/services" className="btn btn-outline">View Services</Link>
                </div>
              </div>
            </article>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="blog-related">
              <div className="blog-related-inner">
                <h2 className="blog-related-title">Related Articles</h2>
                <div className="blog-related-grid">
                  {related.map((rp) => {
                    const rc = categoryColors[rp.category];
                    return (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`} className="blog-related-card">
                        <span
                          className="blog-category-badge"
                          style={{ background: rc.bg, color: rc.text }}
                        >
                          {rp.category}
                        </span>
                        <h3 className="blog-related-card-title">{rp.title}</h3>
                        <p className="blog-related-card-excerpt">{rp.excerpt}</p>
                        <span className="blog-read-link" style={{ marginTop: '1rem' }}>
                          Read Article →
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="blog-back-link-wrap">
            <Link href="/blog" className="blog-back-link">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
