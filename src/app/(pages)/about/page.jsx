'use client';

import { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard";
import { projects } from "../../../lib/Project";
import { Filter } from "lucide-react";

export default function PortfolioPage() {

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [counterTriggered, setCounterTriggered] = useState(false);
  const [skillsTriggered, setSkillsTriggered] = useState(false);

  // Stats Counter
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    orders: 0,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for Counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counterTriggered) {
          setCounterTriggered(true);

          let p = 0, c = 0, o = 0;

          const interval = setInterval(() => {
            if (p < 120) {
              setStats((s) => ({ ...s, projects: p++ }));
            }
            if (c < 80) {
              setStats((s) => ({ ...s, clients: c++ }));
            }
            if (o < 200) {
              setStats((s) => ({ ...s, orders: o++ }));
            }
          }, 24);

          setTimeout(() => clearInterval(interval), 3500);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector("#counterSection");
    if (element) observer.observe(element);
  }, [counterTriggered]);

  // Skills Animation
  const skills = [
    { name: "Brand Design", level: 95 },
    { name: "Web UI/UX", level: 90 },
    { name: "Illustration", level: 85 },
    { name: "Typography", level: 88 },
  ];

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

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Web Design" },
    { id: "print", label: "Print" },
    { id: "illustration", label: "Illustration" }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-black transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className={`text-center mb-14 ${isVisible && "opacity-100"} transition-all`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Portfolio
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing crafted work — blending creativity with visual precision & user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-md">
            <Filter className="w-5 h-5 text-gray-400 ml-2 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 text-sm rounded-full font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <div className="overflow-hidden rounded-xl">
              <ProjectCard key={project.id} project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Counters */}
        <section id="counterSection" className="mt-24 mb-16">
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-4xl font-bold text-orange-500">{stats.projects}+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-pink-500">{stats.clients}+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Happy Clients</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-blue-500">{stats.orders}+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Orders Delivered</p>
            </div>
          </div>
        </section>

        {/* Skills Progress */}
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

      </div>
    </div>
  );
}
