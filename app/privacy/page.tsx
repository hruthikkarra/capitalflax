"use client";

export default function PrivacyPolicyPage() {
    return (
        <div style={{ paddingTop: '5rem', paddingBottom: '5rem', fontFamily: 'Inter, sans-serif', background: '#F8FAFC' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', margin: '0 0 0.5rem' }}>Privacy Policy</h1>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '3rem' }}>Last Updated: March 29, 2026</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#334155', lineHeight: 1.7 }}>
                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Introduction</h2>
                        <p>Welcome to CapitalFlax ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. The Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                            <li><strong>Contact Data:</strong> includes residential address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details, income statements, ITRs, and CIBIL scores necessary for loan processing.</li>
                            <li><strong>Profile & Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                            <li>Where we need to process your loan application with our partner banks and NBFCs.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation (such as RBI KYC guidelines).</li>
                        </ul>
                        <p><strong>Note on CIBIL Checks:</strong> By submitting an application through our platform, you consent to us conducting a "soft" or "hard" inquiry with credit bureaus like TransUnion CIBIL to assess your eligibility.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We use bank-grade 256-bit AES encryption for all data storage and transit. In addition, we limit access to your personal data to those employees, agents, contractors, and lending partners who have a business need to know.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Your Legal Rights</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, and the right to withdraw consent. To exercise any of these rights, please contact our Data Protection Officer at support@capitalflax.in.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
