import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Us — CapitalFlax Financial Services',
  description:
    'Learn about CapitalFlax — India\'s premium financial services company built for professionals. Our mission, values, and the story behind 10,000+ happy professionals.',
  keywords: [
    'about capitalflax',
    'capitalflax financial services hyderabad',
    'loan company india',
    'professional loan company',
    'about us capitalflax',
  ],
  alternates: { canonical: 'https://www.capitalflax.com/about' },
  openGraph: {
    title: 'About CapitalFlax | Trusted by 10,000+ Professionals',
    description:
      'CapitalFlax is India\'s premium financial services company built for doctors, CAs, architects and professionals. Learn our story and mission.',
    url: 'https://www.capitalflax.com/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About CapitalFlax Financial Services',
    description:
      'CapitalFlax is a premium financial services company specializing in professional loans across India, headquartered in Hyderabad.',
    url: 'https://www.capitalflax.com/about',
    mainEntity: {
      '@type': 'FinancialService',
      name: 'CapitalFlax Financial Services',
      foundingDate: '2017',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
