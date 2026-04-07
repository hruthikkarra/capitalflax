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
                <Link href="/" className="logo nav-logo" style={{ textDecoration: 'none' }}>
                    <img src="/capital-logo-Photoroom.png?v=2" alt="CapitalFlax Symbol" className="nav-logo-image" />
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
