"use client";
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle, Clock, Landmark, Heart, Calculator, Building2, Check, Home as HomeIcon, Briefcase, User, CircleDollarSign, GraduationCap, Car, BookOpen } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSlider className="hero-slider--fixed-nav-offset" />

      <section className="stats-banner-wrapper">
        <div className="stats-banner">
          <div className="banner-item">
            <div className="banner-icon-wrapper">
              <CheckCircle className="banner-icon green-stroke" />
            </div>
            <div className="banner-text">
              <span className="banner-value">98%</span>
              <span className="banner-label">APPROVAL RATE</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="banner-item">
            <div className="banner-icon-wrapper">
              <Clock className="banner-icon orange-stroke" />
            </div>
            <div className="banner-text">
              <span className="banner-value">72 Hours</span>
              <span className="banner-label">AVG PROCESSING TIME</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="banner-item">
            <div className="banner-icon-wrapper">
              <Landmark className="banner-icon blue-stroke" />
            </div>
            <div className="banner-text">
              <span className="banner-value">15+</span>
              <span className="banner-label">BANK PARTNERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-section" style={{ overflow: 'hidden', width: '100vw', maxWidth: '100%' }}>
        <div className="partners-header">
          <span className="section-label">OUR PARTNERS</span>
          <h2 className="partners-title">
            Partnered with India's <span className="text-secondary-blue">Leading Banks and NBFCs</span>
          </h2>
          <p className="partners-subtitle">
            Access competitive rates from 15+ premier banking institutions
          </p>
        </div>



        <div className="rbi-badge-container">
          <div className="rbi-badge">
            <span className="rbi-dot"></span>
            <strong>RBI Registered</strong>
            <span className="rbi-divider">•</span>
            <span className="rbi-text-light">Trusted by 10,000+ Professionals</span>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE LOAN SOLUTIONS SECTION */}
      <section className="solutions-section" id="services">
        <div className="section-header">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">
            Comprehensive Loan <span className="text-primary-blue">Solutions</span>
          </h2>
          <p className="section-subtitle">
            From home loans to business financing, we offer a complete range of financial<br />
            products with preferential rates for professionals.
          </p>
        </div>

        <div className="solutions-grid">
          {/* Business Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="/bus.jpeg" alt="Business Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <Briefcase className="solution-icon orange-icon-alt" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Business Loans</h3>
              <p className="solution-category">FUEL YOUR GROWTH</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹1 Cr</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">14% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value orange-text-alt fw-700">48-Hour Approval</span>
                </div>
              </div>

              <p className="solution-desc">
                Working capital, equipment finance, and overdraft
                facilities. Minimal documentation required.
              </p>

              <Link href="/services/business-loans" className="prof-link orange-link-alt">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Home Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="/home.jpg.jpeg" alt="Home Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <HomeIcon className="solution-icon blue-icon" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Home Loans</h3>
              <p className="solution-category">YOUR DREAM HOME</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹20 Cr</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">7.3% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value blue-text fw-700">0% Processing Fee</span>
                </div>
              </div>

              <p className="solution-desc">
                Flexible documentation for private practice income.
                Balance transfer and top-up options available.
              </p>

              <Link href="/services/home-loans" className="prof-link blue-link">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Professional Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="/hero_professional.png" alt="Professional Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper indigo-bg-light" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <GraduationCap className="solution-icon indigo-icon" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Professional Loans</h3>
              <p className="solution-category">FOR YOUR PRACTICE</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹75 L</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">9.0% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value indigo-text fw-700">No Collateral</span>
                </div>
              </div>

              <p className="solution-desc">
                Equipment finance, practice setup, or expansion.
                Tailored for doctors, CAs, architects.
              </p>

              <Link href="/services/professional-loans" className="prof-link indigo-link">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Personal Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" alt="Personal Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <User className="solution-icon green-icon-alt" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Personal Loans</h3>
              <p className="solution-category">QUICK CASH ACCESS</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹50 L</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">10.5% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value green-text-alt fw-700">Same-Day Disbursal</span>
                </div>
              </div>

              <p className="solution-desc">
                No collateral required. Flexible EMI options. Use for
                any personal need or emergency.
              </p>

              <Link href="/services/personal-loans" className="prof-link green-link-alt">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Gold Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop" alt="Gold Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper gold-bg-light" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <CircleDollarSign className="solution-icon gold-icon" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Gold Loans</h3>
              <p className="solution-category">AGAINST YOUR GOLD</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹1 Cr</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">7.5% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value gold-text fw-700">Instant Approval</span>
                </div>
              </div>

              <p className="solution-desc">
                Secure loans against your gold jewelry. Flexible
                repayment tenure. Get funds in 30 minutes.
              </p>

              <Link href="/services/gold-loans" className="prof-link gold-link">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Mortgage Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" alt="Mortgage Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper purple-bg-light" style={{ position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <Landmark className="solution-icon purple-icon" />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Mortgage Loans</h3>
              <p className="solution-category">PROPERTY AS COLLATERAL</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹20 Cr</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">10% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value purple-text fw-700">Highest LTV</span>
                </div>
              </div>

              <p className="solution-desc">
                Loan against residential or commercial property.
                Use funds for any purpose. Competitive rates.
              </p>

              <Link href="/services/mortgage-loans" className="prof-link purple-link">
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Education Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Education Loans"
                className="card-img"
                loading="lazy"
              />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper" style={{ background: '#E0F2FE', position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <BookOpen className="solution-icon" style={{ color: '#0284C7' }} />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Education Loans</h3>
              <p className="solution-category">FUND YOUR FUTURE</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">Up to ₹1.5 Cr</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">8.5% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value fw-700" style={{ color: '#0284C7' }}>100% Financing</span>
                </div>
              </div>

              <p className="solution-desc">
                Study abroad or in India with flexible EMI options and high unsecured limits for top institutions.
              </p>

              <Link href="/services/education-loans" className="prof-link" style={{ color: '#0284C7' }}>
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>

          {/* Vehicle Loans Card */}
          <div className="solution-card" style={{ padding: 0 }}>
            <div className="card-image-wrapper">
              <img src="/car.jpg.jpeg" alt="Vehicle Loans" className="card-img" />
              <div className="card-img-overlay"></div>
              <div className="solution-icon-wrapper" style={{ background: '#FFE4E6', position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                <Car className="solution-icon" style={{ color: '#E11D48' }} />
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
              <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Vehicle Loans</h3>
              <p className="solution-category">DRIVE YOUR DREAM</p>

              <div className="solution-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value text-dark fw-700">100% On-Road</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Rate:</span>
                  <span className="detail-value text-dark fw-700">8.75% onwards</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Key Feature:</span>
                  <span className="detail-value fw-700" style={{ color: '#E11D48' }}>Pre-approved Offers</span>
                </div>
              </div>

              <p className="solution-desc">
                Get the best rates for new or used cars with instant approval and minimal zero-downpayment options.
              </p>

              <Link href="/services/vehicle-loans" className="prof-link" style={{ color: '#E11D48' }}>
                LEARN MORE <ArrowRight className="link-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="section-footer-alt">
          <Link href="/services" className="btn-view-all">
            VIEW ALL SERVICES <ArrowRight className="icon-sm" />
          </Link>
        </div>

        {/* QUICK COMPARISON TABLE */}
        <div style={{ width: '100%', maxWidth: '960px', margin: '4rem auto 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', margin: 0 }}>
              Quick <span style={{ color: '#3B82F6' }}>Comparison</span>
            </h2>
            <p style={{ color: '#64748B', marginTop: '0.75rem', fontSize: '1rem' }}>Compare all our loan products at a glance</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #F1F5F9' }}>
                  {['LOAN TYPE', 'LOAN AMOUNT', 'INTEREST RATE', 'MAX TENURE', 'KEY FEATURE'].map(h => (
                    <th key={h} style={{ padding: '1rem 1.25rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', color: '#94A3B8', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Business Loans', amount: 'Up to ₹1 Cr', rate: '14% onwards', tenure: 'Up to 7 years', feature: '48-Hour Approval', featureColor: '#F59E0B' },
                  { type: 'Home Loans', amount: 'Up to ₹20 Cr', rate: '7.3% onwards', tenure: 'Up to 30 years', feature: '0% Processing Fee', featureColor: '#3B82F6' },
                  { type: 'Professional Loans', amount: 'Up to ₹75 L', rate: '9.0% onwards', tenure: 'Up to 10 years', feature: 'No Collateral', featureColor: '#6366F1' },
                  { type: 'Personal Loans', amount: 'Up to ₹50 L', rate: '10.5% onwards', tenure: 'Up to 5 years', feature: 'Same-Day Disbursal', featureColor: '#10B981' },
                  { type: 'Gold Loans', amount: 'Up to ₹1 Cr', rate: '7.5% onwards', tenure: 'Up to 3 years', feature: 'Instant Approval', featureColor: '#F59E0B' },
                  { type: 'Mortgage Loans', amount: 'Up to ₹20 Cr', rate: '10% onwards', tenure: 'Up to 20 years', feature: 'Highest LTV', featureColor: '#8B5CF6' },
                  { type: 'Education Loans', amount: 'Up to ₹1.5 Cr', rate: '8.5% onwards', tenure: 'Up to 15 years', feature: '100% Financing', featureColor: '#0284C7' },
                  { type: 'Vehicle Loans', amount: '100% On-Road', rate: '8.75% onwards', tenure: 'Up to 7 years', feature: 'Pre-approved Offers', featureColor: '#E11D48' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #F8FAFC', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#F8FAFC'}
                    onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'}>
                    <td style={{ padding: '1.1rem 1.25rem', fontWeight: 700, color: '#0F172A' }}>{row.type}</td>
                    <td style={{ padding: '1.1rem 1.25rem', color: '#475569' }}>{row.amount}</td>
                    <td style={{ padding: '1.1rem 1.25rem', color: '#475569' }}>{row.rate}</td>
                    <td style={{ padding: '1.1rem 1.25rem', color: '#475569' }}>{row.tenure}</td>
                    <td style={{ padding: '1.1rem 1.25rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: row.featureColor, fontWeight: 700, fontSize: '0.88rem' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: row.featureColor, display: 'inline-block', flexShrink: 0 }} />
                        {row.feature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS SECTION */}
      <section className="professionals-section" id="professionals">
        <div className="section-header">
          <span className="section-label">TAILORED FOR YOUR PROFESSION</span>
          <h2 className="section-title">
            Built for <span className="text-primary-blue">Professionals</span>
          </h2>
          <p className="section-subtitle">
            We understand your unique income patterns and professional requirements. Get<br />
            loans designed specifically for your profession.
          </p>
        </div>

        <div className="cards-grid">
          {/* Doctors Card */}
          <div className="prof-card">
            <div className="icon-badge red-badge">
              <Heart className="prof-icon red-icon" />
            </div>
            <h3 className="prof-title">Doctors</h3>
            <p className="prof-category">HEALTHCARE PROFESSIONALS</p>
            <ul className="prof-features">
              <li>
                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                <span>Flexible documentation for private practice income</span>
              </li>
              <li>
                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                <span>Higher loan amounts based on specialization</span>
              </li>
              <li>
                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                <span>Fast-track approval for medical professionals</span>
              </li>
              <li>
                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                <span>Special rates for MBBS, MD, MS qualified</span>
              </li>
            </ul>
            <Link href="#apply" className="prof-link red-link">
              LEARN MORE <ArrowRight className="link-icon" />
            </Link>
          </div>

          {/* CAs Card */}
          <div className="prof-card">
            <div className="icon-badge blue-badge">
              <Calculator className="prof-icon blue-icon" />
            </div>
            <h3 className="prof-title">Chartered Accountants</h3>
            <p className="prof-category">FINANCIAL EXPERTS</p>
            <ul className="prof-features">
              <li>
                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                <span>Loan assessment based on firm revenue</span>
              </li>
              <li>
                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                <span>Minimal documentation for established CAs</span>
              </li>
              <li>
                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                <span>Overdraft facilities for working capital</span>
              </li>
              <li>
                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                <span>Tax benefits consultation included</span>
              </li>
            </ul>
            <Link href="#apply" className="prof-link blue-link">
              LEARN MORE <ArrowRight className="link-icon" />
            </Link>
          </div>

          {/* Architects Card */}
          <div className="prof-card">
            <div className="icon-badge green-badge">
              <Building2 className="prof-icon green-icon" />
            </div>
            <h3 className="prof-title">Architects</h3>
            <p className="prof-category">DESIGN PROFESSIONALS</p>
            <ul className="prof-features">
              <li>
                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                <span>Project-based income assessment accepted</span>
              </li>
              <li>
                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                <span>Collateral-free loans up to ₹50L</span>
              </li>
              <li>
                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                <span>Equipment finance options available</span>
              </li>
              <li>
                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                <span>Flexible EMI during project gaps</span>
              </li>
            </ul>
            <Link href="#apply" className="prof-link green-link">
              LEARN MORE <ArrowRight className="link-icon" />
            </Link>
          </div>
        </div>

        <div className="section-footer">
          <p>Don't see your profession listed? We serve all high-income professionals.</p>
          <Link href="#apply" className="footer-link">
            Apply Now <ArrowRight className="link-icon" />
          </Link>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <ProcessSection />

      {/* SUCCESS STORIES / TESTIMONIALS */}
      <Testimonials />
    </>
  );
}
