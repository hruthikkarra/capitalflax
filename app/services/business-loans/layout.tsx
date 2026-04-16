import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business Loans in India | Custom MSME & Startup Funding',
    description: 'Get instant business loans in India with CapitalFlax. Expert MSME and startup funding solutions with rates from 14%. 48-hour approval. Apply now.',
    alternates: { canonical: 'https://capitalflax.in/services/business-loans' },
};

export default function BusinessLoansLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
