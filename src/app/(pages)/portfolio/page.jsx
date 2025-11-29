'use client';

import { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard";
import { projects } from "../../../lib/Project";
import { Filter } from "lucide-react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Portfolio
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            A collection of my best work across different design disciplines — demonstrating design, execution, and creativity.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 "
            }`}
        >
          <div className="flex flex-wrap justify-center items-center gap-3 px-2 sm:px-4 py-2 ">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-sans font-semibold transition-all duration-300 whitespace-nowrap
          ${selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105 hover:scale-110"
                    : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>



        {/* Project Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* If No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl sm:text-2xl text-gray-400">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
