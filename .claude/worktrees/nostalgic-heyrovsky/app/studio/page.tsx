'use client';

import { useState } from 'react';
import { getPortfolioData, getAllProjects, getProjectsByCategory } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';

export default function StudioPage() {
  const { studioPage } = getPortfolioData();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = getProjectsByCategory(selectedFilter);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {studioPage.heading}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {studioPage.subheading}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {studioPage.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 text-sm uppercase tracking-wide font-semibold transition-colors ${
                selectedFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
