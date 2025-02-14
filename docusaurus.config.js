// @ts-check
// Import Prism.js themes for syntax highlighting
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Information Research Docs', // Title of the site
  tagline: 'Empirica Marketplace Simulation Documentation', // Short description
  favicon: 'img/favicon.png', // Path to the site icon

  url: 'https://truthmarket.com/',
  baseUrl: '/',

  // GitHub Repository Info
  organizationName: 'Digital-Information-Research-Lab', // GitHub Organization/User Name
  projectName: 'digital-information-research-lab.github.io', // Repository Name
  deploymentBranch: 'documentation', // The branch where GitHub Pages will deploy from

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
    image: 'img/favicon.png', // Social media card image
    navbar: {
      title: 'Platform Governance Research Docs',
      logo: {
        alt: 'Digital Research Lab Logo',
        src: 'img/favicon.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { href: 'https://truthmarket.com/', label: 'Website', position: 'left' },
        { href: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io', label: 'GitHub', position: 'right' },
      ],
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
            { label: 'Truth is Warranted: The Impact of Self-Certification on Misinformation', href: 'https://www.dropbox.com/scl/fi/nopf4dhw86fh5oej7rquw/Certifiably_True-The_Impact_Of_Self_Certification_On_Misinfo.pdf?rlkey=vp9rcew7hq98plmhh5asofy93&e=1&dl=0' },
            { label: 'Secure Account Recovery for a Privacy-Preserving Web Service', href: 'https://www.usenix.org/system/files/usenixsecurity24-little.pdf' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Digital Research Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;