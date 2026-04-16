import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialFixedBar from "./components/SocialFixedBar";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://capitalflax.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Business Loans in India | CapitalFlax",
    template: "%s | CapitalFlax",
  },
  description:
    "Get instant business loans in India with CapitalFlax. We offer MSME loans, startup funding, and professional loans with low interest rates, 72-hour approval, and zero processing fees.",
  keywords: [
    "home loan hyderabad",
    "business loan india",
    "personal loan for doctors",
    "loan for chartered accountants",
    "professional loans india",
    "home loan low interest rate",
    "best home loan 2025",
    "mortgage loan hyderabad",
    "gold loan india",
    "CapitalFlax",
    "financial services hyderabad",
    "loan for architects",
    "instant personal loan",
    "72 hour loan approval",
    "zero processing fee home loan",
  ],
  authors: [{ name: "CapitalFlax Financial Services" }],
  creator: "CapitalFlax Financial Services",
  publisher: "CapitalFlax Financial Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "CapitalFlax",
    title: "Business Loans in India | Fast MSME & Startup Funding | CapitalFlax",
    description:
      "Looking for a business loan in India? CapitalFlax provides MSME loans and startup funding with rates starting at 14%. 72-hour approval. Trusted by 10,000+ business owners.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CapitalFlax — Premium Financial Solutions for Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapitalFlax | Best Loans for Professionals in India",
    description:
      "Home Loans from 7.3% p.a. | 72-hr Approval | 0% Processing Fee | Trusted by 10,000+ Professionals",
    images: [`${BASE_URL}/og-image.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "CapitalFlax Financial Services",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Premium loan solutions for doctors, chartered accountants, architects and salaried professionals across India. Home loans, business loans, personal loans, mortgage loans and more.",
  telephone: "+91-9985681944",
  email: "support@capitalflax.in",
  foundingDate: "2017",
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Pune" },
    { "@type": "Country", name: "India" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500001",
    addressCountry: "IN",
  },
  priceRange: "7.3% onwards",
  sameAs: [
    "https://www.linkedin.com/company/capitalflax",
    "https://twitter.com/capitalflax",
    "https://www.facebook.com/capitalflax",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Loan Products",
    itemListElement: [
      { "@type": "Offer", name: "Home Loan", description: "Up to ₹20 Cr, starting 7.3% p.a." },
      { "@type": "Offer", name: "Business Loan", description: "Up to ₹1 Cr, starting 14% p.a." },
      { "@type": "Offer", name: "Personal Loan", description: "Up to ₹50 L, starting 10.5% p.a." },
      { "@type": "Offer", name: "Gold Loan", description: "Up to ₹1 Cr, starting 7.5% p.a." },
      { "@type": "Offer", name: "Mortgage Loan", description: "Up to ₹20 Cr, starting 10% p.a." },
      { "@type": "Offer", name: "Professional Loan", description: "Up to ₹75 L, starting 9% p.a." },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <SocialFixedBar />
        <Footer />
      </body>
    </html>
  );
}
