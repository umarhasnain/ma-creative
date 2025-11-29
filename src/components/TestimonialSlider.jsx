

'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Creative Co.',
    review:
      'Muhammad Ahsan completely transformed our brand identity. His designs are visually stunning, communicate our story clearly, and exceed expectations. Highly professional and recommended!',
    avatar: '/images/11.jpg',
  },
  {
    name: 'David Lee',
    role: 'Founder, TechSolutions',
    review:
      'Ahsan’s creativity and attention to detail are exceptional. Every project feels tailored, polished, and highly professional. Truly a pleasure to work with!',
    avatar: '/images/13.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Head, BrandX',
    review:
      'Working with Muhammad Ahsan was effortless. His modern and attractive designs resonate perfectly with our audience, boosting engagement and brand perception.',
    avatar: '/images/img2.webp',
  },
  {
    name: 'Qamar Ahmed',
    role: 'Founder, AhmedTech',
    review:
      'Ahsan delivers designs that are not only beautiful but strategically effective. His work adds significant value to our projects and brand image.',
    avatar: '/images/12.jpg',
  },
];


export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 sec per testimonial
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
        Experience Shared By Clients
      </h2>

      {/* Testimonial Card */}
      <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center text-center transition-all duration-700">
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-4 animate-pulse">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400" />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-700 italic text-lg md:text-xl max-w-3xl mb-8">
          "{testimonials[current].review}"
        </p>

        {/* Client Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-orange-500 shadow-lg"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {testimonials[current].name}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              index === current ? 'bg-orange-500 scale-125 shadow-lg' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
