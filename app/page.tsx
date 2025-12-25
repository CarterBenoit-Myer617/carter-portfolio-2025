import Link from 'next/link';
import { getPortfolioData, getSelectedProjects } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const { siteInfo } = getPortfolioData();
  const selectedProjects = getSelectedProjects();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {siteInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            {siteInfo.title}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed mb-12">
          {siteInfo.hero}
        </p>

        <div className="flex gap-4">
          <Link
            href="/studio"
            className="px-8 py-4 bg-black text-white font-semibold uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            {siteInfo.navigation.work} →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-black font-semibold uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            {siteInfo.navigation.contact}
          </Link>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-12">
            Selected Systems
          </h2>
          <div className="space-y-0">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {siteInfo.cta}
          </h3>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white font-semibold uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
