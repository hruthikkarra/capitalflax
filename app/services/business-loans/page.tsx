"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '💼', title: 'Working Capital Loans', desc: 'Fund daily operations, inventory, and business cycles without disrupting cash flow.' },
    { icon: '🏭', title: 'Machinery & Equipment', desc: 'Finance plant upgrades, new machinery, or commercial vehicles essential to your business.' },
    { icon: '⚡', title: '48-Hour Approval', desc: 'Fast-track underwriting for SMEs and business owners. Funds in your account in 48 hours.' },
    { icon: '📄', title: 'Minimal Documentation', desc: 'GST returns, ITR, and bank statements — that\'s all you need. No complex requirements.' },
    { icon: '🔄', title: 'Overdraft Facility', desc: 'A flexible credit limit you draw from as needed and repay. Pay interest only on usage.' },
    { icon: '📈', title: 'Loan Top-Up Available', desc: 'Already have a business loan? Top it up for expansion without fresh documentation.' },
];

const eligibility = [
    { label: 'Business Type', value: 'Proprietorship, Partnership, LLP, Pvt Ltd, OPC' },
    { label: 'Vintage', value: 'Minimum 2 years of business operation' },
    { label: 'Age', value: 'Owner/Director: 21 to 65 years' },
    { label: 'CIBIL Score', value: '700+ preferred; 680+ considered for established businesses' },
    { label: 'Annual Turnover', value: 'Minimum ₹10 Lakhs per year (GST-registered preferred)' },
    { label: 'Profitability', value: 'Last 2 years of net profit as per ITR' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar & PAN (Owner + Business)' },
    { icon: '📋', label: 'Last 2 years ITR with P&L & Balance Sheet' },
    { icon: '🏦', label: 'Last 6 months current account statements' },
    { icon: '📊', label: 'GST returns for last 12 months' },
    { icon: '📄', label: 'Business registration / incorporation certificate' },
    { icon: '📍', label: 'Office / shop address proof' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill the 3-minute form. No branch visit needed.' },
    { num: '02', title: 'Upload Documents', desc: 'ITR, bank statements, and GST returns securely uploaded.' },
    { num: '03', title: 'Credit Assessment', desc: 'Your business profile assessed by 15+ partner banks.' },
    { num: '04', title: 'Offer in 48 Hours', desc: 'Best-rate offer issued within 48 hours. Digital signing.' },
    { num: '05', title: 'Disbursal', desc: 'Funds credited to your business current account.' },
];

const faqs = [
    { q: 'Can a startup get a business loan from CapitalFlax?', a: 'Startups with less than 2 years of operation can explore MUDRA loans or CGTMSE-backed loans through CapitalFlax. Established businesses (2+ years) get best rates on unsecured business loans.' },
    { q: 'What is the maximum business loan amount?', a: 'Unsecured business loans go up to ₹1 Crore. With property or collateral as security, business loans can go up to ₹20 Crore through our partner banks.' },
    { q: 'Is a GST registration mandatory for a business loan?', a: 'GST registration is preferred but not mandatory for all lenders. Non-GST businesses can provide alternative income proof. However, GST-registered businesses get faster approval and better rates.' },
    { q: 'Can I get a business loan without collateral?', a: 'Yes. Unsecured business loans up to ₹1 Crore are available without any collateral. These are based purely on your business turnover, profitability, and credit score.' },
    { q: 'What is the difference between a term loan and an overdraft for businesses?', a: 'A term loan is a fixed amount disbursed upfront with EMI repayment. An overdraft (OD) is a credit limit from which you draw as needed — ideal for managing seasonal cash flow or working capital needs.' },
];

export default function BusinessLoansPage() {
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(3);
    const [rate, setRate] = useState(14);
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
            <style>{`.bl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#F59E0B;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #F59E0B;}.bl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#F59E0B;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{
                position: 'relative',
                padding: '5rem 1.5rem 4rem',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(135deg, rgba(255,251,235,0.94) 0%, rgba(254,243,199,0.92) 60%, rgba(255,247,237,0.94) 100%), url(/bus.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #FDE68A', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Briefcase size={14} style={{ color: '#F59E0B' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Fuel Your Growth</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Business Loans at <span style={{ color: '#D97706' }}>14% p.a.</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Up to ₹1 Crore. 48-hour approval. No collateral required. Working capital, equipment finance, and overdraft facilities.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹1 Crore' }, { label: 'Interest Rate', value: '14% p.a.' }, { label: 'Max Tenure', value: '7 Years' }, { label: 'Approval', value: '48 Hours' }].map((s, i) => (
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

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>KEY BENEFITS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Why Our <span style={{ color: '#D97706' }}>Business Loans</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 16px 40px -8px rgba(217,119,6,0.12)'; d.style.borderColor = '#FDE68A'; d.style.transform = 'translateY(-4px)'; }}
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>EMI CALCULATOR</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Plan Your Business Loan</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#D97706' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={100000} max={10000000} step={100000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="bl-thumb" style={sliderStyle(((loanAmount - 100000) / 9900000) * 100, '#F59E0B')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹1L</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹1Cr</span></div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#D97706' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={7} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="bl-thumb" style={sliderStyle(((tenure - 1) / 6) * 100, '#F59E0B')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>1 Yr</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>7 Yrs</span></div>
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
                                <div style={{ background: '#FFFBEB', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.85rem', color: '#D97706', fontWeight: 600 }}>Interest Rate</span>
                                        <span style={{ fontWeight: 800, color: '#D97706' }}>{rate.toFixed(1)}% p.a.</span>
                                    </div>
                                    <input type="range" min={8} max={24} step={0.1} value={rate} onChange={e => setRate(+e.target.value)} className="bl-thumb" style={sliderStyle(((rate - 8) / 16) * 100, '#F59E0B')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>8%</span><span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>24%</span></div>
                                </div>
                                <p style={{ fontSize: '0.72rem', color: '#94A3B8', fontStyle: 'italic', margin: '0 0 0.5rem', textAlign: 'center' }}>* Interest rate depend upon on your profile</p>
                                <Link href="/apply" style={{ display: 'block', textAlign: 'center', background: '#D97706', color: '#fff', fontWeight: 700, padding: '0.9rem', borderRadius: '10px', textDecoration: 'none' }}>Apply for This Loan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #E2E8F0' : 'none', gap: '2rem', background: i % 2 === 0 ? '#F8FAFC' : '#fff' }}>
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

            {/* DOCUMENTS */}
            <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>5-Step Loan Journey</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 2rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #F59E0B, #D97706)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem', letterSpacing: '-0.5px' }}>Business Loan FAQs</h2>
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

            {/* RELATED BLOGS */}
            <section style={{ padding: '2rem 1.5rem', background: '#F1F5F9', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700 }}>Pro Tip:</span> Learn the step-by-step process of securing capital in our 
                        <Link href="/blog/how-to-get-business-loan-india" style={{ color: '#D97706', fontWeight: 700 }}>Ultimate Business Loan Guide →</Link>
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>Ready to Grow Your Business?</h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>₹1 Crore | 48-Hour Approval | No Collateral | 14% p.a.</p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#F59E0B', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
