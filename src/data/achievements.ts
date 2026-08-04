export interface Achievement {
  title: string;
  event?: string;
  year: string;
  description: string;
  type: 'competition' | 'academic' | 'certification' | 'other';
}

export const achievements: Achievement[] = [
  {
    title: '[DUMMY — VERIFY: Second Place]',
    event: '[DUMMY — REPLACE: SAFMC 2025]',
    year: '2025',
    description:
      '[DUMMY — REPLACE: Developed autonomous algorithms for an aerial vehicle competition.]',
    type: 'competition',
  },
  {
    title: "[DUMMY — REPLACE: Dean's List / Academic Achievement]",
    year: '[DUMMY — REPLACE: 2024]',
    description:
      '[DUMMY — REPLACE: Awarded for outstanding academic performance in the engineering faculty.]',
    type: 'academic',
  },
  {
    title: '[DUMMY — REPLACE: Relevant Certification or Award]',
    year: '[DUMMY — REPLACE: 2023]',
    description:
      '[DUMMY — REPLACE: Completed an advanced course or received recognition in a related field.]',
    type: 'other',
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: '[DUMMY — REPLACE: Bachelor of Engineering]',
    institution: '[DUMMY — REPLACE: University Name]',
    period: '[DUMMY — REPLACE: 2021–2025]',
    description:
      'Focus on robotics and embedded systems, including coursework in control theory, microcontrollers, and autonomous systems.',
  },
];
