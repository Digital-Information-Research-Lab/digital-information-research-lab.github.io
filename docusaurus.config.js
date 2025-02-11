// @ts-check
// Import Prism.js themes for syntax highlighting
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Information Research Docs', // Title of the site
  tagline: 'Empirica Marketplace Simulation Documentation', // Short description
  favicon: 'img/favicon.ico', // Path to the site icon

  // URL where the site is hosted (CHANGE THIS TO YOUR GITHUB PAGES URL)
  url: 'https://digital-information-research-lab.github.io',

  // The base path under which the site is served.
  // Make sure it matches your repository name if using GitHub Pages
  baseUrl: '/digital-information-research-lab.github.io/',

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
    image: 'img/docusaurus-social-card.jpg', // Social media card image
    navbar: {
      title: 'Digital Research Docs',
      logo: {
        alt: 'Digital Research Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
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