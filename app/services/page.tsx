"use client";
import Link from 'next/link';
import { ArrowRight, Home as HomeIcon, Briefcase, User, CircleDollarSign, Landmark, GraduationCap, Car, BookOpen } from 'lucide-react';
import HomeLoanDetail from '../components/HomeLoanDetail';
import BusinessLoanDetail from '../components/BusinessLoanDetail';
import PersonalLoanDetail from '../components/PersonalLoanDetail';
import EligibilityCriteria from '../components/EligibilityCriteria';
import ServicesCTA from '../components/ServicesCTA';
import FAQSection from '../components/FAQSection';

const loans = [
    {
        icon: HomeIcon,
        title: 'Home Loans',
        href: '/services/home-loans',
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
        href: '/services/business-loans',
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
        href: '/services/personal-loans',
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
        href: '/services/gold-loans',
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
        href: '/services/mortgage-loans',
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
        href: '/services/professional-loans',
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
    {
        icon: BookOpen,
        title: 'Education Loans',
        href: '/services/education-loans',
        category: 'FUND YOUR FUTURE',
        amount: 'Up to ₹1.5 Cr',
        rate: '8.5% onwards',
        feature: '100% Financing',
        featureClass: '',
        desc: 'Study abroad or in India with flexible EMI options and high unsecured limits for top institutions.',
        linkClass: '',
        wrapperClass: 'solution-icon-wrapper',
        iconClass: 'solution-icon',
        linkStyle: { color: '#0284C7' },
        wrapperStyle: { background: '#E0F2FE' },
        iconStyle: { color: '#0284C7' },
        featureStyle: { color: '#0284C7' }
    },
    {
        icon: Car,
        title: 'Vehicle Loans',
        href: '/services/vehicle-loans',
        category: 'DRIVE YOUR DREAM',
        amount: '100% On-Road',
        rate: '8.75% onwards',
        feature: 'Pre-approved Offers',
        featureClass: '',
        desc: 'Get the best rates for new or used cars with instant approval and minimal zero-downpayment options.',
        linkClass: '',
        wrapperClass: 'solution-icon-wrapper',
        iconClass: 'solution-icon',
        linkStyle: { color: '#E11D48' },
        wrapperStyle: { background: '#FFE4E6' },
        iconStyle: { color: '#E11D48' },
        featureStyle: { color: '#E11D48' }
    },
];

const comparison = [
    { type: 'Home Loans', amount: 'Up to ₹20 Cr', rate: '7.3% onwards', tenure: 'Up to 30 years', feature: '0% Processing Fee', featureColor: '#3B82F6' },
    { type: 'Business Loans', amount: 'Up to ₹1 Cr', rate: '14% onwards', tenure: 'Up to 7 years', feature: '48-Hour Approval', featureColor: '#F59E0B' },
    { type: 'Personal Loans', amount: 'Up to ₹50 L', rate: '10.5% onwards', tenure: 'Up to 5 years', feature: 'Same-Day Disbursal', featureColor: '#10B981' },
    { type: 'Gold Loans', amount: 'Up to ₹1 Cr', rate: '7.5% onwards', tenure: 'Up to 3 years', feature: 'Instant Approval', featureColor: '#F59E0B' },
    { type: 'Mortgage Loans', amount: 'Up to ₹20 Cr', rate: '10% onwards', tenure: 'Up to 20 years', feature: 'Highest LTV', featureColor: '#8B5CF6' },
    { type: 'Professional Loans', amount: 'Up to ₹75 L', rate: '9.0% onwards', tenure: 'Up to 10 years', feature: 'No Collateral', featureColor: '#6366F1' },
    { type: 'Education Loans', amount: 'Up to ₹1.5 Cr', rate: '8.5% onwards', tenure: 'Up to 15 years', feature: '100% Financing', featureColor: '#0284C7' },
    { type: 'Vehicle Loans', amount: '100% On-Road', rate: '8.75% onwards', tenure: 'Up to 7 years', feature: 'Pre-approved Offers', featureColor: '#E11D48' },
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
                        const l = loan as any;
                        return (
                            <div key={loan.title} className="solution-card">
                                <div className={loan.wrapperClass} style={l.wrapperStyle || {}}>
                                    <Icon className={loan.iconClass} style={l.iconStyle || {}} />
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
                                        <span className={`detail-value ${loan.featureClass} fw-700`} style={l.featureStyle || {}}>{loan.feature}</span>
                                    </div>
                                </div>

                                <p className="solution-desc">{loan.desc}</p>

                                <Link href={loan.href} className={`prof-link ${loan.linkClass}`} style={l.linkStyle || {}}>
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

            {/* LOAN FAQS WITH SCHEMA */}
            <FAQSection
                title="Frequently Asked Questions — Loans"
                subtitle="Everything you need to know before applying"
                background="#F8FAFC"
                faqs={[
                    { question: 'What is the minimum credit score required to get a loan from CapitalFlax?', answer: 'We prefer a CIBIL score of 700 or above for the best interest rates. However, applicants with scores between 650-700 may still qualify with slightly higher rates. We evaluate each application holistically.' },
                    { question: 'How fast can I get loan approval from CapitalFlax?', answer: 'CapitalFlax offers 72-hour approval for most loan products. For gold loans, approval can happen in as little as 30 minutes. Business loans for urgent needs can be approved within 48 hours.' },
                    { question: 'Does CapitalFlax charge any processing fee?', answer: 'Home loans for qualified professionals come with 0% processing fee. Business loans carry 1% and personal loans 2%. Gold loans are 0.5%. Professional loans have 0% processing fee.' },
                    { question: 'What documents are generally required to apply for a loan?', answer: 'Standard documents include: Aadhaar Card, PAN Card, last 6 months bank statements, last 2 years ITR (for self-employed), salary slips for the last 3 months (for salaried), and property documents (for secured loans).' },
                    { question: 'Can I apply for a loan if I am self-employed?', answer: 'Absolutely! CapitalFlax specializes in self-employed professional loans for doctors, CAs, architects, and business owners. We accept flexible income documentation.' },
                    { question: 'How many bank partners does CapitalFlax work with?', answer: 'CapitalFlax partners with 15+ banks and NBFCs including HDFC, ICICI, SBI, Axis Bank, and Kotak Mahindra, ensuring you get the best rate matched to your profile.' },
                    { question: 'Is my data safe with CapitalFlax?', answer: 'Yes. All your personal and financial data is protected with 256-bit SSL encryption. We never share your information with third parties without your explicit consent.' },
                    { question: 'What is the maximum loan amount I can get?', answer: 'Home and mortgage loans are available up to ₹20 Crore. Business and gold loans up to ₹1 Crore. Personal loans up to ₹50 Lakhs. Professional loans up to ₹75 Lakhs. Actual amounts depend on income, credit score, and property value.' },
                ]}
            />

            {/* SERVICES CTA */}
            <ServicesCTA />

        </div>
    );
}
