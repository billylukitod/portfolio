export interface SkillGroup {
  category: string;
  level: 'core' | 'working' | 'familiar';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  // ── Core: technologies backed by multiple projects and deep usage ──
  {
    category: 'Embedded Systems',
    level: 'core',
    skills: ['STM32', 'ESP32', 'ATmega', 'Embedded C/C++', 'UART', 'SPI', 'I²C', 'GPIO'],
  },
  {
    category: 'Electronics',
    level: 'core',
    skills: [
      'PCB Design',
      'KiCad',
      'Schematic Capture',
      'Hardware Bring-up',
      'Soldering',
      'Oscilloscope',
    ],
  },
  {
    category: 'Programming',
    level: 'core',
    skills: ['C/C++', 'Python', 'Git', 'Linux'],
  },

  // ── Working Knowledge: used meaningfully in specific projects ──
  {
    category: 'Robotics',
    level: 'working',
    skills: ['ROS', 'Gazebo', 'LiDAR Integration'],
  },
  {
    category: 'Control Systems',
    level: 'working',
    skills: ['Fuzzy Logic', 'PID', 'PSO Optimization'],
  },
  {
    category: 'Firmware & Protocols',
    level: 'working',
    skills: ['FreeRTOS', 'Wi-Fi / UDP', 'CRSF Protocol', 'IMU Sensors'],
  },

  // ── Familiar: currently learning or limited hands-on ──
  {
    category: 'Exploring',
    level: 'familiar',
    skills: ['ROS 2', 'SLAM', 'Navigation', 'Sensor Fusion', 'Jetson Nano', 'Docker'],
  },
];

export const toolsAndPlatforms: string[] = ['Arduino', 'VS Code', 'KiCad'];
