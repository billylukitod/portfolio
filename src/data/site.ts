export const site = {
  name: 'Billy Lukito Danuharja',
  shortName: 'Billy',
  title: 'Robotics & Embedded Systems Engineer',
  description:
    'Focused on autonomous systems, intelligent control, and hardware–software integration.',
  headline: 'Building autonomous systems from sensors to software.',
  summary:
    'I develop robotics and embedded systems by integrating electronic hardware, real-time firmware, control algorithms, and robotics software into reliable working systems.',
  email: 'billylukito.d@gmail.com',
  location: 'Indonesia',
  siteUrl: 'https://billylukito.vercel.app',
  cvPath: '/cv/CV_Billy Lukito.pdf',
  availability: 'Open to engineering roles, research collaboration, and technical projects.',
  social: {
    github: 'https://github.com/billylukitod',
    linkedin: 'https://www.linkedin.com/in/billylukitod',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  seo: {
    defaultTitle: 'Robotics & Embedded Systems Engineer',
    titleTemplate: '%s | Billy Lukito Danuharja',
    defaultDescription:
      'Focused on autonomous systems, intelligent control, and hardware–software integration.',
    defaultImage: '/social-card-default.png',
    twitterHandle: '',
  },
  eyebrow: 'Robotics · Embedded Systems · Autonomous Systems',
  heroCtaPrimary: { label: 'View Projects', href: '/projects' },
  heroCtaSecondary: { label: 'About Me', href: '/about' },
  contactCta: {
    heading: 'Interested in robotics, embedded systems, or technical collaboration?',
    body: "Let's discuss engineering roles, research, and product development opportunities.",
    emailLabel: 'Send an Email',
    linkedinLabel: 'Connect on LinkedIn',
  },
  aboutBio: [
    'I am a robotics and embedded systems engineer passionate about creating intelligent machines that interact with the physical world. I specialize in the complete stack—from designing custom PCBs and writing low-level firmware to developing high-level control algorithms and integrating robot operating systems.',
    'My work spans control-system development, real-time operating systems, sensor fusion, and autonomous navigation. I thrive in bridging the gap between hardware constraints and software capabilities to build robust, reliable systems.',
  ],
  aboutPhilosophy:
    'I believe in understanding the complete system — from sensors and circuits to firmware and software — rather than treating hardware and software as separate disciplines. Good engineering comes from testing ideas in the real world.',
  aboutInterests:
    'Currently exploring advanced control strategies for mobile robots, real-time embedded systems, and integration patterns for autonomous platforms.',
} as const;

export type SiteConfig = typeof site;
