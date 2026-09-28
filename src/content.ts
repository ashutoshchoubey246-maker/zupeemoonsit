import type { IconName } from './components/Icon'

export const CONTACT_EMAIL = 'contact@jupeemoon.com'

export type Service = {
  id: string
  icon: IconName
  title: string
  copy: string
}

export const featuredServices = [
  {
    id: 'mobile',
    icon: 'mobile' as IconName,
    eyebrow: 'Mobile app development',
    title: 'Mobile apps your users keep coming back to.',
    copy: 'Native iOS and Android apps, or one cross-platform codebase with Flutter or React Native. We handle product design, engineering, store submission and everything after launch.',
    stack: ['iOS · Swift', 'Android · Kotlin', 'Flutter', 'React Native'],
    capabilities: [
      'Consumer & enterprise apps',
      'Offline-first data & sync',
      'Push notifications & deep links',
      'Payments & in-app purchases',
      'Maps, camera & device features',
      'App Store & Play Store launch',
    ],
  },
  {
    id: 'web',
    icon: 'web' as IconName,
    eyebrow: 'Web app development',
    title: 'Web applications engineered to scale.',
    copy: 'SaaS products, customer portals, dashboards and progressive web apps — fast, secure, accessible and built on an API-first architecture that grows with your business.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'],
    capabilities: [
      'SaaS & multi-tenant platforms',
      'Dashboards & analytics',
      'Customer & partner portals',
      'Progressive web apps (PWA)',
      'Role-based access & SSO',
      'SEO, performance & accessibility',
    ],
  },
]

export const services: Service[] = [
  {
    id: 'enterprise',
    icon: 'enterprise',
    title: 'Custom enterprise software',
    copy: 'ERP, CRM, HRMS and workflow systems tailored to how your business actually runs.',
  },
  {
    id: 'ai',
    icon: 'ai',
    title: 'AI & automation',
    copy: 'LLM assistants, chatbots, document processing and smart features that save your team hours.',
  },
  {
    id: 'avatars',
    icon: 'avatar',
    title: 'Voice AI & talking avatars',
    copy: 'Voice agents powered by Calito and lifelike talking avatars for support, sales, training and kiosks.',
  },
  {
    id: 'commerce',
    icon: 'cart',
    title: 'E-commerce & marketplaces',
    copy: 'Storefronts, multi-vendor marketplaces, booking and subscription platforms with secure payments.',
  },
  {
    id: 'desktop',
    icon: 'desktop',
    title: 'Desktop & internal tools',
    copy: 'Windows, macOS and Linux apps, back-office tools and integrations your operations rely on.',
  },
  {
    id: 'design',
    icon: 'design',
    title: 'UI/UX design & branding',
    copy: 'Research, wireframes, clickable prototypes, design systems and brand identity.',
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud, DevOps & APIs',
    copy: 'Cloud architecture on AWS, Azure or GCP, CI/CD pipelines, APIs and third-party integrations.',
  },
  {
    id: 'games',
    icon: 'game',
    title: 'Game development',
    copy: 'Casual and mid-core mobile games in Unity, with analytics, live-ops and monetization built in.',
  },
  {
    id: 'mvp',
    icon: 'rocket',
    title: 'MVP & prototyping',
    copy: 'Validate your idea with a focused, production-quality first release and real user feedback.',
  },
  {
    id: 'modernize',
    icon: 'refresh',
    title: 'Legacy modernization',
    copy: 'Migrate, refactor and consolidate existing systems without disrupting the business.',
  },
  {
    id: 'support',
    icon: 'shield',
    title: 'QA, maintenance & support',
    copy: 'Automated and manual testing, monitoring, updates and dependable support after launch.',
  },
]

