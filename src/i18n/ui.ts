export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const site = {
  name: 'Adrián Marrero',
  email: 'adrianmarrero18@gmail.com',
  studio: { name: 'Caiman Games', href: 'https://caimangames.com' },
  socials: [
    { label: 'GitHub', handle: 'adrianmarrero14', href: 'https://github.com/adrianmarrero14' },
    { label: 'LinkedIn', handle: 'in/adrianmarrero', href: 'https://www.linkedin.com/in/adrianmarrero' },
    { label: 'Bluesky', handle: '@adrian-marrero', href: 'https://bsky.app/profile/adrian-marrero.bsky.social' },
  ],
};

export const stack = [
  { group: { en: 'Backend', es: 'Backend' }, items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'TypeScript'] },
  { group: { en: 'Frontend', es: 'Frontend' }, items: ['Vue', 'Angular', 'React'] },
  { group: { en: 'Data & messaging', es: 'Datos y mensajería' }, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Kafka', 'RabbitMQ'] },
  { group: { en: 'Infrastructure', es: 'Infraestructura' }, items: ['Docker', 'Kubernetes', 'Linux', 'Caddy'] },
  { group: { en: 'Architecture', es: 'Arquitectura' }, items: ['Hexagonal', 'DDD', 'CQRS', { en: 'Microservices', es: 'Microservicios' }] },
] as const;

export const ui = {
  en: {
    'meta.title': 'Adrián Marrero · Software Engineer',
    'meta.description':
      'Software engineer focused on backend systems, APIs and software architecture. Founder of Caiman Games.',
    'nav.home': 'Adrián Marrero, home',
    'nav.language': 'Language',
    'hero.role': 'Software Engineer',
    'hero.lead':
      'I design and build backend systems: APIs, microservices and the architecture that holds them together. On the side, I make games at Caiman Games.',
    'hero.portrait': 'Black and white portrait of Adrián Marrero',
    'about.title': 'About',
    'about.note': '// 6+ years shipping software',
    'about.p1':
      'I have spent more than six years building software end to end, from planning and design to testing, deployment and maintenance. Most of it on the backend: REST APIs, real-time services for the banking sector and microservice architectures.',
    'about.p2':
      'I care about clear boundaries: hexagonal architecture, DDD and CQRS when they earn their place, SOLID and readable code always. Today I work as a full stack engineer at Insurama, where I also review code and mentor the team.',
    'stack.title': 'Stack',
    'stack.note': 'What I reach for.',
    'studio.note': 'Indie studio · est. 2026',
    'studio.body':
      'Caiman Games is my independent game studio: a place to make small, carefully crafted games. Same engineering rigor, different playground.',
    'studio.link': 'caimangames.com',
    'contact.title': 'Contact',
    'contact.note': 'The fastest way to reach me is email.',
    'footer.served': '// served from Helsinki',
    '404.title': 'Page not found',
    '404.body': 'Nothing lives at this address.',
    '404.back': 'Back to home',
  },
  es: {
    'meta.title': 'Adrián Marrero · Ingeniero de Software',
    'meta.description':
      'Ingeniero de software centrado en sistemas backend, APIs y arquitectura de software. Fundador de Caiman Games.',
    'nav.home': 'Adrián Marrero, inicio',
    'nav.language': 'Idioma',
    'hero.role': 'Ingeniero de Software',
    'hero.lead':
      'Diseño y construyo sistemas backend: APIs, microservicios y la arquitectura que los sostiene. En paralelo, hago juegos en Caiman Games.',
    'hero.portrait': 'Retrato en blanco y negro de Adrián Marrero',
    'about.title': 'Sobre mí',
    'about.note': '// +6 años construyendo software',
    'about.p1':
      'Llevo más de seis años construyendo software de principio a fin: planificación, diseño, pruebas, despliegue y mantenimiento. Casi siempre en el backend: APIs REST, servicios en tiempo real para el sector bancario y arquitecturas de microservicios.',
    'about.p2':
      'Me importan los límites claros: arquitectura hexagonal, DDD y CQRS cuando aportan, SOLID y código legible siempre. Hoy trabajo como ingeniero full stack en Insurama, donde también reviso código y hago mentoría al equipo.',
    'stack.title': 'Stack',
    'stack.note': 'Con lo que trabajo.',
    'studio.note': 'Estudio indie · desde 2026',
    'studio.body':
      'Caiman Games es mi estudio independiente de videojuegos: un sitio para hacer juegos pequeños y bien cuidados. El mismo rigor de ingeniería, otro terreno de juego.',
    'studio.link': 'caimangames.com',
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
