'use client'

import { useEffect, useState } from 'react';
import { Code, Heart, Coffee, TrendingUp, Users, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Awards Won' },
  ];

  const skills = [
    { name: 'Brand Identity', level: 95 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Print Design', level: 88 },
    { name: 'Illustration', level: 90 },
    { name: 'Typography', level: 94 },
    { name: 'Photography', level: 85 },
  ];

  const values = [
    { icon: <Heart className="w-6 h-6" />, title: 'Passion', description: 'Every project is crafted with dedication and love' },
    { icon: <Target className="w-6 h-6" />, title: 'Precision', description: 'Attention to detail in every pixel and element' },
    { icon: <Users className="w-6 h-6" />, title: 'Collaboration', description: 'Working closely with clients to achieve their vision' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Innovation', description: 'Staying ahead with cutting-edge design trends' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {' '}
                Creative Designer
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              With over 2 years of experience in the design industry, I specialize in creating visually stunning and strategically effective designs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My approach combines artistic creativity with strategic thinking, ensuring every design looks beautiful and serves its purpose.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">Branding</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">UI/UX</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">Illustration</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Print Design</span>
            </div>
          </div>

          {/* Image Box */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient border */}
              <div className="p-1 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-3xl">
                <div className="bg-gray-100 rounded-3xl flex items-center justify-center p-1">
                  <div className="relative w-full h-[500px] flex items-center justify-center">
                    {/* <Code className="w-20 h-20 text-gray-400 absolute top-4 left-1/2 -translate-x-1/2 z-10" /> */}
                    <Image
                      src="/images/image_0.png"
                      alt="Creative Designer"
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative gradient pulse circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">My Skills</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Expertise across multiple design disciplines</p>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Core Values</h2>
        <p className="text-xl text-gray-600 text-center mb-16">What drives my creative process</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-12">
          <Coffee className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-8">Have a project in mind? I'd love to hear about it and help bring your vision to life.</p>
          <Link href='/contact'>
            <button className="px-10 py-4 bg-white text-orange-500 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
