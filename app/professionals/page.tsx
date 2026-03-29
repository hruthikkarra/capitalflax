import Link from 'next/link';
import { ArrowRight, Heart, Calculator, Building2, Check } from 'lucide-react';
import FAQSection from '../components/FAQSection';

export default function ProfessionalsPage() {
    return (
        <div style={{ paddingTop: '5rem' }}>

            {/* Hero Header */}
            <section style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', padding: '5rem 1rem 4rem', textAlign: 'center' }}>
                <span className="section-label">TAILORED FOR YOUR PROFESSION</span>
                <h1 className="section-title" style={{ marginTop: '0.75rem' }}>
                    Built for <span className="text-primary-blue">Professionals</span>
                </h1>
                <p className="section-subtitle">
                    We understand your unique income patterns and professional requirements. Get<br />
                    loans designed specifically for your profession.
                </p>
            </section>

            {/* Profession Cards */}
            <section className="professionals-section" style={{ background: '#fff' }}>
                <div className="cards-grid">

                    {/* Doctors Card */}
                    <div className="prof-card">
                        <div className="icon-badge red-badge">
                            <Heart className="prof-icon red-icon" />
                        </div>
                        <h3 className="prof-title">Doctors</h3>
                        <p className="prof-category">HEALTHCARE PROFESSIONALS</p>
                        <ul className="prof-features">
                            <li>
                                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                                <span>Flexible documentation for private practice income</span>
                            </li>
                            <li>
                                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                                <span>Higher loan amounts based on specialization</span>
                            </li>
                            <li>
                                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                                <span>Fast-track approval for medical professionals</span>
                            </li>
                            <li>
                                <div className="check-circle red-bg"><Check className="check-icon" /></div>
                                <span>Special rates for MBBS, MD, MS qualified</span>
                            </li>
                        </ul>
                        <Link href="/professionals/doctors" className="prof-link red-link">
                            LEARN MORE <ArrowRight className="link-icon" />
                        </Link>
                    </div>

                    {/* CAs Card */}
                    <div className="prof-card">
                        <div className="icon-badge blue-badge">
                            <Calculator className="prof-icon blue-icon" />
                        </div>
                        <h3 className="prof-title">Chartered Accountants</h3>
                        <p className="prof-category">FINANCIAL EXPERTS</p>
                        <ul className="prof-features">
                            <li>
                                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                                <span>Loan assessment based on firm revenue</span>
                            </li>
                            <li>
                                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                                <span>Minimal documentation for established CAs</span>
                            </li>
                            <li>
                                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                                <span>Overdraft facilities for working capital</span>
                            </li>
                            <li>
                                <div className="check-circle blue-bg"><Check className="check-icon" /></div>
                                <span>Tax benefits consultation included</span>
                            </li>
                        </ul>
                        <Link href="/professionals/chartered-accountants" className="prof-link blue-link">
                            LEARN MORE <ArrowRight className="link-icon" />
                        </Link>
                    </div>

                    {/* Architects Card */}
                    <div className="prof-card">
                        <div className="icon-badge green-badge">
                            <Building2 className="prof-icon green-icon" />
                        </div>
                        <h3 className="prof-title">Architects</h3>
                        <p className="prof-category">DESIGN PROFESSIONALS</p>
                        <ul className="prof-features">
                            <li>
                                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                                <span>Project-based income assessment accepted</span>
                            </li>
                            <li>
                                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                                <span>Collateral-free loans up to ₹50L</span>
                            </li>
                            <li>
                                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                                <span>Equipment finance options available</span>
                            </li>
                            <li>
                                <div className="check-circle green-bg"><Check className="check-icon" /></div>
                                <span>Flexible EMI during project gaps</span>
                            </li>
                        </ul>
                        <Link href="/professionals/architects" className="prof-link green-link">
                            LEARN MORE <ArrowRight className="link-icon" />
                        </Link>
                    </div>
                </div>

                <div className="section-footer">
                    <p>Don&#39;t see your profession listed? We serve all high-income professionals.</p>
                    <Link href="/apply" className="footer-link">
                        Apply Now <ArrowRight className="link-icon" />
                    </Link>
                </div>
            </section>

            {/* Why Choose Us — extra value section */}
            <section style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                    <span className="section-label">WHY CAPITALFLAX</span>
                    <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                        Why Professionals <span className="text-primary-blue">Choose Us</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '3rem', textAlign: 'left' }}>
                        {[
                            { icon: '⚡', title: '72-Hour Approval', desc: 'Fast-track processing with dedicated relationship managers.' },
                            { icon: '📄', title: 'Minimal Docs', desc: 'Simplified documentation keeping professionals in mind.' },
                            { icon: '💰', title: 'Best Rates', desc: 'Access rates from 15+ banks — we find the best match for you.' },
                            { icon: '🔒', title: 'Secure & Private', desc: '256-bit SSL encryption. Your data is always safe with us.' },
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px -4px rgba(0,0,0,0.05)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{item.title}</div>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            {/* PROFESSIONAL LOAN FAQS */}
            <FAQSection
                title="Professional Loan — Frequently Asked Questions"
                subtitle="Answers to common questions from doctors, CAs, and architects"
                background="#F8FAFC"
                faqs={[
                    { question: 'Who qualifies as a professional for these loans?', answer: 'We serve MBBS/MD/MS doctors, Chartered Accountants (CA/CMA), Architects, Lawyers (LLB/LLM), Engineers, MBA graduates, and other qualified professionals with verifiable income.' },
                    { question: 'Can a newly qualified doctor or CA get a professional loan?', answer: 'Yes, freshly qualified professionals may be eligible with a strong CIBIL score (700+). We evaluate the potential earning capacity of your profession in addition to current income.' },
                    { question: 'What makes professional loans different from regular personal loans?', answer: 'Professional loans are tailored to the income patterns of qualified professionals — higher loan amounts, more flexible documentation, lower interest rates, and income assessment based on professional credentials rather than just salary slips.' },
                    { question: 'Can I use a professional loan to set up my clinic or office?', answer: 'Absolutely. Professional loans can be used for clinic setup, office interior, medical equipment, IT infrastructure, practice expansion, or any professional establishment purpose.' },
                    { question: 'Is there any restriction on how I use the loan amount?', answer: 'No. Professional loans from CapitalFlax have no end-use restriction. You can use the funds for practice setup, home purchase, personal use, or business expansion — whatever your professional need.' },
                    { question: 'Do I need a co-applicant for a professional loan?', answer: 'Generally, no. Most professional loans are standalone. However, adding a co-applicant with additional income can enhance your loan eligibility and may unlock better interest rates.' },
                ]}
            />

            {/* CTA Banner */}
            <section style={{ padding: '4rem 1rem', background: '#1E3A8A', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem' }}>
                    Ready to Get Started?
                </h2>
                <p style={{ color: '#BFDBFE', fontSize: '1rem', margin: '0 0 2.5rem' }}>
                    Join 10,000+ professionals who trust CapitalFlax for their financial needs.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#F59E0B', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
}
