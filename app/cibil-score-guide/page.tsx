"use client";
import Link from 'next/link';
import { TrendingUp, AlertCircle, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CibilScoreGuidePage() {
    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #BBF7D0', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <TrendingUp size={14} style={{ color: '#16A34A' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16A34A', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Ultimate Guide 2025</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', margin: '0 0 1rem' }}>
                    Master Your <span style={{ color: '#16A34A' }}>CIBIL Score</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                    Your CIBIL score is the key to unlocking the lowest interest rates in India. Learn what impacts it, and how to improve it fast.
                </p>
            </section>

            {/* SCORE RANGES */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>The CIBIL Score Spectrum</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { range: '750 - 900', grade: 'Excellent', color: '#16A34A', desc: 'Highest chance of loan approval. You get the lowest interest rates and highest loan limits. Zero processing fees on many products.' },
                            { range: '700 - 749', grade: 'Good', color: '#3B82F6', desc: 'Most standard products are available. Rates are competitive but slightly higher than the excellent tier.' },
                            { range: '650 - 699', grade: 'Fair', color: '#F59E0B', desc: 'Approvals are possible but rates will be significantly higher. NBFCs are more likely to approve than banks.' },
                            { range: 'Below 650', grade: 'Poor', color: '#EF4444', desc: 'Most unsecured loan applications will be rejected. You may need a co-applicant or collateral (like Gold or Property).' },
                        ].map((tier, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: '#F8FAFC', borderLeft: `6px solid ${tier.color}`, padding: '1.5rem 2rem', borderRadius: '0 12px 12px 0' }}>
                                <div style={{ minWidth: '150px' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: tier.color }}>{tier.range}</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#64748B', textTransform: 'uppercase' }}>{tier.grade}</div>
                                </div>
                                <div style={{ color: '#475569', lineHeight: 1.6 }}>{tier.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT AFFECTS THE SCORE */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>What Affects Your Score?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'inline-flex', background: '#FEF2F2', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}><AlertCircle size={28} color="#EF4444" /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Payment History (35%)</h3>
                            <p style={{ color: '#64748B', lineHeight: 1.6 }}>The #1 factor. A single 30-day default on an EMI or credit card can drop your score by 50-80 points instantly.</p>
                        </div>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'inline-flex', background: '#FFFBEB', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}><TrendingUp size={28} color="#F59E0B" /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Credit Utilization (30%)</h3>
                            <p style={{ color: '#64748B', lineHeight: 1.6 }}>Keep your credit card usage below 30% of your total limit. Consistently maxing out cards signals financial distress.</p>
                        </div>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'inline-flex', background: '#EEF2FF', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}><Clock size={28} color="#4F46E5" /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Credit Age (15%)</h3>
                            <p style={{ color: '#64748B', lineHeight: 1.6 }}>Lenders love a long track record. Avoid closing your oldest credit cards, as it shortens your average credit history length.</p>
                        </div>
                        <div style={{ background: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                            <div style={{ display: 'inline-flex', background: '#F0FDF4', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}><ShieldCheck size={28} color="#16A34A" /></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Credit Mix (10%)</h3>
                            <p style={{ color: '#64748B', lineHeight: 1.6 }}>A healthy mix of secured loans (home, car) and unsecured loans (personal, cards) boosts your profile.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIONABLE TIPS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>How to Improve Your Score Fast</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            'Set up auto-debit for all your EMIs and credit card minimum dues.',
                            'Do NOT apply for multiple loans simultaneously. Each hard inquiry drops your score.',
                            'If your score is very low, get a secured credit card against an FD to rebuild history safely.',
                            'Clear overdue amounts completely to get a No-Objection Certificate (NOC).',
                            'Download your free CIBIL report annually and dispute any errors immediately.'
                        ].map((tip, i) => (
                            <li key={i} style={{ display: 'flex', gap: '1.5rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', alignItems: 'flex-start' }}>
                                <div style={{ flexShrink: 0, marginTop: '2px' }}><CheckCircle size={24} color="#16A34A" /></div>
                                <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>{tip}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 1.5rem', background: '#1E3A8A', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Score above 750?</h2>
                <p style={{ fontSize: '1.1rem', color: '#BFDBFE', marginBottom: '2.5rem' }}>You qualify for our premium rates starting at just 7.3% p.a.</p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#16A34A', color: '#fff', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
                    Check Your Loan Eligibility <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
