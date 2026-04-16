import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import FAQSection from '../../../components/FAQSection';

// ── Data ────────────────────────────────────────────────────────────────────

const CITY_DATA: Record<string, { label: string; state: string; pincode: string; phone: string }> = {
    hyderabad: { label: 'Hyderabad', state: 'Telangana', pincode: '500001', phone: '+91-40-00000000' },
    mumbai: { label: 'Mumbai', state: 'Maharashtra', pincode: '400001', phone: '+91-22-00000000' },
    delhi: { label: 'Delhi', state: 'Delhi', pincode: '110001', phone: '+91-11-00000000' },
    bangalore: { label: 'Bangalore', state: 'Karnataka', pincode: '560001', phone: '+91-80-00000000' },
    chennai: { label: 'Chennai', state: 'Tamil Nadu', pincode: '600001', phone: '+91-44-00000000' },
    pune: { label: 'Pune', state: 'Maharashtra', pincode: '411001', phone: '+91-20-00000000' },
};

const LOAN_DATA: Record<string, {
    label: string;
    amount: string;
    rate: string;
    tenure: string;
    fee: string;
    features: string[];
    faqs: { question: string; answer: string }[];
}> = {
    'home-loan': {
        label: 'Home Loan',
        amount: 'Up to ₹20 Crore',
        rate: '7.3% p.a.',
        tenure: 'Up to 30 years',
        fee: '0%',
        features: [
            'Lowest interest rates starting at 7.3% p.a.',
            'Up to ₹20 Crore loan amount',
            'Balance transfer with no penalty',
            '0% processing fee for professionals',
            'Approval within 72 hours',
            'Flexible EMI options — step-up or step-down',
        ],
        faqs: [
            { question: 'What is the minimum income required for a home loan?', answer: 'For salaried applicants, a minimum monthly income of ₹50,000 is required. Self-employed professionals need a minimum annual income of ₹3 Lakhs (as per ITR).' },
            { question: 'How quickly can I get home loan approval?', answer: 'CapitalFlax offers 72-hour approval for eligible applicants. Once all documents are submitted, our team processes your application on priority.' },
            { question: 'What is the maximum home loan amount available?', answer: 'We offer home loans up to ₹20 Crore for eligible professionals, subject to property valuation and income assessment.' },
            { question: 'Is there any processing fee for home loans?', answer: 'For salaried professionals and qualified borrowers, we offer 0% processing fee home loans. Terms and conditions apply.' },
            { question: 'Can I transfer my existing home loan to CapitalFlax?', answer: 'Yes! We offer balance transfer facility at competitive rates. You can also avail a top-up loan at the time of transfer.' },
        ],
    },
    'business-loan': {
        label: 'Business Loan',
        amount: 'Up to ₹1 Crore',
        rate: '14% p.a.',
        tenure: 'Up to 7 years',
        fee: '1%',
        features: [
            'Business loans up to ₹1 Crore',
            'Starting at 14% p.a.',
            'Overdraft facility for working capital',
            'Equipment and machinery finance',
            '48-hour approval for urgent needs',
            'Collateral-free up to ₹50 Lakhs',
        ],
        faqs: [
            { question: 'Who is eligible for a business loan?', answer: 'Businesses with minimum 2 years of operation, consistent revenue, and a CIBIL score above 650 are eligible. Startups may be evaluated case by case.' },
            { question: 'Do I need collateral for a business loan?', answer: 'For loans up to ₹50 Lakhs, we offer collateral-free business loans. For higher amounts, security or guarantee may be required.' },
            { question: 'Can I use a business loan for inventory purchase?', answer: 'Yes. Business loans can be used for working capital, inventory, equipment purchase, business expansion, or any legitimate business purpose.' },
            { question: 'How long does business loan approval take?', answer: 'We offer 48-hour approval for business loans in urgent cases. Standard processing takes 3-5 business days.' },
            { question: 'What documents are required for a business loan?', answer: 'You need KYC documents, last 2 years ITR, business registration certificate, last 6 months bank statements, and GST returns.' },
        ],
    },
    'personal-loan': {
        label: 'Personal Loan',
        amount: 'Up to ₹50 Lakhs',
        rate: '10.5% p.a.',
        tenure: 'Up to 5 years',
        fee: '2%',
        features: [
            'Instant personal loans up to ₹50 Lakhs',
            'No collateral required',
            'Same-day disbursal available',
            'Flexible tenure up to 5 years',
            'Use for any personal purpose',
            'Online application — apply in 5 minutes',
        ],
        faqs: [
            { question: 'Can I get a personal loan without collateral?', answer: 'Yes. All CapitalFlax personal loans are unsecured — no collateral or guarantor required.' },
            { question: 'How fast is personal loan disbursal?', answer: 'For eligible applicants with complete documents, same-day disbursal is available. Standard disbursal takes 24-48 hours after approval.' },
            { question: 'What can I use a personal loan for?', answer: 'Personal loans can be used for medical emergencies, travel, wedding expenses, home renovation, education, or any personal financial need.' },
            { question: 'What is the minimum CIBIL score for a personal loan?', answer: 'We prefer a CIBIL score of 700+, but applicants with scores between 650-700 may also be considered with slightly higher interest rates.' },
            { question: 'Can I prepay my personal loan?', answer: 'Yes, personal loans can be prepaid. A nominal prepayment charge may apply depending on the tenure and outstanding amount.' },
        ],
    },
    'gold-loan': {
        label: 'Gold Loan',
        amount: 'Up to ₹1 Crore',
        rate: '7.5% p.a.',
        tenure: 'Up to 3 years',
        fee: '0.5%',
        features: [
            'Instant gold loans up to ₹1 Crore',
            'Lowest gold loan rates from 7.5% p.a.',
            'Approval in 30 minutes',
            'Safe custody of your gold',
            'Flexible repayment — EMI or bullet',
            'No income proof required',
        ],
        faqs: [
            { question: 'What types of gold are accepted as collateral?', answer: 'We accept gold jewelry, gold coins, and gold bars of 18-24 karat purity. Gold ETFs and digital gold are not accepted as collateral.' },
            { question: 'How is the gold loan amount determined?', answer: 'The loan amount is typically up to 75% of the current market value of the gold (LTV ratio as per RBI guidelines).' },
            { question: 'Is my gold safe with CapitalFlax?', answer: 'Absolutely. Your gold is stored in fully insured, high-security bank vaults. It is returned in the same condition after loan repayment.' },
            { question: 'Do I need income proof for a gold loan?', answer: 'No! Gold loans do not require income proof, ITR, or CIBIL score. Just your gold and KYC documents are sufficient.' },
            { question: 'Can I extend my gold loan tenure?', answer: 'Yes, gold loan tenures can be extended upon request, subject to interest payment up to date and gold valuation.' },
        ],
    },
    'mortgage-loan': {
        label: 'Mortgage Loan',
        amount: 'Up to ₹20 Crore',
        rate: '10% p.a.',
        tenure: 'Up to 20 years',
        fee: '1%',
        features: [
            'Loan against property up to ₹20 Crore',
            'Competitive rates from 10% p.a.',
            'Residential or commercial property accepted',
            'Use funds for any purpose',
            'Highest Loan-to-Value (LTV) ratio',
            'No end-use restriction on funds',
        ],
        faqs: [
            { question: 'What types of property are accepted for mortgage loans?', answer: 'We accept residential properties (apartments, villas, independent houses), commercial properties (shops, offices), and industrial properties as collateral.' },
            { question: 'What is the maximum LTV ratio for mortgage loans?', answer: 'We offer up to 70% of the property\'s current market value as loan amount, one of the highest LTV ratios in the industry.' },
            { question: 'Can I use mortgage loan funds for business purposes?', answer: 'Yes. Unlike home loans, mortgage loans (LAP) have no end-use restriction. Funds can be used for business expansion, working capital, education, or any purpose.' },
            { question: 'How is property valuation done?', answer: 'CapitalFlax has empanelled property evaluators who conduct a physical and market-based valuation of your property. The process takes 2-3 business days.' },
            { question: 'Can I take a mortgage loan on a jointly owned property?', answer: 'Yes, you can. All co-owners must be co-applicants in the loan application. Their income may also be included for enhanced eligibility.' },
        ],
    },
    'professional-loan': {
        label: 'Professional Loan',
        amount: 'Up to ₹75 Lakhs',
        rate: '9% p.a.',
        tenure: 'Up to 10 years',
        fee: '0%',
        features: [
            'Unsecured loans up to ₹75 Lakhs',
            'Special rates from 9% p.a.',
            'For doctors, CAs, architects, and lawyers',
            'No collateral required',
            'Flexible income documentation',
            'Practice setup and equipment finance',
        ],
        faqs: [
            { question: 'Who qualifies for a professional loan?', answer: 'Qualified professionals including MBBS doctors, MD/MS specialists, Chartered Accountants (CA), Architects, Lawyers (LLB/LLM), and Engineers with professional practice income qualify.' },
            { question: 'Can I use a professional loan to set up a clinic or office?', answer: 'Yes! Professional loans can be used for clinic setup, office interiors, equipment purchase, practice expansion, or any professional establishment purpose.' },
            { question: 'Is professional loan income documentation flexible?', answer: 'Yes. We understand that professional incomes can be irregular. We accept ITR, bank statements, and practice receipts as income proof with flexible assessment.' },
            { question: 'What is the tenure for a professional loan?', answer: 'Professional loans are available for up to 10 years tenure, making EMIs manageable even for higher loan amounts.' },
            { question: 'Do I need to be an established professional to get this loan?', answer: 'Freshly qualified professionals may also be eligible with a guarantor or a higher CIBIL score. We evaluate each case individually.' },
        ],
    },
};

