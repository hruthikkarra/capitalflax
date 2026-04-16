import type { Metadata } from 'next';
import Link from 'next/link';
import HomePageClient from './components/HomePageClient';
import { 
  Rocket, 
  FileText, 
  Handshake, 
  Briefcase, 
  Zap, 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  Building, 
  ArrowRight, 
  Clock, 
  Shield 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Business Loans in India | Instant MSME & Startup Funding - CapitalFlax",
  description: "Get fast business loans in India with low interest rates. MSME, startup & personal loans with quick approval in 48 hours.",
  keywords: [
    "business loan India",
    "MSME loan",
    "startup funding",
    "professional business loan",
    "small business finance",
    "unsecured business loan",
  ],
};

function ApplyCTA() {
  return (
    <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <Link 
        href="/apply" 
        style={{ 
          background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
          color: '#fff',
          padding: '1.25rem 3.5rem',
          borderRadius: '50px',
          fontSize: '1.2rem',
          fontWeight: 800,
          textDecoration: 'none',
          boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          transition: 'all 0.3s ease'
        }}
      >
        Apply Now <ArrowRight size={22} />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ background: '#fff', overflowX: 'hidden' }}>
      {/* 1. HERO SECTION */}
      <section style={{ 
        padding: '12rem 1.5rem 8rem', 
        textAlign: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#DBEAFE', color: '#1E40AF', padding: '0.5rem 1.25rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <ShieldCheck size={16} /> Fast, Secure & Trusted
        </div>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          fontWeight: 900, 
          color: '#0F172A', 
          letterSpacing: '-3px', 
          lineHeight: 1, 
          marginBottom: '2rem',
          maxWidth: '900px'
        }}>
          Get Instant <span style={{ color: '#3B82F6' }}>Business Loans</span> in India
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
          color: '#64748B', 
          lineHeight: 1.5, 
          maxWidth: '800px', 
          margin: '0 auto 3rem',
          fontWeight: 600
        }}>
          Get approved in 48 hours | Minimal documentation | Trusted by 500+ businesses
        </p>
        
        <p style={{ 
          fontSize: '1.15rem', 
          color: '#475569', 
          maxWidth: '650px', 
          margin: '0 auto 4rem',
          lineHeight: 1.7,
          opacity: 0.8
        }}>
          CapitalFlax empowers Indian enterprises with low-interest funding solutions. 
          The preferred partner for MSME manufacturing, high-growth startups, and professionals.
        </p>

        <Link 
          href="/apply" 
          style={{ 
            background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
            color: '#fff',
            padding: '1.5rem 4rem',
            borderRadius: '50px',
            fontSize: '1.35rem',
            fontWeight: 800,
            textDecoration: 'none',
            boxShadow: '0 25px 30px -10px rgba(59, 130, 246, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            transition: 'all 0.3s ease'
          }}
        >
          Apply for Business Loan Now <ArrowRight size={28} />
        </Link>
      </section>

      {/* 2. TRUST SECTION [HORIZONTAL BAR] */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          background: '#F1F5F9',
          borderRadius: '40px',
          padding: '4rem 3rem',
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '3rem',
          border: '1px solid #E2E8F0'
        }}>
          {[
            { icon: <Users size={32} />, value: '500+', label: 'Businesses Served' },
            { icon: <Building size={32} />, value: '15+', label: 'Banking Partners' },
            { icon: <Clock size={32} />, value: '48H', label: 'Approval Speed' },
            { icon: <ShieldCheck size={32} />, value: 'RBI', label: 'Registered Partners' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: '#2563EB', background: '#fff', borderRadius: '20px', display: 'flex', padding: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.25rem' }}>{item.value}</div>
                <div style={{ color: '#64748B', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LOAN TYPES [DEDICATED SERVICE CARDS] */}
      <section id="loan-types" style={{ padding: '8rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#1E293B', textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>
            Tailored Loans for <span style={{ color: '#3B82F6' }}>Every Stage</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: '1.25rem', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
             Click a card below to explore dedicated funding details, eligibility, and EMI calculators.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
            gap: '3rem' 
          }}>
            {[
              { 
                title: 'Business Loans', 
                link: '/services/business-loans', 
                icon: <Briefcase size={40} />, 
                desc: 'Unsecured funding for working capital, new equipment, and office expansion up to ₹1 Crore. Sanctioned in 48 hours.',
                color: '#2563EB',
                bg: '#EFF6FF'
              },
              { 
                title: 'MSME Loans', 
                link: '/services/msme-loans', 
                icon: <Building size={40} />, 
                desc: 'Specialized schemes for SMEs with Udyam registration perks, collateral-free options, and technology fund access.',
                color: '#0284C7',
                bg: '#F0F9FF'
              },
              { 
                title: 'Startup Funding', 
                link: '/services/startup-funding', 
                icon: <Rocket size={40} />, 
                desc: 'Growth capital, revenue-based financing, and venture debt for modern Indian startups with zero equity dilution.',
                color: '#7C3AED',
                bg: '#F5F3FF'
              }
            ].map((loan, idx) => (
              <Link key={idx} href={loan.link} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '4rem 2.5rem', 
                  background: loan.bg, 
                  borderRadius: '40px', 
                  border: `1px solid ${loan.color}15`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}>
                  <div style={{ color: loan.color, background: '#fff', width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.05)' }}>{loan.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0F172A', marginBottom: '1rem' }}>{loan.title}</h3>
                    <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.1rem', margin: 0 }}>{loan.desc}</p>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 800, color: loan.color, fontSize: '1.1rem' }}>
                    View Dedicated Details <ArrowRight size={22} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ApplyCTA />

      {/* 4. WHY CHOOSE US [PREMIUM UI] */}
      <section style={{ padding: '8rem 1.5rem', background: '#0F172A', color: '#fff', borderRadius: '60px', margin: '0 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Why <span style={{ color: '#3B82F6' }}>CapitalFlax?</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '1.35rem', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem', opacity: 0.8 }}>
            India's most trusted partner for growth-focused business financing.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem' }}>
            {[
              { icon: <Zap size={48} />, title: '48h Approval', desc: 'Rapid assessment and sanction letter within 2 business days of verification.' },
              { icon: <FileText size={48} />, title: 'Minimal Docs', desc: '100% digital journey with simple KYC, GST, and bank statement processing.' },
              { icon: <Handshake size={48} />, title: '15+ Partners', desc: 'Negotiated rates with HDFC, ICICI, Axis, and other leading RBI-registered institutions.' },
              { icon: <TrendingUp size={48} />, title: 'Transparent', desc: 'No hidden processing fees. Highly competitive rates starting at 14% p.a.' }
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ color: '#3B82F6' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{p.title}</h3>
                <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '1.1rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyCTA />

      {/* 5. HOW IT WORKS [SIMPLIFIED 3 STEPS] */}
      <section id="how-it-works" style={{ padding: '10rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '2rem', letterSpacing: '-2px' }}>
            Funded in <span style={{ color: '#3B82F6' }}>3 Easy Steps</span>
          </h2>
          <p style={{ color: '#64748B', marginBottom: '8rem', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 8rem' }}>A streamlined process designed to get you the capital you need without the noise.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '6rem' }}>
            {[
              { num: '01', title: 'Apply Online', text: 'Securely submit your basic profile and business metrics in just 5 minutes.' },
              { num: '02', title: 'Get Approval', text: 'Our experts negotiate the best terms. Receive your sanction letter within 48-72 hours.' },
              { num: '03', title: 'Receive Funds', text: 'Funds are disbursed directly into your current account so you can start scaling instantly.' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <div style={{ 
                  fontSize: '6rem', 
                  fontWeight: 900, 
                  lineHeight: 1,
                  color: '#fff',
                  WebkitTextStroke: '2px #3B82F6',
                  opacity: 0.3,
                  fontFamily: 'Inter, sans-serif'
                }}>{item.num}</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{item.title}</h3>
                <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '1.15rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyCTA />

      {/* 6. INTERACTIVE COMPONENTS (Slider/Stats/Partners) */}
      <HomePageClient />

      {/* 7. FAQ SECTION [ENHANCED UI] */}
      <section className="faq-section" style={{ padding: '12rem 1.5rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '2rem', letterSpacing: '-3px' }}>
            Common <span style={{ color: '#3B82F6' }}>Questions</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '6rem', fontSize: '1.3rem' }}>Everything you need to know about scaling your enterprise.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                q: "What is a business loan?",
                a: "A business loan is a targeted credit facility provided to entrepreneurs and entities for operational growth, expansion, or inventory purchase. At CapitalFlax, we optimize this process by matching you with the best rates from 15+ banking partners."
              },
              {
                q: "How to apply for an MSME loan in India?",
                a: "Applying for an MSME loan is seamless with CapitalFlax. Using your Udyam and GST details, we process your application digitally to ensure priority sector lending benefits and fast-track approvals from RBI-registered banks."
              },
              {
                q: "What documents are required for a business loan?",
                a: "The core requirements include: 1. KYC of owners and business. 2. Last 6 months' bank statements. 3. Last 2 years' ITR. 4. Business registration certificate (GST/Udyam). Our process is 100% digital and paperless."
              },
              {
                q: "How long does approval take?",
                a: "Our industry-leading turnaround time ensures that most business and MSME loan applications are sanctioned within 48 to 72 hours of successful document verification."
              }
            ].map((faq, i) => (
              <div key={i} style={{ 
                background: '#fff', 
                padding: '3rem', 
                borderRadius: '40px', 
                border: '1px solid #E2E8F0',
                textAlign: 'left',
                boxShadow: '0 10px 15px -10px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1E293B', marginBottom: '1.5rem' }}>{faq.q}</h3>
                <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: '1.15rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL GLOBAL FOOTER CTA */}
      <section style={{ padding: '10rem 1.5rem', textAlign: 'center', background: '#0F172A', color: '#fff' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-2px' }}>Secure Your Future <span style={{ color: '#3B82F6' }}>Today</span></h2>
        <p style={{ fontSize: '1.4rem', color: '#94A3B8', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>Join the thousands of India's most successful entrepreneurs who scale with CapitalFlax.</p>
        <Link href="/apply" style={{ background: '#3B82F6', color: '#fff', fontWeight: 900, padding: '1.5rem 5rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '1.4rem', boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)' }}>
          Get Started Now <ArrowRight size={32} />
        </Link>
      </section>
    </main>
  );
}
