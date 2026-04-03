"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Heart, CheckCircle, ArrowRight, ChevronDown, FileText, Shield, Zap, TrendingUp, Clock, DollarSign } from 'lucide-react';

const benefits = [
    { icon: '🏥', title: 'Clinic & Hospital Setup', desc: 'Finance your entire clinic setup, equipment, interiors, and infrastructure with a single loan.' },
    { icon: '💊', title: 'Medical Equipment Finance', desc: 'High-value diagnostic machines, surgical equipment covered. Lease or own — we manage both.' },
    { icon: '📊', title: 'Higher Loan Eligibility', desc: 'Income from private practice, salary, and consulting all counted together for max eligibility.' },
    { icon: '⚡', title: '72-Hour Fast Track', desc: 'Dedicated relationship manager. Priority processing for medical professionals registered with MCI.' },
    { icon: '📄', title: 'Flexible Documentation', desc: 'ITR, bank statements, registration certificate accepted. No rigid salaried-income requirements.' },
    { icon: '💰', title: '0% Processing Fee', desc: 'Professional loan for doctors comes with zero processing fee across all our lending partners.' },
];

const eligibility = [
    { label: 'Qualification', value: 'MBBS, MD, MS, BDS, MDS, BAMS, BHMS or equivalent' },
    { label: 'Registration', value: 'Valid MCI / State Medical Council registration' },
    { label: 'Experience', value: 'Minimum 1 year post-qualification practice or employment' },
    { label: 'Age', value: '22 to 65 years at loan maturity' },
    { label: 'CIBIL Score', value: '700+ preferred (650+ considered case-by-case)' },
    { label: 'Income', value: 'Minimum ₹60,000/month (all sources combined)' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar Card & PAN Card' },
    { icon: '🎓', label: 'Degree & Registration Certificate (MCI)' },
    { icon: '🏦', label: 'Last 6 months bank statements' },
    { icon: '📋', label: 'Last 2 years ITR with acknowledgement' },
    { icon: '📍', label: 'Clinic address proof / lease agreement' },
    { icon: '📸', label: 'Passport-size photographs' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill the quick 3-minute form with basic details and profession.' },
    { num: '02', title: 'Document Upload', desc: 'Upload degree, registration & bank statements securely.' },
    { num: '03', title: 'Credit Assessment', desc: 'Our team evaluates your profile with 15+ banking partners.' },
    { num: '04', title: 'Approval & Offer', desc: 'Best-rate offer sent within 72 hours. Digital signing.' },
    { num: '05', title: 'Disbursal', desc: 'Funds credited directly to your account. No delays.' },
];

const faqs = [
    { q: 'Can a resident doctor or intern apply for a professional loan?', a: 'Yes, doctors with at least 1 year of post-qualification experience (including residency) can apply. Fresh MBBS graduates may qualify with a co-applicant or strong credit history.' },
    { q: 'What loan amount can a doctor get from CapitalFlax?', a: 'Doctors can get loans up to ₹75 Lakhs (unsecured) and up to ₹5 Crore (for clinic/hospital property purchase). Actual amount depends on income, CIBIL score, and specialization.' },
    { q: 'Can I use the loan to buy medical equipment?', a: 'Absolutely. You can use the professional loan for any clinic-related expense — equipment, infrastructure, staff hiring, working capital, or personal needs.' },
    { q: "Is a guarantor required for a doctor's loan?", a: 'No guarantor is required for most professional loans up to ₹75 Lakhs. For higher amounts, a co-applicant with income may be needed.' },
    { q: 'Do you offer specialized home loans for doctors?', a: 'Yes. Doctors get preferential rates on home loans with flexible income assessment. Private practice income, salary, and consulting income all counted.' },
    { q: 'Can NRI doctors apply?', a: 'NRI doctors with valid Indian medical registration and income proof from abroad can apply for certain loan products through CapitalFlax.' },
];

export default function DoctorsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO */}
            <section style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #FEF2F2 50%, #FFF1F2 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)', borderRadius: '50%' }} />

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Heart size={14} style={{ color: '#EF4444' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Healthcare Professionals</span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Loans Designed for <span style={{ color: '#EF4444' }}>Doctors</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    We understand private practice income, MCI registration, and the unique financial needs of healthcare professionals. Get loans that work for you.
                </p>

                {/* Quick stats */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Max Amount', value: '₹75 Lakhs', color: '#EF4444' },
                        { label: 'Starting Rate', value: '9.0% p.a.', color: '#EF4444' },
                        { label: 'Approval', value: '72 Hours', color: '#EF4444' },
                        { label: 'Processing Fee', value: '0%', color: '#EF4444' },
                    ].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #FECACA', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center', boxShadow: '0 4px 16px -4px rgba(239,68,68,0.1)' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: s.color, letterSpacing: '-0.5px' }}>{s.value}</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EF4444', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link href="/professionals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#EF4444', border: '2px solid #FECACA', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        View All Professions
                    </Link>
                </div>
            </section>

            {/* BENEFITS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY CHOOSE US</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 1rem', letterSpacing: '-1px' }}>
                            Built for Your <span style={{ color: '#EF4444' }}>Practice</span>
                        </h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '550px', margin: '0 auto' }}>Everything a doctor needs — from clinic setup to personal finance — covered under one roof.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#FAFAFA', border: '1px solid #F1F5F9', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s', cursor: 'default' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px -8px rgba(239,68,68,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#FECACA'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = '#F1F5F9'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 24px -4px rgba(0,0,0,0.06)' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #F8FAFC' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '140px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#EF4444', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.92rem' }}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Simple 5-Step Process</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem 2rem' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #EF4444, #DC2626)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div>
                                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div>
                                    <div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem', letterSpacing: '-0.5px' }}>Doctor Loan — FAQs</h2>
                        <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>Common questions from medical professionals</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#FECACA' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#EF4444', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                                    </button>
                                    <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                                        <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}>
                                            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', textAlign: 'center' }}>
                <Heart size={40} style={{ color: '#FECACA', marginBottom: '1rem' }} />
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>
                    Ready to Fund Your Medical Practice?
                </h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>
                    Join 3,000+ doctors who trust CapitalFlax for their financial needs.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#EF4444', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now — It's Free <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
