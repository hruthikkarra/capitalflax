"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle, ArrowRight, ChevronDown, Check } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🏭', title: 'Collateral-Free MSME Loans', desc: 'Secure funding up to ₹1 Crore without pledging assets through CGTMSE-backed schemes.' },
    { icon: '📝', title: 'Udyam Registration Support', desc: 'Unlock government subsidies and priority sector lending benefits with our Udyam assistance.' },
    { icon: '🗓️', title: 'Flexible Repayment', desc: 'Tailored EMI structures that align with your business seasonal cash flows and cycles.' },
    { icon: '⚡', title: '48-Hour Sanction', desc: 'Digital-first processing designed for the pace of Indian manufacturing and service MSMEs.' },
    { icon: '📉', title: 'Preferential Interest Rates', desc: 'Starting at 14% p.a. for GST-registered businesses with clean repayment history.' },
    { icon: '🚀', title: 'Technology Upgrade Fund', desc: 'Specific financing for upgrading plant machinery and adopting modern digital tools.' },
];

const eligibility = [
    { label: 'Business Category', value: 'Micro, Small, and Medium Enterprises (MSME)' },
    { label: 'Vintage', value: 'Minimum 1 year of active operations' },
    { label: 'Registration', value: 'Valid GST and Udyam Registration preferred' },
    { label: 'Income', value: 'Minimum annual turnover of ₹12 Lakhs' },
    { label: 'Credit Score', value: 'CIBIL score of 650+ considered; 700+ preferred' },
];

const steps = [
    { num: '01', title: 'Digital Application', desc: 'Submit your Udyam and GST details via our secure online portal.' },
    { num: '02', title: 'Document Verification', desc: 'Paperless verification of bank statements and ITR filings.' },
    { num: '03', title: 'Sanction Letter', desc: 'Receive your official loan offer within 48 hours of verification.' },
];

const faqs = [
    { q: 'What is the benefit of Udyam Registration for MSME loans?', a: 'Udyam registration makes you eligible for Priority Sector Lending (PSL), which often carries lower interest rates and higher approval chances. It also allows access to collateral-free schemes like CGTMSE.' },
    { q: 'Can I get a loan for a new manufacturing unit?', a: 'Yes. We offer MSME loans for both expansion of existing units and setting up new machinery or facilities, provided you have a viable business plan.' },
    { q: 'What is the maximum limit for unsecured MSME loans?', a: 'Unsecured MSME loans are generally available up to ₹1 Crore. For amounts above this, we offer secured MSME financing up to ₹20 Crore.' },
];

export default function MSMELoansPage() {
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(3);
    const [rate, setRate] = useState(14);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const { emi, totalInterest, totalPayable } = useCallback(() => {
        const r = rate / 12 / 100, n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return { emi, totalInterest: emi * n - loanAmount, totalPayable: emi * n };
    }, [loanAmount, tenure, rate])();

    const sliderStyle = (pct: number, color: string) => ({
        width: '100%', height: '4px', appearance: 'none' as const,
        background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px', outline: 'none', cursor: 'pointer',
    });

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif', background: '#fff' }}>
            <style>{`.msme-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#3B82F6;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #3B82F6;}.msme-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#3B82F6;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{ padding: '6rem 1.5rem', textAlign: 'center', background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #BAE6FD', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '2rem' }}>
                    <Briefcase size={14} style={{ color: '#0284C7' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369A1', letterSpacing: '1.5px', textTransform: 'uppercase' }}>MSME & SME Solutions</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.5rem' }}>
                    Empower Your Enterprise with <span style={{ color: '#0284C7' }}>MSME Loans</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Fuel your growth with specialized financing for small and medium businesses. 
                    Get collateral-free loans up to ₹1 Crore with priority processing.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ background: '#0284C7', color: '#fff', fontWeight: 800, padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(2, 132, 199, 0.3)' }}>
                        Apply for MSME Loan
                    </Link>
                </div>
            </section>

            {/* TRUST INDICATORS */}
            <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    {[
                        { label: 'Interest Rate', value: '14% onwards' },
                        { label: 'Max Loan', value: '₹1 Crore Unsecured' },
                        { label: 'Documentation', value: '100% Digital' },
                        { label: 'Disbursal', value: 'within 72 hours' }
                    ].map((item, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{item.value}</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '6rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '4rem', color: '#0F172A' }}>
                        Designed for <span style={{ color: '#0284C7' }}>Modern Enterprises</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ padding: '2.5rem', borderRadius: '24px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{b.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: 1.6 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALCULATOR */}
            <section style={{ padding: '6rem 1.5rem', background: '#F1F5F9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ background: '#fff', padding: '3rem', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2.5rem', textAlign: 'center' }}>Plan Your <span style={{ color: '#0284C7' }}>Financing</span></h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                            <div>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <label style={{ fontWeight: 800, color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 900, color: '#0284C7' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={100000} max={10000000} step={100000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="msme-thumb" style={sliderStyle(((loanAmount - 100000) / 9900000) * 100, '#0284C7')} />
                                </div>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <label style={{ fontWeight: 800, color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 900, color: '#0284C7' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={7} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="msme-thumb" style={sliderStyle(((tenure - 1) / 6) * 100, '#0284C7')} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <label style={{ fontWeight: 800, color: '#0F172A' }}>Interest Rate</label>
                                        <span style={{ fontWeight: 900, color: '#0284C7' }}>{rate}% p.a.</span>
                                    </div>
                                    <input type="range" min={10} max={24} step={0.5} value={rate} onChange={e => setRate(+e.target.value)} className="msme-thumb" style={sliderStyle(((rate - 10) / 14) * 100, '#0284C7')} />
                                </div>
                            </div>
                            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monthly EMI</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '2rem' }}>{formatCurrency(emi)}</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Total Interest</div>
                                        <div style={{ fontWeight: 800, color: '#0F172A' }}>{formatCurrency(totalInterest)}</div>
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Total Payable</div>
                                        <div style={{ fontWeight: 800, color: '#0F172A' }}>{formatCurrency(totalPayable)}</div>
                                    </div>
                                </div>
                                <Link href="/apply" style={{ background: '#0284C7', color: '#fff', fontWeight: 800, padding: '1rem', borderRadius: '14px', textDecoration: 'none' }}>Proceed to Apply</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section style={{ padding: '6rem 1.5rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '4rem' }}>Our <span style={{ color: '#0284C7' }}>Simple Process</span></h2>
                    <div style={{ position: 'relative' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: '#0284C7', color: '#fff', fontSize: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.num}</div>
                                <div style={{ paddingTop: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>{s.title}</h3>
                                    <p style={{ color: '#64748B', lineHeight: 1.6 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '6rem 1.5rem', background: '#0F172A', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>Scale Your MSME with Confidence</h2>
                <p style={{ color: '#94A3B8', fontSize: '1.2rem', marginBottom: '3rem' }}>Fast approvals, competitive rates, and zero hidden charges.</p>
                <Link href="/apply" style={{ background: '#3B82F6', color: '#fff', fontWeight: 800, padding: '1.25rem 3rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                    Apply Now <ArrowRight size={20} />
                </Link>
            </section>
        </div>
    );
}
