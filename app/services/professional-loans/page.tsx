"use client";
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { GraduationCap, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

function formatINR(n: number) {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    return `₹${n.toLocaleString('en-IN')}`;
}
function formatCurrency(n: number) { return `₹${Math.round(n).toLocaleString('en-IN')}`; }

const benefits = [
    { icon: '🏥', title: 'For Doctors', desc: 'Clinic setup, medical equipment, practice expansion. Accepted: MBBS, MD, MS, BDS, BAMS, BHMS.' },
    { icon: '📊', title: 'For Chartered Accountants', desc: 'Office setup, working capital, overdraft. Revenue-based assessment for ICAI members.' },
    { icon: '🏗️', title: 'For Architects', desc: 'Studio setup, CAD equipment, project bidding. CoA registration accepted as income credential.' },
    { icon: '⚖️', title: 'For Lawyers', desc: 'Chamber setup, library, working capital. LLB/LLM + bar council membership considered.' },
    { icon: '⚙️', title: 'For Engineers & MBAs', desc: 'Consulting practice setup, business launch. Post-grad qualification + 2-year experience eligible.' },
    { icon: '💰', title: 'No Collateral up to ₹75L', desc: 'Fully unsecured loan up to ₹75 Lakhs. Based purely on your qualifications and income.' },
];

const eligibility = [
    { label: 'Qualification', value: 'Any post-graduate or professional degree (MBBS, CA, B.Arch, LLB, MBA, B.Tech)' },
    { label: 'Registration', value: 'Active registration with relevant professional body (MCI, ICAI, CoA, Bar Council)' },
    { label: 'Experience', value: 'Minimum 1–2 years post-qualification practice or employment' },
    { label: 'Age', value: '22 to 65 years at loan maturity' },
    { label: 'CIBIL Score', value: '700+ preferred; 680+ considered for established professionals' },
    { label: 'Income', value: 'Minimum ₹40,000/month (all professional income combined)' },
];

const documents = [
    { icon: '🪪', label: 'Aadhaar & PAN Card' },
    { icon: '🎓', label: 'Degree Certificate & Registration' },
    { icon: '🏦', label: 'Last 6 months bank statements' },
    { icon: '📋', label: 'Last 2 years ITR with income schedule' },
    { icon: '📍', label: 'Practice / office address proof' },
    { icon: '📸', label: 'Passport-size photographs' },
];

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill a 3-minute form. No branch visit needed.' },
    { num: '02', title: 'Upload Credentials', desc: 'Degree, registration certificate, and bank statements uploaded securely.' },
    { num: '03', title: 'Bank Matching', desc: 'We compare 15+ partner banks for the best professional loan rate.' },
    { num: '04', title: 'Offer in 72 Hours', desc: 'Best-rate offer issued within 72 hours. Digital signing from anywhere.' },
    { num: '05', title: 'Disbursal', desc: 'Funds credited to your account. Grow your practice immediately.' },
];

const faqs = [
    { q: 'Who qualifies as a professional for CapitalFlax professional loans?', a: 'We serve MBBS/MD/MS doctors, Chartered Accountants (CA/CMA), Architects (B.Arch), Lawyers (LLB/LLM), Engineers, MBA graduates, and other post-graduate professionals with verifiable income and registration.' },
    { q: 'What is the maximum loan amount for a professional loan?', a: 'Unsecured professional loans go up to ₹75 Lakhs. With property collateral, amounts can reach ₹5 Crore. Actual eligibility depends on your income, CIBIL score, and professional credentials.' },
    { q: 'Can I use the loan for personal needs as well as professional purposes?', a: 'Yes. Professional loans have no end-use restriction. You can use the funds for practice setup, home purchase, vehicle, education, or any personal financial need.' },
    { q: 'Is the interest rate the same for all professions?', a: 'No. Rates vary by profession and lender. Doctors and CAs typically get the lowest rates (9–10% p.a.). The final rate depends on your CIBIL score, income profile, and chosen lender.' },
    { q: 'Can a newly qualified professional apply?', a: 'Yes, with 1+ year of experience (including internship/articleship). A strong CIBIL score (700+) and co-applicant with income can significantly boost eligibility for fresh professionals.' },
    { q: 'Is a guarantor required for a professional loan?', a: 'No guarantor is required for most professional loans up to ₹75 Lakhs. Adding a co-applicant with income can enhance your loan eligibility and may unlock better interest rates.' },
];

