import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Startup Funding & Loans in India | Beginner-Friendly Credit',
    description: 'Explore startup funding and loan options in India. Secure non-dilutive capital for your startup growth. Low interest rates and 48-hour approval process. Apply with CapitalFlax.',
    alternates: { canonical: 'https://capitalflax.in/services/startup-funding' },
};

export default function StartupFundingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
