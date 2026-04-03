"use client";
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function ServicesCTA() {
    return (
        <section style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                <div style={{
                    background: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '3.5rem 2.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 40px -8px rgba(0,0,0,0.08)',
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.5px',
                        margin: '0 0 1rem',
                        lineHeight: 1.2,
                    }}>
                        Ready to Find Your Perfect Loan?
                    </h2>
                    <p style={{
                        color: '#64748B',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        margin: '0 0 2.5rem',
                        maxWidth: '480px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        Join 10,000+ professionals who trust Capital Flax for their financial needs.
                        Apply now and get approval in 72 hours.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        {/* Apply Now button */}
                        <Link
                            href="/apply"
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
                                transition: 'background 0.2s, transform 0.2s',
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
                            Apply Now <ArrowRight size={16} />
                        </Link>

                        {/* Talk to Expert button */}
                        <Link
                            href="#"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                background: 'transparent',
                                color: '#1E3A8A',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                padding: '0.85rem 2rem',
                                borderRadius: '50px',
                                border: '2px solid #1E3A8A',
                                textDecoration: 'none',
                                transition: 'background 0.2s, color 0.2s, transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLAnchorElement).style.background = '#1E3A8A';
                                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                (e.currentTarget as HTMLAnchorElement).style.color = '#1E3A8A';
                                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                            }}
                        >
                            Talk to Expert <Phone size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
