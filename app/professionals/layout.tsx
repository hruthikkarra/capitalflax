import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Professional Loans — For Doctors, CAs & Architects',
    description:
        'CapitalFlax offers tailored loans for doctors, chartered accountants, and architects. Flexible documentation, higher loan amounts, preferential interest rates. Apply online. Approved in 72 hours across India.',
    keywords: [
        'loan for doctors india',
        'loan for chartered accountants',
        'loan for architects',
        'professional loan hyderabad',
        'medical professional loan',
        'CA loan india',
        'doctor home loan',
        'architect business loan',
    ],
    alternates: { canonical: 'https://capitalflax.in/professionals' },
    openGraph: {
        title: 'Loans Built for Professionals | CapitalFlax',
        description:
            'Doctors, CAs, Architects — get loans tailored to your profession. Flexible income assessment, higher eligibility, and preferential rates.',
        url: 'https://capitalflax.in/professionals',
        type: 'website',
    },
};

export default function ProfessionalsLayout({ children }: { children: ReactNode }) {
    const professionalsSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'CapitalFlax Professional Loan Programs',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Doctor Loans', description: 'Specialised home, personal and business loans for medical professionals.' },
            { '@type': 'ListItem', position: 2, name: 'Chartered Accountant Loans', description: 'Loans assessed on firm revenue with minimal documentation.' },
            { '@type': 'ListItem', position: 3, name: 'Architect Loans', description: 'Project-income based loans with collateral-free options up to ₹50L.' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalsSchema) }}
            />
            {children}
        </>
    );
}
