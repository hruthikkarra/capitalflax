import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MSME Loans in India | Fast Funding for Small Businesses',
    description: 'Specialized MSME loans for micro, small, and medium enterprises in India. Collateral-free options up to ₹50 Lakh. 48-hour approval. Register your Udyam and apply.',
    alternates: { canonical: 'https://capitalflax.in/services/msme-loans' },
};

export default function MSMELoansLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
