"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

const benefits = [
    { icon: '📊', title: 'Revenue-Based Assessment', desc: 'Your firm\'s gross revenue, not just drawings, is considered for maximum loan eligibility.' },
    { icon: '🏢', title: 'Office Setup & Expansion', desc: 'Fund your CA firm setup, office renovation, software infrastructure, or branch expansion.' },
    { icon: '💼', title: 'Working Capital Overdraft', desc: 'Flexible overdraft facility to manage tax season cash flow. Pay interest only on amount used.' },
    { icon: '📄', title: 'Minimal Documentation', desc: 'ICAI membership certificate + ITR accepted. No complex salaried-income requirements.' },
    { icon: '💰', title: 'Tax Benefit Consultation', desc: 'Our expert advisors help structure your loan to maximize deductions under Section 24 & 80C.' },
    { icon: '⚡', title: 'Priority Processing', desc: 'ICAI fellows get dedicated fast-track underwriting. Approval in 48–72 hours guaranteed.' },
];

const eligibility = [
    { label: 'Qualification', value: 'Chartered Accountant (CA), CMA, CS with ICAI/ICMAI membership' },
    { label: 'Membership', value: 'Active ICAI membership — ACA or FCA' },
    { label: 'Experience', value: 'Minimum 1 year post-qualification work or practice' },
    { label: 'Age', value: '23 to 65 years at loan maturity' },
    { label: 'CIBIL Score', value: '700+ preferred; 680+ considered for established firms' },
    { label: 'Income', value: 'Minimum ₹50,000/month (drawings or salary)' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar Card & PAN Card' },
    { icon: '🎓', label: 'ICAI Membership Certificate' },
    { icon: '📋', label: 'Last 3 years ITR with P&L and Balance Sheet' },
    { icon: '🏦', label: 'Last 6 months current account statements' },
    { icon: '📍', label: 'Office address proof / lease deed' },
    { icon: '📊', label: 'Firm partnership deed (if applicable)' },
];

const steps = [
    { num: '01', title: 'Quick Application', desc: 'Fill our 3-minute online form. No branch visit needed.' },
    { num: '02', title: 'Document Upload', desc: 'Upload ICAI certificate, ITR, and bank statements securely.' },
    { num: '03', title: 'Bank Matching', desc: 'We compare 15+ banks to find the best rate for your profile.' },
    { num: '04', title: 'Offer Letter', desc: 'Digital offer letter within 72 hours. Review and e-sign.' },
    { num: '05', title: 'Fund Transfer', desc: 'Amount credited to your account. Setup your practice now.' },
];

const faqs = [
    { q: 'Can a newly qualified CA (fresher) get a professional loan?', a: 'Yes, freshly qualified CAs can apply. A CIBIL score of 700+ and 1 year of articleship or employment experience improves eligibility. A co-applicant with income can also help.' },
    { q: 'What is the maximum loan amount a CA can get?', a: 'CAs can get up to ₹75 Lakhs unsecured. For secured loans (against property or assets), amounts can go up to ₹5 Crore depending on collateral value and firm revenue.' },
    { q: 'Can I get a loan for software like Tally or SAP for my firm?', a: 'Yes. Professional loans can be used for any business purpose including software licenses, IT infrastructure, office furniture, and working capital.' },
    { q: 'Is the overdraft facility different from a regular loan?', a: 'Yes. An overdraft (OD) facility gives you a credit limit from which you draw as needed and pay interest only on the amount used. It\'s ideal for CAs managing seasonal tax-season cash flow.' },
    { q: 'Will my firm\'s client billing income be counted for loan eligibility?', a: 'Yes. Gross billing income of your firm, your personal drawings, and any salary income are all counted together to calculate your maximum loan eligibility.' },
    { q: 'Is there a processing fee for CA professional loans at CapitalFlax?', a: 'Professional loan processing fees vary by lender. CapitalFlax negotiates the lowest possible fee — typically 0% to 0.5% — for CA loan applicants through our partner banks.' },
];

export default function CharteredAccountantsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EEF2FF 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Calculator size={14} style={{ color: '#3B82F6' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Financial Experts</span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Loans for <span style={{ color: '#3B82F6' }}>Chartered Accountants</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    We assess your firm revenue, ICAI credentials, and practice potential. Get loans that financial experts deserve.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Max Amount', value: '₹75 Lakhs' },
                        { label: 'Starting Rate', value: '9.5% p.a.' },
                        { label: 'Approval', value: '48–72 Hrs' },
                        { label: 'Processing Fee', value: '0–0.5%' },
                    ].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center', boxShadow: '0 4px 16px -4px rgba(59,130,246,0.1)' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '-0.5px' }}>{s.value}</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#3B82F6', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link href="/professionals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#3B82F6', border: '2px solid #BFDBFE', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        View All Professions
                    </Link>
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '2px', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 1rem', letterSpacing: '-1px' }}>
                            Tailored for <span style={{ color: '#3B82F6' }}>Your Firm</span>
                        </h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '550px', margin: '0 auto' }}>From working capital to firm expansion — financial solutions designed for CA professionals.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FAFAFA', border: '1px solid #F1F5F9', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px -8px rgba(59,130,246,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#BFDBFE'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = '#F1F5F9'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 24px -4px rgba(0,0,0,0.06)' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #F8FAFC' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '140px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#3B82F6', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.92rem' }}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Simple 5-Step Process</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 2rem' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #3B82F6, #2563EB)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div>
                                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div>
                                    <div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem', letterSpacing: '-0.5px' }}>CA Loan — FAQs</h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>Common questions from chartered accountants</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#BFDBFE' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#3B82F6', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                                    </button>
                                    <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                                        <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                                            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', textAlign: 'center' }}>
                <Calculator size={40} style={{ color: '#BFDBFE', marginBottom: '1rem' }} />
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>
                    Ready to Grow Your CA Practice?
                </h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>
                    Join 2,000+ chartered accountants who trust CapitalFlax.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#3B82F6', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now — It's Free <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
