import { Experience, NavLink, Project, SocialLink, TechCategory } from '../models/portfolio.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'About Me', fragment: 'experience' },
  { label: 'Contact', fragment: 'contact' },
];

export const TYPING_ROLES = ['Software Engineering Student'];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Emotion Detection System',
    description:
      'Built a real-time emotion detection system using facial analysis and machine learning models to classify user emotions from video input.',
    tags: [
      { name: 'Python', icon: 'python' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'TensorFlow', icon: 'tensorflow' },
    ],
    link: 'https://github.com/nmulji-pixie',
  },
  {
    title: 'Predictive Modeling of Urban Air Pollution',
    description:
      'Developed a machine learning pipeline to predict PM2.5 levels in urban environments using historical environmental and meteorological data.',
    tags: [
      { name: 'Python', icon: 'python' },
      { name: 'Scikit-learn', icon: 'scikitlearn' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
    ],
    link: 'https://github.com/nmulji-pixie',
  },
  {
    title: 'Multiplayer Strategy Game',
    description:
      'Designed and implemented a real-time multiplayer strategy game with synchronized game state management and interactive gameplay mechanics.',
    tags: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Socket.io', icon: 'socketdotio' },
      { name: 'React', icon: 'react' },
    ],
    link: 'https://github.com/nmulji-pixie',
  },
  {
    title: 'PowerPoint-to-Podcast Converter',
    description:
      'Built a tool that converts PowerPoint presentations into audio podcasts using text extraction and AI-based text-to-speech generation.',
    tags: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
      { name: 'OpenAI API', icon: 'openai' },
      { name: 'FFmpeg', icon: 'ffmpeg' },
    ],
    link: 'https://github.com/nmulji-pixie',
  },
  {
    title: 'Interactive Electric Circuit Simulator',
    description:
      'Developed an interactive web-based circuit simulator to model and visualize electrical circuits with real-time component behavior.',
    tags: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Canvas API' },
      { name: 'D3.js', icon: 'd3' },
    ],
    link: 'https://github.com/nmulji-pixie',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'August 2025 — Present',
    title: 'Software Development Intern',
    company: 'Airbus',
    description:
      'Developed data automation tools and reporting systems to optimize engineering workflows. Contributed to the design and implementation of scalable internal applications, improving data processing efficiency and reducing manual effort. Collaborated with cross-functional teams to enhance software reliability and streamline reporting pipelines.',
    icon: 'briefcase',
  },
  {
    period: 'August 2025 — May 2026',
    title: 'Teaching Assistant',
    company: 'Polytechnique Montreal',
    description:
      'Assisted students in the Software Design course by clarifying key concepts, supporting lab sessions, and reviewing assignments. Helped reinforce best practices in object-oriented design, modular programming, and clean software architecture using Java.',
    icon: 'briefcase',
  },
  {
    period: 'June 2025 — May 2026',
    title: 'Research Intern',
    company: 'Polytechnique Montreal',
    description:
      'Contributed to a research project focused on building an interactive visual algorithm platform to improve understanding of core computer science concepts. Developed dynamic visualizations of sorting algorithms and graph structures, emphasizing clarity, usability, and educational value.',
    icon: 'research',
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    techs: [
      { name: 'Angular', icon: 'angular' },
      { name: 'React', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Dart', icon: 'dart' },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    techs: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Express', icon: 'express' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C/C++', icon: 'cplusplus' },
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS', icon: 'amazonaws' },
    ],
  },
  {
    title: 'AI',
    icon: 'ai',
    techs: [
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'MediaPipe', icon: 'mediapipe' },
      { name: 'PyTorch', icon: 'pytorch' },
    ],
  },
  {
    title: 'Data',
    icon: 'data',
    techs: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQL', icon: 'sql' },
    ],
  },
];

export const CONTACT_EMAIL = 'nimet.mulji@example.com';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];
