import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';
import { Rocket, FileText, Handshake, Briefcase, Zap, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Business Loans in India | CapitalFlax",
  description:
    "Get instant business loans in India. CapitalFlax provides MSME loans, startup funding, and professional loans starting at 14% p.a. with 48-hour approval and minimal documentation.",
  keywords: [
    "business loan India",
    "MSME loan",
    "startup funding",
    "professional business loan",
    "small business finance",
    "unsecured business loan",
  ],
};

export default function Home() {
  return (
    <main style={{ background: '#fff' }}>
      {/* 1. Header & Intro */}
      <section style={{ padding: '8rem 1rem 4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Get Instant <span style={{ color: '#3B82F6' }}>Business Loans</span> in India
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#64748B', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
          Empower your business growth with low-interest MSME loans and startup funding.<br /> 
          Get approved in 48 hours with India's most trusted professional loan partner.
        </p>
      </section>

      {/* 2. Why Choose CapitalFlax? */}
      <section style={{ padding: '4rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1E293B', marginBottom: '3rem' }}>Why Choose <span style={{ color: '#3B82F6' }}>CapitalFlax?</span></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: '#fff', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', background: '#DBEAFE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Rocket style={{ color: '#2563EB' }} size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Fast Approval</h3>
              <p style={{ color: '#64748B' }}>Experience our lightning-fast 48–72 hour approval process once documentation is complete.</p>
            </div>

            <div style={{ padding: '2rem', background: '#fff', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', background: '#DCFCE7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <FileText style={{ color: '#16A34A' }} size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Minimal Documentation</h3>
              <p style={{ color: '#64748B' }}>We focus on your business flow, requiring only essential digital documents for a hassle-free experience.</p>
            </div>

            <div style={{ padding: '2rem', background: '#fff', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', background: '#FEF3C7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Handshake style={{ color: '#D97706' }} size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Trusted Banking Partners</h3>
              <p style={{ color: '#64748B' }}>Get the best interest rates through our network of 15+ leading Banks and RBI-registered NBFCs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Loans We Offer */}
      <section style={{ padding: '6rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1E293B', marginBottom: '3rem' }}>Types of Loans <span style={{ color: '#3B82F6' }}>We Offer</span></h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {['Business Loans', 'MSME Loans', 'Startup Funding'].map((loan) => (
              <div key={loan} style={{ padding: '1rem 2rem', border: '2px solid #E2E8F0', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: '#1E293B' }}>
                <div style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '50%' }} />
                {loan}
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', color: '#64748B', fontSize: '1.1rem' }}>
            We provide specialized unsecured and secured funding solutions tailored for Indian entrepreneurs and professionals.
          </p>
        </div>
      </section>

      {/* 4. How It Works */}
      <section style={{ padding: '6rem 1rem', background: '#0F172A', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '4rem' }}>How It <span style={{ color: '#3B82F6' }}>Works</span></h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', position: 'relative' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1E293B', marginBottom: '1rem', WebkitTextStroke: '1px #3B82F6' }}>01</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Apply Online</h3>
              <p style={{ color: '#94A3B8' }}>Fill our quick application form in 5 minutes with your basic details.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1E293B', marginBottom: '1rem', WebkitTextStroke: '1px #3B82F6' }}>02</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Get Approval</h3>
              <p style={{ color: '#94A3B8' }}>Our credit experts process your file and secure approval within 72 hours.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#1E293B', marginBottom: '1rem', WebkitTextStroke: '1px #3B82F6' }}>03</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Receive Funds</h3>
              <p style={{ color: '#94A3B8' }}>Funds are disbursed directly into your bank account with minimal hassle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the original content via Client Component */}
      <HomePageClient />

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: '6rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3.5rem' }}>
            Frequently Asked <span style={{ color: '#3B82F6' }}>Questions</span>
          </h2>

          <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>What is a business loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                A business loan is a type of credit facility specifically designed for business purposes. It provides capital that can be used for working capital needs, purchasing inventory, buying equipment, or expanding operations.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>How to apply for an MSME loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                Applying for an MSME loan through CapitalFlax is simple and digital. Start by filling our online form, and our advisors will match your profile with 15+ partner banks for the best rates.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>What documents are required for a business loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                Standard documents include: KYC (PAN, Aadhaar), business registration proof (GST/Udyam), last 2-3 years of ITR, and 6 months' bank statements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
