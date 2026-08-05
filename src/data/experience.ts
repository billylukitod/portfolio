export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: 'Research And Development Engineer',
    organization: 'PT. Piranti Kecerdasan Buatan (PIKEBU) · Internship',
    period: 'Aug 2025 – Dec 2025 · 5 mos',
    description: [
      'Developed an ACC system for a 1:10 scale Ackerman mobile robot to maintain safe distance and stable speed against a preceding obstacle/vehicle.',
      'Integrated LiDAR distance measurement and encoder feedback for real-time speed and distance monitoring.',
      'Designed and evaluated FSFM-based control logic with PSO optimization for improved safety-distance response.',
    ],
    current: false,
  },
  {
    role: 'Electronic Development Engineer',
    organization: 'PT Infoglobal Teknologi Semesta · Internship',
    period: 'Jan 2025 – Jun 2025 · 6 mos',
    description: [
      'Supported embedded system development and testing for DVR platform projects.',
      'Contributed to microcontroller migration from ATmega328 to STM32, including integration and validation support.',
      'Performed hardware debugging, system troubleshooting, validation checks, and technical documentation/reporting.',
    ],
    current: false,
  },
  {
    role: 'Co-Leader and Head of Electrical Engineer',
    organization: 'CAKSA TEAM',
    period: 'Oct 2024 – Oct 2025 · 1 yr 1 mo',
    description: [
      'Led the electrical division in developing UAV/autonomous robot systems, managing technical planning, task coordination, and integration readiness.',
      'Supervised electrical wiring, hardware assembly, functional testing, and troubleshooting during system development.',
      'Helped lead the team to 2nd place at SAFMC 2025 D1 Man-Machine in Singapore, outperforming teams from several Southeast Asian countries.',
    ],
    current: false,
  },
  {
    role: 'Electrical Engineer',
    organization: 'CAKSA TEAM',
    period: 'Oct 2023 – Oct 2024 · 1 yr 1 mo',
    description: [
      'Integrated microcontrollers, sensors, actuators, and motor control components for autonomous robot/UAV system development.',
      'Supported electrical wiring, embedded system prototyping, hardware debugging, and functional validation to improve system reliability.',
      "Contributed to technical preparation for SAFMC 2024 D1 Man-Machine, supporting the team's semi-finlist achievement in Singapore.",
    ],
    current: false,
  },
];
