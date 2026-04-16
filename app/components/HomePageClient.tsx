"use client";
import React from 'react';
import HeroSlider from './HeroSlider';
import Testimonials from './Testimonials';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomePageClient() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero Slider as a secondary visual element or below the main H1 Hero */}
      {/* Actually, the user asked for a specific Hero section at the top. 
          I already put that in page.tsx. I will keep the HeroSlider as a visual story below. */}
      
      <HeroSlider className="hero-slider--fixed-nav-offset" />

      {/* PARTNERS SECTION */}
      <section className="partners-section" style={{ padding: '6rem 1.5rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            color: '#3B82F6', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem'
          }}>OUR PARTNERS</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '1.5rem' }}>
            Trusted by India's <span style={{ color: '#3B82F6' }}>Leading Banks</span>
          </h2>
          <p style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
            We work with 15+ premier banking institutions and NBFCs to ensure you get the lowest interest rates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', opacity: 0.7 }}>
             {/* Note: Logos are handled via the CSS partners-section animations usually, 
                 but I will ensure this section remains clean and professional. */}
             <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#94A3B8' }}>HDFC BANK</div>
             <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#94A3B8' }}>ICICI BANK</div>
             <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#94A3B8' }}>AXIS BANK</div>
             <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#94A3B8' }}>SBI</div>
             <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#94A3B8' }}>BAJAJ FINSERV</div>
          </div>

          <div style={{ marginTop: '5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', border: '1px solid #E2E8F0', padding: '0.75rem 1.5rem', borderRadius: '50px' }}>
            <ShieldCheck size={20} color="#10B981" />
            <span style={{ fontWeight: 700, color: '#0F172A' }}>100% Secure RBI Registered Partners</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <section style={{ padding: '8rem 1.5rem', textAlign: 'center', background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: '#fff' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Ready to Grow Your Business?</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '4rem', opacity: 0.9 }}>Get your business loan sanctioned in 48 hours with CapitalFlax.</p>
        <Link href="/apply" style={{ background: '#fff', color: '#2563EB', fontWeight: 900, padding: '1.25rem 3.5rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          Start Your Application <ArrowRight size={24} />
        </Link>
      </section>
    </div>
  );
}
