'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="navbar-wrapper">
            <div className="navbar">
                <div className="logo">
                    <div className="logo-icon">CF</div>
                    <span className="logo-text">Capital<span className="text-orange">Flax</span></span>
                </div>
                <nav className="nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link href="/professionals" className={pathname === '/professionals' ? 'active' : ''}>Professionals</Link>
                    <Link href="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                </nav>
                <Link href="/apply" className="btn btn-apply">APPLY NOW</Link>
            </div>
        </header>
    );
}
