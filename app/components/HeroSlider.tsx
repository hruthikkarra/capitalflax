"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Premium Loans for Professionals",
    subtitle: "Specialized financial solutions for Doctors, CAs, and Architects with 72-hour approval.",
    image: "/hero_professional.png",
    cta: "Apply Now",
    link: "/apply",
    badge: "Professional Loans"
  },
  {
    id: 2,
    title: "Your Dream Home, Our Premium Rates",
    subtitle: "Home loans from 7.3% p.a. Up to ₹20 Cr with zero processing fees for select professionals.",
    image: "/hero_home.png",
    cta: "Check Eligibility",
    link: "/services/home-loans",
    badge: "Home Loans"
  },
  {
    id: 3,
    title: "Fuel Your Business Growth",
    subtitle: "Unsecured business loans up to ₹1 Cr. Minimal documentation and fast-track processing.",
    image: "/hero_business.png",
    cta: "Get Consultation",
    link: "/services/business-loans",
    badge: "Business Loans"
  },
  {
    id: 4,
    title: "Drive Your Dreams Today",
    subtitle: "100% on-road funding for luxury and commercial vehicles with instant pre-approved offers.",
    image: "/hero_vehicle.png",
    cta: "View Offers",
    link: "/services/vehicle-loans",
    badge: "Vehicle Loans"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="hero-slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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

      {/* Navigation Arrows */}
      <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

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
