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
                <Link href="/" className="logo nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <img src="/capital-logo-Photoroom.png?v=2" alt="CapitalFlax Symbol" className="nav-logo-image" />
                    <div className="nav-logo-text">
                        <span className="nav-brand-name" style={{ fontWeight: 800 }}>
                            <span style={{ color: '#ffffff' }}>Capital</span><span style={{ color: '#3B82F6' }}>Flax</span>
                        </span>
                        <span className="nav-brand-sub" style={{ display: 'block', color: '#94A3B8', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <span>—</span> FINANCIAL SERVICES <span>—</span>
                        </span>
                        <span className="nav-brand-tag" style={{ display: 'block', color: '#3B82F6', fontSize: '0.7rem', fontWeight: 600 }}>Empowering Smart Capital</span>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="nav-links">
                    {NAV_LINKS.map(l => (
                        <Link key={l.href} href={l.href} className={`
                            ${l.href === '/' ? (pathname === '/' ? 'active' : '') :
                            pathname.startsWith(l.href) ? 'active' : ''}
                            ${l.label === 'About Us' ? 'hide-on-mobile' : ''}
                        `}>{l.label}</Link>
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

                {/* MOBILE HAMBURGER — visibility controlled purely by CSS */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileOpen(o => !o)}
                    aria-label="Toggle navigation menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {mobileOpen && (
                <nav className="mobile-nav-dropdown" aria-label="Mobile navigation">
                    {NAV_LINKS.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`mobile-nav-link${
                                (l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)) ? ' active' : ''
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <a href={`tel:${PHONE_TEL}`} className="mobile-nav-link mobile-nav-phone">
                        <Phone size={16} /> {PHONE_DISPLAY}
                    </a>
                    <Link
                        href="/apply"
                        className="mobile-nav-apply"
                        onClick={() => setMobileOpen(false)}
                    >
                        Apply Now
                    </Link>
                </nav>
            )}
        </header>
    );
}
