import Link from 'next/link';
import { Project } from '@/lib/types';
import ThreeLensesBadge from './ThreeLensesBadge';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className="group border-b border-gray-200 pb-16 mb-16 last:border-b-0">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="mb-5">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 block mb-3">
            {project.slug}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-gray-600 transition-colors">
            {project.shortTitle}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm">
            {project.category}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide bg-gray-100 px-3 py-1.5 rounded-sm">
            {project.year}
          </span>
        </div>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl leading-relaxed">
          {project.content.abstract}
        </p>

        <div className="mb-8">
          <ThreeLensesBadge
            systems={project.lenses.scores.systems}
            culture={project.lenses.scores.culture}
            clarity={project.lenses.scores.clarity}
            total={project.lenses.scores.total}
          />
        </div>

        <div className="text-sm font-semibold uppercase tracking-wide text-black group-hover:underline">
          View Project →
        </div>
      </Link>
    </article>
  );
}
