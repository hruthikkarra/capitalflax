'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const PHONE_DISPLAY = '+91 99856 81944';
const PHONE_TEL = '+919985681944';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/apply', label: 'Contact Us' },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={`navbar-wrapper${isHome ? ' navbar-wrapper--home' : ''}`}>
            <div className={`navbar${isHome ? ' navbar--home' : ''}`}>

                {/* LOGO */}
                <Link href="/" className="logo nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <img src="/capital-logo-Photoroom.png?v=2" alt="CapitalFlax Symbol" className="nav-logo-image" />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                        <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.3px' }}>
                            <span style={{ color: '#ffffff' }}>Capital</span><span style={{ color: '#3B82F6' }}>Flax</span>
                        </span>
                        <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '1.5px', color: '#94A3B8', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <span>—</span><span>Financial Services</span><span>—</span>
                        </span>
                        <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#3B82F6', letterSpacing: '0.3px' }}>Empowering Smart Capital</span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="nav-links">
                    {NAV_LINKS.map(l => (
                        <Link key={l.href} href={l.href} className={
                            l.href === '/' ? (pathname === '/' ? 'active' : '') :
                            pathname.startsWith(l.href) ? 'active' : ''
                        }>{l.label}</Link>
                    ))}
                    <a href={`tel:${PHONE_TEL}`} className="nav-phone-link" aria-label={`Call ${PHONE_DISPLAY}`}>
                        <Phone className="nav-phone-link-icon" size={15} strokeWidth={2} aria-hidden />
                        <span className="nav-phone-link-number">{PHONE_DISPLAY}</span>
                    </a>
                </nav>

                {/* DESKTOP APPLY BTN */}
                <div className="nav-right">
                    <Link href="/apply" className="btn btn-apply">APPLY NOW</Link>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(o => !o)}
                    aria-label="Toggle menu"
                    style={{
                        display: 'none',
                        background: 'rgba(59,130,246,0.15)',
                        border: '1px solid rgba(59,130,246,0.35)',
                        borderRadius: '8px',
                        padding: '0.45rem 0.6rem',
                        cursor: 'pointer',
                        color: '#e2e8f0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '38px',
                    }}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {mobileOpen && (
                <div style={{
                    background: 'rgba(2,6,23,0.98)',
                    borderTop: '1px solid rgba(51,65,85,0.6)',
                    padding: '1rem 1.25rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}>
                    {NAV_LINKS.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                display: 'block',
                                padding: '0.9rem 0.5rem',
                                borderBottom: '1px solid rgba(51,65,85,0.3)',
                                color: pathname.startsWith(l.href) && (l.href !== '/' || pathname === '/') ? '#60A5FA' : '#e2e8f0',
                                fontWeight: 700,
                                fontSize: '0.97rem',
                                textDecoration: 'none',
                                letterSpacing: '0.02em',
                                transition: 'color 0.2s',
                            }}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <a
                        href={`tel:${PHONE_TEL}`}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.6rem',
                            padding: '0.9rem 0.5rem',
                            borderBottom: '1px solid rgba(51,65,85,0.3)',
                            color: '#60A5FA', fontWeight: 700, fontSize: '0.95rem',
                            textDecoration: 'none',
                        }}
                    >
                        <Phone size={16} /> {PHONE_DISPLAY}
                    </a>
                    <Link
                        href="/apply"
                        onClick={() => setMobileOpen(false)}
                        style={{
                            display: 'block', marginTop: '1rem',
                            background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                            color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                            padding: '0.9rem', borderRadius: '10px',
                            textDecoration: 'none', textAlign: 'center',
                            letterSpacing: '0.9px', textTransform: 'uppercase',
                        }}
                    >
                        Apply Now
                    </Link>
                </div>
            )}
        </header>
    );
}
