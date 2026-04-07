"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 2,
    title: "Your Dream Home, Our Premium Rates",
    subtitle: "Home loans from 7.3% p.a. Up to ₹20 Cr with zero processing fees for select professionals.",
    image: "/home.jpg.jpeg",
    cta: "Check Eligibility",
    link: "/services/home-loans",
    badge: "Home Loans"
  },
  {
    id: 3,
    title: "Fuel Your Business Growth",
    subtitle: "Unsecured business loans up to ₹1 Cr. Minimal documentation and fast-track processing.",
    image: "/bus.jpeg",
    cta: "Get Consultation",
    link: "/services/business-loans",
    badge: "Business Loans"
  },
  {
    id: 4,
    title: "Drive Your Dreams Today",
    subtitle: "100% on-road funding for luxury and commercial vehicles with instant pre-approved offers.",
    image: "/car.jpg.jpeg",
    cta: "View Offers",
    link: "/services/vehicle-loans",
    badge: "Vehicle Loans"
  }
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

  return (
    <section 
      className={['hero-slider-wrapper', className].filter(Boolean).join(' ')}
    >
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <div className="slide-badge">{slide.badge}</div>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <div className="slide-buttons">
                  <Link href={slide.link} className="btn-slider-primary">
                    {slide.cta} <ArrowRight className="btn-icon" />
                  </Link>
                  <Link href="/contact" className="btn-slider-outline">
                    Talk to Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
