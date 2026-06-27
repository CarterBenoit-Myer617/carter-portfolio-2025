import { PortfolioData, Project } from './types';
import portfolioData from '@/data/portfolio-data.json';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}

export function getAllProjects(): Project[] {
  return getPortfolioData().projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getSelectedProjects(): Project[] {
  const data = getPortfolioData();
  return data.selectedWork
    .map((selected) => {
      return data.projects.find((p) => p.id === selected.projectId);
    })
    .filter((p): p is Project => p !== undefined);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return getAllProjects();
  return getAllProjects().filter((p) => p.category === category);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
