import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/lib/utils';
import ThreeLensesBadge from '@/components/ThreeLensesBadge';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link
          href="/studio"
          className="text-sm uppercase tracking-wide text-gray-600 hover:text-black mb-8 inline-block"
        >
          ← Back to Studio
        </Link>

        {/* Project Header */}
        <header className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 block mb-3">
            {project.slug}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm">
              {project.category}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm">
              {project.year}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm">
              {project.meta.roles}
            </span>
          </div>

          <div className="mb-8">
            <ThreeLensesBadge
              systems={project.lenses.scores.systems}
              culture={project.lenses.scores.culture}
              clarity={project.lenses.scores.clarity}
              total={project.lenses.scores.total}
            />
          </div>
        </header>

        {/* Project Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Abstract
            </h2>
            <p className="text-xl leading-relaxed text-gray-800">
              {project.content.abstract}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              System Logic
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {project.content.systemLogic}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Cultural Context
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {project.content.culturalContext}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Outcome
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {project.content.outcomeProof}
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Keywords
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.meta.keywords.split(', ').map((keyword, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Next Project CTA */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <Link
            href="/studio"
            className="inline-block px-8 py-4 bg-black text-white font-semibold uppercase text-sm tracking-wider hover:bg-gray-800 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
