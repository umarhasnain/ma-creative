// 'use client';

// import { useState, useEffect } from "react";
// import ProjectCard from "../../../components/ProjectCard";
// import { projects } from "../../../lib/Project";
// import { Filter } from "lucide-react";

// export default function PortfolioPage() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const categories = [
//     { id: "all", label: "All Projects" },
//     { id: "branding", label: "Branding" },
//     { id: "web", label: "Web Design" },
//     { id: "print", label: "Print" },
//     { id: "illustration", label: "Illustration" }
//   ];

//   const filteredProjects =
//     selectedCategory === "all"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <div className="min-h-screen pt-28 pb-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div
//           className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//         >
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//             My{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
//               Portfolio
//             </span>
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
//             A collection of my best work across different design disciplines — demonstrating design, execution, and creativity.
//           </p>
//         </div>

//         {/* Filter Bar */}
// <div
//   className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
//     isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//   }`}
// >
//   <div className="flex flex-wrap justify-center items-center gap-3 px-2 sm:px-4 py-2 bg-transparent">
//     {categories.map((category) => (
//       <button
//         key={category.id}
//         onClick={() => setSelectedCategory(category.id)}
//         className={`px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-sans font-semibold transition-all duration-300 whitespace-nowrap
//           ${
//             selectedCategory === category.id
//               ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105 hover:scale-110 rounded-full shadow-lg"
//               : "text-gray-700 hover:text-orange-500 dark:hover:text-orange-400 bg-transparent rounded-none"
//           }`}
//       >
//         {category.label}
//       </button>
//     ))}
//   </div>
// </div>




//         {/* Project Grid */}
//         <div
//           className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//             }`}
//         >
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* If No Projects Found */}
//         {filteredProjects.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-xl sm:text-2xl text-gray-400">
//               No projects found in this category
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// src/app/(pages)/portfolio/page.jsx
'use client';

import { useEffect, useState, useRef } from 'react';
import ProjectCard from '../../../components/ProjectCard'; // adjust path if needed
import { projects } from '../../../lib/Project';
import { Filter, Sparkles, PenTool, Award } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [skillsTriggered, setSkillsTriggered] = useState(false);

  const [stats, setStats] = useState({
    experience: 0, // years
    brands: 0,     // brands designed
    satisfaction: 0, // %
  });

  const counterRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ------ Categories ------
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'print', label: 'Print' },
    { id: 'illustration', label: 'Illustration' },
  ];

  // Normalize filter matching (case-insensitive)
  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => (p.category || '').toLowerCase() === selectedCategory.toLowerCase());

  // ------ Animated Counters (safe, no NaN) ------
  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);

          // Targets
          const targetExp = 2;   // years experience
          const targetBrands = 120;
          const targetSat = 99; // percent

          let curExp = 0;
          let curBrands = 0;
          let curSat = 0;

          const step = 30; // ms
          const timer = setInterval(() => {
            // smooth increment logic
            if (curExp < targetExp) curExp += 1;
            if (curBrands < targetBrands) curBrands += Math.ceil((targetBrands - curBrands) / 12);
            if (curSat < targetSat) curSat += Math.ceil((targetSat - curSat) / 12);

            // clamp
            curExp = Math.min(curExp, targetExp);
            curBrands = Math.min(curBrands, targetBrands);
            curSat = Math.min(curSat, targetSat);

            setStats({ experience: curExp, brands: curBrands, satisfaction: curSat });

            if (curExp >= targetExp && curBrands >= targetBrands && curSat >= targetSat) {
              clearInterval(timer);
            }
          }, step);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [countersStarted]);

  // ------ Skills animation ------
  useEffect(() => {
    const node = skillsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Skills list
  const skills = [
    { name: 'Branding & Identity', level: 95 },
    { name: 'Logo & Typography', level: 92 },
    { name: 'Social Media Design', level: 90 },
    { name: 'Marketing & Ads Creative', level: 88 },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-[#0b0b0d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Crafted Design that <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">builds brands</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visual identity, UI/UX, and marketing creatives with premium aesthetics — built to convert & delight.
          </p>
        </header>

        {/* Services Row (compact premium cards) */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          <article className="p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-transparent dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3">
              <PenTool className="w-7 h-7 text-orange-500" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Brand Identity</h3>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">Logo systems, guidelines, and visual language to scale your product and marketing.</p>
          </article>

          <article className="p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-transparent dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-pink-500" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Social & Marketing</h3>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">Ad creatives, carousels, and social templates that raise CTR and brand recall.</p>
          </article>

          <article className="p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 dark:from-transparent dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition">
            <div className="flex items-center gap-3">
              <Award className="w-7 h-7 text-blue-500" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Premium Quality</h3>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">Minimal, timeless designs built with pixel precision and brand strategy.</p>
          </article>
        </section>

        {/* Counters (animated) */}
        <section ref={counterRef} id="counterSection" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-orange-500">{stats.experience}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Years Experience</div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-pink-500">{stats.brands}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Brands Designed</div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-500">{stats.satisfaction}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Client Satisfaction</div>
          </div>
        </section>

        {/* Skills + CTA Row */}
        <section className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div ref={skillsRef} className="space-y-5">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skillsTriggered ? skill.level : 0}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: skillsTriggered ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-transparent dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Premium Package</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Full brand identity — logo, typography, color system, and social kit.</p>
            <Link href="/contact" className="inline-block w-full text-center px-5 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:scale-[1.03] transition">
              Let's Talk
            </Link>
          </aside>
        </section>

        {/* Filter Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-3 items-center">
            <Filter className="w-5 h-5 text-gray-500 hidden sm:block" />
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 text-sm sm:text-base font-medium transition rounded-full ${
                  selectedCategory === c.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={project.id || idx} className="transform hover:-translate-y-1 transition">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </section>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-lg text-gray-500 dark:text-gray-400">No projects found for this category.</p>
          </div>
        )}

        {/* CTA Footer */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to elevate your brand?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Working together, we build visual systems that convert.</p>
          <Link href="/contact" className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition">
            Hire Me
          </Link>
        </section>

      </div>
    </div>
  );
}
