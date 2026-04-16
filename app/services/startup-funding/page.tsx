"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Rocket, CheckCircle, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🚀', title: 'Equity-Free Capital', desc: 'Secure funding for your startup without giving away ownership or seats on your board.' },
    { icon: '📈', title: 'Growth-Linked credit', desc: 'Flexible credit lines that grow as your revenue increases. Scale your marketing and inventory effort.' },
    { icon: '🛡️', title: 'No Collateral Required', desc: 'Access pre-seed and seed-stage funding based on your business model and traction.' },
    { icon: '🤝', title: 'Investor Readiness', desc: 'We help you prepare your financial models and pitch for future VC rounds.' },
    { icon: '⚡', title: '48-Hour Decision', desc: 'Fast application processing so you can stay focused on building your product.' },
    { icon: '🌐', title: 'Network Access', desc: 'Connect with a network of financial experts and mentors in the Indian startup ecosystem.' },
];

const eligibility = [
    { label: 'Stage', value: 'Seed, Early Stage, and Scaling Startups' },
    { label: 'Revenue', value: 'Post-revenue preferred; Pre-revenue with strong prototype' },
    { label: 'Geography', value: 'DPIIT Registered Startups anywhere in India' },
    { label: 'Min. Age', value: 'Founder: 21+ Years old' },
    { label: 'Documentation', value: 'Pitch deck, 6-month bank statements, Team profile' },
];

const steps = [
    { num: '01', title: 'Submit Deck', desc: 'Share your pitch deck and basic financial model through our secure portal.' },
    { num: '02', title: 'Traction Review', desc: 'Our analysts review your product-market fit and growth potential.' },
    { num: '03', title: 'Offer Generation', desc: 'Get a non-dilutive funding offer within 48 to 72 hours.' },
    { num: '04', title: 'Digital KYC', desc: 'Complete your identity and business documentation verification online.' },
    { num: '05', title: 'Ignition', desc: 'Funds disbursed to fuel your next growth milestone.' },
];

const faqs = [
    { q: 'What is startup funding?', a: 'Startup funding is capital provided to early-stage businesses to fuel growth, product development, and market expansion. CapitalFlax specializing in non-dilutive funding, meaning you get the capital you need without giving up any equity in your company.' },
    { q: 'What are the interest rates for startup loans in India?', a: 'Interest rates for startup loans in India typically range from 12% to 18% p.a. At CapitalFlax, the final rate is determined by your startup’s traction, revenue stability, and the overall strength of your core founding team.' },
    { q: 'How fast is the startup funding decision process?', a: 'Time is of the essence for startups. We provide a funding decision within 48 to 72 hours of receiving your pitch deck and financials. Once approved, disbursal to your account happens swiftly to support your growth goals.' },
    { q: 'What documents are required for startup funding?', a: 'You’ll need to provide your startup’s pitch deck, 6 months of bank statements, a detailed team profile, and your DPIIT registration certificate if applicable. Our digital process ensures a smooth and paperless submission experience.' },
    { q: 'Who is eligible for startup funding at CapitalFlax?', a: 'We fund seed, early-stage, and scaling startups. While post-revenue startups are preferred, pre-revenue ventures with a strong MVP and clear product-market fit are also eligible for our non-dilutive credit lines.' },
    { q: 'Is collateral required for early-stage startup loans?', a: 'No, CapitalFlax offers unsecured startup funding based on your business model and traction. We do not require you to pledge personal assets or property for loans up to ₹1 Crore, keeping your risk manageable.' },
    { q: 'How to apply for startup funding online?', a: 'Simply visit the CapitalFlax apply page, upload your pitch deck and traction report, and complete our brief online inquiry. Our analysts will review your fit and get back to you with a tailored offer in days, not months.' },
    { q: 'What is the maximum limit for non-dilutive startup capital?', a: 'We facilitate credit lines up to ₹1 Crore for early-stage startups and up to ₹10 Crore for revenue-generating companies that are looking to scale without diluting their equity further before their next VC round.' },
];

