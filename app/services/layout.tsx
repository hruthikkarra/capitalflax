import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Loan Services — Home, Business, Personal, Gold, Mortgage Loans',
    description:
        'Explore CapitalFlax\'s comprehensive loan solutions: Home Loans from 7.3% (up to ₹20 Cr), Business Loans (up to ₹1 Cr), Personal Loans (up to ₹50 L), Gold Loans, Mortgage Loans and Professional Loans. 72-hour approval across India.',
    keywords: [
        'home loan india',
        'business loan hyderabad',
        'personal loan low interest',
        'gold loan instant approval',
        'mortgage loan india',
        'professional loan for doctors',
        'best loan rates 2025',
        'zero processing fee home loan',
    ],
    alternates: { canonical: 'https://www.capitalflax.com/services' },
    openGraph: {
        title: 'Comprehensive Loan Solutions | CapitalFlax',
        description:
            'Home Loans, Business Loans, Personal Loans, Gold Loans, Mortgage Loans — all starting at competitive rates. Apply in minutes. Approval in 72 hours.',
        url: 'https://www.capitalflax.com/services',
        type: 'website',
    },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
    // JSON-LD ItemList schema for services
    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'CapitalFlax Loan Products',
        description: 'Full range of loan products offered by CapitalFlax Financial Services',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home Loan', url: 'https://www.capitalflax.com/services#home-loan', description: 'Up to ₹20 Crore at 7.3% p.a.' },
            { '@type': 'ListItem', position: 2, name: 'Business Loan', url: 'https://www.capitalflax.com/services#business-loan', description: 'Up to ₹1 Crore at 14% p.a.' },
            { '@type': 'ListItem', position: 3, name: 'Personal Loan', url: 'https://www.capitalflax.com/services#personal-loan', description: 'Up to ₹50 Lakh at 10.5% p.a.' },
            { '@type': 'ListItem', position: 4, name: 'Gold Loan', url: 'https://www.capitalflax.com/services#gold-loan', description: 'Up to ₹1 Crore at 7.5% p.a.' },
            { '@type': 'ListItem', position: 5, name: 'Mortgage Loan', url: 'https://www.capitalflax.com/services#mortgage-loan', description: 'Up to ₹20 Crore at 10% p.a.' },
            { '@type': 'ListItem', position: 6, name: 'Professional Loan', url: 'https://www.capitalflax.com/services#professional-loan', description: 'Up to ₹75 Lakh at 9% p.a.' },
            { '@type': 'ListItem', position: 7, name: 'Education Loan', url: 'https://www.capitalflax.com/services#education-loan', description: 'Up to ₹1.5 Crore at 8.5% p.a.' },
            { '@type': 'ListItem', position: 8, name: 'Vehicle Loan', url: 'https://www.capitalflax.com/services#vehicle-loan', description: '100% On-Road Financing at 8.75% p.a.' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            {children}
        </>
    );
}
