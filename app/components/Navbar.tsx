'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const PHONE_DISPLAY = '+91 99856 81944';
const PHONE_TEL = '+919985681944';

export default function Navbar() {
    const pathname = usePathname();

    const isHome = pathname === '/';

    return (
        <header className={`navbar-wrapper${isHome ? ' navbar-wrapper--home' : ''}`}>
            <div className={`navbar${isHome ? ' navbar--home' : ''}`}>
                <Link href="/" className="logo" style={{ textDecoration: 'none', background: '#0F172A', padding: '0.4rem 0.8rem', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.png" alt="CapitalFlax Logo" style={{ height: '36px', width: 'auto' }} />
                </Link>
                <nav className="nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
                    <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
                    <span className="nav-contact-inline">
                        <Link href="/apply" className={pathname === '/apply' ? 'active' : ''}>
                            Contact Us
                        </Link>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="nav-phone-link"
                            aria-label={`Call ${PHONE_DISPLAY}`}
                        >
                            <Phone className="nav-phone-link-icon" size={15} strokeWidth={2} aria-hidden />
                            <span className="nav-phone-link-number">{PHONE_DISPLAY}</span>
                        </a>
                    </span>
                </nav>
                <div className="nav-right">
                    <Link href="/apply" className="btn btn-apply">APPLY NOW</Link>
                </div>
            </div>
        </header>
    );
}
