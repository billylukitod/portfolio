import { getCollection } from 'astro:content';

export async function getPublishedNotes() {
  const notes = await getCollection('notes', ({ data }) => {
    return data.draft !== true;
  });

  return notes.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getAllProjects() {
  const projects = await getCollection('projects', ({ data }) => {
    return data.draft !== true;
  });

  return projects.sort((a, b) => {
    if (a.data.order !== undefined && b.data.order !== undefined) {
      return a.data.order - b.data.order;
    }
    if (a.data.order !== undefined) return -1;
    if (b.data.order !== undefined) return 1;

    return b.data.year.localeCompare(a.data.year);
  });
}

export async function getFeaturedProjects() {
  const allProjects = await getAllProjects();
  return allProjects
    .filter((project) => project.data.featured)
    .sort((a, b) => {
      const orderA = a.data.order !== undefined ? a.data.order : 999;
      const orderB = b.data.order !== undefined ? b.data.order : 999;
      return orderA - orderB;
    });
}
