"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Building2, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

const benefits = [
    { icon: '🏗️', title: 'Project-Income Accepted', desc: 'Irregular project-based income is fully accepted. We assess annual billings, not monthly salary.' },
    { icon: '🛠️', title: 'Equipment & Tools Finance', desc: 'Fund CAD software, plotters, site equipment, 3D printers and other professional tools.' },
    { icon: '🏠', title: 'Collateral-Free up to ₹50L', desc: 'No property collateral required for loans up to ₹50 Lakhs. Based purely on professional credentials.' },
    { icon: '📅', title: 'Flexible EMI During Gaps', desc: 'Moratorium period available between projects. Take EMI breaks when projects are between phases.' },
    { icon: '🏢', title: 'Studio Setup Finance', desc: 'Finance your architecture studio interior, CAD workstations, rendering servers and presentation space.' },
    { icon: '🎯', title: 'Tender & Project Bidding', desc: 'Short-term working capital loans to fund tender deposits, bid bonds, and project kickoffs.' },
];

const eligibility = [
    { label: 'Qualification', value: 'B.Arch, M.Arch from CoA-recognized institution' },
    { label: 'Registration', value: 'Active Council of Architecture (CoA) registration' },
    { label: 'Experience', value: 'Minimum 1 year post-qualification practice or employment' },
    { label: 'Age', value: '22 to 65 years at loan maturity' },
    { label: 'CIBIL Score', value: '700+ preferred; project portfolio strengthens eligibility' },
    { label: 'Income', value: 'Minimum ₹40,000/month average (annualized project income)' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar Card & PAN Card' },
    { icon: '🎓', label: 'B.Arch/M.Arch Degree Certificate' },
    { icon: '🏛️', label: 'Council of Architecture (CoA) Registration' },
    { icon: '🏦', label: 'Last 6 months bank statements' },
    { icon: '📋', label: 'Last 2 years ITR with project income schedule' },
    { icon: '📁', label: 'Sample project portfolio / client agreements' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Quick 3-minute form. No branch visit. Upload documents digitally.' },
    { num: '02', title: 'Profile Review', desc: 'Our team reviews your CoA registration and project income history.' },
    { num: '03', title: 'Bank Matching', desc: 'We match your profile to 15+ banks — finding architect-friendly lenders.' },
    { num: '04', title: 'Offer in 72 Hours', desc: 'Best-rate offer sent within 72 hours. Digital signing from anywhere.' },
    { num: '05', title: 'Funds Released', desc: 'Amount credited to your account. Launch your project immediately.' },
];

const faqs = [
    { q: 'Can an architect with irregular income get a loan?', a: 'Yes. CapitalFlax specializes in project-based income. We annualize your billing cycle and assess total project contracts to calculate maximum loan eligibility.' },
    { q: 'What is the maximum loan amount for an architect?', a: 'Architects can get up to ₹50 Lakhs collateral-free. With property collateral, amounts can go up to ₹5 Crore. Actual amount depends on income, project pipeline, and credit score.' },
    { q: 'Can I take a loan to buy expensive CAD software or rendering systems?', a: 'Yes, professional loans can be used for any business-related purpose including software, hardware, rendering setups, office equipment, or even a professional 3D printer.' },
    { q: 'How does CapitalFlax handle income gaps between projects?', a: 'We offer moratorium periods and step-up EMI options for architects. During project gaps, you can defer EMIs (interest only) until your next project kicks in, depending on the lender terms.' },
    { q: 'Is my international project income counted for loan eligibility?', a: 'Domestic project income is the primary assessment basis. Foreign project income may be counted if it is deposited in a domestic account and reflected in ITR.' },
    { q: 'Can I use the loan to fund my architectural firm\'s participation in global competitions?', a: 'Yes. There are no end-use restrictions on professional loans. You can use the amount for competition entry, model making, travel, or any professional purpose.' },
];

export default function ArchitectsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 50%, #ECFDF5 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Building2 size={14} style={{ color: '#10B981' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Design Professionals</span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Loans Built for <span style={{ color: '#10B981' }}>Architects</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Project-based income, CoA registration, and portfolio value — we understand what defines your profession. Designed for design professionals.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Max Amount', value: '₹50 Lakhs' },
                        { label: 'Starting Rate', value: '9.5% p.a.' },
                        { label: 'Approval', value: '72 Hours' },
                        { label: 'Collateral', value: 'Not Required' },
                    ].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center', boxShadow: '0 4px 16px -4px rgba(16,185,129,0.1)' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981', letterSpacing: '-0.5px' }}>{s.value}</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#10B981', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link href="/professionals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#10B981', border: '2px solid #A7F3D0', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        View All Professions
                    </Link>
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '2px', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 1rem', letterSpacing: '-1px' }}>
                            Built for Your <span style={{ color: '#10B981' }}>Studio</span>
                        </h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '550px', margin: '0 auto' }}>From studio setup to equipment finance — everything an architect needs to grow their practice.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FAFAFA', border: '1px solid #F1F5F9', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px -8px rgba(16,185,129,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#A7F3D0'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 24px -4px rgba(0,0,0,0.06)' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #F8FAFC' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '140px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#10B981', flexShrink: 0 }} />
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
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Simple 5-Step Process</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 2rem' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #10B981, #059669)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem', letterSpacing: '-0.5px' }}>Architect Loan — FAQs</h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>Common questions from design professionals</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#A7F3D0' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#10B981', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
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
                <Building2 size={40} style={{ color: '#A7F3D0', marginBottom: '1rem' }} />
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>
                    Ready to Build Your Dream Studio?
                </h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>
                    Join 1,500+ architects who trust CapitalFlax for practice finance.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#10B981', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now — It's Free <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
