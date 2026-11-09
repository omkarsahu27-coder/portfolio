import { getCollection } from 'astro:content';

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