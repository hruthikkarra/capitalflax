import Link from 'next/link';
import {
  ArrowRight, Shield, Users, TrendingUp, Award,
  Target, Heart, Zap, CheckCircle, MapPin, Phone, Mail,
  Building2, Star, Clock
} from 'lucide-react';

// ── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { value: '10,000+', label: 'Happy Professionals', icon: <Users size={22} /> },
  { value: '₹500 Cr+', label: 'Loans Disbursed', icon: <TrendingUp size={22} /> },
  { value: '15+', label: 'Bank Partners', icon: <Building2 size={22} /> },
  { value: '72 Hrs', label: 'Avg. Approval Time', icon: <Clock size={22} /> },
  { value: '4.9 / 5', label: 'Customer Rating', icon: <Star size={22} /> },
  { value: '2017', label: 'Founded In', icon: <Award size={22} /> },
];

const values = [
  {
    icon: <Shield size={28} />,
    color: '#1E3A8A',
    bg: '#EFF6FF',
    title: 'Transparency',
    desc: 'No hidden charges. No fine-print surprises. Every rate, every fee — disclosed upfront before you sign.',
  },
  {
    icon: <Heart size={28} />,
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Customer First',
    desc: 'Your financial well-being drives every decision we make. We only recommend what\'s right for you.',
  },
  {
    icon: <Zap size={28} />,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Speed',
    desc: '72-hour approvals aren\'t a marketing line — it\'s our standard. We respect your time.',
  },
  {
    icon: <Target size={28} />,
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Precision',
    desc: 'We match you to the exact bank and product that fits your profile — not the one with the best commission.',
  },
];

const milestones = [
  { year: '2017', title: 'Founded in Hyderabad', desc: 'Started with a vision to simplify loans for India\'s professionals.' },
  { year: '2021', title: '1,000 Loans Disbursed', desc: 'Reached our first milestone serving doctors, CAs and engineers.' },
  { year: '2022', title: 'Pan-India Expansion', desc: 'Expanded to Mumbai, Delhi, Bangalore, Chennai and Pune.' },
  { year: '2023', title: '10 Bank Partnerships', desc: 'Partnered with 10+ banks to offer the widest range of rates.' },
  { year: '2024', title: '₹500 Cr Disbursed', desc: '10,000+ professionals served, ₹500 Crore in loans disbursed.' },
  { year: '2025', title: 'AI-Powered Matching', desc: 'Launched AI eligibility check for instant pre-approval decisions.' },
];