export default function ProfessionalLoansPage() {
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [tenure, setTenure] = useState(5);
    const rate = 9.0;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const { emi, totalInterest, totalPayable } = useCallback(() => {
        const r = rate / 12 / 100, n = tenure * 12;
        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return { emi, totalInterest: emi * n - loanAmount, totalPayable: emi * n };
    }, [loanAmount, tenure])();

    const sliderStyle = (pct: number, color: string) => ({
        width: '100%', height: '4px', appearance: 'none' as const,
        background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        borderRadius: '2px', outline: 'none', cursor: 'pointer',
    });

    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            <style>{`.profl-thumb::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#4F46E5;cursor:pointer;border:2px solid #fff;box-shadow:0 0 0 2px #4F46E5;}.profl-thumb::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#4F46E5;cursor:pointer;border:2px solid #fff;}`}</style>

            <section style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 60%, #EEF2FF 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #C7D2FE', borderRadius: '50px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
                    <GraduationCap size={14} style={{ color: '#4F46E5' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '1.5px', textTransform: 'uppercase' }}>For Your Practice</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 1.25rem' }}>
                    Professional Loans at <span style={{ color: '#4F46E5' }}>9% p.a.</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#64748B', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                    Up to ₹75 Lakhs. No collateral. Tailored for doctors, CAs, architects, lawyers, and engineers. 72-hour approval.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {[{ label: 'Max Amount', value: '₹75 Lakhs' }, { label: 'Interest Rate', value: '9% p.a.' }, { label: 'Max Tenure', value: '10 Years' }, { label: 'Collateral', value: 'Not Required' }].map((s, i) => (
                        <div key={i} style={{ background: '#fff', border: '1px solid #C7D2FE', borderRadius: '12px', padding: '1rem 1.75rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5' }}>{s.value}</div>
                            <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#4F46E5', color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link href="/professionals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', color: '#4F46E5', border: '2px solid #C7D2FE', fontWeight: 700, fontSize: '0.95rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                        View by Profession
                    </Link>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>PROFESSIONS WE SERVE</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Built for Every <span style={{ color: '#4F46E5' }}>Professional</span></h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {benefits.map((b, i) => (
                            <div key={i} style={{ background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '16px', padding: '2rem', transition: 'all 0.3s' }}
                                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 16px 40px -8px rgba(79,70,229,0.15)'; d.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.transform = 'translateY(0)'; }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.5rem' }}>{b.title}</h3>
                                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>EMI CALCULATOR</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Plan Your Professional Loan</h2>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #C7D2FE', padding: '2.5rem', boxShadow: '0 8px 32px -8px rgba(79,70,229,0.1)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                            <div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Loan Amount</label>
                                        <span style={{ fontWeight: 700, color: '#4F46E5' }}>{formatINR(loanAmount)}</span>
                                    </div>
                                    <input type="range" min={100000} max={7500000} step={100000} value={loanAmount} onChange={e => setLoanAmount(+e.target.value)} className="profl-thumb" style={sliderStyle(((loanAmount - 100000) / 7400000) * 100, '#4F46E5')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹1L</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>₹75L</span></div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Tenure</label>
                                        <span style={{ fontWeight: 700, color: '#4F46E5' }}>{tenure} Years</span>
                                    </div>
                                    <input type="range" min={1} max={10} step={1} value={tenure} onChange={e => setTenure(+e.target.value)} className="profl-thumb" style={sliderStyle(((tenure - 1) / 9) * 100, '#4F46E5')} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>1 Yr</span><span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>10 Yrs</span></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                                <div style={{ background: '#EEF2FF', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Monthly EMI</div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>{formatCurrency(emi)}</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Interest</div>
                                        <div style={{ fontWeight: 800, color: '#EF4444', fontSize: '0.95rem' }}>{formatCurrency(totalInterest)}</div>
                                    </div>
                                    <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Total</div>
                                        <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem' }}>{formatCurrency(totalPayable)}</div>
                                    </div>
                                </div>
                                <Link href="/apply" style={{ display: 'block', textAlign: 'center', background: '#4F46E5', color: '#fff', fontWeight: 700, padding: '0.9rem', borderRadius: '10px', textDecoration: 'none' }}>Apply for This Loan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>ELIGIBILITY</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Who Can Apply?</h2>
                    </div>
                    <div style={{ background: '#EEF2FF', borderRadius: '16px', border: '1px solid #C7D2FE', overflow: 'hidden' }}>
                        {eligibility.map((e, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '1.25rem 2rem', borderBottom: i < eligibility.length - 1 ? '1px solid #E0E7FF' : 'none', gap: '2rem' }}>
                                <div style={{ minWidth: '130px', fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '1px', textTransform: 'uppercase', paddingTop: '2px' }}>{e.label}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                    <CheckCircle size={16} style={{ color: '#4F46E5', flexShrink: 0 }} />
                                    <span style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.95rem' }}>{e.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>DOCUMENTS</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 2.5rem', letterSpacing: '-1px' }}>What You'll Need</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {documents.map((d, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: '1px solid #C7D2FE', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>{d.icon}</span>
                                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.92rem' }}>{d.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0', letterSpacing: '-1px' }}>Approved in 5 Steps</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '14px', padding: '1.5rem 2rem', alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '48px', height: '48px', background: 'linear-gradient(135deg, #6366F1, #4F46E5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>{s.num}</div>
                                <div><div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', marginBottom: '0.3rem' }}>{s.title}</div><div style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4F46E5', letterSpacing: '2px', textTransform: 'uppercase' }}>FAQ</span>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0.75rem 0 0.5rem' }}>Professional Loan FAQs</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} style={{ border: `1px solid ${isOpen ? '#C7D2FE' : '#E2E8F0'}`, borderRadius: '12px', overflow: 'hidden', background: '#fff', transition: 'all 0.2s' }}>
                                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>{faq.q}</span>
                                        <ChevronDown size={20} style={{ color: '#4F46E5', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
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

            <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1E3A8A, #1e40af)', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-1px' }}>Your Credentials = Your Credit</h2>
                <p style={{ color: '#BFDBFE', fontSize: '1.05rem', margin: '0 0 2.5rem' }}>₹75 Lakhs | 9% p.a. | No Collateral | 72-Hr Approval</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#4F46E5', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link href="/professionals" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '50px', textDecoration: 'none' }}>
                        View by Profession
                    </Link>
                </div>
            </section>
        </div>
    );
}
