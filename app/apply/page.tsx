"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle, Phone, FileText, Clock } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
interface FormData {
    // Step 1
    fullName: string;
    email: string;
    phone: string;
    // Step 2
    profession: string;
    employmentType: string;
    monthlyIncome: string;
    // Step 3
    loanType: string;
    loanAmount: string;
    tenure: string;
    purpose: string;
}

const STEPS = ['Basic Information', 'Professional Details', 'Loan Details', 'Review & Submit'];

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    fontSize: '0.95rem',
    color: '#0F172A',
    outline: 'none',
    background: '#fff',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 700,
    fontSize: '0.88rem',
    color: '#0F172A',
    marginBottom: '0.5rem',
};

const fieldStyle: React.CSSProperties = { marginBottom: '1.25rem' };

const selectStyle: React.CSSProperties = { ...inputStyle, cursor: 'pointer', appearance: 'none' };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div style={fieldStyle}>
            <label style={labelStyle}>{label} <span style={{ color: '#EF4444' }}>*</span></label>
            {children}
        </div>
    );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ApplyPage() {
    const [step, setStep] = useState(0); // 0-indexed
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState<FormData>({
        fullName: '', email: '', phone: '',
        profession: '', employmentType: '', monthlyIncome: '',
        loanType: '', loanAmount: '', tenure: '', purpose: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const progress = ((step + 1) / STEPS.length) * 100;

    const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [field]: e.target.value }));

    const validate = (): boolean => {
        const errs: Partial<FormData> = {};
        if (step === 0) {
            if (!form.fullName.trim()) errs.fullName = 'Full name is required';
            if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
            if (!form.phone.trim() || form.phone.length < 10) errs.phone = 'Valid 10-digit phone is required';
        }
        if (step === 1) {
            if (!form.profession) errs.profession = 'Please select your profession';
            if (!form.employmentType) errs.employmentType = 'Please select employment type';
            if (!form.monthlyIncome.trim()) errs.monthlyIncome = 'Monthly income is required';
        }
        if (step === 2) {
            if (!form.loanType) errs.loanType = 'Please select a loan type';
            if (!form.loanAmount.trim()) errs.loanAmount = 'Loan amount is required';
            if (!form.tenure) errs.tenure = 'Tenure is required';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const next = () => { if (validate()) setStep(s => Math.min(s + 1, STEPS.length - 1)); };
    const prev = () => { setErrors({}); setStep(s => Math.max(s - 1, 0)); };
    const submit = () => { if (validate()) setSubmitted(true); };

    const errStyle = (key: keyof FormData): React.CSSProperties => ({
        fontSize: '0.78rem', color: '#EF4444', marginTop: '0.3rem', display: errors[key] ? 'block' : 'none',
    });
    const borderedInput = (key: keyof FormData): React.CSSProperties => ({
        ...inputStyle, borderColor: errors[key] ? '#EF4444' : '#E2E8F0',
    });
    const borderedSelect = (key: keyof FormData): React.CSSProperties => ({
        ...selectStyle, borderColor: errors[key] ? '#EF4444' : '#E2E8F0',
    });

    if (submitted) {
        return (
            <div style={{ minHeight: '100vh', paddingTop: '5rem', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ background: '#fff', borderRadius: '20px', padding: '4rem 3rem', textAlign: 'center', maxWidth: '520px', width: '100%', boxShadow: '0 20px 60px -10px rgba(0,0,0,0.1)' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <CheckCircle size={36} style={{ color: '#10B981' }} />
                    </div>
                    <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 1rem' }}>Application Submitted!</h2>
                    <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
                        Thank you, <strong>{form.fullName}</strong>! Our advisor will call you at <strong>{form.phone}</strong> within 2 hours.
                    </p>
                    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1E3A8A', color: '#fff', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: '50px', textDecoration: 'none' }}>
                        Back to Home <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: '#F8FAFC', paddingTop: '5rem' }}>

            {/* ── HEADER ── */}
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem 2rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                    <Clock size={14} /> 5-Minute Application
                </span>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
                    Your Application <span style={{ color: '#3B82F6' }}>Journey Starts Here</span>
                </h1>
                <p style={{ color: '#64748B', fontSize: '1.05rem', margin: '0 0 1.5rem' }}>
                    Quick 5-minute form. Zero spam. Instant eligibility check.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { icon: <Shield size={14} />, text: '256-bit SSL Encrypted' },
                        { icon: <CheckCircle size={14} />, text: 'No Impact on Credit Score' },
                        { icon: <Clock size={14} />, text: 'Response in 2 Hours' },
                    ].map((b, i) => (
                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                            <span style={{ color: '#3B82F6' }}>{b.icon}</span>{b.text}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── FORM CARD ── */}
            <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1rem 5rem' }}>
                <div style={{ background: '#fff', borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', boxShadow: '0 8px 40px -8px rgba(0,0,0,0.08)', border: '1px solid #F1F5F9' }}>

                    {/* Progress */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>Step {step + 1} of {STEPS.length}</span>
                        <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>{Math.round(progress)}% Complete</span>
                    </div>
                    <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '99px', marginBottom: '2rem', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${progress}%`, background: '#1E3A8A', borderRadius: '99px', transition: 'width 0.4s ease' }} />
                    </div>

                    {/* Step label */}
                    <h2 style={{ fontWeight: 800, fontSize: '1.3rem', color: '#0F172A', margin: '0 0 0.3rem' }}>{STEPS[step]}</h2>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', margin: '0 0 2rem' }}>
                        {step === 0 && "Let's start with your contact details"}
                        {step === 1 && "Tell us about your profession and income"}
                        {step === 2 && "Share the loan details you need"}
                        {step === 3 && "Review your information before submitting"}
                    </p>

                    {/* ── STEP 1: Basic Information ── */}
                    {step === 0 && (
                        <>
                            <Field label="Full Name">
                                <input style={borderedInput('fullName')} type="text" placeholder="Enter your full name" value={form.fullName} onChange={set('fullName')} />
                                <span style={errStyle('fullName')}>{errors.fullName}</span>
                            </Field>
                            <Field label="Email Address">
                                <input style={borderedInput('email')} type="email" placeholder="your.email@example.com" value={form.email} onChange={set('email')} />
                                <span style={errStyle('email')}>{errors.email}</span>
                            </Field>
                            <Field label="Phone Number">
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <span style={{ ...inputStyle, width: 'auto', padding: '0.85rem 0.85rem', background: '#F8FAFC', color: '#64748B', fontWeight: 700, flexShrink: 0 }}>+91</span>
                                    <input style={{ ...borderedInput('phone'), flex: 1 }} type="tel" maxLength={10} placeholder="9876543210" value={form.phone} onChange={set('phone')} />
                                </div>
                                <span style={errStyle('phone')}>{errors.phone}</span>
                            </Field>
                        </>
                    )}

                    {/* ── STEP 2: Professional Details ── */}
                    {step === 1 && (
                        <>
                            <Field label="Profession">
                                <select style={borderedSelect('profession')} value={form.profession} onChange={set('profession')}>
                                    <option value="">Select your profession</option>
                                    <option>Doctor / Medical Professional</option>
                                    <option>Chartered Accountant (CA)</option>
                                    <option>Architect</option>
                                    <option>Lawyer / Advocate</option>
                                    <option>Engineer</option>
                                    <option>Business Owner</option>
                                    <option>Salaried Professional</option>
                                    <option>Other</option>
                                </select>
                                <span style={errStyle('profession')}>{errors.profession}</span>
                            </Field>
                            <Field label="Employment Type">
                                <select style={borderedSelect('employmentType')} value={form.employmentType} onChange={set('employmentType')}>
                                    <option value="">Select type</option>
                                    <option>Salaried</option>
                                    <option>Self-Employed / Business</option>
                                    <option>Professional Practice</option>
                                </select>
                                <span style={errStyle('employmentType')}>{errors.employmentType}</span>
                            </Field>
                            <Field label="Monthly Income (₹)">
                                <input style={borderedInput('monthlyIncome')} type="number" placeholder="e.g. 150000" value={form.monthlyIncome} onChange={set('monthlyIncome')} />
                                <span style={errStyle('monthlyIncome')}>{errors.monthlyIncome}</span>
                            </Field>
                        </>
                    )}

                    {/* ── STEP 3: Loan Details ── */}
                    {step === 2 && (
                        <>
                            <Field label="Loan Type">
                                <select style={borderedSelect('loanType')} value={form.loanType} onChange={set('loanType')}>
                                    <option value="">Select loan type</option>
                                    <option>Home Loan</option>
                                    <option>Business Loan</option>
                                    <option>Personal Loan</option>
                                    <option>Gold Loan</option>
                                    <option>Mortgage Loan</option>
                                    <option>Professional Loan</option>
                                </select>
                                <span style={errStyle('loanType')}>{errors.loanType}</span>
                            </Field>
                            <Field label="Loan Amount Required (₹)">
                                <input style={borderedInput('loanAmount')} type="number" placeholder="e.g. 5000000" value={form.loanAmount} onChange={set('loanAmount')} />
                                <span style={errStyle('loanAmount')}>{errors.loanAmount}</span>
                            </Field>
                            <Field label="Preferred Tenure">
                                <select style={borderedSelect('tenure')} value={form.tenure} onChange={set('tenure')}>
                                    <option value="">Select tenure</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>5-10 Years</option>
                                    <option>10-20 Years</option>
                                    <option>20-30 Years</option>
                                </select>
                                <span style={errStyle('tenure')}>{errors.tenure}</span>
                            </Field>
                            <Field label="Purpose of Loan (Optional)">
                                <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' } as React.CSSProperties} placeholder="Briefly describe what you need the loan for..." value={form.purpose} onChange={set('purpose')} />
                            </Field>
                        </>
                    )}

                    {/* ── STEP 4: Review ── */}
                    {step === 3 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '0.5rem' }}>
                            {[
                                { section: 'Personal', items: [['Full Name', form.fullName], ['Email', form.email], ['Phone', `+91 ${form.phone}`]] },
                                { section: 'Professional', items: [['Profession', form.profession], ['Employment', form.employmentType], ['Monthly Income', `₹${Number(form.monthlyIncome || 0).toLocaleString('en-IN')}`]] },
                                { section: 'Loan', items: [['Loan Type', form.loanType], ['Amount', `₹${Number(form.loanAmount || 0).toLocaleString('en-IN')}`], ['Tenure', form.tenure], ['Purpose', form.purpose || '—']] },
                            ].map(({ section, items }) => (
                                <div key={section} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem' }}>
                                    <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.75rem' }}>{section}</div>
                                    {items.map(([label, value]) => (
                                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', padding: '0.35rem 0', borderBottom: '1px solid #F1F5F9' }}>
                                            <span style={{ color: '#64748B' }}>{label}</span>
                                            <span style={{ fontWeight: 700, color: '#0F172A', textAlign: 'right', maxWidth: '60%' }}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Navigation buttons */}
                    <div style={{ display: 'flex', justifyContent: step > 0 ? 'space-between' : 'flex-end', marginTop: '2rem', gap: '1rem' }}>
                        {step > 0 && (
                            <button onClick={prev} style={{ padding: '0.8rem 1.75rem', borderRadius: '10px', border: '1.5px solid #E2E8F0', background: '#fff', color: '#475569', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
                                ← Back
                            </button>
                        )}
                        {step < STEPS.length - 1 ? (
                            <button onClick={next} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem', borderRadius: '10px', background: '#1E3A8A', color: '#fff', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
                                Next <ArrowRight size={16} />
                            </button>
                        ) : (
                            <button onClick={submit} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 2rem', borderRadius: '10px', background: '#F59E0B', color: '#fff', fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
                                Submit Application <ArrowRight size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* ── WHAT HAPPENS AFTER ── */}
                <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem', marginTop: '2rem', textAlign: 'center', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0F172A', margin: '0 0 2rem' }}>What Happens After You Submit?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {[
                            { icon: <Phone size={28} />, time: 'WITHIN 2 HOURS', desc: 'Our advisor will call you to discuss your requirements and answer questions' },
                            { icon: <FileText size={28} />, time: 'WITHIN 24 HOURS', desc: 'Document checklist shared via email. Upload at your convenience' },
                            { icon: <CheckCircle size={28} />, time: 'WITHIN 72 HOURS', desc: 'Loan approval decision with best rates from our 15+ bank partners' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ color: '#3B82F6' }}>{item.icon}</div>
                                <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', color: '#3B82F6', textTransform: 'uppercase' }}>{item.time}</div>
                                <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
