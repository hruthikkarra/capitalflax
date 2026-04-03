"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const criteria = [
    {
        title: 'Age Requirements',
        summary: '21-65 years at the time of application',
        bullets: [
            'Minimum age: 21 years (at loan application)',
            'Maximum age: 65 years (at loan maturity)',
            'Co-applicants can extend age limit in some cases',
            'Age proof required: Aadhaar, PAN, Passport, or Driving License',
        ],
    },
    {
        title: 'Income Requirements',
        summary: 'Minimum ₹50,000/month (salaried), ₹3L+ annual (self-employed)',
        bullets: [
            'Salaried: Minimum ₹50,000 monthly income',
            'Self-employed: Minimum ₹3 Lakhs annual income',
            'Income proof: Last 6 months salary slips / 2 years ITR',
            'Bank statements: Last 6 months required',
        ],
    },
    {
        title: 'Credit Score',
        summary: '700+ preferred for best rates',
        bullets: [
            'Ideal credit score: 750 and above',
            'Minimum acceptable: 650 (with higher interest)',
            'Score 700-750: Standard interest rates',
            'Below 650: Case-by-case evaluation required',
        ],
    },
    {
        title: 'Employment History',
        summary: '2+ years experience in current field',
        bullets: [
            'Salaried: Minimum 2 years total experience',
            'Self-employed: Minimum 3 years in business',
            'Current employer: At least 1 year (salaried)',
            'Business continuity: 2+ years for professionals',
        ],
    },
    {
        title: 'Documentation',
        summary: 'KYC, income proof, bank statements (last 6 months)',
        bullets: [
            'Valid KYC: Aadhaar Card + PAN Card mandatory',
            'Income proof: Salary slips (last 6 months) or ITR (last 2 years)',
            'Bank statements: Last 6 months for all accounts',
            'Professionals: Degree certificate or practice registration',
        ],
    },
];

export default function EligibilityCriteria() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

    return (
        <section style={{ padding: '5rem 1rem', background: '#F8FAFC', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', margin: '0 0 0.75rem' }}>
                        Eligibility <span style={{ color: '#3B82F6' }}>Criteria</span>
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>Check if you meet our transparent requirements</p>
                </div>

                {/* Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    {criteria.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    border: `1px solid ${isOpen ? '#BFDBFE' : '#E2E8F0'}`,
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                    boxShadow: isOpen ? '0 4px 16px -4px rgba(59,130,246,0.1)' : 'none',
                                }}
                            >
                                {/* Clickable header */}
                                <button
                                    onClick={() => toggle(i)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1.25rem 1.5rem',
                                        background: 'none',
                                        border: 'none',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        gap: '1rem',
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: '0.2rem' }}>
                                            {item.title}
                                        </div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748B' }}>{item.summary}</div>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        style={{
                                            color: '#3B82F6',
                                            flexShrink: 0,
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                </button>

                                {/* Expanded detail */}
                                <div style={{
                                    maxHeight: isOpen ? '400px' : '0px',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.35s ease',
                                }}>
                                    <div style={{
                                        padding: '0 1.5rem 1.5rem',
                                        borderTop: '1px solid #F1F5F9',
                                        paddingTop: '1.25rem',
                                    }}>
                                        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                            {item.bullets.map((b, j) => (
                                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B82F6', flexShrink: 0, marginTop: '7px', display: 'inline-block' }} />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Card */}
                <div style={{
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 24px -4px rgba(0,0,0,0.06)',
                }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#0F172A', margin: '0 0 0.75rem' }}>
                        Not Sure if You Qualify?
                    </h3>
                    <p style={{ color: '#64748B', fontSize: '0.95rem', margin: '0 0 2rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Our advisors can help you understand your eligibility and suggest the best loan product for your situation.
                    </p>
                    <Link
                        href="#"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: '#F59E0B',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            padding: '0.85rem 2rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#D97706';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.background = '#F59E0B';
                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                        }}
                    >
                        Check Your Eligibility <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
