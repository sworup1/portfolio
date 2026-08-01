export interface EmphaticSegment {
  text: string
  italic?: boolean
}

export interface Profile {
  name: string
  role: string
  status: string
  headline: EmphaticSegment[]
  intro: string
  story: string[]
  location: string
  email: string
  resumeHref: string
}

export interface NavItem {
  label: string
  href: string
}

export interface MetaItem {
  label: string
  value: string
  href?: string
}

export interface Social {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface ExperienceItem {
  period: string
  role: string
  company: string
  summary: string
}

export interface Project {
  year: string
  role: string
  name: string
  brief: string
  outcome: EmphaticSegment[]
  tech: string[]
  href: string
  featured?: boolean
}

export const profile = {
  name: 'Sworup Bhandari',
  role: 'AI & Backend Engineer',
  status: 'Open to select projects',
  headline: [
    { text: 'Systems that turn ' },
    { text: 'raw signals', italic: true },
    { text: ' into decisions, end to end.' },
  ],
  intro:
    'I\'m Sworup, an AI & backend engineer based in Pokhara, Nepal. I build production-grade systems from the ground up, fine-tuned transformer models on one end, the distributed services that serve them on the other, with a habit of shipping the whole pipeline rather than a slice of it.',
  story: [
    'My final-year capstone, RedSentinel, is where this came together: an AI-assisted XSS vulnerability scanner where I led architecture on a polyglot microservice system, a NestJS orchestration core coordinating Python/FastAPI AI services, with a DistilBERT classifier fine-tuned on a 59,122-entry curated dataset and an XGBoost payload ranker behind it.',
    'What I actually enjoy is the full stack of a hard problem: curating the dataset, training and calibrating the model, then building the queues, auth, and real-time dashboard that put it in front of someone who needs it.',
  ],
  location: 'Pokhara, Nepal',
  email: 'sworup.job@gmail.com',
  resumeHref: 'https://example.com/resume.pdf',
} satisfies Profile

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const meta: MetaItem[] = [
  { label: 'Based in', value: 'Pokhara, Nepal' },
  { label: 'Focus', value: 'AI/ML · Backend systems · Security' },
  { label: 'Availability', value: 'Open to select projects' },
  { label: 'Email', value: 'sworup.job@gmail.com', href: 'mailto:sworup.job@gmail.com' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Ruby', 'C/C++', 'Dart'],
  },
  {
    title: 'AI & ML',
    skills: ['PyTorch', 'Transformers (DistilBERT)', 'XGBoost', 'YOLOv8', 'ONNX/TorchScript'],
  },
  {
    title: 'Backend & data',
    skills: ['NestJS', 'FastAPI', 'Express.js', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
  },
  {
    title: 'Frontend & security',
    skills: ['React', 'Next.js', 'Flutter', 'XSS detection', 'Fuzzing', 'Playwright'],
  },
]

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/sworup1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sworup-bhandari/' },
]

export const experience: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Freelance Engineer',
    company: 'Sworup Labs',
    summary:
      'Worked on AI/ML and backend projects. ',
  },
  
]


export const projects: Project[] = [
  {
    year: '2026',
    role: 'Lead architect',
    name: 'RedSentinel — AI-Assisted XSS Vulnerability Scanner',
    brief:
      'Final-year capstone, team of 3. Owned the NestJS orchestration core and the end-to-end ML pipeline while teammates built the fuzzer and obfuscation engines.',
    outcome: [
      { text: 'A DistilBERT multi-task classifier reached ' },
      { text: 'near-perfect accuracy', italic: true },
      { text: ' on an 8,869-sample held-out split, trained on a 59,122-entry curated XSS dataset, with an XGBoost payload ranker prioritizing exploits by predicted effectiveness.' },
    ],
    tech: ['NestJS', 'FastAPI', 'PyTorch', 'DistilBERT', 'XGBoost', 'Redis/BullMQ', 'PostgreSQL', 'Next.js', 'Socket.IO'],
    href: 'https://example.com',
    featured: true,
  },
  {
    year: '2025',
    role: 'Solo',
    name: 'XSS Payload Generator — Deep Learning Payload Synthesis',
    brief:
      'Designed and trained a decoder-only Transformer model from scratch to generate context-aware XSS payloads.',
    outcome: [
      { text: 'Built custom multi-head attention blocks with ' },
      { text: 'causal masking', italic: true },
      { text: ' from the ground up rather than relying on an existing library implementation.' },
    ],
    tech: ['Python', 'TensorFlow/Keras'],
    href: 'https://example.com',
  },
  {
    year: '2024',
    role: 'Full-stack',
    name: 'Travel Buddy — Social Travel Planning Platform',
    brief:
      'A full-stack social travel platform with trip planning, participant approval workflows, and a social feed.',
    outcome: [
      { text: 'Shipped token-based auth, ' },
      { text: 'real-time chat via Action Cable,', italic: true },
      { text: ' and interactive trip maps with Leaflet, plus friendship/connection management and PDF itinerary uploads.' },
    ],
    tech: ['React', 'Ruby on Rails', 'PostgreSQL'],
    href: 'https://example.com',
  },
  {
    year: '2024',
    role: 'Hackathon',
    name: 'Community Connect',
    brief:
      'Built at an OSM hackathon: a full-stack event-coordination platform with real-time GPS-based attendance validation.',
    outcome: [
      { text: 'Delivered REST APIs for ' },
      { text: 'live event tracking and attendance validation', italic: true },
      { text: ' under hackathon time constraints.' },
    ],
    tech: ['Express.js', 'Flutter'],
    href: 'https://example.com',
  },
  {
    year: '2023',
    role: 'Solo — full-stack',
    name: 'Note App',
    brief:
      'A full-stack note-taking app with secure user authentication and a responsive UI for creating and organizing notes.',
     outcome: [
      { text: 'Users get a ' },
      { text: 'secure, distraction-free space', italic: true },
      { text: ' to create, organize, and export their notes as PDFs, backed by proper authentication end to end.' },
    ],
    tech: ['React', 'Ruby on Rails', 'PostgreSQL'],
    href: 'https://example.com',
  },
]