export default function StartupFundingPage() {
    const [loanAmount, setLoanAmount] = useState(1500000);
    const [tenure, setTenure] = useState(3);
    const [rate, setRate] = useState(13.5);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
            }
        }))
    };

    const { emi, totalInterest, totalPayable } = useCallback(() => {
        const r = rate / 12 / 100, n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return { emi, totalInterest: emi * n - loanAmount, totalPayable: emi * n };
    }, [loanAmount, tenure, rate])();

    const sliderStyle = (pct: number, color: string) => ({
        width: '100%', height: '4px', appearance: 'none' as const,
        background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px', outline: 'none', cursor: 'pointer',
    });

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <style>{`.bl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#8B5CF6;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #8B5CF6;}.bl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#8B5CF6;cursor:pointer;border:2px solid #fff;}`}</style>

            {/* HERO */}
            <section style={{
                position: 'relative',
                padding: '5rem 1.5rem 4rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
            }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #DDD6FE', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <Rocket size={14} style={{ color: '#7C3AED' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Seed to Scale</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#4C1D95', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Non-Dilutive <span style={{ color: '#7C3AED' }}>Startup Funding</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#5B21B6', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Ignite your vision with accessible, founder-friendly capital. No equity loss, no board seats, just the fuel you need to scale your Indian startup.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹10 Crore' }, { label: 'Interest Rate', value: '13.5% avg' }, { label: 'Max Tenure', value: '5 Years' }, { label: 'Decision', value: '48 Hours' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7C3AED' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#6B7280', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Get Funded Now <ArrowRight size={16} />
                </Link>
            </section>

            {/* VALUE PROP */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <Sparkles style={{ color: '#7C3AED', marginBottom: '1rem' }} />
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>What is Non-Dilutive Startup Funding?</h2>
                        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Traditional bank loans are often rigid, and Venture Capital requires giving up ownership. At CapitalFlax, we provide a third way—<strong>growth-linked startup funding</strong>. Our credit products are designed for the high-growth, asset-light nature of modern tech startups. Whether you're in SaaS, Fintech, or E-commerce, we offer capital that moves as fast as you do.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid #F1F5F9', borderRadius: '16px', background: '#fdfdff' }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ESTIMATOR */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '3rem', boxShadow: '0 10px 40px -10px rgba(124,58,237,0.1)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '2rem' }}>Startup Repayment Estimator</h2>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Capital Required</label>
                                        <span style={{ fontWeight: 700, color: '#7C3AED' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={500000} max={10000000} step={100000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="bl-thumb" style={sliderStyle(((loanAmount - 500000) / 9500000) * 100, '#8B5CF6')} />
                                </div>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Deployment Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#7C3AED' }}>{tenure} Yrs</span>
                                    </div>
                                    <input type="range" min={1} max={5} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="bl-thumb" style={sliderStyle(((tenure - 1) / 4) * 100, '#8B5CF6')} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F5F3FF', padding: '0.75rem 1.25rem', borderRadius: '12px' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#4C1D95', fontWeight: 600 }}>Est. Interest Rate</span>
                                    <span style={{ fontWeight: 800, color: '#4C1D95' }}>{rate.toFixed(1)}% p.a.</span>
                                </div>
                            </div>
                            <div style={{ background: '#4C1D95', padding: '2.5rem', borderRadius: '20px', color: '#fff', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#C4B5FD', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Monthly Payment</div>
                                <div style={{ fontSize: '2.75rem', fontWeight: 800, marginBottom: '2rem' }}>{formatCurrency(emi)}</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                                    <div><div style={{ fontSize: '0.75rem', color: '#C4B5FD' }}>Total Interest</div><div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{formatCurrency(totalInterest)}</div></div>
                                    <div><div style={{ fontSize: '0.75rem', color: '#C4B5FD' }}>Total Payable</div><div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{formatCurrency(totalPayable)}</div></div>
                                </div>
                                <Link href="/apply" style={{ display: 'block', marginTop: '2rem', background: '#F59E0B', color: '#fff', fontWeight: 700, padding: '1rem', borderRadius: '50px', textDecoration: 'none' }}>Apply for Funding</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS MAP */}
            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '3.5rem', textAlign: 'center' }}>How to Apply for Startup Funding?</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '2rem', padding: '1.5rem 2.5rem', borderRadius: '16px', background: '#F9FAFB', border: '1px solid #F1F5F9', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{s.num}</div>
                                <div>
                                    <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.25rem' }}>{s.title}</h3>
                                    <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0 }}>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '3rem', textAlign: 'center' }}>Startup Funding Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((f, i) => (
                            <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: '12px', background: '#fff' }}>
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 1.5rem', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1E1B4B' }}>{f.q}</span>
                                    <ChevronDown size={18} style={{ color: '#7C3AED', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                                </button>
                                {openFaq === i && <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.7 }}>{f.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED BLOGS */}
            <section style={{ padding: '2rem 1.5rem', background: '#F5F3FF', borderTop: '1px solid #EDE9FE' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: '#4C1D95', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 700 }}>New to Funding?</span> Explore all 
                        <Link href="/blog/startup-funding-options-india" style={{ color: '#7C3AED', fontWeight: 700 }}>Startup Funding Options in India →</Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
