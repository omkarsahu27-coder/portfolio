import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    image: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
    order: z.number()
  })
});

const educationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string().optional(),
    order: z.number()
  })
});

const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    order: z.number()
  })
});

export const collections = {
  projects: projectsCollection,
  education: educationCollection,
  skills: skillsCollection
};