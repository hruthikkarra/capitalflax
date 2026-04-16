"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Your Dream Home, Our Best Rates",
    subtitle: "Home loans starting at 7.3% p.a. Up to ₹20 Cr with zero processing fees for select professionals.",
    image: "/home.jpg.jpeg",
    cta: "Check Eligibility",
    link: "/services/home-loans",
    badge: "Home Loans",
    accent: "#3B82F6",
  },
  {
    id: 2,
    title: "Instant Personal Loans for Every Need",
    subtitle: "Up to ₹50 Lakhs. No collateral required. Same-day disbursal for salaried professionals.",
    image: "/hero_personal.png?v=2",
    cta: "Apply Now",
    link: "/services/personal-loans",
    badge: "Personal Loans",
    accent: "#10B981",
  },
  {
    id: 3,
    title: "Unlock the Value of Your Gold",
    subtitle: "Get up to ₹1 Crore against your gold jewellery at the lowest interest rates. Instant approval.",
    image: "/hero_gold.png?v=2",
    cta: "Get Gold Loan",
    link: "/services/gold-loans",
    badge: "Gold Loans",
    accent: "#F59E0B",
  },
  {
    id: 4,
    title: "Invest in Your Future Today",
    subtitle: "Education loans up to ₹1.5 Cr for top colleges in India & abroad. Flexible repayment options.",
    image: "/hero_education.png",
    cta: "Explore Education Loans",
    link: "/services/education-loans",
    badge: "Education Loans",
    accent: "#60A5FA",
  },
  {
    id: 5,
    title: "Exclusive Loans for Professionals",
    subtitle: "Doctors, CAs, architects & engineers — get preferential rates up to ₹50 Lakhs, no collateral.",
    image: "/hero_professional.png",
    cta: "View Professional Loans",
    link: "/services/professional-loans",
    badge: "Professional Loans",
    accent: "#A78BFA",
  },
  {
    id: 6,
    title: "Empower Your Business Dreams",
    subtitle: "Low-interest business loans up to ₹1 Cr with minimal documentation. Fast-track your company's growth today.",
    image: "/bus.jpeg",
    cta: "Get Business Loan",
    link: "/services/business-loans",
    badge: "Business Loans",
    accent: "#EC4899",
  },
];

type HeroSliderProps = {
  className?: string;
};

const AUTO_ADVANCE_MS = 5500;

export default function HeroSlider({ className }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== "undefined" && document.hidden) return;
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className={["hero-slider-wrapper", className].filter(Boolean).join(" ")}>
      <div className="slider-container">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <div
                  className="slide-badge"
                  style={{ background: `${s.accent}22`, color: s.accent, border: `1px solid ${s.accent}55` }}
                >
                  {s.badge}
                </div>
                <h1 className="slide-title">{s.title}</h1>
                <p className="slide-subtitle">{s.subtitle}</p>
                <div className="slide-buttons">
                  <Link
                    href={s.link}
                    className="btn-slider-primary"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)` }}
                  >
                    {s.cta} <ArrowRight className="btn-icon" />
                  </Link>
                  <Link href="/apply" className="btn-slider-outline">
                    Talk to Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="slider-indicators">
        {slides.map((s, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={index === current ? { background: slide.accent, width: "28px" } : {}}
          />
        ))}
      </div>

      {/* Side label strip */}
      <div className="slider-side-labels">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            style={{
              background: i === current ? `${s.accent}33` : "rgba(0,0,0,0.4)",
              border: `1px solid ${i === current ? s.accent : "rgba(255,255,255,0.15)"}`,
              color: i === current ? "#fff" : "rgba(255,255,255,0.5)",
              padding: "0.3rem 0.75rem",
              borderRadius: "50px",
              fontSize: "0.68rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.5px",
              whiteSpace: "nowrap",
              backdropFilter: "blur(6px)",
              transition: "all 0.3s",
            }}
          >
            {s.badge}
          </button>
        ))}
      </div>
    </section>
  );
}
