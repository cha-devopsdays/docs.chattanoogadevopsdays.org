// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devopsdays Chattanooga Docs Site',
  tagline: 'Everything you need to know about planning the Devopsdays Chattanooga conferences',
  url: 'https://docs.chattanoogadevopsdays.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  noIndex: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cha-devopsdays', // Usually your GitHub org/user name.
  projectName: 'chadevops.org', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        // The application ID provided by Algolia
        appId: '8ANZ6LYOKJ',

        // Public API key: it is safe to commit it
        apiKey: '739c1eb053427e8514a65474dad2853e',

        indexName: 'prod_chaDoD',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      navbar: {
        title: 'Devopsdays Chattanooga Docs Site',
        logo: {
          alt: 'Chattanooga Devopsdays Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://devopsdays.org/events/2022-chattanooga/welcome/',
            label: 'Devopsdays Site',
            position: 'left'},
          {
            href: 'https://github.com/cha-devopsdays/chadevops.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/welcome',
              },
              {
                label: 'Runbooks',
                to: '/docs/category/runbooks',
              },
              {
                label: 'Tools',
                to: '/docs/tools',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://chadevopsdays.slack.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/devopsdayscha/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chadevopsdays',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cha-devopsdays/chadevops.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devopsdays Chattanooga. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
