"use client";
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, Briefcase, User, CircleDollarSign, Landmark, GraduationCap } from 'lucide-react';
import HomeLoanDetail from '../components/HomeLoanDetail';
import BusinessLoanDetail from '../components/BusinessLoanDetail';
import PersonalLoanDetail from '../components/PersonalLoanDetail';
import EligibilityCriteria from '../components/EligibilityCriteria';
import ServicesCTA from '../components/ServicesCTA';

const loans = [
    {
        icon: HomeIcon,
        title: 'Home Loans',
        category: 'YOUR DREAM HOME',
        amount: 'Up to ₹20 Cr',
        rate: '7.3% onwards',
        feature: '0% Processing Fee',
        featureClass: 'blue-text',
        desc: 'Flexible documentation for private practice income. Balance transfer and top-up options available.',
        linkClass: 'blue-link',
        wrapperClass: 'solution-icon-wrapper',
        iconClass: 'solution-icon blue-icon',
    },
    {
        icon: Briefcase,
        title: 'Business Loans',
        category: 'FUEL YOUR GROWTH',
        amount: 'Up to ₹1 Cr',
        rate: '14% onwards',
        feature: '48-Hour Approval',
        featureClass: 'orange-text-alt',
        desc: 'Working capital, equipment finance, and overdraft facilities. Minimal documentation required.',
        linkClass: 'orange-link-alt',
        wrapperClass: 'solution-icon-wrapper',
        iconClass: 'solution-icon orange-icon-alt',
    },
    {
        icon: User,
        title: 'Personal Loans',
        category: 'QUICK CASH ACCESS',
        amount: 'Up to ₹50 L',
        rate: '10.5% onwards',
        feature: 'Same-Day Disbursal',
        featureClass: 'green-text-alt',
        desc: 'No collateral required. Flexible EMI options. Use for any personal need or emergency.',
        linkClass: 'green-link-alt',
        wrapperClass: 'solution-icon-wrapper',
        iconClass: 'solution-icon green-icon-alt',
    },
    {
        icon: CircleDollarSign,
        title: 'Gold Loans',
        category: 'AGAINST YOUR GOLD',
        amount: 'Up to ₹1 Cr',
        rate: '7.5% onwards',
        feature: 'Instant Approval',
        featureClass: 'gold-text',
        desc: 'Secure loans against your gold jewelry. Flexible repayment tenure. Get funds in 30 minutes.',
        linkClass: 'gold-link',
        wrapperClass: 'solution-icon-wrapper gold-bg-light',
        iconClass: 'solution-icon gold-icon',
    },
    {
        icon: Landmark,
        title: 'Mortgage Loans',
        category: 'PROPERTY AS COLLATERAL',
        amount: 'Up to ₹20 Cr',
        rate: '10% onwards',
        feature: 'Highest LTV',
        featureClass: 'purple-text',
        desc: 'Loan against residential or commercial property. Use funds for any purpose. Competitive rates.',
        linkClass: 'purple-link',
        wrapperClass: 'solution-icon-wrapper purple-bg-light',
        iconClass: 'solution-icon purple-icon',
    },
    {
        icon: GraduationCap,
        title: 'Professional Loans',
        category: 'FOR YOUR PRACTICE',
        amount: 'Up to ₹75 L',
        rate: '9.0% onwards',
        feature: 'No Collateral',
        featureClass: 'indigo-text',
        desc: 'Equipment finance, practice setup, or expansion. Tailored for doctors, CAs, architects.',
        linkClass: 'indigo-link',
        wrapperClass: 'solution-icon-wrapper indigo-bg-light',
        iconClass: 'solution-icon indigo-icon',
    },
];

const comparison = [
    { type: 'Home Loans', amount: 'Up to ₹20 Cr', rate: '7.3% onwards', tenure: 'Up to 30 years', feature: '0% Processing Fee', featureColor: '#3B82F6' },
    { type: 'Business Loans', amount: 'Up to ₹1 Cr', rate: '14% onwards', tenure: 'Up to 7 years', feature: '48-Hour Approval', featureColor: '#F59E0B' },
    { type: 'Personal Loans', amount: 'Up to ₹50 L', rate: '10.5% onwards', tenure: 'Up to 5 years', feature: 'Same-Day Disbursal', featureColor: '#10B981' },
    { type: 'Gold Loans', amount: 'Up to ₹1 Cr', rate: '7.5% onwards', tenure: 'Up to 3 years', feature: 'Instant Approval', featureColor: '#F59E0B' },
    { type: 'Mortgage Loans', amount: 'Up to ₹20 Cr', rate: '10% onwards', tenure: 'Up to 20 years', feature: 'Highest LTV', featureColor: '#8B5CF6' },
    { type: 'Professional Loans', amount: 'Up to ₹75 L', rate: '9.0% onwards', tenure: 'Up to 10 years', feature: 'No Collateral', featureColor: '#6366F1' },
];

