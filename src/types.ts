export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  longDescription?: { en: string; ar: string };
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  developerName?: string;
  category: 'Web' | 'Mobile' | 'Full-Stack';
  createdAt?: number;
  deletedAt?: number;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
  icon?: string;
}

export interface Experience {
  company: { en: string; ar: string };
  position: { en: string; ar: string };
  period: { en: string; ar: string };
  description: { en: string[]; ar: string[] };
}

export interface Testimonial {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  content: { en: string; ar: string };
  avatar: string;
}

export interface UIStrings {
  nav: {
    home: string;
    projects: string;
    skills: string;
    experience: string;
    testimonials: string;
    contact: string;
    like: string;
  };
  hero: {
    available: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    viewProjects: string;
    downloadCv: string;
    viewCv: string;
    location: string;
    role: string;
    projectsDone: string;
    experienceYears: string;
  };
  projects: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      fullstack: string;
    };
    archive: string;
    delete: string;
    restore: string;
    permanentDelete: string;
  };
  addProject: {
    button: string;
    modalTitle: string;
    name: string;
    description: string;
    imageUrl: string;
    downloadUrl: string;
    developerName: string;
    category: string;
    technologies: string;
    submit: string;
    cancel: string;
    success: string;
  };
  login: {
    title: string;
    email: string;
    password: string;
    submit: string;
    error: string;
    logout: string;
    rememberMe: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    description: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  addTestimonial: {
    button: string;
    modalTitle: string;
    name: string;
    role: string;
    content: string;
    avatar: string;
    submit: string;
    cancel: string;
    success: string;
  };
  contact: {
    title: string;
    titleGradient: string;
    subtitle: string;
    emailMe: string;
    connect: string;
    whatsapp: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