// ── generateStaticParams ────────────────────────────────────────────────────

export function generateStaticParams() {
    const cities = Object.keys(CITY_DATA);
    const types = Object.keys(LOAN_DATA);
    return cities.flatMap(city => types.map(type => ({ city, type })));
}

// ── generateMetadata ────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; type: string }>;
}) {
    const { city, type } = await params;
    const cityInfo = CITY_DATA[city];
    const loanInfo = LOAN_DATA[type];
    if (!cityInfo || !loanInfo) return {};

    const title = `${loanInfo.label} in ${cityInfo.label} — Starting ${loanInfo.rate}`;
    const description = `Get a ${loanInfo.label} in ${cityInfo.label} starting at ${loanInfo.rate}. ${loanInfo.amount} loan amount. Tenure up to ${loanInfo.tenure}. Quick approval, minimal documentation. Apply at CapitalFlax.`;

    return {
        title,
        description,
        keywords: [
            `${loanInfo.label.toLowerCase()} ${cityInfo.label.toLowerCase()}`,
            `best ${loanInfo.label.toLowerCase()} ${cityInfo.label.toLowerCase()} 2025`,
            `${loanInfo.label.toLowerCase()} interest rate ${cityInfo.label.toLowerCase()}`,
            `${loanInfo.label.toLowerCase()} india`,
            'CapitalFlax',
        ],
        alternates: { canonical: `https://capitalflax.in/loans/${city}/${type}` },
        openGraph: {
            title,
            description,
            url: `https://capitalflax.in/loans/${city}/${type}`,
            type: 'website' as const,
        },
    };
}

