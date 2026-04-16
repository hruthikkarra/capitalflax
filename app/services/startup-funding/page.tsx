"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Rocket, CheckCircle, ArrowRight, ChevronDown, Zap, ShieldCheck } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🦁', title: 'Revenue-Based Financing', desc: 'Secure funding based on your recurring revenue without giving up equity or seats on your board.' },
    { icon: '📉', title: 'Flexible Repayment', desc: 'Repayment schedules that scale with your monthly revenue. Pay more when you grow, less when you don\'t.' },
    { icon: '🚀', title: 'Growth Capital', desc: 'Speed up your user acquisition, hiring, or marketing efforts with fast-access growth debt.' },
    { icon: '🛡️', title: 'Zero Equity Dilution', desc: 'Maintain 100% control of your startup while accessing the capital you need to scale.' },
    { icon: '🤖', title: 'Tech-Driven Underwriting', desc: 'Our AI-powered assessments value your growth metrics and unit economics over traditional collateral.' },
    { icon: '🌐', title: 'Global Banking Network', desc: 'Connect with partners that understand the high-growth startup ecosystem in India and abroad.' },
];

const eligibility = [
    { label: 'Startup Maturity', value: 'Seed-funded to Series A+ or High-Growth Bootstrapped' },
    { label: 'Revenue', value: 'Minimum ₹5 Lakhs Monthly Recurring Revenue (MRR)' },
    { label: 'Tech Stack', value: 'Digital-first business with measurable unit economics' },
    { label: 'Runway', value: 'Minimum 6 months of existing cash runway' },
    { label: 'Founders', value: 'Experienced leadership with clear growth roadmap' },
];

const steps = [
    { num: '01', title: 'Share Metrics', desc: 'Connect your revenue tools or upload your latest financial dashboards.' },
    { num: '02', title: 'Rapid Assessment', desc: 'Get a term sheet based on your growth potential within 48 hours.' },
    { num: '03', title: 'Instant Funding', desc: 'Receive capital in your business account to fuel your next growth phase.' },
];

export default function StartupFundingPage() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [repaymentPct, setRepaymentPct] = useState(5);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const sliderStyle = (pct: number, color: string) => ({
        width: '100%', height: '4px', appearance: 'none' as const,
        background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px', outline: 'none', cursor: 'pointer',
    });

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif', background: '#fff' }}>
            <style>{`.startup-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#8B5CF6;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #8B5CF6;}.startup-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#8B5CF6;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{ padding: '8rem 1.5rem', textAlign: 'center', background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #DDD6FE', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '2rem' }}>
                    <Rocket size={14} style={{ color: '#7C3AED' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6D28D9', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Funding for Growth</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.5rem' }}>
                    Scale Faster with <span style={{ color: '#7C3AED' }}>Startup Funding</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
                    Access growth capital without giving up equity. We offer specialized debt 
                    solutions and revenue-based financing for India's high-growth startups.
                </p>
                <Link href="/apply" style={{ background: '#7C3AED', color: '#fff', fontWeight: 800, padding: '1.25rem 3.5rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                    Get Funded Now <ArrowRight size={20} />
                </Link>
            </section>

            {/* METRICS SECTION */}
            <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                    <div style={{ padding: '2rem', background: '#fff' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>₹20 Cr+</div>
                        <div style={{ fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Max Funding Limit</div>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#7C3AED', marginBottom: '0.5rem' }}>0%</div>
                        <div style={{ fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Equity Dilution</div>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>48h</div>
                        <div style={{ fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Rapid Turnaround</div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '8rem 1.5rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.75rem', fontWeight: 900, textAlign: 'center', marginBottom: '5rem', color: '#0F172A' }}>
                        Why Startups Choose <span style={{ color: '#7C3AED' }}>CapitalFlax</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ padding: '3rem', borderRadius: '32px', background: '#F9FAFB', border: '1px solid #F3F4F6' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>{b.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>{b.title}</h3>
                                <p style={{ color: '#4B5563', lineHeight: 1.7, fontSize: '1.05rem' }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALCULATOR - REVENUE SHARE MODEL */}
            <section style={{ padding: '8rem 1.5rem', background: '#FAFAFA' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ background: '#fff', padding: '4rem', borderRadius: '40px', border: '1px solid #E5E7EB', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3rem', textAlign: 'center' }}>Project Your <span style={{ color: '#7C3AED' }}>Growth Capital</span></h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
                            <div>
                                <div style={{ marginBottom: '3rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                                        <label style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A' }}>Desired Funding</label>
                                        <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#7C3AED' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={1000000} max={50000000} step={1000000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="startup-thumb" style={sliderStyle(((loanAmount - 1000000) / 49000000) * 100, '#8B5CF6')} />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                                        <label style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A' }}>Revenue Share (%)</label>
                                        <span style={{ fontWeight: 900, fontSize: '1.25rem', color: '#7C3AED' }}>{repaymentPct}%</span>
                                    </div>
                                    <input type="range" min={1} max={15} step={0.5} value={repaymentPct} onChange={e => setRepaymentPct(+e.target.value)} className="startup-thumb" style={sliderStyle(((repaymentPct - 1) / 14) * 100, '#8B5CF6')} />
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#6B7280', fontStyle: 'italic' }}>* Representative revenue share model for high-growth SaaS and E-commerce.</p>
                            </div>
                            <div style={{ background: '#F5F3FF', padding: '3rem', borderRadius: '32px', textAlign: 'center', border: '1px solid #DDD6FE' }}>
                                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#6D28D9', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>Estimated Total Repayment</div>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', marginBottom: '2.5rem' }}>{formatCurrency(loanAmount * 1.2)}</div>
                                <ul style={{ textAlign: 'left', margin: '0 0 2.5rem', listStyle: 'none', padding: 0 }}>
                                    <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center', fontSize: '1.1rem', color: '#4B5563' }}>
                                        <Zap size={18} color="#7C3AED" /> No Personal Guarantee
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center', fontSize: '1.1rem', color: '#4B5563' }}>
                                        <Zap size={18} color="#7C3AED" /> No Collateral Required
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.1rem', color: '#4B5563' }}>
                                        <Zap size={18} color="#7C3AED" /> Zero Hidden Charges
                                    </li>
                                </ul>
                                <Link href="/apply" style={{ background: '#7C3AED', color: '#fff', fontWeight: 800, padding: '1.25rem', borderRadius: '16px', textDecoration: 'none', display: 'block', fontSize: '1.1rem' }}>Unlock My Growth Funding</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section style={{ padding: '8rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.75rem', fontWeight: 900, textAlign: 'center', marginBottom: '6rem' }}>From Application to <span style={{ color: '#7C3AED' }}>Funds in 48h</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '2rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.4)' }}>{s.num}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>{s.title}</h3>
                                <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '8rem 1.5rem', background: '#0F172A', textAlign: 'center', color: '#fff' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>Ready to Take Off?</h2>
                <p style={{ color: '#94A3B8', fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto 4rem', lineHeight: 1.6 }}>Join the next generation of Indian startups scaling without dilution.</p>
                <Link href="/apply" style={{ background: '#7C3AED', color: '#fff', fontWeight: 800, padding: '1.5rem 4rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem' }}>
                    Start My Funding Journey <ArrowRight size={24} />
                </Link>
            </section>
        </div>
    );
}
