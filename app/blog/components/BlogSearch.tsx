'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost, BlogCategory, allCategories } from '../data/posts';

interface Props {
  posts: BlogPost[];
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const categoryColors: Record<BlogCategory, { bg: string; text: string }> = {
  'Home Loans':        { bg: '#EFF6FF', text: '#2563EB' },
  'Business Loans':   { bg: '#FFFBEB', text: '#D97706' },
  'Personal Loans':   { bg: '#F0FDF4', text: '#16A34A' },
  'Professional Tips':{ bg: '#FAF5FF', text: '#7C3AED' },
  'Financial Planning':{ bg: '#FFF1F2', text: '#E11D48' },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const color = categoryColors[post.category];
  return (
    <article className={featured ? 'blog-card blog-card-featured' : 'blog-card'}>
      <div className="blog-card-inner">
        <div className="blog-card-top">
          <span className="blog-category-badge" style={{ background: color.bg, color: color.text }}>
            {post.category}
          </span>
          <span className="blog-read-time">
            <ClockIcon /> {post.readTime} min read
          </span>
        </div>

        <h2 className={featured ? 'blog-card-title blog-card-title-featured' : 'blog-card-title'}>
          {post.title}
        </h2>

        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="blog-tag-chip">{tag}</span>
          ))}
        </div>

        <div className="blog-card-footer">
          <span className="blog-card-date">
            <CalendarIcon /> {formatDate(post.publishedDate)}
          </span>
          <Link href={`/blog/${post.slug}`} className="blog-read-link">
            Read Article <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogSearch({ posts }: Props) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory, posts]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Search */}
      <div className="blog-search-bar">
        <span className="blog-search-icon"><SearchIcon /></span>
        <input
          type="text"
          placeholder="Search articles, topics, or keywords…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="blog-search-input"
          aria-label="Search blog posts"
        />
      </div>

      {/* Category filters */}
      <div className="blog-category-pills">
        {(['All', ...allCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`blog-pill ${activeCategory === cat ? 'blog-pill-active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="blog-results-count">
        {filtered.length === 0
          ? 'No articles found. Try a different search or category.'
          : `${filtered.length} article${filtered.length === 1 ? '' : 's'} found`}
      </p>

      {/* Featured post */}
      {featured && <PostCard post={featured} featured />}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="blog-grid">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
