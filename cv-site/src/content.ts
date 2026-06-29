export type Lang = "es" | "en";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  /** Highlights the AI + Spec-Driven Development note (subtle integration). */
  aiNote?: string;
  current?: boolean;
  tags: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
}

export interface CertItem {
  title: string;
  issuer: string;
  year: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Translation {
  meta: { role: string };
  nav: {
    about: string;
    stack: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    tagline: string;
    location: string;
    downloadCv: string;
    viewWork: string;
    yearsLabel: string;
    yearsValue: string;
    rolesLabel: string;
    rolesValue: string;
    focusLabel: string;
    focusValue: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    chips: string[];
  };
  stack: {
    kicker: string;
    heading: string;
    subheading: string;
    groups: SkillGroup[];
  };
  experience: {
    kicker: string;
    heading: string;
    present: string;
    currentBadge: string;
    items: ExperienceItem[];
  };
  education: {
    kicker: string;
    heading: string;
    educationLabel: string;
    certsLabel: string;
    education: EducationItem[];
    certs: CertItem[];
  };
  contact: {
    kicker: string;
    heading: string;
    subheading: string;
    emailLabel: string;
    phoneLabel: string;
    whatsapp: string;
    rights: string;
    builtWith: string;
  };
}

export const content: Record<Lang, Translation> = {
  en: {
    meta: { role: "Senior Developer & Systems Engineer" },
    nav: {
      about: "About",
      stack: "Stack",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Juan Manuel Jiménez Sánchez",
      title: "Senior Developer & Systems Engineer",
      tagline:
        "Almost two decades building web platforms and high-availability backend APIs — now shipping faster with an AI-augmented, spec-driven workflow.",
      location: "Armenia, Colombia",
      downloadCv: "Download CV",
      viewWork: "View experience",
      yearsLabel: "Years building software",
      yearsValue: "19+",
      rolesLabel: "Core focus",
      rolesValue: "Backend & Web",
      focusLabel: "Working with",
      focusValue: "AI + SDD",
    },
    about: {
      kicker: "About",
      heading: "Engineer first, problem-solver always",
      paragraphs: [
        "I'm a Systems Engineer with extensive experience across coding languages and modern software development methodologies. I use that expertise to streamline development processes and improve system performance, security and scalability.",
        "I've worked across the full stack and the full lifecycle — from backend APIs and core information systems to product ownership — always with strong team collaboration and agile practices to keep projects on track.",
        "Since March 2026 I've folded AI into the entire development flow and adopted Spec-Driven Development (SDD): specs and plans come first, AI assistants accelerate the build, and the result is more predictable, higher-quality delivery.",
      ],
      chips: [
        "AI-augmented development",
        "Spec-Driven Development",
        "Agile / Scrum",
        "Team collaboration",
      ],
    },
    stack: {
      kicker: "Tech stack",
      heading: "Tools I build with",
      subheading:
        "A pragmatic toolkit refined over years of shipping — including AI assistants woven into the daily workflow.",
      groups: [
        {
          label: "Languages",
          items: ["PHP", "JavaScript", "Python", "HTML5 / CSS", "Dart"],
        },
        {
          label: "Databases",
          items: ["MySQL", "PostgreSQL"],
        },
        {
          label: "Tools & Frameworks",
          items: [
            "Yii Framework",
            "Flutter",
            "Docker",
            "Supabase",
            "WordPress",
            "Bootstrap",
            "Git",
            "Postman",
            "Jira",
            "Scrum",
          ],
        },
        {
          label: "AI-Assisted Development",
          items: ["Cursor", "Antigravity", "Spec-Driven Development"],
        },
      ],
    },
    experience: {
      kicker: "Career",
      heading: "Where I've made an impact",
      present: "Present",
      currentBadge: "Current",
      items: [
        {
          company: "IAM Studio SAS",
          role: "Senior Developer",
          period: "Mar 2022 — Present",
          location: "Armenia, Q.",
          current: true,
          bullets: [
            "Engineer and maintain a high-availability backend API for a US-based client in the real estate and mortgage sector.",
            "Contribute to the continuous development of an application that automates outreach and facilitates property-owner acquisition.",
            "Leverage PHP, MySQL, Python and AI-driven coding assistants to ensure performance, security and scalability.",
          ],
          aiNote:
            "Since March 2026: AI integrated across the whole development flow with Spec-Driven Development (SDD).",
          tags: ["PHP", "MySQL", "Python", "AI-assisted"],
        },
        {
          company: "Home Select",
          role: "Senior Developer",
          period: "Apr 2017 — Feb 2022",
          location: "Armenia, Q.",
          bullets: [
            "Owned full-lifecycle maintenance and feature development of the core information system serving critical business functions.",
            "Oversaw key modules — reservations, cleaning schedules, payment processing and cancellations — optimizing operational efficiency.",
            "Partnered with stakeholders to implement system upgrades driven by evolving business requirements.",
          ],
          tags: ["PHP", "MySQL", "Web"],
        },
        {
          company: "Kijho Technologies",
          role: "Product Owner",
          period: "Jan 2016 — Apr 2017",
          location: "Armenia, Q.",
          bullets: [
            "Acted as Product Owner for a new mobile app to streamline table orders and restaurant reservations.",
            "Defined, prioritized and managed the product backlog with Agile/Scrum, translating business goals into user stories.",
            "Collaborated cross-functionally with development, design and QA to ensure timely, effective delivery.",
          ],
          tags: ["Product Owner", "Agile/Scrum", "Mobile"],
        },
        {
          company: "Home Select",
          role: "Senior Developer",
          period: "Apr 2012 — Jan 2016",
          location: "Armenia, Q.",
          bullets: [
            "Owned full-lifecycle maintenance and feature development of the core information system serving critical business functions.",
            "Oversaw key modules — reservations, cleaning schedules, payment processing and cancellations — optimizing operational efficiency.",
            "Partnered with stakeholders to implement system upgrades driven by evolving business requirements.",
          ],
          tags: ["PHP", "MySQL", "Web"],
        },
        {
          company: "Riazor SAS / Infopixel Colombia Ltda.",
          role: "Knowledge Management · Senior Developer",
          period: "Nov 2006 — Mar 2012",
          location: "Armenia, Q.",
          bullets: [
            "Researched emerging frameworks, development technologies and industry best practices.",
            "Built and rolled out knowledge-sharing strategies to standardize development processes across the team.",
            "Advised senior management on technology adoption to improve product quality and team efficiency.",
            "Earlier as Senior Developer: delivered custom web pages and applications for international clients, primarily in Spain.",
          ],
          tags: ["Knowledge Mgmt", "Web", "International clients"],
        },
        {
          company: "Servigrafic & Cía Ltda.",
          role: "Freelance Developer",
          period: "Jul — Sep 2006",
          location: "Cali, Valle del Cauca",
          bullets: [
            "Implemented a custom information system to automate and control critical internal factory processes.",
            "Delivered a solution that improved process visibility and data accuracy for factory operations.",
          ],
          tags: ["Freelance", "Automation"],
        },
      ],
    },
    education: {
      kicker: "Background",
      heading: "Education & certifications",
      educationLabel: "Education",
      certsLabel: "Certifications & courses",
      education: [
        {
          title: "Systems Engineering & Computing",
          institution: "University of Quindío",
          year: "2006",
        },
        {
          title: "English course (4 semesters)",
          institution: "University of Quindío",
          year: "2013 — 2014",
        },
      ],
      certs: [
        {
          title: "AWS Technical Essentials",
          issuer: "AWS Skill Builder",
          year: "2026",
        },
        {
          title: "Flutter Zero To Hero — Complete Crash Course",
          issuer: "Udemy",
          year: "2025",
        },
        {
          title: "Certified Negotiation Expert Professional",
          issuer: "BD Guidance",
          year: "2016",
        },
        {
          title: "iOS 10 & Swift 3",
          issuer: "Udemy",
          year: "2016",
        },
      ],
    },
    contact: {
      kicker: "Get in touch",
      heading: "Let's build something",
      subheading:
        "Open to backend, full-stack and product engineering opportunities. The fastest way to reach me is email or WhatsApp.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsapp: "WhatsApp",
      rights: "All rights reserved.",
      builtWith: "Designed & built with React, Tailwind and an AI-augmented, spec-driven workflow.",
    },
  },
  es: {
    meta: { role: "Senior Developer & Ingeniero de Sistemas" },
    nav: {
      about: "Perfil",
      stack: "Stack",
      experience: "Experiencia",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Juan Manuel Jiménez Sánchez",
      title: "Senior Developer e Ingeniero de Sistemas",
      tagline:
        "Casi dos décadas construyendo plataformas web y APIs backend de alta disponibilidad — ahora entregando más rápido con un flujo potenciado por IA y guiado por especificaciones.",
      location: "Armenia, Colombia",
      downloadCv: "Descargar CV",
      viewWork: "Ver experiencia",
      yearsLabel: "Años construyendo software",
      yearsValue: "19+",
      rolesLabel: "Foco principal",
      rolesValue: "Backend & Web",
      focusLabel: "Trabajando con",
      focusValue: "IA + SDD",
    },
    about: {
      kicker: "Perfil",
      heading: "Ingeniero ante todo, solucionador siempre",
      paragraphs: [
        "Soy Ingeniero de Sistemas con amplia experiencia en lenguajes de programación y metodologías modernas de desarrollo de software. Uso esa experiencia para optimizar los procesos de desarrollo y mejorar el rendimiento, la seguridad y la escalabilidad de los sistemas.",
        "He trabajado a lo largo de todo el stack y todo el ciclo de vida — desde APIs backend y sistemas de información core hasta la gestión de producto — siempre con fuerte colaboración en equipo y prácticas ágiles para mantener los proyectos en rumbo.",
        "Desde marzo de 2026 incorporé la IA en todo el flujo de desarrollo y adopté el Desarrollo Guiado por Especificaciones (SDD): primero las especificaciones y el plan, luego los asistentes de IA aceleran la construcción, y el resultado es una entrega más predecible y de mayor calidad.",
      ],
      chips: [
        "Desarrollo potenciado por IA",
        "Spec-Driven Development",
        "Ágil / Scrum",
        "Colaboración en equipo",
      ],
    },
    stack: {
      kicker: "Stack técnico",
      heading: "Herramientas con las que construyo",
      subheading:
        "Un toolkit pragmático afinado durante años de entregas — incluyendo asistentes de IA integrados en el día a día.",
      groups: [
        {
          label: "Lenguajes",
          items: ["PHP", "JavaScript", "Python", "HTML5 / CSS", "Dart"],
        },
        {
          label: "Bases de datos",
          items: ["MySQL", "PostgreSQL"],
        },
        {
          label: "Herramientas & Frameworks",
          items: [
            "Yii Framework",
            "Flutter",
            "Docker",
            "Supabase",
            "WordPress",
            "Bootstrap",
            "Git",
            "Postman",
            "Jira",
            "Scrum",
          ],
        },
        {
          label: "Desarrollo asistido por IA",
          items: ["Cursor", "Antigravity", "Spec-Driven Development"],
        },
      ],
    },
    experience: {
      kicker: "Trayectoria",
      heading: "Dónde he generado impacto",
      present: "Presente",
      currentBadge: "Actual",
      items: [
        {
          company: "IAM Studio SAS",
          role: "Senior Developer",
          period: "Mar 2022 — Presente",
          location: "Armenia, Q.",
          current: true,
          bullets: [
            "Desarrollo y mantengo una API backend de alta disponibilidad para un cliente de EE.UU. del sector inmobiliario e hipotecario.",
            "Contribuyo al desarrollo continuo de una aplicación que automatiza el contacto y facilita la adquisición de propietarios.",
            "Aprovecho PHP, MySQL, Python y asistentes de programación con IA para garantizar rendimiento, seguridad y escalabilidad.",
          ],
          aiNote:
            "Desde marzo de 2026: IA integrada en todo el flujo de desarrollo con Desarrollo Guiado por Especificaciones (SDD).",
          tags: ["PHP", "MySQL", "Python", "Asistido por IA"],
        },
        {
          company: "Home Select",
          role: "Senior Developer",
          period: "Abr 2017 — Feb 2022",
          location: "Armenia, Q.",
          bullets: [
            "Lideré el mantenimiento y el desarrollo de funcionalidades del sistema de información core, clave para el negocio.",
            "Gestioné módulos críticos — reservas, agendas de limpieza, procesamiento de pagos y cancelaciones — optimizando la eficiencia operativa.",
            "Colaboré con stakeholders para implementar mejoras del sistema según los requisitos cambiantes del negocio.",
          ],
          tags: ["PHP", "MySQL", "Web"],
        },
        {
          company: "Kijho Technologies",
          role: "Product Owner",
          period: "Ene 2016 — Abr 2017",
          location: "Armenia, Q.",
          bullets: [
            "Actué como Product Owner de una nueva app móvil para agilizar pedidos en mesa y reservas de restaurantes.",
            "Definí, prioricé y gestioné el backlog con Ágil/Scrum, traduciendo objetivos de negocio en historias de usuario.",
            "Colaboré de forma transversal con desarrollo, diseño y QA para asegurar entregas oportunas y efectivas.",
          ],
          tags: ["Product Owner", "Ágil/Scrum", "Móvil"],
        },
        {
          company: "Home Select",
          role: "Senior Developer",
          period: "Abr 2012 — Ene 2016",
          location: "Armenia, Q.",
          bullets: [
            "Lideré el mantenimiento y el desarrollo de funcionalidades del sistema de información core, clave para el negocio.",
            "Gestioné módulos críticos — reservas, agendas de limpieza, procesamiento de pagos y cancelaciones — optimizando la eficiencia operativa.",
            "Colaboré con stakeholders para implementar mejoras del sistema según los requisitos cambiantes del negocio.",
          ],
          tags: ["PHP", "MySQL", "Web"],
        },
        {
          company: "Riazor SAS / Infopixel Colombia Ltda.",
          role: "Gestión del Conocimiento · Senior Developer",
          period: "Nov 2006 — Mar 2012",
          location: "Armenia, Q.",
          bullets: [
            "Investigué frameworks emergentes, tecnologías de desarrollo y mejores prácticas de la industria.",
            "Diseñé y desplegué estrategias de gestión del conocimiento para estandarizar los procesos de desarrollo del equipo.",
            "Asesoré a la alta dirección sobre adopción tecnológica para mejorar la calidad del producto y la eficiencia del equipo.",
            "Antes, como Senior Developer: entregué páginas y aplicaciones web a medida para clientes internacionales, principalmente en España.",
          ],
          tags: ["Gestión del Conocimiento", "Web", "Clientes internacionales"],
        },
        {
          company: "Servigrafic & Cía Ltda.",
          role: "Desarrollador Freelance",
          period: "Jul — Sep 2006",
          location: "Cali, Valle del Cauca",
          bullets: [
            "Implementé un sistema de información a medida para automatizar y controlar procesos internos críticos de fábrica.",
            "Entregué una solución que mejoró la visibilidad de procesos y la precisión de los datos en las operaciones.",
          ],
          tags: ["Freelance", "Automatización"],
        },
      ],
    },
    education: {
      kicker: "Formación",
      heading: "Educación y certificaciones",
      educationLabel: "Educación",
      certsLabel: "Certificaciones y cursos",
      education: [
        {
          title: "Ingeniería de Sistemas y Computación",
          institution: "Universidad del Quindío",
          year: "2006",
        },
        {
          title: "Curso de inglés (4 semestres)",
          institution: "Universidad del Quindío",
          year: "2013 — 2014",
        },
      ],
      certs: [
        {
          title: "AWS Technical Essentials",
          issuer: "AWS Skill Builder",
          year: "2026",
        },
        {
          title: "Flutter Zero To Hero — Curso completo",
          issuer: "Udemy",
          year: "2025",
        },
        {
          title: "Certified Negotiation Expert Professional",
          issuer: "BD Guidance",
          year: "2016",
        },
        {
          title: "iOS 10 y Swift 3",
          issuer: "Udemy",
          year: "2016",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      heading: "Construyamos algo juntos",
      subheading:
        "Abierto a oportunidades de backend, full-stack e ingeniería de producto. La forma más rápida de contactarme es por correo o WhatsApp.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      whatsapp: "WhatsApp",
      rights: "Todos los derechos reservados.",
      builtWith: "Diseñado y construido con React, Tailwind y un flujo potenciado por IA y guiado por especificaciones.",
    },
  },
};

export const PROFILE = {
  email: "juanmjimenezs@gmail.com",
  phoneDisplay: "+57 301 783 6901",
  phoneRaw: "+573017836901",
  whatsapp: "573017836901",
  github: "https://github.com/juanmjimenezs",
  githubHandle: "juanmjimenezs",
  linkedin: "https://www.linkedin.com/in/juanmjimenezs/",
  linkedinHandle: "in/juanmjimenezs",
  cvFile: "./cv-juan-manuel-jimenez.pdf",
  initials: "JM",
};
