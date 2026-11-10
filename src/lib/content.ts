import { getCollection, getEntry } from 'astro:content';

export async function getFeaturedProjects() {
  const allProjects = await getCollection('projects');
  return allProjects
    .filter(project => project.data.featured)
    .sort((a, b) => a.data.order - b.data.order)
    .slice(0, 3);
}

export async function getAllProjectsSorted() {
  const allProjects = await getCollection('projects');
  return allProjects.sort((a, b) => a.data.order - b.data.order);
}

export async function getEducationSorted() {
  const allEducation = await getCollection('education');
  return allEducation.sort((a, b) => a.data.order - b.data.order);
}

export async function getAllSkills() {
  const allSkills = await getCollection('skills');
  return allSkills.sort((a, b) => a.data.order - b.data.order);
}

// --- NEW PHASE 4 HELPERS ---

export async function getAllTechTags() {
  const projects = await getAllProjectsSorted();
  const tags = new Map<string, number>();
  
  projects.forEach(project => {
    project.data.tech.forEach(tag => {
      tags.set(tag, (tags.get(tag) || 0) + 1);
    });
  });

  return Array.from(tags.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export async function getProjectBySlug(slug: string) {
  return await getEntry('projects', slug);
}

export async function getRelatedProjects(currentSlug: string, limit = 3) {
  const currentProject = await getProjectBySlug(currentSlug);
  if (!currentProject) return [];
  
  const currentTags = currentProject.data.tech;
  const allProjects = await getAllProjectsSorted();
  
  return allProjects
    .filter(p => p.slug !== currentSlug)
    .map(project => {
      const sharedTags = project.data.tech.filter(t => currentTags.includes(t)).length;
      return { project, sharedTags };
    })
    .filter(p => p.sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      return a.project.data.order - b.project.data.order;
    })
    .map(p => p.project)
    .slice(0, limit);
}

export async function getSkillsByCategory() {
  const skills = await getAllSkills();
  // Returns them sorted by their defined order field
  return skills.map(skill => ({
    category: skill.data.category,
    items: skill.data.items,
    order: skill.data.order
  }));
}