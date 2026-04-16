import type { Metadata } from 'next';
import Link from 'next/link';
import HomePageClient from './components/HomePageClient';
import { Rocket, FileText, Handshake, Briefcase, Zap, CheckCircle, ShieldCheck, Users, Building, ArrowRight, Clock } from 'lucide-react';

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
      {/* 1. HERO SECTION */}
      <section style={{ 
        padding: '10rem 1rem 6rem', 
        textAlign: 'center', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{ maxWidth: '850px' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 7vw, 4.5rem)', 
            fontWeight: 900, 
            color: '#0F172A', 
            letterSpacing: '-2px', 
            lineHeight: 1.05, 
            marginBottom: '1.5rem',
            textTransform: 'capitalize'
          }}>
            Get Instant <span style={{ color: '#3B82F6' }}>Business Loans</span> in India
          </h1>
          <p style={{ 
            fontSize: '1.35rem', 
            color: '#64748B', 
            lineHeight: 1.6, 
            maxWidth: '700px', 
            margin: '0 auto 2.5rem',
            fontWeight: 500
          }}>
            Get approval within 48 hours with minimal documentation. India's fastest growing 
            financial partner for MSMEs and Startups.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <Link 
              href="/apply" 
              style={{ 
                background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
                color: '#fff',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                fontSize: '1.25rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}
            >
              Apply for Business Loan Now <ArrowRight size={24} />
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', fontWeight: 600 }}>
              <Zap size={16} fill="currentColor" style={{ display: 'inline', marginRight: '4px' }} /> 
              No hidden charges • Secure digital process
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION [NEW] */}
      <section style={{ padding: '0 1rem 6rem' }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          <div style={{ 
            padding: '2rem', 
            borderRadius: '24px', 
            background: '#F8FAFC', 
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ color: '#2563EB', background: '#DBEAFE', p: 3, borderRadius: '16px', display: 'flex', padding: '12px' }}>
              <Users size={32} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>500+</div>
              <div style={{ color: '#64748B', fontWeight: 600 }}>Businesses Trusted</div>
            </div>
          </div>

          <div style={{ 
            padding: '2rem', 
            borderRadius: '24px', 
            background: '#F8FAFC', 
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ color: '#16A34A', background: '#DCFCE7', p: 3, borderRadius: '16px', display: 'flex', padding: '12px' }}>
              <Building size={32} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>15+</div>
              <div style={{ color: '#64748B', fontWeight: 600 }}>Banking Partners</div>
            </div>
          </div>

          <div style={{ 
            padding: '2rem', 
            borderRadius: '24px', 
            background: '#F8FAFC', 
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ color: '#D97706', background: '#FEF3C7', p: 3, borderRadius: '16px', display: 'flex', padding: '12px' }}>
              <Clock size={32} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>48 Hours</div>
              <div style={{ color: '#64748B', fontWeight: 600 }}>Fast Approval</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SECTION [REFINED] */}
      <section id="why-capitalflax" style={{ padding: '6rem 1rem', background: 'linear-gradient(to bottom, #fff, #F8FAFC)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1E293B', marginBottom: '1rem' }}>Ready to Scale? <span style={{ color: '#3B82F6' }}>Why CapitalFlax?</span></h2>
          <p style={{ color: '#64748B', fontSize: '1.1rem', marginBottom: '4rem' }}>The preferred choice for business loan India and startup funding.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><Zap size={40} color="#2563EB" /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Unmatched Speed</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>Get your business funding sanctioned within 48–72 hours of complete documentation.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><FileText size={40} color="#2563EB" /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Easy Paperwork</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>Simplified digital process with minimal physical documentation for busy entrepreneurs.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><ShieldCheck size={40} color="#2563EB" /></div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0F172A' }}>Secure & Trusted</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>Direct partnership with 15+ RBI-registered banks and NBFCs for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPES OF LOANS [CLICKABLE] */}
      <section id="loan-types" style={{ padding: '8rem 1rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1E293B', marginBottom: '1rem' }}>Loans Designed for <span style={{ color: '#3B82F6' }}>Growth</span></h2>
          <p style={{ color: '#64748B', marginBottom: '4rem' }}>Comprehensive solutions for Business, MSME, and Startup funding.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <Link href="/services/business-loans" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '1.25rem 2.5rem', border: '2px solid #E2E8F0', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, color: '#1E293B', transition: '0.2s', background: '#fff' }}>
                <Briefcase size={20} color="#3B82F6" />
                Business Loans
                <ArrowRight size={16} />
              </div>
            </Link>
            <Link href="/services/business-loans" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '1.25rem 2.5rem', border: '2px solid #E2E8F0', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, color: '#1E293B', transition: '0.2s', background: '#fff' }}>
                <CheckCircle size={20} color="#3B82F6" />
                MSME Loans
                <ArrowRight size={16} />
              </div>
            </Link>
            <Link href="/services/business-loans" style={{ textDecoration: 'none' }}>
              <div style={{ padding: '1.25rem 2.5rem', border: '2px solid #E2E8F0', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, color: '#1E293B', transition: '0.2s', background: '#fff' }}>
                <Rocket size={20} color="#3B82F6" />
                Startup Funding
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <Link href="/services" style={{ color: '#3B82F6', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Compare all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS [REFINED] */}
      <section id="how-it-works" style={{ padding: '8rem 1rem', background: '#0F172A', color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Get Funded in <span style={{ color: '#3B82F6' }}>3 Easy Steps</span></h2>
          <p style={{ color: '#94A3B8', marginBottom: '5rem', fontSize: '1.1rem' }}>Simplified process for modern Indian businesses.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            {[
              { step: '01', title: 'Apply Online', text: 'Fill our 5-minute digital form with basic business details.' },
              { step: '02', title: 'Get Approval', text: 'Secure sanction from the best lender within 48–72 hours.' },
              { step: '03', title: 'Receive Funds', text: 'Direct credit to your bank account with zero hassle.' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ 
                  fontSize: '5rem', 
                  fontWeight: 900, 
                  color: 'rgba(59, 130, 246, 0.1)', 
                  position: 'absolute', 
                  top: '-30px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  WebkitTextStroke: '1px rgba(59, 130, 246, 0.2)',
                  fontFamily: 'sans-serif'
                }}>{item.step}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the original content via Client Component */}
      <HomePageClient />

      <section style={{ padding: '6rem 1rem', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Want more insights?</h2>
          <p style={{ marginBottom: '2rem', color: '#64748B' }}>Read our latest guides on business financing, MSME success, and financial planning.</p>
          <Link href="/blog" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'underline' }}>Visit the CapitalFlax Blog</Link>
        </div>
      </section>

      {/* 6. FAQ SECTION [EXPANDED] */}
      <section className="faq-section" style={{ padding: '10rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '1.5rem' }}>
            Everything You Need <span style={{ color: '#3B82F6' }}>to Know</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '5rem', fontSize: '1.1rem' }}>Get answers to the most common questions about business loan India.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: "What is a business loan?",
                a: "A business loan is a targeted credit facility for entrepreneurs to fund operations, expansion, or inventory. At CapitalFlax, we specialize in helping businesses access these funds with minimal hassle."
              },
              {
                q: "How to apply for an MSME loan in India?",
                a: "You can apply digitally via the CapitalFlax portal. Just provide your business details, and our experts will coordinate with 15+ banking partners to find the best MSME loan fit for your turnover and industry."
              },
              {
                q: "What documents are required for a business loan?",
                a: "Typically, you need KYC (PAN, Aadhaar), 6 months' bank statements, and 2-3 years of ITR. For MSMEs, GST registration or Udyam certification is also required."
              },
              {
                q: "How long does approval take?",
                a: "Our core advantage is speed. Most business loan India applications are approved within 48 to 72 hours once all required documents are successfully processed by our team."
              }
            ].map((faq, i) => (
              <div key={i} style={{ 
                background: '#fff', 
                padding: '2rem', 
                borderRadius: '24px', 
                border: '1px solid #E2E8F0',
                transition: '0.3s ease',
                textAlign: 'left'
              }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1E293B', marginBottom: '1rem' }}>{faq.q}</h3>
                <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '1.05rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
