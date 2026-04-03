"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { User, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🚀', title: 'Same-Day Disbursal', desc: 'Complete your application by afternoon and get funds in your account the same day.' },
    { icon: '🔓', title: 'Zero Collateral', desc: '100% unsecured. No property or gold required. Loan purely on your income and credit score.' },
    { icon: '🎯', title: 'Any Purpose', desc: 'Wedding, travel, medical bills, home renovation, gadgets, or emergency — no end-use restriction.' },
    { icon: '📋', title: 'Minimal Docs', desc: 'Aadhaar, PAN, salary slips, and bank statements. That\'s all. No complex paperwork.' },
    { icon: '🔄', title: 'Flexible Tenure', desc: 'Choose repayment from 12 to 60 months. Step-up and step-down EMI options available.' },
    { icon: '💳', title: 'Instant Pre-Approval', desc: 'Check your loan eligibility in 60 seconds. Pre-approved for select bank customers.' },
];

const eligibility = [
    { label: 'Employment', value: 'Salaried (min 1 year) or Self-Employed (ITR for 2 years)' },
    { label: 'Age', value: '21 to 58 years (salaried); up to 65 years (self-employed)' },
    { label: 'CIBIL Score', value: '700+ for best rates; 680+ considered' },
    { label: 'Min Income', value: '₹25,000/month (salaried); ₹3L p.a. (self-employed)' },
    { label: 'Employer', value: 'Government, PSU, MNC, or reputed private company preferred' },
    { label: 'Work Experience', value: 'Minimum 1 year in current job / 2 years in business' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar Card & PAN Card' },
    { icon: '💼', label: 'Last 3 months salary slips' },
    { icon: '🏦', label: 'Last 3 months bank statements' },
    { icon: '📋', label: 'Last 2 years ITR (self-employed)' },
    { icon: '📍', label: 'Current address proof' },
    { icon: '📸', label: 'Passport-size photograph' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill a 3-minute form. Zero branch visits required.' },
    { num: '02', title: 'Instant Check', desc: 'Instant credit check and pre-approval decision in 60 seconds.' },
    { num: '03', title: 'Upload Documents', desc: 'Upload salary slips and bank statements digitally.' },
    { num: '04', title: 'Offer Issued', desc: 'Loan offer with best rate issued within 4 hours.' },
    { num: '05', title: 'Same-Day Credit', desc: 'Funds in your bank account — same day, no delays.' },
];

const faqs = [
    { q: 'What can I use a personal loan for?', a: 'A personal loan from CapitalFlax has no end-use restriction. You can use it for a wedding, vacation, medical bills, home renovation, gadget purchase, debt consolidation, or any personal need.' },
    { q: 'How fast is the disbursal?', a: 'For pre-approved customers and individuals with complete documentation, disbursal happens the same day. In most cases, funds reach your account within 24 hours of loan sanction.' },
    { q: 'Can I get a personal loan with a low CIBIL score?', a: 'Loans are possible above 680 CIBIL, but rates will be higher. We recommend applicants with 700+ scores for the most competitive offers. You can check and improve your score before applying.' },
    { q: 'Is there a prepayment penalty on personal loans?', a: 'Prepayment charges vary by lender — typically 2–4% of outstanding principal. Some NBFCs allow free prepayment after 6 months. CapitalFlax helps you choose lenders with lowest prepayment penalties.' },
    { q: 'Can a homemaker or student apply for a personal loan?', a: 'Homemakers and students without regular income typically don\'t qualify independently. However, they can be co-applicants with an earning family member to strengthen the loan application.' },
];

export default function PersonalLoansPage() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [tenure, setTenure] = useState(3);
    const rate = 10.5;
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
            <style>{`.pl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#10B981;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #10B981;}.pl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#10B981;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 60%, #ECFDF5 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #A7F3D0', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <User size={14} style={{ color: '#10B981' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Quick Cash Access</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Personal Loans at <span style={{ color: '#059669' }}>10.5% p.a.</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Up to ₹50 Lakhs. No collateral. Same-day disbursal. For any personal need — no questions asked.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹50 Lakhs' }, { label: 'Interest Rate', value: '10.5% p.a.' }, { label: 'Max Tenure', value: '5 Years' }, { label: 'Collateral', value: 'None' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#059669', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>KEY BENEFITS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Why Our <span style={{ color: '#059669' }}>Personal Loans</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 16px 40px -8px rgba(5,150,105,0.12)'; d.style.borderColor = '#A7F3D0'; d.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.borderColor = '#E2E8F0'; d.style.transform = 'translateY(0)'; }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMI CALCULATOR */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>EMI CALCULATOR</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Plan Your Personal Loan</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#059669' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={50000} max={5000000} step={50000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="pl-thumb" style={sliderStyle(((loanAmount - 50000) / 4950000) * 100, '#10B981')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹50K</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹50L</span></div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#059669' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={5} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="pl-thumb" style={sliderStyle(((tenure - 1) / 4) * 100, '#10B981')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>1 Yr</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>5 Yrs</span></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                                <div style={{ background: '#ECFDF5', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#059669', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monthly EMI</div>
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
                                <div style={{ background: '#ECFDF5', borderRadius: '10px', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 600 }}>Interest Rate</span>
                                    <span style={{ fontWeight: 800, color: '#059669' }}>{rate}% p.a.</span>
                                </div>
                                <Link href="/apply" style={{ display: 'block', textAlign: 'center', background: '#059669', color: '#fff', fontWeight: 700, padding: '0.9rem', borderRadius: '10px', textDecoration: 'none' }}>Apply for This Loan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #E2E8F0' : 'none', gap: '2rem', background: i % 2 === 0 ? '#F8FAFC' : '#fff' }}>
                                <div style={{ minWidth: '130px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#059669', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.92rem' }}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Same-Day in 5 Steps</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 2rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #10B981, #059669)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div><div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div><div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem', letterSpacing: '-0.5px' }}>Personal Loan FAQs</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#A7F3D0' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', background: '#fff', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#059669', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
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
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>Get Funds Today</h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>₹50 Lakhs | Same-Day Disbursal | 10.5% p.a. | Zero Collateral</p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#10B981', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
