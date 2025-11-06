// @ts-check
// Import Prism.js themes for syntax highlighting
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Information Research Lab', // Title of the site
  tagline: 'Behavioral Experiments in Digital Marketplaces', // Short description
  favicon: 'img/websitelogo.webp', // Path to the site icon

  url: 'https://truthmarket.com/',
  baseUrl: '/',

  // GitHub Repository Info
  organizationName: 'Digital-Information-Research-Lab', // GitHub Organization/User Name
  projectName: 'digital-information-research-lab.github.io', // Repository Name
  deploymentBranch: 'deploy', // The branch where GitHub Pages will deploy from

  // Handling broken links
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization (Only English for now)
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Presets: Controls the behavior of documentation, blog, and themes
  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs', // Path where documentation files are stored
          routeBasePath: 'docs', // URL path for docs (e.g., /docs/)
          sidebarPath: require.resolve('./sidebars.js'), // Path to sidebar configuration
          editUrl: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io/edit/documentation/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io/edit/documentation/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Path to custom styles
        },
      }),
    ],
  ],

  // Theme Configuration
  themeConfig: ({
    image: 'img/websitelogo.webp', // Social media card image
    navbar: {
      title: 'Platform Governance Research Lab',
      style: 'primary',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documentation'
        },
        {
          to: '/publications',
          position: 'right',
          label: 'Publications'
        },
        {
          to: '/people',
          position: 'right',
          label: 'People'
        },
        {
          to: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io',
          label: 'GitHub',
          position: 'right',
          target: '_self' },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Documentation', to: '/docs/intro' }],
        },
        {
          title: 'Publications',
          items: [
            { label: 'Free Speech & the Fake News Problem', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4414261' },
            { label: 'Improving §230, Preserving Democracy & Protecting Free Speech', href: 'https://cacm.acm.org/opinion/improving-section-230-preserving-democracy-and-protecting-free-speech/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Platform Governance Research Lab`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;