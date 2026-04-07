"use client";
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div style={{ paddingTop: '5rem', fontFamily: 'Inter, sans-serif' }}>
            <section style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)', padding: '5rem 1.5rem 4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', margin: '0 0 1rem' }}>
                    Contact <span style={{ color: '#1E3A8A' }}>CapitalFlax</span>
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
                    Have a question about a loan? Our financial experts are here to help you get the best deal.
                </p>
            </section>

            <section style={{ padding: '5rem 1.5rem', background: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Left: Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '2rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '12px' }}><Phone size={24} color="#1E3A8A" /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Call Us</h3>
                                    <p style={{ margin: 0, color: '#475569' }}>+91 9985681944 , +91-9989245304<br/><span style={{ fontSize: '0.85rem' }}>Mon-Sat: 9AM to 7PM</span></p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '12px' }}><Mail size={24} color="#1E3A8A" /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Email Us</h3>
                                    <p style={{ margin: 0, color: '#475569' }}>support@capitalflax.in<br/><span style={{ fontSize: '0.85rem' }}>We reply within 2 hours</span></p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '12px' }}><MapPin size={24} color="#1E3A8A" /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Headquarters</h3>
                                    <p style={{ margin: 0, color: '#475569', lineHeight: 1.5 }}>Flat # 1604/A 16th Floor Babukhan Estate,<br/>Basheerbagh Hyderabad - 500001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem' }}>Send a Message</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Full Name" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
                            <input type="email" placeholder="Email Address" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
                            <input type="tel" placeholder="Phone Number" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none' }} />
                            <textarea placeholder="How can we help you?" rows={4} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', outline: 'none', resize: 'vertical' }}></textarea>
                            <button type="submit" style={{ background: '#1E3A8A', color: '#fff', padding: '0.9rem', borderRadius: '8px', border: 'none', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
