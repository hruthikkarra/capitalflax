"use client";

import { useState } from 'react';
import { FileText, FileCheck, CheckCircle, Banknote, Check } from 'lucide-react';

const steps = [
    {
        id: 1,
        stepLabel: "STEP 01",
        time: "5 Minutes",
        title: "Submit Application",
        desc: "Quick 5-minute online form",
        icon: FileText,
        features: [
            "Fill basic personal and professional details",
            "Select loan type and amount required",
            "Upload minimal initial documents",
            "Get instant eligibility estimate"
        ]
    },
    {
        id: 2,
        stepLabel: "STEP 02",
        time: "24 Hours",
        title: "Document Verification",
        desc: "Our team reviews your application",
        icon: FileCheck,
        features: [
            "Comprehensive review of submitted documents",
            "Verification of income and professional credentials",
            "Background checks and CIBIL score assessment",
            "Dedicated relationship manager assigned"
        ]
    },
    {
        id: 3,
        stepLabel: "STEP 03",
        time: "48 Hours",
        title: "Bank Approval",
        desc: "We process with partner banks",
        icon: CheckCircle,
        features: [
            "Application routed to best-matched partner banks",
            "Negotiation for preferential interest rates",
            "Final sanction letter generation",
            "Transparent communication of terms"
        ]
    },
    {
        id: 4,
        stepLabel: "STEP 04",
        time: "72 Hours Total",
        title: "Loan Disbursal",
        desc: "Funds transferred to your account",
        icon: Banknote,
        features: [
            "Final loan agreement signing",
            "Setup of EMI mandates (NACH/eMandate)",
            "Direct transfer to your designated bank account",
            "Post-disbursal support and relationship management"
        ]
    }
];

export default function ProcessSection() {
    const [activeStepId, setActiveStepId] = useState(1);

    const activeStep = steps.find(s => s.id === activeStepId) || steps[0];
    const ActiveIcon = activeStep.icon;

    return (
        <section className="process-section" id="process">
            <div className="process-header">
                <span className="section-label">OUR PROCESS</span>
                <h2 className="section-title">
                    From Application to <span className="text-secondary-blue">Approval</span>
                </h2>
                <p className="process-subtitle" style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.6", marginTop: "1rem" }}>
                    A transparent, streamlined process designed for speed and convenience. Get your<br />
                    loan approved in just 72 hours.
                </p>
            </div>

            <div className="process-layout">
                {/* Left Side: Steps List */}
                <div className="process-steps">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        const isActive = step.id === activeStepId;
                        return (
                            <div
                                key={step.id}
                                className={`process-step ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveStepId(step.id)}
                            >
                                <div className="step-icon-wrapper">
                                    <Icon size={24} />
                                </div>
                                <div className="step-content">
                                    <div className="step-meta">
                                        <span className="step-number">{step.stepLabel}</span>
                                        <span>•</span>
                                        <span className="step-time">{step.time}</span>
                                    </div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Details Card */}
                <div className="process-details-card" key={activeStep.id}>
                    <div className="details-header">
                        <div className="details-icon-wrapper">
                            <ActiveIcon size={40} />
                        </div>
                        <div>
                            <h3 className="details-title">{activeStep.title}</h3>
                            <div className="details-time">{activeStep.time}</div>
                        </div>
                    </div>

                    <p className="details-desc">{activeStep.desc}</p>

                    <ul className="details-features">
                        {activeStep.features.map((feature, idx) => (
                            <li key={idx}>
                                <div className="details-check"><Check size={16} /></div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
