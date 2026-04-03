"use client";

export default function TermsPage() {
    return (
        <div style={{ paddingTop: '5rem', paddingBottom: '5rem', fontFamily: 'Inter, sans-serif', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', margin: '0 0 0.5rem' }}>Terms of Service</h1>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '3rem' }}>Last Updated: March 29, 2026</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#334155', lineHeight: 1.7 }}>
                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and CapitalFlax ("we," "us," or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Role & Service Description</h2>
                        <p>CapitalFlax acts as a financial services aggregator and loan advisory platform. We partner with RBI-registered Banks and Non-Banking Financial Companies (NBFCs) to offer loans. We do not lend money directly, but rather act as a bridge between you and the lender. Final credit decisions are made solely by our lending partners based on their internal credit policies.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. User Representations</h2>
                        <p>By using the Site, you represent and warrant that:</p>
                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                            <li>All registration information you submit will be true, accurate, current, and complete;</li>
                            <li>You have the legal capacity to enter into binding contracts (i.e., you are over 18 years of age);</li>
                            <li>You are not accessing the site through automated or non-human means;</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Disclaimer of Liability</h2>
                        <p>While we strive to provide the most competitive loan offers and accurate EMI calculators, our tools depend on external market conditions and bank rates. The interest rates, processing fees, and loan limits shown on our website are indicative. Final terms will be detailed in the sanction letter provided by the respective bank or NBFC. CapitalFlax shall not be liable for any loan rejections, delayed disbursals, or changes in lender policies.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Governing Law</h2>
                        <p>These Terms shall be governed by and defined following the laws of India. CapitalFlax and yourself irrevocably consent that the courts of Hyderabad, Telangana shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