// ── Page component ──────────────────────────────────────────────────────────

export default async function CityLoanPage({
    params,
}: {
    params: Promise<{ city: string; type: string }>;
}) {
    const { city, type } = await params;
    const cityInfo = CITY_DATA[city];
    const loanInfo = LOAN_DATA[type];

    if (!cityInfo || !loanInfo) notFound();

    // JSON-LD: LoanOrService + LocalBusiness + BreadcrumbList
    const schema = [
        {
            '@context': 'https://schema.org',
            '@type': 'LoanOrCredit',
            name: `${loanInfo.label} in ${cityInfo.label}`,
            description: `${loanInfo.label} offered by CapitalFlax in ${cityInfo.label}. Starting at ${loanInfo.rate}. Up to ${loanInfo.amount}. Tenure: ${loanInfo.tenure}.`,
            provider: { '@type': 'FinancialService', name: 'CapitalFlax Financial Services' },
            amount: { '@type': 'MonetaryAmount', currency: 'INR', maxValue: loanInfo.amount },
            interestRate: loanInfo.rate,
            loanTerm: { '@type': 'QuantitativeValue', value: loanInfo.tenure },
            areaServed: { '@type': 'City', name: cityInfo.label },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `CapitalFlax — ${cityInfo.label}`,
            description: `${loanInfo.label} services in ${cityInfo.label}, ${cityInfo.state}`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: cityInfo.label,
                addressRegion: cityInfo.state,
                postalCode: cityInfo.pincode,
                addressCountry: 'IN',
            },
            telephone: cityInfo.phone,
            url: `https://capitalflax.in/loans/${city}/${type}`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://capitalflax.in' },
                { '@type': 'ListItem', position: 2, name: 'Loans', item: 'https://capitalflax.in/services' },
                { '@type': 'ListItem', position: 3, name: cityInfo.label, item: `https://capitalflax.in/loans/${city}` },
                { '@type': 'ListItem', position: 4, name: loanInfo.label, item: `https://capitalflax.in/loans/${city}/${type}` },
            ],
        },
    ];

    return (
        <div style={{ paddingTop: '5rem' }}>
            {/* JSON-LD Schemas */}
            {schema.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', padding: '4rem 1rem 3.5rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFF6FF', color: '#1E3A8A', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1.5px', borderRadius: '999px', padding: '0.4rem 1rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                    <MapPin size={13} /> {cityInfo.label}, {cityInfo.state}
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 0.75rem' }}>
                    {loanInfo.label} in <span style={{ color: '#3B82F6' }}>{cityInfo.label}</span>
                </h1>
                <p style={{ color: '#64748B', fontSize: '1.05rem', margin: '0 0 2.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Starting at <strong style={{ color: '#0F172A' }}>{loanInfo.rate}</strong> · {loanInfo.amount} · {loanInfo.tenure} tenure.
                    Trusted by 10,000+ professionals across India.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#1E3A8A', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now <ArrowRight size={16} />
                </Link>
            </section>

            {/* Stats */}
            <section style={{ background: '#fff', padding: '3rem 1rem', borderBottom: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                    {[
                        { label: 'LOAN AMOUNT', value: loanInfo.amount },
                        { label: 'INTEREST RATE', value: loanInfo.rate },
                        { label: 'MAX TENURE', value: loanInfo.tenure },
                        { label: 'PROCESSING FEE', value: loanInfo.fee },
                    ].map(s => (
                        <div key={s.label} style={{ padding: '1.5rem', border: '1px solid #F1F5F9', borderRadius: '12px' }}>
                            <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.5rem' }}>{s.label}</div>
                            <div style={{ fontWeight: 800, fontSize: '1.3rem', color: '#0F172A' }}>{s.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Features */}
            <section style={{ padding: '4rem 1rem', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontWeight: 800, fontSize: '1.75rem', color: '#0F172A', margin: '0 0 2rem', textAlign: 'center' }}>
                        Why Choose CapitalFlax for {loanInfo.label} in {cityInfo.label}?
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {loanInfo.features.map((f, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: '#fff', padding: '1.1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                                <CheckCircle size={18} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '1px' }} />
                                <span style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ with Schema */}
            <FAQSection
                title={`${loanInfo.label} FAQs — ${cityInfo.label}`}
                subtitle={`Common questions about ${loanInfo.label.toLowerCase()} in ${cityInfo.label}`}
                faqs={loanInfo.faqs}
                background="#fff"
            />

            {/* CTA */}
            <section style={{ padding: '4rem 1rem', background: '#1E3A8A', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#fff', margin: '0 0 1rem' }}>
                    Get Your {loanInfo.label} in {cityInfo.label} Today
                </h2>
                <p style={{ color: '#BFDBFE', margin: '0 0 2.5rem', fontSize: '1rem' }}>
                    Quick application. Transparent process. Best rates from 15+ bank partners.
                </p>
                <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#F59E0B', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '0.9rem 2.25rem', borderRadius: '50px', textDecoration: 'none' }}>
                    Apply Now — Free <ArrowRight size={16} />
                </Link>
            </section>

            {/* Internal links to other cities */}
            <section style={{ padding: '3rem 1rem', background: '#F8FAFC', borderTop: '1px solid #F1F5F9' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: '1.25rem' }}>
                        {loanInfo.label} Available in Other Cities
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                        {Object.entries(CITY_DATA)
                            .filter(([key]) => key !== city)
                            .map(([key, c]) => (
                                <Link key={key} href={`/loans/${key}/${type}`}
                                    style={{ padding: '0.5rem 1.1rem', borderRadius: '999px', border: '1px solid #E2E8F0', background: '#fff', color: '#3B82F6', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
                                    {loanInfo.label} in {c.label}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
