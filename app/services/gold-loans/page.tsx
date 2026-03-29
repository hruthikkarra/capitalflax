"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { CircleDollarSign, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '⚡', title: 'Funds in 30 Minutes', desc: 'Walk in with your gold, walk out with cash. 30-minute disbursal guaranteed.' },
    { icon: '💰', title: 'Highest LTV on Gold', desc: 'Get up to 75% of your gold\'s current market value as loan amount.' },
    { icon: '🔒', title: 'Gold Stored Safely', desc: 'Bank-grade secure vaults. Fully insured. Returned in perfect condition on repayment.' },
    { icon: '📅', title: 'Flexible Repayment', desc: 'Pay monthly EMI, interest-only, or bullet repayment at end of tenure — your choice.' },
    { icon: '🎯', title: 'No CIBIL Required', desc: 'Fully secured against gold. Credit score is not a barrier — anyone can apply.' },
    { icon: '🔄', title: 'Part-Release Option', desc: 'Repay partially to release a portion of your gold. No need to close the full loan.' },
];

const eligibility = [
    { label: 'Applicant', value: 'Any Indian resident above 18 years of age' },
    { label: 'Gold Type', value: 'Gold jewellery 18–22 karat; gold coins accepted by select lenders' },
    { label: 'Min Gold', value: 'Minimum 10 grams required' },
    { label: 'CIBIL Score', value: 'Not required — fully collateral-backed loan' },
    { label: 'Income Proof', value: 'Not mandatory for most gold loan products' },
    { label: 'Documents', value: 'Only Aadhaar & PAN for KYC' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar Card' },
    { icon: '🪪', label: 'PAN Card' },
    { icon: '📸', label: 'Passport-size photograph' },
    { icon: '💍', label: 'Gold jewellery / ornaments to pledge' },
    { icon: '📄', label: 'Ownership proof (if available)' },
    { icon: '📍', label: 'Address proof (if Aadhaar differs)' },
];

const steps = [
    { num: '01', title: 'Apply Online / Visit', desc: 'Apply digitally or go to the nearest partner branch with your gold.' },
    { num: '02', title: 'Gold Appraisal', desc: 'Expert appraiser assesses purity and weight of your gold on-site.' },
    { num: '03', title: 'Loan Offer', desc: 'Loan offer issued based on appraised gold value — up to 75% LTV.' },
    { num: '04', title: 'KYC & Agreement', desc: 'Quick Aadhaar + PAN KYC. Sign the agreement digitally or in person.' },
    { num: '05', title: 'Cash in 30 Minutes', desc: 'Funds credited to your account or issued as cash within 30 minutes.' },
];

const faqs = [
    { q: 'What types of gold are accepted?', a: 'Gold jewellery of 18–22 karat purity is accepted. Gold coins up to 50 grams are accepted by select lenders. Gold bars and digital gold are generally not accepted.' },
    { q: 'How is the loan amount calculated?', a: 'Loan = Gold Weight (grams) × Current Gold Rate × Purity Factor × LTV (up to 75%). For example, 50g of 22K gold at ₹6,000/g = max loan of ₹2.25 Lakhs at 75% LTV.' },
    { q: 'Is my gold safe while pledged?', a: 'Yes. All gold is stored in bank-grade secure vaults with full insurance coverage. Returned to you the moment you repay the loan.' },
    { q: 'What if I can\'t repay?', a: 'If you default, the lender may auction your gold after a 30-day notice period. CapitalFlax proactively helps you restructure before any such action.' },
    { q: 'Can I partially repay and release some gold?', a: 'Yes. Most lenders offer partial release — repay a portion of principal to get back proportional gold without closing the full loan.' },
    { q: 'Do I need a CIBIL score?', a: 'No. Gold loans are fully secured against physical gold. CIBIL score is not a criterion — even people with poor credit history can get a gold loan.' },
];

export default function GoldLoansPage() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [tenure, setTenure] = useState(1);
    const rate = 7.5;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const { emi, totalInterest, totalPayable } = useCallback(() => {
        const r = rate / 12 / 100, n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return { emi, totalInterest: emi * n - loanAmount, totalPayable: emi * n };
    }, [loanAmount, tenure])();

    const sliderStyle = (pct: number, color: string) => ({
        width: '100%', height: '4px', appearance: 'none' as const,
        background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px', outline: 'none', cursor: 'pointer',
    });

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            <style>{`.gl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#D97706;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #D97706;}.gl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#D97706;cursor:pointer;border:2px solid #fff;}`}</style>

            <section style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 60%, #FFF7ED 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #FDE68A', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <CircleDollarSign size={14} style={{ color: '#D97706' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Against Your Gold</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Gold Loans at <span style={{ color: '#D97706' }}>7.5% p.a.</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Up to ₹1 Crore. Instant approval in 30 minutes. No CIBIL score required. Highest LTV on your gold.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹1 Crore' }, { label: 'Interest Rate', value: '7.5% p.a.' }, { label: 'Disbursal', value: '30 Minutes' }, { label: 'CIBIL Score', value: 'Not Required' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #FDE68A', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#D97706' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#D97706', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>KEY BENEFITS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Why Choose <span style={{ color: '#D97706' }}>Gold Loans</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 16px 40px -8px rgba(217,119,6,0.15)'; d.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.transform = 'translateY(0)'; }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>INTEREST CALCULATOR</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Plan Your Gold Loan</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #FDE68A', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(217,119,6,0.1)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#D97706' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={10000} max={10000000} step={10000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="gl-thumb" style={sliderStyle(((loanAmount - 10000) / 9990000) * 100, '#D97706')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹10K</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹1Cr</span></div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#D97706' }}>{tenure} {tenure === 1 ? 'Year' : 'Years'}</span>
                                    </div>
                                    <input type="range" min={1} max={3} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="gl-thumb" style={sliderStyle(((tenure - 1) / 2) * 100, '#D97706')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>1 Yr</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>3 Yrs</span></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                                <div style={{ background: '#FFFBEB', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D97706', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monthly EMI</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>{formatCurrency(emi)}</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Interest</div>
                                        <div style={{ fontWeight: 800, color: '#EF4444', fontSize: '0.95rem' }}>{formatCurrency(totalInterest)}</div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Total</div>
                                        <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>{formatCurrency(totalPayable)}</div>
                                    </div>
                                </div>
                                <Link href="/apply" style={{ display: 'block', textAlign: 'center', background: '#D97706', color: '#fff', fontWeight: 700, padding: '0.9rem', borderRadius: '10px', textDecoration: 'none' }}>Apply for This Loan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#FFFBEB', borderRadius: '16px', border: '1px solid #FDE68A', overflow: 'hidden' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #FEF3C7' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '130px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#D97706', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: '1px solid #FDE68A', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.92rem' }}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Cash in 30 Minutes</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '14px', padding: '1.5rem 2rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #F59E0B, #D97706)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div><div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div><div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem' }}>Gold Loan FAQs</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#FDE68A' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', background: '#fff', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#D97706', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
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

            <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>Turn Your Gold Into Instant Cash</h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>₹1 Crore | 7.5% p.a. | 30-Min Disbursal | No CIBIL Required</p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#D97706', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
