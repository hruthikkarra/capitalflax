import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

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
    <main>
      {/* SEO Content Section */}
      <div className="seo-intro-wrapper" style={{ padding: '6rem 1rem 0', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '2rem', textAlign: 'center' }}>
          Get Instant <span style={{ color: '#3B82F6' }}>Business Loans</span> in India
        </h1>
        
        <div className="seo-content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              Fuel your entrepreneurial journey with <strong>CapitalFlax Business Loans in India</strong>. We specialize in providing fast, flexible, and affordable financing solutions for professionals, small businesses, and startups. Whether you need working capital, equipment finance, or office expansion funds, our tailored loan products are designed to meet your specific growth requirements.
            </p>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              Securing an <strong>MSME loan</strong> or <strong>startup funding</strong> can be complex, but CapitalFlax simplifies the process. With our network of 15+ leading bank partners, we offer competitive interest rates starting from 14% p.a. and high-speed approvals within 48 to 72 hours. Our digital-first approach ensures minimal documentation and maximum transparency for your business growth.
            </p>
          </div>
        </div>
      </div>

      <HomePageClient />

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '3rem' }}>
            Frequently Asked <span style={{ color: '#3B82F6' }}>Questions</span>
          </h2>

          <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>What is a business loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                A business loan is a type of credit facility specifically designed for business purposes. It provides capital that can be used for working capital needs, purchasing inventory, buying equipment, or expanding operations. At CapitalFlax, we offer both secured and unsecured business loans to meet the diverse needs of Indian entrepreneurs.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>How to apply for an MSME loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                Applying for an MSME loan through CapitalFlax is simple and digital. You can start by filling out our online application form. You'll need to provide business registration proofs, ITRs for the last 2 years, and bank statements for the last 6 months. Our advisors will then match your profile with the best lender from our 15+ partners to ensure the lowest interest rate.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem' }}>What documents are required for a business loan?</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6 }}>
                Standard documents required for a business loan in India include: KYC documents (PAN, Aadhaar), business registration proof (GST certificate/Udyam), last 2-3 years of ITR with computation, last 6 months' bank statements, and office ownership or lease proof. For professional loans, we also require your professional qualification certificates and registration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
