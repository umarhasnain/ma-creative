"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Palette, Award } from 'lucide-react';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Creative Design',
      description: 'Unique and innovative visual solutions',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Brand Identity',
      description: 'Building memorable brand experiences',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Award Winning',
      description: 'Recognized excellence in design',
    },
  ];

  return (
    <div className="min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Visual
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse">
                Excellence
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transforming ideas into stunning designs that captivate and inspire
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="group px-8 py-4 bg-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Trust Section */}
      <section className="py-20 bg-white text-center">
        <p className="text-gray-500 text-lg">
          Empowering businesses with innovation & trust
        </p>

        <h3 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600 text-transparent bg-clip-text mt-4">
          Trusted by 500+ Happy Clients
        </h3>

        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-400"></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's create something amazing together
          </p>

          <Link
            href="/portfolio"
            className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 inline-flex items-center gap-2"
          >
            Explore Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <TestimonialSlider />
    </div>
  );
}
