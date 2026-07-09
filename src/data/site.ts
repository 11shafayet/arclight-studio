export const navItems = [
  { label: 'Home', href: '#home', number: '01' },
  { label: 'Projects', href: '#projects', number: '02' },
  { label: 'Contact', href: '#contact', number: '03' },
];

export const projectImages = [
  '/images/project-dashboard.svg',
  '/images/project-coach.svg',
  '/images/project-agency.svg',
  '/images/project-editor.svg',
  '/images/project-course.svg',
  '/images/project-commerce.svg',
];

export const projects = [
  'Harkn + Kith',
  'MKE Executive Coach',
  'Aevin Rico',
  'Okio Digital',
  'Innovation Futurs',
  'Dubai Comic Corner',
].map((title, index) => ({
  title,
  image: projectImages[index],
  number: String(index + 1).padStart(2, '0'),
}));

export const processSteps = [
  {
    title: 'Send the approved design',
    text: 'Share Figma, assets, references, notes, and timeline.',
  },
  {
    title: 'We review the project',
    text: 'We confirm scope, sections, interactions, and responsive states.',
  },
  {
    title: 'Development starts',
    text: 'The build moves into production with clean reusable components.',
  },
  {
    title: 'QA across devices',
    text: 'We test the pages across desktop, tablet, and mobile layouts.',
  },
];

export const faqs = [
  'Do you work with other CMS?',
  'Do you communicate with our client?',
  'What do you need to start?',
  'Do you build in WordPress or Framer?',
  'Are revisions included?',
  'Do you offer support after launch?',
  'Can we start with a small brief?',
];
