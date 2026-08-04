export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Robotics & Autonomy',
    skills: [
      'ROS',
      'ROS 2',
      'Gazebo',
      'SLAM',
      'Navigation',
      'LiDAR Integration',
      'Ackermann Kinematics',
      'Sensor Fusion',
    ],
  },
  {
    category: 'Embedded Systems',
    skills: [
      'STM32',
      'ESP32',
      'ATmega',
      'FreeRTOS',
      'Embedded C/C++',
      'UART',
      'SPI',
      'I²C',
      'GPIO',
    ],
  },
  {
    category: 'Electronics',
    skills: [
      'PCB Design',
      'KiCad',
      'Schematic Capture',
      'Hardware Bring-up',
      'Oscilloscope',
      'Soldering',
      'Power Systems',
    ],
  },
  {
    category: 'Control Systems',
    skills: ['Fuzzy Logic', 'PID', 'PSO Optimization', 'System Modeling', 'Control Architecture'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'C/C++', 'TypeScript', 'MATLAB', 'Git', 'Linux'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Jetson Nano', 'Raspberry Pi', 'Arduino', 'VS Code', 'Docker', 'CI/CD'],
  },
];

export const toolsAndPlatforms: string[] = [
  'Jetson Nano',
  'Raspberry Pi',
  'Arduino',
  'VS Code',
  'Docker',
  'CI/CD',
];
