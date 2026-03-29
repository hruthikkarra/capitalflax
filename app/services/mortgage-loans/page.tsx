"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Landmark, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🏢', title: 'Residential & Commercial', desc: 'Mortgage against any property type — apartment, villa, shop, office, or warehouse.' },
    { icon: '💰', title: 'Highest LTV Available', desc: 'Get up to 75–80% of your property\'s market value as a loan. Maximum funds unlocked.' },
    { icon: '🎯', title: 'Any End Use', desc: 'Business expansion, education, medical, travel, debt consolidation — no restrictions.' },
    { icon: '📅', title: 'Long Tenure — 20 Years', desc: 'Low EMI with up to 20-year repayment tenure. Manage cash flow comfortably.' },
    { icon: '🔄', title: 'Balance Transfer', desc: 'Transfer your existing high-rate mortgage loan for lower EMIs and significant interest savings.' },
    { icon: '⚡', title: 'Top-Up on Existing Loan', desc: 'Already have a mortgage loan? Get a top-up loan without fresh property valuation.' },
];

const eligibility = [
    { label: 'Applicant', value: 'Individual, HUF, Sole Proprietor, or company (for LAP)' },
    { label: 'Age', value: '23 to 65 years at loan maturity (individual)' },
    { label: 'Property', value: 'Residential or commercial property in approved locations' },
    { label: 'CIBIL Score', value: '700+ preferred; 680+ considered for higher-value properties' },
    { label: 'Income', value: 'Salaried: ₹40,000/month; Self-employed: ₹5L p.a. net profit' },
    { label: 'LTV Ratio', value: 'Up to 75% of property value for residential; 60% for commercial' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar & PAN Card' },
    { icon: '🏠', label: 'Property title deed & chain documents' },
    { icon: '✅', label: 'Property approval plan & NOC from authorities' },
    { icon: '💼', label: 'Last 3 years ITR / last 3 months salary slips' },
    { icon: '🏦', label: 'Last 6 months bank statements' },
    { icon: '📊', label: 'Valuation report from approved valuer' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Share basic details and property info in 5 minutes.' },
    { num: '02', title: 'Property Valuation', desc: 'Bank-appointed valuer visits and assesses your property\'s market value.' },
    { num: '03', title: 'Legal & Title Check', desc: 'Legal team verifies property title, ownership chain, and NOCs.' },
    { num: '04', title: 'Sanction Letter', desc: 'Loan sanction letter with approved amount and rate issued within 7 days.' },
    { num: '05', title: 'Disbursal', desc: 'Funds credited to your account. Property documents held as collateral.' },
];

const faqs = [
    { q: 'What is a mortgage loan (LAP)?', a: 'A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property to borrow funds. The property remains in your possession while only the title documents are held by the lender.' },
    { q: 'What is the maximum mortgage loan I can get?', a: 'Mortgage loans go up to ₹20 Crore through CapitalFlax. The actual amount depends on your property\'s market value, CIBIL score, income, and LTV permitted by the lender (up to 75%).' },
    { q: 'Can I mortgage a commercial property?', a: 'Yes. Commercial properties like offices, shops, warehouses, and industrial properties can be mortgaged. LTV for commercial properties is typically up to 60% of market value.' },
    { q: 'Is a jointly owned property eligible for mortgage?', a: 'Yes, jointly owned properties can be mortgaged. All co-owners must be co-applicants on the loan and sign the mortgage documents.' },
    { q: 'What happens to my property during the loan tenure?', a: 'You retain full possession and use of the property. Only the title documents are held by the lender. You can continue to live in or rent out the property as usual.' },
    { q: 'Can I foreclose a mortgage loan early?', a: 'Yes. Floating-rate mortgage loans have no foreclosure penalty per RBI guidelines. Fixed-rate loans may have 2–3% prepayment charges. CapitalFlax helps you choose options with minimum exit costs.' },
];

export default function MortgageLoansPage() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [tenure, setTenure] = useState(10);
    const rate = 10;
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
            <style>{`.ml-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#7C3AED;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #7C3AED;}.ml-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#7C3AED;cursor:pointer;border:2px solid #fff;}`}</style>

            <section style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 60%, #F5F3FF 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #DDD6FE', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Landmark size={14} style={{ color: '#7C3AED' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Property as Collateral</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Mortgage Loans at <span style={{ color: '#7C3AED' }}>10% p.a.</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Up to ₹20 Crore against residential or commercial property. Highest LTV. Any end use. 20-year tenure.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹20 Crore' }, { label: 'Interest Rate', value: '10% p.a.' }, { label: 'Max Tenure', value: '20 Years' }, { label: 'LTV', value: 'Up to 75%' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7C3AED' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>KEY BENEFITS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Why Choose <span style={{ color: '#7C3AED' }}>Mortgage Loans</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 16px 40px -8px rgba(124,58,237,0.15)'; d.style.transform = 'translateY(-4px)'; }}
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>EMI CALCULATOR</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Plan Your Mortgage Loan</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #DDD6FE', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(124,58,237,0.1)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#7C3AED' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={500000} max={20000000} step={500000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="ml-thumb" style={sliderStyle(((loanAmount - 500000) / 19500000) * 100, '#7C3AED')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹5L</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹20Cr</span></div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#7C3AED' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={20} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="ml-thumb" style={sliderStyle(((tenure - 1) / 19) * 100, '#7C3AED')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>1 Yr</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>20 Yrs</span></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                                <div style={{ background: '#F5F3FF', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monthly EMI</div>
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
                                <Link href="/apply" style={{ display: 'block', textAlign: 'center', background: '#7C3AED', color: '#fff', fontWeight: 700, padding: '0.9rem', borderRadius: '10px', textDecoration: 'none' }}>Apply for This Loan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#F5F3FF', borderRadius: '16px', border: '1px solid #DDD6FE', overflow: 'hidden' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #EDE9FE' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '130px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>5-Step Mortgage Journey</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '14px', padding: '1.5rem 2rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div><div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div><div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem' }}>Mortgage Loan FAQs</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#DDD6FE' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', background: '#fff', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#7C3AED', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
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
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>Unlock the Value of Your Property</h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>Up to ₹20 Crore | 10% p.a. | 20-Year Tenure | Any Purpose</p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
