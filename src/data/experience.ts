export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: 'Electronic Development Engineer Intern',
    organization: '[DUMMY — REPLACE: Company Name]',
    period: '[DUMMY — REPLACE: Jan–Jun 2025]',
    description:
      'Designed embedded boards and developed firmware for various hardware systems, ensuring reliable real-time operation and efficient integration.',
    current: false,
  },
  {
    role: 'Robotics Research Assistant',
    organization: '[DUMMY — REPLACE: University Lab]',
    period: '[DUMMY — REPLACE: 2024–2025]',
    description:
      'Developed and tested autonomous robot platforms, integrating sensors, actuators, and control algorithms for research projects.',
    current: false,
  },
  {
    role: 'Electrical Division Lead',
    organization: '[DUMMY — REPLACE: Student Robotics Team]',
    period: '[DUMMY — REPLACE: 2023–2025]',
    description:
      'Led electrical and embedded systems development for competition robots, managing PCB design, power systems, and firmware architecture.',
    current: false,
  },
];
