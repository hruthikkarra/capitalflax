"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    subtitle?: string;
    faqs: FAQItem[];
    background?: string;
}

export default function FAQSection({
    title = 'Frequently Asked Questions',
    subtitle = 'Everything you need to know',
    faqs,
    background = '#fff',
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

    // JSON-LD FAQPage schema — injected as inline script
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section style={{ padding: '5rem 1rem', background }}>
            {/* Inject FAQ schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 800, color: '#0F172A', margin: '0 0 0.6rem', letterSpacing: '-0.5px' }}>
                        {title}
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>{subtitle}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                                style={{
                                    background: '#fff',
                                    border: `1px solid ${isOpen ? '#BFDBFE' : '#E2E8F0'}`,
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: isOpen ? '0 4px 16px -4px rgba(59,130,246,0.1)' : 'none',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1.25rem 1.5rem',
                                        background: 'none',
                                        border: 'none',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        gap: '1rem',
                                    }}
                                >
                                    <span itemProp="name" style={{ fontWeight: 700, fontSize: '0.97rem', color: '#0F172A', flex: 1 }}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        style={{
                                            color: '#3B82F6',
                                            flexShrink: 0,
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                </button>

                                <div style={{ maxHeight: isOpen ? '400px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                                    <div
                                        itemScope
                                        itemProp="acceptedAnswer"
                                        itemType="https://schema.org/Answer"
                                        style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.25rem' }}
                                    >
                                        <p itemProp="text" style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.75, margin: 0 }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
