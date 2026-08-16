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
    period: 'May 2026 — Aug. 2026',
    title: 'Software Engineering Intern',
    company: 'Airbus',
    description:
      'Built a real-time JavaScript and Node.js data pipeline that cut manual processing by 45%, integrating 5+ internal databases and deploying on Google Cloud.',
    icon: 'briefcase',
  },
  {
    period: 'May 2025 — May 2026',
    title: 'Research Intern',
    company: 'Polytechnique Montréal',
    description:
      'Built an interactive Java and Angular platform to visualize data structures and algorithms, with a TypeScript animation engine and Graphviz graphs for DFS and BFS.',
    icon: 'research',
  },
  {
    period: 'Sept. 2025 — Dec. 2025',
    title: 'Software Engineering Intern',
    company: 'Airbus',
    description:
      'Optimized QlikSense dashboards for 100+ stakeholders and built Python and Angular tools to automate reporting, plus an AI research agent for technical insights.',
    icon: 'briefcase',
  },
  {
    period: 'Aug. 2025 — May 2026',
    title: 'Teaching Assistant – Software Analysis and Design',
    company: 'Polytechnique Montréal',
    description:
      'Supported students in software analysis and design, reinforcing object-oriented design, modular programming, and clean software architecture.',
    icon: 'briefcase',
  },
  {
    period: 'Aug. 2025 — Dec. 2025',
    title: 'Teaching Assistant – Analysis and Design of User Interfaces',
    company: 'Polytechnique Montréal',
    description:
      'Guided students through user interface analysis and design, covering usability, interaction patterns, and interface prototyping.',
    icon: 'briefcase',
  },
  {
    period: 'Aug. 2025 — Dec. 2025',
    title: 'Teaching Assistant – Data Structures and Algorithms',
    company: 'Polytechnique Montréal',
    description:
      'Mentored 50+ students in Java data structures, complexity analysis, and algorithmic problem-solving.',
    icon: 'briefcase',
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

export const CONTACT_EMAIL = 'tshiendanimet@gmail.com';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', href: 'https://github.com/nmulji-pixie' },
  { label: 'LinkedIn', href: 'https://linkedin.com/nimetmulji' },
];
