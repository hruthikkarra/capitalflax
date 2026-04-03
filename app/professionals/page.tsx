import Link from 'next/link';
import { ArrowRight, Heart, Calculator, Building2, Check } from 'lucide-react';
import FAQSection from '../components/FAQSection';

export default function ProfessionalsPage() {
    return (
        <div style={{ paddingTop: '5rem' }}>

            {/* Premium Hero Header with Professional Composite Background */}
            <section style={{ 
                position: 'relative',
                padding: '8.5rem 1rem 7.5rem', 
                textAlign: 'center',
                overflow: 'hidden',
                color: '#fff',
                background: '#0F172A'
            }}>
                {/* Background Image: A sophisticated, wide professional workspace */}
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop")', // Stable Modern Office
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.4'
                }}></div>
                
                {/* Secondary Background Layer for 'Composite' Feel (Architectural/Detail) */}
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop")', // Architect vibe
                    backgroundSize: '40% auto',
                    backgroundPosition: 'right bottom',
                    backgroundRepeat: 'no-repeat',
                    opacity: '0.15',
                    filter: 'grayscale(100%)'
                }}></div>

                {/* Dark Gradient Overlay */}
                <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 100%)'
                }}></div>

                <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <span className="section-label" style={{ color: '#BFDBFE', border: '1px solid rgba(191, 219, 254, 0.4)', background: 'rgba(59, 130, 246, 0.1)' }}>TAILORED FOR THE BRAVEST & BRIGHTEST</span>
                    <h1 className="section-title" style={{ marginTop: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', letterSpacing: '-2px' }}>
                        Built for <span style={{ color: '#60A5FA' }}>Elite Professionals</span>
                    </h1>
                    <p className="section-subtitle" style={{ fontSize: '1.25rem', color: '#CBD5E1', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        Specialized financial pathways for Doctors, CAs, and Architects. Get preferential interest rates and 72-hour fast-track approval.
                    </p>
                </div>
            </section>



            {/* Profession Cards — Services-style layout */}
            <section className="solutions-section" style={{ background: '#fff' }}>
                <div className="solutions-grid">

                    {/* Doctors Card */}
                    <div className="solution-card" style={{ padding: 0 }}>
                        <div className="card-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop"
                                alt="Doctors"
                                className="card-img"
                            />
                            <div className="card-img-overlay"></div>
                            <div className="solution-icon-wrapper" style={{ background: '#FEE2E2', position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                                <Heart className="solution-icon" style={{ color: '#DC2626' }} />
                            </div>
                        </div>
                        <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
                            <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Doctors</h3>
                            <p className="solution-category">HEALTHCARE EXPERTS</p>
                            <div className="solution-details">
                                <div className="detail-row">
                                    <span className="detail-label">Loan Up To:</span>
                                    <span className="detail-value text-dark fw-700">₹75 Lakhs</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Rate:</span>
                                    <span className="detail-value text-dark fw-700">9.0% onwards</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Key Feature:</span>
                                    <span className="detail-value fw-700" style={{ color: '#DC2626' }}>0% Processing Fee</span>
                                </div>
                            </div>
                            <p className="solution-desc">Special rates for MBBS, MD & MS qualified doctors. Fast-track 72-hour approval with flexible documentation for private practices.</p>
                            <Link href="/professionals/doctors" className="prof-link red-link" style={{ fontWeight: 800 }}>
                                LEARN MORE <ArrowRight className="link-icon" />
                            </Link>
                        </div>
                    </div>

                    {/* CAs Card */}
                    <div className="solution-card" style={{ padding: 0 }}>
                        <div className="card-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
                                alt="Chartered Accountants"
                                className="card-img"
                            />
                            <div className="card-img-overlay"></div>
                            <div className="solution-icon-wrapper" style={{ background: '#DBEAFE', position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                                <Calculator className="solution-icon" style={{ color: '#2563EB' }} />
                            </div>
                        </div>
                        <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
                            <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Chartered Accountants</h3>
                            <p className="solution-category">FINANCIAL EXPERTS</p>
                            <div className="solution-details">
                                <div className="detail-row">
                                    <span className="detail-label">Loan Up To:</span>
                                    <span className="detail-value text-dark fw-700">₹75 Lakhs</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Rate:</span>
                                    <span className="detail-value text-dark fw-700">9.5% onwards</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Key Feature:</span>
                                    <span className="detail-value fw-700" style={{ color: '#2563EB' }}>No Collateral</span>
                                </div>
                            </div>
                            <p className="solution-desc">Loan assessment based on professional credentials & firm revenue. Overdraft facilities for working capital with minimal documentation.</p>
                            <Link href="/professionals/chartered-accountants" className="prof-link blue-link" style={{ fontWeight: 800, color: '#2563EB' }}>
                                LEARN MORE <ArrowRight className="link-icon" />
                            </Link>
                        </div>
                    </div>

                    {/* Architects Card */}
                    <div className="solution-card" style={{ padding: 0 }}>
                        <div className="card-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
                                alt="Architects"
                                className="card-img"
                            />
                            <div className="card-img-overlay"></div>
                            <div className="solution-icon-wrapper" style={{ background: '#D1FAE5', position: 'absolute', bottom: '-24px', left: '24px', zIndex: 2 }}>
                                <Building2 className="solution-icon" style={{ color: '#059669' }} />
                            </div>
                        </div>
                        <div style={{ padding: '2.5rem 1.5rem 2rem' }}>
                            <h3 className="solution-title" style={{ marginTop: '0.5rem' }}>Architects</h3>
                            <p className="solution-category">DESIGN VISIONARIES</p>
                            <div className="solution-details">
                                <div className="detail-row">
                                    <span className="detail-label">Loan Up To:</span>
                                    <span className="detail-value text-dark fw-700">₹50 Lakhs</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Rate:</span>
                                    <span className="detail-value text-dark fw-700">10.0% onwards</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Key Feature:</span>
                                    <span className="detail-value fw-700" style={{ color: '#059669' }}>Project-Based Income</span>
                                </div>
                            </div>
                            <p className="solution-desc">Project-based income assessment with collateral-free loans up to ₹50L. Equipment finance and practice setup options available.</p>
                            <Link href="/professionals/architects" className="prof-link green-link" style={{ fontWeight: 800, color: '#059669' }}>
                                LEARN MORE <ArrowRight className="link-icon" />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section style={{ background: '#fff', padding: '0 1rem 5rem' }}>
                <div className="section-footer" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>Don&#39;t see your profession listed? We serve all high-income professionals.</p>
                    <Link href="/apply" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1E3A8A', fontWeight: 800, textDecoration: 'none' }}>
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
