import { Project, Skill, Experience, UIStrings, Testimonial } from './types';

export const PROJECTS: Project[] = [];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
    role: { en: 'CEO of TechStart', ar: 'المدير التنفيذي لشركة TechStart' },
    content: { 
      en: 'Aslan is an exceptional developer. He delivered our project ahead of schedule and the quality was beyond our expectations.',
      ar: 'أصلان مطور استثنائي. لقد سلم مشروعنا قبل الموعد المحدد وكانت الجودة تفوق توقعاتنا.'
    },
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: { en: 'Mohammed Ali', ar: 'محمد علي' },
    role: { en: 'Product Manager', ar: 'مدير منتج' },
    content: { 
      en: 'The attention to detail and security focus Aslan brings to the table is rare. Highly recommended for any serious web project.',
      ar: 'الاهتمام بالتفاصيل والتركيز الأمني الذي يقدمه أصلان أمر نادر. نوصي به بشدة لأي مشروع ويب جاد.'
    },
    avatar: 'https://i.pravatar.cc/150?u=ali'
  },
  {
    id: '3',
    name: { en: 'Emily Chen', ar: 'إيميلي تشن' },
    role: { en: 'Founder of DesignHub', ar: 'مؤسسة DesignHub' },
    content: { 
      en: 'Working with Aslan was a breeze. He understood our vision perfectly and translated it into a beautiful, functional application.',
      ar: 'كان العمل مع أصلان في غاية السهولة. لقد فهم رؤيتنا تماماً وترجمها إلى تطبيق جميل وعملي.'
    },
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: 'GraphQL', level: 75, category: 'Backend' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'AWS', level: 65, category: 'Tools' },
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'Linux / Terminal', level: 85, category: 'Tools' },
  { name: 'Firebase', level: 80, category: 'Tools' },
  { name: 'Figma', level: 85, category: 'Design' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: { en: 'Data Analysis & Cybersecurity', ar: 'تحليل البيانات والأمن السيبراني' },
    position: { en: 'Data Analyst & Security Researcher', ar: 'محلل بيانات وباحث أمني' },
    period: { en: '2026 - Present', ar: '2026 - الحالي' },
    description: {
      en: [
        'Analyzed more than 4 applications for performance and security.',
        'Analyzed more than 3 integrated security systems.',
        'Analyzed more than 11 global websites for vulnerabilities and data flow.'
      ],
      ar: [
        'حللت أكثر من 4 تطبيقات من حيث الأداء والأمان.',
        'حللت أكثر من 3 أنظمة أمنية متكاملة.',
        'قمت بتحليل أكثر من 11 موقع عالمي من حيث الثغرات وتدفق البيانات.'
      ]
    }
  },
  {
    company: { en: 'TechFlow Solutions', ar: 'تيك فلو للحلول التقنية' },
    position: { en: 'Senior Full-Stack Developer', ar: 'مطور فول ستاك أول' },
    period: { en: '2025 - 2026', ar: '2025 - 2026' },
    description: {
      en: [
        'Led a team of 5 developers in rebuilding the core SaaS platform.',
        'Reduced page load times by 40% through advanced caching and code splitting.',
        'Implemented automated CI/CD pipelines reducing deployment errors by 60%.'
      ],
      ar: [
        'قدت فريقاً من 5 مطورين في إعادة بناء منصة SaaS الأساسية.',
        'قللت أوقات تحميل الصفحة بنسبة 40% من خلال التخزين المؤقت المتقدم وتقسيم الكود.',
        'نفذت خطوط أنابيب CI/CD مؤتمتة مما قلل من أخطاء النشر بنسبة 60%.'
      ]
    }
  },
  {
    company: { en: 'Creative Digital Agency', ar: 'وكالة الإبداع الرقمي' },
    position: { en: 'Web Developer', ar: 'مطور ويب' },
    period: { en: '2025 - 2026', ar: '2025 - 2026' },
    description: {
      en: [
        'Developed over 15 custom web applications for international clients.',
        'Collaborated closely with designers to ensure pixel-perfect implementations.',
        'Mentored junior developers and conducted code reviews.'
      ],
      ar: [
        'طورت أكثر من 15 تطبيق ويب مخصص لعملاء دوليين.',
        'تعاونت بشكل وثيق مع المصممين لضمان تنفيذ دقيق للتصاميم.',
        'أشرفت على المطورين المبتدئين وأجريت مراجعات للكود.'
      ]
    }
  }
];