const partnerBanks = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra', 'Bajaj Finserv', 'Tata Capital', 'Aditya Birla Finance', 'RBI Registered'];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem', fontFamily: 'inherit' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 60%, #FFF7ED 100%)', padding: '5rem 1rem 4.5rem', textAlign: 'center' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.75rem',
          letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1.1rem',
          marginBottom: '1.5rem', textTransform: 'uppercase',
        }}>
          <Award size={13} /> Est. 2017 · Hyderabad, India
        </span>

        <h1 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800,
          color: '#0F172A', letterSpacing: '-1.5px', lineHeight: 1.1,
          margin: '0 0 1.25rem', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto',
        }}>
          Built on Trust.{' '}
          <span style={{ color: '#3B82F6' }}>Driven by Purpose.</span>
        </h1>
        <p style={{
          color: '#64748B', fontSize: '1.1rem', lineHeight: 1.75,
          maxWidth: '600px', margin: '0 auto 2.5rem',
        }}>
          Founded by Raj Kumar Samudhrala (M.B.A), CapitalFlax was built on one belief — India&apos;s professionals deserve
          better financial products, faster approvals, and zero runaround.
          We&apos;re here to make that a reality.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/apply" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: '#1E3A8A', color: '#fff', fontWeight: 700, fontSize: '0.95rem',
            padding: '0.85rem 2rem', borderRadius: '50px', textDecoration: 'none',
          }}>
            Apply Now <ArrowRight size={16} />
          </Link>
          <Link href="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'transparent', color: '#1E3A8A', fontWeight: 700, fontSize: '0.95rem',
            padding: '0.85rem 2rem', borderRadius: '50px', textDecoration: 'none',
            border: '2px solid #1E3A8A',
          }}>
            See Our Services
          </Link>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#1E3A8A', padding: '3rem 1rem' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem', textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '0.5rem' }}>
              <div style={{ color: '#93C5FD', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#BFDBFE', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ padding: '5rem 1rem', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Our Mission
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.75px', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              Making Premium Finance <span style={{ color: '#3B82F6' }}>Accessible</span> to Every Professional
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 1.5rem' }}>
              Most banks were built for salaried employees. But doctors run practices.
              CAs manage firms. Architects handle project incomes. Their financial profiles
              are complex — and most lenders penalize them for it.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 2rem' }}>
              CapitalFlax was built differently. We understand professional income,
              speak your language, and source loan products designed specifically for you.
              Our team of ex-bankers negotiates rates you won&apos;t get walking into a branch.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'RBI-registered financial advisory services',
                'Partnered with 15+ leading banks & NBFCs',
                'Zero conflict of interest — we work for you',
                'Fully digital process, end to end',
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                  <span style={{ color: '#475569', fontSize: '0.92rem' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Home Loans', value: '7.3% p.a.', detail: 'Lowest rate in market', color: '#3B82F6', pct: 92 },
              { label: 'Professional Loans', value: '9.0% p.a.', detail: 'No collateral required', color: '#10B981', pct: 84 },
              { label: 'Business Loans', value: '14% p.a.', detail: '48-hr approval', color: '#F59E0B', pct: 76 },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F8FAFC', borderRadius: '14px', padding: '1.5rem', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{item.label}</div>
                    <div style={{ color: '#64748B', fontSize: '0.82rem' }}>{item.detail}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.25rem', color: item.color }}>{item.value}</div>
                </div>
                <div style={{ height: 6, background: '#E2E8F0', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${item.pct}%`, background: item.color, borderRadius: '99px' }} />
                </div>
              </div>
            ))}

            <div style={{ background: '#1E3A8A', borderRadius: '14px', padding: '1.5rem', color: '#fff', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>₹500 Cr+</div>
              <div style={{ color: '#BFDBFE', fontSize: '0.9rem', marginTop: '0.4rem' }}>Total loans disbursed across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
              What We Stand For
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.75px', margin: 0 }}>
              Our Core <span style={{ color: '#3B82F6' }}>Values</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '16px', padding: '2rem',
                border: '1px solid #E2E8F0', boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '14px', background: v.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: v.color, marginBottom: '1.25rem',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0F172A', margin: '0 0 0.6rem' }}>{v.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES / JOURNEY ── */}
      <section style={{ padding: '5rem 1rem', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Our Journey
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.75px', margin: 0 }}>
              5 Years of <span style={{ color: '#3B82F6' }}>Growth</span>
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '0.55rem', top: 0, bottom: 0, width: 2, background: '#E2E8F0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ position: 'relative', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: '-1.63rem',
                    width: 14, height: 14, borderRadius: '50%',
                    background: i === milestones.length - 1 ? '#F59E0B' : '#1E3A8A',
                    border: '3px solid #fff', boxShadow: '0 0 0 2px #E2E8F0',
                    flexShrink: 0, marginTop: '0.3rem',
                  }} />
                  <div>
                    <span style={{
                      display: 'inline-block', background: '#EFF6FF', color: '#1E3A8A',
                      fontWeight: 800, fontSize: '0.78rem', letterSpacing: '1px',
                      borderRadius: '999px', padding: '0.25rem 0.75rem', marginBottom: '0.5rem',
                    }}>
                      {m.year}
                    </span>
                    <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#0F172A', margin: '0 0 0.35rem' }}>{m.title}</h3>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS TRUST ── */}
      <section style={{ padding: '4rem 1rem', background: '#fff', borderTop: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.75px', margin: '0 0 2rem' }}>
            We are officially associated with all leading banks and <span style={{ color: '#3B82F6' }}>NBFC&apos;S</span>
          </h2>
          <div className="about-bank-marquee">
            <div className="about-bank-marquee-track">
              {[...partnerBanks, ...partnerBanks].map((name, i) => (
                <span key={`${name}-${i}`} className="about-bank-pill">
                  {name === 'RBI Registered' ? <Shield size={14} style={{ color: '#10B981', marginRight: '0.45rem' }} /> : null}
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / OFFICE ── */}
      <section style={{ padding: '5rem 1rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Get in Touch
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.75px', margin: '0 0 1.5rem' }}>
              We&apos;d Love to <span style={{ color: '#3B82F6' }}>Hear From You</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 2rem' }}>
              Whether you have a question about our loans, want to check your eligibility,
              or simply want to talk to an advisor — our team is always available.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: <MapPin size={18} />, label: 'Address', value: 'Flat # 1604/A 16th Floor Babukhan Estate, Basheerbagh Hyderabad - 500001' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+91 9985681944 , +91-9989245304' },
                { icon: <Mail size={18} />, label: 'Email', value: 'capitalflaxin@gmail.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E3A8A', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#94A3B8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                    <div style={{ color: '#0F172A', fontSize: '0.92rem', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick contact form */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '2.5rem', border: '1px solid #E2E8F0', boxShadow: '0 8px 40px -8px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#0F172A', margin: '0 0 1.5rem' }}>Send Us a Message</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(['Full Name', 'Email Address', 'Phone Number'] as const).map((placeholder) => (
                <input
                  key={placeholder}
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: '100%', padding: '0.85rem 1rem',
                    border: '1px solid #E2E8F0', borderRadius: '10px',
                    fontSize: '0.92rem', color: '#0F172A', outline: 'none',
                    background: '#F8FAFC', boxSizing: 'border-box',
                  }}
                />
              ))}
              <textarea
                placeholder="Your message or question..."
                rows={4}
                style={{
                  width: '100%', padding: '0.85rem 1rem',
                  border: '1px solid #E2E8F0', borderRadius: '10px',
                  fontSize: '0.92rem', color: '#0F172A', outline: 'none',
                  background: '#F8FAFC', resize: 'vertical', boxSizing: 'border-box',
                }}
              />
              <Link href="/apply" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                background: '#1E3A8A', color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                padding: '0.9rem', borderRadius: '10px', textDecoration: 'none',
              }}>
                Send Message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '5rem 1rem', background: '#1E3A8A', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem', letterSpacing: '-0.5px' }}>
          Ready to Experience the CapitalFlax Difference?
        </h2>
        <p style={{ color: '#BFDBFE', fontSize: '1rem', margin: '0 0 2.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join 10,000+ professionals who trust us for their biggest financial decisions.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/apply" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: '#F59E0B', color: '#fff', fontWeight: 700, fontSize: '1rem',
            padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none',
          }}>
            Apply Now — Free <ArrowRight size={16} />
          </Link>
          <Link href="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '1rem',
            padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.3)',
          }}>
            View Loan Products
          </Link>
        </div>
      </section>
    </div>
  );
}
