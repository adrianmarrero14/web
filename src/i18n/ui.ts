export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const site = {
  name: 'Adrián Marrero',
  email: 'adrianmarrero18@gmail.com',
  socials: [
    { label: 'GitHub', handle: 'adrianmarrero14', href: 'https://github.com/adrianmarrero14' },
    { label: 'LinkedIn', handle: 'in/adrianmarrero', href: 'https://www.linkedin.com/in/adrianmarrero' },
    { label: 'Bluesky', handle: '@adrian-marrero', href: 'https://bsky.app/profile/adrian-marrero.bsky.social' },
  ],
};

export const projects = [
  {
    name: 'Caiman Games',
    href: 'https://caimangames.com',
    body: {
      en: 'My indie game studio. Creating games no one else dares to make.',
      es: 'Mi estudio indie de videojuegos. Juegos que nadie más se atreve a hacer.',
    },
    status: { en: 'indie studio', es: 'estudio indie' },
  },
  {
    name: 'Linotipo',
    href: 'https://github.com/adrianmarrero14/linotipo',
    body: {
      en: 'A daily newspaper written by an AI agent. One edition a day, every source cited, zero slop.',
      es: 'Un periódico diario escrito por un agente de IA. Una edición al día, todas las fuentes citadas, cero relleno.',
    },
    status: { en: 'in development', es: 'en desarrollo' },
  },
  {
    name: 'Wabu',
    href: 'https://github.com/adrianmarrero14/wabu',
    body: {
      en: 'Personal finance, made simple.',
      es: 'Finanzas personales, sin complicaciones.',
    },
    status: { en: 'early days', es: 'en sus inicios' },
  },
  {
    name: 'Waypoint',
    href: 'https://github.com/adrianmarrero14/waypoint',
    body: {
      en: 'The ultimate productivity app. Journal, tasks and habits. One monorepo for iOS, Android, web and API.',
      es: 'La app de productividad definitiva. Diario, tareas y hábitos. Un monorepo para iOS, Android, web y API.',
    },
    status: { en: 'iOS in progress', es: 'iOS en marcha' },
  },
] as const;

export const stack = [
  { group: { en: 'AI', es: 'IA' }, items: ['Python', 'Claude', 'Pydantic'] },
  { group: { en: 'Backend', es: 'Backend' }, items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'TypeScript'] },
  { group: { en: 'Data & messaging', es: 'Datos y mensajería' }, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'RabbitMQ'] },
  { group: { en: 'Apps', es: 'Apps' }, items: ['Swift', 'Astro', 'Vue', 'React', 'Angular'] },
  { group: { en: 'Infrastructure', es: 'Infraestructura' }, items: ['Docker', 'Kubernetes', 'Linux', 'Caddy'] },
  { group: { en: 'Architecture', es: 'Arquitectura' }, items: ['Hexagonal', 'DDD', 'CQRS', { en: 'Microservices', es: 'Microservicios' }] },
] as const;

export const ui = {
  en: {
    'meta.title': 'Adrián Marrero · AI Engineer & Software Engineer',
    'meta.description':
      'AI engineer and software engineer in Madrid. Backends that hold, AI that earns its place. Founder of Caiman Games.',
    'nav.home': 'Adrián Marrero, home',
    'nav.language': 'Language',
    'hero.role': 'AI Engineer & Software Engineer',
    'hero.lead':
      'Backends that hold. AI that earns its place. Six years designing APIs, microservices and the architecture behind them; now wiring LLMs into them, with the same rigor.',
    'hero.portrait': 'Black and white portrait of Adrián Marrero',
    'about.title': 'About',
    'about.note': '// 6+ years shipping software · Madrid',
    'about.p1':
      'I have spent more than six years building software end to end, from planning and design to testing, deployment and maintenance. Most of it on the backend: REST APIs, real-time services for the banking sector and microservice architectures.',
    'about.p2':
      'I care about clear boundaries: hexagonal architecture, DDD and CQRS when they earn their place, SOLID and readable code always. Today I work as a full stack engineer at Insurama, where I also review code and mentor the team.',
    'about.p3':
      'I bring the same discipline to AI. LLMs live behind ports: models are adapters, prompts are versioned, outputs are validated (Pydantic ⇄ Zod) and there is always a fake LLM for tests. And I own the whole path, from the schema to the VPS: Docker, Caddy and a server in Helsinki.',
    'projects.title': 'Building',
    'projects.note': '// what I’m working on',
    'stack.title': 'Stack',
    'stack.note': 'What I reach for.',
    'contact.title': 'Contact',
    'contact.note': 'The fastest way to reach me is email.',
    'footer.served': '// served from Helsinki',
    '404.title': 'Page not found',
    '404.body': 'Nothing lives at this address.',
    '404.back': 'Back to home',
  },
  es: {
    'meta.title': 'Adrián Marrero · Ingeniero de IA y de Software',
    'meta.description':
      'Ingeniero de IA y de software en Madrid. Backends que aguantan, IA que se gana su sitio. Fundador de Caiman Games.',
    'nav.home': 'Adrián Marrero, inicio',
    'nav.language': 'Idioma',
    'hero.role': 'Ingeniero de IA y de Software',
    'hero.lead':
      'Backends que aguantan. IA que se gana su sitio. Seis años diseñando APIs, microservicios y la arquitectura que los sostiene; ahora integro LLMs en ellos, con el mismo rigor.',
    'hero.portrait': 'Retrato en blanco y negro de Adrián Marrero',
    'about.title': 'Sobre mí',
    'about.note': '// +6 años construyendo software · Madrid',
    'about.p1':
      'Llevo más de seis años construyendo software de principio a fin: planificación, diseño, pruebas, despliegue y mantenimiento. Casi siempre en el backend: APIs REST, servicios en tiempo real para el sector bancario y arquitecturas de microservicios.',
    'about.p2':
      'Me importan los límites claros: arquitectura hexagonal, DDD y CQRS cuando aportan, SOLID y código legible siempre. Hoy trabajo como ingeniero full stack en Insurama, donde también reviso código y hago mentoría al equipo.',
    'about.p3':
      'Llevo la misma disciplina a la IA. Los LLMs viven detrás de puertos: los modelos son adaptadores, los prompts están versionados, las salidas se validan (Pydantic ⇄ Zod) y siempre hay un LLM falso para los tests. Y me encargo de todo el camino, del esquema al VPS: Docker, Caddy y un servidor en Helsinki.',
    'projects.title': 'En marcha',
    'projects.note': '// lo que estoy construyendo',
    'stack.title': 'Stack',
    'stack.note': 'Con lo que trabajo.',
    'contact.title': 'Contacto',
    'contact.note': 'La forma más rápida de hablar conmigo es el email.',
    'footer.served': '// servido desde Helsinki',
    '404.title': 'Página no encontrada',
    '404.body': 'No hay nada en esta dirección.',
    '404.back': 'Volver al inicio',
  },
} as const;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)['en']) => ui[lang][key];
}