export const TECHNOLOGIES = [
  'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Svelte', 'SolidJS',
  'Node.js', 'Express', 'NestJS', 'Fastify', 'Python', 'Django', 'Flask', 'FastAPI',
  'Go', 'Rust', 'Ruby', 'Rails', 'PHP', 'Laravel', 'Symfony', 'Java', 'Spring Boot',
  'C#', '.NET', 'C++', 'TypeScript', 'JavaScript', 'Swift', 'Kotlin', 'Dart', 'Flutter',
  'React Native', 'Ionic', 'Capacitor', 'Electron', 'Tauri',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'Supabase', 'Appwrite',
  'Prisma', 'Drizzle', 'TypeORM', 'Mongoose',
  'Tailwind CSS', 'Bootstrap', 'Sass', 'Styled Components', 'Emotion', 'Framer Motion',
  'Redux', 'Zustand', 'Recoil', 'React Query', 'SWR',
  'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify',
  'Git', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform',
  'GraphQL', 'gRPC', 'WebSockets', 'WebRTC',
  'OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn'
];

export const TRANSLATIONS: Record<'en' | 'ar', UIStrings & { addProject: any }> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      testimonials: 'Testimonials',
      contact: 'Contact',
      like: 'Like'
    },
    hero: {
      available: 'Available for new projects',
      title: 'Building Digital',
      titleGradient: 'Experiences',
      subtitle: "I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
      viewProjects: 'View Projects',
      downloadCv: 'Download CV',
      viewCv: 'View CV',
      location: 'Based in Khanyounis, Gaza, Palestine',
      role: 'Mobile Web Developer',
      projectsDone: 'Projects Done',
      experienceYears: 'Years Experience'
    },
    projects: {
      title: 'Portfolio',
      subtitle: 'Featured Projects',
      categories: {
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        fullstack: 'Full-Stack'
      },
      archive: 'Archive',
      delete: 'Delete',
      restore: 'Restore',
      permanentDelete: 'Delete Permanently'
    },
    addProject: {
      button: 'Add New Project',
      modalTitle: 'Add Project',
      name: 'App Name',
      description: 'Description',
      imageUrl: 'Upload Image',
      downloadUrl: 'Download Link',
      developerName: 'Developer Name',
      category: 'Category',
      technologies: 'Technologies',
      submit: 'Post Project',
      cancel: 'Cancel',
      success: 'Project added successfully!'
    },
    login: {
      title: 'Admin Login',
      email: 'Email Address',
      password: 'Password',
      submit: 'Login',
      error: 'Invalid email or password',
      logout: 'Logout',
      rememberMe: 'Remember Me'
    },
    skills: {
      title: 'Expertise',
      subtitle: 'Technical Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
      }
    },
    experience: {
      title: 'Career',
      subtitle: 'Work Experience',
      description: "I've had the privilege of working with some amazing companies and talented individuals. Here's a brief overview of my professional journey."
    },
    testimonials: {
      title: 'Social Proof',
      subtitle: 'What Clients Say'
    },
    addTestimonial: {
      button: 'Add New Testimonial',
      modalTitle: 'Add Testimonial',
      name: 'Client Name',
      role: 'Client Role/Company',
      content: 'Testimonial Content',
      avatar: 'Avatar URL',
      submit: 'Post Testimonial',
      cancel: 'Cancel',
      success: 'Testimonial added successfully!'
    },
    contact: {
      title: "Let's build something",
      titleGradient: 'extraordinary',
      subtitle: "Have a project in mind? Or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      emailMe: 'Email Me',
      connect: 'Connect',
      whatsapp: 'WhatsApp',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      skills: 'المهارات',
      experience: 'الخبرة',
      testimonials: 'التوصيات',
      contact: 'اتصل بي',
      like: 'أعجبني'
    },
    hero: {
      available: 'متاح للمشاريع الجديدة',
      title: 'بناء تجارب',
      titleGradient: 'رقمية',
      subtitle: 'أنا مطور فول ستاك متخصص في بناء تجارب رقمية استثنائية. حالياً، أركز على بناء منتجات سهلة الوصول وتتمحور حول الإنسان.',
      viewProjects: 'عرض المشاريع',
      downloadCv: 'تحميل السيرة الذاتية',
      viewCv: 'عرض السيرة الذاتية',
      location: 'مقرّي في خانيونس، غزة، فلسطين',
      role: 'مطور تطبيقات ويب وموبايل',
      projectsDone: 'مشروع منجز',
      experienceYears: 'سنوات خبرة'
    },
    projects: {
      title: 'أعمالي',
      subtitle: 'المشاريع المميزة',
      categories: {
        all: 'الكل',
        web: 'ويب',
        mobile: 'موبايل',
        fullstack: 'فول ستاك'
      },
      archive: 'الأرشيف',
      delete: 'حذف',
      restore: 'استعادة',
      permanentDelete: 'حذف نهائي'
    },
    addProject: {
      button: 'إضافة مشروع جديد',
      modalTitle: 'إضافة مشروع',
      name: 'اسم التطبيق',
      description: 'وصف المشروع',
      imageUrl: 'رفع صورة',
      downloadUrl: 'رابط التحميل',
      developerName: 'اسم المطور',
      category: 'القسم',
      technologies: 'التقنيات المستخدمة',
      submit: 'نشر المشروع',
      cancel: 'إلغاء',
      success: 'تمت إضافة المشروع بنجاح!'
    },
    login: {
      title: 'دخول الإدارة',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      submit: 'تسجيل الدخول',
      error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      logout: 'تسجيل الخروج',
      rememberMe: 'تذكرني'
    },
    skills: {
      title: 'الخبرة التقنية',
      subtitle: 'المهارات الفنية',
      categories: {
        frontend: 'فرونت إند',
        backend: 'باك إند',
        tools: 'أدوات'
      }
    },
    experience: {
      title: 'المسيرة المهنية',
      subtitle: 'الخبرة العملية',
      description: 'لقد حظيت بامتياز العمل مع بعض الشركات الرائعة والأفراد الموهوبين. إليك نظرة موجزة عن رحلتي المهنية.'
    },
    testimonials: {
      title: 'آراء العملاء',
      subtitle: 'ماذا يقولون عني'
    },
    addTestimonial: {
      button: 'إضافة توصية جديدة',
      modalTitle: 'إضافة توصية',
      name: 'اسم العميل',
      role: 'منصب العميل/الشركة',
      content: 'محتوى التوصية',
      avatar: 'رابط الصورة الشخصية',
      submit: 'نشر التوصية',
      cancel: 'إلغاء',
      success: 'تمت إضافة التوصية بنجاح!'
    },
    contact: {
      title: 'لنقم ببناء شيء',
      titleGradient: 'استثنائي',
      subtitle: 'هل لديك مشروع في بالك؟ أو تريد فقط إلقاء التحية؟ أنا دائماً منفتح لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لأكون جزءاً من رؤيتك.',
      emailMe: 'راسلني',
      connect: 'تواصل معي',
      whatsapp: 'واتساب',
      form: {
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        send: 'إرسال الرسالة'
      }
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      builtWith: 'بني بواسطة'
    }
  }
};