export default function ServicesPage() {
    return (
        <div style={{ paddingTop: '5rem' }}>

            {/* Hero Header */}
            <section style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', padding: '5rem 1rem 4rem', textAlign: 'center' }}>
                <span className="section-label">OUR SERVICES</span>
                <h1 className="section-title" style={{ marginTop: '0.75rem' }}>
                    Comprehensive Loan <span className="text-primary-blue">Solutions</span>
                </h1>
                <p className="section-subtitle">
                    Tailored financial products for every professional need. Compare, choose, and apply<br />
                    for the loan that fits your goals.
                </p>
            </section>

            {/* Loan Cards Grid */}
            <section className="solutions-section" style={{ background: '#fff' }}>
                <div className="solutions-grid">
                    {loans.map((loan) => {
                        const Icon = loan.icon;
                        return (
                            <div key={loan.title} className="solution-card">
                                <div className={loan.wrapperClass}>
                                    <Icon className={loan.iconClass} />
                                </div>
                                <h3 className="solution-title">{loan.title}</h3>
                                <p className="solution-category">{loan.category}</p>

                                <div className="solution-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Amount:</span>
                                        <span className="detail-value text-dark fw-700">{loan.amount}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Rate:</span>
                                        <span className="detail-value text-dark fw-700">{loan.rate}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Key Feature:</span>
                                        <span className={`detail-value ${loan.featureClass} fw-700`}>{loan.feature}</span>
                                    </div>
                                </div>

                                <p className="solution-desc">{loan.desc}</p>

                                <Link href="#" className={`prof-link ${loan.linkClass}`}>
                                    LEARN MORE <ArrowRight className="link-icon" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Quick Comparison Table */}
            <section style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', margin: 0 }}>
                            Quick <span style={{ color: '#3B82F6' }}>Comparison</span>
                        </h2>
                        <p style={{ color: '#64748B', marginTop: '0.75rem', fontSize: '1rem' }}>Compare all our loan products at a glance</p>
                    </div>

                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 24px -4px rgba(0,0,0,0.06)' }}>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #F1F5F9' }}>
                                        {['LOAN TYPE', 'LOAN AMOUNT', 'INTEREST RATE', 'MAX TENURE', 'KEY FEATURE'].map(h => (
                                            <th key={h} style={{ padding: '1.1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.2px', color: '#94A3B8', textTransform: 'uppercase' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, i) => (
                                        <tr key={i}
                                            style={{ borderBottom: i < comparison.length - 1 ? '1px solid #F8FAFC' : 'none', transition: 'background 0.2s', cursor: 'pointer' }}
                                            onMouseEnter={e => (e.currentTarget as HTMLTableRowElement).style.background = '#F8FAFC'}
                                            onMouseLeave={e => (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'}>
                                            <td style={{ padding: '1.1rem 1.5rem', fontWeight: 700, color: '#0F172A' }}>{row.type}</td>
                                            <td style={{ padding: '1.1rem 1.5rem', color: '#475569' }}>{row.amount}</td>
                                            <td style={{ padding: '1.1rem 1.5rem', color: '#475569' }}>{row.rate}</td>
                                            <td style={{ padding: '1.1rem 1.5rem', color: '#475569' }}>{row.tenure}</td>
                                            <td style={{ padding: '1.1rem 1.5rem' }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: row.featureColor, fontWeight: 700, fontSize: '0.875rem' }}>
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
                </div>
            </section>

            {/* HOME LOANS DETAIL WITH EMI CALCULATOR */}
            <HomeLoanDetail />

            {/* BUSINESS LOANS DETAIL WITH EMI CALCULATOR */}
            <BusinessLoanDetail />

            {/* PERSONAL LOANS DETAIL WITH EMI CALCULATOR */}
            <PersonalLoanDetail />

            {/* ELIGIBILITY CRITERIA ACCORDION */}
            <EligibilityCriteria />

            {/* SERVICES CTA */}
            <ServicesCTA />

        </div>
    );
}
