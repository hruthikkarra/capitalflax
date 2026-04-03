"use client";

const testimonials = [
    {
        quote: '"Capital Flax understood my practice income structure perfectly. Got a ₹2 Cr home loan approved in just 60 hours with minimal documentation. Highly recommend for fellow doctors!"',
        badge: 'Approved in 60 hours',
        name: 'Dr. Rajesh Kumar',
        role: 'Cardiologist • Mumbai',
        loan: 'Home Loan • ₹2 Crore',
        initial: 'R',
        avatarBg: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    },
    {
        quote: '"As a self-employed CA, getting competitive loan rates was always challenging. Capital Flax made it effortless. Their team knows how to assess firm revenue properly. Best rates in the market!"',
        badge: 'Best rates for self-employed',
        name: 'CA Priya Shah',
        role: 'Chartered Accountant • Delhi',
        loan: 'Business Loan • ₹1.8 Crore',
        initial: 'P',
        avatarBg: 'linear-gradient(135deg, #B45309 0%, #F59E0B 100%)',
    },
    {
        quote: '"Finally, a lender who understands project-based income! Capital Flax approved my loan based on my portfolio of ongoing projects. No hassle, transparent process, excellent service throughout."',
        badge: 'Project income accepted',
        name: 'Architect Amit Patel',
        role: 'Principal Architect • Ahmedabad',
        loan: 'Professional Loan • ₹75 Lakhs',
        initial: 'A',
        avatarBg: 'linear-gradient(135deg, #065F46 0%, #10B981 100%)',
    },
];

const Star = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const Check = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export default function Testimonials() {
    return (
        <section style={{
            padding: '6rem 1rem',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px' }}>
                <span style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#64748B',
                    background: '#F1F5F9',
                    borderRadius: '999px',
                    padding: '0.4rem 1rem',
                    marginBottom: '1.25rem',
                }}>SUCCESS STORIES</span>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.15,
                    letterSpacing: '-1px',
                    margin: '0 0 1rem',
                }}>
                    Trusted by <span style={{ color: '#3B82F6' }}>10,000+ Professionals</span>
                </h2>
                <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                    Real experiences from doctors, CAs, and architects who've achieved their financial goals with Capital Flax
                </p>
            </div>

            {/* Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '3rem',
            }}>
                {testimonials.map((t, i) => (
                    <div key={i} style={{
                        background: '#fff',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '2rem',
                        boxShadow: '0 4px 24px -4px rgba(0,0,0,0.07)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.1rem',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px -8px rgba(0,0,0,0.13)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px -4px rgba(0,0,0,0.07)';
                        }}>
                        {/* Stars */}
                        <div style={{ display: 'flex', gap: '3px' }}>
                            {[...Array(5)].map((_, s) => <Star key={s} />)}
                        </div>

                        {/* Quote */}
                        <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                            {t.quote}
                        </p>

                        {/* Badge */}
                        <div>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                background: '#F0FDF4',
                                color: '#16A34A',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                padding: '0.3rem 0.75rem',
                                borderRadius: '999px',
                            }}>
                                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A', display: 'inline-block' }} />
                                {t.badge}
                            </span>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: '#F1F5F9' }} />

                        {/* Author */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                background: t.avatarBg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                flexShrink: 0,
                            }}>
                                {t.initial}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.9rem' }}>{t.name}</div>
                                <div style={{ color: '#94A3B8', fontSize: '0.8rem', marginTop: '1px' }}>{t.role}</div>
                                <div style={{ color: '#3B82F6', fontSize: '0.8rem', fontWeight: 600, marginTop: '2px' }}>{t.loan}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Row */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0',
                maxWidth: '750px',
                width: '100%',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                boxShadow: '0 4px 20px -4px rgba(0,0,0,0.06)',
                textAlign: 'center',
            }}>
                {[
                    { value: '10,000+', label: 'HAPPY CLIENTS' },
                    { value: '4.9/5', label: 'AVERAGE RATING' },
                    { value: '₹500+ Cr', label: 'LOANS DISBURSED' },
                ].map((s, i) => (
                    <div key={i} style={{
                        borderRight: i < 2 ? '1px solid #E2E8F0' : 'none',
                        padding: '0 1.5rem',
                    }}>
                        <span style={{
                            display: 'block',
                            fontSize: '2rem',
                            fontWeight: 800,
                            color: '#0F172A',
                            letterSpacing: '-1px',
                            marginBottom: '0.35rem',
                        }}>{s.value}</span>
                        <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            color: '#94A3B8',
                            textTransform: 'uppercase',
                        }}>{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
