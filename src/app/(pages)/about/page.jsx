'use client';

import { useState, useEffect } from "react";
import { CheckCircle, Star, Award, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsTriggered, setSkillsTriggered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Skills
  const skills = [
    { name: "Brand Identity & Logo Design", level: 95 },
    { name: "Poster & Ad Design", level: 92 },
    { name: "Web UI/UX & Landing Pages", level: 90 },
    { name: "Social Media Creative Design", level: 94 },
    { name: "Typography & Color Theory", level: 88 },
  ];

  // Skill Animation
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    const skSection = document.querySelector("#skillsSection");
    if (skSection) observer2.observe(skSection);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-black transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className={`text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Me
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Creative Graphic Designer crafting meaningful visual identity through design.
          </p>
        </div>

        {/* Profile Section */}
        <div className="mt-14 flex flex-col md:flex-row items-center gap-10">
          <div className="flex justify-center w-full md:w-1/3">
            <Image
              src="/images/image_0.png" 
              alt="designer"
              width={300}
              height={300}
              className="rounded-full shadow-lg w-52 h-52 object-cover"
            />
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Hey, I’m Ahsan 👋</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a passionate Graphic Designer specializing in brand identity, UI/UX & marketing visuals.  
              I focus on clean aesthetics, deeply researched creative direction, and designs that instantly connect with the audience.
            </p>

            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-green-500" /> 2+ Years of Graphic Design Experience
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-green-500" /> Worked with International & Local Clients
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="text-green-500" /> Delivered 200+ Branding Assets & Designs
              </p>
            </div>
          </div>
        </div>

        {/* Trusted Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow">
            <Award className="mx-auto text-orange-500" size={32} />
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-200">120+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow">
            <Users className="mx-auto text-pink-500" size={32} />
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-200">80+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Clients</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow">
            <Star className="mx-auto text-yellow-500" size={32} />
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-200">4.9</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Client Rating</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl shadow">
            <CheckCircle className="mx-auto text-green-500" size={32} />
            <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-gray-200">100%</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Satisfaction</p>
          </div>
        </div>

        {/* Skills Section */}
        <section id="skillsSection" className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Expertise
          </h2>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <span>{skill.name}</span>
                  <span>{skillsTriggered ? skill.level : 0}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full">
                  <div
                    className="h-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{
                      width: skillsTriggered ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Want a design that elevates your brand?
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Let’s create something professional & visually stunning.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all"
          >
            Hire Me
          </a>
        </div>

      </div>
    </div>
  );
}
