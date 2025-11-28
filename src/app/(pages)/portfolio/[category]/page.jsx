'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '../../../../components/ProjectCard';
import { projects } from '../../../../lib/Project';
import { useParams } from 'next/navigation';

export default function CategoryPortfolioPage() {
  const { category } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    category === 'all'
      ? projects
      : projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my finest work in the "{category}" category.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
