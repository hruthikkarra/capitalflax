"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle } from 'lucide-react';

function formatINR(num: number): string {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
    return `₹${num.toLocaleString('en-IN')}`;
}

function formatCurrency(num: number): string {
    return `₹${Math.round(num).toLocaleString('en-IN')}`;
}

const features = [
    'Overdraft facility for working capital needs',
    'Equipment finance and machinery loans',
    'Business expansion and inventory funding',
    'Collateral-free loans up to ₹50 Lakhs',
    'Flexible repayment based on cash flow',
    '48-hour approval for urgent requirements',
];

export default function BusinessLoanDetail() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [tenure, setTenure] = useState(5);
    const [interestRate, setInterestRate] = useState(14);

    const ratePct = ((interestRate - 8) / (24 - 8)) * 100;

    const calcEMI = useCallback(() => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayable = emi * n;
        const totalInterest = totalPayable - loanAmount;
        return { emi, totalInterest, totalPayable };
    }, [loanAmount, tenure, interestRate]);

    const { emi, totalInterest, totalPayable } = calcEMI();

    const loanPct = ((loanAmount - 100000) / (10000000 - 100000)) * 100;
    const tenurePct = ((tenure - 1) / 6) * 100;

    const sliderStyle = (pct: number) => ({
        width: '100%',
        height: '4px',
        appearance: 'none' as const,
        background: `linear-gradient(to right, #EF4444 0%, #EF4444 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px',
        outline: 'none',
        cursor: 'pointer',
    });

    return (
        <section style={{ padding: '5rem 1rem', background: '#FAFAFA', borderTop: '1px solid #F1F5F9' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '5rem',
                alignItems: 'start',
            }}>

                {/* LEFT SIDE: Business Loan Details */}
                <div>
                    {/* Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                        <Briefcase size={32} style={{ color: '#D97706' }} />
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Business Loans</h2>
                    </div>

                    {/* Stats grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        borderTop: '1px solid #F1F5F9',
                        borderLeft: '1px solid #F1F5F9',
                        marginBottom: '2.5rem',
                    }}>
                        {[
                            { label: 'LOAN AMOUNT', value: 'Up to ₹1 Crore' },
                            { label: 'INTEREST RATE', value: 'Starting 14% p.a.' },
                            { label: 'TENURE', value: 'Up to 7 years' },
                            { label: 'PROCESSING FEE', value: '1%' },
                        ].map(s => (
                            <div key={s.label} style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #F1F5F9', borderRight: '1px solid #F1F5F9', background: '#fff' }}>
                                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.35rem' }}>{s.label}</div>
                                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A' }}>{s.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Key Features */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: '1rem' }}>Key Features</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {features.map((f, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#475569', fontSize: '0.92rem' }}>
                                    <CheckCircle size={18} style={{ color: '#D97706', flexShrink: 0, marginTop: '1px' }} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                        Apply for Business Loans →
                    </Link>
                </div>

                {/* RIGHT SIDE: Sticky EMI Calculator */}
                <div style={{ position: 'sticky', top: '90px' }}>
                    <div style={{
                        background: '#fff',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '2.5rem',
                        boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)',
                    }}>
                        <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0F172A', marginBottom: '2rem' }}>EMI Calculator</h3>

                        <style>{`
              .biz-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #EF4444;
                cursor: pointer;
                border: 2px solid #fff;
                box-shadow: 0 0 0 2px #EF4444;
              }
              .biz-slider::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #EF4444;
                cursor: pointer;
                border: 2px solid #fff;
              }
            `}</style>

                        {/* Loan Amount */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount (₹)</label>
                                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E3A8A' }}>{formatINR(loanAmount)}</span>
                            </div>
                            <input
                                type="range"
                                min={100000}
                                max={10000000}
                                step={100000}
                                value={loanAmount}
                                onChange={e => setLoanAmount(Number(e.target.value))}
                                className="biz-slider"
                                style={sliderStyle(loanPct)}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>₹1L</span>
                                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>₹1Cr</span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure (Years)</label>
                                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E3A8A' }}>{tenure} {tenure === 1 ? 'Year' : 'Years'}</span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={7}
                                step={1}
                                value={tenure}
                                onChange={e => setTenure(Number(e.target.value))}
                                className="biz-slider"
                                style={sliderStyle(tenurePct)}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>1 Year</span>
                                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>7 Years</span>
                            </div>
                        </div>

                        {/* Interest Rate - Adjustable */}
                        <div style={{ background: '#FEF3C7', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.85rem', color: '#92400E', fontWeight: 600 }}>Interest Rate</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#92400E' }}>{interestRate.toFixed(1)}% p.a.</span>
                            </div>
                            <input type="range" min={8} max={24} step={0.1} value={interestRate}
                                onChange={e => setInterestRate(Number(e.target.value))}
                                className="biz-slider" style={sliderStyle(ratePct)} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                                <span style={{ fontSize: '0.78rem', color: '#92400E', opacity: 0.6 }}>8%</span>
                                <span style={{ fontSize: '0.78rem', color: '#92400E', opacity: 0.6 }}>24%</span>
                            </div>
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.75rem', color: '#94A3B8', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>* Interest rate depend upon on your profile</p>
                        </div>

                        {/* Results */}
                        <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: '#64748B' }}>Monthly EMI</span>
                                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>{formatCurrency(emi)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: '#64748B' }}>Total Interest</span>
                                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#475569' }}>{formatCurrency(totalInterest)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.9rem', color: '#64748B' }}>Total Amount</span>
                                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#475569' }}>{formatCurrency(totalPayable)}</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link href="#" style={{
                            display: 'block',
                            textAlign: 'center',
                            background: '#1E3A8A',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            padding: '1rem',
                            borderRadius: '10px',
                            textDecoration: 'none',
                        }}
                            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1e40af'}
                            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#1E3A8A'}>
                            Get Detailed Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
