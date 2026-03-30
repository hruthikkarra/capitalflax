"use client";
import Link from 'next/link';
import { Briefcase, ArrowRight, HeartPulse, GraduationCap, Laptop, ChevronRight } from 'lucide-react';

const positions = [
    { title: 'Credit Analyst - Mortgages', dept: 'Credit & Risk', exp: '3-5 years', location: 'Hyderabad / Remote' },
    { title: 'Senior Relationship Manager', dept: 'Sales', exp: '5+ years', location: 'Bengaluru / Hybrid' },

    { title: 'Operations Lead - Gold Loans', dept: 'Operations', exp: '4-7 years', location: 'Chennai' },
];

export default function CareersPage() {
    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)', padding: '5rem 1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', margin: '0 0 1rem' }}>
                    Join <span style={{ color: '#D97706' }}>CapitalFlax</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                    We're building the most transparent, fast, and professional lending platform in India. Join us in transforming how professionals access capital.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#open-roles" style={{ background: '#D97706', color: '#fff', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        View Open Roles <ArrowRight size={16} />
                    </a>
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>Why Work With Us?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', background: '#EFF6FF', padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}><HeartPulse size={28} color="#1E3A8A" /></div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Full Health Coverage</h3>
                            <p style={{ color: '#64748B', margin: 0 }}>Comprehensive medical, dental, and vision insurance for you and your dependents.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', background: '#F0FDF4', padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}><Laptop size={28} color="#16A34A" /></div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Flexible Setup</h3>
                            <p style={{ color: '#64748B', margin: 0 }}>Hybrid and remote options with a generous home-office setup stipend.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                            <div style={{ display: 'inline-flex', background: '#FFFBEB', padding: '1rem', borderRadius: '50%', marginBottom: '1.25rem' }}><GraduationCap size={28} color="#D97706" /></div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Learning Budget</h3>
                            <p style={{ color: '#64748B', margin: 0 }}>Annual allowance for courses, certifications, and industry conferences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN ROLES */}
            <section id="open-roles" style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>Open Positions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {positions.map((p, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'box-shadow 0.2s' }} 
                                 onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.05)')} 
                                 onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{p.dept}</div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: '0 0 0.5rem' }}>{p.title}</h3>
                                    <div style={{ color: '#64748B', fontSize: '0.9rem', display: 'flex', gap: '1rem' }}>
                                        <span>📍 {p.location}</span>
                                        <span>⏳ {p.exp}</span>
                                    </div>
                                </div>
                                <div style={{ background: '#F1F5F9', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem', color: '#64748B' }}>
                        Don't see a fit? Send your resume to <a href="mailto:careers@capitalflax.com" style={{ color: '#1E3A8A', fontWeight: 600 }}>careers@capitalflax.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
