import Link from 'next/link';

const LinkedinIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const iconStyle: React.CSSProperties = {
    color: '#94A3B8',
    cursor: 'pointer',
    transition: 'color 0.2s',
};

export default function Footer() {
    return (
        <footer style={{
            background: '#fff',
            borderTop: '1px solid #F1F5F9',
            padding: '4rem 1rem 2rem',
            fontFamily: 'inherit',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Top grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                    gap: '2.5rem',
                    marginBottom: '3rem',
                }}>
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 800,
                            fontSize: '1.25rem',
                            color: '#0F172A',
                            textDecoration: 'none',
                            marginBottom: '1rem',
                        }}>
                            <span style={{
                                background: '#1E3A8A',
                                color: '#fff',
                                width: 36,
                                height: 36,
                                borderRadius: 8,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 900,
                                fontSize: '0.85rem',
                                letterSpacing: '-1px',
                            }}>CF</span>
                            <span>Capital<span style={{ color: '#F59E0B' }}>Flax</span></span>
                        </Link>
                        <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
                            Premium financial solutions for India's top professionals.
                        </p>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: '#16A34A',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                        }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A', display: 'inline-block' }} />
                            TRUSTED BY 10,000+ PROFESSIONALS
                        </span>
                    </div>

                    {/* Services */}
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#0F172A', marginBottom: '1.25rem' }}>Services</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {[
                                { label: 'Home Loans', href: '/services/home-loans' },
                                { label: 'Personal Loans', href: '/services/personal-loans' },
                                { label: 'Business Loans', href: '/services/business-loans' },
                                { label: 'Gold Loans', href: '/services/gold-loans' },
                                { label: 'Mortgage Loans', href: '/services/mortgage-loans' }
                            ].map(l => (
                                <li key={l.label}><Link href={l.href} style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Professionals */}
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#0F172A', marginBottom: '1.25rem' }}>Professionals</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {[
                                { label: 'For Doctors', href: '/professionals/doctors' },
                                { label: 'For CAs', href: '/professionals/chartered-accountants' },
                                { label: 'For Architects', href: '/professionals/architects' }
                            ].map(l => (
                                <li key={l.label}><Link href={l.href} style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#0F172A', marginBottom: '1.25rem' }}>Company</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {[{ label: 'About Us', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'Careers', href: '/careers' }].map(l => (
                                <li key={l.label}><Link href={l.href} style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#0F172A', marginBottom: '1.25rem' }}>Resources</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            <li><Link href="/blog" style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>Blog & Guides</Link></li>
                            <li><Link href="/cibil-score-guide" style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>CIBIL Score Guide</Link></li>
                            <li><Link href="/blog/home-loan-vs-mortgage-loan-which-is-right-for-you" style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>Home Loan vs LAP</Link></li>
                            <li><Link href="/apply" style={{ color: '#64748B', fontSize: '0.9rem', textDecoration: 'none' }}>Apply Now</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8' }}>
                        © 2025 <a href="#" style={{ color: '#3B82F6', textDecoration: 'none' }}>CapitalFlax Financial Services.</a> All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                        <a href="#" aria-label="LinkedIn" style={iconStyle}><LinkedinIcon /></a>
                        <a href="#" aria-label="Twitter" style={iconStyle}><TwitterIcon /></a>
                        <a href="#" aria-label="Facebook" style={iconStyle}><FacebookIcon /></a>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link href="/privacy" style={{ fontSize: '0.85rem', color: '#64748B', textDecoration: 'none', fontWeight: 600 }}>PRIVACY POLICY</Link>
                        <Link href="/terms" style={{ fontSize: '0.85rem', color: '#64748B', textDecoration: 'none', fontWeight: 600 }}>TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