export const products: { id: string; icon: IconName; badge: string; title: string; copy: string }[] = [
  {
    id: 'junocrm',
    icon: 'enterprise',
    badge: 'ERP · CRM',
    title: 'JunoCRM',
    copy: 'ERP and CRM in one system — sales, inventory, finance and operations on a single source of truth.',
  },
  {
    id: 'calito',
    icon: 'wave',
    badge: 'Voice AI',
    title: 'Calito AI',
    copy: 'Our voice AI model for natural, human-like conversations — the engine behind our voice agents and talking avatars.',
  },
  {
    id: 'kids',
    icon: 'education',
    badge: 'EdTech',
    title: 'Kids learning apps',
    copy: 'Age-aware lessons and playful progress tracking that parents can trust.',
  },
  {
    id: 'games',
    icon: 'game',
    badge: 'Games',
    title: 'Mobile games',
    copy: 'Casual and mid-core titles tuned for retention, fair monetization and joy.',
  },
  {
    id: 'home',
    icon: 'home',
    badge: 'Platform',
    title: 'Home services platform',
    copy: 'Booking, payments and pro marketplaces built end to end for service businesses.',
  },
  {
    id: 'marketing',
    icon: 'chart',
    badge: 'Growth',
    title: 'Marketing systems',
    copy: 'Campaign sites, analytics dashboards and growth automation in one stack.',
  },
]

export const voiceSolutions: {
  id: string
  icon: IconName
  eyebrow: string
  title: string
  copy: string
  points: string[]
  cta: string
}[] = [
  {
    id: 'calito',
    icon: 'wave',
    eyebrow: 'Jupeemoon product',
    title: 'Calito AI',
    copy: 'Calito is our voice AI model. It gives your product natural, human-like voice conversations that understand what people mean and reply in a friendly, on-brand way.',
    points: [
      'AI voice agents for calls, support and bookings',
      'Voice assistants inside your mobile and web apps',
      'Natural, human-like speech and listening',
      'Connects to your CRM, helpdesk and business data',
    ],
    cta: 'Request a Calito demo',
  },
  {
    id: 'avatars',
    icon: 'avatar',
    eyebrow: 'Solution',
    title: 'Talking avatar solutions',
    copy: 'Lifelike AI avatars that speak, listen and respond — a friendly face for your brand on websites, apps, kiosks and video.',
    points: [
      'Virtual receptionists and sales assistants',
      'AI tutors, trainers and onboarding guides',
      'Lip-synced presenter videos from a script',
      'Deploy on web, mobile, kiosks and smart displays',
    ],
    cta: 'Plan your avatar',
  },
]

export const practices: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: 'code',
    title: 'Clean, reviewed code',
    copy: 'Typed, linted and peer-reviewed on every pull request — built to be maintained, not rewritten.',
  },
  {
    icon: 'checkCircle',
    title: 'Automated testing',
    copy: 'Unit, integration and end-to-end tests on every change, plus manual QA before each release.',
  },
  {
    icon: 'pipeline',
    title: 'CI/CD from day one',
    copy: 'Automated builds, preview environments and repeatable deployments to staging and production.',
  },
  {
    icon: 'lock',
    title: 'Security by design',
    copy: 'OWASP-aligned practices, encrypted data, role-based access and regular dependency audits.',
  },
  {
    icon: 'calendar',
    title: 'Agile, transparent delivery',
    copy: 'Two-week sprints, weekly demos and a shared board — you always know what ships next.',
  },
  {
    icon: 'doc',
    title: 'Documentation & handover',
    copy: 'Architecture notes, API references and full source-code handover. No vendor lock-in.',
  },
]

export const commitments = [
  { value: '100%', label: 'Code & IP ownership transferred to you' },
  { value: 'NDA', label: 'Signed before we see your idea' },
  { value: 'Weekly', label: 'Demos and written progress reports' },
  { value: 'One team', label: 'From design to launch and support' },
]

