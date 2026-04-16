"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle, ArrowRight, ChevronDown, Building2 } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🏦', title: 'CGTMSE Coverage', desc: 'Access collateral-free credit for your MSME unit under government guarantee schemes.' },
    { icon: '📉', title: 'Preferential Rates', desc: 'Enjoy lower interest rates specifically negotiated for micro and small enterprises.' },
    { icon: '⚡', title: 'Speedy Approval', desc: 'Get your MSME loan sanctioned in 48 hours with our digital-first processing.' },
    { icon: '📝', title: 'Udyam Integration', desc: 'We help you leverage your Udyam registration to unlock maximum loan eligibility.' },
    { icon: '🏭', title: 'Expansion Capital', desc: 'Finance new machinery, upgrade technology, or renovate your workshop with ease.' },
    { icon: '💳', title: 'MSME Credit Cards', desc: 'Access specialized credit lines for your daily business purchases and bills.' },
];

const eligibility = [
    { label: 'Business Type', value: 'Micro, Small, & Medium Enterprises (Mfg & Service)' },
    { label: 'Udyam Reg', value: 'Mandatory for MSME benefits' },
    { label: 'Vintage', value: 'Minimum 1 year of active operations' },
    { label: 'Turnover', value: 'Up to ₹250 Crore as per MSME definition' },
    { label: 'Location', value: 'Operational anywhere across India' },
    { label: 'Documents', value: 'GST returns, ITR, and Bank Statements' },
];

const steps = [
    { num: '01', title: 'Check MSME Rank', desc: 'Assess your eligibility based on turnover and investment.' },
    { num: '02', title: 'Digital Submission', desc: 'Upload your Udyam, GST, and ITR documents online.' },
    { num: '03', title: 'Lender Matching', desc: 'We match you with 15+ banks offering MSME schemes.' },
    { num: '04', title: 'Sanction Letter', desc: 'Receive your official loan offer within 48 hours.' },
    { num: '05', title: 'Direct Disbursal', desc: 'Funds credited to your business account for immediate use.' },
];

const faqs = [
    { q: 'What is the maximum amount for an MSME loan?', a: 'Under the revised definition, MSMEs can access collateral-free loans up to ₹50 Lakhs. With collateral, loans can go up to ₹50 Crore depending on business size and turnover.' },
    { q: 'Is Udyam registration mandatory?', a: 'Yes, for most banks to offer MSME-specific interest rates and benefits, a valid Udyam Registration Certificate is required. We can assist you in getting one if needed.' },
    { q: 'Can I get an MSME loan for a new business?', a: 'Yes, micro-loans (MUDRA) are available for units with less than 1 year of vintage. For larger MSME loans, at least 1-2 years of operation is preferred.' },
    { q: 'What are the interest rates for MSME loans?', a: 'MSME loan rates generally range from 9% to 16% p.a., depending on the scheme and the credit profile of the business.' },
];

export default function MSMELoansPage() {
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(5);
    const [rate, setRate] = useState(11.5);
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
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            <style>{`.bl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#10B981;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #10B981;}.bl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#10B981;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{
                position: 'relative',
                padding: '5rem 1.5rem 4rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #A7F3D0', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Building2 size={14} style={{ color: '#059669' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '1.5px', textTransform: 'uppercase' }}>MSME POWERHOUSE</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#064E3B', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Collateral-Free <span style={{ color: '#059669' }}>MSME Loans</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#065F46', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Fuel your micro, small, or medium enterprise with tailored funding options. Access government schemes, low-interest rates, and fast disbursals.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹50 Crore' }, { label: 'Interest Rate', value: 'From 9%' }, { label: 'Max Tenure', value: '10 Years' }, { label: 'Approval', value: '48 Hours' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#6B7280', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#059669', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply for MSME Loan <ArrowRight size={16} />
                </Link>
            </section>

            {/* CONTENT SECTION */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', textAlign: 'center' }}>Empowering India's Backbone</h2>
                    <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                        The MSME sector is the engine of the Indian economy. At CapitalFlax, we recognize the unique challenges faced by small business owners. Our <strong>MSME loans</strong> are designed to bridge the credit gap, offering funding for everything from inventory purchase to massive technological upgrades. With <strong>Udyam registration</strong>, your business unlocks exclusive perks including interest subvention and priority sector lending benefits.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMI CALCULATOR */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '2rem' }}>Plan Your Growth</h2>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#059669' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={100000} max={10000000} step={100000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="bl-thumb" style={sliderStyle(((loanAmount - 100000) / 9900000) * 100, '#10B981')} />
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#059669' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={10} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="bl-thumb" style={sliderStyle(((tenure - 1) / 9) * 100, '#10B981')} />
                                </div>
                                <div style={{ background: '#ECFDF5', borderRadius: '10px', padding: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 600 }}>Interest Rate</span>
                                        <span style={{ fontWeight: 800, color: '#059669' }}>{rate.toFixed(1)}% p.a.</span>
                                    </div>
                                    <input type="range" min={8} max={20} step={0.1} value={rate} onChange={e => setRate(+e.target.value)} className="bl-thumb" style={sliderStyle(((rate - 8) / 12) * 100, '#10B981')} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center', background: '#F9FAFB', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' }}>Monthly Installment</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>{formatCurrency(emi)}</div>
                                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase' }}>Total Interest</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2937' }}>{formatCurrency(totalInterest)}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase' }}>Total Payable</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1F2937' }}>{formatCurrency(totalPayable)}</div>
                                    </div>
                                </div>
                                <Link href="/apply" style={{ marginTop: '1rem', background: '#059669', color: '#fff', fontWeight: 700, padding: '1rem', borderRadius: '50px', textDecoration: 'none' }}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY & FAQ */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A' }}>MSME Eligibility & FAQs</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Eligibility Criteria</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {eligibility.map((e, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#94A3B8' }}>{e.label}</span>
                                        <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#0F172A', textAlign: 'right' }}>{e.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {faqs.map((f, i) => (
                                    <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: '10px' }}>
                                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1rem', textAlign: 'left', background: 'none', border: 'none', fontWeight: 700, color: '#0F172A', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {f.q}
                                            <ChevronDown size={16} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                                        </button>
                                        {openFaq === i && <div style={{ padding: '0 1rem 1rem', fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>{f.a}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED BLOGS */}
            <section style={{ padding: '2rem 1.5rem', background: '#F0FDF4', borderTop: '1px solid #DCFCE7' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700 }}>Want to know more?</span> Check your 
                        <Link href="/blog/msme-loan-eligibility-india" style={{ color: '#059669', fontWeight: 700 }}>Detailed MSME Eligibility Guide →</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
