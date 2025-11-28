'use client';

import { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard"; // ✅ correct path
import { projects } from "../../../lib/Project";
import { Filter } from "lucide-react";

export default function PortfolioPage() { // ✅ default export
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my finest work, showcasing creativity, innovation, and attention to
            detail across various design disciplines.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex items-center justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="inline-flex items-center gap-4 p-2 bg-white rounded-full shadow-lg border border-gray-100">
            <Filter className="w-5 h-5 text-gray-400 ml-3" />

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* If No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