export const steps = [
  {
    n: '01',
    title: 'Discovery & planning',
    copy: 'Workshops to define goals, users and scope — ending in a milestone plan and a clear estimate.',
  },
  {
    n: '02',
    title: 'UI/UX design',
    copy: 'Wireframes, clickable prototypes and a design system you approve before development starts.',
  },
  {
    n: '03',
    title: 'Agile development',
    copy: 'Two-week sprints with working software you can click through at the end of every sprint.',
  },
  {
    n: '04',
    title: 'Testing & QA',
    copy: 'Automated and manual testing across devices, browsers and real-world edge cases.',
  },
  {
    n: '05',
    title: 'Launch & deployment',
    copy: 'App Store, Play Store and cloud releases handled end to end, with rollback plans ready.',
  },
  {
    n: '06',
    title: 'Support & growth',
    copy: 'Monitoring, updates and new features as your product and your user base grow.',
  },
]

export const industries: { icon: IconName; title: string }[] = [
  { icon: 'heart', title: 'Healthcare' },
  { icon: 'education', title: 'Education' },
  { icon: 'bag', title: 'Retail & e-commerce' },
  { icon: 'truck', title: 'Logistics' },
  { icon: 'bank', title: 'Fintech' },
  { icon: 'home', title: 'Real estate' },
  { icon: 'wrench', title: 'Home services' },
  { icon: 'game', title: 'Media & gaming' },
]

export const stack = [
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Flutter', 'React Native', 'Expo'],
  },
  {
    id: 'web',
    label: 'Web',
    items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Vite', 'PWA'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Python', 'Django', 'FastAPI', 'Laravel', 'GraphQL', 'REST'],
  },
  {
    id: 'data',
    label: 'Data & AI',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'OpenAI', 'Claude', 'Gemini', 'LangChain'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    items: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    id: 'design',
    label: 'Design & games',
    items: ['Figma', 'Design systems', 'Prototyping', 'Unity', 'C#', 'Blender'],
  },
]

export const models = [
  {
    title: 'Fixed-scope project',
    fit: 'Well-defined products and MVPs',
    points: ['Fixed price and timeline', 'Milestone-based payments', 'Change requests handled transparently'],
  },
  {
    title: 'Dedicated team',
    fit: 'Long-term products and scaling startups',
    points: ['Developers, designers and QA on your roadmap', 'Direct communication with the team', 'Scale up or down month to month'],
  },
  {
    title: 'Time & materials',
    fit: 'Evolving scope and ongoing improvements',
    points: ['Pay only for the hours worked', 'Re-prioritize every sprint', 'Detailed timesheets and reports'],
  },
]

export const faqs = [
  {
    q: 'How much does it cost to build an app?',
    a: 'It depends on scope, platforms and integrations. After a short discovery call we send a written estimate broken down by milestone, so you can see exactly where the budget goes — and trim scope where it makes sense.',
  },
  {
    q: 'How long will my project take?',
    a: 'Timelines follow scope. With every estimate you get a milestone plan with dates, and you see working software at the end of each two-week sprint rather than waiting for a big reveal.',
  },
  {
    q: 'Native or cross-platform — which should I choose?',
    a: 'Cross-platform (Flutter or React Native) is usually the fastest, most cost-effective way to reach iOS and Android together. Native (Swift or Kotlin) is best when you need heavy device integration or maximum performance. We recommend one based on your product, not our preference.',
  },
  {
    q: 'What is Calito AI?',
    a: 'Calito is Jupeemoon’s own voice AI model. We use it to build voice agents, in-app voice assistants and talking avatars, integrated with your existing systems. Get in touch for a live demo.',
  },
  {
    q: 'Who owns the source code?',
    a: 'You do. Source code, designs, documentation and all intellectual property are transferred to you. We are happy to sign an NDA before you share any details.',
  },
  {
    q: 'Can you work with our existing system or team?',
    a: 'Yes. We regularly extend, modernize and integrate with existing products, and can work alongside your in-house developers, designers or product managers.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer maintenance and support plans covering monitoring, bug fixes, OS and dependency updates, and new features as your product grows.',
  },
]

export const timelines = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', 'Just exploring']
