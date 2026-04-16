import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Apply for a Loan — 5-Minute Application',
    description:
        'Apply for a home loan, business loan, personal loan or professional loan in minutes. Quick 5-minute form. No spam. Instant eligibility check. Response within 2 hours. Serving Hyderabad and all of India.',
    robots: { index: false, follow: false }, // Don't index form pages
    alternates: { canonical: 'https://capitalflax.in/apply' },
    openGraph: {
        title: 'Apply for a Loan | CapitalFlax',
        description: 'Quick 5-minute loan application. Zero spam. Instant eligibility check. Response in 2 hours.',
        url: 'https://capitalflax.in/apply',
        type: 'website',
    },
};

export default function ApplyLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
